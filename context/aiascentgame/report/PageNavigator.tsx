// src/components/menus/report/PageNavigator.tsx
// Updated on: C1374 (Increase title font size.)
// Updated on: C1373 (Remove hint text, which has been moved to ImageNavigator.)
// Updated on: C1360 (Rearrange hint text layout and increase title font size.)
// Updated on: C1359 (Simplify by removing page nav buttons, which are now in ImageNavigator.)
// Updated on: C1355 (Add hint about arrow key navigation.)
// Updated on: C1351 (Incorporate a close button and refactor layout to a single line.)
import React from 'react';
import { useReportStore } from '../../../state/reportStore';
import { FaTimes } from 'react-icons/fa';
import { useShallow } from 'zustand/react/shallow';
import { useUIStore } from '../../../state';

interface PageNavigatorProps {
  onClose: () => void;
}

const PageNavigator: React.FC<PageNavigatorProps> = ({ onClose }) => {
  const { allPages, currentPageIndex } = useReportStore(
    useShallow(state => ({
      allPages: state.allPages,
      currentPageIndex: state.currentPageIndex,
    }))
  );

  const currentPage = allPages[currentPageIndex];

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
    minHeight: '40px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '18px', // C1374: Increased font size
    color: '#FFA500',
    margin: '0 0 5px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    padding: '0 50px', // Add padding to avoid overlap with close button
    textAlign: 'center',
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    right: '0',
    background: 'none',
    border: '1px solid #777',
    color: '#aaa',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '4px',
  };

  if (!currentPage) return null;

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle} title={currentPage.pageTitle}>{currentPage.pageTitle}</h2>
      <button style={closeButtonStyle} onClick={onClose} title="Close Report Viewer"><FaTimes /></button>
    </div>
  );
};

export default PageNavigator;