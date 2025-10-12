// src/components/report-viewer/ReportViewer.tsx
'use client';

import React, { useEffect } from 'react';
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

interface ReportViewerProps {
    reportName: string;
}

const ReportViewer: React.FC<ReportViewerProps> = ({ reportName }) => {
    const { loadReport, handleKeyDown, setImagePanelHeight } = useReportStore.getState();
    const {
        _hasHydrated,
        allPages, currentPageIndex, currentImageIndex, isTreeNavOpen, isChatPanelOpen,
        imagePanelHeight, isImageFullscreen, openImageFullscreen,
        closeImageFullscreen, isPromptVisible, isTldrVisible, isContentVisible, isLoading
    } = useReportState(state => ({
        _hasHydrated: state._hasHydrated,
        allPages: state.allPages,
        currentPageIndex: state.currentPageIndex,
        currentImageIndex: state.currentImageIndex,
        isTreeNavOpen: state.isTreeNavOpen,
        isChatPanelOpen: state.isChatPanelOpen,
        imagePanelHeight: state.imagePanelHeight,
        isImageFullscreen: state.isImageFullscreen,
        openImageFullscreen: state.openImageFullscreen,
        closeImageFullscreen: state.closeImageFullscreen,
        isPromptVisible: state.isPromptVisible,
        isTldrVisible: state.isTldrVisible,
        isContentVisible: state.isContentVisible,
        isLoading: state.isLoading,
    }));

    useEffect(() => {
        loadReport(reportName);
    }, [loadReport, reportName]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const currentPage = allPages[currentPageIndex];
    const currentPrompt = currentPage?.imagePrompts?.[0];
    const currentImage = currentPrompt?.images[currentImageIndex];

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
    
    return (
        <div className="h-full w-full bg-background text-foreground flex">
            {isImageFullscreen && currentImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center cursor-pointer" onClick={closeImageFullscreen}>
                    <Image src={currentImage.url} alt={currentImage.alt} className="max-w-[95vw] max-h-[95vh] object-contain" layout="fill" />
                </div>
            )}

            {isTreeNavOpen && <ReportTreeNav />}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="p-2 border-b flex-shrink-0">
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
                        onResizeStop={(e, direction, ref) => {
                            // C22 Fix: Use absolute height from the ref
                            setImagePanelHeight(parseInt(ref.style.height, 10));
                        }}
                        enable={{ bottom: true }}
                        className="relative mb-2 flex-shrink-0"
                    >
                        <div className="w-full h-full bg-black/50 border rounded-lg flex items-center justify-center overflow-hidden relative">
                            {currentImage?.url ? (
                                <Image
                                    src={currentImage.url}
                                    alt={currentImage.alt}
                                    layout="fill"
                                    className="object-contain cursor-pointer"
                                    onClick={openImageFullscreen}
                                    unoptimized // Good for gifs, but also for webp from local
                                />
                            ) : <p>No Image Available</p>}
                        </div>
                    </Resizable>
                    
                    <div className="border-y p-1 flex-shrink-0">
                        <ImageNavigator />
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
            {isChatPanelOpen && <ReportChatPanel />}
        </div>
    );
};

export default ReportViewer;