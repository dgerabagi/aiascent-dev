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
                        title="The Strategic Imperative: The Fissured Workplace"
                        tldr="The current Western AI labor model is a strategic vulnerability, creating an unstable foundation for our most critical technology by prioritizing short-term cost savings over the cognitive well-being of its essential workforce."
                        content="The AI supply chain is a masterclass in obfuscation, deliberately fractured to distance valuable tech companies from the human labor that makes their products possible. This labyrinthine structure, known as the 'fissured workplace,' is not an accident; it is a design choice intended to suppress wages, prevent worker organization, and shed legal and ethical liability. It creates a global 'ghost workforce' of data annotators and content moderators who are underpaid, psychologically stressed, and treated as disposable.

This is more than an ethical failing; it is a critical strategic blunder. Decades of research show that financial precarity imposes a severe 'Cognitive Bandwidth Tax,' measurably reducing a person's ability to perform the complex, nuanced tasks required for high-quality data curation. By institutionalizing this precarity, the Western AI industry has built an architecture of self-sabotage. It guarantees the production of flawed, biased, and insecure training data—a systemic crisis of 'Garbage In, Garbage Out.'

In stark contrast, coherent competitors are professionalizing their data workforce, treating human capital as a core national asset. This creates a profound strategic asymmetry. An AI superpower cannot be sustained indefinitely on a brittle foundation of exploited labor."
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
                        tldr="Our answer is not to imitate authoritarian control, but to unleash decentralized expertise through a model where AI serves as a tireless mentor, making the 'hidden curriculum' of expert thinking visible and learnable."
                        content="The American counter-strategy must be asymmetric, leveraging our unique strengths: bottom-up innovation and individual empowerment. We believe in **Cognitive Apprenticeship**—a model where AI serves as a tireless mentor, guiding individuals from intuitive 'vibe coding' to architectural mastery.

The central challenge in training experts is that their most critical skills—problem-solving heuristics, diagnostic strategies, self-correction—are internal and invisible. Cognitive Apprenticeship makes this 'hidden curriculum' visible and learnable. Historically, this model was difficult to scale due to the expert's limited time. AI fundamentally breaks this constraint. An AI can serve as a personalized Coach, provide dynamic Scaffolding that adapts in real-time, and generate infinite realistic scenarios for Modeling and Exploration.

The Data Curation Environment (DCE) is the foundational tool for this new relationship. It provides the structured workflow and auditable knowledge graph that makes this new form of apprenticeship possible, transforming the development process itself into a rich learning environment."
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
                        tldr="The DCE is more than a productivity tool; it's the infrastructure for the Citizen Architect, providing the structure and precision needed to transform creative intent into complex, reliable systems."
                        content="The DCE provides the structured workflow, precision context curation, and rapid testing capabilities needed for a decentralized community of creators—the Citizen Architects—to build the future. It transforms the ad-hoc, conversational nature of 'vibecoding' into a rigorous engineering discipline.

By capturing every interaction as a persistent, auditable knowledge graph, the DCE turns the development process into a shareable, scalable asset. This allows teams to collaborate seamlessly, enables new members to onboard rapidly by reviewing the project's decision history, and provides an unprecedented level of transparency and accountability.

We are creating a community of 'solarpunk prime' developers, the original vibe coders, sharing discoveries to build a better, more resilient digital world. The DCE is the essential toolkit for this mission, providing the infrastructure to scale expertise, ensure quality, and achieve the mission faster."
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