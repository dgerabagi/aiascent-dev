import fs from 'fs/promises';
import path from 'path';

const V2V_IMAGE_BASE_PATH = path.resolve(process.cwd(), 'public/assets/images/v2v');
const V2V_CONTENT_BASE_PATH = path.resolve(process.cwd(), 'public/data');
const PERSONAS = ['career_transitioner', 'underequipped_graduate', 'young_precocious'];
const IMAGE_EXTENSIONS = ['.png', '.webp', '.jpg', '.jpeg'];

/**
 * Reads the content file for a given persona and returns a list of all page IDs.
 * @param {string} persona - The persona identifier.
 * @returns {Promise<string[]>} A list of all page IDs for the curriculum.
 */
async function getAllPageIdsForPersona(persona) {
    const filePath = path.join(V2V_CONTENT_BASE_PATH, `v2v_content_${persona}.json`);
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
 * Ensures directories exist and renames files within them.
 */
async function processImages() {
    console.log('🚀 Starting V2V image management script...');

    for (const persona of PERSONAS) {
        console.log(`\nProcessing persona: ${persona}`);
        const pageIds = await getAllPageIdsForPersona(persona);

        if (pageIds.length === 0) {
            console.warn(`   ⚠️ No page IDs found for '${persona}'. Skipping.`);
            continue;
        }

        for (const pageId of pageIds) {
            const pageDir = path.join(V2V_IMAGE_BASE_PATH, persona, pageId);

            // 1. Create the directory if it doesn't exist
            try {
                await fs.mkdir(pageDir, { recursive: true });
            } catch (error) {
                console.error(`   ❌ Error creating directory '${pageDir}':`, error);
                continue; // Skip to next pageId if directory creation fails
            }

            // 2. Read, filter, and rename files
            try {
                const files = await fs.readdir(pageDir);
                const imageFiles = files.filter(file => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()));

                const correctlyNamedFiles = new Set();
                const filesToRename = [];
                let maxIndex = 0;

                const renameRegex = new RegExp(`^${pageId}-img-(\\d+)\\..+$`);

                for (const file of imageFiles) {
                    const match = file.match(renameRegex);
                    if (match) {
                        correctlyNamedFiles.add(file);
                        const index = parseInt(match, 10);
                        if (index > maxIndex) {
                            maxIndex = index;
                        }
                    } else {
                        filesToRename.push(file);
                    }
                }

                if (filesToRename.length > 0) {
                    console.log(`   - Renaming ${filesToRename.length} file(s) in '${path.relative(process.cwd(), pageDir)}'`);
                    
                    // Sort to ensure a consistent renaming order
                    filesToRename.sort();

                    for (const file of filesToRename) {
                        maxIndex++;
                        const oldPath = path.join(pageDir, file);
                        const newName = `${pageId}-img-${maxIndex}${path.extname(file)}`;
                        const newPath = path.join(pageDir, newName);

                        try {
                            await fs.rename(oldPath, newPath);
                            console.log(`     ✅ Renamed '${file}' to '${newName}'`);
                        } catch (renameError) {
                            console.error(`     ❌ Failed to rename '${file}':`, renameError);
                        }
                    }
                }

            } catch (error) {
                console.error(`   ❌ Error processing files in '${pageDir}':`, error);
            }
        }
    }

    console.log('\n🎉 Image management script finished.');
}

processImages();