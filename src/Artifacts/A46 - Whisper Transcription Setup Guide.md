# Artifact A46: Whisper Transcription Setup Guide
# Date Created: C55
# Author: AI Model & Curator
# Updated on: C59 (Add link to new CUDA on WSL guide)
# Updated on: C58 (Add GPU/WSL troubleshooting guide and simplify transcription workflow)

- **Key/Value for A0:**
- **Description:** A technical guide detailing a simple, Docker-based setup for using a high-performance Whisper API to transcribe audio recordings into text for curriculum development.
- **Tags:** guide, setup, whisper, transcription, docker, audio processing, api, wsl, gpu

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

```bash
docker run -d --gpus all -p 9000:9000 -v "C:\Projects\v2v-transcripts\audio-to-process:/data" yoeven/insanely-fast-whisper-api:latest
```

Let's break down this command:
*   `-d`: Runs the container in detached mode (in the background).
*   `--gpus all`: **(Crucial for performance)** Assigns all available NVIDIA GPUs to the container. If you encounter errors, see the Troubleshooting section below.
*   `-p 9000:9000`: Maps port 9000 on your host machine to port 9000 inside the container. This is how you'll access the API.
*   `-v "C:\...:/data"`: This mounts your local audio directory into the container at the `/data` path. This is how the API can access your audio files. **You must replace the example path with the absolute path to your audio files.**
*   `yoeven/insanely-fast-whisper-api:latest`: The name of the Docker image to use.

### Step 3: Verify the Server is Running

After a minute or two for the model to load, you can verify that the server is running by opening a web browser and navigating to `http://localhost:9000/docs`. You should see a FastAPI documentation page. This confirms the server is up and ready to accept requests.

## 4. How to Transcribe a File

You can now send `POST` requests to the API to transcribe your audio files. This is most easily done by uploading the file directly from the volume you mounted into the container.

### Example using `curl`

Open a new terminal and run the following command, replacing `your-audio-file.mp3` with the name of your audio file.

```bash
curl -X 'POST' \
  'http://localhost:9000/transcribe' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@/data/your-audio-file.mp3;type=audio/mpeg'
```

**Explanation:**
*   We are sending a `POST` request to the `/transcribe` endpoint.
*   The `-F 'file=@/data/your-audio-file.mp3...'` part tells `curl` to upload a file.
*   **Important:** The path `/data/your-audio-file.mp3` is the path *inside the Docker container*, which we mapped from our local directory. You must always use `/data/` as the prefix for the file path in your API call.

### Example Response

The API will respond with a JSON object containing the full transcription.

```json
{
  "text": "Imagine that you had a very smart engineer show up on your doorstep. They have no context, no background...",
  "language": "en",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0,
      "end": 4.8,
      "text": " Imagine that you had a very smart engineer show up on your doorstep.",
      // ... other segment data
    }
  ]
}
```

You can copy the value of the `"text"` field to get the full transcript. This provides a simple and powerful pipeline for converting your recorded sessions into the raw material for the V2V Academy curriculum.

## 5. Troubleshooting

### Error: `docker: Error response from daemon: could not select device driver "" with capabilities: [[gpu]].` OR `nvidia-smi` command not found in WSL.

This is a common error on Windows systems using Docker Desktop with the WSL 2 backend. It means that the Docker container, running inside WSL, cannot access your NVIDIA GPU. This is almost always a configuration issue between your Windows NVIDIA drivers, WSL, and the CUDA toolkit.

For a comprehensive, step-by-step solution, please refer to the dedicated guide: **`A48 - NVIDIA CUDA on WSL Setup Guide.md`**. That artifact provides a straightforward process for correctly installing the drivers and toolkit to resolve this issue.

### Fallback to CPU Mode (for testing)
If you cannot resolve the GPU issue but still want to test the transcription workflow, you can run the container in CPU-only mode. This will be **extremely slow** but can be useful for verification.
*   Remove the `--gpus all` flag from the `docker run` command:
    ```bash
    docker run -d -p 9000:9000 -v "C:\Projects\v2v-transcripts\audio-to-process:/data" yoeven/insanely-fast-whisper-api:latest