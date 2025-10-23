// src/components/home/HeroSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
return (
    <section className="h-screen w-full relative flex flex-col items-center justify-center antialiased">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/master_of_realms.webp')" }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Headline (A16, 4.2) - C106: Added pb-4 for padding */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 font-sans font-bold mb-8 pb-4">
                Vibe Code for Free. Ship Real Projects.
            </h1>
            
            {/* Subheadline (A16, 4.2) - C106: Rewritten to be more inclusive */}
            <p className="text-lg md:text-xl text-neutral-300 max-w-4xl text-center mb-12">
                The future of all knowledge work—from law and architecture to software development—is curating data for AI. The Data Curation Environment (DCE) is the essential VS Code extension for the emerging class of 'Citizen Architects,' empowering you to build complex, AI-driven projects with precision and confidence.
            </p>

            {/* CTAs (A16, 4.2) */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/showcase">
                    <Button
                        size={'lg'}
                        className="p-6 text-lg border-t-2 rounded-full border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800/80 group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-black/50 duration-500 backdrop-blur-sm"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-white font-sans group-hover:text-white">
                            Explore the Showcase
                        </span>
                    </Button>
                </Link>
                <a href="/downloads/data-curation-environment-0.1.10.vsix" download="data-curation-environment-0.1.10.vsix">
                    <Button size="lg" variant="outline" className="p-6 text-lg bg-transparent hover:bg-white/10 text-white border-white/50 hover:text-white">
                        Download Now
                    </Button>
                </a>
            </div>
        </div>
    </section>
);
};

export default HeroSection;