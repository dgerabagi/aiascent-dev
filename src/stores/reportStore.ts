// src/stores/reportStore.ts
// Updated on: C97 (Implement fullscreen navigation actions)
// Updated on: C96 (Add content to FullscreenMedia)
// ... (rest of history ommitted for brevity)
import { createWithEqualityFn } from 'zustand/traditional';
import { persist, createJSONStorage } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';

// ... (interfaces ommitted for brevity)
export interface ReportImage {
    imageId: string;
    url: string;
    prompt: string;
    alt: string;
}

export interface ReportImagePrompt {
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

export interface ReportContentData {
    reportId: string;
    reportTitle: string;
    sections: RawReportSection[];
}

export interface ImageManifestData {
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
export type ChatMessage = {
    id?: string;
    author: string;
    flag: string;
    message: string;
    channel: 'system' | 'local';
    status?: 'thinking' | 'streaming' | 'complete';
};

const WHITEPAPER_DEFAULT_SUGGESTIONS = ['How does DCE work?', 'How do I install DCE?'];
const SHOWCASE_DEFAULT_SUGGESTIONS = ["What is the 'fissured workplace'?", "What is Cognitive Security (COGSEC)?"];
const ACADEMY_DEFAULT_SUGGESTIONS = ["Can you explain this concept in simpler terms?", "How does this apply to a real-world project?", "What is the key takeaway from this page?"];


type LastSuggestionRequest = {
    type: 'page' | 'conversation';
    payload: {
        reportName: string;
        context: string;
    };
} | null;

interface FullscreenMedia {
    src: string;
    description: string;
    content?: string; // C96: Added for lab content
}

export interface ReportState {
    reportName: string | null; // C42: To track current report context
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
    isFullscreen: boolean; // C45: For fullscreen mode
    fullscreenMedia: FullscreenMedia | null; // C54: For fullscreen GIF viewer
    reportChatHistory: ChatMessage[];
    reportChatInput: string;
    suggestedPrompts: string[]; // C35: New state for dynamic suggestions
    suggestionsStatus: 'idle' | 'loading' | 'error'; // C43: New state for suggestion generation
    lastSuggestionRequest: LastSuggestionRequest; // C49: For refresh button
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
    // Generic/Arbitrary Audio State
    genericPlaybackStatus: 'idle' | 'generating' | 'playing' | 'paused' | 'error';
    genericAudioUrl: string | null;
    genericAudioText: string | null; // The text being played
}

export interface ReportActions {
    setHasHydrated: (hydrated: boolean) => void;
    loadReport: (reportData: ReportContentData, imageManifest: ImageManifestData) => Promise<void>;
    nextPage: () => void;
    prevPage: () => void;
    goToPageByIndex: (pageIndex: number) => void;
    nextPageInFullscreen: () => void; // C97: New action
    prevPageInFullscreen: () => void; // C97: New action
    nextImage: () => void;
    prevImage: () => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    toggleTreeNav: () => void;
    toggleSectionExpansion: (sectionId: string) => void;
    setActiveExpansionPath: (pageIndex: number) => void;
    toggleChatPanel: () => void;
    setChatPanelWidth: (width: number) => void;
    setImagePanelHeight: (height: number) => void;
    toggleFullscreen: (element: HTMLElement | null) => void; // C45
    setIsFullscreen: (isFullscreen: boolean) => void; // C45
    openFullscreenMedia: (media: FullscreenMedia) => void; // C54
    closeFullscreenMedia: () => void; // C54
    setReportChatInput: (input: string) => void;
    setSuggestedPrompts: (prompts: string[]) => void; // C35: Action to update suggestions
    fetchPageSuggestions: (page: ReportPage) => Promise<void>; // C90: Removed reportName
    fetchConversationSuggestions: (history: ChatMessage[]) => Promise<void>; // C90: Removed reportName
    regenerateSuggestions: () => Promise<void>; // C49: New
    addReportChatMessage: (message: ChatMessage) => void;
    updateReportChatMessage: (id: string, chunk: string) => void;
    setReportChatMessage: (id: string, message: string) => void; // C38: New action
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
    // Generic/Arbitrary Audio Actions
    playArbitraryText: (text: string) => void;
    setGenericPlaybackStatus: (status: ReportState['genericPlaybackStatus']) => void;
    setGenericAudioUrl: (url: string | null) => void;
    stopArbitraryText: () => void;
}


// ... (createInitialReportState ommitted for brevity)
const createInitialReportState = (): ReportState => ({
    reportName: null,
    _hasHydrated: false,
    reportData: null,
    imageManifest: null,
    allPages: [],
    currentPageIndex: 0,
    currentImageIndex: 0,
    // C28: Set minimalist defaults
    isTreeNavOpen: false,
    expandedSections: {},
    isChatPanelOpen: false,
    chatPanelWidth: 450,
    imagePanelHeight: 400,
    isFullscreen: false, // C45
    fullscreenMedia: null, // C54
    reportChatHistory: [],
    reportChatInput: '',
    suggestedPrompts: WHITEPAPER_DEFAULT_SUGGESTIONS, // C42: Default to whitepaper, will be overridden on load
    suggestionsStatus: 'idle', // C43
    lastSuggestionRequest: null, // C49
    isPromptVisible: false,
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
    // Generic/Arbitrary Audio State
    genericPlaybackStatus: 'idle',
    genericAudioUrl: null,
    genericAudioText: null,
});

const getFallbackSuggestions = (reportName: string | null) => {
    if (!reportName) return SHOWCASE_DEFAULT_SUGGESTIONS;
    if (reportName.startsWith('v2v_')) return ACADEMY_DEFAULT_SUGGESTIONS;
    if (reportName === 'whitepaper') return WHITEPAPER_DEFAULT_SUGGESTIONS;
    return SHOWCASE_DEFAULT_SUGGESTIONS;
};


const _fetchSuggestions = async (
    suggestionType: 'page' | 'conversation',
    context: string,
    reportName: string
): Promise<string[] | null> => {
    const MAX_RETRIES = 3;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            let knowledgeBase = 'report'; // default
            if (reportName === 'whitepaper') {
                knowledgeBase = 'dce';
            } else if (reportName.startsWith('v2v_')) {
                knowledgeBase = 'academy';
            }

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    task: 'generate_suggestions',
                    suggestionType,
                    context,
                    reportName, // C89: Pass reportName to backend for persona-specific prompts
                    knowledgeBase, // C91: Pass knowledgeBase to backend for RAG lookup
                }),
            });

            if (response.status >= 500) {
                console.warn(`[reportStore] Suggestion fetch attempt ${attempt} failed with status ${response.status}. Retrying...`);
                if (attempt === MAX_RETRIES) throw new Error(`Failed after ${MAX_RETRIES} attempts. Last status: ${response.status}`);
                await new Promise(res => setTimeout(res, 1000 * attempt));
                continue;
            }

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API error: ${response.status} ${errorText}`);
            }

            const suggestions = await response.json();
            if (Array.isArray(suggestions) && suggestions.length > 0) {
                return suggestions;
            } else {
                throw new Error('Invalid suggestions format');
            }
        } catch (error) {
            console.error(`[reportStore] Error on suggestion fetch attempt ${attempt}:`, error);
            if (attempt === MAX_RETRIES) return null;
        }
    }
    return null;
};


export const useReportStore = createWithEqualityFn<ReportState & ReportActions>()(
    persist(
        (set, get) => ({
            ...createInitialReportState(),
            setHasHydrated: (hydrated) => set({ _hasHydrated: hydrated }),

            // ... (fetchPageSuggestions, fetchConversationSuggestions, regenerateSuggestions ommitted for brevity)
            fetchPageSuggestions: async (page: ReportPage) => {
                const { suggestionsStatus, reportName } = get(); // C90: Get reportName from store
                if (suggestionsStatus === 'loading' || !page || !reportName) return;

                const context = `Page Title: ${page.pageTitle || 'N/A'}\nTL;DR: ${page.tldr || 'N/A'}\nContent: ${page.content || 'N/A'}`;
                const payload = { reportName, context };
                set({ suggestionsStatus: 'loading', lastSuggestionRequest: { type: 'page', payload } });

                const suggestions = await _fetchSuggestions('page', context, reportName);
                
                // The guard clause now works as intended for report transitions
                if (get().reportName !== reportName) {
                    console.log(`[reportStore] Stale page suggestions for "${reportName}" ignored.`);
                    return;
                }

                if (suggestions) {
                    set({ suggestedPrompts: suggestions, suggestionsStatus: 'idle' });
                } else {
                    set({ suggestedPrompts: getFallbackSuggestions(reportName), suggestionsStatus: 'error' });
                }
            },

            fetchConversationSuggestions: async (history: ChatMessage[]) => {
                const { suggestionsStatus, reportName } = get(); // C90: Get reportName from store
                if (suggestionsStatus === 'loading' || history.length === 0 || !reportName) return;
                
                // Take the last 2 messages (user + assistant)
                const relevantHistory = history.slice(-2);
                const context = relevantHistory.map(m => `${m.author}: ${m.message}`).join('\n\n');
                const payload = { reportName, context };
                set({ suggestionsStatus: 'loading', lastSuggestionRequest: { type: 'conversation', payload } });

                const suggestions = await _fetchSuggestions('conversation', context, reportName);

                if (get().reportName !== reportName) {
                    console.log(`[reportStore] Stale conversation suggestions for "${reportName}" ignored.`);
                    return;
                }

                if (suggestions) {
                    set({ suggestedPrompts: suggestions, suggestionsStatus: 'idle' });
                } else {
                    set({ suggestedPrompts: getFallbackSuggestions(reportName), suggestionsStatus: 'error' });
                }
            },

            regenerateSuggestions: async () => {
                const { lastSuggestionRequest } = get();
                if (!lastSuggestionRequest || get().suggestionsStatus === 'loading') return;

                const { type, payload } = lastSuggestionRequest;
                set({ suggestionsStatus: 'loading' });

                const suggestions = await _fetchSuggestions(type, payload.context, payload.reportName);

                if (get().reportName !== payload.reportName) {
                    console.log(`[reportStore] Stale regenerated suggestions for "${payload.reportName}" ignored.`);
                    return;
                }
                
                if (suggestions) {
                    set({ suggestedPrompts: suggestions, suggestionsStatus: 'idle' });
                } else {
                    set({ suggestedPrompts: getFallbackSuggestions(payload.reportName), suggestionsStatus: 'error' });
                }
            },

            loadReport: async (contentData: ReportContentData, imageManifest: ImageManifestData) => {
                if (!contentData || !imageManifest) {
                    console.error("loadReport called with undefined data.");
                    set({ isLoading: false });
                    return;
                }
                const reportNameFromData = contentData.reportId;
                
                set(createInitialReportState());

                const defaultSuggestions = getFallbackSuggestions(reportNameFromData);

                set({ 
                    reportName: reportNameFromData, // C90: Use the ID from the data file as the source of truth
                    _hasHydrated: true, 
                    isLoading: true,
                    suggestedPrompts: defaultSuggestions,
                });

                try {
                    const reconstructedPages: ReportPage[] = [];
                    contentData.sections.forEach(section => {
                        const processPages = (pages: RawReportPage[]) => {
                            (pages || []).forEach(rawPage => {
                                const imagePrompts: ReportImagePrompt[] = (rawPage.imageGroupIds || []).map(groupId => {
                                    const groupMeta = imageManifest.imageGroups[groupId];
                                    if (!groupMeta) {
                                        console.warn(`Image group metadata not found for groupId: ${groupId}`);
                                        return null;
                                    }

                                    const images: ReportImage[] = [];
                                    const imageBasePath = imageManifest.basePath;
                                    
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
                        imageManifest: imageManifest,
                        allPages: reconstructedPages,
                        isLoading: false,
                    });
                    get().setActiveExpansionPath(get().currentPageIndex);
                } catch (error) {
                    console.error(`Failed to process report data for ${reportNameFromData}.`, error);
                    set({ isLoading: false });
                }
            },
            
            // ... (rest of actions ommitted for brevity)
            startSlideshow: () => {
                const { stopSlideshow, allPages, currentPageIndex, duration, nextPage, autoplayEnabled, playbackSpeed } = get();
                stopSlideshow(false); // Stop any existing timers

                const currentPage = allPages[currentPageIndex];
                if (!currentPage || !autoplayEnabled) return;

                const actualDuration = duration / playbackSpeed;
                const actualDurationMs = actualDuration * 1000;

                if (actualDurationMs <= 0 || !isFinite(actualDurationMs)) return;

                const nextPageTimer = setTimeout(() => {
                    if (get().autoplayEnabled) {
                        nextPage();
                    }
                }, actualDurationMs + 500);
                set({ nextPageTimer });

                const images = currentPage.imagePrompts?.[0]?.images;
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

                // C95: Replace "VS Code" with "V S Code" for better TTS pronunciation
                const modifiedText = text.replace(/VS Code/g, 'V S Code');
                set({ genericPlaybackStatus: 'generating', genericAudioText: text }); // Store original text for state comparison

                try {
                    const response = await fetch('/api/tts', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ text: modifiedText }), // Send modified text to API
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
                const { genericAudioUrl } = get();
                if (genericAudioUrl) URL.revokeObjectURL(genericAudioUrl);
                set({ genericPlaybackStatus: 'idle', genericAudioUrl: null, genericAudioText: null });
            },
            setGenericPlaybackStatus: (status) => set({ genericPlaybackStatus: status }),
            setGenericAudioUrl: (url) => set({ genericAudioUrl: url }),

            nextPage: () => {
                get().stopSlideshow(false);
                set(state => {
                    const newIndex = (state.currentPageIndex + 1) % state.allPages.length;
                    if (newIndex === 0 && state.currentPageIndex === state.allPages.length - 1 && state.autoplayEnabled) {
                        return { currentPageIndex: newIndex, currentImageIndex: 0, autoplayEnabled: false, playbackStatus: 'idle' };
                    }
                    return { currentPageIndex: newIndex, currentImageIndex: 0, playbackStatus: 'idle' };
                });
            },
            prevPage: () => {
                get().stopSlideshow(true);
                set(state => ({
                    currentPageIndex: (state.currentPageIndex - 1 + state.allPages.length) % state.allPages.length,
                    currentImageIndex: 0,
                    playbackStatus: 'idle',
                }));
            },
            nextPageInFullscreen: () => {
                set(state => {
                    const newIndex = Math.min(state.allPages.length - 1, state.currentPageIndex + 1);
                    if (newIndex === state.currentPageIndex) return state;

                    const newPage = state.allPages[newIndex];
                    const newImage = newPage?.imagePrompts?.[0]?.images?.[0];
                    if (!newPage || !newImage) return state;
                    
                    return {
                        currentPageIndex: newIndex,
                        currentImageIndex: 0,
                        fullscreenMedia: {
                            src: newImage.url,
                            description: newImage.prompt,
                            content: newPage.content,
                        }
                    };
                });
            },
            prevPageInFullscreen: () => {
                set(state => {
                    const newIndex = Math.max(0, state.currentPageIndex - 1);
                    if (newIndex === state.currentPageIndex) return state;

                    const newPage = state.allPages[newIndex];
                    const newImage = newPage?.imagePrompts?.[0]?.images?.[0];
                    if (!newPage || !newImage) return state;

                    return {
                        currentPageIndex: newIndex,
                        currentImageIndex: 0,
                        fullscreenMedia: {
                            src: newImage.url,
                            description: newImage.prompt,
                            content: newPage.content,
                        }
                    };
                });
            },
            goToPageByIndex: (pageIndex) => {
                get().stopSlideshow(true);
                if (pageIndex >= 0 && pageIndex < get().allPages.length) {
                    set({ currentPageIndex: pageIndex, currentImageIndex: 0, playbackStatus: 'idle' });
                }
            },
            nextImage: () => {
                get().stopSlideshow(true);
                set(state => {
                    const currentPage = state.allPages[state.currentPageIndex];
                    const totalImages = currentPage?.imagePrompts?.[0]?.images.length ?? 0;
                    if (totalImages <= 1) return state;
                    return { currentImageIndex: (state.currentImageIndex + 1) % totalImages };
                });
            },
            prevImage: () => {
                get().stopSlideshow(true);
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
            setIsFullscreen: (isFullscreen) => set({ isFullscreen }),
            toggleFullscreen: (element) => {
                if (!document.fullscreenElement) {
                    element?.requestFullscreen().catch(err => {
                      console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                    });
                  } else {
                    document.exitFullscreen();
                  }
            },
            openFullscreenMedia: (media) => set({ fullscreenMedia: media }),
            closeFullscreenMedia: () => set({ fullscreenMedia: null }),
            setReportChatInput: (input) => set({ reportChatInput: input }),
            setSuggestedPrompts: (prompts) => set({ suggestedPrompts: prompts }),
            addReportChatMessage: (message) => set(state => ({ reportChatHistory: [...state.reportChatHistory, message].slice(-50), })),
            updateReportChatMessage: (id, chunk) => set(state => ({ reportChatHistory: state.reportChatHistory.map(msg => msg.id === id ? { ...msg, message: msg.message + chunk, status: 'streaming' } : msg) })),
            setReportChatMessage: (id, message) => set(state => ({ reportChatHistory: state.reportChatHistory.map(msg => msg.id === id ? { ...msg, message } : msg) })),
            updateReportChatStatus: (id, status) => set(state => ({ reportChatHistory: state.reportChatHistory.map(msg => msg.id === id ? { ...msg, status } : msg) })),
            clearReportChatHistory: (currentPageTitle) => {
                const { reportName, fetchPageSuggestions, allPages, currentPageIndex } = get();
                const initialMessage: ChatMessage = { author: 'Ascentia', flag: '🤖', message: `Ask me anything about "${currentPageTitle}".`, channel: 'system', };
                set({
                    reportChatHistory: [initialMessage],
                    reportChatInput: '',
                });
                const currentPage = allPages[currentPageIndex];
                if (currentPage && !reportName?.startsWith('v2v-academy-lab')) {
                    fetchPageSuggestions(currentPage); // C90: Removed reportName
                }
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
            setVolume: (level) => set({ volume: level }),
            toggleMute: () => set(state => ({ isMuted: !state.isMuted })),
            setPlaybackSpeed: (speed) => set({ playbackSpeed: speed }),
        }),
        {
            name: 'aiascent-dev-report-storage',
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                if (state) state.setHasHydrated(true);
            },
            partialize: (state) => ({
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

export const useReportState = <T>(selector: (state: ReportState & ReportActions) => T) => {
    return useReportStore(selector, shallow);
};