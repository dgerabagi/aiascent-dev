// src/app/mission/page.tsx
import React from 'react';
import MissionSectionBlock from '@/components/mission/MissionSectionBlock';

const MissionPage = () => {
    return (
        <div className="bg-background text-foreground min-h-screen pt-16">
            <div className="container mx-auto px-4 py-16">
                <section className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground pb-4">
                        The Mission
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mt-4">
                        Beyond a tool, the Data Curation Environment represents a strategic vision for a decentralized, empowered, and secure technological future.
                    </p>
                </section>

                <div className="flex flex-col gap-24">
                    <MissionSectionBlock
                        title="The Strategic Imperative: Cognitive Capital"
                        tldr="In the AI era, a nation's most valuable strategic asset is the collective problem-solving capacity of its people."
                        content="Cognitive Capital is the intellectual capacity, skill, and creative potential of a workforce, a population, or a society. In an age where AI can automate routine tasks, this collective ability to solve novel problems, innovate under pressure, and adapt to new challenges becomes the primary engine of economic prosperity and national security. It is the raw material from which innovation and resilience are forged. One company or nation may have more workers, but another may possess vastly more Cognitive Capital. Our mission is to build the tools that cultivate this essential resource, empowering a new class of 'Citizen Architects' who can leverage AI to amplify their innate problem-solving abilities and build a better future."
                        images={[
                            'the-citizen-architect-has-arrived-p1-img-1.webp',
                            'the-citizen-architect-has-arrived-p1-img-5.webp',
                            'the-citizen-architect-has-arrived-p1-img-9.webp',
                        ]}
                        imagePath="part-i-the-proof/section-1-the-hook/the-citizen-architect-has-arrived/prompt-1/"
                        imagePrompt="A single individual is shown orchestrating a swarm of small, glowing AI bots to construct a complex and beautiful digital structure..."
                        imageSide="left"
                    />

                    <MissionSectionBlock
                        title="The Fissured Workplace"
                        tldr="The current Western AI labor model is a strategic vulnerability, creating an unstable foundation for our most critical technology."
                        content="The AI supply chain is a masterclass in obfuscation, deliberately fractured to distance valuable tech companies from the human labor that makes their products possible. This labyrinthine structure is not an accident; it is a design choice intended to suppress wages, prevent worker organization, and shed legal and ethical liability. In stark contrast, coherent competitors are professionalizing their data workforce, treating human capital as a core national asset. This creates a profound strategic asymmetry that a laissez-faire approach cannot counter."
                        images={[
                            'the-fissured-workplace-p1-img-1.webp',
                            'the-fissured-workplace-p1-img-7.webp',
                            'the-fissured-workplace-p1-img-11.webp',
                        ]}
                        imagePath="introduction/the-fissured-workplace/prompt-1/"
                        imagePrompt="An architectural blueprint of a corporation. At the top is a solid, gleaming headquarters. Below it, the structure fractures into multiple, disconnected layers..."
                        imageSide="right"
                    />

                    <MissionSectionBlock
                        title="Our Strategy: Cognitive Apprenticeship"
                        tldr="Our answer is not to imitate authoritarian control, but to unleash decentralized expertise through a model where AI serves as a tireless mentor."
                        content="We believe in **Cognitive Apprenticeship**—a model where AI serves as a tireless mentor, guiding individuals from intuitive 'vibe coding' to architectural mastery. The Data Curation Environment (DCE) is the foundational tool for this new relationship, making the invisible 'hidden curriculum' of expert thinking visible and learnable."
                        images={[
                            'the-pedagogical-engine-cam-p1-img-1.webp',
                            'the-pedagogical-engine-cam-p1-img-6.webp',
                            'the-pedagogical-engine-cam-p1-img-12.webp',
                        ]}
                        imagePath="part-v-the-american-counter-strategy/from-vibecoding-to-virtuosity/the-pedagogical-engine-cam/prompt-1/"
                        imagePrompt="An expert DCIA (human) is working alongside an apprentice. The expert's thought process is visualized as a glowing, structured blueprint ('The Hidden Curriculum')..."
                        imageSide="left"
                    />

                    <MissionSectionBlock
                        title="The Role of the DCE: The Essential Toolkit"
                        tldr="The DCE is more than a productivity tool; it's the infrastructure for the Citizen Architect."
                        content="The DCE provides the structured workflow, precision context curation, and rapid testing capabilities needed for a decentralized community of creators to build the future. We are creating a community of 'solarpunk prime' developers, the original vibe coders, sharing discoveries to build a better, more resilient digital world."
                        images={[
                            'the-new-creative-partnership-p1-img-1.webp',
                            'the-new-creative-partnership-p1-img-8.webp',
                            'the-new-creative-partnership-p1-img-15.webp',
                        ]}
                        imagePath="part-i-the-proof/section-2-the-origin/the-new-creative-partnership/prompt-1/"
                        imagePrompt="A hyper-realistic, solarpunk cinematic image of a developer... sitting cross-legged on a vast, glowing digital floor... thoughtfully placing one of these blocks into a complex, half-finished digital structure..."
                        imageSide="right"
                    />
                </div>
            </div>
        </div>
    );
};

export default MissionPage;