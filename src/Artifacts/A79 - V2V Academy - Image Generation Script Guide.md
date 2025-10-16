# Artifact A79: V2V Academy - Image Generation Script Guide
# Date Created: C81
# Author: AI Model & Curator
# Updated on: C82 (Add image_count argument and update file naming)

- **Key/Value for A0:**
- **Description:** A comprehensive guide for using the `generate_images.mjs` script to automate the creation of visual assets for the V2V Academy curriculum.
- **Tags:** v2v, curriculum, images, script, automation, guide, tooling

## 1. Overview & Purpose

This document provides instructions for using the `scripts/generate_images.mjs` script, a powerful automation tool designed to generate all the visual assets for the V2V Academy curriculum.

### A Note on "On-the-Fly Tooling"

This script is a prime example of the "On-the-Fly Tooling" concept taught in the V2V Academy. The manual process of generating ~1,500+ (10+ per page) unique, persona-aligned images would typically take weeks of creative work. By leveraging the structured data in our artifacts and a powerful image generation API, this script compresses that entire workflow into a process that can be completed in a single evening. It is a tangible demonstration of how a well-curated data environment enables the creation of tools that provide a massive acceleration in productivity.

## 2. Prerequisites

Before running the script, ensure you have the following set up:

1.  **Node.js:** The script is a Node.js module and requires Node.js to be installed.
2.  **Dependencies:** You must install the project's dependencies by running `npm install` from the project root. This will install `@google/genai` and `dotenv`.
3.  **API Key:** You must have a valid Google AI API key with access to the Imagen models. Create a file named `.env` in the root of the `aiascent-dev` project and add your key to it like this:

    ```
    # .env
    API_KEY=your_google_api_key_here
    ```

## 3. Usage

The script has two primary modes of operation: generating one or more images for a single page, and generating a full batch of images for an entire module.

### 3.1. Mode 1: Generating One or More Images for a Single Page

This mode is ideal for testing a prompt or generating a set of variations for a specific page.

**Command:**
```bash
node scripts/generate_images.mjs <persona> <pageId> [image_count]
```

**Arguments:**
*   `<persona>`: The identifier for the learner persona. Must be one of:
    *   `career_transitioner`
    *   `underequipped_graduate`
    *   `young_precocious`
*   `<pageId>`: The unique ID for the page you want to generate an image for. You can find these IDs in the corresponding `public/data/v2v_content_*.json` files (e.g., `lesson-1.1-p1`).
*   `[image_count]` (Optional): The number of images to generate for this page. If omitted, it defaults to 1.

**Example 1: Generate a single image**
```bash
node scripts/generate_images.mjs career_transitioner lesson-1.1-p1
```

**Example 2: Generate 5 images**
```bash
node scripts/generate_images.mjs career_transitioner lesson-1.1-p1 5
```

### 3.2. Mode 2: Generating a Full Module (Batch Mode)

This mode allows you to "set it loose" and generate all images (one per page) for every page within a specific module for a given persona.

**Command:**
```bash
node scripts/generate_images.mjs <persona> --module <module_number>
```

**Arguments:**
*   `<persona>`: Same as above.
*   `--module <module_number>`: A flag indicating you want to run in batch mode, followed by the module number (1, 2, 3, or 4).

**Example:**
To generate all images for Module 2 for the Underequipped Graduate:
```bash
node scripts/generate_images.mjs underequipped_graduate --module 2
```
The script will process each page in the module sequentially and log its progress in the console.

## 4. How It Works: File Output

The script is designed to work seamlessly with the `ReportViewer` component. It automatically creates, names, and places the generated images in the correct directory so that the application can find them without any manual configuration.

Based on the persona, module, and page, the script will save the images to a path like:
`public/assets/images/v2v/<persona>/module-<X>/lesson-X.X/lesson-X.X-pX-img-1.webp`
`public/assets/images/v2v/<persona>/module-<X>/lesson-X.X/lesson-X.X-pX-img-2.webp`
...and so on, incrementing the number for each image generated. This matches the structure expected by the image manifest files, ensuring that once the script is run, the images will appear correctly in the interactive curriculum.