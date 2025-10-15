# Artifact A46: Whisper Transcription Setup Guide
# Date Created: C55
# Author: AI Model & Curator
# Updated on: C61 (Add PowerShell command for downloading models)
# Updated on: C60 (Pivot to whisper.cpp for CPU/AMD users and add hardware compatibility section)
# Updated on: C59 (Add link to new CUDA on WSL guide)
# Updated on: C58 (Add GPU/WSL troubleshooting guide and simplify transcription workflow)

- **Key/Value for A0:**
- **Description:** A technical guide detailing simple, Docker-based setups for using OpenAI's Whisper to transcribe audio recordings, with options for both NVIDIA GPUs and general-purpose CPUs.
- **Tags:** guide, setup, whisper, transcription, docker, audio processing, cpu, amd, nvidia, powershell

## 1. Overview & Goal

To build our training curriculum from recorded 1-on-1 sessions, we need an efficient and reliable way to transcribe audio files into text. You requested a simple, Docker-based solution.

This guide provides step-by-step processes for running a powerful Whisper model via Docker that exposes a simple API for programmatic transcription. We offer two primary paths based on your hardware.

---

## 2. Hardware Compatibility: Which Path Should You Choose?

The performance of Whisper is highly dependent on your computer's hardware, specifically the Graphics Processing Unit (GPU).

*   **Path A: For NVIDIA GPUs (High Performance):** If you have a modern NVIDIA GPU (RTX 20-series or newer), the `insanely-fast-whisper-api` provides the best performance by leveraging NVIDIA's CUDA technology and optimizations like FlashAttention 2. Choose this path for the fastest possible transcription speeds.

*   **Path B: For AMD GPUs or CPU-Only (Recommended for Compatibility):** If you have an AMD GPU, an Intel GPU, or do not have a powerful dedicated GPU, this is the recommended path. We will use a Docker image based on **`whisper.cpp`**, a highly efficient C++ port of Whisper that runs exceptionally well on CPUs. This method is slower than the dedicated NVIDIA path but is far more compatible and reliable across different types of hardware.

---

## 3. Path B: CPU-Based Transcription with whisper.cpp (Recommended for AMD/CPU)

This solution is hardware-agnostic and provides excellent performance on a CPU.

### Step 1: Create a Directory for Models

On your local machine, create a directory where you will store the downloaded Whisper model files. For this guide, we'll assume you create it at `C:\Projects\v2v-transcripts\models`.

### Step 2: Download the Whisper Model

Next, download the pre-converted `ggml` model file. We recommend the `large-v3` model for the best balance of accuracy. Open a terminal and run the command that matches your environment.

**For PowerShell (Windows):**
In PowerShell, `curl` is an alias for `Invoke-WebRequest`, which uses different parameters. Use this command:
```powershell
# Ensure you are in the C:\Projects\v2v-transcripts directory
Invoke-WebRequest -Uri "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3.bin" -OutFile "./models/ggml-large-v3.bin"
```

**For Bash (Linux, macOS, WSL):**
```bash
# Ensure you are in your project directory
# This command downloads the file into a 'models' subdirectory
curl -L -o ./models/ggml-large-v3.bin https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3.bin
```

### Step 3: Run the whisper.cpp Docker Container

Now, run the Docker container. This command will start the `whisper.cpp` server, making it accessible on your machine.

```bash
docker run -d -p 8080:8080 -v "C:\Projects\v2v-transcripts\audio-to-process:/data" -v "C:\Projects\v2v-transcripts\models:/models" ghcr.io/ggerganov/whisper.cpp:main ./server -m /models/ggml-large-v3.bin --host 0.0.0.0 --port 8080
```

Let's break down this command:
*   `-d`: Runs the container in the background.
*   `-p 8080:8080`: Maps port 8080 on your machine to port 8080 in the container.
*   `-v "C:\...\audio-to-process:/data"`: Mounts your audio files directory into the container at `/data`. **Replace the path with your actual audio directory.**
*   `-v "C:\...\models:/models"`: Mounts your models directory into the container at `/models`. **Replace the path with your actual models directory.**
*   `ghcr.io/ggerganov/whisper.cpp:main`: The official Docker image for `whisper.cpp`.
*   `./server ...`: This is the command that runs *inside* the container. It starts the web server, tells it which model file to load (`-m /models/...`), and to listen on all network interfaces inside the container (`--host 0.0.0.0`).

### Step 4: Transcribe a File

You can now send a `POST` request to the `/inference` endpoint to transcribe a file. Open a new terminal and use `curl`.

```bash
curl --request POST \
  --url http://localhost:8080/inference \
  -H "Content-Type: multipart/form-data" \
  -F "file=@/data/your-audio-file.mp3"
```

**Explanation:**
*   The path `@/data/your-audio-file.mp3` refers to the file's location *inside the container*. You must use the `/data/` prefix.
*   The server will process the file and return a JSON object containing the transcription.

---

## 4. Path A: GPU-Accelerated Transcription with `insanely-fast-whisper-api` (NVIDIA Only)

Use this path only if you have a compatible NVIDIA GPU.

### Step 1: Run the Whisper API Docker Container

```bash
docker run -d --gpus all -p 9000:9000 -v "C:\Projects\v2v-transcripts\audio-to-process:/data" yoeven/insanely-fast-whisper-api:latest
```
*   `--gpus all`: **(Crucial for performance)** Assigns all available NVIDIA GPUs to the container. If you encounter errors, see the Troubleshooting section below.
*   `-p 9000:9000`: Maps port 9000 on your host machine to port 9000 inside the container.
*   `-v "C:\...:/data"`: Mounts your local audio directory into the container at the `/data` path.

### Step 2: Transcribe a File

```bash
curl -X 'POST' \
  'http://localhost:9000/transcribe' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@/data/your-audio-file.mp3;type=audio/mpeg'
```

### Step 3: Troubleshooting NVIDIA GPU Issues

If you are using Windows with WSL 2 and encounter errors like `docker: Error response from daemon: could not select device driver "" with capabilities: [[gpu]]`, it means Docker cannot access your GPU. For a comprehensive solution, refer to the dedicated guide: **`A48 - NVIDIA CUDA on WSL Setup Guide.md`**.