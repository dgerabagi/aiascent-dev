'use client';
{
  /*
  Cycle 50: Expand content for all sections based on A34.
  Cycle 31: Add 'use client' directive.
  - This page imports MissionSectionBlock, which uses client-side hooks (useState, useEffect).
  - Therefore, this page must also be a Client Component to be used in the App Router.
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
                        content="The creation of complex systems with AI is a journey. It begins with intuition and culminates in architectural mastery. This is the 'Vibecoding to Virtuosity' pathway, a new model for creative development that redefines technical literacy. It is the curriculum for the Citizen Architect.

'Vibecoding' is the intuitive, conversational, and often imprecise starting point for interacting with generative AI. It is the process of translating a feeling, an aesthetic, a 'vibe,' or a high-level intention into a functional piece of software or a digital artifact using natural language as the primary interface. This method turns a spark of inspiration into a live experience within minutes, lowering the barrier to entry for creation to near zero. It requires only the ability to articulate an idea.

But 'Virtuosity' is the destination. It is the methodical refinement of that initial intuition into a structured, powerful, and repeatable skillset. The journey from vibecoding to virtuosity involves learning how to structure prompts effectively, how to critically evaluate and debug AI-generated code, and how to architect complex systems by breaking them down into AI-manageable components. It is the process of transforming from a passive user of AI into an active director of AI, representing a fundamental shift in what it means to be technically literate."
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
                        content="The journey starts not with coding, but with critical analysis. As a **Cognitive Annotator**, you learn to deconstruct problems and rigorously review AI output for correctness and security. The goal is to dismantle the flawed model of AI infallibility. Activities focus on decomposing problems into precise prompts and critically reviewing AI-generated code for correctness, security, and style. You learn to be skeptical of the AI, identifying bugs and vulnerabilities. The AI acts as a 'Scaffolded Solution Space,' providing examples for deconstruction and analysis.

Next, as an **Adaptive Toolmaker**, you shift from consumer to creator. The goal is to solve authentic, contextual problems by building simple tools. Activities include identifying workflow inefficiencies and building 'on-the-fly' scripts, automations, and API integrations. This fosters agency and develops skills in abstraction and systems thinking. The AI acts as an 'Adaptive Component Library,' providing functions and snippets for the learner to assemble into a cohesive solution. This stage is about moving from analysis to action, from identifying problems to building the tools that solve them."
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
                        content="In the advanced stages, you become a **Recursive Learner**, turning your skills inward to engineer your own expertise in a human version of Recursive Self-Improvement. The activities involve deep metacognitive analysis of your own learning gaps and building personalized 'Learning Accelerators'—such as custom tutors, specialized AI agents, or targeted quiz generators—to address your specific weaknesses. Here, the AI acts as a 'Meta-Tool,' used to construct personalized tools that enhance your own cognitive capabilities and accelerate your path to mastery.

The culmination of the pathway is the **Virtuoso**—the 100x DCIA. At this stage, core principles are internalized, leading to adaptive expertise and a state of fluid human-AI collaboration that feels like coding at the speed of thought. The Virtuoso's activities involve complex system architecture, governance, and mentorship of others on the pathway. The AI becomes a true 'Cognitive Exoskeleton,' seamlessly augmenting the expert's intent, speed, and reach, allowing them to tackle problems of a scale and complexity previously unimaginable for an individual."
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
                        content="The apex skill of the Virtuoso is **'On-the-Fly Tooling.'** This is an act of expert improvisation where the analyst transcends the role of tool user and becomes a tool creator in real-time. It is the ability to leverage the AI's core generative capabilities as a 'foundry' to instantly create a bespoke tool—a Python function, a validation script, a custom API call—in the moment it is needed to solve a novel problem.

The cognitive shift is profound: The competent user asks the AI, 'How do I solve problem X?' The expert *commands* the AI, 'Build me a tool that solves problem X.' This is not a conversation; it is an act of creation. The DCIA no longer sees the AI as a fixed set of capabilities, but as a plastic, generative medium—an extension of their own analytical will. This skill, analogous to a jazz musician improvising a melody or a special forces operator adapting gear in the field, is the definitive behavioral marker of the 100x Citizen Architect and the ultimate expression of expert-level human-AI symbiosis."
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