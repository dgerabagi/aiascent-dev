// src/components/menus/report/ReportChatPanel.tsx
// Updated on: C1400 (Add Ascentia message audio controls.)
// Updated on: C1381 (Fix markdown rendering, thinking italics, and input focus loss.)
// Updated on: C1377 (Refactor Ascentia chat tab into a stable component to fix input focus loss.)
// Updated on: C1374 (Implement tabbed view for Ask @Ascentia and Main Chat. Add Settings button. Fix thinking italics.)
import React, { useEffect, useRef, useCallback, useState, type ComponentType, type SVGProps } from 'react';
import { FaCommentDots, FaTimes, FaBroom, FaCog, FaPlay, FaPause, FaSpinner } from 'react-icons/fa';
import { useMultiplayerStore, type ChatMessage } from '../../../state';
import { useReportStore } from '../../../state/reportStore';
import { logInfo, logError } from '../../../logger';
import { formatMessage } from '../../../utils/chatFormatting';
import { useShallow } from 'zustand/react/shallow';
import { Resizable } from 're-resizable';
import ChatPanel from '../../ui/ChatPanel'; // Import the main game chat panel
import { useUIStore } from '../../../state';

const TimesIcon = FaTimes as ComponentType<SVGProps<SVGSVGElement>>;
const BroomIcon = FaBroom as ComponentType<SVGProps<SVGSVGElement>>;
const SettingsIcon = FaCog as ComponentType<SVGProps<SVGSVGElement>>;
const PlayIcon = FaPlay as ComponentType<SVGProps<SVGSVGElement>>;
const PauseIcon = FaPause as ComponentType<SVGProps<SVGSVGElement>>;
const SpinnerIcon = FaSpinner as ComponentType<SVGProps<SVGSVGElement>>;

const parseMessageWithThinking = (message: string): { type: 'normal' | 'thought', content: string }[] => {
  const parts: { type: 'normal' | 'thought', content: string }[] = [];
  let lastIndex = 0;
  const regex = /<Thinking>([\s\S]*?)<\/Thinking>/gi;
  let match;

  while ((match = regex.exec(message)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'normal', content: message.substring(lastIndex, match.index) });
    }
    parts.push({ type: 'thought', content: match[1] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < message.length) {
    parts.push({ type: 'normal', content: message.substring(lastIndex) });
  }

  if (parts.length === 0) {
    parts.push({ type: 'normal', content: message });
  }

  return parts;
};

// Ascentia chat view component
const AscentiaChatView: React.FC = () => {
  const {
    allPages, currentPageIndex, reportChatHistory, reportChatInput, setReportChatInput,
    addReportChatMessage, updateReportChatMessage, updateReportChatStatus,
    tokenCount, updateTokenCount, ascentiaAudioStatus, playAscentiaMessage,
    setAscentiaAudioStatus, ascentiaAudioAutoplay, setAscentiaAutoplay, currentAscentiaAudioUrl
  } = useReportStore(useShallow(state => ({
    allPages: state.allPages,
    currentPageIndex: state.currentPageIndex,
    reportChatHistory: state.reportChatHistory,
    reportChatInput: state.reportChatInput,
    setReportChatInput: state.setReportChatInput,
    addReportChatMessage: state.addReportChatMessage,
    updateReportChatMessage: state.updateReportChatMessage,
    updateReportChatStatus: state.updateReportChatStatus,
    tokenCount: state.tokenCount,
    updateTokenCount: state.updateTokenCount,
    ascentiaAudioStatus: state.ascentiaAudioStatus,
    playAscentiaMessage: state.playAscentiaMessage,
    setAscentiaAudioStatus: state.setAscentiaAudioStatus,
    ascentiaAudioAutoplay: state.ascentiaAudioAutoplay,
    setAscentiaAutoplay: state.setAscentiaAutoplay,
    currentAscentiaAudioUrl: state.currentAscentiaAudioUrl,
  })));

  const { socketInstance } = useMultiplayerStore(useShallow(state => ({ socketInstance: state.socketInstance })));
  const currentPage = allPages[currentPageIndex];
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (currentAscentiaAudioUrl && audio.src !== currentAscentiaAudioUrl) {
      audio.src = currentAscentiaAudioUrl;
      audio.play().catch(e => logError('[ReportChatPanel]', 'Ascentia audio autoplay failed', e));
    }
    const handlePlay = () => setAscentiaAudioStatus('playing');
    const handlePause = () => setAscentiaAudioStatus('paused');
    const handleEnded = () => setAscentiaAudioStatus('idle');
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('playing', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('playing', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentAscentiaAudioUrl, setAscentiaAudioStatus]);

  const handleStreamChunk = useCallback((data: { temporaryId: string, text: string }) => {
    updateReportChatMessage(data.temporaryId, data.text);
  }, [updateReportChatMessage]);

  const handleStreamEnd = useCallback((data: { temporaryId: string, contextTokenCount?: number }) => {
    setIsThinking(false);
    updateReportChatStatus(data.temporaryId, 'complete');
    if (data.contextTokenCount) updateTokenCount({ context: data.contextTokenCount });
  }, [updateReportChatStatus, updateTokenCount]);

  useEffect(() => {
    if (!socketInstance) return;
    socketInstance.on('report_ascentia_stream_chunk', handleStreamChunk);
    socketInstance.on('report_ascentia_stream_end', handleStreamEnd);
    return () => {
      socketInstance.off('report_ascentia_stream_chunk', handleStreamChunk);
      socketInstance.off('report_ascentia_stream_end', handleStreamEnd);
    };
  }, [socketInstance, handleStreamChunk, handleStreamEnd]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (!isThinking) textareaRef.current?.focus();
  }, [reportChatHistory, isThinking]);

  const handleSend = () => {
    const trimmedInput = reportChatInput.trim();
    if (!trimmedInput || isThinking || !socketInstance) return;
    addReportChatMessage({ author: 'You', flag: '👤', message: trimmedInput, channel: 'local' });
    const temporaryId = `report_ascentia_response_${Date.now()}`;
    addReportChatMessage({ id: temporaryId, author: 'Ascentia', flag: '🤖', message: '', status: 'thinking', channel: 'system' });
    setIsThinking(true);
    setReportChatInput('');
    const pageContext = `Page Title: ${currentPage?.pageTitle || 'N/A'}\nImage Prompt: ${currentPage?.imagePrompts[0]?.promptText || 'N/A'}\nTL;DR: ${currentPage?.tldr || 'N/A'}\nContent: ${currentPage?.content || 'N/A'}`;
    updateTokenCount({ user: Math.ceil(trimmedInput.length / 4), context: Math.ceil(pageContext.length / 4), response: 0 });
    socketInstance.emit('start_report_ascentia_stream', { prompt: trimmedInput, pageContext, temporaryId });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } };

  const handlePlayPauseClick = (message: ChatMessage) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (ascentiaAudioStatus === 'playing') {
      audio.pause();
    } else if (ascentiaAudioStatus === 'paused') {
      audio.play().catch(e => logError('[ReportChatPanel]', 'Audio resume failed', e));
    } else {
      playAscentiaMessage(message.message);
    }
  };

  const lastAscentiaMessage = [...reportChatHistory].reverse().find(msg => msg.author === 'Ascentia' && msg.status === 'complete');

  const messageAreaStyle: React.CSSProperties = { flexGrow: 1, overflowY: 'auto', padding: '8px', fontSize: '10px', lineHeight: '1.4' };
  const footerContainerStyle: React.CSSProperties = { borderTop: '1px solid #555', padding: '10px', flexShrink: 0 };
  const tokenCounterStyle: React.CSSProperties = { fontSize: '9px', color: '#aaa', textAlign: 'center', marginBottom: '8px', position: 'relative', cursor: 'help' };
  const tooltipStyle: React.CSSProperties = { visibility: 'hidden', width: '220px', backgroundColor: '#111', color: '#fff', textAlign: 'left', borderRadius: '6px', padding: '8px', position: 'absolute', zIndex: 1, bottom: '125%', left: '50%', marginLeft: '-110px', opacity: 0, transition: 'opacity 0.3s', border: '1px solid #555', fontSize: '9px', lineHeight: '1.5' };
  const tooltipItemStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between' };
  const textareaStyle: React.CSSProperties = { width: '100%', background: '#111', border: '1px solid #555', color: 'white', padding: '8px', fontSize: '10px', fontFamily: 'inherit', outline: 'none', borderRadius: '4px', resize: 'vertical', boxSizing: 'border-box', display: 'block', minHeight: '40px', maxHeight: '150px' };
  const thinkingCursorStyle: React.CSSProperties = { display: 'inline-block', width: '8px', height: '1em', backgroundColor: '#ccc', animation: 'blink 1s step-end infinite', verticalAlign: 'text-bottom', marginLeft: '2px' };
  const thoughtStyle: React.CSSProperties = { fontStyle: 'italic', color: '#99ccff', opacity: 0.8, display: 'block', borderLeft: '2px solid #5588cc', paddingLeft: '8px', margin: '4px 0' };
  const tagStyle: React.CSSProperties = { color: '#66a3ff' };
  const audioControlRowStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' };
  const playButtonStyle: React.CSSProperties = { background: 'none', border: '1px solid #777', color: '#ccc', cursor: 'pointer', padding: '4px 8px', borderRadius: '4px' };

  return (
    <>
      <audio ref={audioRef} />
      <div style={messageAreaStyle}>
        {reportChatHistory.map((msg, index) => {
          const messageParts = parseMessageWithThinking(msg.message);
          return (
            <div key={msg.id || index} style={{ marginBottom: '8px' }}>
              <span style={{ color: msg.author === 'You' ? '#0af' : '#00ffff' }}>{msg.flag} {String(msg.author)}: </span>
              {msg.status === 'thinking' ? (<span>🤔...</span>) : (
                <>
                  {messageParts.map((part, i) =>
                    part.type === 'thought' ? (
                      <div key={i} style={thoughtStyle}>
                        <span style={tagStyle}>&lt;Thinking&gt;</span>
                        {formatMessage(part.content)}
                        <span style={tagStyle}>&lt;/Thinking&gt;</span>
                      </div>
                    ) : (<React.Fragment key={i}>{formatMessage(part.content)}</React.Fragment>)
                  )}
                  {msg.status === 'streaming' && <span style={thinkingCursorStyle}></span>}
                </>
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <div style={footerContainerStyle}>
        <div style={tokenCounterStyle} onMouseEnter={() => setIsTooltipVisible(true)} onMouseLeave={() => setIsTooltipVisible(false)}>
          Est. Context Tokens: {tokenCount.total} / 16,384
          <div style={{ ...tooltipStyle, visibility: isTooltipVisible ? 'visible' : 'hidden', opacity: isTooltipVisible ? 1 : 0 }}>
            <b>Token Breakdown (est. chars/4):</b>
            <div style={tooltipItemStyle}><span>System Prompt:</span> <span>{tokenCount.breakdown.system}</span></div>
            <div style={tooltipItemStyle}><span>Page Context:</span> <span>{tokenCount.breakdown.context}</span></div>
            <div style={tooltipItemStyle}><span>Chat History:</span> <span>{tokenCount.breakdown.history}</span></div>
            <div style={{ ...tooltipItemStyle, paddingLeft: '10px' }}><span style={{ fontStyle: 'italic' }}> LLM Response:</span> <span style={{ fontStyle: 'italic' }}>{tokenCount.breakdown.response}</span></div>
            <div style={tooltipItemStyle}><span>User Prompt:</span> <span>{tokenCount.breakdown.user}</span></div>
            <hr style={{ border: 'none', borderTop: '1px solid #444', margin: '4px 0' }} />
            <div style={{ ...tooltipItemStyle, fontWeight: 'bold' }}><span>Total:</span> <span>{tokenCount.total}</span></div>
          </div>
        </div>
        <textarea ref={textareaRef} style={textareaStyle} value={reportChatInput} onChange={(e) => setReportChatInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ask a question... (Shift+Enter for newline)" disabled={isThinking} />
        <div style={audioControlRowStyle}>
          {lastAscentiaMessage && (
            <button style={playButtonStyle} onClick={() => handlePlayPauseClick(lastAscentiaMessage)} disabled={ascentiaAudioStatus === 'generating'}>
              {ascentiaAudioStatus === 'generating' ? <SpinnerIcon className="animate-spin" /> : (ascentiaAudioStatus === 'playing' ? <PauseIcon /> : <PlayIcon />)}
              <span style={{ marginLeft: '5px' }}>Read Last Response</span>
            </button>
          )}
          <label style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '10px' }}>
            <input type="checkbox" checked={ascentiaAudioAutoplay} onChange={(e) => setAscentiaAutoplay(e.target.checked)} />
            Auto-Read Responses
          </label>
        </div>
      </div>
    </>
  );
};

const ReportChatPanel: React.FC = () => {
  const { openChatSettingsModal } = useUIStore();
  const [activeTab, setActiveTab] = useState<'ascentia' | 'main'>('ascentia');
  const { allPages, currentPageIndex, toggleChatPanel, chatPanelWidth, setChatPanelWidth, clearReportChatHistory } = useReportStore(useShallow(state => ({ allPages: state.allPages, currentPageIndex: state.currentPageIndex, toggleChatPanel: state.toggleChatPanel, chatPanelWidth: state.chatPanelWidth, setChatPanelWidth: state.setChatPanelWidth, clearReportChatHistory: state.clearReportChatHistory, })));
  const currentPage = allPages[currentPageIndex];
  const currentPageTitle = currentPage?.pageTitle || 'the report';

  const handleClear = () => {
    if (activeTab === 'ascentia') {
      clearReportChatHistory(currentPageTitle);
    }
  };

  const containerStyle: React.CSSProperties = { height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', borderLeft: '1px solid #555', display: 'flex', flexDirection: 'column', flexShrink: 0 };
  const headerStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, padding: '10px' };
  const closeChatButtonStyle: React.CSSProperties = { background: 'none', border: 'none', color: '#aaa', fontSize: '18px', cursor: 'pointer' };
  const tabContainerStyle: React.CSSProperties = { display: 'flex', borderBottom: '1px solid #555', padding: '0 10px' };
  const tabButtonStyle = (isActive: boolean): React.CSSProperties => ({ padding: '8px 12px', fontSize: '11px', background: 'none', border: 'none', borderBottom: `2px solid ${isActive ? '#00ffff' : 'transparent'}`, color: isActive ? '#00ffff' : '#aaa', cursor: 'pointer', fontFamily: 'inherit', });
  const contentAreaStyle: React.CSSProperties = { flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' };

  return (
    <Resizable
      size={{ width: chatPanelWidth, height: '100%' }}
      minWidth={300}
      maxWidth="60vw"
      enable={{ left: true }}
      onResizeStop={(e, direction, ref, d) => {
        setChatPanelWidth(chatPanelWidth + d.width);
      }}
      handleClasses={{ left: 'resizable-handle-vertical' }}
    >
      <div style={containerStyle}>
        <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
        <div style={headerStyle}>
          <div style={tabContainerStyle}>
            <button style={tabButtonStyle(activeTab === 'ascentia')} onClick={() => setActiveTab('ascentia')}>Ask @Ascentia</button>
            <button style={tabButtonStyle(activeTab === 'main')} onClick={() => setActiveTab('main')}>Main Chat</button>
          </div>
          <div>
            <button style={{ ...closeChatButtonStyle, marginRight: '10px' }} onClick={handleClear} title="Clear Chat History">
              <BroomIcon />
            </button>
            <button style={{ ...closeChatButtonStyle, marginRight: '10px' }} onClick={openChatSettingsModal} title="Chat Settings">
              <SettingsIcon />
            </button>
            <button style={closeChatButtonStyle} onClick={toggleChatPanel} title="Close Chat Panel">
              <TimesIcon />
            </button>
          </div>
        </div>
        <div style={contentAreaStyle}>
          {activeTab === 'ascentia' ? <AscentiaChatView /> : <ChatPanel isEmbedded={true} isEmbeddedInReport={true} />}
        </div>
      </div>
    </Resizable>
  );
};

export default ReportChatPanel;