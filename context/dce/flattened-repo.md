<!--
  File: flattened_repo.md
  Source Directory: c:\Projects\DCE
  Date Generated: 2025-10-10T22:24:21.982Z
  ---
  Total Files: 10
  Approx. Tokens: 14114
-->

<!-- Top 10 Text Files by Token Count -->
1. src\Artifacts\A52.2 DCE - Interaction Schema Source.md (2473 tokens)
2. src\Artifacts\A77. DCE - Whitepaper Generation Plan.md (2183 tokens)
3. src\Artifacts\A70. DCE - Git-Integrated Testing Workflow Plan.md (1707 tokens)
4. src\Artifacts\A52.1 DCE - Parser Logic and AI Guidance.md (1463 tokens)
5. src\Artifacts\A65. DCE - Universal Task Checklist.md (1413 tokens)
6. src\Artifacts\A9. DCE - GitHub Repository Setup Guide.md (1229 tokens)
7. src\Artifacts\A1. DCE - Project Vision and Goals.md (999 tokens)
8. src\Artifacts\A69. DCE - Animated UI Workflow Guide.md (943 tokens)
9. src\Artifacts\A78. DCE - VSIX Packaging and FTV Flashing Bug.md (922 tokens)
10. src\Artifacts\A72. DCE - README for Artifacts.md (782 tokens)

<!-- Full File List -->
1. src\Artifacts\A1. DCE - Project Vision and Goals.md - Lines: 41 - Chars: 3995 - Tokens: 999
2. src\Artifacts\A9. DCE - GitHub Repository Setup Guide.md - Lines: 88 - Chars: 4916 - Tokens: 1229
3. src\Artifacts\A65. DCE - Universal Task Checklist.md - Lines: 93 - Chars: 5650 - Tokens: 1413
4. src\Artifacts\A69. DCE - Animated UI Workflow Guide.md - Lines: 68 - Chars: 3772 - Tokens: 943
5. src\Artifacts\A70. DCE - Git-Integrated Testing Workflow Plan.md - Lines: 61 - Chars: 6827 - Tokens: 1707
6. src\Artifacts\A72. DCE - README for Artifacts.md - Lines: 47 - Chars: 3127 - Tokens: 782
7. src\Artifacts\A52.1 DCE - Parser Logic and AI Guidance.md - Lines: 123 - Chars: 5850 - Tokens: 1463
8. src\Artifacts\A52.2 DCE - Interaction Schema Source.md - Lines: 57 - Chars: 9891 - Tokens: 2473
9. src\Artifacts\A77. DCE - Whitepaper Generation Plan.md - Lines: 74 - Chars: 8731 - Tokens: 2183
10. src\Artifacts\A78. DCE - VSIX Packaging and FTV Flashing Bug.md - Lines: 50 - Chars: 3687 - Tokens: 922

<file path="src/Artifacts/A1. DCE - Project Vision and Goals.md">
# Artifact A1: DCE - Project Vision and Goals
# Date Created: Cycle 1
# Author: AI Model
# Updated on: C87 (Shifted Diff Tool to Phase 2, defined Phase 3 as LLM Integration)

## 1. Project Vision

The vision of the Data Curation Environment (DCE) is to create a seamless, integrated toolset within VS Code that streamlines the workflow of interacting with large language models. The core problem this project solves is the manual, cumbersome process of selecting, packaging, and managing the context (code files, documents, etc.) required for effective AI-assisted development.

## 2. High-Level Goals & Phases

The project will be developed in three distinct phases.

**Note on Reference Repository:** The discovery of the `The-Creator-AI-main` repository in Cycle 2 has provided a significant head-start, especially for Phase 1 and 2. The project's focus shifts from building these components from the ground up to adapting and extending the powerful, existing foundation.

### Phase 1: The Context Chooser

The goal of this phase is to eliminate the manual management of a `files_list.txt`. Users should be able to intuitively select files and folders for their AI context directly within the VS Code file explorer UI.

-   **Core Functionality:** Implement a file explorer view with checkboxes for every file and folder.
-   **Action:** A "Flatten Context" button will take all checked items and generate a single `flattened_repo.md` file in the project root.
-   **Outcome:** A user can curate a complex context with simple mouse clicks, completely removing the need to edit a text file.
-   **Status:** Largely complete.

### Phase 2: The Parallel Co-Pilot Panel & Integrated Diff Tool

This phase addresses the limitation of being locked into a single conversation with an AI assistant and brings the critical "diffing" workflow directly into the extension. The goal is to enable multiple, parallel interactions and to create a navigable record of the AI-driven development process.

-   **Core Functionality (Parallel Co-Pilot):** Create a custom panel within VS Code that hosts a multi-tabbed text editor. Users can manually paste or have the extension ingest different AI-generated code responses into each tab for side-by-side comparison.
-   **Key Feature ("Swap & Test"):** A button on each tab allows the user to "swap" the content of that tab with the corresponding source file in their workspace. This provides an immediate, low-friction way to test a given AI response.
-   **Core Functionality (Integrated Diff):** The panel will include a built-in diff viewer to compare the content of any two tabs, or a tab and the source file. This eliminates the need for external tools like WinMerge.
-   **Core Functionality (Cycle Navigator):** Integrate a UI element to navigate back and forth between development cycles. Each cycle will be associated with the set of AI responses generated during that cycle.
-   **Outcome:** A user can efficiently manage, compare, and test multiple AI solutions, and also review the historical evolution of the code by navigating through past cycles and their corresponding AI suggestions, creating a powerful "knowledge graph" of the project's development.

### Phase 3: Advanced AI & Local LLM Integration

This phase focuses on deeper integration with AI services and providing support for local models.

-   **Core Functionality:** Implement direct API calls to various LLM providers (e.g., Gemini, OpenAI, Anthropic) from within the Parallel Co-Pilot panel, populating the tabs automatically. This requires building a secure API key management system.
-   **Local LLM Support:** Allow users to configure an endpoint URL for a locally hosted LLM (e.g., via LM Studio, Ollama), enabling fully offline and private AI-assisted development.
-   **Outcome:** The DCE becomes a fully-featured AI interaction environment, supporting both cloud and local models, and automating the entire prompt-to-test workflow.
</file_artifact>

<file path="src/Artifacts/A9. DCE - GitHub Repository Setup Guide.md">
# Artifact A9: DCE - GitHub Repository Setup Guide
# Date Created: Cycle 12
# Author: AI Model
# Updated on: C160 (Add sample workflow with `git restore`)

- **Description:** A step-by-step guide with the necessary git commands to initialize the project as a local repository and push it to a new remote repository on GitHub, including a sample workflow for testing AI responses.
- **Tags:** git, github, version control, setup, repository, workflow

## 1. Overview

This guide provides the necessary commands to turn your local project folder into a Git repository and link it to a new, empty repository on GitHub. It also describes a sample workflow for using Git to efficiently test multiple AI-generated responses.

## 2. Prerequisites

*   You have `git` installed on your machine.
*   You have a GitHub account.

## 3. Step-by-Step Setup

### Step 1: Create a New Repository on GitHub

1.  Go to [github.com](https://github.com) and log in.
2.  In the top-right corner, click the `+` icon and select **"New repository"**.
3.  **Repository name:** A good name would be `data-curation-environment` or `vscode-dce-extension`.
4.  **Description:** (Optional) "A VS Code extension for curating context for Large Language Models."
5.  Choose **"Private"** or **"Public"** based on your preference.
6.  **IMPORTANT:** Do **not** initialize the repository with a `README`, `.gitignore`, or `license`. We will be pushing our existing files, and this will prevent conflicts.
7.  Click **"Create repository"**.

GitHub will now show you a page with several command-line instructions. We will use the section titled **"...or push an existing repository from the command line"**.

### Step 2: Initialize Git in Your Local Project

Open a terminal (like the one integrated into VS Code) and navigate to your project's root directory (e.g., `C:\Projects\DCE`). Then, run the following commands one by one.

1.  **Initialize the repository:** This creates a new `.git` subdirectory in your project folder.
    ```bash
    git init
    ```

2.  **Add all existing files to the staging area:** The `.` adds all files in the current directory and subdirectories.
    ```bash
    git add .
    ```

3.  **Create the first commit:** This saves the staged files to the repository's history.
    ```bash
    git commit -m "Initial commit"
    ```

4.  **Rename the default branch to `main`:** This is the modern standard, replacing the older `master`.
    ```bash
    git branch -M main
    ```

### Step 3: Link and Push to GitHub

Now, you will link your local repository to the empty one you created on GitHub.

1.  **Add the remote repository:** Replace the URL with the one from your GitHub repository page. It should look like the example below.
    ```bash
    git remote add origin https://github.com/dgerabagi/data-curation-environment.git
    ```

2.  **Push your local `main` branch to GitHub:** The `-u` flag sets the upstream remote so that in the future, you can simply run `git push`.
    ```bash
    git push -u origin main
    ```

After these commands complete, refresh your GitHub repository page. You should see all of your project files. You have successfully created and linked your repository.

## 4. Sample Workflow for Testing AI Responses

Once your project is set up with Git, you can leverage it to create a powerful and non-destructive testing workflow with the DCE.

1.  **Start with a Clean State:** Make sure your working directory is clean. You can check this with `git status`. If you have any uncommitted changes, either commit them or stash them.
2.  **Generate Responses:** Use the DCE to generate a `prompt.md` file and get several responses from your AI. Paste these into the Parallel Co-Pilot Panel and parse them.
3.  **Accept a Response:** Choose the response you want to test (e.g., "Resp 1"). Select its files in the "Associated Files" list and click "Accept Selected Files". This will overwrite the files in your workspace.
4.  **Test the Changes:** Run your project's build process (`npm run watch`), check for errors, and test the functionality in the VS Code Extension Development Host.
5.  **Revert and Test the Next One:**
    *   If you're not satisfied with the changes from "Resp 1," you can instantly and safely revert all the changes by running a single command in your terminal:
        ```bash
        git restore .
        ```
    *   This command discards all uncommitted changes in your working directory, restoring your files to the state of your last commit.
6.  **Repeat:** Your workspace is now clean again. You can go back to the Parallel Co-Pilot Panel, accept the files from "Resp 2," and repeat the testing process.

This workflow allows you to rapidly test multiple complex, multi-file changes from different AI responses without the risk of permanently breaking your codebase.
</file_artifact>

<file path="src/Artifacts/A65. DCE - Universal Task Checklist.md">
# Artifact A65: DCE - Universal Task Checklist
# Date Created: C165
# Author: AI Model & Curator
# Updated on: C22 (Add new tasks from playtest feedback)

## 1. Purpose

This artifact provides a structured, universal format for tracking development tasks, feedback, and bugs. Unlike cycle-specific trackers, this checklist organizes work by the group of files involved in a given task. It also introduces a simple complexity metric based on the total token count of the affected files and an estimation of whether the task will require more than one development cycle to complete.

This file-centric approach helps in planning and prioritizing work, especially in an AI-assisted development workflow where context size (token count) is a primary constraint.

## 2. How to Use

-   **Group by File Packages:** Create a new `##` section for each logical task or feature. List all the files that are expected to be modified for this task.
-   **Assign an ID:** Give each task package a unique, simple ID (e.g., `T-1`, `T-2`) for easy reference in feedback.
-   **Estimate Complexity:**
    -   Calculate the **Total Tokens** for all files in the package. This gives a quantitative measure of the context size.
    -   Estimate if the task is likely to take **More than one cycle?**. This is a qualitative judgment based on the complexity of the changes required.
-   **List Action Items:** Under each file package, create a checklist of specific actions, bugs to fix, or features to implement.
-   **Add Verification Steps:** After the action items, add a section describing how the curator should test the feature to confirm it is working as expected.
-   **Note on Output Length:** Remember that the maximum output length for a single response is approximately 65,000 tokens. Do not prematurely stop generating files; attempt to complete as many full files as possible within this limit.
-   **Keep it Current:** At the beginning of each new cycle, review and update this checklist. Move completed tasks to a "Completed" section, add new tasks based on feedback, and re-prioritize as needed. This ensures the checklist remains a living, accurate reflection of the project's status.

---

## Task List for Cycle 22+

## T-1: Fix Onboarding Auto-Save Icon
- **Files Involved:**
    - `src/client/views/parallel-copilot.view/view.tsx`
- **Total Tokens:** ~8,500
- **More than one cycle?** No
- **Status:** In Progress

- [ ] **Task (T-ID: 1.1):** The `useEffect` hook listening for `NotifySaveComplete` is missing a dependency on `saveStatus`. Add it to the dependency array to ensure the callback has the latest state and can correctly transition from 'saving' to 'saved'.

### Verification Steps
1.  Launch the extension in a fresh workspace to trigger the onboarding view.
2.  Type a character in the "Project Scope" text area.
3.  **Expected:** The save status icon should change from a checkmark to a caution sign.
4.  Stop typing.
5.  **Expected:** The icon should change to a circular processing animation, and then, after a short delay, it should change back to the green checkmark. It should not get stuck on the processing animation.

## T-2: Fix File Duplication Bug
- **Files Involved:**
    - `src/backend/services/flattener.service.ts`
    - `src/backend/services/file-tree.service.ts`
- **Total Tokens:** ~6,800
- **More than one cycle?** No
- **Status:** In Progress

- [ ] **Task (T-ID: 2.1):** Add a safeguard in `flattener.service.ts` to de-duplicate the incoming file path list using `[...new Set(paths)]` before any processing occurs.
- [ ] **Task (T-ID: 2.2):** Review and harden the `processAutoAddQueue` logic in `file-tree.service.ts` to prevent race conditions that might add duplicate files to the selection state.

### Verification Steps
1.  Enable "Automatically add new files to selection".
2.  Create a new workspace and go through the Cycle 0 onboarding to generate the initial set of artifacts.
3.  Click "Flatten Context".
4.  Inspect the generated `flattened_repo.md` file.
5.  **Expected:** The file list and content should contain no duplicate file paths.

## T-3: Implement "Open All" Button
- **Files Involved:**
    - `src/client/views/parallel-copilot.view/components/ParsedView.tsx`
    - `src/backend/services/file-operation.service.ts`
    - `src/common/ipc/channels.enum.ts`
    - `src/common/ipc/channels.type.ts`
    - `src/client/views/parallel-copilot.view/on-message.ts`
- **Total Tokens:** ~8,000
- **More than one cycle?** No
- **Status:** In Progress

- [ ] **Task (T-ID: 3.1):** Add an "Open All" button to the header of the "Associated Files" section in `ParsedView.tsx`.
- [ ] **Task (T-ID: 3.2):** Create a new `RequestBatchFileOpen` IPC channel.
- [ ] **Task (T-ID: 3.3):** Implement the `handleBatchFileOpenRequest` method in `file-operation.service.ts` to iterate through a list of paths and open each one.

### Verification Steps
1.  Parse a response with multiple associated files.
2.  Click the "Open All" button.
3.  **Expected:** All files listed in the "Associated Files" section should open as new tabs in the VS Code editor.

## T-4: Plan Native Diff Integration
- **Files Involved:**
    - `src/Artifacts/A88. DCE - Native Diff Integration Plan.md`
- **Total Tokens:** ~1,000
- **More than one cycle?** Yes (Implementation is deferred)
- **Status:** In Progress

- [ ] **Task (T-ID: 4.1):** Create the new planning artifact `A88` to detail the implementation of a native VS Code diff view using a `TextDocumentContentProvider`.

### Verification Steps
1.  Check the `src/Artifacts` directory.
2.  **Expected:** The new `A88` artifact should exist and contain a detailed technical plan.
</file_artifact>

<file path="src/Artifacts/A69. DCE - Animated UI Workflow Guide.md">
# Artifact A69: DCE - Animated UI Workflow Guide
# Date Created: C169
# Author: AI Model & Curator
# Updated on: C187 (Correct final workflow steps)

## 1. Overview & Goal

The Parallel Co-Pilot Panel (PCPP) has a powerful, multi-step workflow that may not be immediately obvious to new users. The goal of this feature is to implement a guided experience using subtle UI animations. These animations will highlight the next logical action the user should take, gently guiding them through the process from project creation to generating the next cycle's prompt.

## 2. User Story

| ID | User Story | Acceptance Criteria |
|---|---|---|
| P2-WF-01 | **Guided Workflow** | As a new user, I want the UI to visually guide me through the steps of a development cycle, so I can learn the workflow intuitively. | - After a specific action is completed, the UI element for the next logical action is highlighted with a subtle animation (e.g., a pulsing blue glow). |

## 3. The Animated Workflow Sequence (The Perfect Loop)

The highlighting will follow this specific sequence of user actions:

### Onboarding / Cycle 0
1.  **Start (New Workspace):** User opens a new, empty folder in VS Code.
    *   **Auto-Action:** The **DCE Parallel Co-Pilot Panel** automatically opens.

2.  **Open PCPP (Welcome View):** The PCPP is open to the "Welcome" / "Onboarding" view.
    *   **Highlight:** The **Project Scope `textarea`** pulses.

3.  **Input Project Scope:** User types their project plan into the `textarea`.
    *   **Highlight:** The **`Generate Initial Artifacts Prompt`** button pulses.

4.  **Generate `prompt.md`:** User clicks the button. `prompt.md` and `DCE_README.md` are created. The view transitions to Cycle 1.
    *   **Auto-Action:** `prompt.md` and `src/Artifacts/DCE_README.md` are automatically opened in the editor.
    *   **Highlight:** The **`Resp 1`** tab in the PCPP pulses.

### Main Loop (Cycle 1+)
5.  **Paste Responses:** The user gets responses from an LLM and pastes them into the response tabs.
    *   **Highlight:** The highlight moves sequentially from **`Resp 1`** to **`Resp 2`**, etc., as each `textarea` is filled.
    *   **Trigger:** Once content is present in all tabs, the highlight moves to the next step.

6.  **Parse Responses:**
    *   **Highlight:** The **`Parse All`** button pulses.

7.  **Sort Responses:** User clicks `Parse All`.
    *   **Highlight:** The **`Sort`** button pulses. (Skips if already sorted).

8.  **Select a Response:** User reviews the responses.
    *   **Highlight:** The **`Select This Response`** button on each tab pulses.

9.  **Create Baseline:** User clicks `Select This Response`.
    *   **Highlight:** The **`Baseline (Commit)`** button pulses.
    *   **State-Aware Skip:** This step is skipped if the backend reports that the Git working tree is already clean.

10. **Select Files for Acceptance:** A successful baseline is created.
    *   **Highlight:** The "Associated Files" list panel and the **`Select All`** button within it pulse.

11. **Accept Changes:** User checks one or more files in the "Associated Files" list.
    *   **Highlight:** The **`Accept Selected`** button pulses.

12. **Write Context:** User clicks `Accept Selected`.
    *   **Highlight:** The **"Cycle Context"** `textarea` pulses.

13. **Write Title:** User types into the "Cycle Context" `textarea`.
    *   **Highlight:** The **"Cycle Title"** input field pulses.

14. **Generate Next Prompt:** User types a bespoke "Cycle Title".
    *   **Highlight:** The **`Generate prompt.md`** button pulses.

15. **Create New Cycle:** User clicks `Generate prompt.md`.
    *   **Highlight:** The **`[ + ]` (New Cycle)** button pulses, completing the loop and preparing for the next iteration which starts back at Step 5.
</file_artifact>

<file path="src/Artifacts/A70. DCE - Git-Integrated Testing Workflow Plan.md">
# Artifact A70: DCE - Git-Integrated Testing Workflow Plan
# Date Created: C169
# Author: AI Model & Curator
# Updated on: C12 (Specify that Restore must only delete associated new files)

## 1. Overview & Goal

A core part of the DCE workflow involves accepting an AI-generated response and testing it in the live workspace. If the response introduces bugs, the user must manually revert the changes. The goal of this feature is to automate this "test and revert" loop by deeply integrating with Git. This will provide a one-click method to create a baseline commit before testing and a one-click method to restore that baseline if the test fails.

**Status (C187):** In Progress.

## 2. User Stories

| ID | User Story | Acceptance Criteria |
|---|---|---|
| P2-GIT-01 | **Create Baseline** | As a developer, after accepting an AI response but before testing it, I want to click a "Baseline (Commit)" button to create a Git commit, so I have a safe restore point. | - A "Baseline (Commit)" button is available in the response acceptance header. <br> - Clicking it executes `git add .` and `git commit -m "DCE Baseline: Cycle [currentCycle] - [cycleTitle]"`. <br> - A "Successfully created baseline commit" notification is shown. |
| P2-GIT-02 | **Restore Baseline** | As a developer, after testing an AI response and finding issues, I want to click a "Restore Baseline" button to discard all changes, so I can quickly test a different response. | - A "Restore Baseline" button is available. <br> - Clicking it executes `git restore .` to revert changes to tracked files. <br> - It also deletes any new, untracked files that were part of the accepted AI response, leaving other untracked files untouched. <br> - The restore operation must **exclude** DCE-specific state files (e.g., `.vscode/dce_history.json`) to prevent data loss. |
| P2-GIT-03 | **State-Aware Baseline** | As a developer, I don't want to be prompted to create a baseline if my project is already in a clean state, and I want clear feedback if I try to baseline an already-clean repository. | - Before highlighting the "Baseline" button, the extension checks the `git status`. <br> - If the working tree is clean, the "Baseline" step in the animated workflow is skipped. <br> - If the user manually clicks "Baseline" on a clean tree, a message like "Already baselined" is shown. |
| P2-GIT-04 | **Guided Git Initialization** | As a new user who hasn't initialized a Git repository, when I click "Baseline," I want to see a clear error message that tells me what's wrong and gives me the option to fix it with one click. | - If `git` is not initialized, clicking "Baseline" shows a `vscode.window.showErrorMessage`. <br> - The message explains that the folder is not a Git repository. <br> - The message includes an "Open README Guide" button that opens the project's `DCE_README.md`. <br> - The message also includes an "Initialize Repository" button that, when clicked, automatically runs `git init` in the workspace. |
| P2-GIT-05 | **Post-Baseline Workflow** | As a developer, after a successful baseline is created, I want the animated guide to immediately advance to the next step, so I know what to do next. | - After a successful baseline commit, the animated workflow highlight immediately moves to the "Select All" button in the "Associated Files" list. |

## 3. Feasibility Analysis

-   **"Insanely Powerful" Idea (Simulate TS Errors):**
    -   **Concept:** Programmatically run the TypeScript compiler on a virtual file system containing the proposed changes and display the resulting errors without modifying the user's workspace.
    -   **Feasibility:** This is a highly complex task. It would require integrating the TypeScript compiler API, creating an in-memory representation of the workspace file system, and managing dependencies. While theoretically possible, this is a very advanced feature that would require significant research and multiple development cycles.
    -   **Recommendation:** Defer as a long-term research goal.

-   **"Baseline/Restore" Idea:**
    -   **Concept:** Execute standard Git commands from the extension backend.
    -   **Feasibility:** This is highly feasible. The VS Code Git extension exposes an API that can be used to run commands, or a child process can be used to execute the `git` CLI directly. The main challenge is ensuring the `git restore` command excludes the necessary files.
    -   **Recommendation:** Proceed with planning and implementation.

## 4. Technical Implementation Plan

1.  **IPC Channels:**
    *   `ClientToServerChannel.RequestGitBaseline`: Payload `{ commitMessage: string }`.
    *   `ClientToServerChannel.RequestGitRestore`: Payload `{ filesToDelete: string[] }`.
    *   `ClientToServerChannel.RequestGitStatus`: No payload.
    *   `ClientToServerChannel.RequestGitInit`: (New) No payload.
    *   `ServerToClientChannel.SendGitStatus`: Payload `{ isClean: boolean }`.
    *   `ServerToClientChannel.NotifyGitOperationResult`: Payload `{ success: boolean; message: string; }`. This channel is critical for the backend to provide explicit feedback to the frontend's workflow state machine.

2.  **Backend (New `GitService` - See `A73`):**
    *   A new `GitService` will encapsulate all Git command logic.
    *   **`handleGitStatusRequest()`:** A new handler that runs `git status --porcelain`. If the output is empty, it sends `{ isClean: true }` to the frontend.
    *   **`handleGitBaselineRequest(commitMessage)`:**
        *   Checks the status first. If clean, it returns a specific "Already baselined" result.
        *   Otherwise, it executes `git add .` and `git commit -m "..."`.
        *   **Crucially, it will have a specific `catch` block for "not a git repository" errors. This block will trigger the user-facing `showErrorMessage` with the two action buttons.**
    *   **`handleGitRestoreRequest({ filesToDelete })`:**
        *   Executes `git restore -- . ':(exclude).vscode/dce_history.json'`.
        *   Iterates through `filesToDelete` and deletes each one using `vscode.workspace.fs.delete`.
        *   Returns a result object.
    *   **`handleGitInitRequest()`:** (New) A new handler that executes `git init` and returns a success/failure result.

3.  **Frontend (`view.tsx`):**
    *   The frontend will request the Git status at appropriate times to drive the workflow state.
    *   The `onClick` handler for "Baseline" will construct the commit message and send the `RequestGitBaseline` message.
    *   The `onClick` handler for "Restore" will determine which files were newly created and send them in the `RequestGitRestore` message.
    *   A new message handler for `NotifyGitOperationResult` will display the result message and, if successful, will advance the `workflowStep` state from `awaitingBaseline` to `awaitingFileSelect`.
</file_artifact>

<file path="src/Artifacts/A72. DCE - README for Artifacts.md">
# Artifact A72: DCE - README for Artifacts
# Date Created: C158
# Author: AI Model & Curator
# Updated on: C183 (Strengthen Git initialization and `.gitignore` guidance)

- **Key/Value for A0:**
- **Description:** The content for the `README.md` file that is automatically created in a new project's `src/Artifacts` directory, explaining the purpose of the extension and the artifact-driven workflow.
- **Tags:** documentation, onboarding, readme, source of truth

## 1. Welcome to the Data Curation Environment (DCE)

This directory (`src/Artifacts/`) is the heart of your project's planning and documentation. It's managed by the **Data Curation Environment (DCE)**, a VS Code extension designed to streamline AI-assisted development.

This `README.md` file was automatically generated to provide context for you (the developer) and for the AI assistants you will be working with.

## 2. What is an "Artifact"?

In the context of this workflow, an **Artifact** is a formal, written document that serves as a "source of truth" for a specific part of your project. Think of these files as the official blueprints, plans, and records.

The core principle of the DCE workflow is **"Documentation First."** Before writing code, you and your AI partner should first create or update an artifact that describes the plan.

## 3. The Iterative Cycle Workflow

Development in the DCE is organized into **Cycles**. You have just completed the initial setup.

### Your Next Steps

1.  **Initialize Your Git Repository (CRITICAL):**
    To take full advantage of the DCE's testing workflow (creating baselines and restoring changes), you **must** initialize a Git repository.
    
    Open a terminal in your project's root directory (you can use the integrated terminal in VS Code: `Terminal > New Terminal`) and run the following commands:
    ```bash
    git init
    # Create or update your .gitignore file with the line below
    echo ".vscode/" >> .gitignore
    git add .
    git commit -m "Initial commit"
    ```
    **Why `.gitignore`?** The DCE saves its state in a `.vscode/dce_history.json` file. Adding `.vscode/` to your `.gitignore` is crucial to prevent the extension's UI from flashing every time it auto-saves. For a complete guide, refer to the `GitHub Repository Setup Guide.md` artifact.

2.  **Submit Your First Prompt:** The `prompt.md` file has been automatically opened for you. This file contains your project plan and instructions for the AI. Copy its entire contents and paste it into your preferred AI chat interface (like Google's AI Studio, ChatGPT, etc.).

3.  **Review and Accept Responses:** Paste the AI's responses back into the "Resp 1", "Resp 2", etc. tabs in the Parallel Co-Pilot panel. The UI will guide you through parsing the responses, selecting the best one, and accepting its changes into your workspace.

4.  **Repeat:** This completes a cycle. You then start the next cycle, building upon the newly accepted code and documentation.

This structured, iterative process helps maintain project quality and ensures that both human and AI developers are always aligned with the project's goals.
</file_artifact>

<file path="src/Artifacts/A52.1 DCE - Parser Logic and AI Guidance.md">
# Artifact A52.1: DCE - Parser Logic and AI Guidance
# Date Created: C155
# Author: AI Model & Curator
# Updated on: C14 (Make file tag parsing more flexible)

- **Key/Value for A0:**
- **Description:** Provides the literal source code for the response parser and explicit instructions to the AI on how to format its output to ensure successful parsing.
- **Tags:** documentation, process, parsing, metainterpretability, source of truth

## 1. Overview & Goal (Metainterpretability)

This document is included in every prompt to provide you with direct insight into how your responses are parsed. By understanding the exact logic used to interpret your output, you can structure your responses to be perfectly machine-readable, ensuring a smooth and reliable workflow.

The goal is to eliminate parsing failures caused by unexpected formatting. Adhering to this guide is a critical part of the interaction schema.

## 2. The Parser's Source Code

The following TypeScript code is the complete and exact logic used by the Parallel Co-Pilot Panel to parse your responses. It looks for specific XML tags to separate the summary, course of action, and file blocks.

```typescript
// src/client/utils/response-parser.ts
import { ParsedResponse, ParsedFile } from '@/common/types/pcpp.types';

const SUMMARY_REGEX = /<summary>([\s\S]*?)<\/summary>/;
const COURSE_OF_ACTION_REGEX = /<course_of_action>([\s\S]*?)<\/course_of_action>/;
const CURATOR_ACTIVITY_REGEX = /<curator_activity>([\s\S]*?)<\/curator_activity>/;
// C14 Update: More flexible closing tag matching
const FILE_TAG_REGEX = /<file path="([^"]+)">([\s\S]*?)(?:<\/file_path>|<\/file>|<\/filepath>|<\/file_artifact>)/g;
const CODE_FENCE_START_REGEX = /^\s*```[a-zA-Z]*\n/;

export function parseResponse(rawText: string): ParsedResponse {
    const fileMap = new Map<string, ParsedFile>();
    let totalTokens = 0;

    let processedText = rawText.replace(/\\</g, '<').replace(/\\>/g, '>').replace(/\\_/g, '_');

    const tagMatches = [...processedText.matchAll(FILE_TAG_REGEX)];

    if (tagMatches.length === 0 && processedText.includes('<file path')) {
        const summary = `**PARSING FAILED:** Could not find valid \`<file path="...">...</file_artifact>\` (or similar) tags. The response may be malformed or incomplete. Displaying raw response below.\n\n---\n\n${processedText}`;
        return { summary, courseOfAction: '', filesUpdated: [], files: [], totalTokens: Math.ceil(processedText.length / 4) };
    }

    for (const match of tagMatches) {
        const path = (match?. ?? '').trim();
        let content = (match?. ?? '');

        if (path) {
            content = content.replace(CODE_FENCE_START_REGEX, '');
            // C14 Update: Add new tags to the removal list
            const patternsToRemove = [`</file_artifact>`, `</file_path>`, `</filepath>`, `</file>`, `</${path}>`, '```', '***'];
            let changed = true;
            while(changed) {
                const originalContent = content;
                for (const pattern of patternsToRemove) {
                    if (content.trim().endsWith(pattern)) {
                        content = content.trim().slice(0, -pattern.length);
                    }
                }
                if (content === originalContent) { changed = false; }
            }
            content = content.trim();
            const tokenCount = Math.ceil(content.length / 4);
            fileMap.set(path, { path, content, tokenCount });
        }
    }

    const finalFiles = Array.from(fileMap.values());
    totalTokens = finalFiles.reduce((sum, file) => sum + file.tokenCount, 0);

    const summaryMatch = processedText.match(SUMMARY_REGEX);
    const courseOfActionMatch = processedText.match(COURSE_OF_ACTION_REGEX);
    const curatorActivityMatch = processedText.match(CURATOR_ACTIVITY_REGEX);

    const summary = (summaryMatch?.[1] ?? 'Could not parse summary.').trim();
    const courseOfAction = (courseOfActionMatch?.[1] ?? 'Could not parse course of action.').trim();
    const curatorActivity = (curatorActivityMatch?.[1] ?? '').trim();
    
    const filesUpdatedList = finalFiles.map(f => f.path);

    if (finalFiles.length === 0 && !summaryMatch && !courseOfActionMatch && !curatorActivityMatch) {
        return { summary: processedText, courseOfAction: '', filesUpdated: [], files: [], totalTokens: Math.ceil(processedText.length / 4) };
    }

    return {
        summary,
        courseOfAction,
        curatorActivity,
        filesUpdated: [...new Set(filesUpdatedList)],
        files: finalFiles,
        totalTokens,
    };
}
```

## 3. Critical Instructions for Formatting Your Response

To guarantee successful parsing, every response **must** follow this structure:

1.  **Summary:** Your high-level analysis and plan must be enclosed in `<summary>...</summary>` tags.
2.  **Course of Action:** Your point-by-point plan must be enclosed in `<course_of_action>...</course_of_action>` tags.
3.  **File Blocks:** Every file you generate must be enclosed in `<file path="..."></file_artifact>` tags (or a similar valid closing tag). The parser uses a global regex (`/g`) to find all occurrences of this pattern. The closing tag can be `</file_artifact>`, `</file_path>`, `</filepath>`, or `</file>`.

### Canonical Example:

```
<summary>
I have analyzed the request. My course of action is to update the main component and its corresponding stylesheet.
</summary>

<course_of_action>
1.  **Update `view.tsx`:** Add a new state variable and a button.
2.  **Update `view.scss`:** Add styling for the new button.
</course_of_action>

<file path="src/client/views/my-view/view.tsx">
// (Canonical Example) Full content of the view.tsx file...
</file_artifact>

<file path="src/client/views/my-view/view.scss">
/* (Canonical Example) Full content of the view.scss file... */
</file_artifact>
```
</file_artifact>

<file path="src/Artifacts/A52.2 DCE - Interaction Schema Source.md">
# Artifact A52.2: DCE - Interaction Schema Source
# Date Created: C156
# Author: AI Model & Curator
# Updated on: C6 (Clarify closing tag and add curator activity section)

- **Key/Value for A0:**
- **Description:** The canonical source text for the M3. Interaction Schema, which is injected into all generated prompts.
- **Tags:** documentation, process, interaction schema, source of truth

## Interaction Schema Text

1.  Artifacts are complete, individual texts enclosed in `<xmltags>`. To ensure consistent parsing by the DCE extension, all file artifacts **must** be enclosed in `<file path="path/to/file.ts">...</file_artifact>` tags. The path must be relative to the workspace root. **The closing tag must be exactly `</file_artifact>`.** Do not use the file path in the closing tag (e.g., `</file path="...">` is incorrect). Do not write the closing tag as `</file>` or `</file_path>`. Only `</file_artifact>` will parse successfully.

2.  Our Document Artifacts serve as our `Source of Truth` throughout multiple cycles. As such, over time, as issues occur, or code repeatedly regresses in the same way, seek to align our `Source of Truth` such that the Root Cause of such occurances is codified so that it can be avoided on subsequent cycles visits to those Code artifacts.

3.  Please output entire Document or Code artifacts. Do not worry about Token length. If your length continues for too long, and you reach the 600 second timeout, I will simply incorporate the work you did complete, and we can simply continue from where you left off. Better to have half of a solution to get started with, than not to have it. **Preference is for larger, more complete updates over smaller, incremental ones to align with the human curator's parallel processing workflow.** The human curator often sends the same prompt to multiple AI instances simultaneously and selects the most comprehensive response as the primary base for the next cycle, using other responses as supplementary information. Providing more complete updates increases the likelihood of a response being selected as the primary base.

4.  Do not output artifacts that do not require updates in this cycle. (Eg. Do not do this: // Updated on: Cycle 1040 (No functional changes, only cycle header))

5.  **Critical: `flattened_repo_v2.txt` contains all project files. Output updated *individual* files that are part of it (like `<src/state/coreStore.ts>...`). However, do **NOT** output the surrounding Artifact container tags (`<flattened_repo_v2.txt>...</flattened_repo_v2.txt>`) or any auto-generated metadata sections within it (like the Total Files summary, Top 10 list, or the `<files list>` section) which are created by the `flatten.js` script.**
5.1. `flattened_repo_v2.txt` is a copy of the codebase, generated by a script; assume its an accurate representation of the existing codebase, but not necessarily a 'source of truth' like we treat our documents as, our codebase is a living artifact, documents, while we can update them, should be considered less transient.
5.2. **`.local` File Convention:** To manage token count, some large data files (e.g., `researchNodes.ts`) may be represented by a truncated `.local.ts` version in the context. This version contains the essential structure and a few examples. If the full content of a file is required for a task (e.g., a comprehensive data refactor or fixing a bug related to a specific entry), explicitly state this need in your summary of actions and request that the curator swap the `.local.ts` file with the full `.ts` version in the `files_list.txt` for the subsequent cycle.

6.  remember to output complete artifacts without placeholders, im taking your output, putting it in winmerge, and confirming we arent losing data in the update. when you provide placeholders, my cursory review turns into a meticulous file parsing, taking me from what is 5 seconds per artifact to upwards of 5 minutes, only to realize that the output is actually un-parseable, due to the nature of relativity, as the theory of relativity also applies to code. if you give me a code snippet, and do not give me the code surrounding that snippet, i do not know where that code should go. by providing the complete file, on the other hand, i can put it in a diff, see easily what was altered, and if anything was accidentally omitted or lost, i can be sure that it's retained.

7.  **Update documentation before writing code.** document artifacts are like our project readme files, our source of truth. they are our blueprints. they guide the code we write. when we realize we need to alter our approach or invent new game mechanics, we update the source of truth first, cause english is easy and flexible, then we codify that.

8.  this query is part of a larger software engineering project

9.  After you complete delivery on a code artifact, review it to make sure you did not miss any intermediary files. for instance, if we have a DevelopmentSystem.ts, using the componentData.ts, which is displaying on the ComponentProductionTab.tsx. But then theres also still a DevPanel.tsx file that is in-between that *could*, but shouldnt, get overlooked.

10. If you are deciding where to put a particular piece of code or function, and due to its nature, there are one or more candidate files that it could be placed in, choose the smaller file (in tokens).

11. Begin your response with a course of action and end with a review of your work, surface any self corrections in the summary of changes for the subsequent cycle.

12. do not underestimate how much you can accomplish in a given cycle; you'd only accomplish handicapping yourself. (Eg. you've authored this whole thing with just my guidance. good job, keep it up.)

13. Not as relevant for this project: **Log State Button:** The 'Log State' button in the `DevInfoOverlay` is a dynamic debugging tool. Modify the `triggerDebugLogs` action in `uiStore.ts` to output specific state information relevant to the current bug being investigated. **See A85 (Logging Guide) for usage details.**

14. Not as relevant for this project: **Regression Case Studies:** Use Artifact A106 to document persistent or complex bugs and their resolutions. Add entries *after* a fix is confirmed to codify the RCA and solution, preventing future regressions.

15. Include in your cycle summary, a short list of files you've updated. This makes it easy for my reviews.

16. if you seem to have spare time in a cycle, see if you can spot any particular file with excessive levels of comments or logging that seems extensive and for troubleshooting an error that has since been resolved, see to it to clean those files but preserve their functionalities. im just looking to shave off excess tokens wherever possible in the master_content.txt file.

17. if you see `(No change from C850)` such language, it's data loss. there was supposed to be actual language behind that placeholder, but in one iteration (C850, in this case) you had provided a placeholder, and i 'missed it' and did not capture the initial information. you either need to deliver the placeholder in such a way as i can easily press the left arrow instead of the rigth arrow in winmerge to not accept that part, but to also not have winmerge confuse it with the rest, otherwise i must manually parse the information. when the process is a single keystroke, i can manage it quickly enough. when we remove that ability because you provided me data in a format that has placeholders AND the placeholders do not parse within winmerge such that it removes the benefit winmerge is adding, then we have our problem. when you see this, try to correct it using whatever current relevant context you have.

18. basically, you should not worry about brevity, because when you go too long, your response gets interrupted by the system anyway. its better that the products you do deliver are all complete except for the last one, rather than you delivering all incomplete products, including the last one. does that make sense?

19. remember, do not stop outputting for the reason of preventing a potential artifact interruption mid-output. you actually end up stopping yourself from producting two or three additional files before you actually get interrupted. what i mean is, in the outputs where you do not do this, you produce for 500 seconds, producing 7-9 files, and only the last one is interrupted and unusable. compared to when you stop yourself prematurely, for the reason stated, and you produce for 180 seconds and provide maybe 3-4 files. even with the -1, producing as much as you can still outperforms the alternative.

20. This is a misaligned statement: `// (For full history, see master_content.txt)` because your changes get rolled into master_content.txt. therefore, if you remove the history, then when your updates are rolled in, they will remove the full history. understand? after a while, the history is not relevant and can be rolled out, for a while, it ought to stay. you can see what we're working on + the current cycle and make this determination.

21. Each time we create a new documentation artifact, lets also create the key/value pairs needed for me to add it into our Master Artifact List. they can simply be added into the new artifact itself and ill make the new entry in A0. this will solve for me manually generating a description and tag for each new documentation artifact. also, dont place `/` in the title/name of a documentation artifact. VSCode treats it as a folder separator.
21.1. when creating a new documentation artifact, also just update the master artifacts list itself.

22. **New: Curator Activity Section:** If you need the human curator to perform an action that you cannot (e.g., delete a file, run a specific command), include these instructions in a dedicated `<curator_activity>...</curator_activity>` section in your response.
</file_artifact>

<file path="src/Artifacts/A77. DCE - Whitepaper Generation Plan.md">
# Artifact A77: DCE - Whitepaper Generation Plan

# Date Created: C181

# Author: AI Model & Curator

# Updated on: C182 (Incorporate "Process as Asset" theme and use case)

  - **Key/Value for A0:**
  - **Description:** A plan for brainstorming and developing a whitepaper to explain the value of the DCE to external stakeholders, particularly those in government and military contexts.
  - **Tags:** documentation, planning, whitepaper, stakeholders, government, military

## 1\. Overview & Goal

The director of UKILRN, along with NSA and naval officers, has expressed interest in the Data Curation Environment (DCE) project and requested a whitepaper. The goal of this artifact is to brainstorm themes and develop abstracts tailored to an audience focused on efficiency, auditability, and the application of technology to complex, mission-critical systems.

## 2\. Key Value Proposition & Use Case (Updated C182)

The central argument for the DCE is that it **accelerates the development and maintenance of complex systems by transforming the human-AI interaction workflow.** It moves beyond ad-hoc prompting to a structured process where curated context becomes a persistent, shared asset, enabling rapid iteration and efficient collaboration.

### 2.1. Use Case Spotlight: Rapid Iteration on Curated Datasets

A compelling example of the DCE's value is the curation and maintenance of specialized datasets, such as labs, lessons, or intelligence reports.

1.  **Curation:** An operator uses the DCE to precisely select the relevant source materials (e.g., a set of exam questions) for a specific task.
2.  **Collaboration:** This "selection set" (the curated context) is a shareable asset. A colleague can instantly load the exact same context, review the previous cycle's work (the history), and continue the task.
3.  **Rapid Iteration:** When feedback is received (e.g., "The correct answer is too often the longest choice"), the operator doesn't need to manually edit the files. They simply load the curated context and issue a targeted instruction to the AI (e.g., "Camouflage the distractors with more meaningful but ultimately fluffy language"). The AI performs the complex edits against the precise context, completing the update in a single, efficient cycle.

## 3\. Brainstormed Whitepaper Themes

*(See previous versions for initial brainstorming themes A-D)*

### 3.1. Refined Theme (C182)

Based on feedback emphasizing the DCE as an accelerator for existing priorities, a new primary theme has been developed.

**Theme E: Process as Asset: Accelerating specialized content creation through structured Human-AI collaboration.**

  * **Focus:** This theme emphasizes that the DCE transforms the workflow itself into a valuable, reusable asset. It highlights how the combination of rapid data curation, seamless sharing of context (Selection Sets), and the persistent knowledge graph (Cycle History) dramatically accelerates the creation and maintenance of specialized content.
  * **Audience Appeal:** Directly addresses the concern of "too many priorities" by positioning the DCE as the tool that makes achieving those priorities faster and more efficient. It appeals to operational leadership focused on scaling expertise and accelerating output.

## 4\. Selected Themes & Sample Abstracts

The following abstracts represent the most promising directions. **Sample 4 (Theme E) is the recommended primary direction based on C182 feedback.**

-----

### **Sample 1: Accelerating Complex Systems Development with Parallel AI Scrutiny**

**Executive Summary:** The integration of Artificial Intelligence into the software development lifecycle (SDLC) promises to accelerate delivery and enhance innovation. However, the stochastic nature of Large Language Models (LLMs) introduces significant risks, as a single AI-generated solution may contain subtle flaws, security vulnerabilities, or inefficiencies. This whitepaper introduces the Data Curation Environment (DCE), a novel framework integrated into Visual Studio Code that mitigates these risks by enabling a parallelized workflow. The DCE allows developers to generate, manage, and test multiple, distinct AI-generated solutions simultaneously. By providing tools for rapid, side-by-side comparison, integrated diffing, and one-click testing within a version-controlled environment, the DCE transforms the process from a linear, high-risk "accept/reject" decision into a strategic portfolio management approach. This paper details the DCE methodology and presents a case for its adoption in mission-critical software projects where speed, quality, and reliability are paramount.

-----

### **Sample 2: The Auditable Knowledge Graph: Structuring Human-AI Collaboration for Mission-Critical Systems**

**Executive Summary:** As Artificial Intelligence becomes a collaborative partner in complex problem-solving, the process of interaction—the prompts, the AI's suggestions, and the human's decisions—becomes a valuable asset. Traditional AI chat interfaces leave this history as an unstructured, ephemeral transcript. This whitepaper presents the Data Curation Environment (DCE), a system that captures the iterative human-AI collaboration process as a structured, persistent **Knowledge Graph**. Each "cycle" in the DCE workflow creates a node representing the system's state, the curated data context, the human's intent, multiple AI-generated solutions, and the operator's final decision. The resulting graph provides an unprecedented, fully auditable record of the entire analytical or development process. This has profound implications for after-action reviews, training new personnel on complex decision-making, and ensuring accountability in high-stakes environments. This paper outlines the architecture of the DCE and its application in creating transparent, traceable, and valuable knowledge assets from every human-AI interaction.

-----

### **Sample 3: A Framework for High-Fidelity Context Management in AI-Assisted Operations**

**Executive Summary:** The quality of output from any Large Language Model (LLM) is fundamentally dependent on the quality and precision of the input context. In high-stakes government and military applications, providing incomplete, incorrect, or bloated context can lead to flawed, misleading, or insecure results. This whitepaper introduces the Data Curation Environment (DCE), a framework and toolset designed to solve this "last mile" problem of context engineering. The DCE provides operators with a high-fidelity interface to precisely select, manage, and version the exact data—source code, technical documents, intelligence reports—that forms the prompt for an LLM. By integrating directly into the operator's native environment (VS Code), the DCE minimizes workflow friction and enables a rigorous, repeatable, and auditable process for context curation. This paper argues that such a framework is an essential component for the safe and effective operationalization of AI, moving beyond ad-hoc prompting to a deliberate, engineered approach to human-AI interaction.

-----

### **Sample 4 (Recommended): Process as Asset: Accelerating Specialized Content Creation through Structured Human-AI Collaboration**

**Executive Summary:** Organizations tasked with developing highly specialized content—such as technical training materials, intelligence reports, or complex software documentation—face a constant bottleneck: the time and expertise required to curate accurate data, collaborate effectively, and rapidly iterate on feedback. Traditional workflows are often manual, opaque, and inefficient. This whitepaper introduces the Data Curation Environment (DCE), a framework that transforms the content creation process itself into a valuable organizational asset. The DCE provides a structured, human-in-the-loop methodology that enables rapid dataset curation, seamless sharing of curated contexts between colleagues, and instant iteration on feedback. By capturing the entire workflow as a persistent, auditable knowledge graph, the DCE doesn't just help teams build content faster; it provides the infrastructure necessary to scale expertise, ensure quality, and accelerate the entire organizational mission.

## 5\. Production Plan

1.  **Theme Selection:** The curator will review the sample abstracts and select the final direction for the whitepaper. (Recommended: Sample 4).
2.  **Full Draft Generation:** In a subsequent cycle, the AI will be tasked to write the full whitepaper based on the selected theme, using all existing project artifacts as context.
3.  **Review and Refine:** The curator will review the AI-generated draft, provide feedback, and iterate until the whitepaper is finalized.
</file_artifact>

<file path="src/Artifacts/A78. DCE - VSIX Packaging and FTV Flashing Bug.md">
# Artifact A78: DCE - VSIX Packaging and FTV Flashing Bug
# Date Created: C183
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** Documents the root cause and solution for the bloated VSIX package and the persistent File Tree View flashing bug in the packaged extension.
- **Tags:** bug fix, packaging, vsix, vscodeignore, file watcher, git

## 1. Overview

This document addresses two critical issues identified during the packaging and testing of the DCE extension in Cycle 183:
1.  The final `.vsix` extension file is excessively large due to the inclusion of unnecessary development files.
2.  The File Tree View (FTV) exhibits a rapid "flashing" or refresh storm in the packaged version, which does not occur in the Extension Development Host.

## 2. Problem 1: Bloated VSIX Package

-   **Symptom:** The generated `.vsix` file is over 80MB and contains numerous files and directories that are not required for the extension to run, such as `prompt.md`, `flattened_repo.md`, the `The-Creator-AI-main/` reference directory, and the project's own `.vscode/` settings.
-   **Root Cause Analysis (RCA):** The `.vscodeignore` file, which instructs the `vsce` packaging tool which files to exclude, was incomplete. By default, `vsce` includes all files not explicitly ignored or listed in `.gitignore`.
-   **Codified Solution:** The `.vscodeignore` file must be updated to include patterns for all development-time artifacts, large output files, and source code that is not needed at runtime. This ensures a lean, efficient package.

### Proposed `.vscodeignore` additions:
```
# Development and output files
prompt.md
flattened_repo.md
log-state-logs.md
bootstrap-flattener.js

# Reference directories
The-Creator-AI-main/

# Project-specific VSCode settings
.vscode/

# Source maps and source code (already compiled to dist/)
**/*.map
**/*.ts
**/*.tsx
```

## 3. Problem 2: FTV Flashing in Packaged Extension

-   **Symptom:** The FTV continuously refreshes, making it unusable. Console logs show a storm of `[triggerFullRefresh] Called because: git state change` events.
-   **Root Cause Analysis (RCA):** The refresh storm is caused by an overly sensitive event listener combined with file system activity. The listener for `repo.state.onDidChange` in `file-tree.service.ts` is the primary culprit. This event fires for almost any change detected by the Git extension, including changes to build artifacts in the `dist/` directory or internal Git state files. In the packaged extension, the file layout and timing differ from the dev host, likely exposing this sensitivity more acutely. The file system watcher may also be contributing by picking up changes that slip past the exclusion patterns.
-   **Codified Solution & Best Practice:**
    1.  **Diagnose with Aggressive Logging:** The immediate solution is to inject high-visibility logging into `file-tree.service.ts` to pinpoint the exact trigger.
        *   Add a log inside the `repo.state.onDidChange` listener to confirm its firing frequency.
        *   Add a log at the very beginning of the `onFileChange` handler to see every single file path the watcher detects, before any exclusion logic is applied.
    2.  **Strengthen Exclusions:** The exclusion logic in `file-tree.service.ts` must be made more robust to explicitly ignore build artifacts and internal state files under all conditions.
    3.  **Dampen Event Listener:** The `repo.state.onDidChange` listener should be heavily debounced via the `triggerFullRefresh` function to prevent a storm of events from causing a storm of UI updates. A longer-term solution would be to find a more specific Git API event to listen to, if one exists.
</file_artifact>

