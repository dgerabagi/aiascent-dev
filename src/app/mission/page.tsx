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
                        title="What is Cognitive Capital?"
                        tldr="Cognitive Capital is the collective problem-solving ability of an individual, organization, or nation. In the AI era, it is the most valuable strategic asset."
                        content="While one nation might have more workers, another may possess vastly more Cognitive Capital, enabling it to out-innovate and outperform. Unlike financial capital, which can be printed, or industrial capital, which can be built, Cognitive Capital must be cultivated. It grows from education, collaboration, and access to tools that amplify human intellect. Our mission is to build the tools that cultivate this essential resource, empowering a new generation of 'Citizen Architects' to build a more prosperous and secure future."
                        imageBasePath="introduction/cognitive-capital/prompt-1/"
                        images={[
                            'cognitive-capital-p1-img-1.webp',
                            'cognitive-capital-p1-img-2.webp',
                            'cognitive-capital-p1-img-15.webp',
                        ]}
                        imagePrompt="A cinematic visualization of a nation's collective mind. A vast network of glowing neural pathways connects millions of diverse people, forming a single, brilliant brain..."
                        imageSide="right"
                    />

                    <MissionSectionBlock
                        title="Empowering the Citizen Architect"
                        tldr="We are building the tools for a future where anyone with a vision can build complex systems."
                        content="The 'Citizen Architect' is an individual empowered by AI to create, analyze, and maintain digital infrastructure once only accessible to large institutions. Our mission is to forge these architects."
                        imageBasePath="part-i-the-proof/section-1-the-hook/the-citizen-architect-has-arrived/prompt-1/"
                        images={[
                            'the-citizen-architect-has-arrived-p1-img-1.webp',
                            'the-citizen-architect-has-arrived-p1-img-5.webp',
                            'the-citizen-architect-has-arrived-p1-img-9.webp',
                        ]}
                        imagePrompt="A single individual is shown orchestrating a swarm of small, glowing AI bots to construct a complex and beautiful digital structure..."
                        imageSide="left"
                    />

                    <MissionSectionBlock
                        title="The Fissured Workplace"
                        tldr="The current Western AI labor model is a strategic vulnerability, creating an unstable foundation for our most critical technology."
                        content="The AI supply chain is a masterclass in obfuscation, deliberately fractured to distance valuable tech companies from the human labor that makes their products possible. This labyrinthine structure is not an accident; it is a design choice intended to suppress wages, prevent worker organization, and shed legal and ethical liability. In stark contrast, coherent competitors are professionalizing their data workforce, treating human capital as a core national asset. This creates a profound strategic asymmetry that a laissez-faire approach cannot counter."
                        imageBasePath="introduction/the-fissured-workplace/prompt-1/"
                        images={[
                            'the-fissured-workplace-p1-img-1.webp',
                            'the-fissured-workplace-p1-img-7.webp',
                            'the-fissured-workplace-p1-img-11.webp',
                        ]}
                        imagePrompt="An architectural blueprint of a corporation. At the top is a solid, gleaming headquarters. Below it, the structure fractures into multiple, disconnected layers..."
                        imageSide="right"
                    />

                    <MissionSectionBlock
                        title="Our Strategy: Cognitive Apprenticeship"
                        tldr="Our answer is not to imitate authoritarian control, but to unleash decentralized expertise through a model where AI serves as a tireless mentor."
                        content="We believe in **Cognitive Apprenticeship**—a model where AI serves as a tireless mentor, guiding individuals from intuitive 'vibe coding' to architectural mastery. The Data Curation Environment (DCE) is the foundational tool for this new relationship, making the invisible 'hidden curriculum' of expert thinking visible and learnable."
                        imageBasePath="part-v-the-american-counter-strategy/from-vibecoding-to-virtuosity/the-pedagogical-engine-cam/prompt-1/"
                        images={[
                            'the-pedagogical-engine-cam-p1-img-1.webp',
                            'the-pedagogical-engine-cam-p1-img-6.webp',
                            'the-pedagogical-engine-cam-p1-img-12.webp',
                        ]}
                        imagePrompt="An expert DCIA (human) is working alongside an apprentice. The expert's thought process is visualized as a glowing, structured blueprint ('The Hidden Curriculum')..."
                        imageSide="left"
                    />

                    <MissionSectionBlock
                        title="The Role of the DCE: The Essential Toolkit"
                        tldr="The DCE is more than a productivity tool; it's the infrastructure for the Citizen Architect."
                        content="The DCE provides the structured workflow, precision context curation, and rapid testing capabilities needed for a decentralized community of creators to build the future. We are creating a community of 'solarpunk prime' developers, the original vibe coders, sharing discoveries to build a better, more resilient digital world."
                        imageBasePath="part-i-the-proof/section-2-the-origin/the-new-creative-partnership/prompt-1/"
                        images={[
                            'the-new-creative-partnership-p1-img-1.webp',
                            'the-new-creative-partnership-p1-img-8.webp',
                            'the-new-creative-partnership-p1-img-15.webp',
                        ]}
                        imagePrompt="A hyper-realistic, solarpunk cinematic image of a developer... sitting cross-legged on a vast, glowing digital floor... thoughtfully placing one of these blocks into a complex, half-finished digital structure..."
                        imageSide="right"
                    />
                </div>
            </div>
        </div>
    );
};

export default MissionPage;