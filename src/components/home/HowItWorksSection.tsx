// src/components/home/HowItWorksSection.tsx
import React from 'react';
import { FaBoxes, FaGoogle, FaRocket } from 'react-icons/fa';

const features = [
    {
        icon: <FaBoxes size={32} className="text-primary" />,
        title: "Curate Your Code",
        description: "Visually select any file in your project. DCE intelligently packages your code, documents, and data into a single, clean prompt.",
    },
    {
        icon: <FaGoogle size={32} className="text-primary" />,
        title: "Collaborate with Free AI",
        description: "Take your perfectly curated context to any AI, including the powerful, free models in Google's AI Studio.",
    },
    {
        icon: <FaRocket size={32} className="text-primary" />,
        title: "Create Without Limits",
        description: "Get unlimited, high-quality code and documentation from the world's best models, without spending a dime on API fees.",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
                    The Free Workflow for Serious AI Development
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center flex flex-col items-center">
                            <div className="mb-6 p-4 bg-primary/10 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-muted-foreground max-w-xs">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;