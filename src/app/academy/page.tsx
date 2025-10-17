'use client';
import React, { useState, useEffect } from 'react';
import PersonaSelector from '@/components/academy/PersonaSelector';
import ReportViewer from '@/components/report-viewer/ReportViewer';
import { useReportStore } from '@/stores/reportStore';
import type { ReportContentData, ImageManifestData } from '@/stores/reportStore';

const AcademyPage = () => {
    const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { loadReport } = useReportStore.getState();

    useEffect(() => {
        if (selectedPersona) {
            const loadCurriculumData = async () => {
                setIsLoading(true);
                try {
                    const [contentRes, manifestRes] = await Promise.all([
                        fetch(`/data/v2v_content_${selectedPersona}.json`),
                        // C87 FIX: Load the correct persona-specific image manifest
                        fetch(`/data/imagemanifest_${selectedPersona}.json`)
                    ]);

                    if (!contentRes.ok) throw new Error(`Failed to fetch content for ${selectedPersona}`);
                    if (!manifestRes.ok) throw new Error(`Failed to fetch image manifest for ${selectedPersona}`);

                    const reportData: ReportContentData = await contentRes.json();
                    const imageManifest: ImageManifestData = await manifestRes.json();

                    // Pass the fetched data directly to the store
                    loadReport(reportData, imageManifest);

                } catch (error) {
                    console.error("Failed to load curriculum data:", error);
                } finally {
                    setIsLoading(false);
                }
            };
            loadCurriculumData();
        }
    }, [selectedPersona, loadReport]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen w-full pt-16">
                <p className="text-2xl text-muted-foreground animate-pulse">Loading Curriculum...</p>
            </div>
        );
    }

    return (
        <div className="h-screen w-full pt-16 flex flex-col">
            {!selectedPersona ? (
                <PersonaSelector onSelectPersona={setSelectedPersona} />
            ) : (
                <ReportViewer reportName={`v2v_${selectedPersona}`} />
            )}
        </div>
    );
};

export default AcademyPage;