// src/state/reportStore.ts
// Updated on: C1401 (Add state for Ascentia message audio narration.)
// Updated on: C1399 (Implement playback speed control and fix continuous autoplay.)
// Updated on: C1398 (Complete refactor of autoplay and slideshow logic to fix bugs and implement correct timer handling.)
// Updated on: C1397 (Add volume and mute state. Refine slideshow and autoplay logic to fix bugs.)
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { logInfo, logWarn, logError } from '../logger';
import { type ChatMessage } from './multiplayerStore';

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

// --- Raw Data Structures from JSON files ---
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


export interface ReportState {
    reportData: ReportContentData | null;
    imageManifest: ImageManifestData | null;
    allPages: ReportPage[];
    currentPageIndex: number;
    currentImageIndex: number;
    imageVotes: Record<string, number>;
    isTreeNavOpen: boolean;
    expandedSections: Record<string, boolean>;
    isChatPanelOpen: boolean;
    chatPanelWidth: number;
    imagePanelHeight: number;
    isImageFullscreen: boolean;
    votesCastByPage: Record<number, string>;
    reportChatHistory: ChatMessage[];
    reportChatInput: string;
    tokenCount: {
        total: number;
        breakdown: { system: number; context: number; history: number; user: number; response: number; };
    };
    isPromptVisible: boolean;
    isTldrVisible: boolean;
    isContentVisible: boolean;
    isHintVisible: boolean;
    seenImages: Record<string, boolean>;
    // Page Audio State
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
    // Ascentia Message Audio State (NEW C1401)
    ascentiaAudioStatus: 'idle' | 'generating' | 'playing' | 'paused' | 'error';
    ascentiaAudioAutoplay: boolean;
    currentAscentiaAudioUrl: string | null;
    lastAscentiaMessageText: string | null;
}

export interface ReportActions {
    loadReportData: () => Promise<void>;
    nextPage: () => void;
    prevPage: () => void;
    jumpPages: (count: number) => void;
    goToPageByIndex: (pageIndex: number) => void;
    nextImage: () => void;
    prevImage: () => void;
    setCurrentImageIndex: (index: number) => void;
    castVote: (imageId: string, pageIndex: number) => void;
    voteWithKeyboard: () => void;
    jumpToNextUnvotedPage: () => void;
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
    updateTokenCount: (parts: Partial<ReportState['tokenCount']['breakdown']>) => void;
    togglePromptVisibility: () => void;
    toggleTldrVisibility: () => void;
    toggleContentVisibility: () => void;
    toggleHintVisibility: () => void;
    markImageAsSeen: (pageId: string, imageId: string) => void;
    jumpToNextUnseenImage: () => void;
    jumpToFirstUnseenImage: () => void;
    resetProgress: () => void;
    // Page Audio Actions
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
    // Ascentia Message Audio Actions (NEW C1401)
    setAscentiaAudioStatus: (status: ReportState['ascentiaAudioStatus']) => void;
    setAscentiaAutoplay: (enabled: boolean) => void;
    playAscentiaMessage: (messageText: string) => void;
    setCurrentAscentiaAudioUrl: (url: string | null) => void;
    _resetReportStore: () => void;
}

type PersistedReportState = Pick<
    ReportState,
    | 'currentPageIndex' | 'currentImageIndex' | 'votesCastByPage' | 'imageVotes'
    | 'isTreeNavOpen' | 'expandedSections' | 'isChatPanelOpen' | 'chatPanelWidth'
    | 'imagePanelHeight' | 'reportChatHistory' | 'reportChatInput'
    | 'seenImages' | 'isPromptVisible' | 'isTldrVisible' | 'isContentVisible' | 'isHintVisible'
    | 'autoplayEnabled' | 'volume' | 'isMuted' | 'playbackSpeed' | 'ascentiaAudioAutoplay'
>;

const createInitialReportState = (): ReportState => ({
    reportData: null,
    imageManifest: null,
    allPages: [],
    currentPageIndex: 0,
    currentImageIndex: 0,
    imageVotes: {},
    isTreeNavOpen: false,
    expandedSections: {},
    isChatPanelOpen: false,
    chatPanelWidth: 400,
    imagePanelHeight: 300,
    isImageFullscreen: false,
    votesCastByPage: {},
    reportChatHistory: [],
    reportChatInput: '',
    tokenCount: {
        total: 0,
        breakdown: { system: 0, context: 0, history: 0, user: 0, response: 0 },
    },
    isPromptVisible: true,
    isTldrVisible: true,
    isContentVisible: true,
    isHintVisible: true,
    seenImages: {},
    // Page Audio State
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
    // Ascentia Message Audio State (NEW C1401)
    ascentiaAudioStatus: 'idle',
    ascentiaAudioAutoplay: false,
    currentAscentiaAudioUrl: null,
    lastAscentiaMessageText: null,
});

export const useReportStore = create<ReportState & ReportActions>()(
    persist(
        (set, get) => ({
            ...createInitialReportState(),

            // NEW C1401: Ascentia Message Audio Actions
            setAscentiaAudioStatus: (status) => set({ ascentiaAudioStatus: status }),
            setAscentiaAutoplay: (enabled) => set({ ascentiaAudioAutoplay: enabled }),
            setCurrentAscentiaAudioUrl: (url) => set({ currentAscentiaAudioUrl: url }),
            playAscentiaMessage: (messageText) => {
                const { setAscentiaAudioStatus, setCurrentAscentiaAudioUrl } = get();
                setAscentiaAudioStatus('generating');
                set({ lastAscentiaMessageText: messageText });
                
                fetch('/api/tts/generate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: messageText }),
                })
                .then(response => {
                    if (!response.ok) throw new Error(`TTS server failed with status: ${response.status}`);
                    return response.blob();
                })
                .then(audioBlob => {
                    const newUrl = URL.createObjectURL(audioBlob);
                    setCurrentAscentiaAudioUrl(newUrl);
                })
                .catch(error => {
                    logError('[reportStore:playAscentia]', 'Failed to generate audio for Ascentia message', error);
                    setAscentiaAudioStatus('error');
                });
            },
            // ---

            setVolume: (level) => set({ volume: Math.max(0, Math.min(1, level)) }),
            toggleMute: () => set(state => ({ isMuted: !state.isMuted })),
            setPlaybackSpeed: (speed) => {
                const { startSlideshow, playbackStatus } = get();
                set({ playbackSpeed: speed });
                if (playbackStatus === 'playing' || playbackStatus === 'paused') {
                    startSlideshow();
                }
            },

            startSlideshow: () => {
                const { stopSlideshow, allPages, currentPageIndex, duration, setCurrentImageIndex, nextPage, autoplayEnabled, playbackSpeed } = get();
                stopSlideshow(false); 

                const currentPage = allPages[currentPageIndex];
                if (!currentPage || !autoplayEnabled) return;

                const actualDuration = duration / playbackSpeed;
                const actualDurationMs = actualDuration * 1000;
                if (actualDurationMs <= 0) return;

                logInfo('[reportStore:slideshow]', `Starting slideshow for page ${currentPageIndex} with actual duration ${actualDuration}s.`);

                const nextPageTimer = setTimeout(() => {
                    if (get().autoplayEnabled) {
                        logInfo('[reportStore:slideshow]', `Next page timer fired. Advancing page.`);
                        nextPage();
                    }
                }, actualDurationMs + 2000);
                set({ nextPageTimer });

                const images = currentPage.imagePrompts[0]?.images;
                if (!images || images.length <= 1) return;

                const timePerImage = actualDurationMs / images.length;
                let imageIdx = get().currentImageIndex; 

                const slideshowTimer = setInterval(() => {
                    if (!get().autoplayEnabled) {
                        clearInterval(slideshowTimer);
                        return;
                    }
                    imageIdx = (get().currentImageIndex + 1);
                    if (imageIdx < images.length) {
                        setCurrentImageIndex(imageIdx);
                    } else {
                        clearInterval(slideshowTimer);
                        set({ slideshowTimer: null });
                    }
                }, timePerImage);

                set({ slideshowTimer });
            },

            stopSlideshow: (userInitiated = false) => {
                const { slideshowTimer, nextPageTimer } = get();
                if (slideshowTimer) clearInterval(slideshowTimer);
                if (nextPageTimer) clearTimeout(nextPageTimer);

                const currentState = get();
                if (currentState.slideshowTimer || currentState.nextPageTimer) {
                    logInfo('[reportStore:slideshow]', `Stopping slideshow. User initiated: ${userInitiated}`);
                }

                if (userInitiated) {
                    set({ slideshowTimer: null, nextPageTimer: null, autoplayEnabled: false });
                } else {
                    set({ slideshowTimer: null, nextPageTimer: null });
                }
            },
            
            // ... (loadReportData and other actions remain the same)
            loadReportData: async () => {
                const logPrefix = '[store:report:loadV3]';
                if (get().reportData && get().imageManifest) return;

                try {
                    logInfo(logPrefix, 'Fetching report content and image manifest...');
                    const [contentRes, manifestRes] = await Promise.all([
                        fetch('/data/reports/reportContent.json'),
                        fetch('/data/reports/imageManifest.json')
                    ]);

                    if (!contentRes.ok) throw new Error(`Failed to fetch reportContent.json: ${contentRes.statusText}`);
                    if (!manifestRes.ok) throw new Error(`Failed to fetch imageManifest.json: ${manifestRes.statusText}`);

                    const contentData: ReportContentData = await contentRes.json();
                    const manifestData: ImageManifestData = await manifestRes.json();

                    logInfo(logPrefix, `Successfully fetched data. Content: "${contentData.reportTitle}", Manifest: "${manifestData.manifestId}"`);

                    const reconstructedPages: ReportPage[] = [];
                    contentData.sections.forEach(section => {
                        const processPages = (pages: RawReportPage[]) => {
                            (pages || []).forEach(rawPage => {
                                const imagePrompts: ReportImagePrompt[] = [];

                                (rawPage.imageGroupIds || []).forEach((groupId) => {
                                    const groupMeta = manifestData.imageGroups[groupId];
                                    if (groupMeta) {
                                        const images: ReportImage[] = [];
                                        for (let i = 1; i <= groupMeta.imageCount; i++) {
                                            const fileName = `${groupMeta.baseFileName}${i}${groupMeta.fileExtension}`;
                                            const url = `${manifestData.basePath}${groupMeta.path}${fileName}`;
                                            const imageId = `${rawPage.pageId}-${groupId}-${i}`;
                                            images.push({
                                                imageId,
                                                url,
                                                prompt: groupMeta.prompt,
                                                alt: groupMeta.alt,
                                            });
                                        }
                                        imagePrompts.push({
                                            promptId: groupId,
                                            promptText: groupMeta.prompt,
                                            images,
                                        });
                                    } else {
                                        logWarn(logPrefix, `Image group metadata not found for groupId: ${groupId}`);
                                    }
                                });

                                reconstructedPages.push({
                                    pageId: rawPage.pageId,
                                    pageTitle: rawPage.pageTitle,
                                    tldr: rawPage.tldr,
                                    content: rawPage.content,
                                    imagePrompts,
                                });
                            });
                        };
                        
                        if (section.pages) {
                            processPages(section.pages);
                        }
                        if (section.subSections) {
                            section.subSections.forEach(sub => processPages(sub.pages));
                        }
                    });

                    logInfo(logPrefix, `Reconstructed ${reconstructedPages.length} pages.`);
                    const { currentPageIndex, currentImageIndex } = get();
                    const validPageIndex = currentPageIndex >= 0 && currentPageIndex < reconstructedPages.length ? currentPageIndex : 0;
                    
                    set({
                        reportData: contentData,
                        imageManifest: manifestData,
                        allPages: reconstructedPages,
                        currentPageIndex: validPageIndex,
                        currentImageIndex: currentImageIndex || 0,
                    });

                } catch (error) {
                    logError(logPrefix, "Failed to load and process report data.", error);
                }
            },
            
            nextPage: () => get().jumpPages(1),
            prevPage: () => get().jumpPages(-1),

            jumpPages: (count) => {
                const { stopSlideshow, autoplayEnabled, setPlaybackStatus } = get();
                const userInitiated = !autoplayEnabled;
                stopSlideshow(userInitiated);
                set((state) => {
                    const totalPages = state.allPages.length;
                    if (totalPages === 0) return state;
                    let newIndex = state.currentPageIndex + count;
                    if (newIndex >= totalPages) {
                        // C1399: If autoplay is on and we reach the end, turn it off.
                        if (state.autoplayEnabled) {
                            logInfo('store:report', 'Autoplay reached end of report. Disabling.');
                            setPlaybackStatus('idle');
                            return { ...state, autoplayEnabled: false };
                        }
                        newIndex = 0;
                    }
                    if (newIndex < 0) newIndex = totalPages - 1;
                    
                    if (newIndex !== state.currentPageIndex) {
                        logInfo('store:report', `Jumping ${count} pages to index ${newIndex}`);
                        return { currentPageIndex: newIndex, currentImageIndex: 0, currentAudioUrl: null, playbackStatus: 'idle', currentTime: 0, duration: 0 };
                    }
                    return state;
                });
            },

            goToPageByIndex: (pageIndex) => {
                get().stopSlideshow(true);
                const totalPages = get().allPages.length;
                if (pageIndex >= 0 && pageIndex < totalPages) {
                    logInfo('store:report', `Jumping to page by index: ${pageIndex}`);
                    set({ currentPageIndex: pageIndex, currentImageIndex: 0, currentAudioUrl: null, playbackStatus: 'idle', currentTime: 0, duration: 0 });
                } else {
                    logWarn('store:report', `Attempted to jump to invalid page index: ${pageIndex}`);
                }
            },
            
            nextImage: () => {
                get().stopSlideshow(true);
                set((state) => {
                    const currentPage = state.allPages[state.currentPageIndex];
                    const currentPrompt = currentPage?.imagePrompts[0];
                    if (!currentPrompt || currentPrompt.images.length <= 1) return state;
                    const newImageIndex = (state.currentImageIndex + 1) % currentPrompt.images.length;
                    return { currentImageIndex: newImageIndex };
                });
            },

            prevImage: () => {
                get().stopSlideshow(true);
                set((state) => {
                    const currentPage = state.allPages[state.currentPageIndex];
                    const currentPrompt = currentPage?.imagePrompts[0];
                    if (!currentPrompt || currentPrompt.images.length <= 1) return state;
                    const newImageIndex = (state.currentImageIndex - 1 + currentPrompt.images.length) % currentPrompt.images.length;
                    return { currentImageIndex: newImageIndex };
                });
            },
            
            setCurrentImageIndex: (index) => {
                set((state) => {
                    const currentPage = state.allPages[state.currentPageIndex];
                    const totalImages = currentPage?.imagePrompts[0]?.images.length ?? 0;
                    if (index >= 0 && index < totalImages) {
                        return { currentImageIndex: index };
                    }
                    return state;
                });
            },

            castVote: async (imageId, pageIndex) => {
                const { votesCastByPage } = get();
                const alreadyVotedFor = votesCastByPage[pageIndex];
                if (alreadyVotedFor === imageId) return;
                logInfo('store:report', `Casting vote for image: ${imageId} on page ${pageIndex}`);
                set(state => ({
                    votesCastByPage: { ...state.votesCastByPage, [pageIndex]: imageId },
                    imageVotes: { ...state.imageVotes, [imageId]: (state.imageVotes[imageId] || 0) + 1 }
                }));
                try {
                    const response = await fetch('/api/report/vote', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imageId }),
                    });
                    if (!response.ok) throw new Error(await response.text());
                    const result = await response.json();
                    logInfo('store:report', `Vote successful for ${imageId}. New server count: ${result.newVoteCount}`);
                } catch (error) {
                    logWarn('store:report', `Failed to cast vote for ${imageId}. Reverting optimistic update.`, error);
                    set(state => ({
                        votesCastByPage: { ...state.votesCastByPage, [pageIndex]: alreadyVotedFor },
                        imageVotes: { ...state.imageVotes, [imageId]: Math.max(0, (state.imageVotes[imageId] || 1) - 1) }
                    }));
                }
            },
            
            voteWithKeyboard: () => {
                get().stopSlideshow(true);
                const { allPages, currentPageIndex, currentImageIndex, castVote } = get();
                const currentPage = allPages[currentPageIndex];
                const currentPrompt = currentPage?.imagePrompts[0];
                const currentImage = currentPrompt?.images[currentImageIndex];
                if (currentImage) castVote(currentImage.imageId, currentPageIndex);
            },

            jumpToNextUnvotedPage: () => {
                const { allPages, votesCastByPage, goToPageByIndex } = get();
                for (let i = 0; i < allPages.length; i++) {
                    if (!votesCastByPage.hasOwnProperty(i)) {
                        goToPageByIndex(i);
                        return;
                    }
                }
                logInfo('store:report', 'All pages have been voted on!');
            },

            handleKeyDown: (event: KeyboardEvent) => {
                const { stopSlideshow } = get();
                let jumpCount = 1;
                if (event.shiftKey) jumpCount = 5;
                if (event.ctrlKey) jumpCount = 10;

                switch (event.key) {
                    case 'ArrowUp': stopSlideshow(true); get().jumpPages(-jumpCount); break;
                    case 'ArrowDown': stopSlideshow(true); get().jumpPages(jumpCount); break;
                    case 'ArrowLeft': stopSlideshow(true); get().prevImage(); break;
                    case 'ArrowRight': stopSlideshow(true); get().nextImage(); break;
                    case ' ': get().voteWithKeyboard(); break;
                }
            },
            
            toggleTreeNav: () => set(state => ({ isTreeNavOpen: !state.isTreeNavOpen })),
            toggleSectionExpansion: (sectionId) => set(state => ({
                expandedSections: {
                    ...state.expandedSections,
                    [sectionId]: !state.expandedSections[sectionId],
                }
            })),

            setActiveExpansionPath: (pageIndex) => {
                const { reportData } = get();
                if (!reportData) return;

                let activeSectionId: string | null = null;
                let activeSubSectionId: string | null = null;

                let cumulativePages = 0;
                for (const section of reportData.sections) {
                    let pageCounterForSection = 0;
                    
                    const directPagesCount = (section.pages || []).length;
                    if (pageIndex >= cumulativePages && pageIndex < cumulativePages + directPagesCount) {
                        activeSectionId = section.sectionId;
                        break;
                    }
                    pageCounterForSection += directPagesCount;

                    if (section.subSections) {
                        for (const subSection of section.subSections) {
                            const subSectionPageCount = (subSection.pages || []).length;
                            if (pageIndex >= cumulativePages + pageCounterForSection && pageIndex < cumulativePages + pageCounterForSection + subSectionPageCount) {
                                activeSectionId = section.sectionId;
                                activeSubSectionId = subSection.subSectionId;
                                break;
                            }
                            pageCounterForSection += subSectionPageCount;
                        }
                    }
                    if (activeSectionId) break;
                    cumulativePages += pageCounterForSection;
                }

                if (!activeSectionId) return;

                set(state => {
                    const newExpandedSections: Record<string, boolean> = {};
                    
                    for (const section of state.reportData!.sections) {
                        newExpandedSections[section.sectionId] = section.sectionId === activeSectionId;
                        
                        if (section.subSections) {
                            for (const subSection of section.subSections) {
                                newExpandedSections[subSection.subSectionId] = subSection.subSectionId === activeSubSectionId;
                            }
                        }
                    }
                    return { expandedSections: newExpandedSections };
                });
            },

            toggleChatPanel: () => set(state => ({ isChatPanelOpen: !state.isChatPanelOpen })),
            setChatPanelWidth: (width) => set({ chatPanelWidth: Math.max(300, width) }),
            setImagePanelHeight: (height) => set({ imagePanelHeight: Math.max(200, height) }),
            openImageFullscreen: () => set({ isImageFullscreen: true }),
            closeImageFullscreen: () => set({ isImageFullscreen: false }),
            setReportChatInput: (input) => set({ reportChatInput: input }),
            addReportChatMessage: (message) => {
                const { ascentiaAudioAutoplay, playAscentiaMessage } = get();
                set(state => ({
                    reportChatHistory: [...state.reportChatHistory, message].slice(-50),
                }));
                if (message.author === 'Ascentia' && message.status === 'complete' && ascentiaAudioAutoplay) {
                    playAscentiaMessage(message.message);
                }
            },
            updateReportChatMessage: (id, chunk) => set(state => ({
                reportChatHistory: state.reportChatHistory.map(msg =>
                    msg.id === id ? { ...msg, message: msg.message + chunk, status: 'streaming' } : msg
                )
            })),
            updateReportChatStatus: (id, status) => {
                const { ascentiaAudioAutoplay, playAscentiaMessage } = get();
                set(state => ({
                    reportChatHistory: state.reportChatHistory.map(msg =>
                        msg.id === id ? { ...msg, status } : msg
                    )
                }));
                if (status === 'complete') {
                    const finalMessage = get().reportChatHistory.find(msg => msg.id === id);
                    if (finalMessage && ascentiaAudioAutoplay) {
                        playAscentiaMessage(finalMessage.message);
                    }
                }
            },
            clearReportChatHistory: (currentPageTitle) => {
                const initialMessage: ChatMessage = {
                    author: 'Ascentia', flag: '🤖',
                    message: `Ask me anything about "${currentPageTitle}".`, channel: 'system',
                };
                set({
                    reportChatHistory: [initialMessage],
                    reportChatInput: '',
                    tokenCount: createInitialReportState().tokenCount,
                });
            },
            updateTokenCount: (parts) => {
                set(state => {
                    const historyChars = state.reportChatHistory.map(m => (typeof m.author === 'string' ? m.author : m.author.displayName) + m.message).join('').length;
                    const historyTokens = Math.ceil(historyChars / 4);

                    const responseChars = state.reportChatHistory.filter(m => m.author === 'Ascentia').map(m => m.message).join('').length;
                    const responseTokens = Math.ceil(responseChars / 4);

                    const staticSystemPrompt = `<In-Game System Prompt>You are @Ascentia...`;
                    const systemTokens = Math.ceil(staticSystemPrompt.length / 4);

                    const newBreakdown = {
                        system: systemTokens,
                        context: parts.context ?? state.tokenCount.breakdown.context,
                        history: historyTokens,
                        user: parts.user ?? state.tokenCount.breakdown.user,
                        response: responseTokens,
                    };
                    
                    const total = newBreakdown.system + newBreakdown.context + newBreakdown.history + newBreakdown.user;
                    
                    return { tokenCount: { total, breakdown: newBreakdown } };
                });
            },
            togglePromptVisibility: () => set(state => ({ isPromptVisible: !state.isPromptVisible })),
            toggleTldrVisibility: () => set(state => ({ isTldrVisible: !state.isTldrVisible })),
            toggleContentVisibility: () => set(state => ({ isContentVisible: !state.isContentVisible })),
            toggleHintVisibility: () => set(state => ({ isHintVisible: !state.isHintVisible })),
            markImageAsSeen: (pageId, imageId) => {
                const key = `${pageId}-${imageId}`;
                if (get().seenImages[key]) return;
                set(state => ({ seenImages: { ...state.seenImages, [key]: true } }));
            },
            jumpToFirstUnseenImage: () => {
                const { allPages, seenImages, goToPageByIndex } = get();
                for (let p = 0; p < allPages.length; p++) {
                    const page = allPages[p];
                    const image = page.imagePrompts[0]?.images[0];
                    if (image) {
                        const key = `${page.pageId}-${image.imageId}`;
                        if (!seenImages[key]) {
                            goToPageByIndex(p);
                            return;
                        }
                    }
                }
                goToPageByIndex(0);
            },
            jumpToNextUnseenImage: () => {
                const { allPages, seenImages, currentPageIndex, goToPageByIndex } = get();
                const totalPages = allPages.length;
                for (let i = 1; i <= totalPages; i++) {
                    const nextIndex = (currentPageIndex + i) % totalPages;
                    const page = allPages[nextIndex];
                    const image = page.imagePrompts[0]?.images[0];
                    if (image) {
                        const key = `${page.pageId}-${image.imageId}`;
                        if (!seenImages[key]) {
                            goToPageByIndex(nextIndex);
                            return;
                        }
                    }
                }
                logInfo('store:report', 'All images have been seen!');
            },
            resetProgress: () => {
                logInfo('store:report', 'Resetting all image progress.');
                set({ seenImages: {} });
            },
            setPlaybackStatus: (status) => set({ playbackStatus: status }),
            setAutoplay: (enabled) => {
                get().stopSlideshow(false); 
                if (enabled) {
                    set({ autoplayEnabled: true, currentImageIndex: 0 }); 
                } else {
                    set({ autoplayEnabled: false });
                }
            },
            setCurrentAudio: (url, pageIndex) => set(state => {
                if (state.currentAudioPageIndex === pageIndex && state.currentAudioUrl === url) {
                    return state;
                }
                return {
                    currentAudioUrl: url,
                    currentAudioPageIndex: pageIndex,
                    playbackStatus: url ? 'buffering' : 'idle',
                    currentTime: 0,
                    duration: 0,
                };
            }),
            setAudioTime: (time) => set({ currentTime: time }),
            setAudioDuration: (duration) => set({ duration: duration }),
            _resetReportStore: () => set(createInitialReportState()),
        }),
        {
            name: 'ai-ascent-report-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state): PersistedReportState => ({
                currentPageIndex: state.currentPageIndex,
                currentImageIndex: state.currentImageIndex,
                votesCastByPage: state.votesCastByPage,
                imageVotes: state.imageVotes,
                isTreeNavOpen: state.isTreeNavOpen,
                expandedSections: state.expandedSections,
                isChatPanelOpen: state.isChatPanelOpen,
                chatPanelWidth: state.chatPanelWidth,
                imagePanelHeight: state.imagePanelHeight,
                reportChatHistory: state.reportChatHistory,
                reportChatInput: state.reportChatInput,
                seenImages: state.seenImages,
                isPromptVisible: state.isPromptVisible,
                isTldrVisible: state.isTldrVisible,
                isContentVisible: state.isContentVisible,
                isHintVisible: state.isHintVisible,
                autoplayEnabled: state.autoplayEnabled,
                volume: state.volume,
                isMuted: state.isMuted,
                playbackSpeed: state.playbackSpeed,
                ascentiaAudioAutoplay: state.ascentiaAudioAutoplay,
            }),
        }
    )
);

if (process.env.NODE_ENV === 'development') {
    (window as any).reportStore = useReportStore;
}