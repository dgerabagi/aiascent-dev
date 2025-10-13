#!/usr/bin/env node

/**
 * convert_images_to_webp.js
 *
 * This script recursively finds all .png files in the specified directory,
 * converts them to high-quality .webp files using the 'sharp' library,
 * and then deletes the original .png files.
 *
 * This is intended to significantly reduce the repository size.
 *
 * Usage:
 * 1. Install sharp: `npm install --save-dev sharp`
 * 2. Run from the project root: `node scripts/convert_images_to_webp.js`
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const TARGET_DIRECTORY = path.resolve(__dirname, '..', 'public/images/report-assets');

async function findPngFiles(dir) {
    let results = [];
    const list = await fs.readdir(dir);
    for (const file of list) {
        const filePath = path.resolve(dir, file);
        const stat = await fs.stat(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(await findPngFiles(filePath));
        } else if (path.extname(filePath).toLowerCase() === '.png') {
            results.push(filePath);
        }
    }
    return results;
}

async function convertImageToWebP(filePath) {
    const logPrefix = `[CONVERT:${path.basename(filePath)}]`;
    try {
        const webpPath = filePath.replace(/\.png$/i, '.webp');
        
        console.log(`${logPrefix} Converting to WebP...`);

        // Use sharp for high-quality conversion
        await sharp(filePath)
            .webp({ 
                quality: 90, // High quality, visually lossless for most cases
                lossless: false, // Use lossy for better compression on photographic images
                effort: 6, // Max effort for best compression
            })
            .toFile(webpPath);
        
        const originalStats = await fs.stat(filePath);
        const newStats = await fs.stat(webpPath);
        const reduction = ((originalStats.size - newStats.size) / originalStats.size) * 100;

        console.log(`${logPrefix} SUCCESS! New file: ${path.basename(webpPath)}`);
        console.log(`${logPrefix}   Original: ${(originalStats.size / 1024).toFixed(2)} KB`);
        console.log(`${logPrefix}   WebP:     ${(newStats.size / 1024).toFixed(2)} KB`);
        console.log(`${logPrefix}   Reduction: ${reduction.toFixed(2)}%`);

        // Delete the original PNG file
        await fs.unlink(filePath);
        console.log(`${logPrefix} Deleted original PNG file.`);

        return { success: true, reduction: originalStats.size - newStats.size };
    } catch (error) {
        console.error(`${logPrefix} FAILED to convert image.`, error);
        return { success: false, reduction: 0 };
    }
}

async function main() {
    console.log(`Starting WebP conversion process in: ${TARGET_DIRECTORY}\n`);

    const pngFiles = await findPngFiles(TARGET_DIRECTORY);

    if (pngFiles.length === 0) {
        console.log('No .png files found to convert. Exiting.');
        return;
    }

    console.log(`Found ${pngFiles.length} PNG files to process.\n`);

    let successCount = 0;
    let totalReductionBytes = 0;

    for (const file of pngFiles) {
        const result = await convertImageToWebP(file);
        if (result.success) {
            successCount++;
            totalReductionBytes += result.reduction;
        }
        console.log('---');
    }

    console.log('\nConversion process finished!');
    console.log(`Successfully converted ${successCount} of ${pngFiles.length} files.`);
    console.log(`Total size reduction: ${(totalReductionBytes / (1024 * 1024)).toFixed(2)} MB`);
    console.log('\nIMPORTANT: Remember to update `imageManifest.json` to use ".webp" extensions!');
}

main().catch(console.error);