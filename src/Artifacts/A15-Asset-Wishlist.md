# Artifact A15: aiascent.dev - Asset Wishlist and Directory Structure

# Date Created: C2

# Author: AI Model & Curator

  - **Key/Value for A0:**
  - **Description:** A list of required visual assets (images, icons, logos) for the aiascent.dev website and the definitive structure for the `public/assets` directory.
  - **Tags:** assets, wishlist, design, images, icons, file structure

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