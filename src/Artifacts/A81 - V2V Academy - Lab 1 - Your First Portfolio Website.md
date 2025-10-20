# Artifact A81: V2V Academy - Lab 1 - Your First Portfolio Website
# Date Created: C93
# Author: AI Model & Curator
# Updated on: C95 (Refine language for Step 34)

- **Key/Value for A0:**
- **Description:** The detailed content for Lab 1 of the V2V Academy, "Your First Portfolio Website," designed for the interactive report viewer. This lab guides a new user through the entire DCE workflow.
- **Tags:** v2v, curriculum, lab, project-based learning, dce, portfolio, interactive learning

## **Lab 1: Your First Portfolio Website**

---
### **Page 1: Introduction - Your First Project**
*   **Page Title:** Lab 1: Your First Project with the DCE
*   **Image Prompt:** A welcoming, futuristic graphic with the title "Lab 1: Build Your First Portfolio Website" prominently displayed. The background should show a blueprint of a website, indicating a construction or creation theme.
*   **TL;DR:** In this lab, you will learn the complete, end-to-end workflow of the Data Curation Environment (DCE) by building a simple, professional portfolio website from scratch, with an AI as your partner.
*   **Content:** Welcome to your first hands-on lab in the V2V Academy! The best way to learn the "Virtuoso's Loop" is to practice it. Over the next series of steps, you will use the DCE to initiate a new project, collaborate with an AI to generate the code, and launch your very own personal portfolio website. We will guide you through every single click, explaining the "what" and the "why" at each stage. This lab assumes you have no prior experience with coding, Git, or AI-assisted development. Let's begin.

---
### **Page 2: Step 1 - Download Visual Studio Code**
*   **Page Title:** Step 1: Download Visual Studio Code
*   **Image Prompt:** A screenshot of the official Visual Studio Code download page (code.visualstudio.com), with the download button for the user's operating system clearly highlighted.
*   **TL;DR:** Download and install Visual Studio Code (VS Code), the free and powerful code editor that will be your primary work environment.
*   **Content:** The entire V2V workflow takes place inside **Visual Studio Code**, a code editor created by Microsoft that has become the industry standard for developers worldwide. The DCE is an *extension* for VS Code, so you'll need the editor first. If you don't already have it, please navigate to the official website and download the installer for your operating system (Windows, macOS, or Linux). Follow the installation instructions to get it set up on your machine.

---
### **Page 3: Step 2 - Install the DCE Extension**
*   **Page Title:** Step 2: Install the DCE Extension
*   **Image Prompt:** A screenshot of the VS Code "Extensions" view. The user's mouse is hovering over the "..." (More Actions) menu, and the "Install from VSIX..." option is highlighted.
*   **TL;DR:** Install the Data Curation Environment (DCE) extension into VS Code using the `.vsix` file provided.
*   **Content:** The DCE is distributed as a `.vsix` file. To install it:
    1.  Open Visual Studio Code.
    2.  Navigate to the **Extensions** view by clicking the icon that looks like four squares in the Activity Bar on the left side of the window.
    3.  Click the **...** (More Actions) button at the top-right of the Extensions view.
    4.  Select **"Install from VSIX..."** from the dropdown menu.
    5.  In the file dialog that opens, navigate to and select the `.vsix` file for the DCE.
    6.  VS Code will install the extension and may prompt you to reload the window.

---
### **Page 4: Step 3 - Create Your Projects Directory**
*   **Page Title:** Step 3: Create Your Projects Directory
*   **Image Prompt:** A screenshot of Windows File Explorer or macOS Finder showing a new folder named `Projects` being created in the `C:\` drive or the user's home directory.
*   **TL;DR:** Create a dedicated folder on your computer to store all your development projects.
*   **Content:** It is a best practice to keep all of your coding projects in a single, easy-to-access location. We recommend creating a `Projects` folder in the root of your main drive (e.g., `C:\Projects` on Windows). This keeps your work organized and separate from your other files. Please create this folder now.

---
### **Page 5: Step 4 - Create the Project Folder**
*   **Page Title:** Step 4: Create the Project Folder
*   **Image Prompt:** A screenshot showing the newly created `Projects` directory, with a new subfolder named `portfolio-website` highlighted.
*   **TL;DR:** Inside your `Projects` directory, create a new folder for this specific lab named `portfolio-website`.
*   **Content:** Now, inside the `C:\Projects` directory you just created, make a new folder and name it `portfolio-website`. This folder will contain all the files for the portfolio website you are about to build.

---
### **Page 6: Step 5 - Open the Project in VS Code**
*   **Page Title:** Step 5: Open the Project in VS Code
*   **Image Prompt:** A screenshot of the VS Code "File" menu with the "Open Folder..." option highlighted. The file dialog is shown selecting the `portfolio-website` folder.
*   **TL;DR:** Open your new `portfolio-website` folder in VS Code. This sets it as your active project, or "workspace."
*   **Content:** It's time to start your project.
    1.  In VS Code, go to the "File" menu.
    2.  Select "Open Folder..."
    3.  Navigate to `C:\Projects\portfolio-website` and click "Select Folder."
    VS Code will reload and the `portfolio-website` folder will now be your active **workspace**. This is the environment where you will do all your work for this project.

---
### **Page 7: Step 6 - Open the DCE Panel**
*   **Page Title:** Step 6: Open the DCE Panel
*   **Image Prompt:** A screenshot of the VS Code Activity Bar on the left. The spiral icon for the DCE is highlighted. The main panel area shows the DCE's "Onboarding" view.
*   **TL;DR:** Click the spiral icon in the Activity Bar to open the DCE panel. This will automatically start the onboarding process for your new project.
*   **Content:** Look at the Activity Bar on the far left of your VS Code window. You should see a new icon that looks like a spiral. This is the entry point for the Data Curation Environment. Click on it. Because this is the first time you are using the DCE in this new project, it will automatically open to the "Onboarding" screen, also known as "Cycle 0."

---
### **Page 8: Step 7 - Write Your Project Scope**
*   **Page Title:** Step 7: Define Your Vision
*   **Image Prompt:** A screenshot of the DCE Onboarding view. The "Project Scope" text area is filled with the example scope provided in the content.
*   **TL;DR:** Describe the website you want to build in the "Project Scope" text area. This is your first instruction to the AI.
*   **Content:** The first step in any project is to define your vision. The large text area you see is for your **Project Scope**. This is where you tell the AI, in plain English, what you want to build. Since this is your first project, you might be facing the "blank page problem." Don't worry! We've written a starting scope for you. Copy the text below and paste it into the "Project Scope" text area:

    > The vision of this project is to create a professional and engaging personal portfolio website. It will serve as the primary public-facing hub for me, a Citizen Architect, to showcase my skills and projects. The website will be a living testament to my capabilities, featuring an interactive showcase of projects I have built.
    >
    > The website should have a clean, modern, and professional aesthetic, with a dark-mode-first design. It should be fully responsive and look great on desktop and mobile devices.
    >
    > The main sections will include:
    > 1.  A "Home" page with a compelling headline and an introduction.
    > 2.  An "About Me" page with my professional summary and skills.
    > 3.  A "Showcase" page to display my projects.
    > 4.  A "Contact" page with links to my GitHub, LinkedIn, etc.

---
### **Page 9: Step 8 - Generate Initial Artifacts**
*   **Page Title:** Step 8: Generate Your First Prompt
*   **Image Prompt:** A screenshot of the DCE Onboarding view. The user's mouse is hovering over the "Generate Initial Artifacts Prompt" button, which is highlighted.
*   **TL;DR:** Click the "Generate Initial Artifacts Prompt" button. The DCE will use your scope to create a complete prompt file for the AI.
*   **Content:** Now that you've defined your vision, it's time to turn it into a complete, structured prompt for the AI. Click the **`Generate Initial Artifacts Prompt`** button. The DCE will take your project scope, combine it with a set of best-practice templates, and create two new files in your editor.

---
### **Page 10: Step 9 - Review the Generated Files**
*   **Page Title:** Step 9: Review the Generated Files
*   **Image Prompt:** A screenshot of the VS Code editor showing two new tabs: `prompt.md` and `DCE_README.md`. The `DCE_README.md` tab is active.
*   **TL;DR:** The DCE has created `prompt.md` and `DCE_README.md`. Take a moment to read the `DCE_README.md` file.
*   **Content:** You will now see two new files open in your editor.
    1.  **`DCE_README.md`:** This file explains the purpose of the `src/Artifacts` directory that was just created for you. It provides a high-level overview of the DCE workflow. Please take a moment to read its contents.
    2.  **`prompt.md`:** This is the master prompt file. It contains everything the AI needs to start planning your project. We'll look at this next.

---
### **Page 11: Step 10 - Review the Master Prompt**
*   **Page Title:** Step 10: A Cursory Review of `prompt.md`
*   **Image Prompt:** A screenshot of the `prompt.md` file, with the user scrolling through it. The different sections like `<M1. artifact schema>` and `<M4. current project scope>` should be visible.
*   **TL;DR:** Briefly look over the `prompt.md` file. You don't need to understand everything, but notice how the DCE has structured all the information for the AI.
*   **Content:** Click on the `prompt.md` tab. This file might seem large and complex, but it's highly structured. Take a moment to scroll through it. Notice the different sections:
    *   `<M1. artifact schema>`: A table of contents for the prompt itself.
    *   `<M3. interaction schema>`: The rules you are giving the AI on how it should format its response.
    *   `<M4. current project scope>`: The vision you wrote in Step 7!
    This structure is what allows the DCE to reliably parse the AI's response later. You don't need to read it all in detail right now.

---
### **Page 12: Step 11 - Copy the Prompt**
*   **Page Title:** Step 11: Copy the Entire Prompt
*   **Image Prompt:** A screenshot showing the `prompt.md` file in VS Code. The user is pressing `Ctrl + A` (or `Cmd + A`), and all the text in the file is highlighted.
*   **TL;DR:** Select all the text in `prompt.md` and copy it to your clipboard.
*   **Content:** Now, you need to copy the entire contents of the `prompt.md` file. The fastest and most accurate way to do this is with keyboard shortcuts:
    1.  Make sure the `prompt.md` file is the active tab in your editor.
    2.  Press **`Ctrl + A`** (or **`Cmd + A`** on Mac) to select all the text.
    3.  Press **`Ctrl + C`** (or **`Cmd + C`** on Mac) to copy the selected text to your clipboard.

---
### **Page 13: Step 12 - Open Your AI Tool**
*   **Page Title:** Step 12: Open AI Studio
*   **Image Prompt:** A screenshot of Google's AI Studio (aistudio.google.com) open in a web browser. The model is set to "Gemini 2.5 Pro" and the temperature is set to 0.7. Four separate browser tabs are shown, each with AI Studio open.
*   **TL;DR:** Open four separate tabs in your web browser and navigate to Google's AI Studio. Configure the model settings as shown.
*   **Content:** Now you need to get responses from an AI. The DCE is designed to work with any AI, but for this lab, we will use Google's AI Studio, which provides free access to a very powerful model.
    1.  Open your web browser of choice.
    2.  Open **four separate tabs**.
    3.  In each tab, navigate to **aistudio.google.com**.
    4.  In each tab, configure the settings:
        *   **Model:** `Gemini 2.5 Pro`
        *   **Temperature:** `0.7`
        *   **Thinking budget:** `Maximum`
    Pasting the same prompt into multiple tabs and getting parallel responses is a core part of the V2V workflow. It allows you to explore different solutions and choose the best one.

---
### **Page 14: Step 13 - Return to the PCPP**
*   **Page Title:** Step 13: Return to the DCE Panel
*   **Image Prompt:** A screenshot of VS Code. The `prompt.md` and `DCE_README.md` tabs have been closed, revealing the Parallel Co-Pilot Panel (PCPP) view. The `Resp 1` tab is highlighted with an animation.
*   **TL;DR:** Close the `prompt.md` and `DCE_README.md` tabs in VS Code to reveal the Parallel Co-Pilot Panel (PCPP).
*   **Content:** Back in VS Code, you can now close the `prompt.md` and `DCE_README.md` file tabs. Behind them, you will see the main interface of the DCE: the Parallel Co-Pilot Panel. This is where you will manage the AI's responses. Notice that the `Resp 1` tab is animated, guiding you to your next step.

---
### **Page 15: Step 14 - Paste the Responses**
*   **Page Title:** Step 14: Paste the AI Responses
*   **Image Prompt:** A screenshot showing the PCPP with text being pasted into the `Resp 1`, `Resp 2`, `Resp 3`, and `Resp 4` tabs sequentially.
*   **TL;DR:** Paste the prompt from your clipboard into each of the four AI Studio tabs. Once you get the responses back, copy each one and paste it into the corresponding `Resp` tab in the PCPP.
*   **Content:** Now, execute the parallel prompt:
    1.  Go to your first AI Studio browser tab and paste the prompt into the input area. Send it.
    2.  Repeat this for all four browser tabs.
    3.  As each AI finishes generating its response, click the "Copy as Markdown" button in AI Studio.
    4.  Go back to VS Code and paste the response into the corresponding tab in the PCPP (the response from the first browser tab goes into `Resp 1`, the second into `Resp 2`, and so on).

---
### **Page 16: Step 15 - Parse the Responses**
*   **Page Title:** Step 15: Parse All Responses
*   **Image Prompt:** A screenshot of the PCPP. All four response tabs have content. The "Parse All" button in the main toolbar is highlighted with an animation.
*   **TL;DR:** Once all four responses are pasted in, click the "Parse All" button.
*   **Content:** With all four responses loaded into the PCPP, you are ready for the next step. Notice that the **`Parse All`** button in the main toolbar is now highlighted. **Parsing** is the process of taking the raw text from the AI and breaking it down into a structured format that the DCE can understand (summary, plan, file blocks). Click the `Parse All` button now.

---
### **Page 17: Step 16 - Sort the Responses**
*   **Page Title:** Step 16: Sort by Tokens
*   **Image Prompt:** A screenshot of the PCPP after parsing. The "Sort" button is highlighted. The tabs now show metadata like "(5 files, 2.1K tk)".
*   **TL;DR:** Click the "Sort" button. This will reorder the response tabs from largest to smallest, which is a good starting point for your review.
*   **Content:** After parsing, the UI transforms. You can now see metadata on each tab, including the number of files and the total "token" count (a measure of size). The **`Sort`** button is now highlighted. Click it. This reorders the tabs, placing the response with the most content first.
    
    **Why is this valuable?** For a new user who doesn't yet have an intuition for what makes a "good" response, sorting by length is a simple, objective starting point. In the early planning phases of a project, a longer response from the AI often means it has generated more comprehensive documentation or considered more possibilities. It's a sound strategy for a novice to begin their review with the most detailed option.

---
### **Page 18: Step 17 - Select the Longest Response**
*   **Page Title:** Step 17: Select the Longest Response
*   **Image Prompt:** A screenshot of the PCPP. The first tab (the longest response) is active, and the "Select This Response" button within that tab's toolbar is highlighted.
*   **TL;DR:** Review the sorted responses and click the "Select This Response" button on the first tab (the longest one).
*   **Content:** The tabs are now sorted. The first tab represents the most detailed response from the AI. For this first cycle, we will proceed with this option. Click the **`Select This Response`** button in the toolbar for `Resp 1`. This tells the DCE that you've chosen this response as the primary candidate for this cycle.

---
### **Page 19: Step 18 - Create a Baseline**
*   **Page Title:** Step 18: Create a Baseline (and encounter your first "error")
*   **Image Prompt:** A screenshot of the PCPP. The user has just clicked the "Baseline (Commit)" button, and a VS Code error message has appeared at the bottom right: "This is not a git repository."
*   **TL;DR:** Click the "Baseline (Commit)" button. You will see an error message because we haven't set up version control yet. This is expected.
*   **Content:** The animated guide is now highlighting the **`Baseline (Commit)`** button. This feature uses a version control system called **Git** to create a safe restore point before you apply the AI's code. However, since this is a brand new project, Git hasn't been set up yet.
    
    Click the `Baseline (Commit)` button now. You will see an error message appear. This is an expected and important part of your first lesson! It demonstrates how the DCE guides you when something is missing. Most new users won't have Git installed, so the next steps will guide you through fixing this.

---
### **Page 20: Step 19 - The Failsafe Loop**
*   **Page Title:** Step 19: The Failsafe Rinse-Repeat Process
*   **Image Prompt:** A simple, encouraging graphic that shows a circular arrow with the text "Find Problem -> Ask AI for Help -> Get Solution -> Repeat."
*   **TL;DR:** You've encountered a problem. The V2V workflow is designed for this. We will now use the AI itself to solve the problem of not having Git installed.
*   **Content:** You are now experiencing the core V2V feedback loop in action. You have a problem: you need to initialize a "git repository," but you don't have Git installed and don't have instructions. We will now use the exact same process you just learned to ask the AI to solve this problem for us. This is the failsafe, rinse-repeat process that allows you to solve any problem, even if you have no prior experience.

---
### **Page 21: Step 20 - Checking for Existing Instructions**
*   **Page Title:** Step 20: Accept the Artifacts to Review Them
*   **Image Prompt:** A screenshot of the PCPP. The "Associated Files" panel is shown, and the "Select All" button inside it is highlighted.
*   **TL;DR:** We need to review the documentation the AI has already created for us. It might already contain the instructions we need.
*   **Content:** Even though we can't create a Git baseline, we can still accept the documentation artifacts the AI generated in the last step. It's possible the AI has already provided a `GitHub Repository Setup Guide` that tells us what to do.
    
    The animated workflow is now highlighting the **`Select All`** button in the "Associated Files" list. Click it. This will check the boxes for all the new documentation files the AI has proposed.

---
### **Page 22: Step 21 - Accept and Navigate**
*   **Page Title:** Step 21: Accept Selected Files
*   **Image Prompt:** A screenshot of the PCPP. The "Accept Selected" button is highlighted. In the background, the VS Code File Explorer shows the new files being created in the `src/Artifacts` directory.
*   **TL;DR:** Click "Accept Selected" to create the new documentation files in your project. Then, navigate to the `src/Artifacts` folder to see them.
*   **Content:** Now that all the files are checked, the **`Accept Selected`** button is highlighted. Click it. This will write the new files to your workspace. You will see a new `src/Artifacts` folder appear in the VS Code File Explorer on the left. Expand it and look at the new files the AI has created for your project.

---
### **Page 23: Step 22 - Your First Cycle**
*   **Page Title:** Step 22: Your First Cycle - Asking for Help
*   **Image Prompt:** A screenshot showing the VS Code file explorer with a `GitHub-Repository-Setup-Guide.md` file highlighted. The content of the file is visible, showing a "Prerequisites: git" section.
*   **TL;DR:** You've found a guide, but it has a prerequisite you don't have. This is your first real problem to solve! We will now create a new cycle to ask the AI for Git installation instructions.
*   **Content:** In our case, we found a `GitHub-Repository-Setup-Guide.md` file. It tells us how to initialize a repository, but it also lists a prerequisite: "You have `git` installed on your machine." This is a perfect example of **experiential blindness**—the guide's author assumed the reader would already have Git.
    
    We will now start our first *real* development cycle to solve this problem. In the PCPP, in the "Cycle & Context" section, enter the following:
    *   **Cycle Title:** `Create Git Installation Instructions`
    *   **Cycle Context:** `I need to 'initialize a git repository', but the instructions say I need to have 'git' as a prerequisite. I do not have git and I do not have instructions on how to get it. Can you provide me with those instructions in a new artifact? I am on a [windows/mac] machine.` (Choose your operating system).

---
### **Page 24: Step 23 - Generate the Next Prompt**
*   **Page Title:** Step 23: Generate the Prompt for Cycle 1
*   **Image Prompt:** A screenshot of the PCPP. The "Cycle & Context" banner is highlighted in green, and the "Generate prompt.md" button is also highlighted.
*   **TL;DR:** The "Cycle & Context" banner is now green, indicating you are ready. Click "Generate prompt.md" to create the prompt for your first cycle.
*   **Content:** Notice that the "Cycle & Context" banner at the top of the PCPP has turned green. This indicates that you have met all the criteria to create a new cycle prompt. The animated guide is now highlighting the **`Generate prompt.md`** button. Click it. The `prompt.md` file will be created and opened for you.

---
### **Page 25: Step 24 - Review the New Prompt**
*   **Page Title:** Step 24: Review the New Prompt
*   **Image Prompt:** A screenshot of the new `prompt.md` file. The user is scrolling, and the `<M5. organized artifacts list>` and `<M7. Flattened Repo>` sections are visible, now containing the newly created artifact files.
*   **TL;DR:** Briefly look at the new `prompt.md`. Notice that it now includes the artifacts you just accepted. This is how the AI maintains context.
*   **Content:** This is the second time you've seen the `prompt.md` file. The main difference is that it now includes the new documentation artifacts in the `<M5. organized artifacts list>` and `<M7. Flattened Repo>` sections. This is how the DCE maintains context from one cycle to the next, ensuring the AI always has the latest version of the project.
    
    Now, just as before:
    1.  Copy the entire contents of this new `prompt.md`.
    2.  Go back to your AI Studio tabs. Clear out the old prompts and responses.
    3.  Paste this new prompt into all four tabs and get the new responses.

---
### **Page 26: Step 25 - Create a New Cycle**
*   **Page Title:** Step 25: Create Cycle 2
*   **Image Prompt:** A screenshot of the PCPP. The `+` button in the cycle navigator is highlighted.
*   **TL;DR:** Once you have your new AI responses, click the `+` button in the PCPP to create a new cycle.
*   **Content:** Before you paste in the new responses, you need to create a new cycle in the DCE to hold them. In the PCPP, in the "Cycle & Context" section, you'll see the cycle navigator (`< C1 >`). Click the **`+`** button to create Cycle 2. The view will update to a fresh, empty set of tabs for the new cycle.

---
### **Page 27: Step 26 - Paste and Parse Again**
*   **Page Title:** Step 26: Paste and Parse Cycle 2
*   **Image Prompt:** A sequence of screenshots showing the user pasting the new responses into the Cycle 2 tabs, then clicking "Parse All."
*   **TL;DR:** Paste your four new responses into the tabs for Cycle 2 and click "Parse All."
*   **Content:** You are now in Cycle 2. Repeat the process you learned before:
    1.  Copy the four new responses from AI Studio.
    2.  Paste them into the `Resp 1` through `Resp 4` tabs.
    3.  Click **`Parse All`**.

---
### **Page 28: Step 27 - Accept the Solution**
*   **Page Title:** Step 27: Accept the Solution
*   **Image Prompt:** A screenshot of the PCPP in Cycle 2. The longest response is selected, and the user is clicking "Select All" and then "Accept Selected." The new `Git-Installation-Guide.md` file appears in the file explorer.
*   **TL;DR:** Select the longest response, click "Select All," and then "Accept Selected" to get your new Git installation guide.
*   **Content:** Now that the responses are parsed, you have the solution to your problem.
    1.  Focus on the longest response.
    2.  Click **`Select All`** in the "Associated Files" list.
    3.  Click **`Accept Selected`**.
    You should see new files appear in your `src/Artifacts` directory, including one with instructions on how to install Git.

---
### **Page 29: Step 28 - Install Git**
*   **Page Title:** Step 28: Follow the Instructions
*   **Image Prompt:** A screenshot showing the content of the new Git installation guide. It shows a command like `git --version` and instructions for downloading Git.
*   **TL;DR:** Open your new artifact and follow the instructions to install Git. Verify it's installed by running `git --version` in the terminal.
*   **Content:** Navigate to your new Git installation guide in the `src/Artifacts` folder. Follow its instructions precisely. Once you are done, you can verify that Git is installed correctly by opening a terminal in VS Code (`Terminal > New Terminal`) and typing the command:
    ```bash
    git --version
    ```
    If you see a version number returned, you have successfully installed Git!

---
### **Page 30: Step 29 - First Commit**
*   **Page Title:** Step 29: Your First Commit
*   **Image Prompt:** A screenshot of the PCPP. The user is in Cycle 1 and has changed the "Cycle Title" to "First Commit." The "Baseline (Commit)" button is highlighted.
*   **TL;DR:** Go back to Cycle 1, change the title to "First Commit," and click "Baseline (Commit)" again. This time, it will work.
*   **Content:** Now that Git is installed, you can complete Step 18.
    1.  In the PCPP, use the `<` arrow to navigate back to **Cycle 1**.
    2.  Change the **Cycle Title** from `Create Git Installation Instructions` to `First Commit`. The Cycle Title is used as the commit message.
    3.  Click the **`Baseline (Commit)`** button again.
    This time, you will get the same error message as before, but a new button will be available: **`Initialize Repository`**. Click it. A "Successfully initialized" message will appear. Now, click `Baseline (Commit)` one last time. It will succeed.

---
### **Page 31: Step 30 - The GitHub Quest**
*   **Page Title:** Step 30: Your Next Quest - GitHub Setup
*   **Image Prompt:** A stylized image of a GitHub logo with a question mark over it, representing a quest or challenge for the user.
*   **TL;DR:** Your next task is to use the skills you've just learned to create a guide for setting up a GitHub account and connecting it to your project.
*   **Content:** You now have Git initialized locally. The next step is to connect it to GitHub, a website for hosting your code. However, we will assume you don't have a GitHub account.
    
    This is your next quest! You will now repeat the exact same process you just used to create the Git installation guide. Your task is to create a new guide for setting up a GitHub account and connecting it to your local repository so that the "Initialize Repository" step can succeed.
    
    Use the skills you've learned. Create a new cycle, write a clear context explaining what you need, and get the AI to generate the guide for you. Once you have followed that guide and set up your GitHub connection, you can proceed to the next step.

---
### **Page 32: Step 31 - Successfully Initialized**
*   **Page Title:** Step 31: Successfully Initialized
*   **Image Prompt:** A screenshot of the PCPP with a success notification: "Successfully initialized repository."
*   **TL;DR:** After setting up GitHub, the "Initialize Repository" button will now work, fully connecting your local project to the cloud.
*   **Content:** Assuming you have completed your GitHub quest, clicking the **`Initialize Repository`** button will now succeed without any errors. Your local project is now fully connected to Git and GitHub, and you are ready to build your website's code.

---
### **Page 33: Step 32 - Create the Project Scaffold**
*   **Page Title:** Step 32: Create the Project Scaffold
*   **Image Prompt:** A screenshot of the PCPP in a new cycle (e.g., Cycle 2). The title is "Create Project Scaffold," and the context says, "Let's now build the project files!" The "Generate prompt.md" button is highlighted.
*   **TL;DR:** In a new cycle, ask the AI to build the initial code files for your portfolio website.
*   **Content:** You are now ready to have the AI generate the actual code for your website. This initial set of files is often called a "scaffold."
    1.  Create a new cycle in the PCPP.
    2.  Set the **Cycle Title** to `Create Project Scaffold`.
    3.  Set the **Cycle Context** to `Let's now build the project files for the portfolio website based on the artifacts we've created.`
    4.  Generate the prompt, send it to the AI, and get your responses.

---
### **Page 34: Step 33 - The Rinse-Repeat Loop**
*   **Page Title:** Step 33: The Rinse-Repeat Loop
*   **Image Prompt:** A simple, clear graphic showing the core loop: 1. Generate Prompt, 2. Copy Prompt, 3. Send to AI, 4. Create New Cycle, 5. Copy Responses, 6. Parse, 7. Select.
*   **TL;DR:** Follow the same rinse-repeat process you've learned to get the AI-generated code into your project.
*   **Content:** You know the drill now. This is the core loop of the V2V workflow.
    1.  Generate `prompt.md`.
    2.  Copy the prompt.
    3.  Send it to your AI tabs.
    4.  Create a new cycle in the PCPP.
    5.  Copy the AI responses back into the PCPP.
    6.  Parse the responses.
    7.  Select the longest response.

---
### **Page 35: Step 34 - Baseline and Accept the Code**
*   **Page Title:** Step 34: Baseline and Accept the Code
*   **Image Prompt:** A screenshot of the PCPP after parsing the scaffold responses. The "Baseline (Commit)" button is highlighted first, then the "Select All" and "Accept Selected" buttons. The VS Code file explorer shows the color of `flattened_repo.md` changing from green to white after the commit.
*   **TL;DR:** With Git initialized, you can now Baseline first, then Accept the new code files.
*   **Content:** You are now in Cycle 3 with the AI's code responses. Execute the full loop, starting with **Parse All**.

    After parsing, the **`Sort`** button will be highlighted. Click it to reorder the tabs by size. As a general rule, starting your review with the longest response is a sound strategy, as it's often the most detailed. However, choosing which response to proceed with is both an art and a science. For this cycle, our goal is to create the initial project files. You might notice one AI response returned more files than another, even if it wasn't the longest. In this case, choosing the response with the most files is a perfectly valid strategic decision.

    Review your options, then click **Select This Response** on your chosen tab. With your choice made, the **`Baseline (Commit)`** button will be highlighted. Click it to save your current state. Observe how the color of `flattened_repo.md` in the file explorer changes from manilla yellow to white, indicating it's now saved in Git. Now, click **`Select All`** and **`Accept Selected`**. This will create all the new project files for your website.

---
### **Page 36: Step 35 - Run Your Project**
*   **Page Title:** Step 35: Run Your Project!
*   **Image Prompt:** A screenshot of the VS Code integrated terminal. The user is typing `npm install`, then `npm run dev`. A localhost URL is highlighted in the output.
*   **TL;DR:** Find the `Development and Testing Guide` artifact, open the VS Code terminal, and run the commands to install dependencies and start your website.
*   **Content:** You now have a complete set of project files. But how do you run them? Look in your `src/Artifacts` folder for a file named `Development-and-Testing-Guide.md`. This guide, created by the AI in Cycle 1, tells you the commands.
    1.  Open the integrated terminal in VS Code (`Terminal > New Terminal`).
    2.  Type `npm install` and press Enter. This downloads all the code libraries your project needs.
    3.  After it finishes, type `npm run dev` and press Enter. This starts your local web server.

---
### **Page 37: Step 36 - Tada! Your Project!**
*   **Page Title:** Step 36: Tada! Your Project!
*   **Image Prompt:** A screenshot of a web browser showing a simple but professional-looking "Hello World" or starter portfolio website running on `localhost:3000`.
*   **TL;DR:** Click the `localhost` link in your terminal to see your live website in your browser. Congratulations!
*   **Content:** Once `npm run dev` is running, you will see a link in the terminal, usually `http://localhost:3000`. Ctrl-click this link to open it in your web browser.
    
    **Congratulations!** You are now looking at the first version of your portfolio website, created from scratch with the DCE and an AI partner.
    
    From here, you can continue to iterate. Add your resume to a `context` folder in your project, add that folder to your selection in the DCE, and ask the AI: "Please update my portfolio website to include the information from my resume." This is **context curation** in action. As you progress through the V2V Academy, you can add your new projects to your portfolio's showcase, continuously improving it with the same workflow you've just mastered.
    
    This completes your first lab.