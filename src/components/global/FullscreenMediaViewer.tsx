'use client';

import React from 'react';
import { useReportState, useReportStore } from '@/stores/reportStore';
import { AnimatePresence, motion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import MarkdownRenderer from '../shared/MarkdownRenderer';

const FullscreenMediaViewer = () => {
    const { fullscreenMedia, currentPageIndex, allPages } = useReportState(state => ({
        fullscreenMedia: state.fullscreenMedia,
        currentPageIndex: state.currentPageIndex,
        allPages: state.allPages,
    }));
    const { closeFullscreenMedia, prevPageInFullscreen, nextPageInFullscreen } = useReportStore.getState();

    const isLabView = !!fullscreenMedia?.content;

    return (
        <AnimatePresence>
            {fullscreenMedia && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeFullscreenMedia}
                >
                    <div
                        className="relative bg-card border border-border rounded-lg shadow-2xl w-full h-full max-w-[90vw] max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeFullscreenMedia}
                            className="absolute top-2 right-2 z-20 p-2 text-foreground/70 hover:text-foreground bg-background/50 rounded-full"
                            title="Close"
                        >
                            <FaTimes />
                        </button>
                        
                        <div className="w-full md:w-2/3 h-1/2 md:h-full bg-black/50 flex items-center justify-center p-4 relative">
                            <Image
                                src={fullscreenMedia.src}
                                alt="Fullscreen Media"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                            {isLabView && (
                                <>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); prevPageInFullscreen(); }}
                                        disabled={currentPageIndex === 0}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full disabled:opacity-30 hover:bg-black/80 transition-colors z-10"
                                        title="Previous Step"
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); nextPageInFullscreen(); }}
                                        disabled={currentPageIndex >= allPages.length - 1}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full disabled:opacity-30 hover:bg-black/80 transition-colors z-10"
                                        title="Next Step"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </>
                            )}
                        </div>
                        
                        <div className="w-full md:w-1/3 h-1/2 md:h-full p-6 overflow-y-auto">
                            <div className="prose prose-sm dark:prose-invert max-w-none">
                                <MarkdownRenderer>
                                    {(isLabView ? fullscreenMedia.content : fullscreenMedia.description) || ''}
                                </MarkdownRenderer>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FullscreenMediaViewer;