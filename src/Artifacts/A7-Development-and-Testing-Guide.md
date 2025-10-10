# Artifact A7: aiascent.dev - Development and Testing Guide
# Date Created: C0
# Author: AI Model & Curator

  - **Key/Value for A0:**
  - **Description:** A guide providing the standard procedure for running, debugging, and testing the aiascent.dev Next.js website locally.
  - **Tags:** documentation, project setup, development, testing, nextjs, workflow

## 1. Purpose

This guide provides the standard procedure for running, debugging, and testing the **aiascent.dev** application locally.

## 2. Development Workflow

### Step 1: Install Dependencies

Ensure all project dependencies are installed. Navigate to the project root directory in your terminal and run:

```bash
npm install
# or if using yarn
# yarn install
```

### Step 2: Start the Development Server

To compile the code and start the Next.js development server with hot-reloading, run the following command:

```bash
npm run dev
```

### Step 3: Running the Application

Once the development server is running, it will typically be available at `http://localhost:3000`. Open this URL in your web browser to view the application. The server will automatically refresh the page when you save changes to the source files.

### Step 4: Debugging

Debugging is primarily done using the browser's developer tools (DevTools).

  - **Client-Side Debugging:** Open DevTools (F12 or right-click -> Inspect) and navigate to the "Console" tab for logs or the "Sources" (Chrome/Edge) / "Debugger" (Firefox) tab to set breakpoints directly in the TypeScript source code (thanks to source maps).
  - **React State:** Install the React Developer Tools browser extension to inspect component state and props.

## 3. Testing

The project will be configured with a testing framework (e.g., Jest and React Testing Library) as development progresses. To run the test suite, use the following command:

```bash
npm run test
```

This will execute all test files located in the project and report the results to the console.

## 4. Building for Production

To create an optimized production build of the application, run:

```bash
npm run build
```

This generates the necessary files for deployment. You can then run the production build locally using:

```bash
npm run start