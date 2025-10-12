// src/components/report-viewer/ImageNavigator.tsx
import React from 'react';
import { useReportState, useReportStore } from '@/stores/reportStore';
import { FaChevronLeft, FaChevronRight, FaCommentDots, FaTree, FaInfoCircle, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const ImageNavigator: React.FC = () => {
  const { allPages, currentPageIndex, currentImageIndex, isPromptVisible } = useReportState(state => ({
    allPages: state.allPages,
    currentPageIndex: state.currentPageIndex,
    currentImageIndex: state.currentImageIndex,
    isPromptVisible: state.isPromptVisible,
  }));
  
  const { prevPage, nextPage, prevImage, nextImage, toggleTreeNav, toggleChatPanel, togglePromptVisibility } = useReportStore.getState();

  const currentPage = allPages[currentPageIndex];
  const currentPrompt = currentPage?.imagePrompts[0];
  const totalImages = currentPrompt?.images.length ?? 0;

  return (
    <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground w-full py-1">
      {/* Left Group */}
      <div className="flex items-center gap-2">
        <button className="btn-report" onClick={toggleTreeNav} title="Toggle Page Tree"><FaTree /></button>
        <button className="btn-report" onClick={togglePromptVisibility} title={isPromptVisible ? "Hide Image Prompt" : "Show Image Prompt"}><FaInfoCircle /></button>
      </div>

      {/* Center Group */}
      <div className="flex items-center gap-4">
        {/* Page Nav */}
        <div className="flex items-center gap-2">
          <button className="btn-report-lg" onClick={prevPage} title="Previous Page (Up Arrow)"><FaChevronUp /></button>
          <span>Page {currentPageIndex + 1}/{allPages.length}</span>
          <button className="btn-report-lg" onClick={nextPage} title="Next Page (Down Arrow)"><FaChevronDown /></button>
        </div>
        
        {/* C22 Fix: Conditionally render image navigation */}
        {totalImages > 1 && (
          <div className="flex items-center gap-2">
            <button className="btn-report-lg" onClick={prevImage} disabled={totalImages <= 1} title="Previous Image (Left Arrow)"><FaChevronLeft /></button>
            <span>Image {currentImageIndex + 1}/{totalImages}</span>
            <button className="btn-report-lg" onClick={nextImage} disabled={totalImages <= 1} title="Next Image (Right Arrow)"><FaChevronRight /></button>
          </div>
        )}
      </div>

      {/* Right Group */}
      <div className="flex items-center gap-2">
        <button className="btn-report" onClick={toggleChatPanel} title="Ask @Ascentia about this page">
          <FaCommentDots /> Ask
        </button>
      </div>
      
      <style jsx>{`
        .btn-report {
          background: none;
          border: 1px solid hsl(var(--border));
          color: hsl(var(--muted-foreground));
          font-size: 14px;
          cursor: pointer;
          padding: 5px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .btn-report:hover {
            background-color: hsl(var(--accent));
        }
        .btn-report-lg {
            background: none;
            border: 1px solid hsl(var(--border));
            color: hsl(var(--muted-foreground));
            font-size: 16px;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 4px;
        }
        .btn-report-lg:hover {
            background-color: hsl(var(--accent));
        }
        .btn-report:disabled, .btn-report-lg:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default ImageNavigator;