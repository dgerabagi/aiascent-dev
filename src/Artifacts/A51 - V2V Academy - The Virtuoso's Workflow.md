- **Key/Value for A0:**
- **Description:** A detailed, reverse-engineered breakdown of the curator's expert workflow, codifying the practical steps of the "Vibecoding to Virtuosity" pathway.
- **Tags:** v2v, workflow, process, cognitive apprenticeship, reverse engineering

## 1. Overview

This document reverse-engineers and codifies the curator's expert workflow for AI-assisted development. This process, referred to as the "Virtuoso's Loop," represents the end-goal of the "Vibecoding to Virtuosity" pathway. It is a structured, iterative, and highly effective methodology for moving from a high-level goal to a tested and implemented solution in partnership with an AI. This workflow will serve as the "north star" for the V2V curriculum.

## 2. The Virtuoso's Loop: A Step-by-Step Breakdown

The workflow is a cycle that integrates planning, AI interaction, and rigorous validation.

### Step 1: Curation & Documentation (The "Documentation First" Principle)

The cycle begins not with a prompt, but with data and planning.
1.  **Curate the Knowledge Base:** The curator gathers all relevant documents, code files, research, and raw data into a structured folder system. This becomes the AI's "library."
2.  **Define the Goal in an Artifact:** The curator creates or updates a planning artifact (e.g., `A[XX] - New Feature Plan.md`). This document serves as the "source of truth" for the current task.
3.  **Select Context:** Using the DCE's File Tree View, the curator selects the specific files and artifacts that are relevant to the immediate task, creating a precise context.

### Step 2: Parallel Prompting & Response Triage

This step leverages parallelism to explore the solution space and select the most promising starting point.
1.  **Generate `prompt.md`:** The curator uses the DCE to automatically generate a complete `prompt.md` file, which includes the project's interaction schema, the full cycle history, and the flattened content of the selected files.
2.  **Execute Parallel Prompts:** The curator sends this identical `prompt.md` to multiple instances of the AI (e.g., 4-8 tabs in AI Studio).
3.  **Parse and Sort:** The raw responses are pasted into the DCE's Parallel Co-Pilot Panel, parsed into a structured view, and then sorted by total token count. The curator starts their review with the longest response, which is often the most detailed.

### Step 3: Critical Analysis & Selection (The Human-in-the-Loop)

This is the core human judgment step.
1.  **Review the Plan:** The curator reviews the AI's proposed "Course of Action" and the list of "Associated Files" to ensure the AI's plan is logical and complete.
2.  **Diff the Changes:** The curator uses the integrated diff viewer to compare the AI's proposed code changes against the current workspace files.
3.  **Select the Best Response:** Based on the analysis, the curator clicks "Select This Response" on the most promising solution, designating it as the primary candidate for the cycle.

### Step 4: The Test-and-Revert Loop (Git-Integrated Validation)

This is the rapid, low-risk testing phase.
1.  **Create a Baseline:** The curator clicks the "Baseline (Commit)" button, which creates a `git commit` of the current state of the workspace, providing a safe restore point.
2.  **Accept Changes:** The curator selects the specific files from the chosen response they wish to test and clicks "Accept Selected." This overwrites the local files with the AI's generated code.
3.  **Test:** The curator runs the application, linter, or test suite to validate the changes.
4.  **Decision:**
    *   **If the test fails:** The curator clicks "Restore Baseline." This command uses `git restore .` to instantly discard all changes, returning the workspace to its clean state. The curator can then choose to accept a different set of files or a different AI response and repeat the test.
    *   **If the test succeeds:** The changes are kept, and the workflow proceeds.

### Step 5: Finalize & Prepare for Next Cycle

Once a successful solution has been integrated, the curator prepares for the next iteration.
1.  **Update Context:** The curator writes notes, feedback, or the next high-level goal into the "Cycle Context" and "Cycle Title" fields in the DCE.
2.  **Start New Cycle:** The curator clicks the `+` button to create a new, empty cycle. The process then repeats from Step 1.

This entire loop codifies the principles of Cognitive Apprenticeship: the human **models** the high-level strategy through documentation, the AI is **coached** through iterative feedback, and the Git workflow provides **scaffolding** for safe exploration.