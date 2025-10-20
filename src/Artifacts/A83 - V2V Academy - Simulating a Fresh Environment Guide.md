# Artifact A83: V2V Academy - Simulating a Fresh Environment Guide
# Date Created: C98
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A guide for the curator on how to safely simulate a "fresh" development environment to replicate the experience of a new V2V Academy learner, for the purpose of creating accurate tutorials and GIFs.
- **Tags:** guide, v2v, curriculum, labs, testing, git, dev containers, docker

## 1. The Challenge

As an experienced developer, your machine is already configured with all the necessary tools like Git and has authenticated credentials for services like GitHub. This makes it difficult to replicate the exact journey a brand-new learner will face, including the specific error messages they will encounter when a tool is missing or not configured.

To create accurate and helpful visual aids (like GIFs) for the V2V Academy labs, you need a way to safely simulate this "fresh environment" without uninstalling your own critical software and breaking your development setup.

## 2. Solutions

There are several ways to achieve this, ranging from simple but risky to slightly more complex but completely safe.

### Method 1: VS Code Dev Containers (Highly Recommended)

This is the safest, most professional, and most reproducible method. It uses Docker to create a completely isolated development environment inside a container.

*   **What it is:** The [VS Code Dev Containers extension](https://code.visualstudio.com/docs/devcontainers/containers) lets you open a project folder inside a lightweight, disposable Linux container. This container has its own file system, its own installed software, and its own network configuration, completely separate from your host Windows or macOS machine.
*   **Benefits:**
    *   **Pristine Environment:** The container starts as a clean slate. Git is not installed, and no GitHub credentials are present. It perfectly mimics a new user's machine.
    *   **Zero Risk:** Your host machine's software and configuration are never touched. You can experiment freely inside the container.
    *   **Reproducible:** The environment is defined in a configuration file, so you can tear it down and bring it back up in the exact same clean state every time.
*   **How to Get Started:**
    1.  **Prerequisites:** Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) in VS Code.
    2.  **Open Project:** Open the `aiascent-dev` project in VS Code.
    3.  **Add Dev Container Config:** Open the Command Palette (`Ctrl+Shift+P`), run the command **`Dev Containers: Add Development Container Configuration Files...`**, and choose a basic definition like `Node.js`. This will create a `.devcontainer` folder in your project.
    4.  **Reopen in Container:** VS Code will prompt you to "Reopen in Container." Click it. VS Code will build the Docker image (this may take a few minutes the first time) and reload your window, but you will now be "inside" the container.
    5.  **Verify:** Open the integrated terminal in VS Code. You are now in a Linux shell. Type `git --version`. It will return "command not found," perfectly simulating the state of a new learner.
    6.  You can now run through the lab steps, installing Git *inside the container* and recording the exact process. When you are done, simply close the container and reopen the project locally.

### Method 2: Temporarily Modifying the PATH (Advanced & Risky)

This method involves making your system temporarily "forget" where Git is installed. It is less reliable and carries a small risk of misconfiguration.

*   **How it Works:** The command line finds programs like `git` by looking in the directories listed in your system's `PATH` environment variable. By temporarily removing the Git directory from this path, you can make the `git` command fail.
*   **Windows Steps:**
    1.  Find where Git is installed (usually `C:\Program Files\Git\cmd`).
    2.  Open "Edit the system environment variables" from the Start Menu.
    3.  Click "Environment Variables..."
    4.  Under "System variables," find and select `Path`, then click "Edit."
    5.  Find the entry for Git, select it, and click "Delete." **(Remember to note the exact path so you can add it back!)**
    6.  Click OK on all dialogs. You will need to open a **new** terminal for the change to take effect.
    7.  To revert, follow the same steps but click "New" and add the Git path back.
*   **Clearing GitHub Credentials (Windows):** Search for "Credential Manager" in the Start Menu, go to "Windows Credentials," and find any entries for `git:https://github.com`. You can temporarily remove these.

**Conclusion:** For its safety, reliability, and reproducibility, the **VS Code Dev Containers** method is the strongly recommended approach for solving this problem.