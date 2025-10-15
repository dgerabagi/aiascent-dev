'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ReportViewer from '@/components/report-viewer/ReportViewer';
import { FaSync } from 'react-icons/fa';

const ShowcaseTabs = () => {
  const [activeTab, setActiveTab] = useState('report');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isGameLoading, setIsGameLoading] = useState(true);

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIsGameLoading(true);
      // Resetting the src attribute is a safe way to force an iframe to reload its content
      // without running into cross-origin security issues.
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  useEffect(() => {
    // When switching to the iframe tab, ensure the loading state is reset
    if (activeTab === 'game') {
      setIsGameLoading(true);
    }
  }, [activeTab]);

  return (
    <div className="w-full">
      <div className="flex justify-center border-b border-muted mb-4">
        <Button
          variant={activeTab === 'report' ? 'secondary' : 'ghost'}
          onClick={() => setActiveTab('report')}
          className="mr-2"
        >
          The Ascent Report
        </Button>
        <Button
          variant={activeTab === 'game' ? 'secondary' : 'ghost'}
          onClick={() => setActiveTab('game')}
        >
          AI Ascent Game
        </Button>
      </div>

      <div>
        {activeTab === 'report' && <ReportViewer reportName="showcase" />}
        {activeTab === 'game' && (
          <div className="relative w-full h-[calc(100vh-10rem)]">
            <div className="absolute top-2 right-2 z-10">
              <Button onClick={handleRefresh} variant="outline" size="icon">
                <FaSync className={isGameLoading ? 'animate-spin' : ''} />
              </Button>
            </div>
            <iframe
              ref={iframeRef}
              src="https://aiascent.game/"
              className="w-full h-full border-0"
              title="AI Ascent Game"
              onLoad={() => setIsGameLoading(false)}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowcaseTabs;