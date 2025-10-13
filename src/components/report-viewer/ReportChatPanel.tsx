// src/components/report-viewer/ReportChatPanel.tsx
'use client';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useReportStore, useReportState } from '@/stores/reportStore';
import { FaTimes, FaBroom } from 'react-icons/fa';
import MarkdownRenderer from '@/components/shared/MarkdownRenderer';
import { Badge } from '@/components/ui/badge';

interface ReportChatPanelProps {
    reportName: string;
}

// Regex to strip internal LLM thinking tags and content
const thinkingRegex = /<Thinking>[\s\S]*?<\/Thinking>/gi;

const ReportChatPanel: React.FC<ReportChatPanelProps> = ({ reportName }) => {
    const { toggleChatPanel, clearReportChatHistory, handleKeyDown: handleStoreKeyDown } = useReportStore.getState();
    const { allPages, currentPageIndex, reportChatHistory, reportChatInput, setReportChatInput, addReportChatMessage, updateReportChatMessage, updateReportChatStatus, suggestedPrompts, setSuggestedPrompts } = useReportState(state => ({
        allPages: state.allPages,
        currentPageIndex: state.currentPageIndex,
        reportChatHistory: state.reportChatHistory,
        reportChatInput: state.reportChatInput,
        setReportChatInput: state.setReportChatInput,
        addReportChatMessage: state.addReportChatMessage,
        updateReportChatMessage: state.updateReportChatMessage,
        updateReportChatStatus: state.updateReportChatStatus,
        suggestedPrompts: state.suggestedPrompts,
        setSuggestedPrompts: state.setSuggestedPrompts,
    }));
    
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const currentPage = allPages[currentPageIndex];

    // C15 Fix: Prevent scrolling entire page on new messages.
    // Use specific container ref for scrolling.
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
        if (!isThinking) textareaRef.current?.focus();
    }, [reportChatHistory, isThinking]);

    // Stop propagation of keys to prevent report navigation
    const handlePanelKeyDown = (e: React.KeyboardEvent) => {
        e.stopPropagation();
    };

    // C19: Beautify LLM output by stripping special tokens
    const parseFinalMessage = (rawText: string): string => {
        // C35: Strip out suggestions block before rendering
        const suggestionsRegex = /:::suggestions:::[\s\S]*?:::end_suggestions:::/g;
        let cleanedText = rawText.replace(suggestionsRegex, '').trim();

        // C36 FIX: Strip out thinking tags
        cleanedText = cleanedText.replace(thinkingRegex, '').trim();

        const finalMessageMarker = '<|channel|>final<|message|>';
        const finalMessageIndex = cleanedText.lastIndexOf(finalMessageMarker);
    
        if (finalMessageIndex !== -1) {
            // If marker exists, take everything after it
            return cleanedText.substring(finalMessageIndex + finalMessageMarker.length);
        }
        
        // C19 Fix: If streaming, don't show "could not parse" yet.
        // Just strip analysis tags if present to show raw stream cleanly.
        const analysisRegex = /<\|channel\|>analysis<\|message\|>[\s\S]*?(?=<\|channel\|>|$)/g;
        cleanedText = cleanedText.replace(analysisRegex, '').trim();
        
        return cleanedText;
    };

    // C35: Parse suggestions from the last Ascentia message
    const lastAscentiaMessage = useMemo(() => {
        return [...reportChatHistory].reverse().find(msg => msg.author === 'Ascentia');
    }, [reportChatHistory]);

    useEffect(() => {
        if (lastAscentiaMessage && lastAscentiaMessage.status === 'complete') {
            const suggestionsRegex = /:::suggestions:::([\s\S]*?):::end_suggestions:::/;
            const match = lastAscentiaMessage.message.match(suggestionsRegex);
            if (match && match[1]) {
                try {
                    const newSuggestions = JSON.parse(match[1]);
                    if (Array.isArray(newSuggestions) && newSuggestions.every(s => typeof s === 'string')) {
                        // Only update if different to prevent infinite loops
                        if (JSON.stringify(newSuggestions) !== JSON.stringify(suggestedPrompts)) {
                            setSuggestedPrompts(newSuggestions);
                        }
                    }
                } catch (e) {
                    console.warn("Failed to parse suggestions JSON:", e);
                }
            }
        }
    }, [lastAscentiaMessage, setSuggestedPrompts, suggestedPrompts]);


    const sendMessage = async (text: string) => {
        if (isThinking) return;

        addReportChatMessage({ author: 'You', flag: '👤', message: text, channel: 'local' });
        const temporaryId = `report_ascentia_response_${Date.now()}`;
        addReportChatMessage({ id: temporaryId, author: 'Ascentia', flag: '🤖', message: '', status: 'thinking', channel: 'system' });
        setIsThinking(true);
        setReportChatInput('');

        const pageContext = `Page Title: ${currentPage?.pageTitle || 'N/A'}\nTL;DR: ${currentPage?.tldr || 'N/A'}\nContent: ${currentPage?.content || 'N/A'}`;
        
        // C27: Determine knowledge base based on report name
        const knowledgeBase = reportName === 'whitepaper' ? 'dce' : 'report';

        try {
            // C17: Enhanced error handling in fetch
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s connection timeout

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    prompt: text, 
                    pageContext,
                    knowledgeBase: knowledgeBase // C27: Send KB identifier
                }),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`${response.status} ${errorText}`);
            }

            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let done = false;
            
            updateReportChatStatus(temporaryId, 'streaming');
            while (!done) {
                const { value, done: doneReading } = await reader.read();
                done = doneReading;
                const chunk = decoder.decode(value, { stream: true });
                
                // Parse SSE format (data: ...)
                const lines = chunk.split('\n');
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.substring(6);
                        if (data.trim() === '[DONE]') continue;
                        try {
                            const parsed = JSON.parse(data);
                            const textChunk = parsed.choices?.[0]?.text || '';
                            if (textChunk) {
                                updateReportChatMessage(temporaryId, textChunk);
                            }
                        } catch (e) {
                            // If not JSON, append raw data (fallback)
                            if (data) updateReportChatMessage(temporaryId, data);
                        }
                    }
                }
            }
            updateReportChatStatus(temporaryId, 'complete');

        } catch (error: unknown) {
            console.error("Error with chat stream:", error);
            let userFriendlyError = "An unknown error occurred.";

            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    userFriendlyError = "Connection timed out. The AI server might be waking up or offline.";
                } else if (error.message.includes('502') || error.message.includes('Failed to fetch')) {
                    userFriendlyError = "Could not connect to the AI server. Please check your network connection or firewall.";
                } else {
                    userFriendlyError = `Error: ${error.message}`;
                }
            }
            
            updateReportChatMessage(temporaryId, userFriendlyError);
            updateReportChatStatus(temporaryId, 'complete');
        } finally {
            setIsThinking(false);
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        e.stopPropagation(); // Prevent report navigation
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const trimmedInput = reportChatInput.trim();
            if (trimmedInput) {
                sendMessage(trimmedInput);
            }
        }
    };

    const handleChipClick = (prompt: string) => {
        sendMessage(prompt);
    };

    return (
        <div className="h-full bg-background border-l border-border flex flex-col flex-shrink-0" onKeyDown={handlePanelKeyDown}>
            <header className="flex justify-between items-center p-2 border-b border-border flex-shrink-0 bg-muted/30">
                <h3 className="font-bold text-sm flex items-center gap-2">
                    Ask @Ascentia
                    <Badge variant="outline" className="text-[10px] px-1 py-0 border-primary/50 text-primary">
                        {reportName === 'whitepaper' ? 'DCE Docs' : 'Report KB'}
                    </Badge>
                </h3>
                <div>
                    <button 
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                        onClick={() => { 
                            clearReportChatHistory(currentPage?.pageTitle || "Report"); 
                            // C15 Fix: Don't scroll window on clear
                            setTimeout(() => textareaRef.current?.focus(), 0); 
                        }} 
                        title="Clear Chat History"
                    >
                        <FaBroom />
                    </button>
                    <button 
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                        onClick={toggleChatPanel} 
                        title="Close Chat Panel"
                    >
                        <FaTimes />
                    </button>
                </div>
            </header>
            
            {/* Chat History */}
            <div ref={chatContainerRef} className="flex-1 p-3 overflow-y-auto text-sm space-y-4 scroll-smooth">
                {reportChatHistory.map((msg, index) => (
                    <div key={msg.id || index} className={`flex flex-col ${msg.author === 'You' ? 'items-end' : 'items-start'}`}>
                        <div className={`flex items-center gap-1 text-xs mb-1 ${msg.author === 'You' ? 'text-primary' : 'text-cyan-500'}`}>
                            <span>{msg.flag}</span>
                            <span className="font-bold">{msg.author}</span>
                        </div>
                        <div className={`rounded-lg p-2 max-w-[90%] ${msg.author === 'You' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            {msg.status === 'thinking' ? (
                                <span className="italic flex items-center gap-1 text-muted-foreground">Thinking <span className="animate-pulse">...</span></span>
                            ) : (
                                // C36 FIX: Changed from undefined parseMessageWithThinking to defined parseFinalMessage
                                <div className={`prose prose-sm max-w-none ${msg.author === 'You' ? 'prose-invert' : 'dark:prose-invert'}`}>
                                    <MarkdownRenderer>{parseFinalMessage(msg.message)}</MarkdownRenderer>
                                </div>
                            )}
                        </div>
                        {msg.status === 'streaming' && <span className="text-[10px] text-muted-foreground animate-pulse mt-1">Typing...</span>}
                    </div>
                ))}
            </div>

            {/* C35: Suggested Prompts (Chips) */}
            {!isThinking && suggestedPrompts.length > 0 && (
                <div className="p-2 border-t border-border bg-muted/20 flex gap-2 flex-wrap">
                    {suggestedPrompts.map((prompt, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs max-w-full truncate"
                            onClick={() => handleChipClick(prompt)}
                            title={prompt} // Tooltip on hover
                        >
                            {prompt}
                        </Badge>
                    ))}
                </div>
            )}

            {/* Input Area */}
            <footer className="p-3 border-t border-border bg-background flex-shrink-0">
                <textarea
                    ref={textareaRef}
                    className="w-full bg-muted border border-input rounded-md p-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground"
                    placeholder={isThinking ? "Ascentia is thinking..." : "Ask a question... (Enter to send, Shift+Enter for newline)"}
                    value={reportChatInput}
                    onChange={(e) => setReportChatInput(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    disabled={isThinking}
                    rows={3}
                />
                <div className="text-[10px] text-muted-foreground text-right mt-1">
                    Powered by local LLM (RAG)
                </div>
            </footer>
        </div>
    );
};

export default ReportChatPanel;