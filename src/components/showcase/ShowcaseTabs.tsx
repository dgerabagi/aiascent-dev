'use client';

import { useState, useRef, useEffect } from 'react';
import ReportViewer from '@/components/report-viewer/ReportViewer';
import { FaSync } from 'react-icons/fa';

const ShowcaseTabs = () => {
  const [activeTab, setActiveTab] = useState('report');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // C31: Fix scrolling issue when switching tabs
    window.scrollTo(0, 0);
  }, [activeTab]);


  const tabs = [
    { id: 'report', label: 'The Ascent Report' },
    { id: 'game', label: 'AI Ascent Game' },
  ];

  const handleRefresh = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.location.reload();
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Tab Buttons */}
      <div className="flex justify-center border-b border-border flex-shrink-0 relative">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors focus:outline-none ${
              activeTab === tab.id
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
        {/* C29: Add Refresh button, conditionally rendered */}
        {activeTab === 'game' && (
          <button
            onClick={handleRefresh}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 text-xs border rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            title="Refresh game frame"
          >
            <FaSync />
            Refresh
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className="flex-grow overflow-hidden relative">
        {/* C51: Add informational banner for game login */}
        {activeTab === 'game' && (
            <div className="absolute top-0 left-0 right-0 p-2 bg-blue-950/80 backdrop-blur-sm text-center text-xs text-blue-200 z-10">
                Note: Login and multiplayer features are disabled in this embedded view. For the full experience, please visit{' '}
                <a href="https://aiascent.game" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white">
                    aiascent.game
                </a>.
            </div>
        )}
        {activeTab === 'report' && (
          // The ReportViewer itself handles scrolling, so we just give it the full space.
          // The -16 for the header is handled by the parent page.
          <div className="h-full w-full">
            <ReportViewer reportName="showcase" />
          </div>
        )}
        {activeTab === 'game' && (
          <iframe
            ref={iframeRef}
            src="https://aiascent.game/"
            title="AI Ascent Game"
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; popups; popups-to-escape-sandbox"
          />
        )}
      </div>
    </div>
  );
};

export default ShowcaseTabs;