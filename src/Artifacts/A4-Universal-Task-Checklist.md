# Artifact A4: aiascent.dev - Universal Task Checklist

# Date Created: C0

# Author: AI Model & Curator

# Updated on: C7 (Complete Cycle 6 tasks, Add Cycle 7 tasks for navigation and layout)

  - **Key/Value for A0:**
  - **Description:** A structured checklist for tracking development tasks, feedback, and bugs for the aiascent.dev project, organized by file packages and complexity.
  - **Tags:** checklist, task management, planning, roadmap

## 1. Purpose

This artifact provides a structured format for tracking development tasks for the `aiascent.dev` website. It organizes work by the group of files involved and estimates complexity (token count and cycle count) to aid in planning for AI-assisted development.

## 2. How to Use

(See M3. Interaction Schema or T17. Template - Universal Task Checklist.md for detailed usage instructions.)

-----

## Task List for Cycle 7+

## T-13: Enhance Navigation and Layout
- **Files Involved:**
    - `src/app/showcase/[slug]/page.tsx` (New)
    - `src/app/showcase/page.tsx`
    - `src/components/showcase/ProjectSelector.tsx` (New)
    - `src/components/showcase/ShowcaseGame.tsx` (New)
    - `src/components/report-viewer/ReportChatPanel.tsx`
    - `src/components/report-viewer/ReportViewer.tsx`
- **Total Tokens:** ~4,000
- **More than one cycle?** No
- **Status:** In Progress

- [x] **Task (T-ID: 13.1):** Create `ProjectSelector.tsx` to replace the tab bar with a compact dropdown.
- [x] **Task (T-ID: 13.2):** Create `ShowcaseGame.tsx` to encapsulate the iframe logic.
- [x] **Task (T-ID: 13.3):** Implement dynamic routing in `src/app/showcase/[slug]/page.tsx`.
- [x] **Task (T-ID: 13.4):** Implement auto-fullscreen and autoplay logic for the Anguilla project slug.
- [x] **Task (T-ID: 13.5):** Update `src/app/showcase/page.tsx` to act as a redirect.
- [x] **Task (T-ID: 13.6):** Add bottom padding to `ReportChatPanel` to fix alignment issues.
- [x] **Task (T-ID: 13.7):** Reduce header padding in `ReportViewer` and `PageNavigator` to save vertical space.

### Verification Steps
1.  Navigate to `/showcase/anguilla`.
2.  **Expected:** The Anguilla report loads, automatically enters fullscreen, and starts autoplaying.
3.  Navigate to `/showcase`.
4.  **Expected:** Redirects to `/showcase/report`.
5.  Check the top-left of the showcase view.
6.  **Expected:** A "The Ascent Report" (or similar) dropdown button is visible. Clicking it allows switching to "Anguilla Project" or "AI Ascent Game".
7.  Check the bottom of the chat panel.
8.  **Expected:** The input box has sufficient clearance from the bottom edge.

## T-14: Plan for Next Cycle
- **Files Involved:**
    - `src/Artifacts/A4-Universal-Task-Checklist.md`
- [ ] **Task (T-ID: 14.1):** Review progress, update this checklist, and prioritize tasks for the subsequent cycle.

-----

## Completed Tasks
(Previous tasks T-1 through T-12 are omitted for brevity)