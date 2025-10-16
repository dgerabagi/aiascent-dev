# Artifact A74: V2V Academy - Interactive Curriculum Page Plan
# Date Created: C74
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** Outlines the plan for a new, dedicated page to host the interactive V2V Academy curriculum. The page will first prompt users to select a learner persona and then dynamically load the corresponding curriculum into the `ReportViewer` component.
- **Tags:** v2v, curriculum, page design, plan, interactive learning, persona, report viewer

## 1. Overview and Goal

The V2V Academy curriculum has been developed across numerous artifacts, with content tailored for three distinct learner personas. The goal of this plan is to create a unified, interactive hub on `aiascent.dev` where users can access and navigate this curriculum.

A new page, `/academy`, will be created. This page will first present a simple interface for users to self-select the persona that best fits them. Based on their selection, the page will dynamically load the appropriate comprehensive curriculum data and display it using the existing, powerful `ReportViewer` component. This provides a personalized and seamless learning experience.

## 2. User Flow

1.  **Navigation:** The user clicks a new "Academy" link in the main site header and navigates to `/academy`.
2.  **Persona Selection:** The user is presented with a screen showing the three learner personas ("The Career Transitioner," "The Underequipped Graduate," "The Young Precocious") with brief descriptions.
3.  **Selection:** The user clicks on the persona that best represents them.
4.  **Content Loading:** The persona selection screen fades out, and the page dynamically fetches the `content.json` file specific to that persona.
5.  **Interactive Learning:** The `ReportViewer` component appears, now populated with the full, multi-module curriculum for the selected persona, ready for the user to explore.

## 3. Technical Implementation Plan

### 3.1. New Page and Components

*   **`src/app/academy/page.tsx`:**
    *   A new client component that will serve as the main container for the academy.
    *   It will use a `useState` hook to manage the `selectedPersona`.
    *   It will conditionally render either the `PersonaSelector` component (if no persona is selected) or the `ReportViewer` component (if a persona is selected).
    *   When a persona is selected, it will be responsible for fetching the correct curriculum JSON file (e.g., `v2v_content_career_transitioner.json`) and the shared `v2v_imagemanifest.json`.
*   **`src/components/academy/PersonaSelector.tsx`:**
    *   A new UI component that displays the three personas as clickable cards.
    *   Each card will contain the persona's title and a brief description (from `A58`).
    *   It will accept an `onSelectPersona` callback prop, which it will call with the selected persona's identifier when a card is clicked.

### 3.2. State Management Refactor (`reportStore.ts`)

To support dynamic content, the `reportStore` will be refactored to be more of a generic "data viewer" store.

*   **`loadReport` Action:** The existing `loadReport` action will be modified. Instead of fetching data based on a `reportName`, it will now accept the fully-formed `reportData` and `imageManifest` JSON objects as arguments.
*   **Data Fetching Responsibility:** The responsibility for fetching the JSON data will move *out* of the store and *into* the components that use it.
    *   The `/academy/page.tsx` component will fetch the appropriate curriculum data based on the selected persona.
    *   The `ReportViewer.tsx` component will be updated to fetch its own static data for the "whitepaper" and "showcase" reports.
    *   After fetching, these components will call the new `loadReport` action, passing in the loaded data to populate the store.

### 3.3. Curriculum Data Files

*   **Consolidated Content:** Three new comprehensive JSON files will be created in `public/data/`:
    1.  `v2v_content_career_transitioner.json`
    2.  `v2v_content_underequipped_graduate.json`
    3.  `v2v_content_young_precocious.json`
*   **Structure:** Each file will contain the complete, structured curriculum for that persona, combining the content from all existing lesson artifacts (`A54`, `A63`-`A73`) into the `ReportContentData` format.
*   **Shared Image Manifest:** A single `v2v_imagemanifest.json` will be created to serve all three persona curricula, as the image paths are consistent across versions. This avoids data duplication.

This plan creates a scalable and personalized learning hub, leveraging our existing interactive components while providing a clear path for future content expansion.