'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PersonaSelectorProps {
    onSelectPersona: (persona: string) => void;
}

const personas = [
    {
        id: 'career_transitioner',
        title: 'The Career Transitioner',
        description: 'You have established expertise in a non-technical field and want to augment your skills with AI to future-proof your career and become a strategic leader.',
        image: '/assets/images/v2v/career_transitioner_thumbnail.webp',
    },
    {
        id: 'underequipped_graduate',
        title: 'The Underequipped Graduate',
        description: 'You have a traditional degree but feel unprepared for the AI-driven job market. You want to gain a competitive edge with practical, in-demand skills.',
        image: '/assets/images/v2v/underequipped_graduate_thumbnail.webp',
    },
    {
        id: 'young_precocious',
        title: 'The Young Precocious',
        description: 'You are a digitally native, self-taught creator, driven by curiosity. You want to channel your raw talent into a disciplined, powerful engineering practice.',
        image: '/assets/images/v2v/young_precocious_thumbnail.webp',
    },
];

const PersonaSelector: React.FC<PersonaSelectorProps> = ({ onSelectPersona }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {personas.map((persona, index) => (
                <motion.div
                    key={persona.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                >
                    <Card
                        className="h-full flex flex-col hover:bg-accent hover:border-primary transition-all cursor-pointer group"
                        onClick={() => onSelectPersona(persona.id)}
                    >
                        <CardHeader className="p-0">
                            <div className="relative aspect-video w-full">
                                <Image
                                    src={persona.image}
                                    alt={persona.title}
                                    fill
                                    className="object-cover rounded-t-lg transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <CardTitle>{persona.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow text-center pt-0">
                            <CardDescription>{persona.description}</CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default PersonaSelector;