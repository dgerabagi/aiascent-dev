# Artifact A97: V2V Academy - Lab 1 Media Descriptions
# Date Created: C96
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** Provides detailed, step-by-step descriptions for the screen recording videos used in Lab 1 of the V2V Academy.
- **Tags:** v2v, curriculum, lab, documentation, media, accessibility

## 1. Overview

This document serves as the source of truth for the descriptive content associated with the screen recordings (originally GIFs, now MP4s) in "Lab 1: Your First Portfolio Website." Each description details the on-screen actions, providing a clear, textual representation of the visual steps for accessibility and to serve as content for the `imagemanifest_lab_1_portfolio.json`.

## 2. Media Descriptions

### **step-3-1.mp4 (Step 2: Install DCE)**
1.  The user opens the Extensions view in VS Code.
2.  They click the "..." menu in the Extensions view sidebar.
3.  They select "Install from VSIX..." from the dropdown menu.
4.  A file dialog opens, and the user selects the `data-curation-environment-0.1.10.vsix` file.
5.  A notification appears in the bottom-right indicating the extension is installing.
6.  Once complete, a notification confirms the installation, and the Data Curation icon appears in the Activity Bar.

### **step-4-1.mp4 (Step 3 & 4: Create Folders)**
1.  The user opens Windows File Explorer and navigates to the `C:\` drive.
2.  They create a new folder and name it `Projects`.
3.  They navigate into the new `Projects` folder.
4.  They create a new folder inside `Projects` and name it `portfolio-website`.

### **step-5-1.mp4 (Step 5: Open Project)**
1.  In VS Code, the user clicks the "Open Folder" button from the "File Tree View" panel.
2.  The file dialog opens, and the user navigates to and selects the `C:\Projects\portfolio-website` folder.
3.  VS Code reloads, opening the selected folder as the new workspace.

### **step-6-1.mp4 (Step 6 & 7: Open DCE & Define Scope)**
1.  The user clicks the spiral icon for the Data Curation Environment in the Activity Bar.
2.  The PCPP (Parallel Co-Pilot Panel) opens to the "Welcome" / Onboarding screen.
3.  The user copies the provided project scope text.
4.  The user pastes the text into the large "Project Scope" text area in the PCPP.

### **step-8-1.mp4 (Step 8: Generate Initial Artifacts)**
1.  In the PCPP Onboarding view, the user clicks the "Generate Initial Artifacts Prompt" button.
2.  The view transitions to Cycle 1.
3.  Two new files, `DCE_README.md` and `prompt.md`, are automatically created and opened in the editor.

### **step-12-1.mp4 (Step 12: Open AI Tool)**
1.  The user opens a web browser.
2.  They navigate to `aistudio.google.com`.
3.  They configure the model settings: Model to `Gemini 2.5 Pro`, Temperature to `0.7`, and Thinking budget to maximum.
4.  The user duplicates the browser tab three times, creating a total of four identical AI Studio tabs.

### **step-15-1.mp4 (Step 15: Parse Responses)**
1.  In the PCPP, the user pastes the four AI responses into the `Resp 1`, `Resp 2`, `Resp 3`, and `Resp 4` tabs.
2.  After the last response is pasted, the "Parse All" button in the header becomes highlighted.
3.  The user clicks the "Parse All" button.
4.  The UI for all tabs transforms into the parsed view, showing sections for Summary, Course of Action, and Associated Files.

### **step-17-1.mp4 (Step 17: Select Longest Response)**
1.  After parsing, the "Sort" button is highlighted. The user clicks it.
2.  The tabs reorder based on their token count.
3.  The user ensures the first (longest) tab is active.
4.  The "Select This Response" button in the response header is highlighted. The user clicks it.
5.  The selected response's tab turns green, indicating it has been chosen.

### **step-18-1.mp4 (Step 18: Create Baseline Error)**
1.  After selecting a response, the "Baseline (Commit)" button is highlighted.
2.  The user clicks the "Baseline (Commit)" button.
3.  A VS Code error notification appears in the bottom-right corner with the message "This is not a git repository." and offers two buttons: "Open README Guide" and "Initialize Repository".

### **step-22-1.mp4 (Step 22: Review Artifacts)**
1.  The "Select All" button in the "Associated Files" list is highlighted. The user clicks it, checking all files.
2.  The "Accept Selected" button is highlighted. The user clicks it.
3.  The new artifact files appear in the VS Code File Explorer under `src/Artifacts`.
4.  The user clicks on the `GitHub-Repository-Setup-Guide.md` file to open and review its contents.

### **step-26-1.mp4 (Step 25: Create New Cycle)**
1.  The `+` (New Cycle) button in the Cycle Navigator is highlighted.
2.  The user clicks the `+` button.
3.  The view transitions to a new, empty "Cycle 2".

### **step-27-1.mp4 (Step 26 & 27: Paste, Parse, Accept Cycle 2)**
1.  The user is in the empty Cycle 2 view.
2.  They paste four new AI responses into the tabs.
3.  They click "Parse All."
4.  They click "Sort."
5.  They click "Select This Response" on the longest response.
6.  They click "Select All" in the "Associated Files" list.
7.  They click "Accept Selected."
8.  The new `Git-Installation-Guide.md` file appears in the `src/Artifacts` directory.

### **step-28-1.mp4 (Step 28: Install Git)**
1.  The user follows the instructions in the newly created `Git-Installation-Guide.md`.
2.  They navigate to the Git download website.
3.  They download and run the Git installer for Windows, accepting the default options.
4.  After installation, they open a new terminal in VS Code.
5.  They type `git --version` to verify the installation was successful.

### **step-31-1.mp4 (Step 29: First Commit)**
1.  In the PCPP, the user navigates back to Cycle 1.
2.  They change the Cycle Title to "First Commit."
3.  They click the "Baseline (Commit)" button, which brings up the "not a git repository" error again.
4.  This time, they click the "Initialize Repository" button on the error notification.
5.  A success message appears.
6.  They click the "Baseline (Commit)" button one last time, and a "Successfully created baseline commit" notification appears.

### **step-32-1.mp4 (Step 32 & 33: Create Project Scaffold)**
1.  The user creates a new cycle (Cycle 2).
2.  They set the Cycle Title to "Create Project Scaffold" and the context to "Let's now build the project files...".
3.  They click "Generate prompt.md."
4.  They copy the content of the new `prompt.md`.
5.  They go to AI Studio and paste the prompt into the four tabs, generating four new responses.
6.  They create a new cycle (Cycle 3) in the PCPP.
7.  They paste the four new responses into the tabs for Cycle 3.

### **step-34-1.mp4 (Step 34: Baseline and Accept Code)**
1.  In Cycle 3, the user clicks "Parse All," then "Sort."
2.  They select the longest response.
3.  They click "Baseline (Commit)," which succeeds.
4.  The user clicks "Select All" in the "Associated Files" list.
5.  They click "Accept Selected."
6.  A large number of new project files appear in the VS Code File Explorer.

### **step-37-1.mp4 (Step 37: Continue to Iterate)**
1.  The user opens Windows File Explorer.
2.  They create a new `context` folder in the `portfolio-website` directory.
3.  Inside `context`, they create a `personal` folder.
4.  They drag and drop their `My_Resume.pdf` file into the `personal` folder.
5.  Back in VS Code, they refresh the File Tree View to see the new folders and file.
6.  They check the box next to the `context` folder to add it to their selection.