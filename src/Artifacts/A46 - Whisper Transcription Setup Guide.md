# Artifact A46: Whisper Transcription Setup Guide
# Date Created: C55
# Author: AI Model & Curator
# Updated on: C62 (Correct PowerShell commands for file upload)

- **Key/Value for A0:**
- **Description:** A technical guide detailing a simple, Docker-based setup for using a high-performance Whisper API to transcribe audio recordings, with specific commands for PowerShell.
- **Tags:** guide, setup, whisper, transcription, docker, audio processing, api, wsl, gpu, powershell, curl

## 1. Overview & Goal

To build our training curriculum from recorded 1-on-1 sessions, we need an efficient and reliable way to transcribe audio files into text. You requested a simple, Docker-based solution.

The goal of this guide is to provide a step-by-step process for running a powerful, GPU-accelerated Whisper model via Docker that exposes a simple API for programmatic transcription. The recommended solution is the **`insanely-fast-whisper-api`** project, which provides a ready-to-use, high-performance API server. The full documentation for this tool can be found in artifact `A47`.

## 2. Prerequisites

*   **Docker:** You must have Docker Desktop installed and running on your machine.
*   **NVIDIA GPU (Strongly Recommended):** For acceptable performance, running Whisper on a CUDA-enabled NVIDIA GPU is advised. You will need the NVIDIA Container Toolkit installed and properly configured with your OS.
*   **Audio Files:** Your audio recordings should be in a common format (MP3, WAV, M4A, etc.) and located in a single directory that you can mount into the Docker container.

## 3. Step-by-Step Setup

### Step 1: Prepare Your Audio Directory

Create a dedicated directory on your machine to hold the audio files you want to transcribe. For this example, we'll use `C:\Projects\v2v-transcripts\audio-to-process`.

### Step 2: Run the Whisper API Docker Container

Open your terminal (PowerShell or Command Prompt) and run the following command. This command will download the Docker image (which is quite large, ~18.7 GB) and start the Whisper API server.

```powershell
docker run --gpus all --ipc=host --ulimit memlock=-1 --ulimit stack=67108864 -p 9000:9000 -v "C:\Projects\v2v-transcripts\audio-to-process:/data" yoeven/insanely-fast-whisper-api:latest
```

Let's break down this command:
*   `--gpus all`: **(Crucial for performance)** Assigns all available NVIDIA GPUs to the container. If you encounter errors or are on a CPU-only machine, see the Troubleshooting section.
*   The `--ipc`, `--ulimit` flags are recommended by the `insanely-fast-whisper` project for optimal performance.
*   `-p 9000:9000`: Maps port 9000 on your host machine to port 9000 inside the container. This is how you'll access the API.
*   `-v "C:\...:/data"`: This mounts your local audio directory into the container at the `/data` path. This is how the API can access your audio files. **You must replace the example path with the absolute path to your audio files.**
*   `yoeven/insanely-fast-whisper-api:latest`: The name of the Docker image to use.

### Step 3: Verify the Server is Running

After a minute or two for the model to load, you can verify that the server is running by opening a web browser and navigating to `http://localhost:9000/docs`. You should see a FastAPI documentation page. This confirms the server is up and ready to accept requests.

## 4. Transcribing Your Files with PowerShell

The previous `curl` commands failed because of a common quoting issue when calling native executables like `curl.exe` from within PowerShell, especially when using `Invoke-Expression`. The single quotes around the file path were being treated as part of the filename, causing the "Failed to open/read" error.

The corrected script below resolves this by ensuring only the necessary double quotes are used to handle paths with spaces.

**Instructions:**
1.  Open a new PowerShell terminal.
2.  Navigate to the directory where you want to save the transcript files (e.g., `cd C:\Projects\v2v-transcripts`).
3.  Copy and paste the entire script block below into your PowerShell terminal and press Enter. It will loop through all your audio files and transcribe them one by one.

```powershell
# --- PowerShell Script for Transcription using curl.exe ---

# 1. Set the path to your audio files on your Windows machine
$audioFolderPath = "C:\Projects\v2v-transcripts\audio-to-process"

# 2. Set the URL for your local Whisper API
$apiUrl = "http://localhost:9000/transcribe"

# 3. List of files to transcribe
$filesToTranscribe = @(
    "Lesson 1.5.wav",
    "Lesson 2.wav",
    "My recording 2.wav",
    "My recording 5.wav",
    "My recording 6.wav",
    "My recording 7.wav",
    "My recording 8.wav",
    "My recording 9.wav",
    "My recording 10.wav",
    "My recording 11.wav",
    "My recording 12.wav",
    "My recording 13.wav"
)

# 4. Loop through each file and transcribe it
foreach ($fileName in $filesToTranscribe) {
    $fullPath = Join-Path -Path $audioFolderPath -ChildPath $fileName
    $outputFileName = [System.IO.Path]::GetFileNameWithoutExtension($fileName) + ".json"
    
    Write-Host "Transcribing '$fileName'..."

    # CORRECTED: The file path for the -F argument should not be wrapped in single quotes.
    # The double quotes around the entire argument are sufficient for Invoke-Expression to handle spaces.
    $fileArgument = "file=@$fullPath"

    # Construct the command string using backticks to escape quotes for Invoke-Expression.
    $command = "curl.exe -X POST `"$apiUrl`" -H `"accept: application/json`" -F `"$fileArgument`" -o `"$outputFileName`""
    
    Write-Host "Executing: $command"

    try {
        # Execute the command string
        Invoke-Expression -Command $command
        Write-Host "Successfully transcribed '$fileName'. Output saved to '$outputFileName'." -ForegroundColor Green
    }
    catch {
        Write-Host "Error transcribing '$fileName': $_" -ForegroundColor Red
    }
    Write-Host "---------------------------------"
}

Write-Host "All files processed."
```

## 5. Extracting the Text

After running the script, you will have several `.json` files. The API responds with a JSON object containing the full transcription and other metadata. The complete text is located in the `"text"` field.

**Example Response (`Lesson 1.5.json`):**
```json
{
  "text": "This is the full transcribed text from the audio file...",
  "language": "en",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0,
      "end": 4.8,
      "text": " This is the full transcribed text...",
      // ... other segment data
    }
  ]
}
```

You can now open each JSON file, copy the value of the `"text"` field, and save it as a markdown file for the next stage of our curriculum development.

## 6. Troubleshooting

### Error: `nvidia-container-cli: initialization error: WSL environment detected but no adapters were found: unknown.`

This is a common error on Windows systems using Docker Desktop with the WSL 2 backend. It means that the Docker container, running inside WSL, cannot access your NVIDIA GPU. This is almost always a configuration issue between your Windows NVIDIA drivers and WSL.

Follow these steps to diagnose the issue:

**Step 1: Verify Host NVIDIA Drivers**
First, ensure your NVIDIA drivers are installed correctly on your main Windows operating system.
*   Open **PowerShell** (not the WSL terminal).
*   Run the command: `nvidia-smi`
*   If this command runs successfully and shows your GPU details, your Windows drivers are likely fine. If it fails, you must install the latest NVIDIA drivers for your GPU from the official NVIDIA website before proceeding.

**Step 2: Verify GPU Access Inside WSL**
Next, check if WSL itself can see the GPU.
*   Open your WSL terminal (e.g., Ubuntu).
*   Run the command: `nvidia-smi`
*   If this command works, WSL can access your GPU. If it fails with an error like "command not found" or another GPU error, it means your WSL environment is not correctly configured for GPU passthrough.
*   **Solution:** You must follow NVIDIA's official guide for setting up **CUDA on WSL**. This is the most reliable way to fix this layer. You can find the guide here: [https://docs.nvidia.com/cuda/wsl-user-guide/index.html](https://docs.nvidia.com/cuda/wsl-user-guide/index.html)

**Step 3: Verify Docker Desktop Settings**
Ensure Docker Desktop is configured to use your WSL 2 distribution and provide it with GPU access.
*   Open Docker Desktop.
*   Go to **Settings > Resources > WSL Integration**.
*   Make sure that "Enable integration with my default WSL distro" is checked, and that the toggle for your specific Linux distribution (e.g., `Ubuntu-22.04`) is turned on.

**Step 4: Fallback to CPU Mode (for testing)**
If you cannot resolve the GPU issue but still want to test the transcription workflow, you can run the container in CPU-only mode. This will be **extremely slow** but can be useful for verification.
*   Remove the `--gpus all` and other hardware flags from the `docker run` command:
    ```powershell
    docker run -p 9000:9000 -v "C:\Projects\v2v-transcripts\audio-to-process:/data" yoeven/insanely-fast-whisper-api:latest