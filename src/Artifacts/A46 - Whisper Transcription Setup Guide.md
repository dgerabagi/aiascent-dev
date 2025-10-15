# Artifact A46: Whisper Transcription Setup Guide
# Date Created: C55
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A technical guide detailing a simple, Docker-based setup for using OpenAI's Whisper to transcribe audio recordings into text for curriculum development.
- **Tags:** guide, setup, whisper, transcription, docker, audio processing

## 1. Overview & Goal

To build our training curriculum from recorded 1-on-1 sessions, we need an efficient and reliable way to transcribe audio files into text. You requested a simple, Docker-based solution for OpenAI's Whisper, similar to our `kokoro-fastapi` TTS setup.

The goal of this guide is to provide a step-by-step process for running a powerful Whisper model via Docker that exposes an API, allowing for easy, programmatic transcription. The recommended solution is a container from `purton-tech/whisper-api`, which provides a ready-to-use API server for this purpose.

## 2. Prerequisites

*   **Docker:** You must have Docker Desktop installed and running on your machine (the one with the GPU is highly recommended).
*   **NVIDIA GPU (Recommended):** For acceptable performance, running Whisper on a CUDA-enabled NVIDIA GPU is strongly advised. You will need the NVIDIA Container Toolkit installed.
*   **Audio Files:** Your audio recordings should be in a common format (MP3, WAV, M4A, etc.) and located in a single directory.

## 3. Step-by-Step Setup

### Step 1: Prepare Your Audio Directory

Create a dedicated directory on your machine to hold the audio files you want to transcribe. For this example, we'll use `C:\Projects\v2v-transcripts\1-on-1-training`.

### Step 2: Run the Whisper API Docker Container

Open your terminal (PowerShell or Command Prompt) and run the following command. This command will download the Docker image and start the Whisper API server.

```bash
docker run -d --gpus all -p 9000:9000 -v "C:\Projects\v2v-transcripts\1-on-1-training:/data" purton-tech/whisper-api:latest
```

Let's break down this command:
*   `-d`: Runs the container in detached mode (in the background).
*   `--gpus all`: **(Crucial for performance)** Assigns all available NVIDIA GPUs to the container. If you are on a CPU-only machine, you can remove this flag, but transcription will be very slow.
*   `-p 9000:9000`: Maps port 9000 on your host machine to port 9000 inside the container. This is how you'll access the API.
*   `-v "C:\Projects\v2v-transcripts:/data"`: This mounts your local audio directory into the container at the `/data` path. This is how the API can access your audio files. **Replace the path with the actual path to your audio files.**
*   `purton-tech/whisper-api:latest`: The name of the Docker image to use.

### Step 3: Verify the Server is Running

After a minute or two, you can verify that the server is running by opening a web browser and navigating to `http://localhost:9000/docs`. You should see the FastAPI documentation page for the Whisper API. This confirms the server is up and ready to accept requests.

## 4. How to Transcribe a File

You can now send requests to the API to transcribe your audio files. You can use a tool like Postman, Insomnia, or a simple `curl` command.

### Example using `curl`

Open a new terminal and run the following command, replacing `transcript-1.mp3` with the name of your audio file.

```bash
curl -X 'POST' \
  'http://localhost:9000/transcribe' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@/data/transcript-1.mp3;type=audio/mpeg'
```

**Explanation:**
*   We are sending a `POST` request to the `/transcribe` endpoint.
*   The `-F 'file=@/data/transcript-1.mp3...'` part tells `curl` to upload a file.
*   **Important:** The path `/data/transcript-1.mp3` is the path *inside the Docker container*, which we mapped from our local directory. You always use `/data/` as the prefix.

### Example Response

The API will respond with a JSON object containing the transcription.

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



