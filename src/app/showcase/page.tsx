// src/app/showcase/page.tsx
'use client';

import ShowcaseTabs from "@/components/showcase/ShowcaseTabs";
import NextPageSection from "@/components/global/NextPageSection";
import React from "react";

export default function ShowcasePage() {
  return (
    // C6 Update: Use h-[calc(100vh-4rem)] to ensure the tabs container fits exactly in the viewport
    // without overflowing due to the pt-16 (4rem) padding.
    <div className="w-full pt-16 flex flex-col min-h-screen">
        <div className="h-[calc(100vh-4rem)] flex flex-col">
            <ShowcaseTabs />
        </div>
        <NextPageSection
            title="Ready to Become a Citizen Architect?"
            description="The V2V Academy provides the pathway to master the skills of AI-assisted development and become a leader in the new digital frontier."
            buttonText="Explore the Academy"
            href="/academy"
        />
    </div>
  );
}