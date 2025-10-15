# Artifact A43: V2V Academy - Project Vision and Roadmap
# Date Created: C55
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** High-level overview of the online training platform, its purpose, target audience, technical approach (including user authentication), and a phased development plan.
- **Tags:** project vision, goals, scope, v2v, training, roadmap, user authentication

## 1. Project Vision

The vision of the **Vibecoding to Virtuosity (V2V) Academy** is to create the premier online training platform for the "Citizen Architect" methodology. Hosted on `aiascent.dev`, it will transform raw, real-world 1-on-1 AI coaching sessions into a structured, interactive, and scalable curriculum. The platform will not just teach users *how* to use AI, but will guide them through the cognitive shifts required to become expert human-AI collaborators, moving from intuitive "vibecoding" to architectural "virtuosity."

## 2. High-Level Goals

*   **Structure Raw Knowledge:** To process and organize transcribed coaching sessions and external research into a coherent, step-by-step training curriculum.
*   **Interactive Learning Experience:** To leverage the existing `ReportViewer` component as the primary interface for lessons, combining text, images, GIFs, and eventually video into an engaging, multi-modal experience.
*   **Personalized Progression:** To track user progress through the curriculum, requiring users to log in. This enables a personalized learning journey and lays the groundwork for future features like assessments and certifications.
*   **Forward-Thinking Interface:** To design the platform with future capabilities in mind, such as allowing users to interact with lessons via speech-to-text, powered by technologies like Whisper.

## 3. Technical Approach

*   **Authentication:** The platform will require a user login system (e.g., NextAuth.js) to track individual progress. This will be a significant new feature for the `aiascent.dev` site.
*   **Curriculum Data Model:** Each lesson or course will be defined by a set of JSON files, similar to the existing `ReportViewer`'s data structure, making it easy to create new content.
*   **User Progress Tracking:** A database (e.g., Postgres, SQLite) will be added to the tech stack to store user data, including which lessons they have completed.
*   **UI/UX:** The primary learning interface will be an enhanced version of the `ReportViewer`, adapted to handle a curriculum structure (e.g., a "course outline" view in the tree navigator).

## 4. Phased Roadmap

### Phase 1: Foundation & First Principles (Transcription & Content)

*   **Goal:** Establish the technical foundation for content processing and create the first set of raw curriculum materials.
*   **Tasks:**
    1.  Set up a local Whisper-based transcription pipeline to convert recorded audio sessions into text.
    2.  Transcribe the initial set of 12 coaching sessions and the inspirational YouTube video.
    3.  Perform a "cursory review" of the transcripts, creating synopsis artifacts for each to organize the raw material.
    4.  Execute the research proposal (A44) to gather supplementary content.

### Phase 2: Platform Scaffolding (Authentication & UI)

*   **Goal:** Build the core infrastructure for the training platform on `aiascent.dev`.
*   **Tasks:**
    1.  Integrate an authentication solution (e.g., NextAuth.js with a provider like GitHub or Google).
    2.  Set up the database and create the schema for user progress tracking.
    3.  Create a new, protected route (e.g., `/academy`) that will house the training content.
    4.  Adapt the `ReportViewer` to display a list of available courses/lessons.

### Phase 3: Curriculum Development & First Course Launch

*   **Goal:** Synthesize the raw materials from Phase 1 into a structured, interactive first course.
*   **Tasks:**
    1.  Analyze the transcript synopses and research findings to design the first V2V course outline.
    2.  Convert the relevant text into the JSON data format for the `ReportViewer`.
    3.  Create any necessary visual aids (images, GIFs) for the lessons.
    4.  Launch the first course on the platform for authenticated users.

### Phase 4: Advanced Interactivity (Future)

*   **Goal:** Enhance the learning experience with advanced features.
*   **Tasks:**
    1.  Integrate Whisper to allow users to ask questions to Ascentia via speech within a lesson.
    2.  Develop interactive quizzes or coding exercises.
    3.  Implement a system for tracking and displaying user achievements or certifications.