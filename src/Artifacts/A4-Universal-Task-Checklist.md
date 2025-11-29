# Artifact A4: aiascent.dev - Universal Task Checklist

# Date Created: C0

# Author: AI Model & Curator

# Updated on: C8 (Refine navigation and presentation logic)

  - **Key/Value for A0:**
  - **Description:** A structured checklist for tracking development tasks, feedback, and bugs for the aiascent.dev project, organized by file packages and complexity.
  - **Tags:** checklist, task management, planning, roadmap

## 1. Purpose

This artifact provides a structured format for tracking development tasks for the `aiascent.dev` website. It organizes work by the group of files involved and estimates complexity (token count and cycle count) to aid in planning for AI-assisted development.

## 2. How to Use

(See M3. Interaction Schema or T17. Template - Universal Task Checklist.md for detailed usage instructions.)

-----

## Task List for Cycle 8+

## T-13: Enhance Navigation and Layout
- **Files Involved:**
    - `src/app/anguilla/page.tsx` (New)
    - `src/app/showcase/[slug]/page.tsx`
    - `src/components/layout/Header.tsx`
    - `src/components/global/NextPageSection.tsx`
- **Total Tokens:** ~2,500
- **More than one cycle?** No
- **Status:** In Progress

- [x] **Task (T-ID: 13.1):** Create `ProjectSelector.tsx` to replace the tab bar with a compact dropdown. (Superseded by Header dropdown)
- [x] **Task (T-ID: 13.2):** Create `ShowcaseGame.tsx` to encapsulate the iframe logic.
- [x] **Task (T-ID: 13.3):** Implement dynamic routing in `src/app/showcase/[slug]/page.tsx`.
- [x] **Task (T-ID: 13.4):** Implement auto-fullscreen and autoplay logic. (Moved to explicit `/anguilla` route)
- [x] **Task (T-ID: 13.5):** Update `src/app/showcase/page.tsx` to act as a redirect.
- [x] **Task (T-ID: 13.6):** Add bottom padding to `ReportChatPanel` to fix alignment issues.
- [x] **Task (T-ID: 13.7):** Reduce header padding in `ReportViewer` and `PageNavigator` to save vertical space.
- [x] **Task (T-ID: 13.8):** Create dedicated `/anguilla` presentation route.
- [x] **Task (T-ID: 13.9):** Move Showcase navigation to main Header dropdown.
- [x] **Task (T-ID: 13.10):** Fix spacing between ReportViewer and bottom banner.

### Verification Steps
1.  Navigate to `https://aiascent.dev/anguilla`.
2.  **Expected:** The Anguilla report loads, automatically enters fullscreen, and starts autoplaying.
3.  Navigate to `https://aiascent.dev/showcase/anguilla`.
4.  **Expected:** The Anguilla report loads normally (embedded), without auto-fullscreen.
5.  Hover over "Showcase" in the top navigation bar.
6.  **Expected:** A dropdown menu appears with options for "The Ascent Report", "Anguilla Project", and "AI Ascent Game".
7.  Check the bottom of the showcase page.
8.  **Expected:** The "Ready to Become a Citizen Architect?" banner is flush (or appropriately spaced) relative to the report viewer, without excessive white space.

## T-14: Plan for Next Cycle
- **Files Involved:**
    - `src/Artifacts/A4-Universal-Task-Checklist.md`
- [ ] **Task (T-ID: 14.1):** Review progress, update this checklist, and prioritize tasks for the subsequent cycle.

-----

## Completed Tasks
(Previous tasks T-1 through T-12 are omitted for brevity)