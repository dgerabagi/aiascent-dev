# Artifact A101: V2V Academy - Course 1: The AI-Powered Report Viewer - Lab Plan
# Date Created: C97
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A plan for the practical exercises and labs within the "The AI-Powered Report Viewer" course, detailing the hands-on projects for each module.
- **Tags:** v2v, curriculum, labs, project-based learning, report viewer

## 1. Overview

This document outlines the hands-on lab exercises for "Course 1: The AI-Powered Report Viewer." The entire course is a single, cumulative project. This plan breaks that project down into a series of structured labs that align with the course modules defined in `A100`. Each lab will guide the student through a specific phase of development, using the DCE and the V2V workflow to build a piece of the final application.

## 2. Lab Breakdown by Module

---

### **Lab 1: The Blueprint**

*   **Module Alignment:** Module 1: The Blueprint - Data Modeling & Project Setup
*   **Objective:** To create the foundational data artifacts for a simple, two-page report.
*   **Steps:**
    1.  **Project Initialization:** Students will follow a guided process similar to the "Your First Portfolio" lab to create a new Next.js project folder and open it in VS Code.
    2.  **Cycle 0 - Scoping:** Students will use the DCE's Cycle 0 to write a `Project Scope` for their report viewer.
    3.  **Cycle 1 - Data Modeling:** Students will instruct the AI to generate the initial `content.json` and `imagemanifest.json` files. The lab will provide the specific content for a simple two-page report about a topic of their choice, which they will include in their prompt.
*   **Deliverable:** A Git repository containing a basic Next.js project structure and the two core JSON data artifacts.

---

### **Lab 2: The Static Viewer**

*   **Module Alignment:** Module 2: The Static View - Building the Frontend with AI
*   **Objective:** To generate and assemble the core React components needed to display the static report data.
*   **Steps:**
    1.  **Cycle 2 - State Management:** Students will prompt the AI to create the `reportStore.ts` file with the logic to load and parse the JSON data artifacts.
    2.  **Cycle 3 - UI Components:** Students will instruct the AI to generate the placeholder React components (`ReportViewer.tsx`, `PageNavigator.tsx`, `ReportProgressBar.tsx`, etc.).
    3.  **Cycle 4 - Integration:** Students will prompt the AI to integrate the components and state management, resulting in a functional viewer that can display the title, content, and images from their `content.json`.
*   **Deliverable:** A running Next.js application that displays the static two-page report.

---

### **Lab 3: The Generative Services**

*   **Module Alignment:** Module 3: The Voice & The Vision - Integrating Generative AI Services
*   **Objective:** To add TTS and automated image generation capabilities.
*   **Steps:**
    1.  **Cycle 5 - TTS Integration:** Students will be guided through setting up a local TTS server. They will then prompt the AI to create the `/api/tts` proxy route and integrate the `AudioControls.tsx` component.
    2.  **Cycle 6 - Image Prompting:** Students will write the image prompts for their two-page report and add them to their `imagemanifest.json`.
    3.  **Cycle 7 - Image Generation:** Students will be provided with the `generate_images.mjs` script and will use it to generate the images for their report.
*   **Deliverable:** The Report Viewer will now have functional audio playback for all pages and will display the newly generated AI images.

---

### **Lab 4: The RAG System**

*   **Module Alignment:** Module 4: The Brain - Architecting the RAG System
*   **Objective:** To build and integrate the RAG-powered chatbot.
*   **Steps:**
    1.  **Cycle 8 - Knowledge Base:** Students will use a provided script to create the `faiss.index` and `chunks.json` files from their report's content.
    2.  **Cycle 9 - Backend API:** Students will instruct the AI to build the `/api/chat` route, including the logic for vector search, context augmentation, and streaming.
    3.  **Cycle 10 - Chat UI:** Students will prompt the AI to generate the `ReportChatPanel.tsx` component and integrate it into the main viewer.
*   **Deliverable:** A fully functional "Ask Ascentia" chat panel within the Report Viewer that can answer questions about the report's content.

---

### **Lab 5: The Launch**

*   **Module Alignment:** Module 5: The Launch - Deployment & Final Touches
*   **Objective:** To prepare and deploy the completed application.
*   **Steps:**
    1.  **Cycle 11 - Final Polish:** Students will perform a final review and can ask the AI to make minor styling adjustments or add small features.
    2.  **Production Build:** Students will run the `npm run build` command to create an optimized build of their application.
    3.  **Deployment:** The lab will provide conceptual guidance and links to resources for deploying a Next.js application on a platform like Vercel.
*   **Deliverable:** A live, publicly accessible URL for their completed AI-Powered Report Viewer project.