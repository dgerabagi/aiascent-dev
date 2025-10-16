'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface PersonaSelectorProps {
    onSelectPersona: (persona: string) => void;
}

const personas = [
    {
        id: 'career_transitioner',
        title: 'The Career Transitioner',
        description: 'You have established expertise in a non-technical field and want to augment your skills with AI to future-proof your career and become a strategic leader.',
        icon: ' briefcase', // Placeholder icon class
    },
    {
        id: 'underequipped_graduate',
        title: 'The Underequipped Graduate',
        description: 'You have a traditional degree but feel unprepared for the AI-driven job market. You want to gain a competitive edge with practical, in-demand skills.',
        icon: ' graduation-cap', // Placeholder icon class
    },
    {
        id: 'young_precocious',
        title: 'The Young Precocious',
        description: 'You are a digitally native, self-taught creator, driven by curiosity. You want to channel your raw talent into a disciplined, powerful engineering practice.',
        icon: ' rocket', // Placeholder icon class
    },
];

const PersonaSelector: React.FC<PersonaSelectorProps> = ({ onSelectPersona }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
                    Welcome to the V2V Academy
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    To personalize your learning journey, please choose the path that best describes you.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {personas.map((persona, index) => (
                    <motion.div
                        key={persona.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                    >
                        <Card
                            className="h-full flex flex-col hover:bg-accent hover:border-primary transition-all cursor-pointer"
                            onClick={() => onSelectPersona(persona.id)}
                        >
                            <CardHeader className="items-center text-center">
                                {/* <div className="p-4 bg-primary/10 rounded-full mb-4">
                                    <i className={`fas fa-${persona.icon} text-primary text-3xl`}></i>
                                </div> */}
                                <CardTitle>{persona.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow text-center">
                                <CardDescription>{persona.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PersonaSelector;