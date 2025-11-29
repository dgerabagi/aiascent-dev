// scripts/scaffold_anguilla_images.mjs
import fs from 'fs/promises';
import path from 'path';

const MANIFEST_PATH = path.resolve(process.cwd(), 'public/data/anguilla_manifest.json');
const BASE_OUTPUT_DIR = path.resolve(process.cwd(), 'public/assets/images/anguilla-presentation');

async function scaffoldImages() {
    console.log('🚀 Starting Anguilla Image Scaffolding...');

    try {
        // 1. Read Manifest
        const manifestContent = await fs.readFile(MANIFEST_PATH, 'utf-8');
        const manifest = JSON.parse(manifestContent);

        console.log(`   Found ${Object.keys(manifest.imageGroups).length} image groups.`);

        // 2. Iterate and Create
        for (const [groupId, group] of Object.entries(manifest.imageGroups)) {
            // Construct full directory path: public/assets/images/anguilla-presentation/{group.path}
            // Note: group.path usually includes the trailing slash, e.g., "01-cover/"
            const dirPath = path.join(BASE_OUTPUT_DIR, group.path);

            // Create Directory
            await fs.mkdir(dirPath, { recursive: true });
            console.log(`   📁 Created: ${dirPath}`);

            // Create prompt.md
            const promptFilePath = path.join(dirPath, 'prompt.md');
            const promptContent = `# Image Prompt for ${groupId}\n\n${group.prompt}`;
            
            // Only write if it doesn't exist to avoid overwriting manual edits (though for scaffolding, overwriting is usually fine)
            await fs.writeFile(promptFilePath, promptContent, 'utf-8');
            console.log(`      📝 Wrote prompt.md`);
        }

        console.log('\n✅ Scaffolding Complete. You can now generate images into these directories.');

    } catch (error) {
        console.error('❌ Error scaffolding images:', error);
    }
}

scaffoldImages();