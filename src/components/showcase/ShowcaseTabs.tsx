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
  
  // C54: Fix scroll bug
  useEffect(() => {
    if (activeTab === 'game') {
      setIsGameLoading(true);
      window.scrollTo(0, 0);
    }
  }, [activeTab]);

  const handleIframeLoad = () => {
    setIsGameLoading(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-center border-b border-muted mb-4 flex-shrink-0">
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

      <div className="flex-grow">
        {activeTab === 'report' && <ReportViewer reportName="showcase" />}
        {activeTab === 'game' && (
          <div className="relative w-full h-full flex flex-col items-center">
             <p className="text-sm text-muted-foreground mb-4 p-2 border rounded-md bg-muted/50 max-w-4xl text-center">
              You are viewing an embedded version of AI Ascent. For the full experience, including login, chat, and multiplayer features, please visit the main site: {' '}
              <a href="https://aiascent.game/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                aiascent.game
              </a>.
            </p>
            <div className="relative w-full flex-grow">
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
                onLoad={handleIframeLoad}
                ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowcaseTabs;