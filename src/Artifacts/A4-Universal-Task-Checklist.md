# Artifact A4: aiascent.dev - Universal Task Checklist

# Date Created: C0

# Author: AI Model & Curator

# Updated on: C11 (Add tasks for visual fixes and feature implementation)

  - **Key/Value for A0:**
  - **Description:** A structured checklist for tracking development tasks, feedback, and bugs for the aiascent.dev project, organized by file packages and complexity.
  - **Tags:** checklist, task management, planning, roadmap

## 1. Purpose

This artifact provides a structured format for tracking development tasks for the `aiascent.dev` website. It organizes work by the group of files involved and estimates complexity (token count and cycle count) to aid in planning for AI-assisted development.

## 2. How to Use

(See M3. Interaction Schema or T17. Template - Universal Task Checklist.md for detailed usage instructions.)

-----

## Task List for Cycle 11+

## T-7: Fix Hero Section GIF Styling
- **Files Involved:**
    - `src/components/home/HeroSection.tsx`
    - `src/components/global/container-scroll-animation.tsx`
- **Total Tokens:** ~1,500
- **More than one cycle?** No
- **Status:** To Do

- [ ] **Task (T-ID: 7.1):** In `container-scroll-animation.tsx`, remove the `bg-gray-100` from the inner `div` of the `Card` component to eliminate the white border around the GIF.
- [ ] **Task (T-ID: 7.2):** In `HeroSection.tsx`, adjust the styling of the `Image` component and its container to make the `pcp.gif` larger, filling more of the "monitor" frame to improve visibility of details.

### Verification Steps
1.  Load the homepage.
2.  **Expected:** The `pcp.gif` in the hero section should not have a white border. It should be noticeably larger and more detailed.

## T-8: Implement Light Mode Theme
- **Files Involved:**
    - `src/app/globals.css`
    - `tailwind.config.ts`
    - `src/components/home/FeaturesSection.tsx`
    - `src/components/home/WorkflowSection.tsx`
    - `src/components/global/lamp.tsx`
- **Total Tokens:** ~5,000
- **More than one cycle?** No
- **Status:** To Do

- [ ] **Task (T-ID: 8.1):** In `globals.css`, define a new `:root` block with CSS variables for a complete light theme palette (backgrounds, foregrounds, cards, etc.).
- [ ] **Task (T-ID: 8.2):** Apply `light:` variants in `FeaturesSection.tsx` and `WorkflowSection.tsx` to fix text visibility and border colors.
- [ ] **Task (T-ID: 8.3):** In `lamp.tsx`, use `light:` variants to change the background color, gradient colors, and particle colors to be suitable for a light background.

### Verification Steps
1.  Toggle the theme to "Light".
2.  **Expected:** All text should be clearly readable. The image borders in the features section should be subtle. The workflow steps should be visible. The mission section's background, lamp effect, and particles should be aesthetically pleasing on a light theme.

## T-9: Implement Mission Page
- **Files Involved:**
    - `src/app/mission/page.tsx` (New)
- **Total Tokens:** ~1,500
- **More than one cycle?** No
- **Status:** To Do

- [ ] **Task (T-ID: 9.1):** Create the `page.tsx` file for the `/mission` route.
- [ ] **Task (T-ID: 9.2):** Implement the page layout and content based on `A19-Page-Design-Mission.md` and the user's narrative about "cognitive apprenticeship", "fissured workplace", and the "solarpunk" vision.

### Verification Steps
1.  Navigate to `/mission`.
2.  **Expected:** The page should load without a 404 error and display the new content.

## T-10: Port Report Viewer to Showcase Page
- **Files Involved:**
    - `src/app/showcase/page.tsx`
    - `src/components/report-viewer/*` (New)
    - `src/stores/reportStore.ts` (New)
    - `package.json`
- **Total Tokens:** ~20,000+
- **More than one cycle?** Yes
- **Status:** To Do

- [ ] **Task (T-ID: 10.1):** Create `src/components/report-viewer/` and `src/stores/` directories.
- [ ] **Task (T-ID: 10.2):** Copy all component files and the store file from the `context/aiascentgame/report/` directory.
- [ ] **Task (T-ID: 10.3):** Add `react-icons` to `package.json`.
- [ ] **Task (T-ID: 10.4):** Begin adapting the ported files, fixing imports and preparing for integration into the `/showcase` page.
- [ ] **Task (T-ID: 10.5):** (Curator Task) Place `reportContent.json` into `public/data/ai_ascent_report.json` and place report images into `public/assets/images/report/`.

### Verification Steps
1.  The project should build successfully after adding the new files.
2.  The `/showcase` page should render a placeholder for the upcoming component.

## T-11: Create Learn Page Shell
- **Files Involved:**
    - `src/app/learn/page.tsx` (New)
- **Total Tokens:** ~500
- **More than one cycle?** No
- **Status:** To Do

- [ ] **Task (T-ID: 11.1):** Create the `page.tsx` file for the `/learn` route with placeholder content to resolve the 404 error.

### Verification Steps
1.  Navigate to `/learn`.
2.  **Expected:** The page should load without a 404 error.

## T-12: Plan for Next Cycle
- **Files Involved:**
    - `src/Artifacts/A4-Universal-Task-Checklist.md`
- [ ] **Task (T-ID: 12.1):** Review progress, update this checklist, and prioritize tasks for the subsequent cycle.

-----

## Completed Tasks
(Previous tasks T-1 through T-6 are omitted for brevity)