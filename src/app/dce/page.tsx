'use client';
// src/app/dce/page.tsx
import React from 'react';
import MissionSectionBlock from '@/components/mission/MissionSectionBlock';
import NextPageSection from '@/components/global/NextPageSection';

const DCEPage = () => {
    return (
        <div className="bg-background text-foreground min-h-screen pt-16">
            <div className="container mx-auto px-4 py-16">
                <section className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground pb-4">
                        The Data Curation Environment
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mt-4">
                        A suite of integrated tools for VS Code designed to revolutionize the human-AI development workflow.
                    </p>
                </section>

                <div className="flex flex-col gap-24">
                    <MissionSectionBlock
                        title="Precision Context Curation"
                        tldr="Stop manual copy-pasting. The DCE's File Tree View provides an intuitive, visual way to select the exact files, folders, and documents needed for your AI prompts directly within VS Code."
                        content="The foundation of a high-quality AI response is high-quality context. The DCE eliminates the error-prone process of manually managing file lists or copy-pasting code into a prompt. With the integrated File Tree View, you can browse your entire workspace and select the precise 'source of truth' for your task with simple checkboxes. This curated selection is then automatically flattened into a single context file, ensuring the AI has exactly what it needs, and nothing it doesn't."
                        images={['dce-feature-curation.gif']} // Placeholder
                        imagePath="features/" // Placeholder
                        imagePrompt="A short, looping GIF showing a user's mouse clicking checkboxes next to files and folders in the DCE File Tree View panel, followed by the 'Flatten Context' button being clicked."
                        imageSide="left"
                    />

                    <MissionSectionBlock
                        title="Parallel AI Scrutiny"
                        tldr="Don't rely on a single AI response. The Parallel Co-Pilot Panel allows you to compare multiple solutions side-by-side, with an integrated diff viewer to instantly spot the differences."
                        content="AI models are non-deterministic. A single prompt can yield multiple, viable solutions. The Parallel Co-Pilot Panel is designed for this reality. Paste in several responses from your AI, and the DCE will parse them into separate, color-coded tabs. You can instantly compare the proposed changes for each file and use the built-in diff viewer to understand the nuances of each solution before deciding which one to accept."
                        images={['dce-feature-parallel-copilot.gif']} // Placeholder
                        imagePath="features/" // Placeholder
                        imagePrompt="A GIF showing the Parallel Co-Pilot Panel with multiple tabs. The user clicks between 'Resp 1' and 'Resp 2', and the file content below updates, with the integrated diff view highlighting the changes."
                        imageSide="right"
                    />

                    <MissionSectionBlock
                        title="Iterative Knowledge Graph"
                        tldr="AI collaboration shouldn't be ephemeral. The DCE captures the entire development process—prompts, responses, and decisions—as an iterative, auditable history you can navigate."
                        content="Every development cycle in the DCE is saved, creating a persistent knowledge graph of your project's evolution. The Cycle History view allows you to step back in time, review the exact context used for a previous prompt, see all the AI responses that were generated, and understand why a particular solution was chosen. This turns your development process into a valuable, shareable asset for training, onboarding, and after-action reviews."
                        images={['dce-feature-cycles.gif']} // Placeholder
                        imagePath="features/" // Placeholder
                        imagePrompt="A GIF showing the user clicking the back and forward arrows in the 'Cycle History' view, with the cycle title, context, and response tabs all updating to reflect the historical state."
                        imageSide="left"
                    />
                </div>

                <NextPageSection
                    buttonText="See The Showcase"
                    href="/showcase"
                    title="Ready to See It in Action?"
                    description="Explore our showcase to see a complex, interactive report built entirely with the Data Curation Environment."
                />

            </div>
        </div>
    );
};

export default DCEPage;