// src/components/menus/report/ImageNavigator.tsx
// Updated on: C1381 (Fix prompt toggle button functionality.)
// Updated on: C1374 (Add hint toggle button and centralize hint text here.)
// Updated on: C1373 (Change "Unvoted" to "Votes Left!", centralize hint text.)
// Updated on: C1360 (Incorporate jumpPages action for Shift/Ctrl+Click functionality.)
import React from 'react';
import { useReportStore } from '../../../state/reportStore';
import { FaChevronLeft, FaChevronRight, FaThumbsUp, FaCommentDots, FaTree, FaCheckSquare, FaChevronUp, FaChevronDown, FaInfoCircle } from 'react-icons/fa';
import { useShallow } from 'zustand/react/shallow';
import { useSession } from 'next-auth/react';

const ImageNavigator: React.FC = () => {
  const { data: session } = useSession();
  const {
    allPages, currentPageIndex, currentImageIndex,
    nextImage, prevImage, jumpPages, castVote, imageVotes, toggleChatPanel,
    votesCastByPage, togglePromptVisibility, isPromptVisible,
    isHintVisible, toggleHintVisibility,
  } = useReportStore(
    useShallow(state => ({
      allPages: state.allPages,
      currentPageIndex: state.currentPageIndex,
      currentImageIndex: state.currentImageIndex,
      nextImage: state.nextImage,
      prevImage: state.prevImage,
      jumpPages: state.jumpPages,
      castVote: state.castVote,
      imageVotes: state.imageVotes,
      toggleChatPanel: state.toggleChatPanel,
      votesCastByPage: state.votesCastByPage,
      togglePromptVisibility: state.togglePromptVisibility,
      isPromptVisible: state.isPromptVisible,
      isHintVisible: state.isHintVisible,
      toggleHintVisibility: state.toggleHintVisibility,
    }))
  );
  const { toggleTreeNav } = useReportStore();

  const currentPage = allPages[currentPageIndex];
  const currentPrompt = currentPage?.imagePrompts[0];
  const currentImage = currentPrompt?.images[currentImageIndex];
  const totalImages = currentPrompt?.images.length ?? 0;
  const currentVotes = currentImage ? (imageVotes[currentImage.imageId] || 0) : 0;
  const hasVotedOnThisPage = votesCastByPage.hasOwnProperty(currentPageIndex);
  const isThisImageVoted = hasVotedOnThisPage && votesCastByPage[currentPageIndex] === currentImage?.imageId;

  const pagesLeftToVote = allPages.length - Object.keys(votesCastByPage).length;

  const handleVote = () => {
    if (currentImage && session) {
      castVote(currentImage.imageId, currentPageIndex);
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    fontSize: '10px',
    color: '#ccc',
    width: '100%',
  };

  const navGroupStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: 1,
  };

  const centerNavGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Stack controls and hint
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px', // Gap between controls and hint
    flex: 2,
  };

  const controlsRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px', // Adjusted gap
  };

  const actionGroupStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'flex-end',
    flex: 1,
  };

  const counterGroupStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const buttonStyle: React.CSSProperties = {
    background: 'none',
    border: '1px solid #777',
    color: '#ccc',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  };

  const smallButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    fontSize: '12px',
    padding: '3px 8px',
  };

  const hintTextStyle: React.CSSProperties = {
    fontSize: '9px',
    color: '#88ddff',
    fontStyle: 'italic',
    width: '100%',
    textAlign: 'center',
    lineHeight: '1.5',
  };

  const handlePageJump = (e: React.MouseEvent, direction: number) => {
    let count = direction;
    if (e.shiftKey) count *= 5;
    if (e.ctrlKey) count *= 10;
    jumpPages(count);
  };


  return (
    <div style={containerStyle}>
      <div style={navGroupStyle}>
        <button style={smallButtonStyle} onClick={toggleTreeNav} title="Toggle Page Tree">
          <FaTree /> Tree
        </button>
        <button style={smallButtonStyle} onClick={togglePromptVisibility} title={isPromptVisible ? "Hide Image Prompt" : "Show Image Prompt"}>
          <FaInfoCircle /> Prompt
        </button>
      </div>

      <div style={centerNavGroupStyle}>
        <div style={controlsRowStyle}>
          <div style={counterGroupStyle}>
            <button style={buttonStyle} onClick={(e) => handlePageJump(e, -1)} title="Previous Page (Up Arrow)"><FaChevronUp /></button>
            <span>Page {currentPageIndex + 1} / {allPages.length}</span>
            <button style={buttonStyle} onClick={(e) => handlePageJump(e, 1)} title="Next Page (Down Arrow)"><FaChevronDown /></button>
          </div>
          {/* C1374: Added hint toggle button */}
          <button style={smallButtonStyle} onClick={toggleHintVisibility} title={isHintVisible ? "Hide Controls Hint" : "Show Controls Hint"}>
            <FaInfoCircle />
          </button>
          <div style={counterGroupStyle}>
            <button style={buttonStyle} onClick={prevImage} disabled={totalImages <= 1} title="Previous Image (Left Arrow)"><FaChevronLeft /></button>
            <span>Image {currentImageIndex + 1} / {totalImages}</span>
            <button style={buttonStyle} onClick={nextImage} disabled={totalImages <= 1} title="Next Image (Right Arrow)"><FaChevronRight /></button>
          </div>
        </div>
        {/* C1374: Hint text is now toggled */}
        {isHintVisible && (
          <div style={hintTextStyle}>
            <span>Use <kbd>↑</kbd>/<kbd>↓</kbd> for pages. Use <kbd>←</kbd>/<kbd>→</kbd> for images. <kbd>Spacebar</kbd> to vote.</span>
            <br />
            <span>Hold <kbd style={{ border: '1px solid #555', padding: '1px 3px', borderRadius: '2px', background: '#333' }}>Shift</kbd> to jump 5, or <kbd style={{ border: '1px solid #555', padding: '1px 3px', borderRadius: '2px', background: '#333' }}>Ctrl</kbd> to jump 10.</span>
          </div>
        )}
      </div>

      <div style={actionGroupStyle}>
        <button
          style={{ ...smallButtonStyle, backgroundColor: pagesLeftToVote === 0 ? '#3a3' : '#553', borderColor: pagesLeftToVote === 0 ? '#7f7' : '#aa7' }}
          disabled
          title={pagesLeftToVote > 0 ? `${pagesLeftToVote} pages left to vote on` : "All pages voted on!"}
        >
          <FaCheckSquare /> {pagesLeftToVote} Votes Left!
        </button>
        <button
          style={{ ...smallButtonStyle, backgroundColor: isThisImageVoted ? '#3a3' : (session ? '#555' : '#444'), borderColor: isThisImageVoted ? '#7f7' : (session ? '#777' : '#555') }}
          onClick={handleVote}
          disabled={!session}
          title={session ? "Vote for this image (Spacebar)" : "You must be logged in to vote"}
        >
          <FaThumbsUp /> Vote ({currentVotes})
        </button>
        <button
          style={{ ...smallButtonStyle, backgroundColor: '#448', borderColor: '#88f' }}
          onClick={toggleChatPanel}
          title="Ask @Ascentia about this page"
        >
          <FaCommentDots /> Ask
        </button>
      </div>
    </div>
  );
};

export default ImageNavigator;