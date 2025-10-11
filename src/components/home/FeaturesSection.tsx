// src/components/home/FeaturesSection.tsx
// C10 - Update Image component to remove legacy props
import React from 'react';
import Image from 'next/image';

const features = [
{
title: "Precision Context Curation",
description: "Stop manual copy-pasting. DCE provides an intuitive, visual way to select and manage the exact files needed for your AI prompts directly within VS Code.",
icon: "/assets/icons/context-curation.png",
},
{
title: "Parallel Co-Pilot & Rapid Testing",
description: "Don't rely on a single AI response. Compare multiple solutions side-by-side and use the Git-integrated testing workflow to safely audition code changes in seconds.",
icon: "/assets/icons/parallel-copilot.png",
},
{
title: "Iterative Knowledge Graph",
description: "AI collaboration shouldn't be ephemeral. DCE captures the entire development process—prompts, responses, and decisions—as an iterative, auditable knowledge graph.",
icon: "/assets/icons/iterative-workflow.png",
},
];

const FeaturesSection = () => {
return (
<section className="py-20 md:py-32 bg-background">
<div className="container mx-auto px-4">
<h2 className="text-3xl md:text-5xl font-bold text-center mb-24 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 pb-4">
Stop Fighting Your Tools. Start Building the Future.
</h2>

    {/* Refactored to a vertical stacking layout with alternating image/text */}
    <div className="flex flex-col gap-24">
      {features.map((feature, index) => (
        <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
          {/* Image Container */}
          <div className="md:w-1/2 w-full p-4 border border-neutral-800 rounded-2xl bg-neutral-950/50 shadow-2xl shadow-black/20">
            <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    fill
                    className='transition-transform duration-500 hover:scale-105 object-cover'
                />
            </div>
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="text-lg text-neutral-400">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
);
};

export default FeaturesSection;