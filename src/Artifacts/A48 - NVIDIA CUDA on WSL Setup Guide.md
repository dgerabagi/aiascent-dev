# Artifact A48: NVIDIA CUDA on WSL Setup Guide
# Date Created: C59
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A straightforward guide for setting up NVIDIA CUDA on Windows Subsystem for Linux (WSL) 2 to enable GPU acceleration for Docker containers.
- **Tags:** guide, setup, cuda, wsl, docker, gpu, nvidia, troubleshooting

## 1. Overview & Goal

The `nvidia-smi` command not being found inside your WSL terminal is a classic sign that the environment is not correctly configured to access your NVIDIA GPU. This guide provides a clear, step-by-step process to properly install and configure CUDA on WSL 2, which is a prerequisite for GPU-accelerated Docker containers.

The goal is to provide a simpler, more direct path than the official NVIDIA documentation, focusing only on the essential steps to get you up and running.

## 2. Prerequisites

Before you begin, ensure your system meets these requirements:
*   Windows 11 or Windows 10 (version 21H2 or later).
*   An NVIDIA GPU (GeForce RTX 20-series / Quadro RTX or newer recommended).
*   Windows Subsystem for Linux (WSL) 2 enabled with a Linux distribution installed (e.g., Ubuntu).
*   Docker Desktop installed and configured to use the WSL 2 backend.

## 3. Step-by-Step Installation

Follow these steps in order. The first two steps are performed on your **Windows host**, and the third is performed **inside your WSL terminal**.

### Step 1: Install the Latest NVIDIA Driver for Windows

This is the most critical step. The Windows driver is what enables WSL to access the GPU.

1.  **Download:** Go to the official NVIDIA Driver Downloads page: [https://www.nvidia.com/Download/index.aspx](https://www.nvidia.com/Download/index.aspx)
2.  **Select Driver:** Choose the correct driver series for your GPU (e.g., GeForce Game Ready Driver or NVIDIA RTX / Quadro).
3.  **Install:** Download and install the driver on your Windows system. Reboot your machine after installation is complete.
4.  **Verify on Windows:** Open **PowerShell** or **Command Prompt** (not WSL) and run `nvidia-smi`. You should see your GPU details. If this command fails, you must resolve your Windows driver installation before proceeding.

### Step 2: Update the WSL Kernel

Ensure you have the latest WSL kernel, which includes the necessary GPU support.

1.  Open **PowerShell** as an administrator.
2.  Run the following command:
    ```powershell
    wsl --update
    ```
3.  If it downloads and installs an update, restart your machine.

### Step 3: Install the CUDA Toolkit inside WSL

This step installs the necessary CUDA compiler and libraries *within your Linux distribution*, which makes commands like `nvcc` available and ensures Docker containers can find the toolkit.

1.  **Open your WSL terminal** (e.g., Ubuntu).
2.  Run the following commands one by one to install the NVIDIA CUDA repository and the toolkit. This example is for Ubuntu 22.04 with CUDA 12.x; adjust the URL if you are using a different version.

    ```bash
    # Add NVIDIA's GPG key and repository
    wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin
    sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600
    wget https://developer.download.nvidia.com/compute/cuda/12.5.0/local_installers/cuda-repo-wsl-ubuntu-12-5-local_12.5.0-1_amd64.deb
    sudo dpkg -i cuda-repo-wsl-ubuntu-12-5-local_12.5.0-1_amd64.deb
    sudo cp /var/cuda-repo-wsl-ubuntu-12-5-local/cuda-*-keyring.gpg /usr/share/keyrings/
    sudo apt-get update
    
    # Install the CUDA toolkit
    sudo apt-get -y install cuda-toolkit-12-5
    ```

3.  **Update PATH (Important):** The CUDA tools are installed in `/usr/local/cuda-12.5/bin`. You need to add this to your PATH to run commands like `nvcc`. Add the following lines to the end of your `~/.bashrc` file:

    ```bash
    echo 'export PATH=/usr/local/cuda-12.5/bin:$PATH' >> ~/.bashrc
    echo 'export LD_LIBRARY_PATH=/usr/local/cuda-12.5/lib64:$LD_LIBRARY_PATH' >> ~/.bashrc
    source ~/.bashrc
    ```
    *Note: You will need to close and reopen your WSL terminal for this change to take full effect.*

## 4. Verification

After completing the steps, verify that everything is working correctly from **inside your WSL terminal**.

1.  **Check `nvidia-smi`:**
    ```bash
    nvidia-smi
    ```
    You should now see the same output as you did on Windows, showing your GPU, driver version, and CUDA version. If the command is not found, it might mean `/usr/lib/wsl/lib` is not in your PATH, but the CUDA installation should resolve this.

2.  **Check `nvcc`:**
    ```bash
    nvcc --version
    ```
    This command verifies that the CUDA Toolkit compiler is installed and accessible. You should see output detailing the compiler version.

3.  **Check Docker GPU Access:**
    Run a sample CUDA container to confirm Docker can access the GPU.
    ```bash
    docker run --rm --gpus all nvcr.io/nvidia/k8s/cuda-sample:nbody nbody -gpu -benchmark
    ```
    If this runs successfully and shows benchmark results, your entire stack—Windows Driver, WSL, CUDA Toolkit, and Docker—is correctly configured for GPU workloads.

You can now run GPU-enabled containers, such as the Whisper API, with the `--gpus all` flag.