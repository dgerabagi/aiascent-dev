# Artifact A100: V2V Academy - Course 1: The AI-Powered Report Viewer - Curriculum Outline
# Date Created: C97
# Author: AI Model & Curator
# Updated on: C98 (Rework curriculum to align with iterative, visualization-first approach)

- **Key/Value for A0:**
- **Description:** A detailed curriculum outline for the V2V Academy's first course, "The AI-Powered Report Viewer," breaking the project into a logical sequence of modules and lessons.
- **Tags:** v2v, curriculum, course design, project-based learning, report viewer

## 1. Overview

This document provides the detailed, modular curriculum outline for "Course 1: The AI-Powered Report Viewer." The course is structured as a single, cumulative project, with each module representing a major phase of development. The curriculum follows an **iterative, visualization-first** approach, starting with a simple visual component and progressively adding layers of functionality.

## 2. Curriculum Modules

---

### **Module 1: The Blueprint - Your First Page**

*   **Objective:** Students will apply the "Documentation First" principle by using a provided set of professional artifacts as their starting context. They will then build the simplest possible visual version of the report viewer: a single, static page.
*   **Lessons:**
    *   **1.1: The Architect's Vision:** Deconstructing the Report Viewer into its core components.
    *   **1.2: The Source of Truth:** Introducing the provided AI Ascent Game documentation artifacts as the initial knowledge base.
    *   **1.3: The "Blank Page" Problem:** Using the DCE to generate the initial project scaffolding.
*   **Lab 1:** Students will create their project and initialize Git. They will be provided with a set of `A*.md` files (the original documentation for the `aiascent.game` report viewer). Their first task will be to guide the AI to generate a single, hardcoded React component that displays one title, one paragraph of text, and one static image.

---

### **Module 2: The Data Model - From Static to Dynamic**

*   **Objective:** Students will refactor their static component into a data-driven application by designing and implementing the core data models.
*   **Lessons:**
    *   **2.1: The Content Schema:** Designing the `content.json` schema to structure the report's text.
    *   **2.2: The Visual Schema:** Designing the `imagemanifest.json` schema to manage images.
    *   **2.3: State Management with Zustand:** Setting up a global store to load and manage the data from the JSON files.
*   **Lab 2:** Students will instruct the AI to create the `content.json` and `imagemanifest.json` files. They will then guide the AI to build a Zustand store to load this data and refactor their static component to display the data from the store, making it dynamic.

---

### **Module 3: The Interactive Experience - Adding Controls**

*   **Objective:** Students will build the core UI components that allow a user to navigate and interact with the report.
*   **Lessons:**
    *   **3.1: Page Navigation:** The logic for moving between pages.
    *   **3.2: Image Navigation:** The logic for cycling through multiple images on a single page.
    *   **3.3: The Tree Navigator:** Building the collapsible side panel for navigating the report's structure.
*   **Lab 3:** Students will execute the V2V workflow to generate the `PageNavigator.tsx`, `ImageNavigator.tsx`, and `ReportTreeNav.tsx` components and integrate them with their Zustand store.

---

### **Module 4: The Voice & The Vision - Integrating Generative AI Services**

*   **Objective:** Students will build and integrate backend services to add generative AI capabilities for audio and images.
*   **Lessons:**
    *   **4.1: The Voice of the AI:** Setting up a local, self-hosted Text-to-Speech (TTS) server and creating an API route to proxy requests to it.
    *   **4.2: The Automated Artist:** Creating an image generation pipeline, including writing effective system prompts and using scripts to automate image creation.
    *   **4.3: The Autoplay Slideshow:** Implementing the logic for an automated slideshow that syncs image transitions with the TTS narration.
*   **Lab 4:** Students will integrate the TTS functionality into a new `AudioControls.tsx` component and write/run a script to generate the images for their report, adding a new layer of dynamic content.

---

### **Module 5: The Brain - Architecting the RAG System**

*   **Objective:** Students will build the most complex feature of the application: the "Ask Ascentia" RAG-powered chatbot.
*   **Lessons:**
    *   **5.1: The Knowledge Base:** Understanding embeddings and using a script to create a FAISS vector index from their report's content.
    *   **5.2: The Backend API:** Building the `/api/chat` route that handles vector search, context augmentation, and streaming responses from an LLM.
    *   **5.3: The Conversational UI:** Generating the `ReportChatPanel.tsx` component and wiring it up to the backend API to create a fully functional, streaming chat interface.
*   **Lab 5:** Students will create their own knowledge base, build the backend RAG pipeline, and integrate the chat feature into their Report Viewer, completing the application's core feature set.

---

### **Module 6: The Launch - Deployment & Final Touches**

*   **Objective:** Students will learn the basics of deploying a full-stack Next.js application and adding final polishing touches.
*   **Lessons:**
    *   **6.1: Preparing for Production:** An overview of building and optimizing a Next.js application for deployment.
    *   **6.2: Introduction to Deployment:** A conceptual guide to deploying on platforms like Vercel or a self-hosted server.
*   **Lab 6:** Students will generate a production build of their application and deploy it, resulting in a live, shareable URL for their completed portfolio project.