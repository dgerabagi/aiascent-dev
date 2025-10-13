{
  /*
  Cycle 30: Fix unescaped entities.
  - Replaced double quotes with &quot; to fix linting errors.
  */
}
// src/components/report-viewer/PromptNavigator.tsx
import React from 'react';
import { useReportState } from '@/stores/reportStore';

const PromptNavigator: React.FC = () => {
  const { allPages, currentPageIndex } = useReportState(state => ({
    allPages: state.allPages,
    currentPageIndex: state.currentPageIndex,
  }));

  const currentPage = allPages[currentPageIndex];
  const currentPrompt = currentPage?.imagePrompts;

  if (!currentPrompt?.promptText) return null;

  return (
    <div className="w-full text-left italic leading-relaxed text-muted-foreground text-xs p-2 bg-muted/50 rounded border-dashed border mb-4">
      &quot;{currentPrompt.promptText}&quot;
    </div>
  );
};

export default PromptNavigator;