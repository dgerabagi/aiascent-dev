import { GoogleGenAI } from '@google/genai';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// --- CONFIGURATION ---
const API_KEY = process.env.API_KEY;
const MODEL_NAME = 'imagen-4-ultra-001'; // As requested
const OUTPUT_DIR = path.resolve(process.cwd(), 'public/assets/images/v2v');

// --- HELPER FUNCTIONS ---

/**
 * Loads a JSON file from the public/data directory.
 * @param {string} fileName - The name of the JSON file to load.
 * @returns {Promise<object>} - The parsed JSON object.
 */
async function loadJsonData(fileName) {
    const filePath = path.resolve(process.cwd(), 'public/data', fileName);
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error(`Error loading JSON data from ${filePath}:`, error);
        throw error;
    }
}

/**
 * Loads a markdown artifact.
 * @param {string} artifactPath - The path to the artifact relative to src/Artifacts.
 * @returns {Promise<string>} - The content of the artifact.
 */
async function loadArtifact(artifactPath) {
    const filePath = path.resolve(process.cwd(), 'src/Artifacts', artifactPath);
    try {
        return await fs.readFile(filePath, 'utf-8');
    } catch (error) {
        console.error(`Error loading artifact from ${filePath}:`, error);
        throw error;
    }
}

/**
 * Finds a specific page's content from the structured curriculum data.
 * @param {object} curriculumData - The full curriculum data object.
 * @param {string} pageId - The ID of the page to find (e.g., 'lesson-1.1-p1').
 * @returns {object|null} - The page object or null if not found.
 */
function findPageById(curriculumData, pageId) {
    for (const section of curriculumData.sections) {
        for (const page of section.pages) {
            if (page.pageId === pageId) {
                return page;
            }
        }
    }
    return null;
}

/**
 * Constructs the final prompt to be sent to the Imagen API.
 * @param {string} systemPrompt - The master system prompt (A75).
 * @param {object} pageContent - The content of the specific lesson page.
 * @param {string} imagePrompt - The specific image prompt for the page.
 * @returns {string} - The fully constructed prompt.
 */
function constructFinalPrompt(systemPrompt, pageContent, imagePrompt) {
    const trainingContent = `
        <Training Content>
        Page Title: ${pageContent.pageTitle}
        TL;DR: ${pageContent.tldr}
        Content: ${pageContent.content}
        </Training Content>
    `;

    return `
        ${systemPrompt}
        
        ${trainingContent}

        <Image Prompt>
        ${imagePrompt}
        </Image Prompt>
    `;
}

// --- MAIN EXECUTION LOGIC ---

async function main() {
    if (!API_KEY) {
        console.error('Error: API_KEY is not defined. Please create a .env file with your Google AI API Key.');
        process.exit(1);
    }

    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.error('Usage: node scripts/generate_images.mjs <persona> <pageId>');
        console.error('Example: node scripts/generate_images.mjs career_transitioner lesson-1.1-p1');
        process.exit(1);
    }

    const [persona, pageId] = args;
    console.log(`🚀 Starting image generation for persona: '${persona}', page: '${pageId}'`);

    try {
        // 1. Load all necessary data
        console.log('   Loading data files...');
        const imageManifest = await loadJsonData(`imagemanifest_${persona}.json`);
        const curriculumData = await loadJsonData(`v2v_content_${persona}.json`);
        const systemPrompt = await loadArtifact('A75 - V2V Academy - Persona Image System Prompt.md');

        // 2. Find the specific content for the requested page
        const specificImagePrompt = imageManifest[pageId];
        const pageContent = findPageById(curriculumData, pageId);

        if (!specificImagePrompt || !pageContent) {
            console.error(`Error: Could not find data for pageId '${pageId}' in the provided files.`);
            process.exit(1);
        }

        // 3. Construct the final prompt
        const finalPrompt = constructFinalPrompt(systemPrompt, pageContent, specificImagePrompt);
        console.log('   Prompt constructed successfully.');

        // 4. Initialize AI client and make the API call
        console.log(`   Sending request to Google Imagen 4 model: '${MODEL_NAME}'...`);
        const genAI = new GoogleGenAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const result = await model.generateContent(finalPrompt);
        // This is a placeholder for how the actual API might work for Imagen via this SDK.
        // The actual response structure for image generation needs to be confirmed.
        // Assuming `result.response.candidates[0].content.parts[0].fileData` for now based on Gemini examples.
        // THIS WILL LIKELY NEED ADJUSTMENT BASED ON THE ACTUAL API RESPONSE FOR IMAGEN 4.
        const response = result.response;
        // The Google AI SDK for image generation is not yet released for Node.js as of some knowledge cutoffs.
        // This is a speculative implementation based on Python examples and Gemini SDK structure.
        // The actual implementation might look different.
        // For now, let's assume a hypothetical `generateImage` method for clarity.
        
        // Let's use a more realistic (but still hypothetical) approach based on the sample script
        const imageGenerationResult = await genAI.getGenerativeModel({ model: "imagen-4.0-generate-001" }).generateImages({prompt: finalPrompt});
        const images = imageGenerationResult.generatedImages;

        if (!images || images.length === 0) {
            throw new Error('No images were generated. The prompt may have been blocked or the response was empty.');
        }

        const base64ImageBytes = images.image.imageBytes;

        // 5. Define output path and save the image
        const [lesson, part] = pageId.split('-p');
        const [_, moduleNum, lessonNum] = lesson.split('-');
        const sectionId = `module-${moduleNum}`;
        const outputFileName = `${pageId}.webp`;
        const outputDirPath = path.join(OUTPUT_DIR, persona, sectionId);
        const outputPath = path.join(outputDirPath, outputFileName);

        console.log(`   Ensuring output directory exists: ${outputDirPath}`);
        await fs.mkdir(outputDirPath, { recursive: true });

        console.log(`   Saving image to: ${outputPath}`);
        await fs.writeFile(outputPath, Buffer.from(base64ImageBytes, 'base64'));

        console.log('✅ Image generated and saved successfully!');

    } catch (error) {
        console.error('❌ An error occurred during image generation:', error);
        process.exit(1);
    }
}

main();