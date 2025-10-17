# Artifact A80: V2V Academy - Image Generation Test Harness Guide
# Date Created: C84
# Author: AI Model & Curator
# Updated on: C85 (Reflect new purpose of reverse-engineering good prompts)

- **Key/Value for A0:**
- **Description:** A guide for using the `image_harness.mjs` script to test different static prompt strategies with the Imagen 4 model, helping to diagnose prompt engineering issues and reverse-engineer an optimal prompt structure.
- **Tags:** v2v, curriculum, images, script, automation, guide, tooling, testing, imagen, prompt engineering

## 1. Overview & Purpose

The `scripts/image_harness.mjs` script is a diagnostic tool created to solve image quality issues with the Imagen 4 model. Its purpose is to provide a controlled environment for A/B testing different prompt *strategies* to discover the most effective way to communicate with the image generation API.

The script moves away from a simple, fragmented prompt structure. Instead, it tests multiple, sophisticated approaches that frame the image request as a rich, descriptive, single paragraph, mimicking how a human might describe a scene to an artist.

## 2. Prerequisites

1.  **Node.js:** The script requires Node.js to be installed.
2.  **Dependencies:** Ensure all project dependencies are installed by running `npm install`.
3.  **API Key:** Your Google AI API key must be in the `.env` file in the project root, under a variable like `API_KEY`, `GEMINI_API_KEY`, or `GOOGLE_API_KEY`.

## 3. How to Use

1.  **Open the Script (Optional):** You can open `scripts/image_harness.mjs` to review the `TEST_PROMPTS` array and the various `STRATEGIES` defined within it. This will show you the "seed" concepts and the different stylistic approaches the script will test (e.g., "Cinematic Photography," "Product Key Art," "Bespoke Narrative").

2.  **Run the Script:** Open a terminal in the root of the `aiascent-dev` project and execute the script:
    ```bash
    node scripts/image_harness.mjs
    ```

3.  **Monitor the Console:** The script will log its progress, indicating which test case and which prompt variation it is currently processing.

4.  **Review the Output:** The generated images will be saved in a new directory:
    `public/assets/images/v2v/test_harness/`

    The files will be named according to the test case and variation, for example:
    *   `career-transitioner-loop--v01.png`
    *   `career-transitioner-loop--v02.png`

    Crucially, for each image, a corresponding text file with the **exact prompt** used to generate it will be saved:
    *   `career-transitioner-loop--v01.prompt.txt`
    *   `career-transitioner-loop--v02.prompt.txt`

## 4. Next Steps: Analysis and Iteration

After the script completes, compare the images in the `test_harness` directory against the high-quality examples from AI Studio.

*   **Identify the Winning Strategy:** By reviewing the generated images and their corresponding `.prompt.txt` files, you can identify which of the prompt strategies (e.g., the highly cinematic one, the product-focused one) produces results that are closest to the desired aesthetic.
*   **Reverse-Engineer:** Once a successful pattern is found, that "golden prompt" structure can be analyzed and used as a template.
*   **Update the Main Script:** The learnings from the test harness should then be applied to update the main `generate_images.mjs` script, replacing its current prompt construction logic with the new, more effective strategy.