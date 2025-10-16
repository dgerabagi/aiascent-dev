# Artifact A79: V2V Academy - Image Generation Script Guide
# Date Created: C81
# Author: AI Model & Curator
# Updated on: C83 (Simplify to use constants instead of command-line arguments)

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

To run the script, you no longer need to use command-line arguments. Instead, you will directly edit the configuration variables at the top of the script file itself.

### Step 1: Open the Script

Open the file `scripts/generate_images.mjs` in your editor.

### Step 2: Edit the `CONFIG` Object

At the top of the file, you will find a `CONFIG` object. Edit the values inside this object to specify what you want to generate.

```javascript
// --- USER CONFIGURATION ---
// EDIT THE VALUES IN THIS OBJECT TO CONTROL THE SCRIPT
const CONFIG = {
    // Set the persona: 'career_transitioner', 'underequipped_graduate', or 'young_precocious'
    persona: 'career_transitioner',

    // Set the pageId you want to generate images for (e.g., 'lesson-1.1-p1')
    pageId: 'lesson-1.1-p1',

    // Set the number of images you want to generate for this page
    imageCount: 2,

    // To run for a whole module, set moduleNumber (1-4) and uncomment it.
    // This will generate 1 image for every page in the module.
    // moduleNumber: 1, 
};
// --- END OF CONFIGURATION ---
```

*   **`persona`**: Change this to the persona you are generating for.
*   **`pageId`**: Change this to the specific page ID. You can find these IDs in the `public/data/v2v_content_*.json` files.
*   **`imageCount`**: Set this to the number of images you want to create for that page.
*   **`moduleNumber`** (Optional): To run in batch mode for a whole module, comment out `pageId` and `imageCount`, and uncomment `moduleNumber`, setting it to 1, 2, 3, or 4.

### Step 3: Run the Script

Open your terminal in the project root and run the script with Node.js.

```bash
node scripts/generate_images.mjs
```

The script will read the values you set in the `CONFIG` object and begin the generation process, logging its progress to the console.

## 4. How It Works: File Output

The script is designed to work seamlessly with the `ReportViewer` component. It automatically creates, names, and places the generated images in the correct directory so that the application can find them without any manual configuration.

Based on the persona, module, and page, the script will save the images to a path like:
`public/assets/images/v2v/<persona>/module-<X>/lesson-X.X/lesson-X.X-pX-img-1.webp`
`public/assets/images/v2v/<persona>/module-<X>/lesson-X.X/lesson-X.X-pX-img-2.webp`
...and so on, incrementing the number for each image generated. This matches the structure expected by the image manifest files, ensuring that once the script is run, the images will appear correctly in the interactive curriculum.