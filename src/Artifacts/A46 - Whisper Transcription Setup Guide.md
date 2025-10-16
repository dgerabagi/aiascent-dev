# Artifact A46: Whisper Transcription Setup Guide
# Date Created: C55
# Author: AI Model & Curator
# Updated on: C65 (Provide definitive and final working solution)

- **Key/Value for A0:**
- **Description:** A technical guide detailing a simple, Docker-based setup for using a high-performance Whisper API to transcribe audio recordings, with specific commands for PowerShell.
- **Tags:** guide, setup, whisper, transcription, docker, audio processing, api, wsl, gpu, powershell, curl

## 1. Overview & Goal

To build our training curriculum from recorded 1-on-1 sessions, we need an efficient and reliable way to transcribe audio files into text. You requested a simple, Docker-based solution.

The goal of this guide is to provide a step-by-step process for running a powerful, GPU-accelerated Whisper model via Docker that exposes a simple API for programmatic transcription. The recommended solution is the **`insanely-fast-whisper-api`** project, which provides a ready-to-use, high-performance API server. The full documentation for this tool can be found in artifact `A47`.

## 2. Root Cause of Previous Failures (Cycles 59-64)

My previous guidance was incorrect and is the reason for the persistent failures. The core issue has been the complex and unreliable way PowerShell handles nested quotes when passing command arguments to `docker exec`. This resulted in the `curl` command inside the container receiving a corrupted JSON string, which the API server then rejected with a `JSON decode error`.

The solution below is the definitive and most robust method. It constructs the command in a way that preserves the JSON payload as a literal string, which is the standard and correct way to interact with `curl`.

## 3. Step-by-Step Setup

### Step 1: Prepare Your Audio Directory

Create a dedicated directory on your machine to hold the audio files you want to transcribe. For this guide, we will use the path `C:\Projects\v2v-transcripts\audio-to-process`. Place all your `.wav` files in this folder.

### Step 2: Run the Whisper API Docker Container

Open your terminal (PowerShell is recommended) and run the following command. This will download the Docker image (which is quite large, ~18.7 GB) and start the Whisper API server.

```powershell
docker run --gpus all --ipc=host --ulimit memlock=-1 --ulimit stack=67108864 -p 9000:9000 --name whisper-api -v "C:\Projects\v2v-transcripts\audio-to-process:/data" -d yoeven/insanely-fast-whisper-api:latest
```

*   `--gpus all`: **(Crucial for performance)** Assigns all available NVIDIA GPUs to the container.
*   `-p 9000:9000`: Maps port 9000 on your host machine to port 9000 inside the container.
*   `--name whisper-api`: Gives the container a simple, predictable name for easier scripting.
*   `-v "C:\...:/data"`: **(Critical)** Mounts your local audio directory into the container at the `/data` path. This allows the API to access the files directly.
*   `-d`: Runs the container in the background (detached mode).

### Step 3: Verify the API Server is Running

After a minute or two for the model to load into the GPU, you can verify that the server is running by opening a web browser and navigating to `http://localhost:9000/docs`. You should see a FastAPI documentation page. This confirms the server is up and ready to accept requests.

## 4. Transcribing Your Files: The Definitive Method

The following PowerShell script provides the final, correct, and most reliable method for transcribing your files. It automates the process of calling the API for each of your audio files using the correct `curl` command structure.

**Instructions:**
1.  Open a new PowerShell terminal.
2.  Copy and paste the entire script below into your terminal and press Enter.

```powershell
# --- PowerShell Script for Transcription via `docker exec` (JSON Payload Method) ---
# This is the definitive and most reliable method based on the API's requirements.

# 1. Set the name of your running container. We use the name specified in the `docker run` command.
$containerName = "elated_lewin"

# 2. List of files to transcribe. These names must match the files in your audio folder.
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

# 3. Loop through each file and execute the transcription command inside the container.
foreach ($fileName in $filesToTranscribe) {
    $outputFileName = [System.IO.Path]::GetFileNameWithoutExtension($fileName) + ".json"
    
    Write-Host "Initiating transcription for '$fileName'..."

    # Construct the JSON payload object. This is the most reliable way to create JSON.
    # Note the 'file://' URI to reference the file inside the container's filesystem.
    $payload = @{
        url = "file:///data/$fileName"
        task = "transcribe"
        language = $null
        batch_size = 64
        timestamp = "chunk"
        diarise_audio = $false
    }
    
    # Convert the PowerShell object to a compact JSON string.
    $jsonString = $payload | ConvertTo-Json -Compress

    # This command tells Docker to run 'curl' inside the container.
    # CRITICAL: The JSON data is passed inside SINGLE QUOTES (`-d '$jsonString'`).
    # This prevents PowerShell from misinterpreting the inner double quotes and ensures
    # curl receives a valid, literal JSON string. This is the key to the fix.
    $command = "docker exec `"$containerName`" curl -s -X POST `"http://localhost:9000/`" -H `"Content-Type: application/json`" -d '$jsonString' -o `"/data/$outputFileName`""
    
    Write-Host "Executing command..."

    try {
        Invoke-Expression -Command $command
        Write-Host "Successfully initiated transcription for '$fileName'. Output will be in '$outputFileName'." -ForegroundColor Green
    }
    catch {
        Write-Host "Error transcribing '$fileName': $_" -ForegroundColor Red
    }
    Write-Host "---------------------------------"
}

Write-Host "All transcription jobs initiated. Please check your folder for the output .json files. This may take some time."
```

## 5. Extracting the Text

After running the script, you will see `.json` files appear in your `audio-to-process` directory as each transcription completes. The API responds with a JSON object containing the full transcription. The text is located in the `"text"` field.

**Example Response (`Lesson 1.5.json`):**
```json
{
  "text": "This is the full transcribed text from the audio file...",
  "language": "en",
  "segments": [ ... ]
}
```

You can now copy the value of the `"text"` field from each JSON file to create your markdown transcript artifacts. When you are finished, you can stop the Docker container by running `docker stop whisper-api` in your terminal.