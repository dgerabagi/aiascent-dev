# Artifact A101: V2V Academy - Course 1: The AI-Powered Report Viewer - Lab Plan
# Date Created: C97
# Author: AI Model & Curator
# Updated on: C98 (Rework lab plan to align with iterative, visualization-first curriculum)

- **Key/Value for A0:**
- **Description:** A plan for the practical exercises and labs within the "The AI-Powered Report Viewer" course, detailing the hands-on projects for each module.
- **Tags:** v2v, curriculum, labs, project-based learning, report viewer

## 1. Overview

This document outlines the hands-on lab exercises for "Course 1: The AI-Powered Report Viewer." The entire course is a single, cumulative project. This plan breaks that project down into a series of structured labs that align with the iterative, visualization-first curriculum defined in `A100`.

## 2. Lab Breakdown by Module

---

### **Lab 1: The First Page**

*   **Module Alignment:** Module 1: The Blueprint - Your First Page
*   **Objective:** To go from an empty folder to a running application displaying a single, static page of content, establishing the project's foundation.
*   **Steps:**
    1.  **Project Initialization:** Students will follow a guided process to create a new Next.js project folder and open it in VS Code.
    2.  **Context Curation:** Students will be provided with a package of documentation artifacts (from the original `aiascent.game` report viewer project) and instructed to place them in their project's `context` directory.
    3.  **Cycle 0 - Scaffolding:** Using the DCE, students will use these artifacts as context to instruct the AI to generate the initial project scaffolding (config files, basic Next.js structure).
    4.  **Cycle 1 - The Visual Seed:** Students will instruct the AI to generate a single, hardcoded React component that displays a title, a paragraph of text, and a placeholder image.
*   **Deliverable:** A running Next.js application displaying a single, non-interactive page.

---

### **Lab 2: Making it Dynamic**

*   **Module Alignment:** Module 2: The Data Model - From Static to Dynamic
*   **Objective:** To refactor the static component into a data-driven application by creating and loading from external JSON files.
*   **Steps:**
    1.  **Cycle 2 - Data Modeling:** Students will instruct the AI to create the `content.json` and `imagemanifest.json` files based on the content of their hardcoded component.
    2.  **Cycle 3 - State Management:** Students will prompt the AI to create the `reportStore.ts` file with the logic to load and parse these JSON files.
    3.  **Cycle 4 - Refactoring:** Students will guide the AI to refactor their static component to pull its data from the new Zustand store.
*   **Deliverable:** The application now dynamically renders the content from the JSON files, though it is still a single page.

---

### **Lab 3: Adding Interactivity**

*   **Module Alignment:** Module 3: The Interactive Experience - Adding Controls
*   **Objective:** To expand the data model to include multiple pages and build the UI components for navigation.
*   **Steps:**
    1.  **Cycle 5 - Expanding the Data:** Students will instruct the AI to add a second page to their `content.json` file.
    2.  **Cycle 6 - Page Navigation:** Students will prompt the AI to generate the `PageNavigator.tsx` component and integrate it with the store to allow navigation between the two pages.
    3.  **Cycle 7 - Advanced Navigation:** Students will guide the AI to build the `ReportTreeNav.tsx` and `ReportProgressBar.tsx` components.
*   **Deliverable:** A fully navigable, multi-page static report viewer.

---

### **Lab 4: Adding Generative Services**

*   **Module Alignment:** Module 4: The Voice & The Vision - Integrating Generative AI Services
*   **Objective:** To add TTS and automated image generation capabilities.
*   **Steps:**
    1.  **Cycle 8 - TTS Integration:** Students will be guided through setting up a local TTS server. They will then prompt the AI to create the `/api/tts` proxy route and integrate the `AudioControls.tsx` component.
    2.  **Cycle 9 - Image Prompting & Generation:** Students will write image prompts for their report pages, add them to `imagemanifest.json`, and use a provided script to generate the images.
*   **Deliverable:** The Report Viewer will now have functional audio playback and will display custom, AI-generated images.

---

### **Lab 5: Building the Brain**

*   **Module Alignment:** Module 5: The Brain - Architecting the RAG System
*   **Objective:** To build and integrate the RAG-powered chatbot.
*   **Steps:**
    1.  **Cycle 10 - Knowledge Base:** Students will use a provided script to create the `faiss.index` and `chunks.json` files from their report's content.
    2.  **Cycle 11 - Backend API:** Students will instruct the AI to build the `/api/chat` route, including the logic for vector search and streaming.
    3.  **Cycle 12 - Chat UI:** Students will prompt the AI to generate the `ReportChatPanel.tsx` component and integrate it into the main viewer.
*   **Deliverable:** A fully functional "Ask @Ascentia" chat panel within the Report Viewer that can answer questions about the report's content.

---

### **Lab 6: The Launch**

*   **Module Alignment:** Module 6: The Launch - Deployment & Final Touches
*   **Objective:** To prepare and deploy the completed application.
*   **Steps:**
    1.  **Cycle 13 - Final Polish:** Students will perform a final review and can ask the AI to make minor styling adjustments.
    2.  **Production Build:** Students will run the `npm run build` command.
    3.  **Deployment:** The lab will provide conceptual guidance for deploying a Next.js application on a platform like Vercel.
*   **Deliverable:** A live, publicly accessible URL for their completed AI-Powered Report Viewer project.