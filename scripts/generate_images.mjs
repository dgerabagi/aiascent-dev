// scripts/generate_images.mjs
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai'; // ✅ New SDK class name

dotenv.config();

// --- USER CONFIGURATION ---
const CONFIG = {
  // 'career_transitioner', 'underequipped_graduate', or 'young_precocious'
  persona: 'career_transitioner',
  // Page to generate for
  pageId: 'lesson-1.1-p1',
  // How many images to generate for this page (1–4 supported by Imagen)
  imageCount: 2,
  // To run a full module (1–4), uncomment and set this, it will make 1 image per page.
  // moduleNumber: 1,
};
// --- END CONFIG ---

// Accept GEMINI_API_KEY or GOOGLE_API_KEY (new SDK) and fall back to API_KEY (your current var)
const API_KEY = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY ?? process.env.API_KEY;

// Use the current Imagen model name from the GenAI SDK docs
// Tip: 'imagen-4.0-generate-001' supports numberOfImages/aspectRatio/imageSize
const MODEL_NAME = 'imagen-4.0-generate-001';

const OUTPUT_DIR_BASE = path.resolve(process.cwd(), 'public');

// --- HELPERS ---
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
    const foundPage = section.pages.find((p) => p.pageId === pageId);
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

  // 1) Load all necessary data
  const manifestPath = path.resolve(process.cwd(), 'public/data', `imagemanifest_${persona}.json`);
  const curriculumPath = path.resolve(process.cwd(), 'public/data', `v2v_content_${persona}.json`);
  const systemPromptPath = path.resolve(process.cwd(), 'src/Artifacts', 'A75 - V2V Academy - Persona Image System Prompt.md');

  const imageManifest = await loadJsonData(manifestPath);
  const curriculumData = await loadJsonData(curriculumPath);
  const systemPrompt = await loadArtifact(systemPromptPath);

  // 2) Page + image group
  const pageContent = findPageById(curriculumData, pageId);
  if (!pageContent) {
    throw new Error(`Could not find page content for pageId '${pageId}'.`);
  }

  const imageGroupId = pageContent.imageGroupIds;
  if (!imageGroupId) throw new Error(`No imageGroupId found for pageId '${pageId}'.`);

  const groupMeta = imageManifest.imageGroups[imageGroupId];
  if (!groupMeta) throw new Error(`Could not find image group metadata for groupId '${imageGroupId}'.`);

  // 3) Prompt (single string for Imagen)
  const finalPrompt = constructFinalPrompt(systemPrompt, pageContent, groupMeta.prompt);

  // 4) Initialize client (new GenAI SDK)
  const ai = new GoogleGenAI({ apiKey: API_KEY });

  // 5) Generate images (one call returns multiple images)
  console.log(`   Calling Imagen model '${MODEL_NAME}' for ${imageCount} image(s)...`);
  const response = await ai.models.generateImages({
    model: MODEL_NAME,
    prompt: finalPrompt,
    // You can add aspectRatio: "16:9" or imageSize: "1K"|"2K" if desired
    config: {
      numberOfImages: Math.max(1, Math.min(4, Number(imageCount) || 1)),
    },
  });

  if (!response?.generatedImages?.length) {
    console.error('API Response (no images):', JSON.stringify(response, null, 2));
    throw new Error('No images returned by the API.');
  }

  // 6) Persist outputs
  const outputDirPath = path.join(
    OUTPUT_DIR_BASE,
    groupMeta.path.replace('/assets/images/v2v/', 'assets/images/v2v/')
  );
  await fs.mkdir(outputDirPath, { recursive: true });

  let saved = 0;
  for (let i = 0; i < response.generatedImages.length; i++) {
    const img = response.generatedImages[i];
    const bytes = img?.image?.imageBytes;
    if (!bytes) {
      console.warn(`   ⚠️ Skipping image ${i + 1}: missing image bytes`);
      continue;
    }
    const outputFileName = `${groupMeta.baseFileName}${i + 1}${groupMeta.fileExtension}`;
    const outputPath = path.join(outputDirPath, outputFileName);

    console.log(`   Saving image ${i + 1} → ${outputPath}`);
    await fs.writeFile(outputPath, Buffer.from(bytes, 'base64'));
    saved++;
  }

  if (saved === 0) {
    throw new Error('Generation returned images but none had image bytes to save.');
  }

  console.log(`✅ Saved ${saved}/${response.generatedImages.length} image(s) for '${pageId}'.`);
}

// --- MAIN ---
async function main() {
  if (!API_KEY) {
    console.error('Error: API key not found. Set GEMINI_API_KEY (or GOOGLE_API_KEY / API_KEY) in your .env');
    process.exit(1);
  }

  const { persona, pageId, imageCount, moduleNumber } = CONFIG;

  try {
    if (moduleNumber && [1, 2, 3, 4].includes(moduleNumber)) {
      console.log(`🚀 Starting BATCH image generation for persona: '${persona}', module: ${moduleNumber}`);

      const curriculumPath = path.resolve(process.cwd(), 'public/data', `v2v_content_${persona}.json`);
      const curriculumData = await loadJsonData(curriculumPath);
      const sectionId = `module-${moduleNumber}`;
      const section = curriculumData.sections.find((s) => s.sectionId === sectionId);

      if (!section) throw new Error(`Could not find module ${moduleNumber} for persona '${persona}'.`);

      const pageIds = section.pages.map((p) => p.pageId);
      console.log(`   Found ${pageIds.length} pages to process for Module ${moduleNumber}.`);

      for (const id of pageIds) {
        await generateAndSaveImages(persona, id, 1); // 1 image per page in batch mode
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      console.log(`\n🎉 Batch generation for Module ${moduleNumber} complete!`);
    } else {
      if (!persona || !pageId) throw new Error('`persona` and `pageId` must be set in the CONFIG object.');
      if (isNaN(imageCount) || imageCount < 1) throw new Error('Invalid imageCount. Must be a positive number.');
      await generateAndSaveImages(persona, pageId, imageCount);
    }
  } catch (error) {
    console.error('❌ An error occurred during image generation:', error?.message ?? error);
    process.exit(1);
  }
}

main();
