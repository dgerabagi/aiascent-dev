# Artifact A102: Homepage Hero Section Revamp Plan
# Date Created: C104
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A plan to revamp the homepage hero section to better communicate the core value proposition of the Data Curation Environment (DCE), focusing on the "vibe code for free" message and introducing new, more aspirational imagery.
- **Tags:** page design, home page, hero section, plan, marketing, content, image prompts

## 1. Overview and Goal

The current homepage hero section is effective but "buries the lead." The most compelling value proposition for a new developer is that the Data Curation Environment (DCE) is a **free tool** that enables them to leverage other powerful, **free AI services** (like Google's AI Studio) to build complex projects. This "vibe code for free" angle is a powerful hook that needs to be front and center.

The goal of this plan is to redesign the content and visuals of the hero section to immediately and clearly communicate this message, making the value proposition irresistible to our target audience.

## 2. Proposed Content Changes

The new copy will be more direct, benefit-oriented, and will speak to the common pain point of expensive AI tools.

### New Headline:
*   **Headline:**
    > Vibe Code for Free. Ship Real Projects.
*   **Sub-headline:**
    > Stop paying for expensive AI assistants. The Data Curation Environment (DCE) is the only tool you need to package your entire VS Code project for Google's free AI Studio, unlocking powerful, unlimited AI collaboration.

## 3. Proposed Visual Changes

The current `pcp.gif` is a good demonstration but is not as aspirational as it could be. We will replace it with a stunning, high-quality static image that captures the essence of the "Citizen Architect" empowered by AI. The aesthetic will be consistent with the successful "Young Precocious" persona visuals—cinematic, futuristic, and solarpunk-inspired.

### New Hero Image Concept

A single, wide-angle cinematic shot depicting the male and female Citizen Architect characters collaborating in a futuristic, solarpunk-style command center. They are not just coding; they are orchestrating.

*   **Scene:** A sleek, minimalist command center with large, floor-to-ceiling windows overlooking a futuristic, green city at dusk.
*   **Action:** The two Citizen Architects stand before a massive, holographic interface. They are using gestures to manipulate and connect glowing data streams and code blocks, assembling a complex digital structure. The interface is a beautiful, abstract representation of the DCE workflow.
*   **Aesthetic:** The image should feel powerful, optimistic, and inspiring. It should sell the *feeling* of being in complete control, effortlessly bringing a complex vision to life with an AI partner.

### Image Generation Prompts

These prompts should be used with the `A15.1 Master Image Generation System Prompt`.

#### **Prompt 1: The Command Center (Primary)**
*   **Asset Name:** `AS-08_hero_main.webp`
*   **Prompt:** A hyper-realistic, cinematic, 16:9 wide-angle shot of a male and female 'Citizen Architect' collaborating in a futuristic, solarpunk-inspired command center at dusk. They stand side-by-side before a massive, floating holographic interface, using hand gestures to orchestrate the assembly of a complex digital architecture from glowing blue and cyan data streams. The environment is minimalist and clean, with large windows showing a lush, green futuristic city skyline. The lighting is dramatic, with the primary light coming from the glowing interface, casting a cool light on their focused expressions. The image should convey a sense of power, effortless control, and optimistic creation. The aesthetic is sophisticated, futuristic minimalism.

#### **Prompt 2: The Architect's Vision (Alternate)**
*   **Asset Name:** `AS-09_hero_alternate.webp`
*   **Prompt:** A hyper-realistic, cinematic, 16:9 medium shot focusing on the female Citizen Architect. She is looking directly at the camera with a confident, knowing smile. With one hand, she is touching a floating, glowing spiral icon (the DCE logo). From the icon, a beautiful and complex holographic blueprint of a futuristic city unfolds around her, demonstrating that she holds the power to create worlds at her fingertips. The background is a dark, minimalist command center, with the male architect visible but out of focus, working at another console. The lighting is soft and focused on her, highlighting her as the central creative force.

## 4. Implementation Plan

1.  **Generate New Assets:** The curator will use the prompts above to generate the new hero images.
2.  **Update `HeroSection.tsx`:**
    *   Replace the headline and subheadline with the new copy.
    *   Replace the `ContainerScroll` component and the `pcp.gif` with a simpler, more direct `Image` component that displays the new static hero image (`AS-08_hero_main.webp`).
    *   Ensure the new image is styled to be the central, impactful visual of the hero section.