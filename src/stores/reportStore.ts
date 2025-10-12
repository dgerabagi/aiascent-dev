// src/stores/reportStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';

// Define interfaces for our data structures
interface ReportImage {
    imageId: string;
    url: string;
    prompt: string;
    alt: string;
}

interface ReportImagePrompt {
    promptId: string;
    promptText: string;
    images: ReportImage[];
}

export interface ReportPage {
    pageId: string;
    pageTitle: string;
    tldr: string;
    content: string;
    imagePrompts: ReportImagePrompt[];
}

// Raw Data Structures from JSON files
export interface RawReportPage {
    pageId: string;
    pageTitle: string;
    tldr: string;
    content: string;
    imageGroupIds: string[];
}

export interface RawSubSection {
    subSectionId: string;
    subSectionTitle: string;
    pages: RawReportPage[];
}

export interface RawReportSection {
    sectionId: string;
    sectionTitle: string;
    pages?: RawReportPage[];
    subSections?: RawSubSection[];
}

interface ReportContentData {
    reportId: string;
    reportTitle: string;
    sections: RawReportSection[];
}

interface ImageManifestData {
    manifestId: string;
    basePath: string;
    imageGroups: Record<string, {
        path: string;
        prompt: string;
        alt: string;
        baseFileName: string;
        fileExtension: string;
        imageCount: number;
    }>;
}
// --- End Raw Data Structures ---

export type ChatMessage = {
    id?: string;
    author: string;
    flag: string;
    message: string;
    channel: 'system' | 'local';
    status?: 'thinking' | 'streaming' | 'complete';
};

export interface ReportState {
    _hasHydrated: boolean; // Flag for rehydration
    reportData: ReportContentData | null;
    imageManifest: ImageManifestData | null;
    allPages: ReportPage[];
    currentPageIndex: number;
    currentImageIndex: number;
    isTreeNavOpen: boolean;
    expandedSections: Record<string, boolean>;
    isChatPanelOpen: boolean;
    chatPanelWidth: number;
    imagePanelHeight: number;
    isImageFullscreen: boolean;
    reportChatHistory: ChatMessage[];
    reportChatInput: string;
    isPromptVisible: boolean;
    isTldrVisible: boolean;
    isContentVisible: boolean;
    isLoading: boolean;
    // Main Report Audio State
    playbackStatus: 'idle' | 'generating' | 'buffering' | 'playing' | 'paused' | 'error';
    autoplayEnabled: boolean;
    currentAudioUrl: string | null;
    currentAudioPageIndex: number | null;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    slideshowTimer: NodeJS.Timeout | null;
    nextPageTimer: NodeJS.Timeout | null;
    playbackSpeed: number;
    // C20: Generic/Arbitrary Audio State
    genericPlaybackStatus: 'idle' | 'generating' | 'playing' | 'paused' | 'error';
    genericAudioUrl: string | null;
    genericAudioText: string | null; // The text being played
}

export interface ReportActions {
    setHasHydrated: (hydrated: boolean) => void;
    loadReport: (reportName: string) => Promise<void>;
    nextPage: () => void;
    prevPage: () => void;
    goToPageByIndex: (pageIndex: number) => void;
    nextImage: () => void;
    prevImage: () => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    toggleTreeNav: () => void;
    toggleSectionExpansion: (sectionId: string) => void;
    setActiveExpansionPath: (pageIndex: number) => void;
    toggleChatPanel: () => void;
    setChatPanelWidth: (width: number) => void;
    setImagePanelHeight: (height: number) => void;
    openImageFullscreen: () => void;
    closeImageFullscreen: () => void;
    setReportChatInput: (input: string) => void;
    addReportChatMessage: (message: ChatMessage) => void;
    updateReportChatMessage: (id: string, chunk: string) => void;
    updateReportChatStatus: (id: string, status: ChatMessage['status']) => void;
    clearReportChatHistory: (currentPageTitle: string) => void;
    togglePromptVisibility: () => void;
    toggleTldrVisibility: () => void;
    toggleContentVisibility: () => void;
    // Main Report Audio Actions
    setPlaybackStatus: (status: ReportState['playbackStatus']) => void;
    setAutoplay: (enabled: boolean) => void;
    setCurrentAudio: (url: string | null, pageIndex: number) => void;
    setAudioTime: (time: number) => void;
    setAudioDuration: (duration: number) => void;
    setVolume: (level: number) => void;
    toggleMute: () => void;
    startSlideshow: () => void;
    stopSlideshow: (userInitiated?: boolean) => void;
    setPlaybackSpeed: (speed: number) => void;
    // C20: Generic/Arbitrary Audio Actions
    playArbitraryText: (text: string) => void;
    setGenericPlaybackStatus: (status: ReportState['genericPlaybackStatus']) => void;
    setGenericAudioUrl: (url: string | null) => void;
    stopArbitraryText: () => void;
}

const createInitialReportState = (): ReportState => ({
    _hasHydrated: false,
    reportData: null,
    imageManifest: null,
    allPages: [],
    currentPageIndex: 0,
    currentImageIndex: 0,
    isTreeNavOpen: true,
    expandedSections: {},
    isChatPanelOpen: false,
    chatPanelWidth: 450,
    imagePanelHeight: 400,
    isImageFullscreen: false,
    reportChatHistory: [],
    reportChatInput: '',
    isPromptVisible: true,
    isTldrVisible: true,
    isContentVisible: true,
    isLoading: true,
    // Main Report Audio State
    playbackStatus: 'idle',
    autoplayEnabled: false,
    currentAudioUrl: null,
    currentAudioPageIndex: null,
    currentTime: 0,
    duration: 0,
    volume: 1,
    isMuted: false,
    slideshowTimer: null,
    nextPageTimer: null,
    playbackSpeed: 1,
    // C20: Generic/Arbitrary Audio State
    genericPlaybackStatus: 'idle',
    genericAudioUrl: null,
    genericAudioText: null,
});

export const useReportStore = create<ReportState & ReportActions>()(
    persist(
        (set, get) => ({
            ...createInitialReportState(),
            setHasHydrated: (hydrated) => set({ _hasHydrated: hydrated }),

            loadReport: async (reportName: string) => {
                if (!reportName) {
                    console.error("loadReport called with undefined reportName.");
                    set({ isLoading: false });
                    return;
                }
                // Reset state before loading new report to prevent data bleed
                set(createInitialReportState());
                set({ _hasHydrated: true, isLoading: true });

                try {
                    const [contentRes, manifestRes] = await Promise.all([
                        fetch(`/data/${reportName}_content.json`),
                        fetch(`/data/${reportName}_imagemanifest.json`),
                    ]);

                    if (!contentRes.ok) throw new Error(`Failed to fetch ${reportName}_content.json: ${contentRes.statusText}`);
                    if (!manifestRes.ok) throw new Error(`Failed to fetch ${reportName}_imagemanifest.json: ${manifestRes.statusText}`);

                    const contentData: ReportContentData = await contentRes.json();
                    const manifestData: ImageManifestData = await manifestRes.json();
                    
                    const reconstructedPages: ReportPage[] = [];
                    contentData.sections.forEach(section => {
                        const processPages = (pages: RawReportPage[]) => {
                            (pages || []).forEach(rawPage => {
                                const imagePrompts: ReportImagePrompt[] = (rawPage.imageGroupIds || []).map(groupId => {
                                    const groupMeta = manifestData.imageGroups[groupId];
                                    if (!groupMeta) {
                                        console.warn(`Image group metadata not found for groupId: ${groupId}`);
                                        return null;
                                    }

                                    const images: ReportImage[] = [];
                                    let imageBasePath = manifestData.basePath;
                                    
                                    if (reportName === 'showcase' && imageBasePath && !imageBasePath.startsWith('/assets/')) {
                                        console.warn(`[reportStore] Correcting image basePath for '${reportName}'. Path was missing '/assets' prefix. Original: "${manifestData.basePath}"`);
                                        imageBasePath = `/assets${manifestData.basePath.startsWith('/') ? '' : '/'}${manifestData.basePath}`;
                                    }
                                    
                                    if (groupMeta.imageCount === 1 && !groupMeta.baseFileName.endsWith('-')) {
                                        const fileName = `${groupMeta.baseFileName}${groupMeta.fileExtension}`;
                                        const url = `${imageBasePath}${groupMeta.path}${fileName}`;
                                        images.push({
                                            imageId: `${rawPage.pageId}-${groupId}-1`,
                                            url,
                                            prompt: groupMeta.prompt,
                                            alt: groupMeta.alt,
                                        });
                                    } else {
                                        for (let i = 1; i <= groupMeta.imageCount; i++) {
                                            const fileName = `${groupMeta.baseFileName}${i}${groupMeta.fileExtension}`;
                                            const url = `${imageBasePath}${groupMeta.path}${fileName}`;
                                            images.push({
                                                imageId: `${rawPage.pageId}-${groupId}-${i}`,
                                                url,
                                                prompt: groupMeta.prompt,
                                                alt: groupMeta.alt,
                                            });
                                        }
                                    }
                                    
                                    return {
                                        promptId: groupId,
                                        promptText: groupMeta.prompt,
                                        images,
                                    };
                                }).filter((p): p is ReportImagePrompt => p !== null);

                                reconstructedPages.push({
                                    pageId: rawPage.pageId,
                                    pageTitle: rawPage.pageTitle,
                                    tldr: rawPage.tldr,
                                    content: rawPage.content,
                                    imagePrompts,
                                });
                            });
                        };
                        
                        if (section.pages) processPages(section.pages);
                        if (section.subSections) section.subSections.forEach(sub => processPages(sub.pages));
                    });
                    
                    set({
                        reportData: contentData,
                        imageManifest: manifestData,
                        allPages: reconstructedPages,
                        isLoading: false,
                    });
                    get().setActiveExpansionPath(get().currentPageIndex);
                } catch (error) {
                    console.error(`Failed to load and process report data for ${reportName}.`, error);
                    set({ isLoading: false });
                }
            },
            
            // C27 Autoplay Fix: Implement full slideshow logic
            startSlideshow: () => {
                const { stopSlideshow, allPages, currentPageIndex, duration, nextPage, autoplayEnabled, playbackSpeed } = get();
                stopSlideshow(false);

                const currentPage = allPages[currentPageIndex];
                if (!currentPage || !autoplayEnabled) return;

                const actualDuration = duration / playbackSpeed;
                const actualDurationMs = actualDuration * 1000;
                if (actualDurationMs <= 0 || !isFinite(actualDurationMs)) return;

                console.log(`[reportStore] Starting slideshow for page ${currentPageIndex} with actual duration ${actualDuration}s.`);

                const nextPageTimer = setTimeout(() => {
                    if (get().autoplayEnabled) {
                        console.log(`[reportStore] Autoplay timer finished. Advancing to next page.`);
                        nextPage();
                    }
                }, actualDurationMs + 2000); // 2-second pause before next page
                set({ nextPageTimer });

                const images = currentPage.imagePrompts[0]?.images;
                if (!images || images.length <= 1) return;

                const timePerImage = actualDurationMs / images.length;
                
                const slideshowTimer = setInterval(() => {
                    if (!get().autoplayEnabled) {
                        clearInterval(slideshowTimer);
                        return;
                    }
                    set(state => {
                        const nextImageIndex = state.currentImageIndex + 1;
                        if (nextImageIndex < images.length) {
                            return { currentImageIndex: nextImageIndex };
                        } else {
                            // All images shown, stop this interval
                            clearInterval(slideshowTimer);
                            return { slideshowTimer: null };
                        }
                    });
                }, timePerImage);

                set({ slideshowTimer });
            },
            
            stopSlideshow: (userInitiated = false) => {
                const { slideshowTimer, nextPageTimer } = get();
                if (slideshowTimer) clearInterval(slideshowTimer);
                if (nextPageTimer) clearTimeout(nextPageTimer);
                if (userInitiated) {
                    set({ slideshowTimer: null, nextPageTimer: null, autoplayEnabled: false });
                } else {
                    set({ slideshowTimer: null, nextPageTimer: null });
                }
            },

            playArbitraryText: async (text: string) => {
                const { genericPlaybackStatus, genericAudioText, stopArbitraryText } = get();

                if (genericPlaybackStatus === 'playing' && genericAudioText === text) {
                    stopArbitraryText(); 
                    return;
                }
                
                stopArbitraryText();
                set({ genericPlaybackStatus: 'generating', genericAudioText: text });

                try {
                    const response = await fetch('/api/tts', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ text }),
                    });
                    if (!response.ok) throw new Error(`TTS server failed with status: ${response.status}`);
                    const audioBlob = await response.blob();
                    const newUrl = URL.createObjectURL(audioBlob);
                    set({ genericAudioUrl: newUrl, genericPlaybackStatus: 'playing' });
                } catch (error) {
                    console.error('[reportStore] Failed to play arbitrary text:', error);
                    set({ genericPlaybackStatus: 'error' });
                }
            },
            stopArbitraryText: () => {
                set({ genericPlaybackStatus: 'idle', genericAudioUrl: null, genericAudioText: null });
            },
            setGenericPlaybackStatus: (status) => set({ genericPlaybackStatus: status }),
            setGenericAudioUrl: (url) => set({ genericAudioUrl: url }),

            nextPage: () => {
                get().stopSlideshow(false); // Stop any timers before changing page
                set(state => {
                    const newIndex = (state.currentPageIndex + 1) % state.allPages.length;
                    // If autoplay reaches the end, turn it off.
                    if (newIndex === 0 && state.currentPageIndex === state.allPages.length - 1 && state.autoplayEnabled) {
                        return { currentPageIndex: newIndex, currentImageIndex: 0, autoplayEnabled: false, playbackStatus: 'idle' };
                    }
                    return { currentPageIndex: newIndex, currentImageIndex: 0, playbackStatus: 'idle' };
                });
            },
            prevPage: () => {
                get().stopSlideshow(true); // User initiated, so disable autoplay
                set(state => ({
                    currentPageIndex: (state.currentPageIndex - 1 + state.allPages.length) % state.allPages.length,
                    currentImageIndex: 0,
                }));
            },
            goToPageByIndex: (pageIndex) => {
                get().stopSlideshow(true); // User initiated
                if (pageIndex >= 0 && pageIndex < get().allPages.length) {
                    set({ currentPageIndex: pageIndex, currentImageIndex: 0 });
                }
            },
            nextImage: () => {
                get().stopSlideshow(true); // User initiated
                set(state => {
                    const currentPage = state.allPages[state.currentPageIndex];
                    const totalImages = currentPage?.imagePrompts?.[0]?.images.length ?? 0;
                    if (totalImages <= 1) return state;
                    return { currentImageIndex: (state.currentImageIndex + 1) % totalImages };
                });
            },
            prevImage: () => {
                get().stopSlideshow(true); // User initiated
                set(state => {
                    const currentPage = state.allPages[state.currentPageIndex];
                    const totalImages = currentPage?.imagePrompts?.[0]?.images.length ?? 0;
                    if (totalImages <= 1) return state;
                    return { currentImageIndex: (state.currentImageIndex - 1 + totalImages) % totalImages };
                });
            },
            handleKeyDown: (event: KeyboardEvent) => {
                const target = event.target as HTMLElement;
                if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) return;
                if (event.key.startsWith('Arrow')) event.preventDefault();
                switch (event.key) {
                    case 'ArrowUp': get().prevPage(); break;
                    case 'ArrowDown': get().nextPage(); break;
                    case 'ArrowLeft': get().prevImage(); break;
                    case 'ArrowRight': get().nextImage(); break;
                }
            },
            toggleTreeNav: () => set(state => ({ isTreeNavOpen: !state.isTreeNavOpen })),
            toggleSectionExpansion: (sectionId) => set(state => ({ expandedSections: { ...state.expandedSections, [sectionId]: !state.expandedSections[sectionId] } })),
            setActiveExpansionPath: (pageIndex) => {
                const { reportData } = get();
                if (!reportData) return;
                let pageCounter = 0;
                let activeSectionId: string | null = null;
                let activeSubSectionId: string | null = null;
                for (const section of reportData.sections) {
                    const processPages = (pages: RawReportPage[], currentSubSectionId?: string) => {
                        for (let i = 0; i < (pages || []).length; i++) {
                            if (pageCounter === pageIndex) {
                                activeSectionId = section.sectionId;
                                if (currentSubSectionId) activeSubSectionId = currentSubSectionId;
                                return true;
                            }
                            pageCounter++;
                        }
                        return false;
                    };
                    if (section.pages && processPages(section.pages)) break;
                    if (section.subSections) {
                        for (const sub of section.subSections) {
                            if (processPages(sub.pages, sub.subSectionId)) break;
                        }
                    }
                    if (activeSectionId) break;
                }
                if (activeSectionId) {
                    set(state => ({ expandedSections: { ...state.expandedSections, [activeSectionId!]: true, ...(activeSubSectionId && { [activeSubSectionId]: true }), } }));
                }
            },
            toggleChatPanel: () => set(state => ({ isChatPanelOpen: !state.isChatPanelOpen })),
            setChatPanelWidth: (width) => set({ chatPanelWidth: Math.max(300, width) }),
            setImagePanelHeight: (height) => set({ imagePanelHeight: Math.max(200, height) }),
            openImageFullscreen: () => set({ isImageFullscreen: true }),
            closeImageFullscreen: () => set({ isImageFullscreen: false }),
            setReportChatInput: (input) => set({ reportChatInput: input }),
            addReportChatMessage: (message) => set(state => ({ reportChatHistory: [...state.reportChatHistory, message].slice(-50), })),
            updateReportChatMessage: (id, chunk) => set(state => ({ reportChatHistory: state.reportChatHistory.map(msg => msg.id === id ? { ...msg, message: msg.message + chunk, status: 'streaming' } : msg) })),
            updateReportChatStatus: (id, status) => set(state => ({ reportChatHistory: state.reportChatHistory.map(msg => msg.id === id ? { ...msg, status } : msg) })),
            clearReportChatHistory: (currentPageTitle) => {
                const initialMessage: ChatMessage = { author: 'Ascentia', flag: '🤖', message: `Ask me anything about "${currentPageTitle}".`, channel: 'system', };
                set({ reportChatHistory: [initialMessage], reportChatInput: '' });
            },
            togglePromptVisibility: () => set(state => ({ isPromptVisible: !state.isPromptVisible })),
            toggleTldrVisibility: () => set(state => ({ isTldrVisible: !state.isTldrVisible })),
            toggleContentVisibility: () => set(state => ({ isContentVisible: !state.isContentVisible })),
            setPlaybackStatus: (status) => set({ playbackStatus: status }),
            setAutoplay: (enabled) => { 
                get().stopSlideshow(!enabled); 
                set({ autoplayEnabled: enabled }); 
                if (enabled) {
                    set({ currentImageIndex: 0 });
                }
            },
            setCurrentAudio: (url, pageIndex) => set({ currentAudioUrl: url, currentAudioPageIndex: pageIndex, playbackStatus: url ? 'buffering' : 'idle', currentTime: 0, duration: 0 }),
            setAudioTime: (time) => set({ currentTime: time }),
            setAudioDuration: (duration) => set({ duration: duration }),
            setVolume: (level) => set({ volume: Math.max(0, Math.min(1, level)) }),
            toggleMute: () => set(state => ({ isMuted: !state.isMuted })),
            setPlaybackSpeed: (speed) => {
                set({ playbackSpeed: speed });
                // If currently playing, restart the slideshow with the new speed
                if (get().playbackStatus === 'playing' || get().playbackStatus === 'paused') {
                    get().startSlideshow();
                }
            },
        }),
        {
            name: 'aiascent-dev-report-storage',
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                if (state) state.setHasHydrated(true);
            },
            partialize: (state) => ({
                currentPageIndex: state.currentPageIndex,
                currentImageIndex: state.currentImageIndex,
                isTreeNavOpen: state.isTreeNavOpen,
                expandedSections: state.expandedSections,
                isChatPanelOpen: state.isChatPanelOpen,
                chatPanelWidth: state.chatPanelWidth,
                imagePanelHeight: state.imagePanelHeight,
                isPromptVisible: state.isPromptVisible,
                isTldrVisible: state.isTldrVisible,
                isContentVisible: state.isContentVisible,
                autoplayEnabled: state.autoplayEnabled,
                volume: state.volume,
                isMuted: state.isMuted,
                playbackSpeed: state.playbackSpeed,
            }),
        }
    )
);


// Hook for components to subscribe to state changes
export const useReportState = <T>(selector: (state: ReportState & ReportActions) => T) => {
    return useReportStore(selector, shallow);
};