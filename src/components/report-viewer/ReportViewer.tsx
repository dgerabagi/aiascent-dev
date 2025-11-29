// src/components/report-viewer/ReportViewer.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useReportStore, useReportState } from '@/stores/reportStore';
import PageNavigator from './PageNavigator';
import ImageNavigator from './ImageNavigator';
import PromptNavigator from './PromptNavigator';
import ReportTreeNav from './ReportTreeNav';
import ReportChatPanel from './ReportChatPanel';
import ReportProgressBar from './ReportProgressBar';
import AudioControls from './AudioControls';
import { Resizable } from 're-resizable';
import Image from 'next/image';
import MarkdownRenderer from '@/components/shared/MarkdownRenderer';
import type { ReportContentData, ImageManifestData } from '@/stores/reportStore';


interface ReportViewerProps {
    reportName: string;
}

const ReportViewer: React.FC<ReportViewerProps> = ({ reportName }) => {
    const { loadReport, handleKeyDown, setChatPanelWidth, startSlideshow, fetchPageSuggestions, setIsFullscreen, openFullscreenMedia } = useReportStore.getState();
    const {
        _hasHydrated,
        allPages, currentPageIndex, currentImageIndex, isTreeNavOpen, isChatPanelOpen,
        imagePanelHeight, setImagePanelHeight, isPromptVisible, isTldrVisible, isContentVisible, isLoading,
        chatPanelWidth, playbackStatus, autoplayEnabled, isFullscreen
    } = useReportState(state => ({
        _hasHydrated: state._hasHydrated,
        allPages: state.allPages,
        currentPageIndex: state.currentPageIndex,
        currentImageIndex: state.currentImageIndex,
        isTreeNavOpen: state.isTreeNavOpen,
        isChatPanelOpen: state.isChatPanelOpen,
        imagePanelHeight: state.imagePanelHeight,
        setImagePanelHeight: state.setImagePanelHeight,
        isPromptVisible: state.isPromptVisible,
        isTldrVisible: state.isTldrVisible,
        isContentVisible: state.isContentVisible,
        isLoading: state.isLoading,
        chatPanelWidth: state.chatPanelWidth,
        playbackStatus: state.playbackStatus,
        autoplayEnabled: state.autoplayEnabled,
        isFullscreen: state.isFullscreen,
    }));

    const viewerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // C74: Fetch data within the component for static reports
        // C4 Fix: Added 'anguilla' to the allowed list for self-fetching reports
        if (reportName !== 'whitepaper' && reportName !== 'showcase' && reportName !== 'anguilla') {
            return; // Data for V2V is loaded by the parent /academy page
        }
        
        const loadStaticReport = async () => {
            try {
                const [contentRes, manifestRes] = await Promise.all([
                    fetch(`/data/${reportName}_content.json`),
                    fetch(`/data/${reportName}_imagemanifest.json`),
                ]);

                if (!contentRes.ok) throw new Error(`Failed to fetch ${reportName}_content.json`);
                if (!manifestRes.ok) throw new Error(`Failed to fetch ${reportName}_imagemanifest.json`);

                const reportData: ReportContentData = await contentRes.json();
                const imageManifest: ImageManifestData = await manifestRes.json();
                
                loadReport(reportData, imageManifest);

            } catch (error) {
                console.error(`Failed to load static report data for ${reportName}:`, error);
            }
        };

        loadStaticReport();
    }, [loadReport, reportName]);

    const currentPage = allPages[currentPageIndex];

    useEffect(() => {
        if (currentPage) {
            fetchPageSuggestions(currentPage);
        }
    }, [currentPage, fetchPageSuggestions]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, [setIsFullscreen]);

    useEffect(() => {
        if (playbackStatus === 'playing' && autoplayEnabled) {
            startSlideshow();
        }
    }, [playbackStatus, autoplayEnabled, startSlideshow]);
    
    const currentPrompt = currentPage?.imagePrompts?.[0];
    const currentImage = currentPrompt?.images?.[currentImageIndex];

    if (!_hasHydrated || isLoading) {
        return (
            <div className="flex items-center justify-center h-full w-full">
                <p className="text-2xl text-muted-foreground animate-pulse">Loading Report...</p>
            </div>
        );
    }

    if (!currentPage) {
        return (
            <div className="flex items-center justify-center h-full w-full">
                <p className="text-2xl text-red-500">Could not load report data.</p>
            </div>
        );
    }
    
    const handleImageClick = () => {
        if (currentImage) {
            const isLab = reportName.startsWith('v2v-academy-lab');
            const payload = { 
                src: currentImage.url, 
                description: currentImage.prompt,
                ...(isLab && { content: currentPage.content })
            };
            openFullscreenMedia(payload);
        }
    };

    return (
        <div ref={viewerRef} className={`h-full w-full bg-background text-foreground flex ${isFullscreen ? 'fixed inset-0 z-[100]' : ''}`}>
            {isTreeNavOpen && <ReportTreeNav />}
            <div className="flex-1 flex flex-col min-w-0">
                {/* C7 Update: Reduced padding from p-2 to p-1 to save vertical space */}
                <header className="p-1 border-b flex-shrink-0">
                    <PageNavigator />
                </header>
                <div className="p-2 border-b flex-shrink-0">
                    <ReportProgressBar />
                </div>
                <main className="flex-1 flex flex-col p-2 overflow-hidden">
                    <Resizable
                        size={{ width: '100%', height: imagePanelHeight }}
                        minHeight={200}
                        maxHeight="60%"
                        onResizeStop={(e, direction, ref, d) => {
                            setImagePanelHeight(imagePanelHeight + d.height);
                        }}
                        enable={{ bottom: true }}
                        className="relative mb-2 flex-shrink-0"
                    >
                        <div className="w-full h-full bg-black/50 border rounded-lg flex items-center justify-center overflow-hidden relative">
                            {currentImage?.url ? (
                                <Image
                                    src={currentImage.url}
                                    alt={currentImage.alt}
                                    fill
                                    sizes="100vw"
                                    className="object-contain cursor-pointer"
                                    onClick={handleImageClick}
                                    unoptimized // Good for gifs, but also for webp from local
                                />
                            ) : <p>No Image Available</p>}
                        </div>
                    </Resizable>
                    
                    <div className="border-y p-1 flex-shrink-0">
                        <ImageNavigator viewerRef={viewerRef} />
                        <AudioControls />
                    </div>

                    <div className="flex-1 overflow-y-auto p-2 mt-2 space-y-4 prose prose-sm dark:prose-invert max-w-none">
                        {isPromptVisible && <PromptNavigator />}
                        {isTldrVisible && (
                            <div className="p-2 border-l-4 rounded bg-muted">
                                <p className="font-semibold">TL;DR:</p>
                                <p className="italic">{currentPage.tldr}</p>
                            </div>
                        )}
                        {isContentVisible && (
                            <MarkdownRenderer>{currentPage.content || ''}</MarkdownRenderer>
                        )}
                    </div>
                </main>
            </div>
            {isChatPanelOpen && (
                <Resizable
                    size={{ width: chatPanelWidth, height: '100%' }}
                    minWidth={300}
                    maxWidth="60vw"
                    enable={{ left: true }}
                    onResizeStop={(e, direction, ref, d) => {
                        setChatPanelWidth(chatPanelWidth + d.width);
                    }}
                    handleClasses={{ left: 'border-l-4 border-transparent hover:border-primary transition-colors duration-200' }}
                >
                    <ReportChatPanel />
                </Resizable>
            )}
        </div>
    );
};

export default ReportViewer;