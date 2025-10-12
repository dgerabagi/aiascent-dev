// src/app/showcase/page.tsx
'use client';

import ReportViewer from "@/components/report-viewer/ReportViewer";
import React from "react";

export default function ShowcasePage() {
  return (
    // C27 Fix: Add pt-16 to offset for the fixed header (h-16 or 4rem).
    // The h-screen ensures it takes the full viewport height, and pt-16 pushes
    // the content down, leaving the correct space for the ReportViewer.
    <div className="h-screen w-full pt-16">
        {/* This inner div will now fill the remaining space correctly */}
        <div className="h-full w-full">
            <ReportViewer reportName="showcase" />
        </div>
    </div>
  );
}