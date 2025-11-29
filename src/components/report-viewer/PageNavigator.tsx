// src/components/report-viewer/PageNavigator.tsx
import React from 'react';
import { useReportState } from '@/stores/reportStore';

const PageNavigator: React.FC = () => {
  const { allPages, currentPageIndex } = useReportState(state => ({
    allPages: state.allPages,
    currentPageIndex: state.currentPageIndex,
  }));

  const currentPage = allPages[currentPageIndex];

  if (!currentPage) return null;

  return (
    // C7 Update: Reduced min-height from 40px to 32px and adjusted text size for compactness
    <div className="flex justify-center items-center w-full relative min-h-[32px]">
      <h2 className="text-base font-bold text-primary text-center px-12 truncate" title={currentPage.pageTitle}>
        {currentPage.pageTitle}
      </h2>
    </div>
  );
};

export default PageNavigator;