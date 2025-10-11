// src/components/home/FeaturesSection.tsx
// C3 - Implementation
import React from 'react';
import { CardContainer, CardBody, CardItem } from '@/components/global/3d-card';
import Image from 'next/image';

const features = [
{
title: "Precision Context Curation",
description: "Stop manual copy-pasting. DCE provides an intuitive, visual way to select and manage the exact files needed for your AI prompts directly within VS Code.",
icon: "/assets/icons/context-curation.svg",
translateZ: "50",
},
{
title: "Parallel Co-Pilot & Rapid Testing",
description: "Don't rely on a single AI response. Compare multiple solutions side-by-side and use the Git-integrated testing workflow (Baseline/Restore) to safely audition code changes in seconds.",
icon: "/assets/icons/parallel-copilot.svg",
translateZ: "60",
},
{
title: "Iterative Knowledge Graph",
description: "AI collaboration shouldn't be ephemeral. DCE captures the entire development process—prompts, responses, and decisions—as an iterative, auditable knowledge graph.",
icon: "/assets/icons/iterative-workflow.svg",
translateZ: "70",
},
];

const FeaturesSection = () => {
return (
<section className="py-20 md:py-32 bg-background">
<div className="container mx-auto px-4">
<h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
Stop Fighting Your Tools. Start Building the Future.
</h2>


    <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8">
      {features.map((feature, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:w-[350px] h-auto rounded-xl p-6 border">
            
            <CardItem
              translateZ={feature.translateZ}
              className="w-full mb-4"
            >
                {/* Placeholder for icons. SVGs need proper handling or rendering */}
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4">
                {/* Using Image component as a placeholder for SVG icons until SVGR is set up */}
                <Image src={feature.icon} alt={feature.title} width={24} height={24} className='invert dark:invert-0'/>
              </div>
            </CardItem>

            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {feature.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {feature.description}
            </CardItem>
            
          </CardBody>
        </CardContainer>
      ))}
    </div>
  </div>
</section>


);
};

export default FeaturesSection;