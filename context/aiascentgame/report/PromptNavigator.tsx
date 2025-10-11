// src/components/menus/report/PromptNavigator.tsx
// Updated on: C1374 (Simplify component to only display prompt text, as header/toggle moved to parent.)
// Updated on: C1359 (Add collapse/expand button and logic.)
// Updated on: C1358 (Refactored to be a simple display component for a single static prompt.)
import React from 'react';
import { useReportStore } from '../../../state/reportStore';
import { useShallow } from 'zustand/react/shallow';

const PromptNavigator: React.FC = () => {
  const { allPages, currentPageIndex } = useReportStore(
    useShallow(state => ({
      allPages: state.allPages,
      currentPageIndex: state.currentPageIndex,
    }))
  );

  const currentPage = allPages[currentPageIndex];
  const currentPrompt = currentPage?.imagePrompts[0];

  const promptTextStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'left',
    fontStyle: 'italic',
    lineHeight: 1.4,
    color: '#ccc',
    fontSize: '10px',
    padding: '8px',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: '4px',
    border: '1px dashed #444',
    margin: '0 0 15px 0',
  };

  if (!currentPrompt || !currentPrompt.promptText) return null;

  return (
    <div style={promptTextStyle}>
      "{currentPrompt.promptText}"
    </div>
  );
};

export default PromptNavigator;