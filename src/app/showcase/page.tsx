// src/app/showcase/page.tsx
'use client';

import ShowcaseTabs from "@/components/showcase/ShowcaseTabs";
import NextPageSection from "@/components/global/NextPageSection";
import React from "react";

export default function ShowcasePage() {
  return (
    // The pt-16 offsets for the fixed header. The h-screen and flex structure
    // ensure the tab component fills the entire remaining viewport.
    <div className="w-full pt-16 flex flex-col">
        <div className="h-screen flex flex-col">
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