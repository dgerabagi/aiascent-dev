import { GoogleGenerativeAI } from '@google/genai';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// --- USER CONFIGURATION ---
// EDIT THE VALUES IN THIS OBJECT TO CONTROL THE SCRIPT
const CONFIG = {
    // Set the persona: 'career_transitioner', 'underequipped_graduate', or 'young_precocious'
    persona: 'career_transitioner',

    // Set the pageId you want to generate images for (e.g., 'lesson-1.1-p1')
    pageId: 'lesson-1.1-p1',

    // Set the number of images you want to generate for this page
    imageCount: 1,

    // To run for a whole module, set moduleNumber (1-4) and uncomment it.
    // This will generate 1 image for every page in the module.
    // moduleNumber: 1, 
};
// --- END OF CONFIGURATION ---

const API_KEY = process.env.API_KEY;
const MODEL_NAME = 'imagen-3'; 
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

async function generateAndSaveImages(persona, pageId, imageCount = 1) {
    console.log(`🚀 Processing page: '${pageId}' for persona: '${persona}' (${imageCount} image(s))`);

    // 1. Load all necessary data
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

    const imageGroupId = pageContent.imageGroupIds; // Assuming one group per page
    if (!imageGroupId) {
        throw new Error(`No imageGroupId found for pageId '${pageId}'.`);
    }

    const groupMeta = imageManifest.imageGroups[imageGroupId];
    if (!groupMeta) {
        throw new Error(`Could not find image group metadata for groupId '${imageGroupId}'.`);
    }

    // 3. Construct the final prompt
    const finalPrompt = constructFinalPrompt(systemPrompt, pageContent, groupMeta.prompt);

    // 4. Initialize AI client
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    // 5. Loop to generate the requested number of images
    for (let i = 1; i <= imageCount; i++) {
        console.log(`   Generating image ${i} of ${imageCount} for '${pageId}'...`);
        
        try {
            const result = await model.generateContent(finalPrompt);
            const response = result.response;
            
            const base64ImageData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    
            if (!base64ImageData) {
                console.error('API Response:', JSON.stringify(response, null, 2));
                throw new Error(`No image data found in the API response for image ${i}.`);
            }
    
            // 6. Define output path and save the image, using the loop index
            const outputDirPath = path.join(OUTPUT_DIR_BASE, groupMeta.path.replace('/assets/images/v2v/', 'assets/images/v2v/'));
            const outputFileName = `${groupMeta.baseFileName}${i}${groupMeta.fileExtension}`;
            const outputPath = path.join(outputDirPath, outputFileName);
    
            await fs.mkdir(outputDirPath, { recursive: true });
    
            console.log(`   Saving image to: ${outputPath}`);
            await fs.writeFile(outputPath, Buffer.from(base64ImageData, 'base64'));
    
            console.log(`   ✅ Image ${i} of ${imageCount} for '${pageId}' saved successfully!`);

        } catch (error) {
            console.error('❌ An error occurred during image generation:', error);
        }

    }
    console.log(`✅ All ${imageCount} images for '${pageId}' saved successfully!`);
}


// --- MAIN EXECUTION LOGIC ---

async function main() {
    if (!API_KEY) {
        console.error('Error: API_KEY is not defined. Please check your .env file.');
        process.exit(1);
    }

    const { persona, pageId, imageCount, moduleNumber } = CONFIG;

    try {
        if (moduleNumber && [1, 2, 3, 4].includes(moduleNumber)) {
            console.log(`🚀 Starting BATCH image generation for persona: '${persona}', module: ${moduleNumber}`);
            
            const curriculumPath = path.resolve(process.cwd(), 'public/data', `v2v_content_${persona}.json`);
            const curriculumData = await loadJsonData(curriculumPath);
            const sectionId = `module-${moduleNumber}`;
            const section = curriculumData.sections.find(s => s.sectionId === sectionId);

            if (!section) {
                throw new Error(`Could not find module ${moduleNumber} for persona '${persona}'.`);
            }

            const pageIds = section.pages.map(p => p.pageId);
            console.log(`   Found ${pageIds.length} pages to process for Module ${moduleNumber}.`);

            for (const id of pageIds) {
                await generateAndSaveImages(persona, id, 1); // Generate 1 image per page in module mode
                await new Promise(resolve => setTimeout(resolve, 1000)); 
            }
            console.log(`\n🎉 Batch generation for Module ${moduleNumber} complete!`);

        } else {
            if (!persona || !pageId) {
                throw new Error('`persona` and `pageId` must be set in the CONFIG object.');
            }
            if (isNaN(imageCount) || imageCount < 1) {
                throw new Error('Invalid imageCount. Must be a positive number.');
            }
            await generateAndSaveImages(persona, pageId, imageCount);
        }
    } catch (error) {
        console.error('❌ An error occurred during image generation:', error.message);
        process.exit(1);
    }
}

main();