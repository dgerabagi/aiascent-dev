'use client';
import React, { useEffect } from 'react';
import ReportViewer from '@/components/report-viewer/ReportViewer';
import { useReportStore } from '@/stores/reportStore';

export default function AnguillaPresentationPage() {
  const { setAutoplay, setIsFullscreen } = useReportStore.getState();

  useEffect(() => {
    // Force presentation mode behavior
    // Small timeout ensures component is mounted and store is ready
    const timer = setTimeout(() => {
        setIsFullscreen(true);
        setAutoplay(true);
    }, 100);
    
    // Cleanup: Ensure we exit these modes when navigating away
    return () => {
        clearTimeout(timer);
        setIsFullscreen(false);
        setAutoplay(false);
    };
  }, [setAutoplay, setIsFullscreen]);

  return (
    // C11 Update: Added pt-14 md:pt-16 to ensure content is pushed down below the fixed header
    // if fullscreen mode is exited or hasn't engaged yet.
    <div className="w-full h-screen bg-background overflow-hidden pt-14 md:pt-16">
        <ReportViewer reportName="anguilla" />
    </div>
  );
}