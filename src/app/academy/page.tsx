'use client';
import React, { useState, useEffect } from 'react';
import PersonaSelector from '@/components/academy/PersonaSelector';
import ReportViewer from '@/components/report-viewer/ReportViewer';
import { useReportStore } from '@/stores/reportStore';
import type { ReportContentData, ImageManifestData } from '@/stores/reportStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const AcademyPage = () => {
    const [selection, setSelection] = useState<{ type: 'persona' | 'lab'; id: string } | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { loadReport } = useReportStore.getState();

    useEffect(() => {
        if (selection) {
            const loadData = async () => {
                setIsLoading(true);
                try {
                    const contentFile = selection.type === 'persona' 
                        ? `v2v_content_${selection.id}.json`
                        : `v2v_${selection.id}.json`;
                    
                    const manifestFile = selection.type === 'persona'
                        ? `imagemanifest_${selection.id}.json`
                        : `imagemanifest_${selection.id}.json`;

                    const [contentRes, manifestRes] = await Promise.all([
                        fetch(`/data/${contentFile}`),
                        fetch(`/data/${manifestFile}`)
                    ]);

                    if (!contentRes.ok) throw new Error(`Failed to fetch content for ${selection.id}`);
                    if (!manifestRes.ok) throw new Error(`Failed to fetch image manifest for ${selection.id}`);

                    const reportData: ReportContentData = await contentRes.json();
                    const imageManifest: ImageManifestData = await manifestRes.json();

                    loadReport(reportData, imageManifest);

                } catch (error) {
                    console.error("Failed to load academy data:", error);
                } finally {
                    setIsLoading(false);
                }
            };
            loadData();
        }
    }, [selection, loadReport]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen w-full pt-16">
                <p className="text-2xl text-muted-foreground animate-pulse">Loading Content...</p>
            </div>
        );
    }

    if (selection) {
        return (
            <div className="h-screen w-full pt-16 flex flex-col">
                <ReportViewer reportName={selection.id} />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-start min-h-screen container mx-auto px-4 py-16 pt-32">
            
            {/* V2V Pathway Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 w-full"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
                    The V2V Academy
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    To personalize your learning journey, please choose the path that best describes you.
                </p>
            </motion.div>
            <PersonaSelector onSelectPersona={(id) => setSelection({ type: 'persona', id })} />

            {/* Labs & Projects Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-center my-20 w-full"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
                    Labs & Projects
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Apply your knowledge with hands-on, project-based learning.
                </p>
            </motion.div>

            <motion.div 
                className="w-full max-w-6xl mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <Card
                        className="h-full flex flex-col hover:bg-accent hover:border-primary transition-all cursor-pointer"
                        onClick={() => setSelection({ type: 'lab', id: 'lab_1_portfolio' })}
                    >
                        <CardHeader className="items-center text-center">
                            <CardTitle>Lab 1: Your First Portfolio</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow text-center">
                            <CardDescription>Go from an empty folder to a running portfolio website and learn the complete, end-to-end workflow of the Data Curation Environment.</CardDescription>
                        </CardContent>
                    </Card>
                    {/* Future labs will be added here as more Card components */}
                </div>
            </motion.div>
        </div>
    );
};

export default AcademyPage;