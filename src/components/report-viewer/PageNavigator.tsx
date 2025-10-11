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
    <div className="flex justify-center items-center w-full relative min-h-[40px]">
      <h2 className="text-lg font-bold text-primary text-center px-12 truncate" title={currentPage.pageTitle}>
        {currentPage.pageTitle}
      </h2>
    </div>
  );
};

export default PageNavigator;