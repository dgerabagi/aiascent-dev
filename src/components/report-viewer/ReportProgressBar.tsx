// src/components/report-viewer/ReportProgressBar.tsx
import React from 'react';

const ReportProgressBar: React.FC = () => {
    // Placeholder - full functionality depends on voting/seen state
    return (
        <div className="w-full p-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span>Progress:</span>
            <div className="flex-grow h-3 bg-muted rounded-full border">
                <div className="h-full bg-primary rounded-full w-0"></div>
            </div>
            <span>0%</span>
        </div>
    );
};

export default ReportProgressBar;