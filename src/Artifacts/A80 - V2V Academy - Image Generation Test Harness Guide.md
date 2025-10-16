# Artifact A80: V2V Academy - Image Generation Test Harness Guide
# Date Created: C84
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A guide for using the `image_harness.mjs` script to test static prompts with the Imagen 4 model, helping to diagnose prompt engineering issues and find an optimal prompt structure.
- **Tags:** v2v, curriculum, images, script, automation, guide, tooling, testing, imagen

## 1. Overview & Purpose

The `scripts/image_harness.mjs` script is a diagnostic tool created to solve image quality issues with the Imagen 4 model. It provides a controlled environment to test different image prompts without the complexity of the full `generate_images.mjs` script.

The primary goals of this test harness are:
1.  **Simplify the Prompt:** It tests a simplified prompt structure that only includes the master system prompt (`A75`) and a specific image prompt, completely removing the lesson content. This helps determine if the prompt length or markdown formatting was causing issues.
2.  **A/B/C Testing:** It contains a set of 6-8 diverse, high-quality, static prompts. By running these known-good prompts, you can establish a baseline for the image quality you should expect from the API.
3.  **Find the "Golden Prompt":** By reviewing the output, you can identify which prompt structures and styles work best with the Imagen 4 API. Once a successful pattern is found, it can be reverse-engineered back into the main `generate_images.mjs` script.

## 2. Prerequisites

1.  **Node.js:** The script requires Node.js to be installed.
2.  **Dependencies:** Ensure all project dependencies are installed by running `npm install`.
3.  **API Key:** Your Google AI API key must be in the `.env` file in the project root, under the variable `API_KEY`.

## 3. How to Use

1.  **Open the Script (Optional):** You can open `scripts/image_harness.mjs` to review the `TEST_PROMPTS` array at the top of the file. This shows the exact 6 prompts that will be tested across the different personas. You can modify these if you wish to test other specific prompts.

2.  **Run the Script:** Open a terminal in the root of the `aiascent-dev` project and execute the script:
    ```bash
    node scripts/image_harness.mjs
    ```

3.  **Monitor the Console:** The script will log its progress, indicating which test case it is currently processing.

4.  **Review the Output:** The generated images will be saved in a new directory:
    `public/assets/images/v2v/test_harness/`

    The files will be named according to the test case, for example:
    *   `1-career-transitioner-loop.webp`
    *   `2-underequipped-grad-hired.webp`
    *   ...and so on.

## 4. Next Steps: Analysis and Iteration

After the script completes, review the images in the `test_harness` directory.

*   **If the images are high quality:** This confirms that the simplified prompt structure (System Prompt + Image Prompt) is effective. The next step would be to update the main `generate_images.mjs` script to use this simplified prompt construction, omitting the lesson content.
*   **If the images are still low quality:** This suggests the issue may not be with the prompt content itself, but potentially with the master system prompt (`A75`), the API parameters being used, or a fundamental issue with how the model is interpreting our specific style of prompts. In this case, the next step would be to modify the static prompts within `image_harness.mjs` further (e.g., making them shorter, more or less descriptive) and re-run the test until a successful pattern is found.