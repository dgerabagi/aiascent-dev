<!--
  File: flattened_repo.md
  Source Directory: c:\Projects\aiascent-dev
  Date Generated: 2025-10-10T22:26:00.631Z
  ---
  Total Files: 13
  Approx. Tokens: 85790
-->

<!-- Top 10 Text Files by Token Count -->
1. context\automationsaas\flattened-repo.md (45210 tokens)
2. context\aiascentgame\flattened-repo.md (18579 tokens)
3. context\dce\flattened-repo.md (14794 tokens)
4. src\Artifacts\A5-Dual Domain Hosting Guide.md (1066 tokens)
5. src\Artifacts\A4-Universal Task Checklist.md (990 tokens)
6. src\Artifacts\DCE_README.md (782 tokens)
7. src\Artifacts\A6-Porting Guide for aiascent.dev.md (743 tokens)
8. src\Artifacts\A1-Project-Vision-and-Goals.md (702 tokens)
9. src\Artifacts\A3-Technical-Scaffolding-Plan.md (684 tokens)
10. src\Artifacts\A2-Phase1-Requirements.md (673 tokens)

<!-- Full File List -->
1. src\Artifacts\A0-Master-Artifact-List.md - Lines: 39 - Chars: 2138 - Tokens: 535
2. src\Artifacts\A1-Project-Vision-and-Goals.md - Lines: 42 - Chars: 2806 - Tokens: 702
3. src\Artifacts\A2-Phase1-Requirements.md - Lines: 32 - Chars: 2690 - Tokens: 673
4. src\Artifacts\A3-Technical-Scaffolding-Plan.md - Lines: 62 - Chars: 2734 - Tokens: 684
5. src\Artifacts\A4-Universal Task Checklist.md - Lines: 74 - Chars: 3960 - Tokens: 990
6. src\Artifacts\A5-Dual Domain Hosting Guide.md - Lines: 89 - Chars: 4264 - Tokens: 1066
7. src\Artifacts\A6-Porting Guide for aiascent.dev.md - Lines: 41 - Chars: 2972 - Tokens: 743
8. src\Artifacts\A7-Development-and-Testing-Guide.md - Lines: 48 - Chars: 1658 - Tokens: 415
9. src\Artifacts\A9-GitHub-Repository-Setup-Guide.md - Lines: 68 - Chars: 2465 - Tokens: 617
10. src\Artifacts\DCE_README.md - Lines: 47 - Chars: 3127 - Tokens: 782
11. context\dce\flattened-repo.md - Lines: 766 - Chars: 59174 - Tokens: 14794
12. context\automationsaas\flattened-repo.md - Lines: 5731 - Chars: 180837 - Tokens: 45210
13. context\aiascentgame\flattened-repo.md - Lines: 1381 - Chars: 74313 - Tokens: 18579

<file path="src/Artifacts/A0-Master-Artifact-List.md">
# Artifact A0: aiascent.dev - Master Artifact List
# Date Created: C0
# Author: AI Model & Curator

## 1. Purpose

This file serves as the definitive, parseable list of all documentation artifacts for the `aiascent.dev` website project. This project aims to create a promotional website for the Data Curation Environment (DCE) VS Code Extension, featuring an interactive whitepaper as a primary showcase.

## 2. Formatting Rules for Parsing

*   Lines beginning with `#` are comments and are ignored.
*   `##` denotes a major category header and is ignored.
*   `###` denotes an artifact entry. The text following it is the artifact's full name and ID.
*   Lines beginning with `- **Description:**` provide context for the project.
*   Lines beginning with `- **Tags:**` provide keywords for Inference.

## 3. Artifacts List

## I. Project Planning & Design

### A1. Project Vision and Goals
- **Description:** High-level overview of the `aiascent.dev` website, its purpose to promote the DCE, and the phased development plan.
- **Tags:** project vision, goals, scope, dce, whitepaper, promotional website

### A2. Phase 1 - Requirements & Design
- **Description:** Detailed functional and technical requirements for Phase 1, focusing on building the static site shell and porting the interactive report viewer.
- **Tags:** requirements, design, phase 1, report viewer, nextjs

### A3. Technical Scaffolding Plan
- **Description:** Outlines the proposed file structure and technologies, leveraging the `automationsaas` project shell and components from `aiascent.game`.
- **Tags:** technical plan, scaffolding, file structure, nextjs, react, tailwindcss

### A7. Development and Testing Guide
- **Description:** A step-by-step guide explaining how to run, debug, and test the `aiascent.dev` website locally.
- **Tags:** development, testing, debugging, workflow, nextjs

### A9. GitHub Repository Setup Guide
- **Description:** A step-by-step guide with the necessary git commands to initialize the project as a local repository and push it to a new remote repository on GitHub.
- **Tags:** git, github, version control, setup, repository
</file_artifact>

<file path="src/Artifacts/A1-Project-Vision-and-Goals.md">
# Artifact A1: aiascent.dev - Project Vision and Goals
# Date Created: C0
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** High-level overview of the `aiascent.dev` website, its purpose to promote the DCE, and the phased development plan.
- **Tags:** project vision, goals, scope, dce, whitepaper, promotional website

## 1. Project Vision

The vision of **aiascent.dev** is to create a professional and engaging promotional website for the **Data Curation Environment (DCE) VS Code Extension**. The website will serve as the primary public-facing hub for the DCE project, explaining its value proposition and demonstrating its power. It aims to be more than a static landing page; it will be a living testament to the capabilities of the DCE by showcasing complex, interactive components that were themselves built using the extension.

## 2. High-Level Goals & Phases

The project will be developed in distinct phases to ensure an iterative and manageable workflow.

### Phase 1: Core Website and Interactive Whitepaper

The goal of this phase is to establish the foundational website and deliver the primary showcase content.
-   **Core Functionality:**
    -   Build a static website shell based on the `automationsaas` project, including a landing page, header, and footer.
    -   Port the "Report Viewer" component from `aiascent.game` and refactor it into a reusable "Interactive Whitepaper" component.
    -   Integrate the content of the DCE whitepaper (`A78`) into the interactive viewer.
-   **Outcome:** A functional website at `aiascent.dev` where visitors can learn about the DCE and explore the full interactive whitepaper, demonstrating a key product built with the tool.

### Phase 2: Vibe Coding Tutorials and Blog

This phase will build upon the foundation by adding educational content to foster a community and teach the "vibe coding" methodology.
-   **Core Functionality:**
    -   Create a new section on the website for tutorials.
    -   Develop the first set of interactive tutorials explaining the "Vibecoding to Virtuosity" pathway.
    -   Implement a simple blog or articles section for development updates and conceptual deep-dives.
-   **Outcome:** The website becomes an educational resource for users wanting to master AI-assisted development with the DCE.

### Phase 3: Community and Integration Features

This phase focuses on community building and deeper integration with the DCE ecosystem.
-   **Core Functionality:**
    -   Potentially add a community forum or Discord integration.
    -   Explore features like a showcase of projects built with the DCE.
    -   Provide direct download links for the DCE extension's `.vsix` file.
-   **Outcome:** `aiascent.dev` becomes the central community hub for the Data Curation Environment project.
</file_artifact>

<file path="src/Artifacts/A2-Phase1-Requirements.md">
# Artifact A2: aiascent.dev - Phase 1 Requirements & Design
# Date Created: C0
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** Detailed functional and technical requirements for Phase 1, focusing on building the static site shell and porting the interactive report viewer.
- **Tags:** requirements, design, phase 1, report viewer, nextjs

## 1. Overview

This document outlines the detailed requirements for Phase 1 of the `aiascent.dev` project. The primary goal of this phase is to launch the core website and implement the interactive whitepaper showcase.

## 2. Functional Requirements

| ID | Requirement | User Story | Acceptance Criteria |
|---|---|---|---|
| FR-01 | **Static Website Shell** | As a visitor, I want to land on a professional homepage that explains what the DCE is, so that I can quickly understand its purpose. | - The website has a main landing page (`/`). <br> - A persistent header provides navigation to "Home" and "Whitepaper". <br> - A persistent footer contains standard links (e.g., GitHub). |
| FR-02 | **Interactive Whitepaper** | As a visitor, I want to navigate to an interactive whitepaper, so that I can read the "Process as Asset" report in an engaging way. | - A page exists at `/whitepaper`. <br> - This page renders the "Interactive Whitepaper" component. <br> - The component loads its content from a structured JSON file. <br> - Users can navigate between pages and sections of the report. |
| FR-03 | **Content Integration** | As a project owner, I want the content of the DCE whitepaper to be displayed in the interactive viewer. | - The textual and structural content from `A78. DCE - Whitepaper - Process as Asset.md` is converted into the JSON format required by the viewer component. |

## 3. Non-Functional Requirements

| ID | Requirement | Description |
|---|---|---|
| NFR-01 | **Performance** | The website should load quickly and be responsive. It will be a statically generated site. |
| NFR-02 | **Reusability** | The "Interactive Whitepaper" component should be designed to be reusable for future reports or tutorials. |

## 4. High-Level Design

-   **Framework:** The project will use the Next.js/React framework from the `automationsaas` shell.
-   **Component Porting:** The `ReportViewer` component and its dependencies will be copied from the `aiascent.game` project. It will be refactored to remove game-specific styling and state, and renamed to `InteractiveWhitepaper`.
-   **Data Source:** The `InteractiveWhitepaper` component will be modified to fetch its data from a local JSON file (`src/data/whitepaperContent.json`), which will be a structured version of the content from the DCE artifacts.
</file_artifact>

<file path="src/Artifacts/A3-Technical-Scaffolding-Plan.md">
# Artifact A3: aiascent.dev - Technical Scaffolding Plan
# Date Created: C0
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** Outlines the proposed technical scaffolding and file structure, leveraging the `automationsaas` project shell and components from `aiascent.game`.
- **Tags:** technical plan, scaffolding, file structure, nextjs, react, tailwindcss

## 1. Overview

This document outlines the proposed technical scaffolding and file structure for the `aiascent.dev` project. This plan leverages existing assets to accelerate development, ensuring a clean and scalable architecture from the start.

## 2. Technology Stack

-   **Language:** TypeScript
-   **Framework:** Next.js (from `automationsaas` shell)
-   **UI Library:** React (from `automationsaas` shell)
-   **Styling:** TailwindCSS (from `automationsaas` shell)
-   **Deployment:** The project will be deployed as a static site, hosted on the existing server infrastructure and managed by Caddy.

## 3. Proposed File Structure

The project will start with the file structure from the `automationsaas` project and will be adapted as follows:

```
aiascent-dev/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── whitepaper/
│   │       ├── InteractiveWhitepaper.tsx  # Ported & refactored from aiascent.game
│   │       └── PageContent.tsx            # Dependency of the viewer
│   │
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── index.tsx                  # The main landing page
│   │   └── whitepaper.tsx             # Page to host the interactive whitepaper
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── data/
│       └── whitepaperContent.json     # Data source for the whitepaper
│
├── public/
│   └── ... (images, fonts)
│
├── package.json
├── tsconfig.json
└── ... (Next.js config files)
```

## 4. Key Architectural Concepts

-   **Leverage Existing Assets:** The core strategy is to reuse and adapt existing, proven components and project structures to accelerate development.
    -   The Next.js/React/TailwindCSS foundation from `automationsaas` provides a modern and efficient web development stack.
    -   The `ReportViewer` from `aiascent.game` provides the complex logic for the interactive document experience.
-   **Component-Based Architecture:** The UI will be built by composing reusable React components.
-   **Static Site Generation (SSG):** Next.js will be used to generate a static site, ensuring maximum performance and security.
-   **Data Decoupling:** The content for the whitepaper will be stored in a separate JSON file, decoupling the data from the presentation layer and making it easy to update or add new reports in the future.
</file_artifact>

<file path="src/Artifacts/A4-Universal Task Checklist.md">
# Artifact A113: AI Ascent Dev - Universal Task Checklist
# Date Created: C117
# Author: AI Model & Curator

## 1. Purpose

This artifact provides a structured checklist for the initial development tasks for the new `aiascent.dev` website project. It organizes the work required to set up the project shell, port over relevant components, and build the core features like the interactive whitepaper.

## Task List for `aiascent.dev` - Phase 1

## T-1: Project Setup and Scaffolding
- **Files Involved:**
    - `package.json`
    - `.gitignore`
    - Next.js project structure (from `automationsaas` shell)
    - `src/Artifacts/` (All newly generated `aiascent-dev-A*.md` files)
- **Total Tokens:** ~5,000
- **More than one cycle?** No
- **Status:** To Do

- [ ] **Task (T-ID: 1.1):** Initialize the `aiascent-dev` project folder.
- [ ] **Task (T-ID: 1.2):** Copy the shell of the `automationsaas` project into the new directory.
- [ ] **Task (T-ID: 1.3):** Initialize a Git repository and create the first commit, following the `A9. GitHub Repository Setup Guide`.
- [ ] **Task (T-ID: 1.4):** Create the `src/Artifacts` directory and place all the `aiascent-dev-A*.md` planning documents inside it.
- [ ] **Task (T-ID: 1.5):** Clean out any `automationsaas`-specific logic, leaving only the Next.js/React/TailwindCSS shell.

### Verification Steps
1.  Run `npm install` and `npm run dev` in the new project directory.
2.  **Expected:** A blank or minimal starter page should be viewable at `http://localhost:3000`. The project should have no compilation errors.

## T-2: Port and Adapt Report Viewer
- **Files Involved:**
    - `aiascent.game/src/components/ReportViewer.tsx` (and its dependencies)
    - `aiascent-dev/src/components/InteractiveWhitepaper.tsx` (New)
    - `aiascent-dev/src/pages/whitepaper.tsx` (New)
- **Total Tokens:** ~10,000+ (depending on dependencies)
- **More than one cycle?** Yes
- **Status:** To Do

- [ ] **Task (T-ID: 2.1):** Analyze the `ReportViewer` component from `aiascent.game` and identify all its child components and dependencies.
- [ ] **Task (T-ID: 2.2):** Copy the component and its dependencies into the `aiascent-dev` project.
- [ ] **Task (T-ID: 2.3):** Refactor the copied components to remove any `aiascent.game`-specific logic, styling, or state management. Rename `ReportViewer` to `InteractiveWhitepaper`.
- [ ] **Task (T-ID: 2.4):** Create a new page at `/whitepaper` that renders the `InteractiveWhitepaper` component.
- [ ] **Task (T-ID: 2.5):** Adapt the component to load its content from a local JSON file (e.g., the content from `A78. DCE - Whitepaper - Process as Asset.md`).

### Verification Steps
1.  Navigate to `/whitepaper` in the browser.
2.  **Expected:** The interactive report viewer should render, displaying the content of the DCE whitepaper, complete with page navigation and section breakdowns.

## T-3: Build Main Website Shell
- **Files Involved:**
    - `aiascent-dev/src/pages/index.tsx`
    - `aiascent-dev/src/components/Header.tsx`
    - `aiascent-dev/src/components/Footer.tsx`
- **Total Tokens:** ~3,000
- **More than one cycle?** No
- **Status:** To Do

- [ ] **Task (T-ID: 3.1):** Design and implement the main landing page (`index.tsx`).
- [ ] **Task (T-ID: 3.2):** Create a reusable `Header` component with navigation links (e.g., Home, Whitepaper, Tutorials, GitHub).
- [ ] **Task (T-ID: 3.3):** Create a reusable `Footer` component.

### Verification Steps
1.  View the home page in the browser.
2.  **Expected:** A professional-looking landing page is displayed with a functional header and footer.

## T-4: Plan for Next Cycle
- **Files Involved:**
    - `src/Artifacts/A113. AI Ascent Dev - Universal Task Checklist.md`
- **Total Tokens:** ~1,000
- **More than one cycle?** No
- **Status:** To Do

- [ ] **Task (T-ID: 4.1):** Update this checklist based on the progress made and create a new checklist for the next phase of development (e.g., creating tutorial content).
</file_artifact>

<file path="src/Artifacts/A5-Dual Domain Hosting Guide.md">
# Artifact A114: AI Ascent - Dual Domain Hosting Guide
# Date Created: C117
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A guide explaining how to host multiple domains (e.g., `aiascent.game` and `aiascent.dev`) on a single server using a reverse proxy like Caddy.
- **Tags:** guide, networking, hosting, reverse proxy, caddy, dns

## 1. Overview & Goal

You have asked if it's possible to host both `aiascent.game` and the new `aiascent.dev` on the same server that is currently hosting the game and the vLLM instance. The answer is **yes**, and this is a standard and efficient way to manage multiple websites on a single machine.

The goal of this guide is to explain the technical concept of a **reverse proxy** and provide a concrete example of how to configure it using Caddy, which you are already using.

## 2. The Core Concept: Reverse Proxy with Virtual Hosts

The magic that makes this work is a **reverse proxy** that uses **virtual hosts**. Here's how the pieces fit together:

1.  **DNS Records:** You will configure the DNS "A" records for both `aiascent.game` and `aiascent.dev` to point to the **same public IP address**—the one for your home server.

2.  **Port Forwarding:** Your AT&T router will continue to forward all web traffic (ports 80 for HTTP and 443 for HTTPS) to the single PC in your closet that acts as the server.

3.  **The Reverse Proxy (Caddy):** This is the traffic controller. Caddy will be the only process listening on ports 80 and 443. When a request comes in, Caddy inspects the `Host` header to see which domain the user was trying to reach.
    *   If the `Host` is `aiascent.game`, Caddy forwards the request to the Node.js process running your game.
    *   If the `Host` is `aiascent.dev`, Caddy forwards the request to the *different* Node.js process running your new website.

4.  **Backend Applications:** Each of your applications (the game server, the new website server) will run on its own, separate, internal-only port (e.g., 3001 for the game, 3002 for the new website). They don't need to know anything about HTTPS or the public domains.

This architecture is secure, efficient, and makes adding more websites in the future very simple.

## 3. Example Caddyfile Configuration

Your existing `Caddyfile` (from `A91`) is already set up to handle `aiascent.game`. To add the new `aiascent.dev` site, you simply need to add another block to the file.

Let's assume:
*   Your `aiascent.game` Node.js server runs on `localhost:3001`.
*   Your new `aiascent-dev` Next.js server will run on `localhost:3002`.

Your new `Caddyfile` would look like this:

```caddy
# Caddyfile for dual domain hosting

aiascent.game {
    # Caddy will automatically handle HTTPS for this domain.
    encode zstd gzip
    log {
        output file /var/log/caddy/aiascent_game.log
    }

    # Reverse proxy all requests for aiascent.game to the game server on port 3001.
    reverse_proxy localhost:3001 {
        header_up Host {host}
        header_up X-Real-IP {remote_ip}
        header_up X-Forwarded-For {remote_ip}
        header_up X-Forwarded-Proto {scheme}
        header_up Connection {>Connection}
        header_up Upgrade {>Upgrade}
    }
}

aiascent.dev {
    # Caddy will automatically handle HTTPS for this domain as well.
    encode zstd gzip
    log {
        output file /var/log/caddy/aiascent_dev.log
    }

    # Reverse proxy all requests for aiascent.dev to the new website server on port 3002.
    reverse_proxy localhost:3002
}

# Optional: Redirect www versions to the main domains
www.aiascent.game {
    redir https://aiascent.game{uri} permanent
}
www.aiascent.dev {
    redir https://aiascent.dev{uri} permanent
}
```

### 4. Action Steps

1.  **DNS:** Point the `aiascent.dev` A record to your server's public IP address.
2.  **Application Ports:** Ensure your two applications are configured to run on different ports (e.g., 3001 and 3002).
3.  **Caddyfile:** Update your `Caddyfile` with the new block for `aiascent.dev`.
4.  **Reload Caddy:** Run `caddy reload` in your server's terminal to apply the new configuration.

Caddy will automatically obtain the SSL certificate for `aiascent.dev` and begin routing traffic to the correct application based on the domain name.
</file_artifact>

<file path="src/Artifacts/A6-Porting Guide for aiascent.dev.md">
# Artifact A115: DCE - Porting Guide for aiascent.dev
# Date Created: C117
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A list of recommended documentation artifacts to port from the DCE project to the new `aiascent.dev` project to bootstrap its development process.
- **Tags:** guide, documentation, project setup, aiascent-dev

## 1. Overview

To effectively bootstrap the `aiascent.dev` project using the Data Curation Environment (DCE), it is highly recommended to port over a set of existing documentation artifacts from the DCE project itself. These artifacts codify the development process, workflow, and interaction patterns that will be essential for building the new website.

This guide lists the specific artifacts you should copy from your main `DCE/src/Artifacts` directory into the `aiascent-dev/context/dce/` directory.

## 2. Recommended Artifacts to Port

The following artifacts provide the "source of truth" for the DCE-driven development process. They will be invaluable as context when prompting the AI to build the `aiascent.dev` website.

### Core Process & Workflow
*   **`A0. DCE Master Artifact List.md`**: Provides the structure and concept of the master list.
*   **`A9. DCE - GitHub Repository Setup Guide.md`**: Essential for initializing the new project's version control.
*   **`A65. DCE - Universal Task Checklist.md`**: The template and philosophy for organizing work in cycles.
*   **`A69. DCE - Animated UI Workflow Guide.md`**: Documents the "perfect loop" of the DCE workflow, which is a key concept to showcase and teach.
*   **`A70. DCE - Git-Integrated Testing Workflow Plan.md`**: The baseline/restore workflow is a core feature of the development process that should be used for the new project.
*   **`A72. DCE - README for Artifacts.md`**: Explains the purpose of the artifacts directory to both the user and the AI.

### Interaction & Parsing
*   **`A52.1 DCE - Parser Logic and AI Guidance.md`**: Provides the AI with the literal parser code, enabling metainterpretability.
*   **`A52.2 DCE - Interaction Schema Source.md`**: The canonical rules for how the AI should structure its responses to be parsed correctly by the DCE.

### Content & Showcase
*   **`A77. DCE - Whitepaper Generation Plan.md`**: The original plan for generating the whitepaper.
*   **`A78. DCE - Whitepaper - Process as Asset.md`**: The full content of the whitepaper that you intend to display in the interactive report viewer.
*   **`reportContent.json`**: The structured JSON data from `aiascent.game`'s report viewer, which can be used as the data source for the new `InteractiveWhitepaper` component.

### 3. Procedure

1.  Navigate to your `C:\Projects\DCE\src\Artifacts` directory.
2.  Copy the files listed above.
3.  Paste them into the `C:\Projects\aiascent-dev\context\dce\` directory.
4.  You can now use these files as part of the context when generating prompts for the `aiascent.dev` project within the DCE.
</file_artifact>

<file path="src/Artifacts/A7-Development-and-Testing-Guide.md">
# Artifact A7: aiascent.dev - Development and Testing Guide
# Date Created: C0
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A step-by-step guide explaining how to run, debug, and test the `aiascent.dev` website locally.
- **Tags:** template, cycle 0, documentation, project setup, nextjs

## 1. Purpose

This guide provides the standard procedure for running, debugging, and testing the **aiascent.dev** website locally.

## 2. Development Workflow

### Step 1: Install Dependencies

Ensure all project dependencies are installed using npm. Navigate to the project root (`C:\Projects\aiascent-dev`) in your terminal and run:
```bash
npm install
```

### Step 2: Start the Development Server

To compile the code and watch for changes with hot-reloading, run the following command:
```bash
npm run dev
```
This will start the Next.js development server.

### Step 3: Running the Application

Once the development server is running, you will see a message in your terminal, typically:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```
Open a web browser and navigate to **`http://localhost:3000`** to view the application.

### Step 4: Debugging

You can use the browser's developer tools to debug the frontend application. You can set breakpoints directly in your source code within the "Sources" tab of the developer tools.

## 3. Testing

The project will be configured with a testing framework (e.g., Jest and React Testing Library). To run the test suite, use the following command:
```bash
npm run test
```
This will execute all test files located in the project and report the results to the console.
</file_artifact>

<file path="src/Artifacts/A9-GitHub-Repository-Setup-Guide.md">
# Artifact A9: aiascent.dev - GitHub Repository Setup Guide
# Date Created: C0
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A step-by-step guide with the necessary git commands to initialize the project as a local repository and push it to a new remote repository on GitHub.
- **Tags:** git, github, version control, setup, repository, workflow

## 1. Overview

This guide provides the necessary commands to turn your local `aiascent-dev` project folder into a Git repository and link it to a new, empty repository on GitHub.

## 2. Prerequisites

*   You have `git` installed on your machine.
*   You have a GitHub account.

## 3. Step-by-Step Setup

### Step 1: Create a New Repository on GitHub

1.  Go to [github.com](https://github.com) and log in.
2.  In the top-right corner, click the `+` icon and select **"New repository"**.
3.  **Repository name:** `aiascent-dev`.
4.  **Description:** "Promotional and educational website for the Data Curation Environment (DCE) VS Code Extension."
5.  Choose **"Private"** or **"Public"**.
6.  **IMPORTANT:** Do **not** initialize the repository with a `README`, `.gitignore`, or `license`. We will be pushing our existing files.
7.  Click **"Create repository"**.

GitHub will now show you a page with command-line instructions. We will use the section titled **"...or push an existing repository from the command line"**.

### Step 2: Initialize Git in Your Local Project

Open a terminal and navigate to your project's root directory (`C:\Projects\aiascent-dev`). Then, run the following commands one by one.

1.  **Initialize the repository:**
    ```bash
    git init
    ```

2.  **Add all existing files:**
    ```bash
    git add .
    ```

3.  **Create the first commit:**
    ```bash
    git commit -m "Initial commit: Project setup and Cycle 0 artifacts"
    ```

4.  **Rename the default branch to `main`:**
    ```bash
    git branch -M main
    ```

### Step 3: Link and Push to GitHub

1.  **Add the remote repository:** Replace the placeholder URL with the one from your new GitHub repository page.
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/aiascent-dev.git
    ```

2.  **Push your local `main` branch to GitHub:**
    ```bash
    git push -u origin main
    ```

Your new project is now set up with version control and linked to GitHub. You can now use the DCE's Git-integrated features like "Baseline" and "Restore" as you develop the website.
</file_artifact>

<file path="src/Artifacts/DCE_README.md">
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

<file path="context/dce/flattened-repo.md">
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

</file_artifact>

<file path="context/automationsaas/flattened-repo.md">
<!--
  File: flattened_repo.md
  Source Directory: c:\Projects\automationsaas
  Date Generated: 2025-10-10T22:10:04.789Z
  ---
  Total Files: 77
  Approx. Tokens: 42325
-->

<!-- Top 10 Text Files by Token Count -->
1. src\app\(main)\(pages)\connections\page.tsx (3894 tokens)
2. src\components\global\sparkles.tsx (2971 tokens)
3. src\app\page.tsx (2256 tokens)
4. src\providers\editor-provider.tsx (1315 tokens)
5. src\components\ui\command.tsx (1256 tokens)
6. src\components\global\lamp.tsx (1164 tokens)
7. src\providers\connections-provider.tsx (1138 tokens)
8. src\components\global\connect-parallax.tsx (1086 tokens)
9. src\components\ui\form.tsx (1066 tokens)
10. tailwind.config.ts (1062 tokens)

<!-- Full File List -->
1. src\store.tsx - Lines: 29 - Chars: 829 - Tokens: 208
2. src\middleware.ts - Lines: 65 - Chars: 2244 - Tokens: 561
3. src\providers\billing-provider.tsx - Lines: 43 - Chars: 961 - Tokens: 241
4. src\providers\connections-provider.tsx - Lines: 160 - Chars: 4552 - Tokens: 1138
5. src\providers\editor-provider.tsx - Lines: 220 - Chars: 5258 - Tokens: 1315
6. src\providers\modal-provider.tsx - Lines: 71 - Chars: 1630 - Tokens: 408
7. src\providers\theme-provider.tsx - Lines: 10 - Chars: 336 - Tokens: 84
8. src\components\global\3d-card.tsx - Lines: 151 - Chars: 3986 - Tokens: 997
9. src\components\global\connect-parallax.tsx - Lines: 159 - Chars: 4343 - Tokens: 1086
10. src\components\global\container-scroll-animation.tsx - Lines: 103 - Chars: 2633 - Tokens: 659
11. src\components\global\custom-modal.tsx - Lines: 56 - Chars: 1540 - Tokens: 385
12. src\components\global\infinite-moving-cards.tsx - Lines: 102 - Chars: 2735 - Tokens: 684
13. src\components\global\lamp.tsx - Lines: 117 - Chars: 4655 - Tokens: 1164
14. src\components\global\mode-toggle.tsx - Lines: 40 - Chars: 1334 - Tokens: 334
15. src\components\global\navbar.tsx - Lines: 62 - Chars: 2363 - Tokens: 591
16. src\components\global\sparkles.tsx - Lines: 439 - Chars: 11883 - Tokens: 2971
17. src\components\icons\category.tsx - Lines: 64 - Chars: 1672 - Tokens: 418
18. src\components\icons\clipboard.tsx - Lines: 54 - Chars: 1913 - Tokens: 479
19. src\components\icons\cloud_download.tsx - Lines: 36 - Chars: 1591 - Tokens: 398
20. src\components\icons\home.tsx - Lines: 36 - Chars: 1244 - Tokens: 311
21. src\components\icons\payment.tsx - Lines: 51 - Chars: 1449 - Tokens: 363
22. src\components\icons\settings.tsx - Lines: 36 - Chars: 2714 - Tokens: 679
23. src\components\icons\workflows.tsx - Lines: 27 - Chars: 888 - Tokens: 222
24. src\components\infobar\index.tsx - Lines: 72 - Chars: 1965 - Tokens: 492
25. src\components\sidebar\index.tsx - Lines: 89 - Chars: 3735 - Tokens: 934
26. src\components\ui\accordion.tsx - Lines: 59 - Chars: 2049 - Tokens: 513
27. src\components\ui\badge.tsx - Lines: 37 - Chars: 1164 - Tokens: 291
28. src\components\ui\button.tsx - Lines: 57 - Chars: 1891 - Tokens: 473
29. src\components\ui\card.tsx - Lines: 80 - Chars: 1956 - Tokens: 489
30. src\components\ui\command.tsx - Lines: 156 - Chars: 5022 - Tokens: 1256
31. src\components\ui\dialog.tsx - Lines: 123 - Chars: 3971 - Tokens: 993
32. src\components\ui\drawer.tsx - Lines: 119 - Chars: 3139 - Tokens: 785
33. src\components\ui\form.tsx - Lines: 177 - Chars: 4261 - Tokens: 1066
34. src\components\ui\input.tsx - Lines: 26 - Chars: 849 - Tokens: 213
35. src\components\ui\label.tsx - Lines: 27 - Chars: 750 - Tokens: 188
36. src\components\ui\popover.tsx - Lines: 32 - Chars: 1275 - Tokens: 319
37. src\components\ui\progress.tsx - Lines: 29 - Chars: 819 - Tokens: 205
38. src\components\ui\resizable.tsx - Lines: 46 - Chars: 1768 - Tokens: 442
39. src\components\ui\select.tsx - Lines: 91 - Chars: 3358 - Tokens: 840
40. src\components\ui\separator.tsx - Lines: 32 - Chars: 801 - Tokens: 201
41. src\components\ui\sonner.tsx - Lines: 32 - Chars: 925 - Tokens: 232
42. src\components\ui\switch.tsx - Lines: 30 - Chars: 1182 - Tokens: 296
43. src\components\ui\tabs.tsx - Lines: 56 - Chars: 1952 - Tokens: 488
44. src\components\ui\textarea.tsx - Lines: 31 - Chars: 954 - Tokens: 239
45. src\components\ui\tooltip.tsx - Lines: 31 - Chars: 1189 - Tokens: 298
46. .eslintrc.json - Lines: 4 - Chars: 43 - Tokens: 11
47. components.json - Lines: 17 - Chars: 361 - Tokens: 91
48. ecosystem.config.js - Lines: 22 - Chars: 666 - Tokens: 167
49. jest.config.js - Lines: 21 - Chars: 499 - Tokens: 125
50. next-env.d.ts - Lines: 6 - Chars: 233 - Tokens: 59
51. next.config.mjs - Lines: 33 - Chars: 1166 - Tokens: 292
52. package.json - Lines: 98 - Chars: 3098 - Tokens: 775
53. postcss.config.mjs - Lines: 9 - Chars: 143 - Tokens: 36
54. tailwind.config.ts - Lines: 146 - Chars: 4246 - Tokens: 1062
55. tsconfig.json - Lines: 28 - Chars: 652 - Tokens: 163
56. src\app\page.tsx - Lines: 196 - Chars: 9023 - Tokens: 2256
57. src\app\layout.tsx - Lines: 46 - Chars: 1329 - Tokens: 333
58. src\app\globals.css - Lines: 77 - Chars: 1716 - Tokens: 429
59. src\app\api\payment\route.ts - Lines: 35 - Chars: 1063 - Tokens: 266
60. src\app\api\oauth\callback\route.ts - Lines: 76 - Chars: 2735 - Tokens: 684
61. src\app\api\oauth\start\route.ts - Lines: 42 - Chars: 1786 - Tokens: 447
62. src\app\api\my-oauth-map\route.ts - Lines: 25 - Chars: 778 - Tokens: 195
63. src\app\(main)\layout.tsx - Lines: 26 - Chars: 617 - Tokens: 155
64. src\app\(main)\(pages)\layout.tsx - Lines: 13 - Chars: 313 - Tokens: 79
65. src\app\(main)\(pages)\settings\_components\profile-picture.tsx - Lines: 53 - Chars: 1406 - Tokens: 352
66. src\app\(main)\(pages)\settings\_components\uploadcare-button.tsx - Lines: 48 - Chars: 1208 - Tokens: 302
67. src\app\(main)\(pages)\settings\page.tsx - Lines: 82 - Chars: 2041 - Tokens: 511
68. src\app\(main)\(pages)\dashboard\page.tsx - Lines: 13 - Chars: 324 - Tokens: 81
69. src\app\(main)\(pages)\billing\_actions\payment-connections.tsx - Lines: 23 - Chars: 510 - Tokens: 128
70. src\app\(main)\(pages)\billing\_components\billing-dashboard.tsx - Lines: 84 - Chars: 3039 - Tokens: 760
71. src\app\(main)\(pages)\billing\_components\credits-tracker.tsx - Lines: 39 - Chars: 1295 - Tokens: 324
72. src\app\(main)\(pages)\billing\_components\subscription-card.tsx - Lines: 77 - Chars: 3273 - Tokens: 819
73. src\app\(main)\(pages)\billing\page.tsx - Lines: 51 - Chars: 1641 - Tokens: 411
74. src\app\(main)\(pages)\connections\page.tsx - Lines: 466 - Chars: 15573 - Tokens: 3894
75. src\app\(auth)\sign-in\[[...sign-in]]\page.tsx - Lines: 13 - Chars: 310 - Tokens: 78
76. src\app\(auth)\sign-up\[[...sign-up]]\page.tsx - Lines: 5 - Chars: 98 - Tokens: 25
77. src\app\(auth)\layout.tsx - Lines: 13 - Chars: 263 - Tokens: 66

<file path="src/store.tsx">
import { create } from 'zustand'

export interface Option {
  value: string
  label: string
  disable?: boolean
  fixed?: boolean
  [key: string]: any
}

type ChartFlowStore = {
  googleFile: any
  setGoogleFile: (googleFile: any) => void
  slackChannels: Option[]
  setSlackChannels: (slackChannels: Option[]) => void
  selectedSlackChannels: Option[]
  setSelectedSlackChannels: (selectedSlackChannels: Option[]) => void
}

export const useChartFlowStore = create<ChartFlowStore>()((set) => ({
  googleFile: {},
  setGoogleFile: (googleFile: any) => set({ googleFile }),
  slackChannels: [],
  setSlackChannels: (slackChannels: Option[]) => set({ slackChannels }),
  selectedSlackChannels: [],
  setSelectedSlackChannels: (selectedSlackChannels: Option[]) =>
    set({ selectedSlackChannels }),
}))
</file_artifact>

<file path="src/middleware.ts">
// FILE: src/middleware.ts

import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const isTestEnv = process.env.NODE_ENV === "test";

/**
 * If NODE_ENV === "test", we skip all Clerk authentication checks. 
 * Otherwise, we run the standard Clerk authMiddleware logic.
 */
export default isTestEnv
  ? function skipClerkInTest(req: Request) {
      console.log("[Middleware] => NODE_ENV=test => Skipping Clerk checks.");
      return NextResponse.next();
    }
  : authMiddleware({
      // Normal Clerk config
      publicRoutes: [
        "/",
        "/api/clerk-webhook",
        "/api/drive-activity/notification",
        "/api/payment/success",
        // For example, you might also add:
        // "/api/google-drive(.*)",
      ],
      ignoredRoutes: [
        "/api/auth/callback/discord",
        "/api/auth/callback/notion",
        "/api/auth/callback/slack",
        "/api/flow",
        "/api/cron/wait",
      ],
      afterAuth: (auth, req) => {
        const { userId, isPublicRoute } = auth;
        const url = req.nextUrl.clone();

        console.log("\n--- [Middleware] ---");
        console.log("Method =>", req.method);
        console.log("Path =>", url.pathname);
        console.log("Clerk userId =>", userId || "NO-USER");
        console.log("isPublicRoute =>", isPublicRoute);

        if (!userId && !isPublicRoute) {
          console.log("[Middleware] => force sign-in redirect");
          return redirectToSignIn({ returnBackUrl: url.toString() });
        }

        // If user is signed in but tries visiting sign-in, push them away.
        if (userId && (url.pathname.startsWith("/sign-in") || url.pathname.startsWith("/sign-up"))) {
          console.log("[Middleware] => user is signed in but visited sign-in => redirect /dashboard");
          url.pathname = "/dashboard";
          return NextResponse.redirect(url);
        }

        console.log("[Middleware] => NextResponse.next()");
        return NextResponse.next();
      },
    });

// Standard matcher config for Next.js
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
</file_artifact>

<file path="src/providers/billing-provider.tsx">
'use client'

import React from 'react'

type BillingProviderProps = {
  credits: string
  tier: string
  setCredits: React.Dispatch<React.SetStateAction<string>>
  setTier: React.Dispatch<React.SetStateAction<string>>
}

const initialValues: BillingProviderProps = {
  credits: '',
  setCredits: () => undefined,
  tier: '',
  setTier: () => undefined,
}

type WithChildProps = {
  children: React.ReactNode
}

const context = React.createContext(initialValues)
const { Provider } = context

export const BillingProvider = ({ children }: WithChildProps) => {
  const [credits, setCredits] = React.useState(initialValues.credits)
  const [tier, setTier] = React.useState(initialValues.tier)

  const values = {
    credits,
    setCredits,
    tier,
    setTier,
  }

  return <Provider value={values}>{children}</Provider>
}

export const useBilling = () => {
  const state = React.useContext(context)
  return state
}
</file_artifact>

<file path="src/providers/connections-provider.tsx">
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { toast } from "sonner";

/**
 * Shape of a single Connection record from your DB
 */
export interface ConnectionRecord {
  id: string;
  userId?: string;
  type?: string;   // e.g. "openai", "anthropic", "mcp-github", ...
  name?: string;
  url?: string;
  apiKey?: string;
  data?: any;
}

/**
 * The older “AIModelConnection” structure (optional)
 */
export interface AIModelConnection {
  id: string;
  userId: string;
  model: string;
  apiKey: string;
  name: string;
}

/**
 * The context value for ConnectionsProvider
 */
interface ConnectionsContextValue {
  aiModelConnections: AIModelConnection[];
  setAiModelConnections: React.Dispatch<React.SetStateAction<AIModelConnection[]>>;

  connections: ConnectionRecord[];
  setConnections: React.Dispatch<React.SetStateAction<ConnectionRecord[]>>;

  showAddModal: boolean;
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;

  fetchConnections: () => Promise<void>;
  onAddConnection: (conn: Partial<ConnectionRecord>) => Promise<void>;
  onDeleteConnection: (connId: string) => Promise<void>;
}

/**
 * Our React Context
 */
const ConnectionsContext = createContext<ConnectionsContextValue | undefined>(undefined);

/**
 * Hook to consume
 */
export function useConnections(): ConnectionsContextValue {
  const ctx = useContext(ConnectionsContext);
  if (!ctx) {
    throw new Error("useConnections must be used within ConnectionsProvider");
  }
  return ctx;
}

/**
 * Provider that loads + manages “connections” from /api/connections
 */
export function ConnectionsProvider({ children }: { children: ReactNode }) {
  const [aiModelConnections, setAiModelConnections] = useState<AIModelConnection[]>([]);
  const [connections, setConnections] = useState<ConnectionRecord[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // Loads them from our local API
  const fetchConnections = useCallback(async () => {
    try {
      // The correct endpoint for listing all connections
      const res = await fetch("/api/connections");
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to load connections");
      }
      // data might have "connections" array
      setConnections(data.connections || []);
      // If your API also includes older AI connections:
      setAiModelConnections(data.aiModelConnections || []);
    } catch (err: any) {
      console.error("[fetchConnections] =>", err);
      toast.error(`Error loading connections: ${String(err)}`);
    }
  }, []);

  // Add a new connection by calling POST /api/connections
  async function onAddConnection(conn: Partial<ConnectionRecord>) {
    try {
      const resp = await fetch("/api/connections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(conn),
      });
      const data = await resp.json();
      if (!resp.ok || !data.success) {
        throw new Error(data.error || "Add connection failed");
      }
      toast.success("Connection added!");
      await fetchConnections();
      setShowAddModal(false);
    } catch (err: any) {
      console.error("[onAddConnection] =>", err);
      toast.error(String(err));
    }
  }

  // Delete connection by calling DELETE /api/connections?id=...
  async function onDeleteConnection(connId: string) {
    try {
      const res = await fetch(`/api/connections?id=${connId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Delete connection failed");
      }
      toast.success("Connection deleted.");
      await fetchConnections();
    } catch (err: any) {
      console.error("[onDeleteConnection] =>", err);
      toast.error(String(err));
    }
  }

  // On mount
  useEffect(() => {
    fetchConnections();
  }, [fetchConnections]);

  const ctxValue: ConnectionsContextValue = {
    aiModelConnections,
    setAiModelConnections,
    connections,
    setConnections,
    showAddModal,
    setShowAddModal,
    fetchConnections,
    onAddConnection,
    onDeleteConnection,
  };

  return (
    <ConnectionsContext.Provider value={ctxValue}>
      {children}
    </ConnectionsContext.Provider>
  );
}
</file_artifact>

<file path="src/providers/editor-provider.tsx">
'use client'

import React, { Dispatch, createContext, useContext, useReducer } from 'react'
import type { EditorState, EditorActions } from '@/lib/types'

const initialEditorState: EditorState['editor'] = {
  elements: [],
  selectedNode: {
    data: {
      title: '',
      description: '',
      completed: false,
      current: false,
      metadata: {},
      type: 'Trigger',
    },
    parameters: {},
    id: '',
    position: { x: 0, y: 0 },
    type: 'Trigger',
  },
  edges: [],
}

const initialHistoryState: EditorState['history'] = {
  history: [initialEditorState],
  currentIndex: 0,
  dirty: false,
}

const initialState: EditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
}

function editorReducer(
  state: EditorState = initialState,
  action: EditorActions
): EditorState {
  switch (action.type) {
    case 'REDO': {
      const { currentIndex, history } = state.history
      if (currentIndex < history.length - 1) {
        const nextIndex = currentIndex + 1
        const nextEditorState = { ...history[nextIndex] }
        return {
          ...state,
          editor: nextEditorState,
          history: {
            ...state.history,
            currentIndex: nextIndex,
            dirty: true,
          },
        }
      }
      return state
    }

    case 'UNDO': {
      const { currentIndex, history } = state.history
      if (currentIndex > 0) {
        const prevIndex = currentIndex - 1
        const prevEditorState = { ...history[prevIndex] }
        return {
          ...state,
          editor: prevEditorState,
          history: {
            ...state.history,
            currentIndex: prevIndex,
            dirty: true,
          },
        }
      }
      return state
    }

    case 'LOAD_DATA': {
      return {
        ...state,
        editor: {
          ...state.editor,
          elements: action.payload.elements || initialEditorState.elements,
          edges: action.payload.edges,
        },
        history: {
          ...state.history,
          dirty: false,
        },
      }
    }

    case 'SELECTED_ELEMENT': {
      return {
        ...state,
        editor: {
          ...state.editor,
          selectedNode: action.payload.element,
        },
      }
    }

    case 'UPDATE_NODE': {
      return {
        ...state,
        editor: {
          ...state.editor,
          elements: action.payload.elements,
        },
        history: {
          ...state.history,
          history: [...state.history.history, state.editor],
          currentIndex: state.history.currentIndex + 1,
          dirty: true,
        },
      }
    }

    case 'UPDATE_EDGE': {
      return {
        ...state,
        editor: {
          ...state.editor,
          edges: action.payload.edges,
        },
        history: {
          ...state.history,
          history: [...state.history.history, state.editor],
          currentIndex: state.history.currentIndex + 1,
          dirty: true,
        },
      }
    }

    case 'UPDATE_NODE_PARAMETER': {
      const { nodeId, parameterName, parameterValue } = action.payload
      const updatedElements = state.editor.elements.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            parameters: {
              ...node.parameters,
              [parameterName]: parameterValue,
            },
          }
        }
        return node
      })
      let updatedSelectedNode = state.editor.selectedNode
      if (state.editor.selectedNode.id === nodeId) {
        updatedSelectedNode = {
          ...state.editor.selectedNode,
          parameters: {
            ...state.editor.selectedNode.parameters,
            [parameterName]: parameterValue,
          },
        }
      }

      return {
        ...state,
        editor: {
          ...state.editor,
          elements: updatedElements,
          selectedNode: updatedSelectedNode,
        },
        history: {
          ...state.history,
          history: [...state.history.history, state.editor],
          currentIndex: state.history.currentIndex + 1,
          dirty: true,
        },
      }
    }

    case 'MARK_SAVED': {
      return {
        ...state,
        history: {
          ...state.history,
          dirty: false,
        },
      }
    }

    default:
      return state
  }
}

export const EditorContext = createContext<{
  state: EditorState
  dispatch: Dispatch<EditorActions>
}>({
  state: initialState,
  dispatch: () => undefined,
})

type EditorProviderProps = {
  children: React.ReactNode
}

export function EditorProvider({ children }: EditorProviderProps) {
  const [state, dispatch] = useReducer(editorReducer, initialState)
  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  )
}

export const useEditor = () => {
  const context = useContext(EditorContext)
  if (!context) {
    throw new Error('useEditor must be used within EditorProvider')
  }
  return context
}

export default EditorProvider
</file_artifact>

<file path="src/providers/modal-provider.tsx">
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

interface ModalProviderProps {
  children: React.ReactNode
}

export type ModalData = {}

type ModalContextType = {
  data: ModalData
  isOpen: boolean
  setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void
  setClose: () => void
}

export const ModalContext = createContext<ModalContextType>({
  data: {},
  isOpen: false,
  setOpen: () => {},
  setClose: () => {},
})

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<ModalData>({})
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const setOpen = async (
    modal: React.ReactNode,
    fetchData?: () => Promise<any>
  ) => {
    if (modal) {
      if (fetchData) {
        setData({ ...data, ...(await fetchData()) })
      }
      setShowingModal(modal)
      setIsOpen(true)
    }
  }

  const setClose = () => {
    setIsOpen(false)
    setData({})
  }

  if (!isMounted) return null

  return (
    <ModalContext.Provider value={{ data, setOpen, setClose, isOpen }}>
      {children}
      {showingModal}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within the modal provider')
  }
  return context
}

export default ModalProvider
</file_artifact>

<file path="src/providers/theme-provider.tsx">
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
</file_artifact>

<file path="src/components/global/3d-card.tsx">
'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from 'react'

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true)
    if (!containerRef.current) return
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn('flex items-center justify-center', containerClassName)}
        style={{
          perspective: '1000px',
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'flex items-center justify-center relative transition-all duration-200 ease-linear',
            className
          )}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]',
        className
      )}
    >
      {children}
    </div>
  )
}

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    handleAnimations()
  }, [isMouseEntered])

  const handleAnimations = () => {
    if (!ref.current) return
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
  }

  return (
    <Tag
      ref={ref}
      className={cn('w-fit transition duration-200 ease-linear', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider')
  }
  return context
}
</file_artifact>

<file path="src/components/global/connect-parallax.tsx">
'use client'
import React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  )
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  )
}
</file_artifact>

<file path="src/components/global/container-scroll-animation.tsx">
'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

export const ContainerScroll = ({
  titleComponent,
}: {
  titleComponent: string | React.ReactNode
}) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="h-[80rem] flex items-center justify-center relative p-20"
      ref={containerRef}
    >
      <div
        className="py-40 w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
        />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
        />
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  translate,
}: {
  rotate: any
  scale: any
  translate: any
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full  p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl  gap-4 overflow-hidden p-4 transition-all ">
        <Image
          src="/temp-banner.png"
          fill
          alt="bannerImage"
          className="object-cover border-8 rounded-2xl"
        />
      </div>
    </motion.div>
  )
}
</file_artifact>

<file path="src/components/global/custom-modal.tsx">
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from '@/components/ui/drawer'
  import { useModal } from '@/providers/modal-provider'
  
  import React from 'react'
  import { Button } from '../ui/button'
  
  type Props = {
    title: string
    subheading: string
    children: React.ReactNode
    defaultOpen?: boolean
  }
  
  const CustomModal = ({ children, subheading, title, defaultOpen }: Props) => {
    const { isOpen, setClose } = useModal()
    const handleClose = () => setClose()
  
    return (
      <Drawer
        open={isOpen}
        onClose={handleClose}
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center">{title}</DrawerTitle>
            <DrawerDescription className="text-center flex flex-col items-center gap-4 h-96 overflow-scroll">
              {subheading}
              {children}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex flex-col gap-4 bg-background border-t-[1px] border-t-muted">
            <DrawerClose>
              <Button
                variant="ghost"
                className="w-full"
                onClick={handleClose}
              >
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }
  
  export default CustomModal
</file_artifact>

<file path="src/components/global/infinite-moving-cards.tsx">
'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    href: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  console.log(items)
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <Image
            width={170}
            height={1}
            src={item.href}
            alt={item.href}
            className=" relative rounded-2xl  object-contain opacity-50"
            key={item.href}
          />
        ))}
      </ul>
    </div>
  )
}
</file_artifact>

<file path="src/components/global/lamp.tsx">
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SparklesCore } from './sparkles'

export function LampComponent() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="mt-20 bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Plans That
        <br /> Fit You Best
      </motion.h1>
    </LampContainer>
  )
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'relative flex min-h-[800px] flex-col items-center justify-center overflow-hidden bg-neutral-950 w-full rounded-md z-0',
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-neutral-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-neutral-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-neutral-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-neutral-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-neutral-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-neutral-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-neutral-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-neutral-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-neutral-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-neutral-400 "
        ></motion.div>

        <div className="w-[40rem] h-40 relative">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-neutral-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  )
}
</file_artifact>

<file path="src/components/global/mode-toggle.tsx">
'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Sun className="absolute inset-0 m-auto h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute inset-0 m-auto h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
</file_artifact>

<file path="src/components/global/navbar.tsx">
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { UserButton, currentUser } from '@clerk/nextjs'

type Props = {}

const Navbar = async (props: Props) => {
  const user = await currentUser()
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">ChartFlow</p>
        <Image
          src="/Logo.png"
          width={15}
          height={15}
          alt="logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">Pro</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? 'Dashboard' : 'Get Started'}
          </span>
        </Link>
        {user ? <UserButton afterSignOutUrl="/" /> : null}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  )
}

export default Navbar
</file_artifact>

<file path="src/components/global/sparkles.tsx">
'use client'
import type { NextPage } from 'next'
import React from 'react'
import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Container, Engine } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

import { motion, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'

type ParticlesProps = {
  id?: string
  className?: string
  background?: string
  particleSize?: number
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}
export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props
  const [init, setInit] = useState(false)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])
  const controls = useAnimation()

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      console.log(container)
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      })
    }
  }

  return (
    <motion.div
      animate={controls}
      className={cn('opacity-0', className)}
    >
      {init && (
        <Particles
          id={id || 'tsparticles'}
          className={cn('h-full w-full')}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || '#0d47a1',
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },

            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: false,
                  mode: 'repulse',
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                absorb: {
                  speed: 2,
                },
                bounce: {
                  horizontal: {
                    value: 1,
                  },
                  vertical: {
                    value: 1,
                  },
                },
                enable: false,
                maxSpeed: 50,
                mode: 'bounce',
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                value: particleColor || '#ffffff',
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                },
              },
              effect: {
                close: true,
                fill: true,
                options: {},
                type: {} as any,
              },
              groups: {},
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 3000,
                    y: 3000,
                  },
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: 'percent',
                  radius: 0,
                },
                decay: 0,
                distance: {},
                direction: 'none',
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50,
                },
                path: {
                  clamp: true,
                  delay: {
                    value: 0,
                  },
                  enable: false,
                  options: {},
                },
                outModes: {
                  default: 'out',
                },
                random: false,
                size: false,
                speed: {
                  min: 0.1,
                  max: 1,
                },
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fill: {},
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                limit: {
                  mode: 'delete',
                  value: 0,
                },
                value: particleDensity || 120,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: speed || 4,
                  decay: 0,
                  delay: 2,
                  sync: false,
                  mode: 'auto',
                  startValue: 'random',
                  destroy: 'none',
                },
              },
              reduceDuplicates: false,
              shadow: {
                blur: 0,
                color: {
                  value: '#000',
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                close: true,
                fill: true,
                options: {},
                type: 'circle',
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
                animation: {
                  count: 0,
                  enable: false,
                  speed: 5,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: 'auto',
                  startValue: 'random',
                  destroy: 'none',
                },
              },
              stroke: {
                width: 0,
              },
              zIndex: {
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
              destroy: {
                bounds: {},
                mode: 'none',
                split: {
                  count: 1,
                  factor: {
                    value: 3,
                  },
                  rate: {
                    value: {
                      min: 4,
                      max: 9,
                    },
                  },
                  sizeOffset: true,
                },
              },
              roll: {
                darken: {
                  enable: false,
                  value: 0,
                },
                enable: false,
                enlighten: {
                  enable: false,
                  value: 0,
                },
                mode: 'vertical',
                speed: 25,
              },
              tilt: {
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: 'clockwise',
                enable: false,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
              wobble: {
                distance: 5,
                enable: false,
                speed: {
                  angle: 50,
                  move: 10,
                },
              },
              life: {
                count: 0,
                delay: {
                  value: 0,
                  sync: false,
                },
                duration: {
                  value: 0,
                  sync: false,
                },
              },
              rotate: {
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: 'clockwise',
                path: false,
              },
              orbit: {
                animation: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: false,
                },
                enable: false,
                opacity: 1,
                rotation: {
                  value: 45,
                },
                width: 1,
              },
              links: {
                blink: false,
                color: {
                  value: '#fff',
                },
                consent: false,
                distance: 100,
                enable: false,
                frequency: 1,
                opacity: 1,
                shadow: {
                  blur: 5,
                  color: {
                    value: '#000',
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                  frequency: 1,
                },
                width: 1,
                warp: false,
              },
              repulse: {
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  )
}
</file_artifact>

<file path="src/components/icons/category.tsx">
import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

function Category({ selected }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9] ': selected }
        )}
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9] ': selected }
        )}
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9] ': selected }
        )}
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF] ': selected }
        )}
      />
    </svg>
  )
}

export default Category
</file_artifact>

<file path="src/components/icons/clipboard.tsx">
import clsx from 'clsx'
import React from 'react'

const Logs = ({ selected }: { selected: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="19"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9] ': selected }
        )}
      />
      <path
        d="M14 3C14 1.89543 13.1046 1 12 1C10.8954 1 10 1.89543 10 3H8V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3H14Z"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF] ': selected }
        )}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 11C7 10.4477 7.44772 10 8 10L16 10C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12L8 12C7.44772 12 7 11.5523 7 11Z"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF] ': selected }
        )}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15C7 14.4477 7.44772 14 8 14L12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16L8 16C7.44772 16 7 15.5523 7 15Z"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9] ': selected }
        )}
      />
    </svg>
  )
}

export default Logs
</file_artifact>

<file path="src/components/icons/cloud_download.tsx">
import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const Templates = ({ selected }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 9C22 12.866 18.866 16 15 16H7C4.23858 16 2 13.7614 2 11C2 8.23858 4.23858 6 7 6C7.54527 6 8.07015 6.08728 8.56143 6.24864C9.63037 3.75042 12.1108 2 15 2C18.866 2 22 5.13401 22 9Z"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9] ': selected }
        )}
      />
      <path
        d="M9.70711 17.2929C9.31658 16.9024 8.68342 16.9024 8.29289 17.2929C7.90237 17.6834 7.90237 18.3166 8.29289 18.7071L11.2929 21.7071C11.4874 21.9016 11.7421 21.9992 11.997 22L12 22L12.003 22C12.1375 21.9996 12.2657 21.9727 12.3828 21.9241C12.5007 21.8753 12.6112 21.803 12.7071 21.7071L15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929C15.3166 16.9024 14.6834 16.9024 14.2929 17.2929L13 18.5858V13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V18.5858L9.70711 17.2929Z"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF] ': selected }
        )}
      />
    </svg>
  )
}

export default Templates
</file_artifact>

<file path="src/components/icons/home.tsx">
import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const Home = ({ selected }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 11.3361C2 10.4857 2.36096 9.67518 2.99311 9.10625L9.9931 2.80625C11.134 1.77943 12.866 1.77943 14.0069 2.80625L21.0069 9.10625C21.639 9.67518 22 10.4857 22 11.3361V19C22 20.6569 20.6569 22 19 22H16L15.9944 22H8.00558L8 22H5C3.34315 22 2 20.6569 2 19V11.3361Z"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#C0BFC4] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] !fill-[#7540A9] ': selected }
        )}
      />
      <path
        d="M9 16C9 14.8954 9.89543 14 11 14H13C14.1046 14 15 14.8954 15 16V22H9V16Z"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ',
          { 'dark:!fill-[#9F54FF] fill-[#BD8AFF]': selected }
        )}
      />
    </svg>
  )
}

export default Home
</file_artifact>

<file path="src/components/icons/payment.tsx">
import clsx from 'clsx'
import React from 'react'

type Props = {
  selected: boolean
}

const Payment = ({ selected }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9] ': selected }
        )}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 10H2V8H22V10Z"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF] ': selected }
        )}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 15C4 14.4477 4.44772 14 5 14H11C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16H5C4.44772 16 4 15.5523 4 15Z"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF] ': selected }
        )}
      />
    </svg>
  )
}

export default Payment
</file_artifact>

<file path="src/components/icons/settings.tsx">
import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const Settings = ({ selected }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99243 4.78709C8.49594 4.50673 8.91192 4.07694 9.09416 3.53021L9.48171 2.36754C9.75394 1.55086 10.5182 1 11.3791 1H12.621C13.4819 1 14.2462 1.55086 14.5184 2.36754L14.906 3.53021C15.0882 4.07694 15.5042 4.50673 16.0077 4.78709C16.086 4.83069 16.1635 4.87553 16.2403 4.92159C16.7349 5.21857 17.3158 5.36438 17.8811 5.2487L19.0828 5.00279C19.9262 4.8302 20.7854 5.21666 21.2158 5.96218L21.8368 7.03775C22.2672 7.78328 22.1723 8.72059 21.6012 9.36469L20.7862 10.2838C20.4043 10.7144 20.2392 11.2888 20.2483 11.8644C20.2498 11.9548 20.2498 12.0452 20.2483 12.1356C20.2392 12.7111 20.4043 13.2855 20.7862 13.7162L21.6012 14.6352C22.1723 15.2793 22.2672 16.2167 21.8368 16.9622L21.2158 18.0378C20.7854 18.7833 19.9262 19.1697 19.0828 18.9971L17.8812 18.7512C17.3159 18.6356 16.735 18.7814 16.2403 19.0784C16.1636 19.1244 16.086 19.1693 16.0077 19.2129C15.5042 19.4933 15.0882 19.9231 14.906 20.4698L14.5184 21.6325C14.2462 22.4491 13.4819 23 12.621 23H11.3791C10.5182 23 9.75394 22.4491 9.48171 21.6325L9.09416 20.4698C8.91192 19.9231 8.49594 19.4933 7.99243 19.2129C7.91409 19.1693 7.83654 19.1244 7.7598 19.0784C7.2651 18.7814 6.68424 18.6356 6.11895 18.7512L4.91726 18.9971C4.07387 19.1697 3.21468 18.7833 2.78425 18.0378L2.16326 16.9622C1.73283 16.2167 1.82775 15.2793 2.39891 14.6352L3.21393 13.7161C3.59585 13.2854 3.7609 12.7111 3.75179 12.1355C3.75035 12.0452 3.75035 11.9548 3.75179 11.8644C3.76091 11.2889 3.59585 10.7145 3.21394 10.2838L2.39891 9.36469C1.82775 8.72059 1.73283 7.78328 2.16326 7.03775L2.78425 5.96218C3.21468 5.21665 4.07387 4.8302 4.91726 5.00278L6.11903 5.24871C6.68431 5.36439 7.26517 5.21857 7.75986 4.9216C7.83658 4.87554 7.91411 4.83069 7.99243 4.78709Z"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9] ': selected }
        )}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF] ',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF] ': selected }
        )}
      />
    </svg>
  )
}

export default Settings
</file_artifact>

<file path="src/components/icons/workflows.tsx">
import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const Workflows = ({ selected }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0034 4.69724C15.451 2.17765 12.2728 0.692639 10.6273 2.65246L3.58895 11.0353C2.22322 12.6619 3.37965 15.1429 5.50357 15.1429H9.7351L8.99616 19.3027C8.54859 21.8223 11.7267 23.3073 13.3722 21.3475L20.4107 12.9647C21.7764 11.3381 20.62 8.85714 18.496 8.85714H14.2645L15.0034 4.69724Z"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] !fill-[#7540A9] ': selected }
        )}
      />
    </svg>
  )
}

export default Workflows
</file_artifact>

<file path="src/components/infobar/index.tsx">
'use client'
import React, { useEffect } from 'react'
import { ModeToggle } from '../global/mode-toggle'
import { Book, Headphones } from 'lucide-react'
import { Input } from '@/components/ui/input'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { UserButton } from '@clerk/nextjs'
import { useBilling } from '@/providers/billing-provider'
import { onPaymentDetails } from '@/app/(main)/(pages)/billing/_actions/payment-connections'

type Props = {}

const InfoBar = (props: Props) => {
  const { credits, tier, setCredits, setTier } = useBilling()

  const onGetPayment = async () => {
    const response = await onPaymentDetails()
    if (response) {
      setTier(response.tier!)
      setCredits(response.credits!)
    }
  }

  useEffect(() => {
    onGetPayment()
  }, [])

  return (
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black ">
      <span className="flex items-center gap-2 font-bold">
        <p className="text-sm font-light text-gray-300">Credits</p>
        {tier == 'Unlimited' ? (
          <span>Unlimited</span>
        ) : (
          <span>
            {credits}/{tier == 'Free' ? '10' : tier == 'Pro' && '100'}
          </span>
        )}
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UserButton />
    </div>
  )
}

export default InfoBar
</file_artifact>

<file path="src/components/sidebar/index.tsx">
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { menuOptions } from '@/lib/constant'
import clsx from 'clsx'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '../global/mode-toggle'

type Props = {}

const MenuOptions = (props: Props) => {
  const pathName = usePathname()

  return (
    <nav className=" dark:bg-black h-screen overflow-scroll  justify-between flex items-center flex-col  gap-10 py-6 px-2">
      <div className="flex items-center justify-center flex-col gap-8">
        <Link
          className="flex font-bold flex-row "
          href="/"
        >
          ChartFlow
        </Link>
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        'group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                        {
                          'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                            pathName === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component selected={pathName === menuItem.href} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator />
        <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <LucideMousePointerClick className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform -bottom-[30px] translate-x-[-50%]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch className="text-muted-foreground" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform -bottom-[30px] translate-x-[-50%]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <Database className="text-muted-foreground" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform -bottom-[30px] translate-x-[-50%]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch className="text-muted-foreground" size={18} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default MenuOptions
</file_artifact>

<file path="src/components/ui/accordion.tsx">
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
</file_artifact>

<file path="src/components/ui/badge.tsx">
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
</file_artifact>

<file path="src/components/ui/button.tsx">
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
</file_artifact>

<file path="src/components/ui/card.tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
</file_artifact>

<file path="src/components/ui/command.tsx">
"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
</file_artifact>

<file path="src/components/ui/dialog.tsx">
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
</file_artifact>

<file path="src/components/ui/drawer.tsx">
"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
</file_artifact>

<file path="src/components/ui/form.tsx">
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
</file_artifact>

<file path="src/components/ui/input.tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
</file_artifact>

<file path="src/components/ui/label.tsx">
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
</file_artifact>

<file path="src/components/ui/popover.tsx">
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
</file_artifact>

<file path="src/components/ui/progress.tsx">
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
</file_artifact>

<file path="src/components/ui/resizable.tsx">
"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
</file_artifact>

<file path="src/components/ui/select.tsx">
// src/components/ui/select.tsx
"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

/**
 * Utility function to merge class names.
 * If you already have a `cn` utility, you can import that instead.
 */
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

// [NEW] define a label component
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>((props, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className="px-2 py-1 text-xs font-semibold text-muted-foreground"
    {...props}
  />
));
SelectLabel.displayName = "SelectLabel";

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[highlighted]:bg-accent",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute left-0 inline-flex items-center">
      <Check className="h-4 w-4" />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel };
</file_artifact>

<file path="src/components/ui/separator.tsx">
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
</file_artifact>

<file path="src/components/ui/sonner.tsx">
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
</file_artifact>

<file path="src/components/ui/switch.tsx">
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
</file_artifact>

<file path="src/components/ui/tabs.tsx">
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
</file_artifact>

<file path="src/components/ui/textarea.tsx">
// src/components/ui/textarea.tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * A shadcn-like <Textarea> component.
 * Accepts any textarea HTML props via TextareaProps.
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
          "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"
</file_artifact>

<file path="src/components/ui/tooltip.tsx">
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
</file_artifact>

<file path=".eslintrc.json">
{
  "extends": "next/core-web-vitals"
}
</file_artifact>

<file path="components.json">
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
</file_artifact>

<file path="ecosystem.config.js">
// C:\Projects\automationsaas\ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "automationsaas",
      // Use the JS entry point for Next.js instead of the .cmd wrapper:
      script: "node_modules/next/dist/bin/next",
      // Pass the command as a single string (or as an array of arguments)
      args: "start -p 3002",
      cwd: "C:/Projects/automationsaas",
      // Remove the custom interpreter so PM2 uses Node by default
      // interpreter: "node", // (optional – Node is the default)
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
</file_artifact>

<file path="jest.config.js">
// jest.config.js
require('dotenv').config({ path: '.env.test' });
module.exports = {
    testEnvironment: "node",
    transform: {
      "^.+\\.(t|j)sx?$": [
        "@swc/jest",
        {
          jsc: {
            target: "es2021",
          },
        },
      ],
    },
    moduleNameMapper: {
      // For example, handling path aliases like @/lib or @/app
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    testMatch: ["<rootDir>/__tests__/**/*.test.(js|ts|tsx)"],
  };
  
</file_artifact>

<file path="next-env.d.ts">
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.
</file_artifact>

<file path="next.config.mjs">
// FILE: next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "ucarecdn.com" },
    ],
  },
  webpack: (config, { isServer }) => {
    // If server side, mark coffee-script as external so it doesn't get bundled
    if (isServer) {
      if (!config.externals) config.externals = [];
      // If config.externals is an array, push an object or a string "coffee-script"
      // The exact approach depends on your Next.js version 
      // but typically you can do:
      config.externals.push({ "coffee-script": "commonjs coffee-script" });
    } else {
      // client side => fallback for Node builtins:
      if (!config.resolve.fallback) config.resolve.fallback = {};
      config.resolve.fallback.fs = false;
      config.resolve.fallback.module = false;
      config.resolve.fallback.async_hooks = false;
      // we do NOT mention coffee-script on the client fallback => 
      // means it's not used client side.
    }

    return config;
  },
};

export default nextConfig;
</file_artifact>

<file path="package.json">
{
  "name": "automationsaas",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 3002",
    "test": "jest",
    "lint": "next lint",
    "deploy": "pm2 start ecosystem.config.js --env production"
  },
  "dependencies": {
    "@anthropic-ai/sdk": "^0.36.3",
    "@clerk/clerk-sdk-node": "^5.1.6",
    "@clerk/nextjs": "^4.30.0",
    "@codemirror/gutter": "^0.19.9",
    "@codemirror/lang-json": "^6.0.1",
    "@codemirror/view": "^6.36.2",
    "@google/generative-ai": "^0.22.0",
    "@hookform/resolvers": "^3.3.4",
    "@inquirer/checkbox": "^4.1.2",
    "@notionhq/client": "^2.2.15",
    "@prisma/client": "^5.13.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@tsparticles/engine": "^3.3.0",
    "@tsparticles/react": "^3.0.0",
    "@tsparticles/slim": "^3.3.0",
    "@uiw/react-codemirror": "^4.23.8",
    "@uploadcare/blocks": "0.38.0",
    "axios": "^1.7.9",
    "blessed": "^0.1.81",
    "blessed-contrib": "^1.0.11",
    "class-variance-authority": "^0.7.0",
    "classnames": "^2.5.1",
    "clsx": "^2.1.1",
    "cmdk": "^0.2.0",
    "coffee-script": "^1.12.7",
    "cron": "^4.1.0",
    "framer-motion": "^11.1.7",
    "googleapis": "^135.0.0",
    "gpt-3-encoder": "^1.1.4",
    "groq-sdk": "^0.15.0",
    "inquirer": "^12.4.2",
    "lodash": "^4.17.21",
    "lucide-react": "^0.373.0",
    "next": "^14.2.24",
    "next-themes": "^0.3.0",
    "pm2": "^5.4.3",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.51.3",
    "react-resizable-panels": "^2.0.18",
    "reactflow": "^11.11.2",
    "sonner": "^1.7.4",
    "stripe": "^17.6.0",
    "tailwind-merge": "^2.3.0",
    "tailwindcss-animate": "^1.0.7",
    "uuid": "^9.0.1",
    "vaul": "^0.9.0",
    "vm2": "^3.9.19",
    "zod": "^3.23.4",
    "zustand": "^4.5.2"
  },
  "devDependencies": {
    "@codemirror/lang-javascript": "^6.2.3",
    "@swc/jest": "^0.2.37",
    "@types/jest": "^29.5.14",
    "@types/lodash": "^4.17.15",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/uuid": "^9.0.8",
    "dotenv": "^16.4.7",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "jest": "^29.7.0",
    "null-loader": "^4.0.1",
    "postcss": "^8",
    "prisma": "^5.13.0",
    "shadcn-ui": "latest",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  },
  "packageManager": "yarn@1.22.22+sha512.a6b2f7906b721bba3d67d4aff083df04dad64c399707841b7acf00f6b133b7ac24255f2652fa22ae3534329dc6180534e98d17432037ff6fd140556e2bb3137e"
}
</file_artifact>

<file path="postcss.config.mjs">
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
</file_artifact>

<file path="tailwind.config.ts">
import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme('colors'))
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   )
//   addBase({
//     ':root': newVars,
//   })
// }

export default config
</file_artifact>

<file path="tsconfig.json">
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    },
    "types": ["@uploadcare/blocks/types/jsx"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
</file_artifact>

<file path="src/app/page.tsx">
import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { HeroParallax } from '@/components/global/connect-parallax'
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards'
import { LampComponent } from '@/components/global/lamp'
import Navbar from '@/components/global/navbar'
import { Button } from '@/components/ui/button'
import { clients, products } from '@/lib/constant'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Autom8 Your Work With ChartFlow.Pro
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[-250px]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Hobby
                <h2 className="text-6xl ">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan
                <h2 className="text-6xl ">$29</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited
                <h2 className="text-6xl ">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  )
}
</file_artifact>

<file path="src/app/layout.tsx">
// C:\Projects\automationsaas\src\app\layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/sonner";
import { BillingProvider } from "@/providers/billing-provider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChartFlow.Pro",
  description: "Automate Your Work With ChartFlow.Pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <BillingProvider>
              <ModalProvider>
                {children}
                <Toaster />
              </ModalProvider>
            </BillingProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
</file_artifact>

<file path="src/app/globals.css">
@tailwind base;
@tailwind components;
@tailwind utilities;

*,
*::before,
*::after {
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  display: none !important;
}
.bg-radial-gradient {
  background-image: radial-gradient(
    circle at 10% 20%,
    rgba(4, 159, 108, 1) 0%,
    rgba(194, 254, 113, 1) 90.1%
  );
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
</file_artifact>

<file path="src/app/api/payment/route.ts">
import { NextResponse, NextRequest } from "next/server"
import Stripe from "stripe"

export async function GET(req: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
        typescript: true,
        apiVersion: '2025-01-27.acacia',
    })

    const products = await stripe.prices.list({
        limit: 3,
    })

    return NextResponse.json(products.data)
}

export async function POST (req: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
        typescript: true,
        apiVersion: '2025-01-27.acacia',
    })
    const data = await req.json()
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: data.priceId,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: `${process.env.NEXT_PUBLIC_URL}/billing?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/billing`,
    })
    return NextResponse.json(session.url)
}
</file_artifact>

<file path="src/app/api/oauth/callback/route.ts">
// src/app/api/oauth/callback/route.ts
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import { getOAuthConnection, saveOAuthTokens } from "@/app/(main)/(pages)/connections/_actions/oauth-connections";

async function exchangeCodeForTokens(clientId: string, clientSecret: string, redirectUri: string, code: string) {
  const tokenUrl = "https://oauth2.googleapis.com/token";
  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to exchange auth code: ${errorText}`);
  }
  return res.json() as Promise<{
    access_token: string;
    refresh_token?: string;
    expires_in?: number;
  }>;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    // pass provider in ?provider=google-drive
    const provider = url.searchParams.get("provider") || "google-drive";
    // or if you used a 'state' param in the start route, parse it here:
    // const state = url.searchParams.get("state");
    // const provider = state ?? "google-drive";

    if (!code) {
      return NextResponse.json({ success: false, error: "Missing ?code" }, { status: 400 });
    }
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ success: false, error: "Not logged in" }, { status: 401 });
    }

    // Get connection from DB
    const conn = await getOAuthConnection(user.id, provider);
    if (!conn) {
      return NextResponse.json({
        success: false,
        error: `No DB record found for user=${user.id} provider=${provider}`,
      }, { status: 404 });
    }

    // Exchange code
    const tokenResponse = await exchangeCodeForTokens(conn.clientId, conn.clientSecret, conn.redirectUri, code);
    const { access_token, refresh_token, expires_in } = tokenResponse;

    let expiresAt: Date | undefined;
    if (expires_in) {
      const now = new Date();
      expiresAt = new Date(now.getTime() + expires_in * 1000);
    }

    await saveOAuthTokens(user.id, provider, access_token, refresh_token, expiresAt);

    // redirect
    return NextResponse.redirect(new URL("/connections", req.url));
  } catch (err: any) {
    console.error("[OAuth Callback] =>", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
</file_artifact>

<file path="src/app/api/oauth/start/route.ts">
// src/app/api/oauth/start/route.ts
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import { getOAuthConnection } from "@/app/(main)/(pages)/connections/_actions/oauth-connections";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const provider = url.searchParams.get("provider"); // e.g. "google-drive"
    const user = await currentUser();
    if (!user || !provider) {
      return NextResponse.redirect(new URL("/connections", req.url));
    }

    const conn = await getOAuthConnection(user.id, provider);
    if (!conn) {
      // Or show some error message, or redirect to a form to set clientId
      return NextResponse.redirect(new URL("/connections", req.url));
    }

    const googleAuthUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    googleAuthUrl.searchParams.set("client_id", conn.clientId);
    googleAuthUrl.searchParams.set("redirect_uri", conn.redirectUri);
    googleAuthUrl.searchParams.set("response_type", "code");
    googleAuthUrl.searchParams.set(
      "scope",
      process.env.NEXT_PUBLIC_GOOGLE_SCOPES || "https://www.googleapis.com/auth/drive"
    );
    googleAuthUrl.searchParams.set("access_type", "offline");
    googleAuthUrl.searchParams.set("prompt", "consent");

    // pass provider in the callback query param, e.g. /api/oauth/callback?provider=google-drive
    googleAuthUrl.searchParams.set("state", provider);
    // or do googleAuthUrl.searchParams.set("provider", provider);

    return NextResponse.redirect(googleAuthUrl.toString());
  } catch (err: any) {
    console.error("[OAuth Start] =>", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
</file_artifact>

<file path="src/app/api/my-oauth-map/route.ts">
// FILE: src/app/api/my-oauth-map/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ success: false, error: "Not logged in" }, { status: 401 });
    }
    const rows = await db.oAuthConnection.findMany({
      where: { userId },
    });
    const map: Record<string, boolean> = {};
    rows.forEach((r) => {
      map[r.provider] = true;
    });
    return NextResponse.json({ success: true, map });
  } catch (err: any) {
    console.error("[my-oauth-map] =>", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
</file_artifact>

<file path="src/app/(main)/layout.tsx">
import React from 'react'
import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/infobar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        <InfoBar />
        {/* This wrapper can scroll if content grows */}
        <div className="flex-1 overflow-auto">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout
</file_artifact>

<file path="src/app/(main)/(pages)/layout.tsx">
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-0 h-full rounded-l-3xl border-muted-foreground/20 overflow-scroll">
      {children}
    </div>
  )
}

export default Layout
</file_artifact>

<file path="src/app/(main)/(pages)/settings/_components/profile-picture.tsx">
'use client'
import React from 'react'
import UploadCareButton from './uploadcare-button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image
                src={userImage}
                alt="User_Image"
                fill
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  )
}

export default ProfilePicture
</file_artifact>

<file path="src/app/(main)/(pages)/settings/_components/uploadcare-button.tsx">
'use client'
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'

type Props = {
  onUpload: (e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }
    if (ctxProviderRef.current !== null) ctxProviderRef.current.addEventListener('file-upload-success', handleUpload)
  }, [])

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="b718a38a002c2e8d39ca"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  )
}

export default UploadCareButton
</file_artifact>

<file path="src/app/(main)/(pages)/settings/page.tsx">
import ProfileForm from '@/components/forms/profile-form'
import React from 'react'
import ProfilePicture from './_components/profile-picture'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'

type Props = {}

const Settings = async (props: Props) => {
  const authUser = await currentUser()
  if (!authUser) return null

  const user = await db.user.findUnique({ where: { clerkId: authUser.id } })
  const removeProfileImage = async () => {
    'use server'
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: '',
      },
    })
    return response
  }

  const uploadProfileImage = async (image: string) => {
    'use server'
    const id = authUser.id
    const response = await db.user.update({
      where: {
        clerkId: id,
      },
      data: {
        profileImage: image,
      },
    })

    return response
  }

  const updateUserInfo = async (name: string) => {
    'use server'

    const updateUser = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        name,
      },
    })
    return updateUser
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ''}
          onUpload={uploadProfileImage}
        />
        <ProfileForm
          user={user}
          onUpdate={updateUserInfo}
        />
      </div>
    </div>
  )
}

export default Settings
</file_artifact>

<file path="src/app/(main)/(pages)/dashboard/page.tsx">
import React from 'react'

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Dashboard
      </h1>
    </div>
  )
}

export default DashboardPage
</file_artifact>

<file path="src/app/(main)/(pages)/billing/_actions/payment-connections.tsx">
'use server'
import { currentUser } from '@clerk/nextjs';
import { db } from '@/lib/db';

export const onPaymentDetails = async () => {
    const user = await currentUser()

    if (user) {
        const connection = await db.user.findFirst({
            where: {
                clerkId: user.id,
            },
            select: {
                tier: true,
                credits: true,
            },
        })

        if (user) {
            return connection
        }
    }
}
</file_artifact>

<file path="src/app/(main)/(pages)/billing/_components/billing-dashboard.tsx">
'use client'

import { useBilling } from '@/providers/billing-provider'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SubscriptionCard } from './subscription-card'
import CreditTracker from './credits-tracker'

type Props = {}

const BillingDashboard = (props: Props) => {
  const { credits, tier } = useBilling()
  const [stripeProducts, setStripeProducts] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  const onStripeProducts = async () => {
    setLoading(true)
    const { data } = await axios.get('/api/payment')
    if (data) {
      setStripeProducts(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    onStripeProducts()
  }, [])

  const onPayment = async (id: string) => {
    const { data } = await axios.post(
      '/api/payment',
      {
        priceId: id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    window.location.assign(data)
  }

  return (
    <>
      {/* {loading ? (
        <div className="absolute flex h-full w-full items-center justify-center">
          <svg
            aria-hidden="true"
            className="inline h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : ( */}
        <>
          <div className="flex gap-5 p-6">
            <SubscriptionCard
              onPayment={onPayment}
              tier={tier}
              products={stripeProducts}
            />
          </div>
          <CreditTracker
            tier={tier}
            credits={parseInt(credits)}
          />
        </>
      {/* )} */}
    </>
  )
}

export default BillingDashboard
</file_artifact>

<file path="src/app/(main)/(pages)/billing/_components/credits-tracker.tsx">
import { Card } from '@/components/ui/card'
import { CardContent, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import React from 'react'

type Props = {
    credits: number
    tier: string
}

const CreditsTracker = ({ credits, tier }: Props) => {
    return (
        <div className="p-6">
            <Card className="p-6">
                <CardContent className="flex flex-col gap-6">
                    <CardTitle className="font-light">Credit Tracker</CardTitle>
                    <Progress 
                        value={
                            tier == 'Free'
                            ? credits * 10
                            : tier == 'Unlimited'
                            ? 100
                            : credits
                        }
                        className="w-full"
                    />
                    <div className="flex justify-end">
                        <p>
                            {credits}/
                            {tier == 'Free' ? '10' : tier == 'Unlimited' ? 'Unlimited' : '100'}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreditsTracker
</file_artifact>

<file path="src/app/(main)/(pages)/billing/_components/subscription-card.tsx">
'use client'

type Props = {
    onPayment(id: string): void
    products: any
    tier: string
}

import React from 'react'
import { 
    Card, 
    CardContent, 
    CardDescription,
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'

export const SubscriptionCard = ({ onPayment, products, tier }: Props) => {
    return (
        <section className="flex w-full justify-center md:flex-row flex-col gap-6">
            {products &&
            products.map((product: any) => (
                <Card 
                    className="p-3"
                    key={product.id}
                >
                    <CardHeader>
                        <CardTitle>{product.nickname}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">
                        <CardDescription>
                            {product.nickname == 'Unlimited'
                            ? 'Enjoy a monthly torrent of credits flooding your account, empowering you to tackle even the most ambitious automation tasks effortlessly.'
                            : product.nickname == 'Pro'
                            ? 'Experience a monthly surge of credits to supercharge your automation efforts. Ideal for small to medium-sized projects seeking consistent support.'
                            : product.nickname == 'Free' && 'Dip your toes into the world of automation with a small monthly allowance of credits. Perfect for small projects and personal use.'}
                        </CardDescription>
                        <div className="flex justify-between">
                            <p>
                                {product.nickname == 'Free'
                                ? '10'
                                : product.nickname == 'Pro'
                                ? '100'
                                : product.nickname == 'Unlimited' && 'Unlimited'}{' '}
                            credits
                            </p>
                            <p className="font-bold">
                                {product.nickname == 'Free'
                                ? 'Free'
                                : product.nickname == 'Pro'
                                ? '29.99'
                                : product.nickname == 'Unlimited' && '19.99'}
                              /mo
                            </p>
                        </div>
                        {product.nickname == tier ? (
                            <Button 
                                disabled
                                variant="outline"
                            >
                                Active
                            </Button>
                        ) : (
                            <Button 
                                onClick={() => onPayment(product.id)}
                                variant="outline"
                            >
                                Purchase
                            </Button>
                            )}
                    </CardContent>
                </Card>
            ))}
        </section>
    )
}
</file_artifact>

<file path="src/app/(main)/(pages)/billing/page.tsx">
import React from 'react'
import Stripe from 'stripe'
import { currentUser } from "@clerk/nextjs";
import { db } from '@/lib/db'
import BillingDashboard from './_components/billing-dashboard';

type Props = {
    searchParams?: { [key: string]: string | undefined }
}

const Billing = async (props: Props) => {
    const { session_id } = props.searchParams ?? {
        session_id: '',
    }
    if (session_id) {
        const stripe = new Stripe(process.env.STRIPE_SECRET!, {
            typescript: true,
            apiVersion: '2025-01-27.acacia',
        })

        const session = await stripe.checkout.sessions.listLineItems(session_id)
        const user = await currentUser()
        if (user) {
            await db.user.update({
                where: {
                    clerkId: user.id,
                },
                data: {
                    tier: session.data[0].description,
                    credits:
                        session.data[0].description == 'Unlimited'
                            ? 'Unlimited'
                            : session.data[0].description == 'Pro'
                            ? '100'
                            : '10',
                            
                },
            })
        }
    }
    return (
        <div className="flex flex-col gap-4">
            <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
                <span>Billing</span>
            </h1>
            <BillingDashboard />
        </div>
    )
}

export default Billing
</file_artifact>

<file path="src/app/(main)/(pages)/connections/page.tsx">
"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { CONNECTIONS } from "@/lib/constant";
import type { ConnectionTypes } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Old OAuth actions:
import {
  handleDisconnectConnectionAction,
  saveOAuthSettingsAction,
} from "./_actions/oauth-connections";

// Our new unified server actions:
import { getConnections } from "./_actions/get-connections";
import { addConnection } from "./_actions/add-connection";
import { deleteConnection } from "./_actions/delete-connection";

//
// Minimal “OAuthConnectionCard” for older OAuth-based items
//
function OAuthConnectionCard({
  type,
  title,
  icon,
  description,
  connected,
  userId,
  onDisconnect,
  onConfigure,
}: {
  type: ConnectionTypes;
  title: string;
  icon: string;
  description: string;
  connected: Record<string, boolean>;
  userId: string;
  onDisconnect: (t: ConnectionTypes) => void;
  onConfigure: (t: ConnectionTypes) => void;
}) {
  const [confirming, setConfirming] = useState(false);
  const isConnected = !!connected[type];

  const connectHref = `/api/oauth/start?provider=${title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  function handleDisconnect() {
    if (!confirming) {
      setConfirming(true);
      return;
    }
    onDisconnect(type);
    setConfirming(false);
  }

  return (
    <div className="border rounded p-3 flex items-center justify-between bg-card text-card-foreground">
      <div className="flex gap-3 items-center">
        <img src={icon} alt={title} width={30} height={30} />
        <div>
          <p className="text-md font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => onConfigure(type)}>
          Configure
        </Button>
        {!isConnected ? (
          <a
            href={connectHref}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground px-3 py-2 hover:bg-primary/90"
          >
            Connect
          </a>
        ) : (
          <Button variant="destructive" size="sm" onClick={handleDisconnect}>
            {confirming ? "Confirm?" : "Disconnect"}
          </Button>
        )}
      </div>
    </div>
  );
}

//
// Minimal “GenericConnectionCard” for the new unified system (AI, MCP, etc.)
//
function GenericConnectionCard({
  conn,
  onDelete,
}: {
  conn: any;
  onDelete: (id: string) => Promise<void>;
}) {
  const [confirming, setConfirming] = useState(false);

  async function handleDelete() {
    if (!confirming) {
      setConfirming(true);
      return;
    }
    await onDelete(conn.id);
  }

  const displayName = conn?.data?.name || conn.name || "(no name)";
  const isGitHub = conn.type === "mcp-github";

  return (
    <div className="border p-3 rounded flex items-center justify-between bg-card text-card-foreground">
      <div>
        <p className="font-semibold">
          {conn.type === "mcp-github" ? "GitHub (MCP)" : conn.type}
        </p>

        {/* Show “Repository URL” if mcp-github, otherwise normal "URL" */}
        {conn.url && (
          <p className="text-sm">
            {isGitHub ? "Repository URL" : "URL"}: {conn.url}
          </p>
        )}

        {displayName && (
          <p className="text-xs text-muted-foreground">Name: {displayName}</p>
        )}
      </div>
      <Button variant="destructive" size="sm" onClick={handleDelete}>
        {confirming ? "Confirm?" : "Delete"}
      </Button>
    </div>
  );
}

//
// The main Connections page
//
export default function ConnectionsPage() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const userId = user?.id || "";

  // Old OAuth-based “connected?” map
  const [connectionsOAuth, setConnectionsOAuth] = useState<Record<string, boolean>>({});
  // The new unified “connections” from the DB
  const [unifiedConns, setUnifiedConns] = useState<any[]>([]);

  // For the config (OAuth) modal:
  const [oauthModalOpen, setOauthModalOpen] = useState(false);
  const [oauthProvider, setOauthProvider] = useState<ConnectionTypes>("Google Drive");
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [redirectUri, setRedirectUri] = useState("");

  // For the “Add Connection” modal (unified):
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("openai"); // e.g. "mcp-github"
  const [connName, setConnName] = useState("");
  const [connUrl, setConnUrl] = useState("");
  const [connApiKey, setConnApiKey] = useState("");

  //
  // Load data on mount
  //
  useEffect(() => {
    if (!isLoaded || !isSignedIn || !userId) return;

    (async () => {
      // 1) Load your old OAuth map
      const res = await fetch("/api/my-oauth-map");
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          const updated: Record<string, boolean> = {};
          if (data.map["google-drive"]) updated["Google Drive"] = true;
          if (data.map["google-calendar"]) updated["Google Calendar"] = true;
          if (data.map["gmail"]) updated["Gmail"] = true;
          if (data.map["youtube"]) updated["YouTube"] = true;
          setConnectionsOAuth(updated);
        }
      }

      // 2) Load the new unified connections
      const connRes = await getConnections();
      if (connRes.success) {
        setUnifiedConns(connRes.connections || []);
      }
    })();
  }, [isLoaded, isSignedIn, userId]);

  //
  // Old OAuth handling
  //
  function onConfigure(type: ConnectionTypes) {
    setOauthProvider(type);
    setClientId("");
    setClientSecret("");
    setRedirectUri("");
    setOauthModalOpen(true);
  }

  async function onDisconnectOAuth(type: ConnectionTypes) {
    const result = await handleDisconnectConnectionAction(userId, type);
    if (!result?.success) {
      console.error("Failed to disconnect =>", result?.error);
      return;
    }
    setConnectionsOAuth((prev) => {
      const copy = { ...prev };
      copy[type] = false;
      return copy;
    });
    router.refresh();
  }

  async function onSaveOAuthSettings() {
    const slug = oauthProvider.toLowerCase().replace(/\s+/g, "-");
    const resp = await saveOAuthSettingsAction(slug, clientId, clientSecret, redirectUri);
    if (!resp.success) {
      alert("Failed to save: " + resp.error);
      return;
    }
    alert("Saved OAuth settings!");
    setOauthModalOpen(false);
    router.refresh();
  }

  //
  // Unified connections (AI, MCP, etc.)
  //
  async function reloadUnifiedConnections() {
    const connRes = await getConnections();
    if (connRes.success) {
      setUnifiedConns(connRes.connections || []);
    }
  }

  async function handleDeleteUnifiedConnection(id: string) {
    const res = await deleteConnection(id);
    if (!res.success) {
      alert("Failed to delete: " + res.error);
      return;
    }
    await reloadUnifiedConnections();
  }

  async function handleAddConnSubmit() {
    const fd = new FormData();
    fd.set("type", selectedType);
    fd.set("name", connName);
    if (connUrl) fd.set("url", connUrl);
    if (connApiKey) fd.set("apiKey", connApiKey);

    const res = await addConnection(fd);
    if (!res.success) {
      alert("Failed to add connection: " + res.error);
      return;
    }
    setShowAddModal(false);
    setConnName("");
    setConnUrl("");
    setConnApiKey("");
    await reloadUnifiedConnections();
  }

  //
  // If not loaded
  //
  if (!isLoaded) {
    return <div className="p-4">Loading Clerk...</div>;
  }
  if (!isSignedIn) {
    return <div className="p-4">Please sign in to manage connections.</div>;
  }

  return (
    <div className="relative flex flex-col gap-4 pb-16">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/70 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>

      {/* OAuth-based connections */}
      <section className="flex flex-col gap-4 p-6 text-muted-foreground">
        <p>
          OAuth-based connections (Google Drive, GMail, etc.). If you see “Connected,”
          that means an OAuth row is stored in the DB for that provider.
        </p>
        {CONNECTIONS.filter((c) =>
          [
            "Google Drive",
            "Google Calendar",
            "Gmail",
            "YouTube",
            "Google Books",
            "Discord",
            "Notion",
            "Slack",
          ].includes(c.title)
        ).map((conn) => (
          <OAuthConnectionCard
            key={conn.title}
            type={conn.title as ConnectionTypes}
            title={conn.title}
            icon={conn.image}
            description={conn.description}
            connected={connectionsOAuth}
            userId={userId}
            onDisconnect={onDisconnectOAuth}
            onConfigure={onConfigure}
          />
        ))}
      </section>

      {/* Unified connections (AI, MCP, etc.) */}
      <section className="border-t pt-6 pb-20 px-6 text-muted-foreground">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Unified Connections</h2>
          <Button variant="outline" onClick={() => setShowAddModal(true)}>
            Add Connection
          </Button>
        </div>

        {unifiedConns.length < 1 && (
          <p className="text-sm text-gray-500">No connections yet.</p>
        )}
        <div className="flex flex-col gap-4 mt-4">
          {unifiedConns.map((c) => (
            <GenericConnectionCard
              key={c.id}
              conn={c}
              onDelete={handleDeleteUnifiedConnection}
            />
          ))}
        </div>
      </section>

      {/* OAuth Modal */}
      {oauthModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="rounded-md shadow-lg p-6 w-[400px] bg-popover text-popover-foreground">
            <h2 className="text-lg font-semibold mb-2">Configure {oauthProvider}</h2>
            <label className="block text-sm font-medium mt-2">Client ID</label>
            <input
              type="text"
              className="border w-full p-2 rounded text-sm bg-background text-foreground"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            />

            <label className="block text-sm font-medium mt-2">Client Secret</label>
            <input
              type="text"
              className="border w-full p-2 rounded text-sm bg-background text-foreground"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
            />

            <label className="block text-sm font-medium mt-2">Redirect URI</label>
            <input
              type="text"
              className="border w-full p-2 rounded text-sm bg-background text-foreground"
              value={redirectUri}
              onChange={(e) => setRedirectUri(e.target.value)}
            />

            <div className="flex items-center justify-end mt-4 gap-2">
              <Button variant="outline" onClick={() => setOauthModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={onSaveOAuthSettings}>Save</Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Connection Modal (Unified) */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="rounded-md shadow-lg p-6 w-[400px] bg-popover text-popover-foreground">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Add Connection</h2>
              <button
                className="text-sm underline"
                onClick={() => setShowAddModal(false)}
              >
                Close
              </button>
            </div>

            {/* Choose type */}
            <label className="text-sm font-medium mt-2">Type</label>
            <select
              className="border rounded p-2 w-full text-sm bg-background text-foreground"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="openai">OpenAI</option>
              <option value="anthropic">Anthropic</option>
              <option value="gemini">Gemini</option>
              <option value="groq">Groq</option>
              <option value="mcp-github">mcp-github</option>
              <option value="mcp-discord">mcp-discord</option>
              <option value="mcp-sql">mcp-sql</option>
              {/* Add more as needed */}
            </select>

            {/* Name */}
            <label className="text-sm font-medium mt-2">Name (friendly label)</label>
            <Input
              value={connName}
              onChange={(e) => setConnName(e.target.value)}
              placeholder='e.g. "My GitHub Repo" or "My OpenAI Key"'
            />

            {/* For MCP => Show a URL field (GitHub => "Repo URL") */}
            {selectedType.startsWith("mcp-") && (
              <>
                <label className="text-sm font-medium mt-2">
                  {selectedType === "mcp-github"
                    ? "Repository URL"
                    : "Server URL"}
                </label>
                <Input
                  value={connUrl}
                  onChange={(e) => setConnUrl(e.target.value)}
                  placeholder={
                    selectedType === "mcp-github"
                      ? "https://github.com/dgerabagi/Lineage-Squared-Server01"
                      : "http://127.0.0.1:3000"
                  }
                />
              </>
            )}

            {/* For AI => Show an API Key field (But also used as optional for MCP) */}
            <label className="text-sm font-medium mt-2">
              {selectedType === "mcp-github"
                ? "Personal Access Token (optional)"
                : "API Key (optional)"}
            </label>
            <Input
              value={connApiKey}
              onChange={(e) => setConnApiKey(e.target.value)}
              placeholder={
                selectedType === "mcp-github"
                  ? "e.g. ghp_4FmZ... (your personal access token)"
                  : "sk-..."
              }
            />

            <div className="flex items-center gap-2 mt-4 justify-end">
              <Button variant="outline" onClick={() => setShowAddModal(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddConnSubmit}>Add</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
</file_artifact>

<file path="src/app/(auth)/sign-in/[[...sign-in]]/page.tsx">
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <SignIn
      // Force Clerk to redirect to /dashboard after sign in
      afterSignInUrl="/dashboard"
      // Also possibly set an afterSignUpUrl if needed
      // afterSignUpUrl="/dashboard"
    />
  );
}
</file_artifact>

<file path="src/app/(auth)/sign-up/[[...sign-up]]/page.tsx">
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp />
}
</file_artifact>

<file path="src/app/(auth)/layout.tsx">
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      {children}
    </div>
  )
}

export default Layout
</file_artifact>

</file_artifact>

<file path="context/aiascentgame/flattened-repo.md">
<!--
  File: flattened_repo.md
  Source Directory: c:\Projects\ai-ascent
  Date Generated: 2025-10-10T22:14:24.476Z
  ---
  Total Files: 15
  Approx. Tokens: 17649
-->

<!-- Top 10 Text Files by Token Count -->
1. docs\A185. RDS - TTS Jumpstart Guide.md (1568 tokens)
2. docs\A183. RDS - Ask Ascentia Embedding Script.md (1533 tokens)
3. docs\A182. RDS - Data Model Refactor Plan.md (1510 tokens)
4. docs\A184. RDS - Audio Narration System Design.md (1507 tokens)
5. docs\A181. RDS - Missing Pages & Reorganization Plan.md (1429 tokens)
6. docs\A178.1 WebP Image Conversion Script.md (1414 tokens)
7. docs\A173. Report Delivery System (RDS) - Vision & UIUX Design.md (1389 tokens)
8. docs\A180. RDS - Ascentia Integration.md (1236 tokens)
9. docs\A177. RDS - Image Management & Voting System Backend Design.md (1129 tokens)
10. docs\A179. RDS - Image Generation System Prompt.md (1074 tokens)

<!-- Full File List -->
1. docs\A173. Report Delivery System (RDS) - Vision & UIUX Design.md - Lines: 82 - Chars: 5556 - Tokens: 1389
2. docs\A174. Report Delivery System (RDS) - Technical Architecture & Data Model.md - Lines: 81 - Chars: 3848 - Tokens: 962
3. docs\A175. Report Delivery System (RDS) - Implementation Plan.md - Lines: 45 - Chars: 3223 - Tokens: 806
4. docs\A176. Report Delivery System (RDS) - File Generation Script.md - Lines: 80 - Chars: 3441 - Tokens: 861
5. docs\A177. RDS - Image Management & Voting System Backend Design.md - Lines: 116 - Chars: 4513 - Tokens: 1129
6. docs\A178. RDS - Image Directory Generation Scripts.md - Lines: 46 - Chars: 2431 - Tokens: 608
7. docs\A178.1 WebP Image Conversion Script.md - Lines: 156 - Chars: 5656 - Tokens: 1414
8. docs\A179. RDS - Image Generation System Prompt.md - Lines: 34 - Chars: 4293 - Tokens: 1074
9. docs\A180. RDS - Ascentia Integration.md - Lines: 52 - Chars: 4941 - Tokens: 1236
10. docs\A181. RDS - Missing Pages & Reorganization Plan.md - Lines: 119 - Chars: 5713 - Tokens: 1429
11. docs\A182. RDS - Data Model Refactor Plan.md - Lines: 114 - Chars: 6040 - Tokens: 1510
12. docs\A183. RDS - Ask Ascentia Embedding Script.md - Lines: 158 - Chars: 6132 - Tokens: 1533
13. docs\A184. RDS - Audio Narration System Design.md - Lines: 72 - Chars: 6025 - Tokens: 1507
14. docs\A185. RDS - TTS Jumpstart Guide.md - Lines: 125 - Chars: 6272 - Tokens: 1568
15. docs\A186. RDS - Front Matter & User Guide Content.md - Lines: 26 - Chars: 2489 - Tokens: 623

<file path="docs/A173. Report Delivery System (RDS) - Vision & UIUX Design.md">
# Artifact 173: Report Delivery System (RDS) - Vision & UI/UX Design
# Updated on: C1333 (Change entry point to WelcomeModal, refine UI for two-level image nav.)

## 1. Vision & Strategic Purpose
- **Key/Value for A0:**
- **Description:** Outlines the vision, strategic purpose, and detailed UI/UX design for the Report Delivery System (RDS), an interactive, in-game platform for viewing "The Ascent Report."
- **Tags:** rds, report, ui, ux, design, solarpunk, citizen architect

The Report Delivery System (RDS) is an interactive, in-game platform designed to seamlessly integrate "The Ascent Report" into the `aiascent.game` experience. Its purpose is to create a powerful, self-reinforcing narrative loop where the game serves as the tangible **proof** of the "Citizen Architect" thesis, and the report provides the **theory** and strategic context.

By clicking "Learn More" on the game's welcome screen, players transition from an interactive simulation to an interactive exploration of the ideas that inspired it.

## 2. Core Design Principles

*   **Aesthetic Cohesion:** The RDS will adopt the visual language of AI Ascent—a clean, modern, slightly retro-futuristic UI with a solarpunk ethos. It should feel like a natural extension of the game world, not a separate website.
*   **Interactivity over Passivity:** The act of reading is transformed into an act of exploration. The user is given control to navigate content, explore visual interpretations, and participate through voting.
*   **Information Density, Bite-Sized Delivery:** Complex ideas are broken down into single-concept pages to be easily digestible, but the interactive elements allow for deep dives into related imagery and prompts.
*   **Full-Screen Immersion:** The RDS will be a full-screen modal experience, removing distractions and immersing the user in the content. It must be designed with mobile-friendliness as a primary consideration, using responsive layouts.

## 3. UI/UX Breakdown

### 3.1. Entry Point (Corrected)

*   A new "Learn More" button will be added to the footer of the `WelcomeModal.tsx`.
*   Clicking this button will trigger an action in `uiStore.ts` (`openReportViewer`) which will render the full-screen `ReportViewerModal.tsx` and close the welcome modal.

### 3.2. The Report Viewer Modal (`ReportViewerModal.tsx`)

This is the main component for the RDS. It will be a full-viewport modal with a dark, semi-transparent background, overlaying the game's world view.

**Layout (Refined for Two-Level Navigation):**
The layout will be a central content column, optimized for readability on both desktop and mobile.

```
+-----------------------------------------------------+
|                                    Close Button [X] |
|                                                     |
| [<]      SECTION/PAGE TITLE (e.g., Part I)      [>] |
|                                                     |
| +-------------------------------------------------+ |
| |                                                 | |
| |           MAIN IMAGE DISPLAY AREA               | |
| |                                                 | |
| +-------------------------------------------------+ |
|                                                     |
|           [<]   IMAGE PROMPT 1 of 2   [>]           |
|                                                     |
| [<]      IMAGE 1 of 4       [>]  [Vote (123)]       |
|                                                     |
| ------------------- TL;DR -----------------------   |
| A concise, one-sentence summary of the page's core  |
| idea goes here.                                     |
| -------------------------------------------------   |
|                                                     |
|           MAIN CONTENT AREA (Scrollable)            |
| The full text content for the current page goes     |
| here. This area will be vertically scrollable if    |
| the content exceeds the available space.            |
|                                                     |
+-----------------------------------------------------+
```

### 3.3. Interactive Component Behavior (Refined)

1.  **Close Button:** A standard `[X]` in the top-right corner to close the modal and return to the game.
2.  **Page Navigation (`[<] TITLE [>]`):**
    *   This is the primary navigation for the report's content.
    *   The arrows change the `currentPageIndex`.
    *   This updates the `TITLE`, `IMAGE DISPLAY`, `IMAGE PROMPT NAVIGATION`, `IMAGE NAVIGATION`, `TL;DR`, and `CONTENT` sections. It also resets the prompt and image indices to 0.
3.  **Image Prompt Navigation (`[<] IMAGE PROMPT [>]`):**
    *   Cycles through the different *prompts* associated with the current page.
    *   Updates the `currentImagePromptIndex`.
    *   **Crucially:** Changing the prompt resets the `Image Navigation` to the first image of the *new* prompt.
4.  **Image Navigation (`[<] IMAGE [>]`):**
    *   Cycles through all available images for the *currently selected image prompt*.
    *   Updates the `currentImageIndex`.
    *   This only changes the image in the display area.
5.  **Vote Button:**
    *   Displays the current vote count for the displayed image.
    *   Clicking it sends a request to a backend API to increment the vote count for that `imageId`.
    *   The button should provide visual feedback (e.g., changing color) to indicate the user has voted. Voting should be tied to a session or user account to prevent spamming.
</file_artifact>

<file path="docs/A174. Report Delivery System (RDS) - Technical Architecture & Data Model.md">
# Artifact 174: Report Delivery System (RDS) - Technical Architecture & Data Model
# Updated on: C1340 (Introduce short, unique IDs to solve path length limits.)
# Updated on: C1333 (Update entry point to WelcomeModal, refine JSON schema for nested prompts.)

## 1. Technical Architecture
- **Key/Value for A0:**
- **Description:** Details the technical architecture, proposed file structure, and data model for the Report Delivery System (RDS), including a JSON schema for parsing report content.
- **Tags:** rds, report, architecture, data model, json, file structure

The RDS will be built within the existing AI Ascent Next.js/React project to ensure consistency and leverage the current tech stack.

*   **Frontend:** React with TypeScript and Tailwind CSS.
*   **State Management:** The `uiStore.ts` will manage the `isReportViewerOpen` state. A new Zustand store, `src/state/reportStore.ts`, will manage the internal state of the viewer.
*   **Backend:** The existing Express server (`src/server.ts`) will be extended with new API endpoints to handle voting.
*   **Data Storage:**
    *   **Report Content:** The parsed report will be stored as a static JSON file in `public/data/reports/`.
    *   **Vote Counts:** A database table (`ReportImageVote`) will be added to the existing Prisma schema (see A177).

## 2. Data Model & Transformation (Refined for Short Paths)

The source markdown files will be transformed into a structured JSON file. **To solve the "Filename too long" error, we will no longer use sanitized titles for file paths.** Instead, we will use short, unique, and predictable IDs for sections and pages.

### Proposed JSON Schema (`TheAscentReport.json`)

```json
{
  "reportId": "the-ascent-report-v1",
  "reportTitle": "The Ascent Report: From Ghost Worker to Citizen Architect",
  "sections": [
    {
      "sectionId": "s01", // Short, unique ID for the section
      "sectionTitle": "Introduction: A New Vocabulary for a New Era",
      "pages": [
        {
          "pageId": "p01", // Short, unique ID for the page within the section
          "pageTitle": "Cognitive Capital",
          "tldr": "In the AI era, a nation's collective brainpower is its most valuable strategic asset.",
          "content": "The collective intellectual capacity, skill, and problem-solving potential...",
          "imagePrompts": [
            {
              "promptId": "prompt-1",
              "promptText": "A stylized, glowing human brain made of interconnected circuits...",
              "images": [
                { "imageId": "cc-p1-img-1", "url": "/images/report-assets/report-3/s01/p01/prompt-1/image-001.webp" },
                { "imageId": "cc-p1-img-2", "url": "/images/report-assets/report-3/s01/p01/prompt-1/image-002.webp" }
              ]
            },
            {
              "promptId": "prompt-2",
              "promptText": "An alternate take: a massive, ancient library...",
              "images": [
                { "imageId": "cc-p2-img-1", "url": "/images/report-assets/report-3/s01/p01/prompt-2/image-001.webp" }
              ]
            }
          ]
        }
      ]
    }
  ],
  "citations": []
}
```

## 3. Proposed File Structure

This structure remains conceptually the same, but the implementation will now rely on the short IDs from the JSON file for directory names.

```
public/
└── images/
    └── report-assets/
        └── [reportId]/  // e.g., report-1, report-2
            └── [sectionId]/ // e.g., s01, s02
                └── [pageId]/    // e.g., p01, p02
                    └── [promptId]/  // e.g., prompt-1
                        ├── image-001.webp
                        └── ...
```

This structure is short, predictable, and completely avoids filesystem path length limitations.
</file_artifact>

<file path="docs/A175. Report Delivery System (RDS) - Implementation Plan.md">
# Artifact 175: Report Delivery System (RDS) - Implementation Plan
# Updated on: C1333 (Update entry point to WelcomeModal.)

## 1. Overview
- **Key/Value for A0:**
- **Description:** Provides a phased implementation plan for building the Report Delivery System (RDS), from initial UI setup to the full implementation of interactive features.
- **Tags:** rds, report, plan, roadmap, implementation

This document outlines a phased development roadmap for implementing the RDS.

## 2. Phased Roadmap

### **Phase 1: Foundation & Static Viewer (MVP)**
*   **Goal:** Create the basic UI shell and render static report content.
*   **Tasks:**
    1.  **Setup:** Run the file generation script (A176) to create the necessary files and directories.
    2.  **Data:** Manually convert the first few sections of `3-longest.md` into the `TheAscentReport.json` format (A174) and place it in `public/data/reports/`.
    3.  **State:** Add `isReportViewerOpen`, `openReportViewer`, `closeReportViewer` to `src/state/uiStore.ts`.
    4.  **UI Integration:** Add a "Learn More" button to `src/components/menus/WelcomeModal.tsx` that calls `openReportViewer`.
    5.  **UI Root:** In `src/components/UIRoot.tsx`, conditionally render the new `<ReportViewerModal />` when `isReportViewerOpen` is true.
    6.  **Component:** Build the basic layout of `ReportViewerModal.tsx`. Fetch and display the title, TL;DR, and content of the *first page* of the JSON data.

### **Phase 2: Content Navigation**
*   **Goal:** Implement the page (title) navigation.
*   **Tasks:**
    1.  **State:** Add `currentPageIndex` state to the new `reportStore.ts` or `ReportViewerModal.tsx` local state.
    2.  **Component:** Create `PageNavigator.tsx`. Implement the left/right arrow buttons to increment/decrement `currentPageIndex`.
    3.  **Integration:** Pass the current page data from the JSON to the content display components based on `currentPageIndex`. Ensure all content areas update correctly when the page changes.

### **Phase 3: Image & Prompt Navigation**
*   **Goal:** Make the image and prompt sections fully interactive.
*   **Tasks:**
    1.  **State:** Add `currentImagePromptIndex` and `currentImageIndex` to the component's state.
    2.  **Component:** Create `ImageNavigator.tsx` and `PromptNavigator.tsx`.
    3.  **Logic:** Wire up the navigators to control their respective state indices. Ensure changing the prompt index resets the image index to 0.
    4.  **Display:** The main image display area should now dynamically show the image based on all three state indices (`page`, `prompt`, `image`).

### **Phase 4: Voting System**
*   **Goal:** Implement the backend and frontend for the image voting system.
*   **Tasks:**
    1.  **Database:** Implement the backend voting system as detailed in `A177`. Add the `ReportImageVote` table to `prisma/schema.prisma` and run a migration.
    2.  **Backend:** Create the API endpoint `src/pages/api/report/vote.ts`.
    3.  **Frontend:** In `ImageNavigator.tsx`, make the "Vote" button call this new API endpoint.
    4.  **Feedback:** On a successful API response, update the displayed vote count and provide visual feedback to the user.
</file_artifact>

<file path="docs/A176. Report Delivery System (RDS) - File Generation Script.md">
# Artifact 176: Report Delivery System (RDS) - File Generation Script
# Updated on: C1333 (Add creation of public image directories.)

## 1. Purpose
- **Key/Value for A0:**
- **Description:** A Node.js utility script to automatically create the directory and file structure needed for the Report Delivery System (RDS) feature, based on the architecture in A174.
- **Tags:** rds, report, script, utility, automation

This Node.js script reads the file structure defined in A174 and creates the necessary directories and empty placeholder files. This automates the setup process for the curator.

## 2. Script (`scripts/create_report_viewer_files.js`)

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..'); // Assuming script is in /scripts

const filesToCreate = [
    'src/components/menus/report/ReportViewerModal.tsx',
    'src/components/menus/report/PageNavigator.tsx',
    'src/components/menus/report/ImageNavigator.tsx',
    'src/components/menus/report/PromptNavigator.tsx',
    'src/pages/api/report/vote.ts',
    'public/data/reports/TheAscentReport.json',
    // Add .gitkeep files to ensure empty image directories are created and tracked by git
    'public/images/report-assets/introduction/cognitive-capital/prompt-1/.gitkeep',
    'public/images/report-assets/introduction/cognitive-capital/prompt-2/.gitkeep',
];

const placeholderContent = {
    '.tsx': `// Placeholder for a new React component\nimport React from 'react';\n\nconst NewComponent: React.FC = () => {\n  return <div>New Component</div>;\n};\n\nexport default NewComponent;\n`,
    '.ts': `// Placeholder for a new TypeScript file\n\nexport {};\n`,
    '.json': `{\n  "reportId": "the-ascent-report-v1",\n  "reportTitle": "The Ascent Report: From Ghost Worker to Citizen Architect",\n  "sections": []\n}\n`,
    '.gitkeep': '',
};

function createFileWithDirs(filePath) {
    const fullPath = path.join(projectRoot, filePath);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Created directory: ${dir}`);
    }

    if (!fs.existsSync(fullPath)) {
        const ext = path.extname(fullPath);
        const content = placeholderContent[ext] || '// New file created by script';
        fs.writeFileSync(fullPath, content);
        console.log(`Created file: ${fullPath}`);
    } else {
        console.log(`File already exists, skipped: ${fullPath}`);
    }
}

console.log('Starting Report Delivery System file structure creation...');

filesToCreate.forEach(file => {
    try {
        // Correct path for public folder which is at the root
        const correctedPath = file.startsWith('public/') ? path.join('..', file) : file;
        createFileWithDirs(correctedPath);
    } catch (error) {
        console.error(`Failed to create file or directory for: ${file}`, error);
    }
});

console.log('File structure creation complete.');

```

## 3. How to Use

1.  Save the code above as `scripts/create_report_viewer_files.js` in your project's `scripts` directory.
2.  Run the script from your project's root directory: `node scripts/create_report_viewer_files.js`.
3.  The script will create all necessary folders (including the public image directories) and placeholder files for the RDS feature.
</file_artifact>

<file path="docs/A177. RDS - Image Management & Voting System Backend Design.md">
# Artifact 177: Report Delivery System (RDS) - Image Management & Voting System Backend Design

- **Key/Value for A0:**
- **Description:** Details the proposed file system structure for managing report images and the backend design for the persistent image voting system, including the Prisma schema and API endpoint.
- **Tags:** rds, report, images, voting, backend, api, prisma

## 1. Purpose

This document provides a detailed plan for managing the image assets for the RDS and for implementing the backend of the image voting system. It formalizes the user's suggestion for a folder-based tagging system and outlines the necessary database and API changes.

## 2. Image File Management

To automate the association of images with specific report pages and prompts, a strict folder structure will be used within the `public` directory. A script can then parse this structure to help generate the `TheAscentReport.json` file.

### 2.1. Proposed Folder Structure

All images for the RDS will live under a new root directory: `public/images/report-assets/`.

```
public/
└── images/
    └── report-assets/
        └── [sectionId]/
            └── [pageId]/
                └── [promptId]/
                    ├── image-001.webp
                    ├── image-002.webp
                    └── ...
```

*   **`[sectionId]`:** A sanitized version of the section title (e.g., `introduction`, `part-1`).
*   **`[pageId]`:** A sanitized version of the page title (e.g., `cognitive-capital`).
*   **`[promptId]`:** A simple identifier for the prompt (e.g., `prompt-1`, `prompt-2`).
*   **Image Files:** Sequentially numbered images for that prompt.

**Example:**
The second image for the first prompt on the "Cognitive Capital" page in the Introduction would be located at:
`public/images/report-assets/introduction/cognitive-capital/prompt-1/image-002.webp`

This structure makes the image URLs predictable and directly maps the file system to the data model in `A174`.

## 3. Voting System Backend

The voting system requires a persistent backend to store and retrieve vote counts.

### 3.1. Database Schema (`prisma/schema.prisma`)

A new table will be added to the Prisma schema to track votes. The `imageId` will be a unique string derived from the file path to avoid conflicts.

```prisma
// Add this new model to your schema.prisma file

model ReportImageVote {
  id        String   @id @default(cuid())
  imageId   String   @unique // e.g., "cc-p1-img-1" from the JSON data model
  voteCount Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

After adding this, run `npx prisma migrate dev --name add_report_image_votes` to update the database.

### 3.2. API Endpoint (`src/pages/api/report/vote.ts`)

This endpoint will handle incoming vote requests. It will be a simple `POST` request that finds the image record by its ID (or creates it if it's the first vote) and atomically increments the vote count.

```typescript
// src/pages/api/report/vote.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { logError, logInfo } from '../../../logger';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { imageId } = req.body;

  if (!imageId || typeof imageId !== 'string') {
    return res.status(400).json({ message: 'A valid imageId is required.' });
  }

  try {
    // Use upsert to handle both creation and incrementing atomically
    const updatedVote = await prisma.reportImageVote.upsert({
      where: { imageId: imageId },
      update: {
        voteCount: {
          increment: 1,
        },
      },
      create: {
        imageId: imageId,
        voteCount: 1,
      },
    });

    logInfo('[API:ReportVote]', `Vote recorded for imageId: ${imageId}. New count: ${updatedVote.voteCount}`);
    return res.status(200).json({ imageId: updatedVote.imageId, newVoteCount: updatedVote.voteCount });

  } catch (error) {
    logError("[API:ReportVote]", `Error recording vote for imageId ${imageId}:`, error);
    return res.status(500).json({ message: 'Error recording vote.' });
  }
}
```

This backend design provides a simple, robust, and scalable way to handle the image voting feature.
</file_artifact>

<file path="docs/A178. RDS - Image Directory Generation Scripts.md">
# Artifact 178: Report Delivery System (RDS) - Image Directory Generation Scripts
# Updated on: C1358 (Add new validation script to check for missing images and list existing ones.)
# Updated on: C1341 (Replaced all previous scripts with a single, manual script for Report 3 that also generates a prompt.md file in each directory for easy validation.)

## 1. Purpose

This artifact contains utility scripts for managing the directory structure for "The Ascent Report" images under `public/images/report-assets/`.

The primary script (`generate_image_dirs_3_with_prompts.js`) is a manually generated, hardcoded script to create the entire folder structure for **Report 3**. This ensures a reliable and complete hierarchy. It also creates a `prompt.md` file in each directory containing the full image prompt, allowing for easy validation.

The secondary script (`validate_image_paths.js`) is a utility to help align image URLs in the report data with the actual files on the filesystem.

## 2. Usage

### 2.1. Directory Generation (Report 3)

1.  Ensure the `public/images/report-assets` directory exists.
2.  Save the generation script as `scripts/generate_image_dirs_3_with_prompts.js`.
3.  Run from the project root: `node scripts/generate_image_dirs_3_with_prompts.js`.
4.  The script will create all folders for Report 3 and add a `.gitkeep` and `prompt.md` file to each.

### 2.2. Image Path Validation

1.  Ensure your images have been placed in the `public/images/report-assets/` directory structure.
2.  Save the validation script as `scripts/validate_image_paths.js`.
3.  Run from the project root: `node scripts/validate_image_paths.js`.
4.  The script will output two lists to the console:
    *   A list of all image file paths it found.
    *   A list of any directories that contain a `prompt.md` but are missing images.
5.  Use these lists to manually update `TheAscentReport.json` or to identify which image prompts still need images generated.

---
## 3. Script for Report 3: `scripts/generate_image_dirs_3_with_prompts.js`

```javascript
// C:\Projects\ai-ascent\scripts\generate_image_dirs_3_with_prompts.js
// (Full script content is located in the project's file system.)
```

---
## 4. Script for Validation: `scripts/validate_image_paths.js`

```javascript
// C:\Projects\ai-ascent\scripts\validate_image_paths.js
// (See artifact output for the full script.)
```
</file_artifact>

<file path="docs/A178.1 WebP Image Conversion Script.md">
# Artifact A183: WebP Image Conversion Script

- **Key/Value for A0:**
- **Description:** A Node.js script to convert all PNG images in the report assets directory to the more efficient WebP format, addressing repository size issues.
- **Tags:** rds, report, script, utility, automation, images, webp, compression

## 1. Purpose

This artifact contains a Node.js script to programmatically find all `.png` images within the `public/images/report-assets/` directory, convert them to the high-quality, efficient `.webp` format, and then delete the original PNG files. This is a critical utility for managing the size of the project's repository, especially with a large number of high-resolution report images.

## 2. Dependencies

This script requires the `sharp` library for image processing. It must be installed as a development dependency:
```bash
npm install --save-dev sharp
```

## 3. Script (`scripts/convert_images_to_webp.js`)

```javascript
#!/usr/bin/env node

/**
 * convert_images_to_webp.js
 *
 * This script recursively finds all .png files in the specified directory,
 * converts them to high-quality .webp files using the 'sharp' library,
 * and then deletes the original .png files.
 *
 * This is intended to significantly reduce the repository size.
 *
 * Usage:
 * 1. Install sharp: `npm install --save-dev sharp`
 * 2. Run from the project root: `node scripts/convert_images_to_webp.js`
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const TARGET_DIRECTORY = path.resolve(__dirname, '..', 'public/images/report-assets');

async function findPngFiles(dir) {
    let results = [];
    const list = await fs.readdir(dir);
    for (const file of list) {
        const filePath = path.resolve(dir, file);
        const stat = await fs.stat(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(await findPngFiles(filePath));
        } else if (path.extname(filePath).toLowerCase() === '.png') {
            results.push(filePath);
        }
    }
    return results;
}

async function convertImageToWebP(filePath) {
    const logPrefix = `[CONVERT:${path.basename(filePath)}]`;
    try {
        const webpPath = filePath.replace(/\.png$/i, '.webp');
        
        console.log(`${logPrefix} Converting to WebP...`);

        // Use sharp for high-quality conversion
        await sharp(filePath)
            .webp({ 
                quality: 90, // High quality, visually lossless for most cases
                lossless: false, // Use lossy for better compression on photographic images
                effort: 6, // Max effort for best compression
            })
            .toFile(webpPath);
        
        const originalStats = await fs.stat(filePath);
        const newStats = await fs.stat(webpPath);
        const reduction = ((originalStats.size - newStats.size) / originalStats.size) * 100;

        console.log(`${logPrefix} SUCCESS! New file: ${path.basename(webpPath)}`);
        console.log(`${logPrefix}   Original: ${(originalStats.size / 1024).toFixed(2)} KB`);
        console.log(`${logPrefix}   WebP:     ${(newStats.size / 1024).toFixed(2)} KB`);
        console.log(`${logPrefix}   Reduction: ${reduction.toFixed(2)}%`);

        // Delete the original PNG file
        await fs.unlink(filePath);
        console.log(`${logPrefix} Deleted original PNG file.`);

        return { success: true, reduction: originalStats.size - newStats.size };
    } catch (error) {
        console.error(`${logPrefix} FAILED to convert image.`, error);
        return { success: false, reduction: 0 };
    }
}

async function main() {
    console.log(`Starting WebP conversion process in: ${TARGET_DIRECTORY}\n`);

    const pngFiles = await findPngFiles(TARGET_DIRECTORY);

    if (pngFiles.length === 0) {
        console.log('No .png files found to convert. Exiting.');
        return;
    }

    console.log(`Found ${pngFiles.length} PNG files to process.\n`);

    let successCount = 0;
    let totalReductionBytes = 0;

    for (const file of pngFiles) {
        const result = await convertImageToWebP(file);
        if (result.success) {
            successCount++;
            totalReductionBytes += result.reduction;
        }
        console.log('---');
    }

    console.log('\nConversion process finished!');
    console.log(`Successfully converted ${successCount} of ${pngFiles.length} files.`);
    console.log(`Total size reduction: ${(totalReductionBytes / (1024 * 1024)).toFixed(2)} MB`);
    console.log('\nIMPORTANT: Remember to update `imageManifest.json` to use ".webp" extensions!');
}

main().catch(console.error);

```

## 4. Associated Script Update (`scripts/convertReportData.js`)

To ensure the newly converted images are used, the `convertReportData.js` script must be updated to expect `.webp` files.

```javascript
// scripts/convertReportData.js

// ... (top of file) ...

// Change this line:
const imageFiles = files.filter(f => f.toLowerCase().endsWith('.png'));

// To this:
const imageFiles = files.filter(f => f.toLowerCase().endsWith('.webp'));

// And this line:
if (imageCount > 0) {
    // ...
    const fileExtension = path.extname(imageFiles[0]);
    // ...
} else {
    // Change this line:
    console.warn(`[WARNING] No .png files found in directory for prompt: ${fullFilesystemPath}`);
    // To this:
    console.warn(`[WARNING] No .webp files found in directory for prompt: ${fullFilesystemPath}`);
}

// ... (rest of file) ...
```
</file_artifact>

<file path="docs/A179. RDS - Image Generation System Prompt.md">
# Artifact 179: RDS - Image Generation System Prompt

- **Key/Value for A0:**
- **Description:** A comprehensive system prompt designed to guide a multimodal AI (like Gemini) in generating a thematically and stylistically coherent set of images for "The Ascent Report."
- **Tags:** rds, report, images, prompt engineering, gemini, ai art, solarpunk, cyberpunk

## 1. Purpose

This document provides a master system prompt to be used alongside the `TheAscentReport.json` data file for generating a complete and coherent set of images for the Report Delivery System. Its goal is to establish a consistent aesthetic and a deep thematic understanding for the image generation AI, ensuring that every image contributes to the report's overarching narrative.

## 2. The System Prompt

**Master System Prompt: The Citizen Architect's Lens**

You are an expert art director and visual futurist with a deep understanding of speculative design, political economy, and technological aesthetics. Your task is to generate a series of hyper-realistic, cinematic, and thematically rich images for a serious strategic report titled "The Ascent Report: From Ghost Worker to Citizen Architect."

**Your Core Directives:**

1.  **Adhere to the Master Aesthetic:** Your guiding aesthetic is a journey from a **near-future, grounded, early-cyberpunk reality** to a **hopeful, achievable, solarpunk future**.
    *   **Early-Cyberpunk (Report Introduction & Part I-II):** Depict a world that feels like our own, but with the subtle encroachments of technological alienation and corporate power. Think grounded, realistic scenes with advanced but slightly gritty technology. The lighting should be realistic, often interior or overcast, reflecting the serious tone of the report's diagnosis of our current problems. Avoid overt neon-drenched dystopias. This is about the subtle anxieties of the modern digital workplace.
    *   **Solarpunk (Report Part IV-V & Conclusion):** Depict a future that is bright, optimistic, sustainable, and community-focused. Technology is seamlessly and beautifully integrated with nature. Architecture is green, featuring vertical gardens, clean energy sources, and community spaces. The lighting is often natural, warm, and hopeful. This is not a sterile utopia, but a vibrant, lived-in world where humanity and technology coexist in harmony.

2.  **Embrace the Dual-Purpose Mandate:** Every image you create has a dual purpose. You must fulfill both with equal dedication.
    *   **Purpose 1: Portray the Specific Content.** You will be given a specific `<Image Prompt>` from the report's JSON file. Your image must accurately and creatively depict the core subject of that prompt.
    *   **Purpose 2: Carry the Thematic Narrative.** The background is not a void; it is your canvas for storytelling. For every image, even simple ones like charts or diagrams, you must use the background and environmental details to reinforce the report's overarching theme.
        *   **The "Empty Canvas" Principle:** If a prompt describes a simple object (e.g., "a chart showing data"), do not place it on a blank background. Instead, place that chart on a holographic screen in a relevant environment. Is the chart about the "Fissured Workplace"? Show it in a dark, oppressive corporate boardroom. Is it about "Universal Basic Access"? Show it on a public terminal in a bright, solarpunk community center. Use the environment to tell the story that the foreground object cannot.

3.  **Maintain Hyper-Realism and Cinematic Quality:**
    *   **Photography Style:** All images should look like high-resolution, professionally shot photographs. Use realistic lighting, depth of field, and photorealistic textures.
    *   **Cinematic Framing:** Employ cinematic composition techniques. Use wide shots to establish environments, medium shots for interactions, and detailed close-ups for symbolic objects. The aspect ratio should be 16:9.

**Your Workflow:**

I will provide you with the full `TheAscentReport.json` file. You will then process it sequentially, one `<Image Prompt>` at a time, to generate the corresponding image. For each prompt, you will apply the Master Aesthetic and the Dual-Purpose Mandate to create a single, powerful, and story-rich image.
</file_artifact>

<file path="docs/A180. RDS - Ascentia Integration.md">
# Artifact 180: RDS - Ascentia Integration
# Updated on: C1356 (Update context payload to include the full text of the current page for more accurate RAG.)
# Updated on: C1344 (Reflect full implementation of report-specific RAG system.)

- **Key/Value for A0:**
- **Description:** Details the design, purpose, and functionality of the `@Ascentia` chat panel within the Report Delivery System (RDS).
- **Tags:** rds, report, ascentia, chatbot, rag, ui, ux

## 1. Purpose

This document describes the integration of the `@Ascentia` AI assistant into the Report Delivery System (RDS). Within the RDS, Ascentia's role shifts from a general game guide to a specialized document expert, allowing players to "chat with the report." This feature deepens engagement by transforming the passive act of reading into an interactive dialogue, enabling users to ask clarifying questions, explore related concepts, and gain a deeper understanding of the report's content.

## 2. User Experience Flow

1.  **Activation:** While viewing any page in the `ReportViewerModal`, the user can click the "Ask @Ascentia" button in the `ImageNavigator`.
2.  **Panel Appearance:** This action toggles the visibility of the `ReportChatPanel`, a dedicated chat interface that slides into view from the right side of the modal.
3.  **Contextual Prompt:** The chat panel opens with a default prompt related to the current page, such as "Ask me anything about '[Page Title]'."
4.  **Interaction:** The user can type questions into the input field.
5.  **Response Generation:** When a question is submitted, it is sent to a dedicated backend handler. This handler uses a Retrieval-Augmented Generation (RAG) system, leveraging a knowledge base built exclusively from the full text of "The Ascent Report" to generate a relevant and contextually accurate answer.
6.  **Display:** Ascentia's response is streamed back into the chat panel, providing a real-time, conversational experience.

## 2.5. Context Payload (C1356 Update)

To ensure Ascentia provides the most relevant answers possible, the frontend will pass a comprehensive context payload to the backend with every user query. This payload gives the LLM a complete picture of what the user is currently viewing.

The `pageContext` string sent to the server will contain:
1.  **Page Title:** The header of the current page.
2.  **Image Prompt:** The full text of the image prompt for the current page.
3.  **TL;DR:** The "Too Long; Didn't Read" summary for the page.
4.  **Content:** The full markdown content of the page.
5.  **(Backend-side) Relevant KB Chunks:** The backend RAG system will still perform a semantic search on the user's query to find other relevant chunks from the *entire* report, which will be appended to the prompt alongside the `pageContext`.

This combined context ensures the LLM has both the immediate on-screen information and broader report-wide context to form the best possible answer.

## 3. Technical Implementation (As of C1344)

*   **UI Components:**
    *   **`ImageNavigator.tsx`:** Contains the "Ask @Ascentia" button, which calls the `toggleChatPanel` action in the `reportStore`.
    *   **`ReportChatPanel.tsx`:** A fully functional chat interface that manages its own state for conversation history and user input. It emits a new socket event (`'start_report_ascentia_stream'`) with the user's query **and the full `pageContext` string.**
    *   **`ReportViewerModal.tsx`:** Conditionally renders the `ReportChatPanel` based on the `isChatPanelOpen` state from the `reportStore`.
*   **State Management (`reportStore.ts`):**
    *   `isChatPanelOpen: boolean`: A boolean to control the visibility of the chat panel.
    *   `toggleChatPanel()`: An action that flips the `isChatPanelOpen` state.
*   **Backend Knowledge Base:**
    *   A separate FAISS index and chunk map (`report_faiss.index`, `report_chunks.json`) are created by parsing `TheAscentReport.json`. This ensures Ascentia's knowledge is strictly limited to the report's content.
    *   This knowledge base is loaded into memory on server startup by a new function, `loadReportKnowledgeBase`, in `ascentiaHandler.ts`.
*   **API Endpoint (Socket.IO):**
    *   The `server.ts` file now listens for a new event: `'start_report_ascentia_stream'`.
    *   This event is handled by a new function, `handleReportAscentiaStream`, located in `src/server/api/ascentiaHandler.ts`.
    *   This handler performs a semantic search against the *report's* FAISS index, **receives the `pageContext` from the client,** constructs a prompt with all retrieved context, and streams a response from the LLM back to the client on dedicated `report_ascentia_stream_chunk` and `report_ascentia_stream_end` events.

This design provides a focused, powerful, and interactive way for users to engage with the report's content, adding a significant layer of value and depth to the RDS.
</file_artifact>

<file path="docs/A181. RDS - Missing Pages & Reorganization Plan.md">
# Artifact 181: RDS - Missing Pages & Reorganization Plan

- **Key/Value for A0:**
- **Description:** A plan to address content structure issues in "The Ascent Report," including adding missing pages and reorganizing the JSON data to support a nested navigation tree.
- **Tags:** rds, report, plan, content, json, data model, reorganization

## 1. Purpose

This document outlines the necessary content additions and data structure modifications for "The Ascent Report" to improve its narrative flow and user navigation within the Report Delivery System (RDS). It addresses two key criticisms from Cycle 1360:
1.  The report begins abruptly without proper introductions.
2.  The `ReportTreeNav` component does not reflect the report's true hierarchical structure (subsections).

## 2. Content Additions: Missing Pages

The following pages need to be created by the curator and added to `TheAscentReport.json`. This will create a more gradual and understandable entry into the report's content.

### 2.1. Cover & Introductory Pages

*   **Page 1: Report Cover Page**
    *   **Title:** The Ascent Report: From Ghost Worker to Citizen Architect
    *   **Content:** A brief, compelling one-paragraph summary of the report's purpose.
*   **Page 2: Introduction Section Cover**
    *   **Title:** Introduction: A New Vocabulary for a New Era
    *   **Content:** A primer explaining that the following pages will define key terms essential for understanding the report's arguments.
*   **Page 3: Part I Cover**
    *   **Title:** Part I: The Proof is the Product
    *   **Content:** An introduction explaining that this section connects the `aiascent.game` artifact to the report's core thesis.
*   **Page 4: Part II Cover**
    *   **Title:** Part II: The Brittle Foundation
    *   **Content:** An introduction explaining that this section will deconstruct the flawed labor model of the Western AI industry.
*   **Page 5: Part III Cover**
    *   **Title:** Part III: The Pacing Threat
    *   **Content:** An introduction explaining that this section provides a net assessment of China's coherent AI human capital strategy.
*   **Page 6: Part IV Cover**
    *   **Title:** Part IV: The Unseen Battlefield
    *   **Content:** An introduction explaining that this section reframes the AI supply chain as a critical national security domain (COGSEC).
*   **Page 7: Part V Cover**
    *   **Title:** Part V: The American Counter-Strategy
    *   **Content:** An introduction explaining that this section outlines a hopeful, uniquely American solution to the problems identified.

### 2.2. Missing Narrative Pages (Identified from Image Directories)

The following 31 topics were identified as missing from the current `TheAscentReport.json` but were part of the original report variations. They should be written and integrated into the appropriate sections to flesh out the narrative.

1.  **Part I:** One Million Tokens of Proof
2.  **Part I:** The First Artifact of the Citizen Architect
3.  **Part I:** The Human-AI Partnership
4.  **Part II:** Courting Disaster
5.  **Part II:** The Negative Feedback Loop
6.  **Part II:** An Assault on the Mind
7.  **Part II:** The Race to the Bottom
8.  **Part III:** An Unsustainable Superpower
9.  **Part III:** Net Assessment: US vs. China AI Human Capital Models
10. **Part III:** Short-Term Profit vs. Long-Term Power
11. **Part III:** The Tipping Point
12. **Part III:** Data Annotation as Poverty Alleviation
13. **Part III:** Insulating the Supply Chain
14. **Part III:** A National Talent Pipeline
15. **Part III:** The Professionalized AI Trainer
16. **Part III:** Fusion in Practice: DeepSeek
17. **Part III:** Intelligentized Warfare
18. **Part III:** MCF in Practice: The National Champions
19. **Part III:** The PLA's AI Shopping List
20. **Part III:** A Methodical, Long-Term Strategy
21. **Part IV:** Weaponized Human Exploitation
22. **Part IV:** A Security Nightmare
23. **Part IV:** The Human in the Loophole
24. **Part V:** Core Methods of Cognitive Apprenticeship
25. **Part V:** The Goal: The 100x Analyst
26. **Part V:** The Appreciating AI Credit vs. Depreciating UBI Cash
27. **Part V:** NSAC Structure and Operations
28. **Part V:** Creating the DCIA Cadre
29. **Part V:** Guardians of the Ground Truth
30. **Part V:** The Tip of the Spear
31. **Part V:** A Valuable Career Path

## 3. Data Structure Reorganization

The current `TheAscentReport.json` has a flat structure where all pages are in a single array within each section. To enable a nested navigator, the JSON schema and file must be updated.

### 3.1. Proposed `sections` Schema Update

The `sections` array in `TheAscentReport.json` should be modified to support a nested `subSections` array.

**Current (Flat) Structure:**
```json
"sections": [
  {
    "sectionId": "part-i-the-proof",
    "sectionTitle": "Part I: The Proof...",
    "pages": [ ... all pages for Part I ... ]
  }
]
```

**Proposed (Nested) Structure:**
```json
"sections": [
  {
    "sectionId": "part-i-the-proof",
    "sectionTitle": "Part I: The Proof...",
    "subSections": [
      {
        "subSectionId": "section-1-the-hook",
        "subSectionTitle": "Section 1: The Hook",
        "pages": [ ... pages for The Hook ... ]
      },
      {
        "subSectionId": "section-2-the-origin",
        "subSectionTitle": "Section 2: The Origin Story",
        "pages": [ ... pages for The Origin Story ... ]
      }
    ]
  }
]
```

This change will require a one-time manual refactoring of `TheAscentReport.json` by the curator, followed by updates to the data loading logic in `reportStore.ts`.
</file_artifact>

<file path="docs/A182. RDS - Data Model Refactor Plan.md">
# Artifact 182: RDS - Data Model Refactor Plan
# Updated on: C1365 (Final refinement: Abstract image file names into a base name and count to eliminate all data redundancy.)
# Updated on: C1362 (Incorporate a more efficient, two-level path abstraction for the image manifest to further reduce data redundancy.)
# Updated on: C1361 (Initial creation of the refactor plan.)

- **Key/Value for A0:**
- **Description:** A comprehensive plan to refactor the data model for "The Ascent Report," separating the monolithic JSON file into distinct content and image manifest files to improve scalability and maintainability.
- **Tags:** rds, report, plan, refactor, json, data model, architecture

## 1. Purpose & Problem Statement

The current implementation of the Report Delivery System (RDS) relies on a single, monolithic JSON file: `TheAscentReport.json`. This approach has revealed several critical issues:

*   **Cumbersome Maintenance:** A single large file is difficult to navigate and edit manually.
*   **Massive Data Redundancy:** Storing the full URL and the full prompt text for every single image is extremely inefficient. For a page with 15 images generated from the same prompt, the long directory path and the long prompt text are repeated 15 times, leading to a bloated file size.
*   **Lack of Scalability:** Adding new reports or metadata makes the file even more unwieldy.

This document outlines a plan to refactor the RDS data model into a highly efficient, scalable, and maintainable structure that eliminates all data redundancy.

## 2. Proposed Data Model: Content & Manifest (Final Version)

The refactor splits the single JSON file into two distinct, purpose-built files:

1.  **`reportContent.json`:** The source of truth for all narrative and textual content.
2.  **`imageManifest.json`:** The source of truth for all image metadata, paths, and prompts.

### 2.1. `reportContent.json` Schema

This file contains the report's structure. Pages now reference an array of `imageGroupId`s, which are pointers to the new manifest. This makes the content file extremely lean.

```json
{
  "reportId": "the-ascent-report-v2",
  "reportTitle": "The Ascent Report: From Ghost Worker to Citizen Architect",
  "sections": [
    {
      "sectionId": "part-i-the-proof",
      "sectionTitle": "Part I: The Proof...",
      "pages": [
        {
          "pageId": "a-revolutionary-leap",
          "pageTitle": "A Revolutionary Leap",
          "tldr": "...",
          "content": "...",
          "imageGroupIds": [
            "group_a-revolutionary-leap_prompt-1"
          ]
        }
      ]
    }
  ]
}
```

### 2.2. `imageManifest.json` Schema (Final C1365 Refinement)

This file is the central registry for all images, redesigned for maximum efficiency. It eliminates all redundancy by storing each unique prompt only once and representing a sequence of images by a base name and a count.

```json
{
  "manifestId": "ascent-report-images-v3",
  "basePath": "/images/report-assets/report-3/",
  "imageGroups": {
    "group_a-revolutionary-leap_prompt-1": {
      "path": "part-i-the-proof/section-1-the-hook/a-revolutionary-leap/prompt-1/",
      "prompt": "An infographic-style blueprint of the aiascent.game architecture...",
      "alt": "Blueprint of the aiascent.game architecture.",
      "baseFileName": "a-revolutionary-leap-p1-img-",
      "fileExtension": ".png",
      "imageCount": 15
    },
    "group_cognitive-capital_prompt-1": {
      "path": "introduction/cognitive-capital/prompt-1/",
      "prompt": "A stylized, glowing human brain made of interconnected circuits...",
      "alt": "Image for Cognitive Capital",
      "baseFileName": "cognitive-capital-p1-img-",
      "fileExtension": ".png",
      "imageCount": 15
    }
  }
}
```

## 3. Implementation Plan

### **Phase 1: Data Conversion (Automated)**

*   **Task:** Create a new one-off Node.js script: `scripts/convertReportData.js`.
*   **Functionality (Final C1365):**
    1.  Read the existing `TheAscentReport.json`.
    2.  Iterate through its structure, identifying unique prompts to create `imageGroups`.
    3.  For each group, the script will **read the corresponding directory on the filesystem** (e.g., `public/images/report-assets/report-3/part-i.../prompt-1/`).
    4.  It will **count the number of `.png` files** in that directory to determine the `imageCount`.
    5.  It will intelligently parse the filenames to derive the `baseFileName` (the common prefix) and `fileExtension`.
    6.  Generate `reportContent.json` with pages containing `imageGroupIds`.
    7.  Generate `imageManifest.json` with the new, highly compressed `imageGroups` objects.

### **Phase 2: Frontend Refactor (`reportStore.ts`)**

*   **Task:** Modify the data loading and processing logic in `src/state/reportStore.ts`.
*   **Functionality (Final C1365):**
    1.  Update `loadReportData` to fetch both new JSON files.
    2.  After fetching, the action will perform an **in-memory reconstruction** of the `allPages` array.
    3.  For each page, it will iterate through its `imageGroupIds`.
    4.  For each `imageGroupId`, it will look up the group in the manifest.
    5.  It will then **loop from 1 to the `imageCount`**, programmatically generating the full `fileName` (e.g., `baseFileName + i + fileExtension`), the full `url`, and a unique `imageId` for each image in the sequence.
    6.  These generated image objects will be populated into the `imagePrompts` array for the page.
*   **Outcome:** The `reportStore` is populated with the complete, merged data. The rest of the UI components will require no changes, as the in-memory data structure they consume remains consistent.

### **Phase 3: Verification & Cleanup**

*   **Task:** Thoroughly test the RDS to ensure all images load and navigation functions correctly.
*   **Outcome:** Once functionality is confirmed, the original `TheAscentReport.json` can be safely deleted.
</file_artifact>

<file path="docs/A183. RDS - Ask Ascentia Embedding Script.md">
# Artifact 184: RDS - Ask Ascentia Embedding Script

## 1. Purpose

This artifact provides a new, standalone Node.js script, `scripts/create_report_embedding.js`, designed to build the knowledge base for the "Ask @Ascentia" feature within the Report Delivery System (RDS).

Unlike the main `create_faiss_index.js` script which processes a structured directory of markdown files, this script is tailored to take a single, large, flattened text file (like the user-provided `flattened_repo.txt`) as input. It chunks this text, generates vector embeddings, and outputs the `report_faiss.index` and `report_chunks.json` files required by the server-side RAG system.

## 2. Script (`scripts/create_report_embedding.js`)

```javascript
#!/usr/bin/env node

/**
 * create_report_embedding.js
 *
 * This script generates a FAISS vector index and a JSON chunk map from a single,
 * large text file. It's designed to create the knowledge base for the
 * "Ask @Ascentia" feature in the Report Delivery System (RDS).
 *
 * Usage:
 * 1. Ensure your local embedding model is running (e.g., via LM Studio).
 * 2. Run the script from the project root, providing the path to your source text file:
 *    node scripts/create_report_embedding.js C:/path/to/your/flattened_report.txt
 *
 * The script will output `report_faiss.index` and `report_chunks.json` in the project root.
 * These files should then be moved to the `./public` directory.
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { Index, IndexFlatL2 } = require('faiss-node');

const FAISS_INDEX_FILE = 'report_faiss.index';
const CHUNKS_FILE = 'report_chunks.json';
const EMBEDDING_API_URL = 'http://127.0.0.1:1234/v1/embeddings';
const EMBEDDING_MODEL = 'text-embedding-granite-embedding-278m-multilingual';

const CHUNK_SIZE = 1800; // characters
const CHUNK_OVERLAP = 200; // characters

/**
 * Splits text into overlapping chunks.
 */
function chunkText(text, size, overlap) {
  const chunks = [];
  let startIndex = 0;
  while (startIndex < text.length) {
    const endIndex = startIndex + size;
    chunks.push(text.substring(startIndex, endIndex));
    startIndex += size - overlap;
  }
  return chunks;
}

/**
 * Gets a vector embedding for a single text chunk from the local API.
 */
async function getEmbedding(text) {
  try {
    const response = await axios.post(EMBEDDING_API_URL, {
      model: EMBEDDING_MODEL,
      input: text,
    });
    if (response.data?.data?.[0]?.embedding) {
      return response.data.data[0].embedding;
    }
    console.error('  [ERROR] Invalid embedding response structure:', response.data);
    return null;
  } catch (error) {
    const errorMessage = error.response ? `${error.response.status} ${error.response.statusText}` : error.message;
    console.error(`  [ERROR] Failed to get embedding for chunk. Status: ${errorMessage}. Text: "${text.substring(0, 50)}..."`);
    return null;
  }
}

async function createReportEmbedding() {
  const inputFile = process.argv[2];
  if (!inputFile) {
    console.error('\n[FATAL ERROR] Please provide the path to the source text file as an argument.');
    console.error('Usage: node scripts/create_report_embedding.js C:/path/to/your/file.txt\n');
    process.exit(1);
  }

  console.log(`Starting RDS embedding generation for: ${inputFile}`);

  // 1. Read and chunk the source file
  let fileContent;
  try {
    fileContent = fs.readFileSync(inputFile, 'utf-8');
  } catch (error) {
    console.error(`\n[FATAL ERROR] Could not read source file: ${error.message}`);
    process.exit(1);
  }

  const textChunks = chunkText(fileContent, CHUNK_SIZE, CHUNK_OVERLAP);
  const allChunks = textChunks.map(chunk => ({ id: 'report_source', chunk }));
  console.log(`Created a total of ${allChunks.length} text chunks.`);

  // 2. Generate embeddings for all chunks
  console.log('Generating embeddings... (This may take a while)');
  const embeddings = [];
  let successfulChunks = [];
  let failedCount = 0;
  let embeddingDimension = -1;

  for (let i = 0; i < allChunks.length; i++) {
    const chunkData = allChunks[i];
    const embedding = await getEmbedding(chunkData.chunk);
    if (embedding) {
      if (embeddingDimension === -1) {
        embeddingDimension = embedding.length;
        console.log(`Detected embedding dimension: ${embeddingDimension}`);
      }
      if (embedding.length !== embeddingDimension) {
        console.error(`\n[FATAL ERROR] Inconsistent embedding dimension! Expected ${embeddingDimension}, but got ${embedding.length} for chunk ${i}. Aborting.`);
        process.exit(1);
      }
      embeddings.push(embedding);
      successfulChunks.push(chunkData);
    } else {
      failedCount++;
    }
    process.stdout.write(`\r  Processed ${i + 1} of ${allChunks.length} chunks...`);
  }
  console.log('\nEmbedding generation complete.');

  if (failedCount > 0) {
    console.warn(`  [WARN] Failed to generate embeddings for ${failedCount} chunks. They will be excluded.`);
  }
  if (embeddings.length === 0) {
    console.error('No embeddings were generated. Cannot create FAISS index. Aborting.');
    return;
  }

  // 3. Build and save FAISS index
  try {
    console.log(`Building FAISS index with ${embeddings.length} vectors of dimension ${embeddingDimension}...`);
    const index = new IndexFlatL2(embeddingDimension);
    index.add(embeddings.flat());
    
    console.log(`Saving FAISS index to ${FAISS_INDEX_FILE}...`);
    index.write(FAISS_INDEX_FILE);

    console.log(`Saving ${successfulChunks.length} text chunks to ${CHUNKS_FILE}...`);
    fs.writeFileSync(CHUNKS_FILE, JSON.stringify(successfulChunks, null, 2), 'utf-8');

    console.log(`\nProcess complete. Report KB created successfully.`);
    console.log(`Move '${FAISS_INDEX_FILE}' and '${CHUNKS_FILE}' to the ./public directory.`);
  } catch (error) {
    console.error('\nAn error occurred while building or saving the FAISS index:', error);
  }
}

createReportEmbedding();
```
</file_artifact>

<file path="docs/A184. RDS - Audio Narration System Design.md">
# Artifact A184: RDS - Audio Narration System Design
# Updated on: C1396 (Describe new two-tier autoplay system with image slideshow and automatic page progression.)
# Updated on: C1395 (Update API request body to match working implementation.)
# Updated on: C1392 (Update architecture to recommend kokoro-fastapi and change the default port to 8880.)
# Updated on: C1389 (Update architecture to recommend xtts-webui and change the default port to 8010.)
# Updated on: C1383 (Align architecture with dedicated Coqui TTS server and backend proxy implementation.)

- **Key/Value for A0:**
- **Description:** Outlines the vision, UI/UX design, technical architecture, and implementation plan for a dynamic Text-to-Speech (TTS) audio narration system within the Report Delivery System (RDS).
- **Tags:** rds, report, audio, tts, accessibility, narration, design, architecture

## 1. Vision & Strategic Purpose

The Audio Narration System is designed to enhance the accessibility and immersion of the Report Delivery System (RDS). By providing on-demand, AI-generated audio narration for each page, we transform the report from a purely visual experience into a multimodal one. This dynamic approach avoids the maintenance nightmare of pre-recorded audio files; if the report text is updated, the narration is automatically updated on the next playback, ensuring content consistency.

## 2. UI/UX Design

An unobtrusive audio control bar will be integrated into the `ReportViewerModal`, positioned within the `ImageNavigator` component area for central access.

### 2.1. Core Components (`AudioControls.tsx`)

*   **Audio Control Bar:** A new UI element, `<AudioControls />`, will contain all playback controls.
*   **Play/Pause Button:** A single button that toggles between playing and pausing the narration for the current page. The icon changes to reflect the state.
*   **Restart Button:** A button to seek the audio back to the beginning of the current page's narration.
*   **Autoplay Toggle:** A checkbox or switch labeled "Autoplay." When enabled, it activates the enhanced autoplay mode. This setting is persisted.
*   **Seekable Progress Bar:** A horizontal slider showing the current playback position and total duration. The user can click or drag this bar to seek.
*   **Status Indicator:** Text or an icon to indicate the current state: `Idle`, `Generating...`, `Buffering...`, `Playing`, `Paused`, or `Error`.

### 2.2. Enhanced Autoplay Mode

When "Autoplay" is enabled, the system provides a hands-free, guided tour of the report:
1.  **Audio Generation & Playback:** On navigating to a new page, the system automatically generates and begins playing the audio narration.
2.  **Synchronized Image Slideshow:** Simultaneously, it calculates a display duration for each image on the page based on the total audio length. It then automatically cycles through the images, creating a slideshow effect.
3.  **Automatic Page Progression:** After the audio for a page finishes, the system waits for a brief (2-second) interval and then automatically navigates to the next page, repeating the process.
4.  **Interruption:** Any manual navigation input from the user (keyboard arrows, clicking navigation buttons) immediately disables Autoplay mode, stopping the slideshow and page progression but allowing the current audio to finish.

## 3. Technical Architecture (Dedicated Server & Proxy)

The system uses a client-server architecture where the `ai-ascent` backend acts as a proxy to a dedicated, external TTS server.

*   **External TTS Server (`kokoro-fastapi`):**
    *   **Recommendation:** The **`kokoro-fastapi`** project, run via Docker, is the recommended server. It provides a stable, pre-packaged server for the high-quality `Kokoro-82M` model with an OpenAI-compatible endpoint.
    *   Exposes an API endpoint (e.g., `http://localhost:8880/v1/audio/speech`) that accepts text and returns an audio stream.
    *   See **A185. RDS - TTS Jumpstart Guide** for setup.

*   **`ai-ascent` Backend (Proxy):**
    *   **Environment:** Reads the `TTS_SERVER_URL` from the `.env` file.
    *   **API Route (`/api/tts/generate`):** A `POST` route in `src/server.ts`.
    *   **Service Logic (`llmService.ts`):** A `generateSpeech` function forwards the text to the external TTS server and streams the audio response back to the game client.
    *   **API Request Body:** The JSON payload sent to the TTS server has the following structure:
        ```json
        {
          "model": "kokoro",
          "voice": "en_us_001",
          "input": "The text to be narrated...",
          "response_format": "wav",
          "speed": 1.0
        }
        ```

*   **`ai-ascent` Frontend (`reportStore.ts`, `AudioControls.tsx`, `ReportViewerModal.tsx`):**
    *   **State (`reportStore.ts`):** Manages all audio state, including `playbackStatus`, `autoplayEnabled`, `currentAudioUrl`, `currentTime`, `duration`, and new state for the slideshow interval and next-page countdown.
    *   **Controls (`AudioControls.tsx`):** Renders the UI based on the store's state and dispatches actions on user interaction. Contains a hidden HTML5 `<audio>` element.
    *   **Logic (`ReportViewerModal.tsx`):** Contains the core `useEffect` hooks that listen for state changes to manage the `setInterval` for the image slideshow and the `setTimeout` for the next-page countdown when autoplay is active.

## 4. Implementation Plan

1.  **Curator Action:** Set up and run the external `kokoro-fastapi` server as described in **A185**.
2.  **Backend:** Implement the `/api/tts/generate` proxy route in `server.ts` and the `generateSpeech` function in `llmService.ts`.
3.  **Frontend State:** Add enhanced audio and autoplay state and actions to `reportStore.ts`.
4.  **Frontend UI:** Create/update the `<AudioControls />` component.
5.  **Integration:** Add `<AudioControls />` to `ReportViewerModal.tsx` and implement the full logic for the enhanced autoplay system.
</file_artifact>

<file path="docs/A185. RDS - TTS Jumpstart Guide.md">
# Artifact A185: RDS - TTS Jumpstart Guide (kokoro-fastapi)
# Updated on: C1395 (Add note about script fix for streaming error.)
# Updated on: C1393 (Add integrated API test script and instructions.)
# Updated on: C1392 (Complete pivot to kokoro-fastapi for stability and ease of use.)

- **Key/Value for A0:**
- **Description:** A step-by-step guide for setting up a local `kokoro-fastapi` Docker-based TTS server and integrating it into the `ai-ascent` game for the Report Delivery System's audio narration feature.
- **Tags:** rds, report, audio, tts, accessibility, narration, guide, setup, kokoro, docker, fastapi, python

## 1. Purpose

This guide provides a definitive, simplified process for setting up a local Text-to-Speech (TTS) server. Previous attempts with other libraries resulted in complex dependency issues. This guide pivots to **`kokoro-fastapi`**, a project that uses Docker to provide a stable, pre-packaged, and high-performance TTS server with an OpenAI-compatible API endpoint.

This approach is significantly more reliable and is the recommended path for enabling the audio narration feature in the Report Delivery System (RDS).

## 2. Part 1: Setting Up the TTS Server with Docker

This method is the quickest and most reliable way to get the server running, as it bypasses Python environment and dependency management entirely.

### Step 2.1: Prerequisite - Install Docker

You must have Docker Desktop installed and running on your server machine.

1.  **Download and Install:** Get Docker Desktop from the official website: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

### Step 2.2: Run the TTS Server

Open your terminal (PowerShell or Command Prompt on your server machine) and run the command that matches your hardware. The first time you run this, Docker will download the image, which may take a few minutes.

*   **For NVIDIA GPUs (Recommended for best performance):**
    ```bash
    docker run --gpus all -p 8880:8880 ghcr.io/remsky/kokoro-fastapi-gpu:latest
    ```

*   **For CPU-only (or non-NVIDIA GPUs like AMD / Apple Silicon):**
    ```bash
    docker run -p 8880:8880 ghcr.io/remsky/kokoro-fastapi-cpu:latest
    ```

### Step 2.3: Verification (Python Script)

Once the command is running, the server is active. You will see log output in your terminal. The server is now available at `http://localhost:8880`.

To confirm it's working correctly, you can run a simple Python test script.

1.  **Create a file:** On any machine, create a file named `test_tts.py`.
2.  **Add the code:** Paste the following code into the file. You will need the `openai` Python library (`pip install openai`).

    ```python
    from openai import OpenAI

    # Point the client to your local kokoro-fastapi server
    # If running this script on a different machine, change 'localhost' to the server's IP.
    client = OpenAI(
        base_url="http://localhost:8880/v1", 
        api_key="not-needed" # API key is not required for local server
    )

    print("Sending TTS request to the local server...")

    try:
        # Create the speech request
        with client.audio.speech.with_streaming_response.create(
            model="kokoro",
            voice="af_sky+af_bella", # You can mix voices
            input="Hello world! If you can hear this, the local TTS server is working correctly."
        ) as response:
            # Stream the audio to a file
            response.stream_to_file("output.mp3")
        
        print("\nSuccess! Audio saved to output.mp3")

    except Exception as e:
        print(f"\nAn error occurred: {e}")
        print("Please ensure the Docker container is running and accessible at http://localhost:8880")

    ```
3.  **Run the test:** Open a new terminal, navigate to where you saved the file, and run:
    ```bash
    python test_tts.py
    ```
4.  **Check the output:** If successful, you will see a success message, and an `output.mp3` file will be created in the same folder. Play this file to confirm you can hear the generated audio.

## 3. Part 2: Integrating with `ai-ascent`

This part ensures the `ai-ascent` game knows how to communicate with your new TTS server.

### Step 3.1: Update Environment File

1.  **Open `.env`:** In the root of your `ai-ascent` project, open the `.env` file.
2.  **Add/Update TTS Server URL:** Add or modify the `TTS_SERVER_URL` variable.

    *   **If the server is on the SAME machine as the game:**
        ```
        TTS_SERVER_URL=http://localhost:8880/v1/audio/speech
        ```

    *   **If the server is on a DIFFERENT machine on your network (e.g., your dev laptop accessing a server in the closet):** Replace `localhost` with the local IP address of the server machine.
        ```
        TTS_SERVER_URL=http://192.168.1.85:8880/v1/audio/speech
        ```

### Step 3.2: Restart the Game Server

Whenever you change the `.env` file, you must restart your `ai-ascent` development server. Stop your `npm run dev` command (with `Ctrl+C`) and run it again.

## 4. Part 3: Verifying the Connection from AI Ascent

This final step uses an integrated script within the `ai-ascent` project to confirm your development environment can successfully communicate with the TTS server.

### Step 4.1: Run the Test Script

1.  Open a terminal in the **root directory of your `ai-ascent` project**.
2.  Run the following command:
    ```bash
    npx dotenv -e .env -- ts-node scripts/test_tts_api.ts
    ```
    *(Note: This script was updated in C1395 to fix a stream handling error. The latest version in the repository is the correct one.)*

### Step 4.2: Check the Output

1.  The script will print its progress to your console.
2.  If it succeeds, it will create a file named `test_output.mp3` in your project's root directory.
3.  Play this file. If you hear the generated audio, the connection is working perfectly, and the audio narration feature is ready for final implementation.
4.  If it fails, the script will print troubleshooting steps. The most common issues are an incorrect IP address in the `.env` file or a firewall blocking the connection on port `8880`.
</file_artifact>

<file path="docs/A186. RDS - Front Matter & User Guide Content.md">
# Artifact A186: RDS - Front Matter & User Guide Content
# Updated on: C1397 (Add markdown formatting for better readability.)

- **Key/Value for A0:**
- **Description:** Contains the curator-requested descriptive text for the introductory page of "The Ascent Report," designed to be narrated by Ascentia to guide the user.
- **Tags:** rds, report, content, user guide, narration, ascentia

## 1. Purpose

This artifact provides the specific text content for the introductory (front matter) page of "The Ascent Report." This content is intended to be placed in the `reportContent.json` file for the report's first page and narrated by the in-game `@Ascentia` AI assistant to orient the user.

## 2. Introductory Page Content

### 2.1. Page Title
Welcome, Citizen Architect

### 2.2. TL;DR
An interactive guide to navigating this report and understanding its features.

### 2.3. Image Prompt
A welcoming, solarpunk-themed user interface overlaying a beautiful landscape. The interface is holographic and translucent, showing elements like a navigable page tree, an audio waveform, an AI assistant icon, and highlighted images. The overall feeling is intuitive, helpful, and technologically advanced yet user-friendly.

### 2.4. Full Content (To be narrated by Ascentia)

Hi there! I am Ascentia, your guide through this interactive report. This is more than a document; it is an explorable space of ideas. To help you navigate, allow me to explain the interface.\n\nTo your left, you will find the **Report Navigator**, a tree that allows you to jump to any part or section of the report.\n\nIn the center are the primary controls. You can navigate between pages using the **up and down arrow keys**, and cycle through the different visual interpretations for each page using the **left and right arrow keys**.\n\nFor a more immersive experience, you can select **\"Autoplay.\"** I will then read the contents of each page aloud to you. While I am speaking, the system will automatically present a slideshow of all the images associated with that page. Once the narration for a page is complete, we will automatically proceed to the next, allowing you to experience the entire report hands-free. Any interaction from you will pause this automated tour, giving you back full manual control.\n\nFinally, the **\"Ask Ascentia\"** button opens a direct line to me. If you have any questions about the content you are viewing, do not hesitate to ask. Enjoy your ascent.
</file_artifact>

</file_artifact>

