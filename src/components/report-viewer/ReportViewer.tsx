// src/components/report-viewer/ReportViewer.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useReportStore, useReportState } from '@/stores/reportStore';
import PageNavigator from './PageNavigator';
import ImageNavigator from './ImageNavigator';
import PromptNavigator from './PromptNavigator';
import ReportTreeNav from './ReportTreeNav';
import ReportChatPanel from './ReportChatPanel';
import ReportProgressBar from './ReportProgressBar';
import AudioControls from './AudioControls';
import { FaArrowsAlt } from 'react-icons/fa';
import { Resizable } from 're-resizable';

const ReportViewer: React.FC = () => {
    const { loadReportData, handleKeyDown } = useReportStore.getState();
    const {
        allPages, currentPageIndex, currentImageIndex, isTreeNavOpen, isChatPanelOpen,
        imagePanelHeight, setImagePanelHeight, isImageFullscreen, openImageFullscreen,
        closeImageFullscreen, chatPanelWidth, setChatPanelWidth, isPromptVisible,
        isTldrVisible, isContentVisible, isLoading
    } = useReportState(state => ({
        allPages: state.allPages,
        currentPageIndex: state.currentPageIndex,
        currentImageIndex: state.currentImageIndex,
        isTreeNavOpen: state.isTreeNavOpen,
        isChatPanelOpen: state.isChatPanelOpen,
        imagePanelHeight: state.imagePanelHeight,
        setImagePanelHeight: state.setImagePanelHeight,
        isImageFullscreen: state.isImageFullscreen,
        openImageFullscreen: state.openImageFullscreen,
        closeImageFullscreen: state.closeImageFullscreen,
        chatPanelWidth: state.chatPanelWidth,
        setChatPanelWidth: state.setChatPanelWidth,
        isPromptVisible: state.isPromptVisible,
        isTldrVisible: state.isTldrVisible,
        isContentVisible: state.isContentVisible,
        isLoading: state.isLoading,
    }));

    useEffect(() => {
        loadReportData();
    }, [loadReportData]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const currentPage = allPages[currentPageIndex];
    const currentPrompt = currentPage?.imagePrompts[0];
    const currentImage = currentPrompt?.images[currentImageIndex];

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-background">
                <p className="text-2xl text-muted-foreground animate-pulse">Loading Report...</p>
            </div>
        );
    }

    if (!currentPage) {
        return (
            <div className="flex items-center justify-center h-screen bg-background">
                <p className="text-2xl text-red-500">Could not load report data.</p>
            </div>
        );
    }
    
    return (
        <div className="fixed inset-0 bg-background z-[100] flex pt-16">
            {isImageFullscreen && currentImage && (
                <div className="fixed inset-0 bg-black/90 z-[120] flex justify-center items-center" onClick={closeImageFullscreen}>
                    <img src={currentImage.url} alt={currentImage.alt} className="max-w-[95vw] max-h-[95vh] object-contain" />
                </div>
            )}

            {isTreeNavOpen && <ReportTreeNav />}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="p-2 border-b">
                    <PageNavigator />
                </header>
                <div className="p-2 border-b">
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
                        className="relative mb-2"
                    >
                        <div className="w-full h-full bg-black/50 border rounded-lg flex items-center justify-center overflow-hidden">
                            {currentImage?.url ? (
                                <img
                                    src={currentImage.url}
                                    alt={currentImage.alt}
                                    className="w-full h-full object-contain cursor-pointer"
                                    onClick={openImageFullscreen}
                                />
                            ) : <p>No Image Available</p>}
                        </div>
                    </Resizable>
                    
                    <div className="border-y p-1">
                        <ImageNavigator />
                        {/* AudioControls placeholder/future implementation */}
                        {/* <AudioControls /> */}
                    </div>

                    <div className="flex-1 overflow-y-auto p-2 mt-2 space-y-4">
                        {isPromptVisible && <PromptNavigator />}
                        {isTldrVisible && (
                            <div className="prose prose-sm dark:prose-invert max-w-none p-2 border-l-4 rounded bg-muted">
                                <p className="font-semibold">TL;DR:</p>
                                <p className="italic">{currentPage.tldr}</p>
                            </div>
                        )}
                        {isContentVisible && (
                            <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: currentPage.content.replace(/\n/g, '<br />') }}>
                            </div>
                        )}
                    </div>
                </main>
            </div>
            {isChatPanelOpen && <ReportChatPanel />}
        </div>
    );
};

export default ReportViewer;