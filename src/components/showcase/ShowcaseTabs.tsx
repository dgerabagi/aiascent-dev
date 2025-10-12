'use client';

import { useState } from 'react';
import ReportViewer from '@/components/report-viewer/ReportViewer';

const ShowcaseTabs = () => {
  const [activeTab, setActiveTab] = useState('report');

  const tabs = [
    { id: 'report', label: 'The Ascent Report' },
    { id: 'game', label: 'AI Ascent Game' },
  ];

  return (
    <div className="flex flex-col h-full w-full">
      {/* Tab Buttons */}
      <div className="flex border-b border-border flex-shrink-0">
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
      </div>

      {/* Tab Content */}
      <div className="flex-grow overflow-hidden">
        {activeTab === 'report' && (
          // The ReportViewer itself handles scrolling, so we just give it the full space.
          // The -16 for the header is handled by the parent page.
          <div className="h-full w-full">
            <ReportViewer reportName="showcase" />
          </div>
        )}
        {activeTab === 'game' && (
          <iframe
            src="https://aiascent.game/"
            title="AI Ascent Game"
            className="w-full h-full border-0"
            allow="autoplay; fullscreen"
          />
        )}
      </div>
    </div>
  );
};

export default ShowcaseTabs;