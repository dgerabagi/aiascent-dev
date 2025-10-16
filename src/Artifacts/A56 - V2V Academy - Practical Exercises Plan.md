- **Key/Value for A0:**
- **Description:** Outlines the plan for the practical exercises within the V2V Academy, centered on the project of incrementally building a fully functional, AI-powered interactive report viewer.
- **Tags:** v2v, curriculum, exercises, project-based learning, report viewer, rag

## 1. Overview and Goal

The practical exercises for the V2V Academy will be unified under a single, cohesive capstone project: building a simplified version of the `aiascent.dev` interactive `ReportViewer`. This project-based learning approach provides a powerful, meta-learning experience where students use the V2V workflow to build the very tool that delivers the V2V curriculum.

The goal is to provide a hands-on, engaging, and deeply relevant set of exercises that progressively build upon each other, culminating in a portfolio-worthy, AI-integrated application. Access to these exercises and the associated resources (like the LLM API endpoint) will be the primary offering for paid students.

## 2. The Project: Build Your Own Report Viewer

Students will build a web-based interactive report viewer using Next.js and React. The project will be broken down into phases that align directly with the four modules of the V2V curriculum.

## 3. Exercise Breakdown by Module

### **Module 1: The Virtuoso's Loop - The Blueprint**

*   **Objective:** To understand the end-goal by defining the project's structure and data model *before* writing code.
*   **Exercises:**
    1.  **Project Setup:** Students will set up a new Next.js project and initialize a Git repository.
    2.  **Data Modeling:** Students will create the static JSON files (`report_content.json`, `report_imagemanifest.json`) that will define a simple, two-page report. This exercise reinforces the "documentation-first" principle.
    3.  **Artifact Creation:** Using the DCE, students will create their first planning artifacts for the project, outlining their strategy.

### **Module 2: The Curator's Toolkit - Static Rendering**

*   **Objective:** To apply data curation skills by building the static view of the report viewer, focusing on rendering the data created in Module 1.
*   **Exercises:**
    1.  **State Management:** Students will set up a Zustand store (`reportStore.ts`) to load and manage the report data from the JSON files.
    2.  **Static UI:** Students will build the basic React components to display the content of a single page (`PageNavigator.tsx`, `ReportViewer.tsx`), rendering the title, TL;DR, and content.
    3.  **Image Display:** Students will implement the logic to display the main image associated with the current page.

### **Module 3: The Apprentice's Forge - Adding Interactivity**

*   **Objective:** To learn structured interaction by adding stateful navigation and controls to the report viewer.
*   **Exercises:**
    1.  **Page Navigation:** Students will implement the `nextPage` and `prevPage` functions and connect them to UI buttons, allowing users to navigate between the pages of their report.
    2.  **Image Navigation:** Students will build the `ImageNavigator.tsx` component, enabling users to cycle through multiple images for a single page.
    3.  **Component Integration:** Students will integrate other UI components like the `ReportProgressBar` and `ReportTreeNav`.

### **Module 4: The Vibecoder's Canvas - AI Integration (The Final Boss)**

*   **Objective:** To achieve the final stage of Virtuosity by integrating a live AI chat and RAG system into the application.
*   **Exercises:**
    1.  **Chat UI:** Students will build the `ReportChatPanel.tsx` component, creating the user interface for the "Ask Ascentia" feature.
    2.  **Backend API Route:** Students will create a Next.js API route (`/api/chat/route.ts`) that acts as a proxy, securely forwarding requests from their application to the provided `gpt-oss-20b` LLM endpoint.
    3.  **RAG Implementation:**
        *   Students will be provided with a small set of documentation files.
        *   They will use a script (provided) to create a FAISS vector index from these documents.
        *   They will implement the RAG logic in their backend API route, loading the index, performing a similarity search on user queries, and injecting the context into the prompt sent to the LLM.
    4.  **Streaming Responses:** Students will implement the logic to handle the streaming response from the AI and display it in real-time in the chat UI.

## 4. Student Technical Environment

*   **Required Software:** VS Code with the DCE extension, Node.js, Git.
*   **API Access:** Paid students will be provided with credentials or instructions to access a shared, rate-limited endpoint for the `gpt-oss-20b` model for the Module 4 exercises.