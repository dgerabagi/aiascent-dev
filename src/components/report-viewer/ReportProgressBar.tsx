// src/components/report-viewer/ReportProgressBar.tsx
'use client';
import React from 'react';
import { useReportState, useReportStore } from '@/stores/reportStore';

const ReportProgressBar: React.FC = () => {
  const { allPages, currentPageIndex } = useReportState(state => ({
    allPages: state.allPages,
    currentPageIndex: state.currentPageIndex,
  }));
  const { goToPageByIndex } = useReportStore.getState();

  const totalPages = allPages.length;
  if (totalPages === 0) return null;

  const progressPercent = totalPages > 0 ? ((currentPageIndex + 1) / totalPages) * 100 : 0;

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPercent = clickX / rect.width;
    const targetPageIndex = Math.floor(clickPercent * totalPages);
    goToPageByIndex(targetPageIndex);
  };

  return (
    <div className="w-full py-2 flex items-center gap-2">
      <div
        className="flex-grow h-3 bg-muted rounded-full border cursor-pointer relative"
        onClick={handleBarClick}
        title={`Page ${currentPageIndex + 1} of ${totalPages} (${progressPercent.toFixed(0)}%)`}
      >
        <div
          className="h-full bg-primary rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
            {/* C47 FIX: Changed text-primary-foreground to text-foreground for better contrast with mix-blend-difference */}
            <span className="text-xs font-bold text-foreground mix-blend-difference">
                {progressPercent.toFixed(0)}%
            </span>
        </div>
      </div>
    </div>
  );
};

export default ReportProgressBar;