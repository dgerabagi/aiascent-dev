# Artifact A102: Homepage Hero Section Revamp Plan
# Date Created: C104
# Author: AI Model & Curator
# Updated on: C105 (Propose radical simplification to a 'splash image' design)

- **Key/Value for A0:**
- **Description:** A plan to revamp the homepage hero section by replacing the animated component with a more direct, impactful 'splash image' design to better showcase the 'Citizen Architect' brand.
- **Tags:** page design, home page, hero section, plan, marketing, content, image prompts, redesign

## 1. Problem Statement

The current homepage hero section, while technically impressive, is not effectively communicating the core brand identity of the "Citizen Architect." The animated `ContainerScroll` component is designed for a neutral, looping visual (`pcp.gif`), but our new marketing images (e.g., `master_of_realms.webp`) are powerful, self-contained statements that include their own titles and branding. Attempts to simply swap these assets have resulted in a confusing user experience with duplicated text and a disjointed message.

The core problem is a mismatch between the component's purpose and the asset's purpose. We are trying to fit a "movie poster" into a "picture frame."

## 2. Proposed Solution: A Radically Simpler, More Impactful Design

The solution is to redesign the hero section to embrace the power of the new marketing assets. We will move away from the complex animation and adopt a more direct, confident, and visually stunning "splash image" or "hero banner" design.

This approach will:
*   **Create a Powerful First Impression:** Use a full-bleed background image to immediately establish the aspirational, futuristic "Citizen Architect" aesthetic.
*   **Solve the Text Conflict:** By using the marketing image as a background, the text already present on the image becomes a natural part of the design, and we can place our website's unique value proposition over it without conflict.
*   **Clarify the Message:** This design allows us to clearly separate the brand identity (communicated by the image) from the core value proposition (communicated by the overlaid text).

## 3. Visual & Layout Plan

*   **Primary Visual:** The hero section will be a full-viewport-height container. The background will be the `master_of_realms.webp` image, scaled to cover the entire area.
*   **Text Overlay:**
    *   A subtle, dark gradient overlay will be applied on top of the image to ensure that the white text is perfectly readable.
    *   The existing headline and sub-headline will be centered and overlaid on the image. Their content is already aligned with the new "vibe code for free" messaging and complements the "Citizen Architect" title in the image.
*   **Call-to-Action Buttons:** The "Explore the Showcase" and "Download Now" buttons will be positioned below the sub-headline, remaining the primary interactive elements.

## 4. Implementation Plan

1.  **Modify `src/components/home/HeroSection.tsx`:**
    *   Remove the `<ContainerScroll>` component and its associated imports entirely.
    *   The root element will be a `<section>` styled to be `h-screen`, `relative`, with the `master_of_realms.webp` image as a background (`bg-cover`, `bg-center`).
    *   Add a `div` for the dark overlay (e.g., `absolute inset-0 bg-black/50`).
    *   Create a central `div` to contain the `h1` headline, `p` sub-headline, and the CTA buttons. This container will use flexbox to center its content both vertically and horizontally.
    *   Adjust typography (font size, color, shadow) as needed to ensure perfect readability and visual impact against the new background.
2.  **Asset:** The existing `/assets/images/master_of_realms.webp` will be used.