// src/components/showcase/InteractiveWhitepaper.tsx
// C1 - Initial Scaffolding
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Define the types based on A3/A174 (simplified for C1)
interface WhitepaperPage {
pageTitle: string;
tldr: string;
content: string;
}

interface WhitepaperSection {
sectionTitle: string;
pages: WhitepaperPage[];
}

interface WhitepaperData {
reportTitle: string;
sections: WhitepaperSection[];
}

interface InteractiveWhitepaperProps {
data: WhitepaperData;
}

const InteractiveWhitepaper = ({ data }: InteractiveWhitepaperProps) => {
const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
const [currentPageIndex, setCurrentPageIndex] = useState(0);

if (!data || data.sections.length === 0) {
return <div className="text-center py-8 text-red-500">Failed to load content or content is empty.</div>;
}

const currentSection = data.sections[currentSectionIndex];
const currentPage = currentSection.pages[currentPageIndex];

const handleNextPage = () => {
if (currentPageIndex < currentSection.pages.length - 1) {
setCurrentPageIndex(currentPageIndex + 1);
} else if (currentSectionIndex < data.sections.length - 1) {
setCurrentSectionIndex(currentSectionIndex + 1);
setCurrentPageIndex(0);
}
};

const handlePrevPage = () => {
if (currentPageIndex > 0) {
setCurrentPageIndex(currentPageIndex - 1);
} else if (currentSectionIndex > 0) {
setCurrentSectionIndex(currentSectionIndex - 1);
setCurrentPageIndex(data.sections[currentSectionIndex - 1].pages.length - 1);
}
};

return (
<div className="max-w-4xl mx-auto">
<header className="mb-8">
<h2 className="text-2xl font-semibold text-muted-foreground">{currentSection.sectionTitle}</h2>
<h3 className="text-3xl font-bold mt-2">{currentPage.pageTitle}</h3>
</header>


  <div className="mb-8 p-4 bg-secondary border-l-4 border-primary">
    <p className="font-medium">{currentPage.tldr}</p>
  </div>

  <div className="prose dark:prose-invert lg:prose-lg max-w-none">
    {/* In a real implementation, this content might be markdown rendered */}
    <p>{currentPage.content}</p>
  </div>

  <div className="flex justify-between mt-12 pt-6 border-t">
    <Button
      onClick={handlePrevPage}
      disabled={currentSectionIndex === 0 && currentPageIndex === 0}
      variant="outline"
    >
      Previous
    </Button>
    <span className="text-muted-foreground">
      Section {currentSectionIndex + 1} / {data.sections.length} | Page {currentPageIndex + 1} / {currentSection.pages.length}
    </span>
    <Button
      onClick={handleNextPage}
      disabled={currentSectionIndex === data.sections.length - 1 && currentPageIndex === currentSection.pages.length - 1}
    >
      Next
    </Button>
  </div>
</div>


);
};

export default InteractiveWhitepaper;