# aiascent.dev - Home of the Data Curation Environment

![AIAscent.dev OG Image](public/assets/images/og-image.webp)

## 1. Overview

Welcome to the official repository for **aiascent.dev**, the promotional and educational website for the **Data Curation Environment (DCE)**, a VS Code extension designed to revolutionize the human-AI development workflow.

This website serves two primary purposes:
1.  **To Explain:** It clearly articulates the value proposition of the DCE, the "Citizen Architect" methodology, and the strategic importance of mastering AI-assisted development.
2.  **To Demonstrate:** It is a living testament to the power of the DCE. The complex, interactive components of this website, including the report viewers, were themselves built using the DCE.

The project is live at [https://aiascent.dev](https://aiascent.dev).

## 2. Core Technologies

This project is built with a modern, performant, and developer-friendly technology stack:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/), [Framer Motion](https://www.framer.com/motion/) for animations.
*   **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
*   **AI Integration (RAG):** The "Ask @Ascentia" feature uses a custom Retrieval-Augmented Generation (RAG) backend built with [Faiss-node](https://github.com/facebookresearch/faiss) for vector search, demonstrating how to integrate local LLMs.

## 3. Getting Started Locally

To run this project on your local machine, follow these steps.

### 3.1. Prerequisites

*   Node.js (v18.x or later recommended)
*   npm or yarn

### 3.2. Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dgerabagi/aiascent-dev.git
    cd aiascent-dev
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### 3.3. Running the Development Server

1.  **Start the server:**
    ```bash
    npm run dev
    ```

2.  **Open your browser:** Navigate to [http://localhost:3000](http://localhost:3000).

The site should now be running in development mode with hot-reloading enabled.

## 4. Project Structure

The project follows the standard Next.js App Router structure:

```
.
├── public/                 # Static assets (images, fonts, data files)
│   ├── assets/
│   ├── data/
│   └── downloads/
├── src/
│   ├── app/                # Next.js App Router pages and API routes
│   ├── components/         # Reusable React components
│   ├── stores/             # Zustand state management stores
│   ├── lib/                # Utility functions
│   ├── providers/          # React Context providers
│   └── Artifacts/          # Project documentation and planning files (DCE)
├── README.md               # This file
└── ... (config files)
```

## 5. The Data Curation Environment (DCE)

This project is deeply integrated with the DCE workflow. The `src/Artifacts/` directory contains all the planning documents, design blueprints, and strategic memos that guided the AI-assisted development of this website. This repository serves as a real-world example of the "Documentation First" principle in action.

To learn more about the DCE, visit the [official repository](https://github.com/dgerabagi/data-curation-environment).

---
*This README was generated with the assistance of the Data Curation Environment.*