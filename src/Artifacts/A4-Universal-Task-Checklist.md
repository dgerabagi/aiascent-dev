# Artifact A4: aiascent.dev - Universal Task Checklist

# Date Created: C0

# Author: AI Model & Curator

# Updated on: C11 (Fix overlap issue on Anguilla page)

  - **Key/Value for A0:**
  - **Description:** A structured checklist for tracking development tasks, feedback, and bugs for the aiascent.dev project, organized by file packages and complexity.
  - **Tags:** checklist, task management, planning, roadmap

## 1. Purpose

This artifact provides a structured format for tracking development tasks for the `aiascent.dev` website. It organizes work by the group of files involved and estimates complexity (token count and cycle count) to aid in planning for AI-assisted development.

## 2. How to Use

(See M3. Interaction Schema or T17. Template - Universal Task Checklist.md for detailed usage instructions.)

-----

## Task List for Cycle 11+

## T-14: Mobile Optimization & Layout Fixes
- **Files Involved:**
    - `src/components/layout/Header.tsx`
    - `src/app/showcase/[slug]/page.tsx`
    - `src/app/dce/page.tsx`
    - `src/app/learn/page.tsx`
    - `src/app/mission/page.tsx`
    - `src/components/report-viewer/ReportViewer.tsx`
    - `src/app/anguilla/page.tsx`
- **Total Tokens:** ~2,500
- **More than one cycle?** No
- **Status:** Complete

- [x] **Task (T-ID: 14.1):** Implement Mobile "Hamburger" Menu in Header.
- [x] **Task (T-ID: 14.2):** Reduce Header height on mobile to `h-14` (3.5rem).
- [x] **Task (T-ID: 14.3):** Ensure Header background is solid on mobile to prevent visual overlap.
- [x] **Task (T-ID: 14.4):** Adjust top padding on all content pages to `pt-14 md:pt-16`.
- [x] **Task (T-ID: 14.5):** Use `dvh` (Dynamic Viewport Height) for Showcase page to handle mobile address bar.
- [x] **Task (T-ID: 14.6):** Ensure Showcase dropdown closes on selection (Fixed via `asChild` prop).
- [x] **Bug Fix (T-ID: 14.7):** Fix overlap on `/anguilla` presentation page by increasing `ReportViewer` Z-index to `z-[5000]` and adding fallback padding.

### Verification Steps
1.  Open the website on a mobile device (or dev tools mobile view).
2.  **Expected:** A hamburger menu icon appears in the top right.
3.  Click the hamburger menu.
4.  **Expected:** A dropdown menu appears with all navigation links.
5.  Navigate to `/anguilla`.
6.  **Expected:** The presentation view covers the entire screen, including the site header (due to `z-[5000]`).
7.  Press Esc or click "Exit Fullscreen" on `/anguilla`.
8.  **Expected:** The site header reappears, and the report viewer content is pushed down (due to `pt-16`), preventing overlap.

## T-15: Plan for Next Cycle
- **Files Involved:**
    - `src/Artifacts/A4-Universal-Task-Checklist.md`
- [ ] **Task (T-ID: 15.1):** Review progress, update this checklist, and prioritize tasks for the subsequent cycle.

-----

## Completed Tasks
(Previous tasks T-1 through T-13 are omitted for brevity)