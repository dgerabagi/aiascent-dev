'use client';
// src/components/home/FeaturesSection.tsx
// C54 - Add audio play buttons
// C11 - Add light mode variants
import React from 'react';
import Image from 'next/image';
import { useReportState, useReportStore } from '@/stores/reportStore';
import { FaPlay, FaPause, FaSpinner } from 'react-icons/fa';

const features = [
{
title: "Precision Context Curation",
description: "Stop manual copy-pasting. DCE provides an intuitive, visual way to select and manage the exact files needed for your AI prompts directly within VS Code.",
icon: "/assets/icons/context-curation.webp",
},
{
title: "Parallel Co-Pilot & Rapid Testing",
description: "Don't rely on a single AI response. Compare multiple solutions side-by-side and use the Git-integrated testing workflow to safely audition code changes in seconds.",
icon: "/assets/icons/parallel-copilot.webp",
},
{
title: "Iterative Knowledge Graph",
description: "AI collaboration shouldn't be ephemeral. DCE captures the entire development process—prompts, responses, and decisions—as an iterative, auditable knowledge graph.",
icon: "/assets/icons/iterative-workflow.webp",
},
];

const FeaturesSection = () => {
    const { playArbitraryText } = useReportStore.getState();
    const { genericPlaybackStatus, genericAudioText } = useReportState(state => ({
        genericPlaybackStatus: state.genericPlaybackStatus,
        genericAudioText: state.genericAudioText,
    }));

return (
<section className="py-20 md:py-32 bg-background">
<div className="container mx-auto px-4">
<h2 className="text-3xl md:text-5xl font-bold text-center mb-24 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 light:from-black light:to-neutral-700 pb-4">
Stop Fighting Your Tools. Start Building the Future.
</h2>

    <div className="flex flex-col gap-24">
      {features.map((feature, index) => {
        const isPlayingThis = genericPlaybackStatus === 'playing' && genericAudioText === feature.description;
        const isGeneratingThis = genericPlaybackStatus === 'generating' && genericAudioText === feature.description;

        return (
        <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
          {/* Image Container */}
          <div className="md:w-1/2 w-full p-4 border border-neutral-800 light:border-neutral-200 rounded-2xl bg-neutral-950/50 light:bg-neutral-100/50 shadow-2xl shadow-black/20 light:shadow-neutral-300/20">
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
            <div className="flex items-center gap-4 mb-4">
                <h3 className="text-3xl font-bold text-white light:text-black">{feature.title}</h3>
                <button
                    onClick={() => playArbitraryText(feature.description)}
                    className="p-2 border rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    title={isPlayingThis ? "Pause narration" : "Play narration"}
                    disabled={isGeneratingThis}
                >
                    {isGeneratingThis ? <FaSpinner className="animate-spin" /> : (isPlayingThis ? <FaPause /> : <FaPlay />)}
                </button>
            </div>
            <p className="text-lg text-neutral-400 light:text-neutral-600">
              {feature.description}
            </p>
          </div>
        </div>
      )})}
    </div>
  </div>
</section>
);
};

export default FeaturesSection;