import fs from 'fs/promises';
import path from 'path';

const V2V_IMAGE_BASE_PATH = path.resolve(process.cwd(), 'public/assets/images/v2v');
const V2V_DATA_BASE_PATH = path.resolve(process.cwd(), 'public/data');
const PERSONAS = ['career_transitioner', 'underequipped_graduate', 'young_precocious'];
const IMAGE_EXTENSIONS = ['.png', '.webp', '.jpg', '.jpeg'];

/**
 * Reads the content file for a given persona and returns a list of all page IDs.
 * @param {string} persona - The persona identifier.
 * @returns {Promise<string[]>} A list of all page IDs for the curriculum.
 */
async function getAllPageIdsForPersona(persona) {
    const filePath = path.join(V2V_DATA_BASE_PATH, `v2v_content_${persona}.json`);
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        const pageIds = data.sections.flatMap(section => section.pages.map(page => page.pageId));
        return pageIds;
    } catch (error) {
        console.error(`❌ Error reading or parsing content for persona '${persona}':`, error);
        return [];
    }
}

/**
 * Reads, updates, and writes the image manifest for a persona.
 * @param {string} persona - The persona identifier.
 * @param {Map<string, number>} imageCounts - A map of pageId to image count.
 */
async function updateImageManifest(persona, imageCounts) {
    const manifestPath = path.join(V2V_DATA_BASE_PATH, `imagemanifest_${persona}.json`);
    console.log(`\n   Updating manifest: ${path.basename(manifestPath)}`);
    try {
        const manifestContent = await fs.readFile(manifestPath, 'utf-8');
        const manifestData = JSON.parse(manifestContent);
        
        let updatedCount = 0;
        for (const [pageId, count] of imageCounts.entries()) {
            // Find the imageGroupId associated with this pageId
            const curriculumPath = path.join(V2V_DATA_BASE_PATH, `v2v_content_${persona}.json`);
            const curriculumContent = await fs.readFile(curriculumPath, 'utf-8');
            const curriculumData = JSON.parse(curriculumContent);
            
            let imageGroupId = null;
            for(const section of curriculumData.sections) {
                const page = section.pages.find(p => p.pageId === pageId);
                if (page && page.imageGroupIds && page.imageGroupIds.length > 0) {
                    imageGroupId = page.imageGroupIds;
                    break;
                }
            }

            if (imageGroupId && manifestData.imageGroups[imageGroupId]) {
                if (manifestData.imageGroups[imageGroupId].imageCount !== count) {
                    manifestData.imageGroups[imageGroupId].imageCount = count;
                    console.log(`     - Updated '${imageGroupId}' imageCount to ${count}`);
                    updatedCount++;
                }
            } else {
                console.warn(`     - ⚠️ Could not find imageGroup for pageId '${pageId}' in manifest.`);
            }
        }

        if (updatedCount > 0) {
            await fs.writeFile(manifestPath, JSON.stringify(manifestData, null, 2), 'utf-8');
            console.log(`   ✅ Successfully updated and saved manifest with ${updatedCount} changes.`);
        } else {
            console.log(`   - No changes needed for manifest.`);
        }

    } catch (error) {
        console.error(`   ❌ Error updating manifest for '${persona}':`, error);
    }
}


/**
 * Ensures directories exist and renames files within them.
 */
async function processImages() {
    console.log('🚀 Starting V2V image management script...');

    for (const persona of PERSONAS) {
        console.log(`\nProcessing persona: ${persona}`);
        const pageIds = await getAllPageIdsForPersona(persona);
        const imageCounts = new Map();

        if (pageIds.length === 0) {
            console.warn(`   ⚠️ No page IDs found for '${persona}'. Skipping.`);
            continue;
        }

        for (const pageId of pageIds) {
            const pageDir = path.join(V2V_IMAGE_BASE_PATH, persona, pageId);

            try {
                await fs.mkdir(pageDir, { recursive: true });
            } catch (error) {
                console.error(`   ❌ Error creating directory '${pageDir}':`, error);
                continue;
            }

            try {
                const files = await fs.readdir(pageDir);
                const imageFiles = files.filter(file => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()));

                const filesToRename = imageFiles.filter(file => !file.match(`^${pageId}-img-\\d+\\..+$`));
                const existingIndices = imageFiles
                    .map(file => file.match(`^${pageId}-img-(\\d+)\\..+$`))
                    .filter(Boolean)
                    .map(match => parseInt(match, 10));

                let maxIndex = existingIndices.length > 0 ? Math.max(...existingIndices) : 0;
                let finalImageCount = existingIndices.length;

                if (filesToRename.length > 0) {
                    console.log(`   - Renaming ${filesToRename.length} file(s) in '${path.relative(process.cwd(), pageDir)}'`);
                    filesToRename.sort();

                    for (const file of filesToRename) {
                        maxIndex++;
                        finalImageCount++;
                        const oldPath = path.join(pageDir, file);
                        const newName = `${pageId}-img-${maxIndex}${path.extname(file)}`;
                        const newPath = path.join(pageDir, newName);
                        await fs.rename(oldPath, newPath);
                        console.log(`     ✅ Renamed '${file}' to '${newName}'`);
                    }
                }
                
                imageCounts.set(pageId, finalImageCount);

            } catch (error) {
                console.error(`   ❌ Error processing files in '${pageDir}':`, error);
            }
        }
        // After processing all pages for a persona, update its manifest
        await updateImageManifest(persona, imageCounts);
    }

    console.log('\n🎉 Image management script finished.');
}

processImages();