// src/app/mission/page.tsx
import React from 'react';

const MissionPage = () => {
    return (
        // C15 Fix: Added pt-16 here to compensate for its removal from the main layout
        <div className="bg-background text-foreground min-h-screen pt-16">
            <div className="container mx-auto px-4 py-16">

                {/* Section 1: The Vision */}
                <section className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground pb-4">
                        Empowering the Citizen Architect.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mt-4">
                        We are building the tools for a future where anyone with a vision can build complex systems. The "Citizen Architect" is an individual empowered by AI to create, analyze, and maintain digital infrastructure once only accessible to large institutions.
                    </p>
                </section>

                {/* Section 2: The Strategic Imperative */}
                <section className="max-w-5xl mx-auto mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">The Centralization of Cognitive Power</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-primary">The "Fissured Workplace"</h3>
                            <p className="text-lg text-muted-foreground">
                                The current Western approach to AI labor is a strategic vulnerability. By relying on a fragmented, precarious global workforce—the "fissured workplace"—we create an unstable foundation for our most critical technology. This model is not just an ethical failing; it's a direct threat to data quality, security, and our long-term competitive advantage.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-primary">The Coherent Competitor</h3>
                            <p className="text-lg text-muted-foreground">
                                In stark contrast, state-sponsored AI strategies are professionalizing their data workforce, treating human capital as a core national asset. This creates a profound strategic asymmetry that a laissez-faire approach cannot counter.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: The Counter-Strategy */}
                <section className="bg-card border rounded-lg p-8 md:p-12 mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Strategy: <strong>Cognitive Apprenticeship</strong></h2>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-center">
                        Our answer is not to imitate authoritarian control, but to unleash decentralized expertise. We believe in <strong>Cognitive Apprenticeship</strong>—a model where AI serves as a tireless mentor, guiding individuals from intuitive "vibe coding" to architectural mastery. The Data Curation Environment (DCE) is the foundational tool for this new relationship.
                    </p>
                </section>

                {/* Section 4: The Role of the DCE */}
                <section className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">The Essential Toolkit</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        The DCE is more than a productivity tool; it's the infrastructure for the Citizen Architect. It provides the structured workflow, precision context curation, and rapid testing capabilities needed for a decentralized community of creators to build the future. We are creating a community of "solarpunk prime" developers, the original vibe coders, sharing discoveries to build a better, more resilient digital world.
                    </p>
                </section>

                {/* Section 5: Call to Action */}
                <section className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Ascent.</h2>
                    <p className="text-xl text-muted-foreground mb-8">Adopt the tools. Teach the methodology. Support the vision.</p>
                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/dgerabagi/data-curation-environment" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                                Download the DCE
                            </button>
                        </a>
                        <a href="https://github.com/dgerabagi/aiascent-dev" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors">
                                Contribute on GitHub
                            </button>
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default MissionPage;