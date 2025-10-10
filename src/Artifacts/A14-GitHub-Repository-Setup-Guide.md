# Artifact A14: aiascent.dev - GitHub Repository Setup Guide

# Date Created: C0

# Author: AI Model & Curator

  - **Key/Value for A0:**
  - **Description:** A guide on setting up the aiascent.dev project with Git and GitHub, including the essential workflow for using Git alongside the Data Curation Environment (DCE).
  - **Tags:** git, github, version control, workflow, setup, dce

## 1. Overview

This guide provides the necessary commands to turn your local `aiascent.dev`project folder into a Git repository, link it to a new repository on GitHub, and outlines the standard workflow for using Git alongside the Data Curation Environment (DCE).

## 2. Prerequisites

*   You have `git`installed on your machine.
*   You have a GitHub account.

## 3. Step-by-Step Setup

### Step 1: Create a New Repository on GitHub

1.  Go to [github.com](https://github.com) and log in.
2.  In the top-right corner, click the `+`icon and select **"New repository"**.
3.  **Repository name:** `aiascent-dev`(or similar).
4.  **Description:** "Promotional and educational website for the Data Curation Environment (DCE) VS Code Extension."
5.  Choose **"Private"** or **"Public"**.
6.  **IMPORTANT:** Do **not** initialize the repository with a `README`, `.gitignore`, or `license`. We will be pushing our existing files.
7.  Click **"Create repository"**.

### Step 2: Initialize Git in Your Local Project

Open a terminal and navigate to your project's root directory. Then, run the following commands one by one.

1.  **Initialize the repository:**
    `git init`

2.  **Create/Update `.gitignore`:** Ensure you have a `.gitignore`file. Crucially, it must include `.vscode/`to prevent DCE state files from causing issues, along with standard Next.js ignores. You can create a basic one with:
    ```bash
    echo "node_modules/\n.next/\n.env.local\n.vscode/" > .gitignore
    ```

3.  **Add all existing files:**
    `git add .`

4.  **Create the first commit:**
    `git commit -m "C0: Initial commit with project artifacts"`

5.  **Rename the default branch to `main`:**
    `git branch -M main`

### Step 3: Link and Push to GitHub

1.  **Add the remote repository:** Replace the placeholder URL with the one from your GitHub repository page.
    `git remote add origin https://github.com/YOUR_USERNAME/aiascent-dev.git`

2.  **Push your local `main`branch to GitHub:**
    `git push -u origin main`

## 4. Standard Development Workflow with DCE and Git

Git is essential for managing the iterative changes produced by the DCE. It allows you to quickly test an AI's proposed solution and revert it cleanly if it doesn't work.

### Step 1: Start with a Clean State

Before starting a new cycle, ensure your working directory is clean (`git status`). All previous changes should be committed.

### Step 2: Generate and Parse Responses

Use the DCE to generate a `prompt.md`file. Get multiple responses from your AI model, paste them into the Parallel Co-Pilot Panel, and click "Parse All".

### Step 3: Accept and Test

1.  Review the responses and select one that looks promising.
2.  Use the **"Accept Selected Files"** button (or the integrated "Baseline" feature if available) to write the AI's proposed changes to your workspace.
3.  Compile and test the website (`npm run dev`). Does it work? Are there errors?

### Step 4: The "Restore" Loop

*   **If the changes are bad (e.g., introduce bugs):**
    1.  Open the terminal in VS Code.
    2.  Run the command: `git restore .`
    3.  This instantly discards all uncommitted changes, reverting your files to the state of your last commit.
    4.  You are now back to a clean state and can select a *different* AI response in the DCE panel and test the next solution.

*   **If the changes are good:**
    1.  Stage the changes (`git add .`).
    2.  Write a commit message (e.g., "C1: Implement Next.js scaffolding").
    3.  Commit the changes (`git commit -m "..."`).
    4.  You are now ready to start the next development cycle.