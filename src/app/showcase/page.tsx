// src/app/showcase/page.tsx
'use client';

import ReportViewer from "@/components/report-viewer/ReportViewer";
import React from "react";

export default function ShowcasePage() {
  return (
    // C15 Fix: Set explicit height to prevent window scrolling. 4rem = h-16 of the Header.
    <div className="h-[calc(100vh-4rem)] w-full">
        <ReportViewer />
    </div>
  );
}