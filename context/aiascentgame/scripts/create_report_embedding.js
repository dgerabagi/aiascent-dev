#!/usr/bin/env node

/**
 * create_report_embedding.js
 *
 * This script generates a FAISS vector index and a JSON chunk map from a single,
 * large text file. It's designed to create the knowledge base for the
 * "Ask @Ascentia" feature in the Report Delivery System (RDS).
 *
 * Usage:
 * 1. Ensure your local embedding model is running (e.g., via LM Studio).
 * 2. Run the script from the project root, providing the path to your source text file:
 *    node scripts/create_report_embedding.js C:/path/to/your/flattened_report.txt
 *
 * The script will output `report_faiss.index` and `report_chunks.json` in the project root.
 * These files should then be moved to the `./public` directory.
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { Index, IndexFlatL2 } = require('faiss-node');

const FAISS_INDEX_FILE = 'report_faiss.index';
const CHUNKS_FILE = 'report_chunks.json';
const EMBEDDING_API_URL = 'http://127.0.0.1:1234/v1/embeddings';
const EMBEDDING_MODEL = 'text-embedding-granite-embedding-278m-multilingual';

const CHUNK_SIZE = 1750; // characters
const CHUNK_OVERLAP = 175; // characters

/**
 * Splits text into overlapping chunks.
 */
function chunkText(text, size, overlap) {
  const chunks = [];
  let startIndex = 0;
  while (startIndex < text.length) {
    const endIndex = startIndex + size;
    chunks.push(text.substring(startIndex, endIndex));
    startIndex += size - overlap;
  }
  return chunks;
}

/**
 * Gets a vector embedding for a single text chunk from the local API.
 */
async function getEmbedding(text) {
  try {
    const response = await axios.post(EMBEDDING_API_URL, {
      model: EMBEDDING_MODEL,
      input: text,
    });
    if (response.data?.data?.[0]?.embedding) {
      return response.data.data[0].embedding;
    }
    console.error('  [ERROR] Invalid embedding response structure:', response.data);
    return null;
  } catch (error) {
    const errorMessage = error.response ? `${error.response.status} ${error.response.statusText}` : error.message;
    console.error(`  [ERROR] Failed to get embedding for chunk. Status: ${errorMessage}. Text: "${text.substring(0, 50)}..."`);
    return null;
  }
}

async function createReportEmbedding() {
  const inputFile = process.argv[2];
  if (!inputFile) {
    console.error('\n[FATAL ERROR] Please provide the path to the source text file as an argument.');
    console.error('Usage: node scripts/create_report_embedding.js C:/path/to/your/file.txt\n');
    process.exit(1);
  }

  console.log(`Starting RDS embedding generation for: ${inputFile}`);

  // 1. Read and chunk the source file
  let fileContent;
  try {
    fileContent = fs.readFileSync(inputFile, 'utf-8');
  } catch (error) {
    console.error(`\n[FATAL ERROR] Could not read source file: ${error.message}`);
    process.exit(1);
  }

  const textChunks = chunkText(fileContent, CHUNK_SIZE, CHUNK_OVERLAP);
  const allChunks = textChunks.map(chunk => ({ id: 'report_source', chunk }));
  console.log(`Created a total of ${allChunks.length} text chunks.`);

  // 2. Generate embeddings for all chunks
  console.log('Generating embeddings... (This may take a while)');
  const embeddings = [];
  let successfulChunks = [];
  let failedCount = 0;
  let embeddingDimension = -1;

  for (let i = 0; i < allChunks.length; i++) {
    const chunkData = allChunks[i];
    const embedding = await getEmbedding(chunkData.chunk);
    if (embedding) {
      if (embeddingDimension === -1) {
        embeddingDimension = embedding.length;
        console.log(`Detected embedding dimension: ${embeddingDimension}`);
      }
      if (embedding.length !== embeddingDimension) {
        console.error(`\n[FATAL ERROR] Inconsistent embedding dimension! Expected ${embeddingDimension}, but got ${embedding.length} for chunk ${i}. Aborting.`);
        process.exit(1);
      }
      embeddings.push(embedding);
      successfulChunks.push(chunkData);
    } else {
      failedCount++;
    }
    process.stdout.write(`\r  Processed ${i + 1} of ${allChunks.length} chunks...`);
  }
  console.log('\nEmbedding generation complete.');

  if (failedCount > 0) {
    console.warn(`  [WARN] Failed to generate embeddings for ${failedCount} chunks. They will be excluded.`);
  }
  if (embeddings.length === 0) {
    console.error('No embeddings were generated. Cannot create FAISS index. Aborting.');
    return;
  }

  // 3. Build and save FAISS index
  try {
    console.log(`Building FAISS index with ${embeddings.length} vectors of dimension ${embeddingDimension}...`);
    const index = new IndexFlatL2(embeddingDimension);
    index.add(embeddings.flat());
    
    console.log(`Saving FAISS index to ${FAISS_INDEX_FILE}...`);
    index.write(FAISS_INDEX_FILE);

    console.log(`Saving ${successfulChunks.length} text chunks to ${CHUNKS_FILE}...`);
    fs.writeFileSync(CHUNKS_FILE, JSON.stringify(successfulChunks, null, 2), 'utf-8');

    console.log(`\nProcess complete. Report KB created successfully.`);
    console.log(`Move '${FAISS_INDEX_FILE}' and '${CHUNKS_FILE}' to the ./public directory.`);
  } catch (error) {
    console.error('\nAn error occurred while building or saving the FAISS index:', error);
  }
}

createReportEmbedding();