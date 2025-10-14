<!--
  File: flattened_repo.md
  Source Directory: c:\Projects\aiascent-dev
  Date Generated: 2025-10-14T14:56:00.385Z
  ---
  Total Files: 3
  Approx. Tokens: 2253
-->

<!-- Top 10 Text Files by Token Count -->
1. src\Artifacts\A40. aiascent.dev - Page Design DCE.md (994 tokens)
2. src\Artifacts\A15-Asset-Wishlist.md (839 tokens)
3. src\components\global\NextPageSection.tsx (420 tokens)

<!-- Full File List -->
1. src\components\global\NextPageSection.tsx - Lines: 46 - Chars: 1680 - Tokens: 420
2. src\Artifacts\A15-Asset-Wishlist.md - Lines: 60 - Chars: 3354 - Tokens: 839
3. src\Artifacts\A40. aiascent.dev - Page Design DCE.md - Lines: 46 - Chars: 3975 - Tokens: 994

<file path="src/components/global/NextPageSection.tsx">
'use client';
import React from 'react';
import { LampContainer } from '@/components/global/lamp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NextPageSectionProps {
    title: string;
    description: string;
    buttonText: string;
    href: string;
}

const NextPageSection: React.FC<NextPageSectionProps> = ({ title, description, buttonText, href }) => {
    return (
        <section className="w-full mt-24">
            <LampContainer>
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="mt-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center text-3xl font-bold tracking-tight md:text-5xl">
                        {title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl text-center my-8">
                        {description}
                    </p>
                    <Link href={href} passHref>
                        <Button size="lg" variant="outline" className='text-lg'>
                            {buttonText}
                        </Button>
                    </Link>
                </motion.div>
            </LampContainer>
        </section>
    );
};

export default NextPageSection;
</file_artifact>

<file path="src/Artifacts/A15-Asset-Wishlist.md">
# Artifact A15: aiascent.dev - Asset Wishlist and Directory Structure

# Date Created: C2

# Author: AI Model & Curator

# Updated on: C17 (Add Downloadable Assets section)

  - **Key/Value for A0:**
  - **Description:** A list of required visual assets (images, icons, logos) for the aiascent.dev website and the definitive structure for the `public/assets` directory.
  - **Tags:** assets, wishlist, design, images, icons, file structure, downloads

## 1. Overview

This document outlines the visual assets required for the initial launch (Phase 1) of aiascent.dev. It also defines the directory structure within the `public/` folder where these assets should be placed. Placeholder files have been created in this cycle (C2) to establish this structure.

## 2. Asset Wishlist

The aesthetic direction is modern, professional, and sophisticated, often utilizing a dark theme with vibrant accents (e.g., electric blue, cyan) to convey the power and precision of the DCE tool.

| ID | Asset Name | Description | Format | Status | Location |
| :--- | :--- | :--- | :--- | :--- | :--- |
| AS-01 | **Logo** | The main logo for aiascent.dev. Should be clean and work on both light and dark backgrounds. | SVG | Needed | `public/assets/logo.svg` |
| AS-02 | **Favicon** | The small icon displayed in the browser tab. | ICO/PNG | Needed | `public/assets/favicon.ico` |
| AS-03 | **Hero Image (DCE Screenshot)** | A high-quality screenshot of the DCE extension in action (e.g., File Tree View and Parallel Co-Pilot Panel open mid-project). This is the centerpiece of the landing page. | PNG/WEBP | Curator Provided | `public/assets/images/dce-hero-screenshot.png` |
| AS-04 | **Icon: Context Curation** | An icon representing the ability to select and manage files for AI context. (e.g., a file tree with checkmarks, or a magnifying glass over files). | SVG | Needed | `public/assets/icons/context-curation.svg` |
| AS-05 | **Icon: Parallel Co-Pilot** | An icon representing the comparison of multiple AI responses. (e.g., side-by-side panels, or branching paths). | SVG | Needed | `public/assets/icons/parallel-copilot.svg` |
| AS-06 | **Icon: Iterative Workflow** | An icon representing the cycle-based development process. (e.g., a circular arrow, or a gear turning). | SVG | Needed | `public/assets/icons/iterative-workflow.svg` |
| AS-07 | **OG:Image** | The image used when the website is shared on social media. Often a combination of the logo and a compelling visual (like AS-03). | PNG (1200x630) | Needed | `public/assets/images/og-image.png` |

## 3. Public Directory Structure

The following structure will be used to organize assets.

```
public/
├── assets/
│   ├── icons/
│   │   ├── context-curation.svg
│   │   ├── parallel-copilot.svg
│   │   └── iterative-workflow.svg
│   │
│   ├── images/
│   │   ├── dce-hero-screenshot.png
│   │   └── og-image.png
│   │
│   ├── logo.svg
│   └── favicon.ico
│
└── ... (other public files)
```

## 4. Downloadable Assets

This section specifies the location for downloadable files, such as application installers.

*   **Location:** `public/downloads/`
*   **Purpose:** To host files that users can download directly from the website.
*   **Current Files:**
    *   `data-curation-environment-0.1.10.vsix`: The VS Code extension installer package.
</file_artifact>

<file path="src/Artifacts/A40. aiascent.dev - Page Design DCE.md">
# Artifact A40: aiascent.dev - Page Design DCE

# Date Created: C51
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A blueprint for the `/dce` page, dedicated to explaining the core features of the Data Curation Environment VS Code extension with visual aids.
- **Tags:** page design, dce, features, plan, ui, ux

## 1. Overview and Goal

The `/dce` page will serve as a focused introduction to the core functionalities of the Data Curation Environment (DCE) extension. Its goal is to clearly and visually explain *how* the DCE works, complementing the other pages that explain *why* it exists. The page will be structured using `MissionSectionBlock` components to maintain visual consistency with the Mission and Learn pages.

## 2. Page Structure and Content

The page will be built as a series of feature spotlights, each explaining a core component of the DCE workflow.

---

### **Section 1: Precision Context Curation**

*   **Title:** Precision Context Curation
*   **TL;DR:** Stop manual copy-pasting. The DCE's File Tree View provides an intuitive, visual way to select the exact files, folders, and documents needed for your AI prompts directly within VS Code.
*   **Content:** The foundation of a high-quality AI response is high-quality context. The DCE eliminates the error-prone process of manually managing file lists or copy-pasting code into a prompt. With the integrated File Tree View, you can browse your entire workspace and select the precise "source of truth" for your task with simple checkboxes. This curated selection is then automatically flattened into a single context file, ensuring the AI has exactly what it needs, and nothing it doesn't.
*   **Image Side:** Left
*   **Asset Wishlist:** A short, looping GIF named `dce-feature-curation.gif` showing a user's mouse clicking checkboxes next to files and folders in the DCE File Tree View panel, followed by the "Flatten Context" button being clicked.

---

### **Section 2: Parallel AI Scrutiny**

*   **Title:** Parallel AI Scrutiny
*   **TL;DR:** Don't rely on a single AI response. The Parallel Co-Pilot Panel allows you to compare multiple solutions side-by-side, with an integrated diff viewer to instantly spot the differences.
*   **Content:** AI models are non-deterministic. A single prompt can yield multiple, viable solutions. The Parallel Co-Pilot Panel is designed for this reality. Paste in several responses from your AI, and the DCE will parse them into separate, color-coded tabs. You can instantly compare the proposed changes for each file and use the built-in diff viewer to understand the nuances of each solution before deciding which one to accept.
*   **Image Side:** Right
*   **Asset Wishlist:** A GIF named `dce-feature-parallel-copilot.gif` showing the Parallel Co-Pilot Panel with multiple tabs. The user clicks between "Resp 1" and "Resp 2", and the file content below updates, with the integrated diff view highlighting the changes.

---

### **Section 3: Iterative Knowledge Graph**

*   **Title:** Iterative Knowledge Graph
*   **TL;DR:** AI collaboration shouldn't be ephemeral. The DCE captures the entire development process—prompts, responses, and decisions—as an iterative, auditable history you can navigate.
*   **Content:** Every development cycle in the DCE is saved, creating a persistent knowledge graph of your project's evolution. The Cycle History view allows you to step back in time, review the exact context used for a previous prompt, see all the AI responses that were generated, and understand why a particular solution was chosen. This turns your development process into a valuable, shareable asset for training, onboarding, and after-action reviews.
*   **Image Side:** Left
*   **Asset Wishlist:** A GIF named `dce-feature-cycles.gif` showing the user clicking the back and forward arrows in the "Cycle History" view, with the cycle title, context, and response tabs all updating to reflect the historical state.
</file_artifact>

