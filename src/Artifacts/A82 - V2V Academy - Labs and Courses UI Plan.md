# Artifact A82: V2V Academy - Labs and Courses UI Plan
# Date Created: C93
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A plan to update the `/academy` page to include a new section for hands-on labs, separating them from the theoretical V2V curriculum lessons.
- **Tags:** v2v, curriculum, labs, page design, plan, ui, ux

## 1. Overview and Goal

The V2V Academy is expanding to include practical, hands-on labs in addition to the existing theoretical lessons. To accommodate this, the `/academy` page needs to be updated to present both types of content clearly to the user.

The goal of this plan is to refactor the `/academy` page to include two distinct sections: one for the "V2V Pathway" (the existing lessons) and a new one for "Labs & Projects." This will improve the organization and navigation of the academy's offerings.

## 2. User Flow

1.  **Navigation:** The user navigates to `/academy`.
2.  **View Content:** The user now sees two clear sections on the page:
    *   A top section titled "The V2V Pathway," which contains the existing persona-selector for the core curriculum.
    *   A new section below it titled "Labs & Projects," which contains a series of cards, one for each available lab.
3.  **Select a Lab:** The user clicks on the "Lab 1: Your First Portfolio" card.
4.  **Start Lab:** The user is taken to the interactive report viewer, which loads the content for the selected lab.

## 3. Technical Implementation Plan

### 3.1. `src/app/academy/page.tsx` Refactor

*   The main page component will be restructured to render two distinct sections.
*   The existing `PersonaSelector` will be wrapped in a new container with the headline "The V2V Pathway."
*   A new container will be created below it with the headline "Labs & Projects."
*   Inside this new container, we will render a grid of `Card` components.
*   The first card will be for "Lab 1: Your First Portfolio." Clicking this card will set the state to load the lab content (e.g., `setSelectedLab('lab_1_portfolio')`).
*   The component's `useEffect` hook will be updated to handle loading both persona-based curricula and lab-based content.

### 3.2. New Lab Data Files

*   To support the new lab, a new set of data files will be created, following the existing convention:
    *   `public/data/v2v_content_lab_1_portfolio.json` (This will be based on the content from `A81`).
    *   `public/data/imagemanifest_lab_1_portfolio.json` (This will define the paths to the screenshot images for the lab).

### 3.3. State Management (`/academy/page.tsx`)

*   The state management on the page will be enhanced to differentiate between selecting a persona and selecting a lab.
    ```typescript
    const [selectionType, setSelectionType] = useState<'persona' | 'lab' | null>(null);
    const [selectionId, setSelectionId] = useState<string | null>(null);
    ```
*   Clicking a persona card would set `selectionType` to `'persona'` and `selectionId` to `'career_transitioner'`.
*   Clicking a lab card would set `selectionType` to `'lab'` and `selectionId` to `'lab_1_portfolio'`.
*   The `useEffect` hook would then use these state variables to fetch the correct JSON files.