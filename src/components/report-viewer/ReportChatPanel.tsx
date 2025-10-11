// src/components/report-viewer/ReportChatPanel.tsx
import React from 'react';
import { useReportStore } from '@/stores/reportStore';
import { FaTimes, FaBroom, FaCog } from 'react-icons/fa';
import { Resizable } from 're-resizable';

const ReportChatPanel: React.FC = () => {
    const { chatPanelWidth, setChatPanelWidth, toggleChatPanel } = useReportStore.getState();

    return (
        <Resizable
            size={{ width: chatPanelWidth, height: '100%' }}
            minWidth={300}
            maxWidth="60vw"
            enable={{ left: true }}
            onResizeStop={(e, direction, ref, d) => {
                setChatPanelWidth(chatPanelWidth + d.width);
            }}
            handleClasses={{ left: 'border-l-4 border-transparent hover:border-primary transition-colors duration-200' }}
        >
            <div className="h-full bg-background border-l flex flex-col flex-shrink-0">
                <header className="flex justify-between items-center p-2 border-b">
                    <h3 className="font-bold">Ask @Ascentia</h3>
                    <div>
                        <button className="p-2 text-muted-foreground hover:text-foreground"><FaBroom /></button>
                        <button className="p-2 text-muted-foreground hover:text-foreground"><FaCog /></button>
                        <button className="p-2 text-muted-foreground hover:text-foreground" onClick={toggleChatPanel}><FaTimes /></button>
                    </div>
                </header>
                <div className="flex-1 p-2 overflow-y-auto text-sm text-muted-foreground">
                    Chat functionality coming soon...
                </div>
                <footer className="p-2 border-t">
                    <textarea className="w-full bg-muted border rounded p-2 text-sm" placeholder="Ask a question..." />
                </footer>
            </div>
        </Resizable>
    );
};

export default ReportChatPanel;