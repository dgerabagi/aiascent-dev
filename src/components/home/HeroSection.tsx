// src/components/home/HeroSection.tsx
import React from 'react';
import { ContainerScroll } from '@/components/global/container-scroll-animation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
return (
<section className="min-h-screen w-full bg-background rounded-md !overflow-visible relative flex flex-col items-center antialiased">
{/* Background Gradient */}
<div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#0D1A26_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#0D1A26_100%)]"></div>

  {/* ContainerScroll and Content */}
  <div className="flex flex-col mt-[-50px] md:mt-0">
    <ContainerScroll
      titleComponent={
        <div className="flex items-center flex-col">
          {/* Headline (A16, 4.2) */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground font-sans font-bold text-center mb-8 pt-16">
            Master the Human-AI Workflow. Become a Citizen Architect.
          </h1>
          
          {/* Subheadline (A16, 4.2) */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl text-center mb-12">
            The Data Curation Environment (DCE) is the essential VS Code extension for developers who want to move beyond prompt-and-pray. Curate context with precision, test AI solutions rapidly, and build complex systems with confidence.
          </p>

          {/* CTAs (A16, 4.2) */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/showcase">
                <Button
                    size={'lg'}
                    className="p-6 text-lg border-t-2 rounded-full border-border bg-card hover:bg-accent group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500/20 duration-500"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-muted-foreground to-foreground font-sans group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground">
                    Explore the Showcase
                    </span>
                </Button>
            </Link>
            {/* C34 Fix: Wrap button in an anchor tag to make it downloadable */}
            <a href="/downloads/data-curation-environment-0.1.10.vsix" download="data-curation-environment-0.1.10.vsix">
                <Button size="lg" variant="outline" className="p-6 text-lg">
                    Download Now
                </Button>
            </a>
          </div>
        </div>
      }
    >
        {/* Visuals (A16, 4.2 Updated C11) */}
        <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-neutral-700">
            <Image
                src="/assets/images/pcp.gif"
                alt="DCE Workflow Demonstration GIF"
                fill
                className="rounded-2xl object-contain"
                unoptimized={true} // GIFs should not be optimized by Next.js Image component
            />
        </div>
    </ContainerScroll>
  </div>
</section>
);
};

export default HeroSection;