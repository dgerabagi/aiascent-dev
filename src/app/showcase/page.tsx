// src/app/showcase/page.tsx
'use client';

import ShowcaseTabs from "@/components/showcase/ShowcaseTabs";
import React from "react";

export default function ShowcasePage() {
  return (
    // The pt-16 offsets for the fixed header. The h-screen and flex structure
    // ensure the tab component fills the entire remaining viewport.
    <div className="h-screen w-full pt-16 flex flex-col">
        <ShowcaseTabs />
    </div>
  );
}