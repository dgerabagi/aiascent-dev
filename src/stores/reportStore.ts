// src/stores/reportStore.ts
// Ported from aiascentgame context for aiascent.dev
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

// Zustand State and Actions
export interface ReportState {
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
    isPromptVisible: boolean;
    isTldrVisible: boolean;
    isContentVisible: boolean;
    isLoading: boolean;
}

export interface ReportActions {
    loadReportData: () => Promise<void>;
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
    togglePromptVisibility: () => void;
    toggleTldrVisibility: () => void;
    toggleContentVisibility: () => void;
}

const createInitialReportState = (): ReportState => ({
    reportData: null,
    imageManifest: null,
    allPages: [],
    currentPageIndex: 0,
    currentImageIndex: 0,
    isTreeNavOpen: true,
    expandedSections: {},
    isChatPanelOpen: false,
    chatPanelWidth: 400,
    imagePanelHeight: 400,
    isImageFullscreen: false,
    isPromptVisible: true,
    isTldrVisible: true,
    isContentVisible: true,
    isLoading: true,
});

export const useReportStore = create<ReportState & ReportActions>()(
    persist(
        (set, get) => ({
            ...createInitialReportState(),

            loadReportData: async () => {
                if (get().reportData) {
                    set({ isLoading: false });
                    return;
                }
                set({ isLoading: true });
                try {
                    const [contentRes, manifestRes] = await Promise.all([
                        fetch('/data/ai_ascent_report.json'),
                        fetch('/data/imageManifest.json'),
                    ]);

                    if (!contentRes.ok) throw new Error(`Failed to fetch report content: ${contentRes.statusText}`);
                    if (!manifestRes.ok) throw new Error(`Failed to fetch image manifest: ${manifestRes.statusText}`);

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
                                    const correctedBasePath = '/assets/images/report/report-3/'; // Corrected path for aiascent.dev
                                    
                                    for (let i = 1; i <= groupMeta.imageCount; i++) {
                                        const fileName = `${groupMeta.baseFileName}${i}${groupMeta.fileExtension}`;
                                        const url = `${correctedBasePath}${groupMeta.path}${fileName}`;
                                        images.push({
                                            imageId: `${rawPage.pageId}-${groupId}-${i}`,
                                            url,
                                            prompt: groupMeta.prompt,
                                            alt: groupMeta.alt,
                                        });
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
                    console.error("Failed to load and process report data.", error);
                    set({ isLoading: false });
                }
            },
            
            nextPage: () => set(state => ({
                currentPageIndex: (state.currentPageIndex + 1) % state.allPages.length,
                currentImageIndex: 0,
            })),
            prevPage: () => set(state => ({
                currentPageIndex: (state.currentPageIndex - 1 + state.allPages.length) % state.allPages.length,
                currentImageIndex: 0,
            })),
            goToPageByIndex: (pageIndex) => {
                if (pageIndex >= 0 && pageIndex < get().allPages.length) {
                    set({ currentPageIndex: pageIndex, currentImageIndex: 0 });
                }
            },
            nextImage: () => set(state => {
                const currentPage = state.allPages[state.currentPageIndex];
                const totalImages = currentPage?.imagePrompts[0]?.images.length ?? 0;
                if (totalImages <= 1) return state;
                return { currentImageIndex: (state.currentImageIndex + 1) % totalImages };
            }),
            prevImage: () => set(state => {
                const currentPage = state.allPages[state.currentPageIndex];
                const totalImages = currentPage?.imagePrompts[0]?.images.length ?? 0;
                if (totalImages <= 1) return state;
                return { currentImageIndex: (state.currentImageIndex - 1 + totalImages) % totalImages };
            }),
            handleKeyDown: (event: KeyboardEvent) => {
                switch (event.key) {
                    case 'ArrowUp': get().prevPage(); break;
                    case 'ArrowDown': get().nextPage(); break;
                    case 'ArrowLeft': get().prevImage(); break;
                    case 'ArrowRight': get().nextImage(); break;
                }
            },
            toggleTreeNav: () => set(state => ({ isTreeNavOpen: !state.isTreeNavOpen })),
            toggleSectionExpansion: (sectionId) => set(state => ({
                expandedSections: { ...state.expandedSections, [sectionId]: !state.expandedSections[sectionId] }
            })),
            setActiveExpansionPath: (pageIndex) => {
                const { reportData, allPages } = get();
                if (!reportData || allPages.length === 0) return;

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
                    set(state => ({
                        expandedSections: {
                            ...state.expandedSections,
                            [activeSectionId!]: true,
                            ...(activeSubSectionId && { [activeSubSectionId]: true }),
                        }
                    }));
                }
            },
            toggleChatPanel: () => set(state => ({ isChatPanelOpen: !state.isChatPanelOpen })),
            setChatPanelWidth: (width) => set({ chatPanelWidth: Math.max(300, width) }),
            setImagePanelHeight: (height) => set({ imagePanelHeight: Math.max(200, height) }),
            openImageFullscreen: () => set({ isImageFullscreen: true }),
            closeImageFullscreen: () => set({ isImageFullscreen: false }),
            togglePromptVisibility: () => set(state => ({ isPromptVisible: !state.isPromptVisible })),
            toggleTldrVisibility: () => set(state => ({ isTldrVisible: !state.isTldrVisible })),
            toggleContentVisibility: () => set(state => ({ isContentVisible: !state.isContentVisible })),
        }),
        {
            name: 'aiascent-dev-report-storage',
            storage: createJSONStorage(() => localStorage),
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
            }),
        }
    )
);

// Custom hook for selecting parts of the state with shallow comparison
export const useReportState = <T>(selector: (state: ReportState & ReportActions) => T) => {
    return useReportStore(selector, shallow);
};