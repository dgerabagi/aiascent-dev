// src/components/report-viewer/ReportChatPanel.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useReportStore, useReportState, ChatMessage } from '@/stores/reportStore';
import { FaTimes, FaBroom } from 'react-icons/fa';
import { Resizable } from 're-resizable';

const ReportChatPanel: React.FC = () => {
    const { chatPanelWidth, setChatPanelWidth, toggleChatPanel, clearReportChatHistory } = useReportStore.getState();
    const { allPages, currentPageIndex, reportChatHistory, reportChatInput, setReportChatInput, addReportChatMessage, updateReportChatMessage, updateReportChatStatus } = useReportState(state => ({
        allPages: state.allPages,
        currentPageIndex: state.currentPageIndex,
        reportChatHistory: state.reportChatHistory,
        reportChatInput: state.reportChatInput,
        setReportChatInput: state.setReportChatInput,
        addReportChatMessage: state.addReportChatMessage,
        updateReportChatMessage: state.updateReportChatMessage,
        updateReportChatStatus: state.updateReportChatStatus,
    }));
    
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const currentPage = allPages[currentPageIndex];

    useEffect(() => {
        // C15 Fix: Changed block to 'nearest' to avoid whole page scroll
        messagesEndRef.current?.scrollIntoView({ behavior: 'auto', block: 'nearest' });
        if (!isThinking) textareaRef.current?.focus();
    }, [reportChatHistory, isThinking]);

    const handleSend = async () => {
        const trimmedInput = reportChatInput.trim();
        if (!trimmedInput || isThinking) return;

        addReportChatMessage({ author: 'You', flag: '👤', message: trimmedInput, channel: 'local' });
        const temporaryId = `report_ascentia_response_${Date.now()}`;
        addReportChatMessage({ id: temporaryId, author: 'Ascentia', flag: '🤖', message: '', status: 'thinking', channel: 'system' });
        setIsThinking(true);
        setReportChatInput('');

        const pageContext = `Page Title: ${currentPage?.pageTitle || 'N/A'}\nTL;DR: ${currentPage?.tldr || 'N/A'}\nContent: ${currentPage?.content || 'N/A'}`;

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: trimmedInput, pageContext }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Proxy error: ${response.status} ${errorText}`);
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
                // Simple SSE parsing
                const lines = chunk.split('\n');
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.substring(6);
                        if (data.trim() === '[DONE]') continue;
                        try {
                            const parsed = JSON.parse(data);
                            interface Choice {
                                text: string;
                            }

                            interface ParsedData {
                                choices?: Choice[];
                            }
                            const parsedData: ParsedData = parsed;
                            const textChunk: string = parsedData.choices?.[0]?.text || '';
                            if (textChunk) {
                                updateReportChatMessage(temporaryId, textChunk);
                            }
                        } catch (e) {
                            // It might not be JSON, but raw text.
                            // This can happen if the stream is not perfectly formatted SSE.
                            // We will just append the raw data part if it's not JSON.
                            if (data) updateReportChatMessage(temporaryId, data);
                        }
                    }
                }
            }
            updateReportChatStatus(temporaryId, 'complete');

        } catch (error) {
            console.error("Error with chat stream:", error);
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            // C16: Provide a more helpful error message in the UI.
            const userFriendlyError = `Sorry, I'm having trouble connecting to my core systems. The server logs may show a connection timeout error. Please ask the curator to check the vLLM server's status and firewall configuration. (Details: ${errorMessage})`;
            updateReportChatMessage(temporaryId, userFriendlyError);
            updateReportChatStatus(temporaryId, 'complete');
        } finally {
            setIsThinking(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <Resizable
            size={{ width: chatPanelWidth, height: '100%' }}
            minWidth={300}
            maxWidth="60vw"
            enable={{ left: true }}
            onResizeStop={(e, direction, ref, d) => setChatPanelWidth(chatPanelWidth + d.width)}
            handleClasses={{ left: 'border-l-4 border-transparent hover:border-primary transition-colors duration-200' }}
        >
            <div className="h-full bg-background border-l flex flex-col flex-shrink-0">
                <header className="flex justify-between items-center p-2 border-b flex-shrink-0">
                    <h3 className="font-bold text-sm">Ask @Ascentia</h3>
                    <div>
                        <button className="p-2 text-muted-foreground hover:text-foreground" onClick={() => { clearReportChatHistory(currentPage?.pageTitle || "Report"); setTimeout(() => textareaRef.current?.focus(), 0); }} title="Clear Chat History"><FaBroom /></button>
                        <button className="p-2 text-muted-foreground hover:text-foreground" onClick={toggleChatPanel} title="Close Chat Panel"><FaTimes /></button>
                    </div>
                </header>
                <div className="flex-1 p-2 overflow-y-auto text-sm text-foreground space-y-2">
                    {reportChatHistory.map((msg, index) => (
                        <div key={msg.id || index}>
                            <span className={`font-bold ${msg.author === 'You' ? 'text-blue-400' : 'text-cyan-400'}`}>{msg.flag} {msg.author}: </span>
                            {msg.status === 'thinking' ? <span className="italic">Thinking...</span> : <span className="whitespace-pre-wrap">{msg.message}</span>}
                            {msg.status === 'streaming' && <span className="inline-block w-2 h-4 bg-foreground animate-pulse ml-1"></span>}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <footer className="p-2 border-t flex-shrink-0">
                    <textarea
                        ref={textareaRef}
                        className="w-full bg-muted border rounded p-2 text-sm resize-none"
                        placeholder="Ask a question... (Shift+Enter for newline)"
                        value={reportChatInput}
                        onChange={(e) => setReportChatInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isThinking}
                        rows={3}
                    />
                </footer>
            </div>
        </Resizable>
    );
};

export default ReportChatPanel;