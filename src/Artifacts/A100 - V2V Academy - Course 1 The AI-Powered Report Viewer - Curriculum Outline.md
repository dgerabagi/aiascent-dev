# Artifact A100: V2V Academy - Course 1: The AI-Powered Report Viewer - Curriculum Outline
# Date Created: C97
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A detailed curriculum outline for the V2V Academy's first course, "The AI-Powered Report Viewer," breaking the project into a logical sequence of modules and lessons.
- **Tags:** v2v, curriculum, course design, project-based learning, report viewer

## 1. Overview

This document provides the detailed, modular curriculum outline for "Course 1: The AI-Powered Report Viewer." The course is structured as a single, cumulative project, with each module representing a major phase of development. The lessons within each module will teach the theoretical concepts and then immediately apply them in a hands-on lab, guiding the student through the entire process of building the application.

## 2. Curriculum Modules

---

### **Module 1: The Blueprint - Data Modeling & Project Setup**

*   **Objective:** Students will apply the "Documentation First" principle to architect the data foundation of the application and set up their development environment.
*   **Lessons:**
    *   **1.1: The Architect's Vision:** Deconstructing the Report Viewer into its core components and features.
    *   **1.2: Data as the Foundation:** Designing the `content.json` schema to structure the report's text.
    *   **1.3: The Visual Language:** Designing the `imagemanifest.json` schema to manage AI-generated images.
*   **Lab 1:** Students will create their project, initialize Git, and use the DCE to generate their first artifacts: the `content.json` and `imagemanifest.json` files for a simple, two-page report.

---

### **Module 2: The Static View - Building the Frontend with AI**

*   **Objective:** Students will use the DCE and their data artifacts to guide an AI in generating the static frontend of the Report Viewer using React and Next.js.
*   **Lessons:**
    *   **2.1: The Component Mindset:** Breaking down the UI into reusable React components.
    *   **2.2: State Management with Zustand:** Setting up a global store to manage the application's state.
    *   **2.3: From Data to Display:** Generating the components to render the report's text, images, and navigation.
*   **Lab 2:** Students will execute the V2V workflow to generate the core React components (`ReportViewer.tsx`, `PageNavigator.tsx`, etc.) and the Zustand store (`reportStore.ts`), culminating in a functional, locally-hosted static report viewer.

---

### **Module 3: The Voice & The Vision - Integrating Generative AI Services**

*   **Objective:** Students will build and integrate backend services to add generative AI capabilities for audio and images.
*   **Lessons:**
    *   **3.1: The Voice of the AI:** Setting up a local, self-hosted Text-to-Speech (TTS) server and creating an API route to proxy requests to it.
    *   **3.2: The Automated Artist:** Creating an image generation pipeline, including writing effective system prompts (`A75`) and using scripts to automate image creation.
    *   **3.3: The Autoplay Slideshow:** Implementing the logic for an automated slideshow that syncs image transitions with the TTS narration.
*   **Lab 3:** Students will integrate the TTS functionality into their `AudioControls` component and write the script to generate the images for their report, adding a new layer of dynamic content.

---

### **Module 4: The Brain - Architecting the RAG System**

*   **Objective:** Students will build the most complex feature of the application: the "Ask Ascentia" RAG-powered chatbot.
*   **Lessons:**
    *   **4.1: The Knowledge Base:** Understanding embeddings and using a script to create a FAISS vector index from their report's content.
    *   **4.2: The Backend API:** Building the `/api/chat` route that handles vector search, context augmentation, and streaming responses from an LLM.
    *   **4.3: The Conversational UI:** Generating the `ReportChatPanel.tsx` component and wiring it up to the backend API to create a fully functional, streaming chat interface.
*   **Lab 4:** Students will create their own knowledge base, build the backend RAG pipeline, and integrate the chat feature into their Report Viewer, completing the application's core feature set.

---

### **Module 5: The Launch - Deployment & Final Touches**

*   **Objective:** Students will learn the basics of deploying a full-stack Next.js application and adding final polishing touches.
*   **Lessons:**
    *   **5.1: Preparing for Production:** An overview of building and optimizing a Next.js application for deployment.
    *   **5.2: Introduction to Deployment:** A conceptual guide to deploying on platforms like Vercel or a self-hosted server.
*   **Lab 5:** Students will generate a production build of their application and deploy it, resulting in a live, shareable URL for their completed portfolio project.