// src/components/menus/report/ReportProgressBar.tsx
// Updated on: C1400 (Fix resizing issue by wrapping in a container with flex: 1.)
// Updated on: C1369 (Refactor to use a flattened image list for accurate per-image progress.)
// Updated on: C1360 (Add First Unseen button, remove text from Reset, make bar clickable.)
// Updated on: C1359 (New file)
import React, { useMemo } from 'react';
import { useReportStore } from '../../../state/reportStore';
import { useShallow } from 'zustand/react/shallow';
import { FaEye, FaSync, FaStepBackward } from 'react-icons/fa';

const ReportProgressBar: React.FC = () => {
  const {
    allPages, seenImages, jumpToNextUnseenImage, resetProgress,
    jumpToFirstUnseenImage, goToPageByIndex,
  } = useReportStore(
    useShallow(state => ({
      allPages: state.allPages,
      seenImages: state.seenImages,
      jumpToNextUnseenImage: state.jumpToNextUnseenImage,
      resetProgress: state.resetProgress,
      jumpToFirstUnseenImage: state.jumpToFirstUnseenImage,
      goToPageByIndex: state.goToPageByIndex,
    }))
  );

  // C1369: Flatten all images from all pages into a single list for accurate progress tracking.
  const allImages = useMemo(() => {
    return allPages.flatMap((page, pageIndex) =>
      page.imagePrompts.flatMap(prompt =>
        prompt.images.map(image => ({
          ...image,
          pageId: page.pageId,
          pageIndex: pageIndex,
        }))
      )
    );
  }, [allPages]);

  const totalImages = allImages.length;
  if (totalImages === 0) return null;

  const seenImageCount = allImages.filter(img => seenImages[`${img.pageId}-${img.imageId}`]).length;
  const progressPercent = totalImages > 0 ? (seenImageCount / totalImages) * 100 : 0;

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPercent = clickX / rect.width;
    // Find the corresponding image in the flattened list
    const targetImageIndex = Math.floor(clickPercent * totalImages);
    const targetImage = allImages[targetImageIndex];
    if (targetImage) {
      goToPageByIndex(targetImage.pageIndex);
    }
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    padding: '8px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const buttonStyle: React.CSSProperties = {
    background: 'none',
    border: '1px solid #777',
    color: '#ccc',
    fontSize: '10px',
    cursor: 'pointer',
    padding: '3px 8px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    flexShrink: 0,
  };

  const barContainerStyle: React.CSSProperties = {
    flexGrow: 1,
    height: '12px',
    backgroundColor: 'rgba(0,0,0,0.4)',
    border: '1px solid #555',
    borderRadius: '5px',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
  };

  const progressTextStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '8px',
    color: 'white',
    fontWeight: 'bold',
    textShadow: '0 0 2px black',
    pointerEvents: 'none',
  };

  // C1400: Wrap the bar container in a flex-grow div to ensure it resizes correctly.
  const wrapperStyle: React.CSSProperties = {
    flex: 1, // This makes the wrapper take up available space
    minWidth: 0, // This is crucial for flex items to shrink correctly
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={resetProgress} title="Reset all viewing progress">
        <FaSync />
      </button>
      <button style={buttonStyle} onClick={jumpToFirstUnseenImage} title="Jump to the first unseen image">
        <FaStepBackward /> First Unseen
      </button>

      <div style={wrapperStyle}>
        <div style={barContainerStyle} title={`Viewed: ${seenImageCount} / ${totalImages} images (${progressPercent.toFixed(1)}%)`} onClick={handleBarClick}>
          {allImages.map((image) => {
            const isSeen = seenImages[`${image.pageId}-${image.imageId}`];
            return (
              <div
                key={image.imageId}
                style={{
                  flex: 1,
                  backgroundColor: isSeen ? '#00ffff' : 'transparent',
                  borderRight: '1px solid rgba(85, 85, 85, 0.5)',
                  transition: 'background-color 0.5s ease',
                }}
              />
            );
          })}
          <div style={progressTextStyle}>{progressPercent.toFixed(0)}%</div>
        </div>
      </div>

      <button style={buttonStyle} onClick={jumpToNextUnseenImage} title="Jump to the next unseen image">
        <FaEye /> Next Unseen
      </button>
    </div>
  );
};

export default ReportProgressBar;