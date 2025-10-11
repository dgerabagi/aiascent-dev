// src/components/menus/report/ReportViewerModal.tsx
// Updated on: C1401 (Remove flex-shrink: 0 from progress bar container to fix resizing bug.)
// Updated on: C1400 (Add a flex-shrink property to the progress bar container to help with resizing.)
// Updated on: C1399 (Trigger audio generation on page change if autoplay is enabled.)
// Updated on: C1398 (Add useEffect to orchestrate slideshow start on 'playing' state.)
// Updated on: C1397 (Refine useEffect for autoplay to fix page jump bug.)
import React, { useEffect, useState, useRef } from 'react';
import { useUIStore } from '../../../state';
import PageNavigator from './PageNavigator';
import ImageNavigator from './ImageNavigator';
import PromptNavigator from './PromptNavigator';
import ReportTreeNav from './ReportTreeNav';
import ReportChatPanel from './ReportChatPanel';
import MarkdownRenderer from '../../ui/MarkdownRenderer';
import { useReportStore } from '../../../state/reportStore';
import { FaArrowsAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useShallow } from 'zustand/react/shallow';
import { logInfo, logError } from '../../../logger';
import { Resizable } from 're-resizable';
import ReportProgressBar from './ReportProgressBar';
import AudioControls from './AudioControls';

const ReportViewerModal: React.FC = () => {
  const { closeReportViewer } = useUIStore();
  const {
    reportData, loadReportData, allPages, currentPageIndex,
    currentImageIndex, isTreeNavOpen, isChatPanelOpen,
    toggleChatPanel, imagePanelHeight, setImagePanelHeight,
    isImageFullscreen, openImageFullscreen, closeImageFullscreen,
    chatPanelWidth, setChatPanelWidth, handleKeyDown,
    isPromptVisible, isTldrVisible, isContentVisible,
    toggleTldrVisibility, toggleContentVisibility, markImageAsSeen,
    setActiveExpansionPath,
    stopSlideshow,
    playbackStatus, autoplayEnabled, startSlideshow,
  } = useReportStore(useShallow(state => ({
    reportData: state.reportData,
    loadReportData: state.loadReportData,
    allPages: state.allPages,
    currentPageIndex: state.currentPageIndex,
    currentImageIndex: state.currentImageIndex,
    isTreeNavOpen: state.isTreeNavOpen,
    isChatPanelOpen: state.isChatPanelOpen,
    toggleChatPanel: state.toggleChatPanel,
    imagePanelHeight: state.imagePanelHeight,
    setImagePanelHeight: state.setImagePanelHeight,
    isImageFullscreen: state.isImageFullscreen,
    openImageFullscreen: state.openImageFullscreen,
    closeImageFullscreen: state.closeImageFullscreen,
    chatPanelWidth: state.chatPanelWidth,
    setChatPanelWidth: state.setChatPanelWidth,
    handleKeyDown: state.handleKeyDown,
    isPromptVisible: state.isPromptVisible,
    isTldrVisible: state.isTldrVisible,
    isContentVisible: state.isContentVisible,
    toggleTldrVisibility: state.toggleTldrVisibility,
    toggleContentVisibility: state.toggleContentVisibility,
    markImageAsSeen: state.markImageAsSeen,
    setActiveExpansionPath: state.setActiveExpansionPath,
    stopSlideshow: state.stopSlideshow,
    playbackStatus: state.playbackStatus,
    autoplayEnabled: state.autoplayEnabled,
    startSlideshow: state.startSlideshow,
  })));

  const [isDraggingCorner, setIsDraggingCorner] = useState(false);
  const initialDragPos = useRef({ x: 0, y: 0 });
  const initialDimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (!reportData) {
      loadReportData();
    }
  }, [reportData, loadReportData]);

  useEffect(() => {
    if (playbackStatus === 'playing' && autoplayEnabled) {
      startSlideshow();
    }
  }, [playbackStatus, autoplayEnabled, startSlideshow]);

  // C1399: This effect ensures that when autoplay navigates to a new page,
  // the audio for that new page starts automatically.
  useEffect(() => {
    const audioControls = document.querySelector('#report-audio-controls button') as HTMLButtonElement;
    if (autoplayEnabled && playbackStatus === 'idle') {
      // Trigger the play/generation logic, which is now handled inside AudioControls
      if (audioControls) {
        // A bit of a hack, but it reliably triggers the generateAndPlayAudio flow
        // when the page changes while autoplay is on.
        audioControls.click();
      }
    }
  }, [currentPageIndex, autoplayEnabled]);


  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) {
        return;
      }
      if (e.key === ' ' || e.key.startsWith('Arrow')) {
        e.preventDefault();
      }
      handleKeyDown(e);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setActiveExpansionPath(currentPageIndex);
  }, [currentPageIndex, setActiveExpansionPath]);

  const currentPage = allPages[currentPageIndex];
  const currentPrompt = currentPage?.imagePrompts[0];
  const currentImage = currentPrompt?.images[currentImageIndex];

  useEffect(() => {
    if (currentPage && currentImage) {
      markImageAsSeen(currentPage.pageId, currentImage.imageId);
    }
  }, [currentPage, currentImage, markImageAsSeen]);


  const handleClose = () => {
    if (isChatPanelOpen) {
      toggleChatPanel();
    } else {
      closeReportViewer();
    }
  };

  const handleCornerMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    stopSlideshow(true);
    setIsDraggingCorner(true);
    initialDragPos.current = { x: e.clientX, y: e.clientY };
    initialDimensions.current = { width: chatPanelWidth, height: imagePanelHeight };
  };

  useEffect(() => {
    const handleCornerMouseMove = (e: MouseEvent) => {
      if (!isDraggingCorner) return;
      const deltaX = e.clientX - initialDragPos.current.x;
      const deltaY = e.clientY - initialDragPos.current.y;
      setChatPanelWidth(initialDimensions.current.width - deltaX);
      setImagePanelHeight(initialDimensions.current.height + deltaY);
    };
    const handleCornerMouseUp = () => setIsDraggingCorner(false);
    if (isDraggingCorner) {
      window.addEventListener('mousemove', handleCornerMouseMove);
      window.addEventListener('mouseup', handleCornerMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleCornerMouseMove);
      window.removeEventListener('mouseup', handleCornerMouseUp);
    };
  }, [isDraggingCorner, setChatPanelWidth, setImagePanelHeight]);

  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 100,
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    pointerEvents: 'auto',
    fontFamily: '"Press Start 2P", cursive',
  };

  const modalContentStyle: React.CSSProperties = {
    background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
    padding: isChatPanelOpen ? '10px' : '20px',
    borderRadius: isChatPanelOpen ? '0' : '12px',
    border: '2px solid #00ffff',
    width: isChatPanelOpen ? '98%' : '95vw',
    maxWidth: isChatPanelOpen ? 'none' : '1400px',
    height: isChatPanelOpen ? '98%' : '95vh',
    display: 'flex',
    boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
    color: 'white', position: 'relative',
    gap: '15px',
    transition: 'width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, padding 0.3s ease',
  };

  const mainContentAreaStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minWidth: 0,
  };

  const imageDisplayArea: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#111',
    border: '1px solid #444',
    borderRadius: '8px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#555',
    fontSize: '12px',
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    cursor: 'pointer',
  };

  const contentAreaStyle: React.CSSProperties = {
    flex: '1 1 auto',
    overflowY: 'auto',
    padding: '10px',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: '4px',
    fontSize: '11px',
    lineHeight: '1.7',
    minHeight: 0,
  };

  const headerContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '5px',
    flexShrink: 0,
  };

  const navContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    width: '100%',
    borderTop: '1px solid #444',
    borderBottom: '1px solid #444',
    padding: '5px 0',
    marginTop: '5px'
  };

  const fullscreenOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.95)',
    zIndex: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const fullscreenImageStyle: React.CSSProperties = {
    maxWidth: '95vw',
    maxHeight: '95vh',
    objectFit: 'contain',
  };

  const cornerDragHandleStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '-5px',
    right: '-5px',
    width: '20px',
    height: '20px',
    cursor: 'move',
    zIndex: 115,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.3)',
  };

  const sectionHeaderStyle: React.CSSProperties = {
    color: '#FFA500', borderBottom: '1px dashed #555', paddingBottom: '5px',
    margin: '0 0 10px 0', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
  };

  const toggleButtonStyle: React.CSSProperties = {
    background: 'none', border: 'none', color: '#aaa', cursor: 'pointer', fontSize: '12px'
  };

  if (!reportData || allPages.length === 0) {
    return (
      <div style={modalOverlayStyle}>
        <div style={{ ...modalContentStyle, justifyContent: 'center', alignItems: 'center' }}>Loading Report...</div>
      </div>
    );
  }

  return (
    <div style={modalOverlayStyle}>
      {isImageFullscreen && currentImage && (
        <div style={fullscreenOverlayStyle} onClick={closeImageFullscreen}>
          <img src={currentImage.url} alt={currentPrompt?.promptText} style={fullscreenImageStyle} />
        </div>
      )}

      <div style={modalContentStyle}>
        {isTreeNavOpen && <ReportTreeNav />}

        <div style={mainContentAreaStyle}>
          <div style={headerContainer}>
            <PageNavigator onClose={handleClose} />
          </div>

          {/* C1401: Removed flexShrink: 0 to allow resizing */}
          <div>
            <ReportProgressBar />
          </div>

          <Resizable
            size={{ width: '100%', height: imagePanelHeight }}
            minHeight={200}
            maxHeight="60%"
            onResizeStart={() => stopSlideshow(true)}
            onResizeStop={(e, direction, ref, d) => {
              setImagePanelHeight(imagePanelHeight + d.height);
            }}
            enable={{ top: false, right: false, bottom: true, left: false, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false }}
            style={{ flexShrink: 0, marginBottom: '10px', position: 'relative' }}
          >
            <div style={{ ...imageDisplayArea, height: '100%', marginBottom: 0 }}>
              {currentImage?.url ? (
                <img
                  src={currentImage.url}
                  alt={currentPrompt?.promptText}
                  style={imageStyle}
                  onClick={openImageFullscreen}
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    logInfo('[ReportViewer:Image]', `Successfully LOADED image. Natural dimensions: ${img.naturalWidth}x${img.naturalHeight}. Src: ${currentImage.url}`);
                  }}
                  onError={() => logError('[ReportViewer:Image]', `FAILED to load image. Path may be incorrect, file missing, or dev server not serving it. Path: ${currentImage.url}`)}
                />
              ) : (
                'No Image Available'
              )}
            </div>
            {isChatPanelOpen && (
              <div
                style={cornerDragHandleStyle}
                onMouseDown={handleCornerMouseDown}
                title="Resize panels"
              >
                <FaArrowsAlt />
              </div>
            )}
          </Resizable>

          <div style={navContainerStyle} id="report-audio-controls">
            <ImageNavigator />
            <AudioControls />
          </div>

          <div style={contentAreaStyle}>
            {isPromptVisible && <PromptNavigator />}

            <div style={sectionHeaderStyle}>
              <h4>TL;DR</h4>
              <button style={toggleButtonStyle} onClick={toggleTldrVisibility} title={isTldrVisible ? "Collapse" : "Expand"}>
                {isTldrVisible ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {isTldrVisible && (
              <p style={{ fontStyle: 'italic', color: '#ccc', margin: '0 0 15px 0' }}>
                <MarkdownRenderer markdown={currentPage?.tldr || ''} />
              </p>
            )}

            <div style={sectionHeaderStyle}>
              <h4>Content</h4>
              <button style={toggleButtonStyle} onClick={toggleContentVisibility} title={isContentVisible ? "Collapse" : "Expand"}>
                {isContentVisible ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {isContentVisible && (
              <MarkdownRenderer markdown={currentPage?.content || ''} />
            )}
          </div>
        </div>

        {isChatPanelOpen && <ReportChatPanel />}
      </div>
    </div>
  );
};

export default ReportViewerModal;