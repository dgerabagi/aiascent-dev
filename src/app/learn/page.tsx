'use client';
import React from 'react';
import MissionSectionBlock from '@/components/mission/MissionSectionBlock';
import NextPageSection from '@/components/global/NextPageSection';

const LearnPage = () => {
    const sections = [
        {
            title: 'The Pathway: From Vibecoding to Virtuosity',
            tldr: 'A four-stage developmental framework for achieving mastery in AI-assisted software engineering, moving from intuitive exploration to systematic, tool-driven creation.',
            content: `The "Vibecoding to Virtuosity" (V2V) pathway is a cognitive apprenticeship model designed to structure the journey of a developer in the age of AI. It's a deliberate practice framework that transforms the often chaotic, "vibe-driven" process of early-stage AI interaction into a disciplined, systematic approach. This pathway acknowledges that while initial explorations with AI can feel magical and highly productive, sustainable, and scalable software engineering requires a more rigorous methodology. The V2V pathway provides the roadmap for that transformation, guiding an apprentice from a state of reliance on the AI's "black box" to a state of mastery where the AI becomes a transparent, controllable tool in a larger strategic toolkit. It is a journey from being a mere consumer of AI outputs to becoming a "Citizen Architect"—a virtuoso who can design, build, and refine complex systems by expertly orchestrating human and machine intelligence.`,
            imageSide: 'left',
            imagePath: 'learn/',
            imagePrompt: 'An abstract visualization of a winding pathway made of glowing circuits, starting in a chaotic, colorful nebula (representing "vibecoding") and ending on a sharp, well-defined summit representing mastery. The path is divided into four distinct, glowing segments, each a different color.',
            images: ['v2v-pathway.webp'],
        },
        {
            title: 'Stages 1 & 2: The Annotator and The Toolmaker',
            tldr: 'The initial stages focus on developing the foundational skills of curating high-quality AI context (Annotator) and creating reusable, modular solutions from AI outputs (Toolmaker).',
            content: `**Stage 1: The Annotator.** The journey begins with mastering the art of context curation. An Annotator learns that the quality of an AI's output is a direct function of the quality of its input. This stage involves moving beyond simple prompts to strategically selecting and providing the "source of truth"—the precise code, documentation, and data artifacts—that the AI needs to solve a problem correctly and within the project's established patterns. This is the foundational skill of noise reduction and signal boosting.\n\n**Stage 2: The Toolmaker.** Once an apprentice can reliably generate useful AI outputs, the focus shifts to sustainability. The Toolmaker learns to resist the temptation of one-off, copy-paste solutions. Instead, they identify recurring patterns in the problems they solve and the code they receive. They then refactor and abstract these AI-generated snippets into robust, reusable components, services, and tools. This practice of "on-the-fly tooling" is the first major step towards building cognitive capital, turning ephemeral AI interactions into lasting, valuable assets for the entire team.`,
            imageSide: 'right',
            imagePath: 'learn/',
            imagePrompt: 'A split-panel image. On the left, a figure meticulously highlights and tags sections of a glowing digital document, representing the "Annotator." On the right, another figure assembles glowing, puzzle-like code blocks into a well-organized, functional toolkit, representing the "Toolmaker."',
            images: ['annotator-toolmaker.webp'],
        },
        {
            title: 'Stages 3 & 4: The Recursive Learner and The Virtuoso',
            tldr: 'The advanced stages involve codifying lessons from failures to prevent regression (Recursive Learner) and achieving a state of unconscious competence in orchestrating AI to build complex systems (Virtuoso).',
            content: `**Stage 3: The Recursive Learner.** This stage is about building resilience and a systemic memory. The Recursive Learner understands that bugs and regressions are not just errors to be fixed, but lessons to be codified. When a problem is solved, they don't just commit the code; they update the documentation, refine the "source of truth" artifacts, and, if necessary, create new case studies or guides. This ensures that the root cause of the error is addressed at the process level, preventing the same class of problem from recurring and making the entire system smarter and more robust for the next developer.\n\n**Stage 4: The Virtuoso.** The final stage is the culmination of the pathway. The Virtuoso, or "Citizen Architect," operates with a level of unconscious competence. The processes of context curation, toolmaking, and recursive learning have become second nature. They can now effortlessly design and implement complex, multi-component systems, strategically delegating tasks to the AI while maintaining full architectural control. They think in terms of systems, not snippets, and their primary focus shifts from solving immediate problems to building the pedagogical engines and knowledge assets that will accelerate the journey of the next generation of apprentices.`,
            imageSide: 'left',
            imagePath: 'learn/',
            imagePrompt: 'A split-panel image. On the left, a figure stands before a complex, branching flowchart where a broken link is being repaired and reinforced, representing the "Recursive Learner." On the right, a figure conducts an orchestra of light, with different AIs and code structures swirling around them in a harmonious, complex system, representing the "Virtuoso."',
            images: ['learner-virtuoso.webp'],
        },
        {
            title: 'The Apex Skill: On-the-Fly Tooling',
            tldr: 'The ultimate goal of the V2V pathway: the ability to instantly recognize and build reusable assets from AI-generated code, transforming one-time solutions into permanent cognitive capital.',
            content: `The single most critical skill developed through the V2V pathway is "on-the-fly tooling." It is the cognitive switch from seeing AI-generated code as a final answer to seeing it as raw material. An apprentice who has mastered this skill can, in the moment, recognize when a solution to a specific problem can be generalized. They can instinctively pause, refactor the specific solution into a generic, reusable tool, and then immediately apply that new tool to the original problem. This act is the engine of cognitive capital creation. It turns the cost of solving one problem into an investment that pays dividends on every future, similar problem. It is the apex skill that separates a competent AI user from a true Citizen Architect, who compounds knowledge and capability with every task they complete.`,
            imageSide: 'right',

            imagePath: 'learn/',
            imagePrompt: 'A dynamic image of a developer observing a single, glowing code snippet. With a gesture, the snippet transforms and crystallizes into a solid, reusable tool that is then placed onto a growing, intricate rack of similar tools. The background shows complex architectural blueprints being drawn with light.',
            images: ['apex-skill.webp'],
        },
    ];

    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
                    The V2V Pathway
                </h1>
                <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto mb-20">
                    A structured methodology for cultivating expertise in the new paradigm of human-AI collaborative development.
                </p>

                <div className="space-y-20">
                    {sections.map((section, index) => (
                        <MissionSectionBlock
                            key={index}
                            title={section.title}
                            tldr={section.tldr}
                            content={section.content}
                            imageSide={section.imageSide as 'left' | 'right'}
                            imagePath={section.imagePath}
                            imagePrompt={section.imagePrompt}
                            images={section.images}
                        />
                    ))}
                </div>
            </div>
            <NextPageSection
                title="Explore the Tool"
                description="Learn about the core features of the Data Curation Environment that make the V2V Pathway possible."
                buttonText="Discover the DCE"
                href="/dce"
            />
        </div>
    );
};

export default LearnPage;