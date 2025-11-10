'use client';
// src/components/home/FeaturesSection.tsx
// C107: Pass `interactionType="zoom"` to restore hover effect.
// C106: Refactored to use MissionSectionBlock for large images instead of icons.
import React from 'react';
import MissionSectionBlock from '@/components/mission/MissionSectionBlock';

const features = [
    {
        title: "Precision Context Curation",
        tldr: "Stop manual copy-pasting. DCE provides an intuitive, visual way to select and manage the exact files needed for your AI prompts directly within VS Code.",
        content: "The foundation of a high-quality AI response is high-quality context. The DCE eliminates the error-prone process of manually managing file lists or copy-pasting code into a prompt. With the integrated File Tree View, you can browse your entire workspace and select the precise 'source of truth' for your task with simple checkboxes. This curated selection is then automatically flattened into a single context file, ensuring the AI has exactly what it needs, and nothing it doesn't.",
        imagePath: 'how-it-works/',
        imagePrompt: 'A hyper-realistic, cinematic image of a Citizen Architect interacting with a holographic file management interface. They are using simple checkboxes to select various file types (PDF, code, spreadsheets). A clean, precise beam of light, representing the curated context, flows from the selected files towards a destination labeled "Precision In, Perfection Out: The Art of Curation." The aesthetic is futuristic, clean, and aligned with the "Citizen Architect" style.',
        images: ['curation.webp'],
        imageSide: 'left',
    },
    {
        title: "Parallel Co-Pilot & Rapid Testing",
        tldr: "Don't rely on a single AI response. Compare multiple solutions side-by-side and use the Git-integrated testing workflow to safely audition code changes in seconds.",
        content: "AI models are non-deterministic. A single prompt can yield multiple, viable solutions. The Parallel Co-Pilot Panel is designed for this reality. Paste in several responses from your AI, and the DCE will parse them into separate tabs. You can instantly compare the proposed changes for each file and use the built-in diff viewer to understand the nuances of each solution before deciding which one to accept.",
        imagePath: 'how-it-works/',
        imagePrompt: 'A hyper-realistic, cinematic image of a Citizen Architect standing before a large, futuristic touch-screen panel labeled "DCE\'s Parallel Co-Pilot Panel." The panel displays three different AI-generated solutions (A, B, C) side-by-side with an "Integrated Diff Viewer" highlighting the changes. The operator is comparing the solutions before committing, illustrating a "Rapid, Low-Risk Iteration Loop." The aesthetic is futuristic, clean, and aligned with the "Citizen Architect" style.',
        images: ['parallel-copilot.webp'],
        imageSide: 'right',
    },
    {
        title: "Iterative Knowledge Graph",
        tldr: "AI collaboration shouldn't be ephemeral. DCE captures the entire development process—prompts, responses, and decisions—as an iterative, auditable knowledge graph.",
        content: "Every development cycle in the DCE is saved, creating a persistent knowledge graph of your project's evolution. The Cycle History view allows you to step back in time, review the exact context used for a previous prompt, see all the AI responses that were generated, and understand why a particular solution was chosen. This turns your development process into a valuable, shareable asset for training, onboarding, and after-action reviews.",
        imagePath: 'how-it-works/',
        imagePrompt: 'A hyper-realistic, cinematic image of a Citizen Architect standing in a vast, modern library-like space, representing "The Architecture of Institutional Memory." They are interacting with a "Cycle Navigator" to explore a massive, glowing "Persistent Knowledge Graph." Each node in the graph is a "CAPTURED CYCLE" containing the curated context, user intent, and AI solutions for a step in the project\'s history. The aesthetic is futuristic, clean, and aligned with the "Citizen Architect" style.',
        images: ['knowledge-graph.webp'],
        imageSide: 'left',
    },
];

const FeaturesSection = () => {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-24 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 light:from-black light:to-neutral-700 pb-4">
                    Stop Fighting Your Tools. Start Building the Future.
                </h2>
                <div className="space-y-20">
                    {features.map((feature, index) => (
                        <MissionSectionBlock
                            key={index}
                            title={feature.title}
                            tldr={feature.tldr}
                            content={feature.content}
                            imageSide={feature.imageSide as 'left' | 'right'}
                            imagePath={feature.imagePath}
                            imagePrompt={feature.imagePrompt}
                            images={feature.images}
                            interactionType="zoom" // C107: Use zoom hover effect
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;