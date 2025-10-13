{
  /*
  Cycle 30: Fix unescaped entities and add "See Showcase" button.
  - Replaced ' with &apos; in the content for "The 'Vibecoding to Virtuosity' Pathway" to fix linting error.
  - Added a new section at the bottom with a Link and Button component to navigate to the /showcase page.
  */
}
// src/app/learn/page.tsx
import React from 'react';
import MissionSectionBlock from '@/components/mission/MissionSectionBlock';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const LearnPage = () => {
    return (
        <div className="bg-background text-foreground min-h-screen pt-16">
            <div className="container mx-auto px-4 py-16">
                <section className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground pb-4">
                        The Pathway to Virtuosity
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mt-4">
                        Learn the methodology of the Citizen Architect. Master the art and science of AI-assisted development, from intuitive &apos;vibecoding&apos; to architectural mastery.
                    </p>
                </section>

                <div className="flex flex-col gap-24">
                    <MissionSectionBlock
                        title="The 'Vibecoding to Virtuosity' Pathway"
                        tldr="The V2V pathway is a structured pedagogical model, grounded in Cognitive Apprenticeship, designed to transform intuitive AI interaction ('vibecoding') into architectural mastery."
                        content="The creation of complex systems with AI is a journey. It begins with intuition and culminates in architectural mastery. This is the &apos;Vibecoding to Virtuosity&apos; pathway, a new model for creative development that redefines technical literacy. It is the curriculum for the Citizen Architect."
                        images={[
                            'from-intuition-to-mastery-p1-img-1.webp',
                            'from-intuition-to-mastery-p1-img-2.webp',
                            'from-intuition-to-mastery-p1-img-3.webp',
                            'from-intuition-to-mastery-p1-img-4.webp',
                            'from-intuition-to-mastery-p1-img-5.webp',
                            'from-intuition-to-mastery-p1-img-6.webp',
                            'from-intuition-to-mastery-p1-img-7.webp',
                            'from-intuition-to-mastery-p1-img-8.webp',
                            'from-intuition-to-mastery-p1-img-9.webp',
                            'from-intuition-to-mastery-p1-img-10.webp',
                            'from-intuition-to-mastery-p1-img-11.webp',
                            'from-intuition-to-mastery-p1-img-12.webp',
                            'from-intuition-to-mastery-p1-img-13.webp',
                            'from-intuition-to-mastery-p1-img-14.webp',
                        ]}
                        imagePath="part-i-the-proof/the-vibecoding-to-virtuosity-pathway/from-intuition-to-mastery/prompt-1/"
                        imagePrompt="A path winds from a hazy, dreamlike landscape labeled 'VIBECODING' to a sharp, clear, brilliantly lit city labeled 'VIRTUOSITY.' The path is paved with glowing stones representing skills like 'Structured Interaction' and 'Architectural Mindset.'"
                        imageSide="left"
                    />

                    <MissionSectionBlock
                        title="Stages 1 & 2: The Annotator and The Toolmaker"
                        tldr="The pathway begins by developing critical analysis (The Cognitive Annotator) and then shifts to active creation (The Adaptive Toolmaker), fostering agency and practical problem-solving."
                        content="The journey starts not with coding, but with critical analysis. As a **Cognitive Annotator**, you learn to deconstruct problems and rigorously review AI output for correctness and security. You learn to be skeptical. Next, as an **Adaptive Toolmaker**, you shift from consumer to creator. You solve real-world problems by building 'on-the-fly' scripts and automations, using AI as an adaptive component library to assemble your solutions."
                        images={[
                            'v2v-stages-1-and-2-p1-img-1.webp',
                            'v2v-stages-1-and-2-p1-img-2.webp',
                            'v2v-stages-1-and-2-p1-img-3.webp',
                            'v2v-stages-1-and-2-p1-img-4.webp',
                            'v2v-stages-1-and-2-p1-img-5.webp',
                            'v2v-stages-1-and-2-p1-img-6.webp',
                            'v2v-stages-1-and-2-p1-img-7.webp',
                            'v2v-stages-1-and-2-p1-img-8.webp',
                            'v2v-stages-1-and-2-p1-img-9.webp',
                            'v2v-stages-1-and-2-p1-img-10.webp',
                            'v2v-stages-1-and-2-p1-img-11.webp',
                            'v2v-stages-1-and-2-p1-img-12.webp',
                        ]}
                        imagePath="part-v-the-american-counter-strategy/from-vibecoding-to-virtuosity/v2v-stages-1-and-2/prompt-1/"
                        imagePrompt="Left Panel: 'Stage 1: Cognitive Annotator'. A learner is meticulously analyzing AI output, highlighting flaws. Right Panel: 'Stage 2: Adaptive Toolmaker'. The same learner is now actively building an automation script, using AI to generate components."
                        imageSide="right"
                    />

                    <MissionSectionBlock
                        title="Stages 3 & 4: The Recursive Learner and The Virtuoso"
                        tldr="The advanced stages focus on engineering your own expertise (The Recursive Learner) and culminating in fluid, intuitive mastery (The Virtuoso), where the AI becomes a seamless cognitive exoskeleton."
                        content="In the advanced stages, you become a **Recursive Learner**, turning your skills inward to engineer your own expertise. You use AI as a meta-tool to build personalized learning accelerators that target your own weaknesses. The culmination of the pathway is the **Virtuoso**—the 100x DCIA. Here, core principles are internalized, leading to adaptive expertise and fluid human-AI collaboration, coding at the speed of thought."
                        images={[
                            'v2v-stages-3-and-4-p1-img-1.webp',
                            'v2v-stages-3-and-4-p1-img-2.webp',
                            'v2v-stages-3-and-4-p1-img-3.webp',
                            'v2v-stages-3-and-4-p1-img-4.webp',
                            'v2v-stages-3-and-4-p1-img-5.webp',
                            'v2v-stages-3-and-4-p1-img-6.webp',
                            'v2v-stages-3-and-4-p1-img-7.webp',
                            'v2v-stages-3-and-4-p1-img-8.webp',
                            'v2v-stages-3-and-4-p1-img-9.webp',
                            'v2v-stages-3-and-4-p1-img-10.webp',
                            'v2v-stages-3-and-4-p1-img-11.webp',
                            'v2v-stages-3-and-4-p1-img-12.webp',
                            'v2v-stages-3-and-4-p1-img-13.webp',
                            'v2v-stages-3-and-4-p1-img-14.webp',
                            'v2v-stages-3-and-4-p1-img-15.webp',
                            'v2v-stages-3-and-4-p1-img-16.webp',
                        ]}
                        imagePath="part-v-the-american-counter-strategy/from-vibecoding-to-virtuosity/v2v-stages-3-and-4/prompt-1/"
                        imagePrompt="Left Panel: 'Stage 3: Recursive Learner'. A learner analyzes their own cognitive process. Right Panel: 'Stage 4: Virtuoso'. The same learner, now an expert, effortlessly orchestrates a complex system with the AI as a seamless 'Cognitive Exoskeleton'."
                        imageSide="left"
                    />

                    <MissionSectionBlock
                        title="The Apex Skill: On-the-Fly Tooling"
                        tldr="The culmination of the pathway is 'On-the-Fly Tooling'—the ability to use AI not as a tool, but as a 'foundry' to create bespoke solutions in real-time. This is the definitive marker of the 100x expert."
                        content="The apex skill of the Virtuoso is **'On-the-Fly Tooling.'** This is an act of expert improvisation where the analyst transcends the role of tool user and becomes a tool creator in real-time. The competent user asks the AI, 'How do I solve problem X?' The expert *commands* the AI, 'Build me a tool that solves problem X.' The AI is no longer a tool, but a foundry for creating tools. This is the definitive behavioral marker of the 100x Citizen Architect."
                        images={[
                            'the-apex-skill-on-the-fly-tooling-p1-img-1.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-2.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-3.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-4.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-5.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-6.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-7.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-8.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-9.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-10.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-11.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-12.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-13.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-14.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-15.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-16.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-17.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-18.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-19.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-20.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-21.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-22.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-23.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-24.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-25.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-26.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-27.webp',
                            'the-apex-skill-on-the-fly-tooling-p1-img-28.webp',
                        ]}
                        imagePath="part-v-the-american-counter-strategy/from-vibecoding-to-virtuosity/the-apex-skill-on-the-fly-tooling/prompt-1/"
                        imagePrompt="A Virtuoso DCIA is shown using the AI not as a conversational partner, but as a generative medium. They are rapidly forging a glowing, bespoke digital tool from raw data streams, shaping it with gestures and high-level commands."
                        imageSide="right"
                    />
                </div>

                <section className="text-center mt-24 py-16">
                    <h2 className="text-3xl font-bold mb-4">See It in Action</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Explore our showcase to see a complex, interactive report built entirely with the Data Curation Environment.
                    </p>
                    <Link href="/showcase" passHref>
                        <Button size="lg" variant="outline">
                            See The Showcase
                        </Button>
                    </Link>
                </section>

            </div>
        </div>
    );
};

export default LearnPage;