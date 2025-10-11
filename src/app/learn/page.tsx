// src/app/learn/page.tsx
import React from 'react';

const LearnPage = () => {
    return (
        // C15 Fix: Added pt-16 here to compensate for its removal from the main layout
        <div className="bg-background text-foreground min-h-screen pt-16">
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground pb-4">
                    Learn
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mt-4">
                    The educational hub for the Data Curation Environment and the Citizen Architect methodology.
                </p>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold">Coming Soon</h2>
                    <p className="text-lg text-muted-foreground mt-4">
                        This section will feature interactive tutorials, deep dives into the DCE workflow, and a curriculum of reports to help you master AI-assisted development.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LearnPage;