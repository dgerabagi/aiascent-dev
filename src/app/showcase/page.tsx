// src/app/showcase/page.tsx
// C1 - Initial Scaffolding

import InteractiveWhitepaper from "@/components/showcase/InteractiveWhitepaper";
// Import the static JSON data directly. As this is a Server Component, this is efficient.
import whitepaperData from '@/data/whitepaperContent.json';

export default function ShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Interactive Showcase
      </h1>
      <p className="text-lg text-muted-foreground mb-12 text-center">
        Explore a complex interactive component built using the Data Curation Environment.
      </p>

      <div className="border rounded-lg shadow-lg p-8 bg-card">
        {/* Pass the imported data as a prop to the client component */}
        <InteractiveWhitepaper data={whitepaperData} />
      </div>
    </div>
  );
}