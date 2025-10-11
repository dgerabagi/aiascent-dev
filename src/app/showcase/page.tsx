// src/app/showcase/page.tsx
'use client';

import ReportViewer from "@/components/report-viewer/ReportViewer";
import React from "react";

export default function ShowcasePage() {
  return (
    <div className="h-screen w-screen">
        <ReportViewer />
    </div>
  );
}