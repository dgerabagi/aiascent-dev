'use client';

import { useState, useRef } from 'react';
import ReportViewer from '@/components/report-viewer/ReportViewer';
import { FaSync } from 'react-icons/fa';

const ShowcaseTabs = () => {
  const [activeTab, setActiveTab] = useState('report');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const tabs = [
    { id: 'report', label: 'The Ascent Report' },
    { id: 'game', label: 'AI Ascent Game' },
  ];

  const handleRefresh = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.location.reload();
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
         {activeTab === 'game' && (
          <button
            onClick={handleRefresh}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
            title="Refresh Game"
          >
            <FaSync />
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className="flex-grow overflow-hidden">
        {activeTab === 'report' && (
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
            allow="autoplay; fullscreen; gamepad;"
          />
        )}
      </div>
    </div>
  );
};

export default ShowcaseTabs;