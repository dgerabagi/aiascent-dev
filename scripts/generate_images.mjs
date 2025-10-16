import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// --- CONFIGURATION ---
const API_KEY = process.env.API_KEY;
const MODEL_NAME = 'imagen-3'; // Using Imagen 3 as specified
const OUTPUT_DIR_BASE = path.resolve(process.cwd(), 'public');

// --- HELPER FUNCTIONS ---

async function loadJsonData(filePath) {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error(`Error loading JSON data from ${filePath}:`, error);
        throw error;
    }
}

async function loadArtifact(artifactPath) {
    try {
        return await fs.readFile(artifactPath, 'utf-8');
    } catch (error) {
        console.error(`Error loading artifact from ${artifactPath}:`, error);
        throw error;
    }
}

function findPageById(curriculumData, pageId) {
    for (const section of curriculumData.sections) {
        const foundPage = section.pages.find(p => p.pageId === pageId);
        if (foundPage) return foundPage;
    }
    return null;
}

function constructFinalPrompt(systemPrompt, pageContent, imagePrompt) {
    const trainingContent = `
        <Training Content>
        Page Title: ${pageContent.pageTitle}
        TL;DR: ${pageContent.tldr}
        Content: ${pageContent.content}
        </Training Content>
    `;

    return `${systemPrompt}\n\n${trainingContent}\n\n<Image Prompt>\n${imagePrompt}\n</Image Prompt>`;
}

// --- MAIN EXECUTION LOGIC ---

async function main() {
    if (!API_KEY) {
        console.error('Error: API_KEY is not defined. Please check your .env file.');
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
        const manifestPath = path.resolve(process.cwd(), 'public/data', `imagemanifest_${persona}.json`);
        const curriculumPath = path.resolve(process.cwd(), 'public/data', `v2v_content_${persona}.json`);
        const systemPromptPath = path.resolve(process.cwd(), 'src/Artifacts', 'A75 - V2V Academy - Persona Image System Prompt.md');

        const imageManifest = await loadJsonData(manifestPath);
        const curriculumData = await loadJsonData(curriculumPath);
        const systemPrompt = await loadArtifact(systemPromptPath);

        // 2. Find the specific content for the requested page
        const pageContent = findPageById(curriculumData, pageId);
        if (!pageContent) {
            throw new Error(`Could not find page content for pageId '${pageId}'.`);
        }

        const imageGroupId = pageContent.imageGroupIds;
        if (!imageGroupId) {
            throw new Error(`No imageGroupId found for pageId '${pageId}'.`);
        }

        const groupMeta = imageManifest.imageGroups[imageGroupId];
        if (!groupMeta) {
            throw new Error(`Could not find image group metadata for groupId '${imageGroupId}'.`);
        }

        // 3. Construct the final prompt
        const finalPrompt = constructFinalPrompt(systemPrompt, pageContent, groupMeta.prompt);
        console.log('   Prompt constructed successfully.');

        // 4. Initialize AI client and make the API call
        console.log(`   Sending request to Google AI model: '${MODEL_NAME}'...`);
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
        
        const result = await model.generateContent(finalPrompt);
        const response = result.response;
        
        // This part is speculative based on Gemini API structure for images.
        // It assumes the response contains base64-encoded image data.
        // You MUST adjust this based on the actual Imagen 3 API response structure.
        const base64ImageData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

        if (!base64ImageData) {
            console.error('API Response:', JSON.stringify(response, null, 2));
            throw new Error('No image data found in the API response. The structure might be different than expected.');
        }

        // 5. Define output path and save the image
        const outputDirPath = path.join(OUTPUT_DIR_BASE, imageManifest.basePath, groupMeta.path);
        const outputFileName = `${groupMeta.baseFileName}1${groupMeta.fileExtension}`;
        const outputPath = path.join(outputDirPath, outputFileName);

        console.log(`   Ensuring output directory exists: ${outputDirPath}`);
        await fs.mkdir(outputDirPath, { recursive: true });

        console.log(`   Saving image to: ${outputPath}`);
        await fs.writeFile(outputPath, Buffer.from(base64ImageData, 'base64'));

        console.log('✅ Image generated and saved successfully!');

    } catch (error) {
        console.error('❌ An error occurred during image generation:', error);
        process.exit(1);
    }
}

main();