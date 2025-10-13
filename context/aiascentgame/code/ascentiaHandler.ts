// src/server/api/ascentiaHandler.ts
// Updated on: C1401 (Add detailed logging for context selection and chunk retrieval.)
// Updated on: C1382 (Add explicit logging to handleAscentiaStream to diagnose RAG context issues.)
// Updated on: C1381 (Add `context` parameter handling to select the correct knowledge base.)
// Updated on: C1374 (Remove "thinking" system message from report handler to prevent it appearing in main chat.)
// Updated on: C1373 (Verify path logic for report KB is correct.)
// Updated on: C1356 (Incorporate the full pageContext from the client into the LLM system prompt.)
// Updated on: C1344 (Add logic for loading and handling report-specific knowledge base and chat stream.)

/*typescript
import { type Socket, type Server as SocketIOServer } from 'socket.io';
import { logInfo, logWarn, logError } from '../../logger';
import { type PlayerState } from '../../server';
import { type ChatMessage } from '../../state/multiplayerStore';
import faiss from 'faiss-node';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { OUT_OF_GAME_SYSTEM_PROMPTS } from '../../game/personas/personaConstants';
import { LlmService } from '../llmService';

const LLM_BASE_URL = process.env.REMOTE_LLM_URL || process.env.LOCAL_LLM_URL || 'http://127.0.0.1:1234';
const EMBEDDING_API_URL = LLM_BASE_URL + '/v1/embeddings';
const CHAT_COMPLETIONS_API_URL = LLM_BASE_URL + '/v1/chat/completions';
const EMBEDDING_MODEL = 'text-embedding-granite-embedding-278m-multilingual';
const ASCENTIA_MODEL = 'qwen/qwen3-30b-a3b';

let faissIndex: any = null;
let ascentiaChunks: { id: string, chunk: string }[] = [];
let reportFaissIndex: any = null;
let reportAscentiaChunks: { id: string, chunk: string }[] = [];

export function loadAscentiaKnowledgeBase(publicPath: string) {
    const FAISS_INDEX_PATH = path.join(publicPath, 'ascentia_faiss.index');
    const CHUNKS_PATH = path.join(publicPath, 'ascentia_chunks.json');
    try {
        if (fs.existsSync(FAISS_INDEX_PATH) && fs.existsSync(CHUNKS_PATH)) {
            logInfo('[AscentiaKB]', 'Loading GAME FAISS index and chunk data...');
            ascentiaChunks = JSON.parse(fs.readFileSync(CHUNKS_PATH, 'utf-8'));
            faissIndex = faiss.Index.read(FAISS_INDEX_PATH);
            logInfo('[AscentiaKB]', `Successfully loaded GAME FAISS index with ${faissIndex.ntotal} vectors and ${ascentiaChunks.length} chunks.`);
        } else {
            logWarn('[AscentiaKB]', 'GAME FAISS index or chunks file not found. Ascentia will have no game knowledge base.');
        }
    } catch (error) {
        logError('[AscentiaKB]', 'Failed to load GAME FAISS index or chunks file.', error);
        faissIndex = null;
        ascentiaChunks = [];
    }
}

export function loadReportKnowledgeBase(publicPath: string) {
    const FAISS_INDEX_PATH = path.join(publicPath, 'report_faiss.index');
    const CHUNKS_PATH = path.join(publicPath, 'report_chunks.json');
    try {
        if (fs.existsSync(FAISS_INDEX_PATH) && fs.existsSync(CHUNKS_PATH)) {
            logInfo('[ReportKB]', 'Loading REPORT FAISS index and chunk data...');
            reportAscentiaChunks = JSON.parse(fs.readFileSync(CHUNKS_PATH, 'utf-8'));
            reportFaissIndex = faiss.Index.read(FAISS_INDEX_PATH);
            logInfo('[ReportKB]', `Successfully loaded REPORT FAISS index with ${reportFaissIndex.ntotal} vectors and ${reportAscentiaChunks.length} chunks.`);
        } else {
            logWarn('[ReportKB]', `REPORT FAISS index or chunks file not found at ${FAISS_INDEX_PATH}. Ascentia will have no report knowledge base.`);
        }
    } catch (error) {
        logError('[ReportKB]', 'Failed to load REPORT FAISS index or chunks file.', error);
        reportFaissIndex = null;
        reportAscentiaChunks = [];
    }
}

async function getEmbeddingForQuery(text: string): Promise<number[] | null> {
    try {
        const response = await axios.post(EMBEDDING_API_URL, {
            model: EMBEDDING_MODEL,
            input: text,
        });
        if (response.data?.data?.[0]?.embedding) {
            return response.data.data[0].embedding;
        }
        return null;
    } catch (error) {
        logError('[AscentiaKB]', 'Failed to get embedding for query.', error);
        return null;
    }
}

export async function handleAscentiaWelcome(socket: Socket, players: Record<string, PlayerState>, payload: any) {
    const logPrefix = '[Handler:AscentiaWelcome]';
    const recipientState = players[socket.id];
    if (!recipientState) {
        logWarn(logPrefix, `Received request from unidentified socket ${socket.id}. Ignoring.`);
        return;
    }
    const { showThinking } = payload || {};
    logInfo(logPrefix, `Handling welcome message for ${recipientState.displayName}`);
    const temporaryId = `ascentia_welcome_${Date.now()}`;
    const emitter = socket;

    try {
        const placeholder: ChatMessage = {
            id: temporaryId,
            author: 'Ascentia',
            flag: '🤖',
            message: '',
            status: 'thinking',
            channel: 'private',
        };
        emitter.emit('newPrivateMessage', placeholder);

        const welcomePrompt = `A new player, ${recipientState.displayName}, has just joined the game AI Ascent. Greet them warmly and offer your assistance as Ascentia, the in-game AI helper. Keep it concise (2-3 sentences).`;
        const inGameSystemPrompt = `<In-Game System Prompt>You are @Ascentia. Your personality is that of a helpful, encouraging, and slightly witty AI assistant. You are greeting a new player. Do not use any context from the knowledge base for this greeting.</In-Game System Prompt>`;
        const outOfGamePrompt = OUT_OF_GAME_SYSTEM_PROMPTS[ASCENTIA_MODEL as keyof typeof OUT_OF_GAME_SYSTEM_PROMPTS];

        const messages = [
            { role: 'system', content: `${outOfGamePrompt}${inGameSystemPrompt}` },
            { role: 'user', content: welcomePrompt }
        ];

        const requestBody = { model: ASCENTIA_MODEL, messages, temperature: 0.8, max_tokens: 1024, stream: true };

        emitter.emit('ascentia_generation_complete', { temporaryId });

        const llmResponse = await fetch(CHAT_COMPLETIONS_API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody) });
        if (!llmResponse.ok || !llmResponse.body) { const errorBody = await llmResponse.text(); throw new Error(`LLM service returned an error: ${llmResponse.status} ${errorBody}`); }

        const reader = llmResponse.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let isFirstChunk = true;

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const jsonStr = line.substring(6);
                    if (jsonStr === '[DONE]') break;
                    try {
                        const chunk = JSON.parse(jsonStr);
                        if (chunk.choices[0]?.delta?.content) {
                            let textChunk = chunk.choices[0].delta.content;
                            if (showThinking === false) {
                                textChunk = textChunk.replace(/<Thinking>[\s\S]*?<\/Thinking>/gi, '');
                            }
                            if (isFirstChunk) {
                                textChunk = textChunk.trimStart();
                                isFirstChunk = false;
                            }
                            if (textChunk) {
                                emitter.emit('ascentia_stream_chunk', { temporaryId, text: textChunk });
                            }
                        }
                    } catch (e) { logWarn(logPrefix, 'Failed to parse stream chunk JSON:', jsonStr, e); }
                }
            }
        }
    } catch (error: any) {
        logError(logPrefix, 'Error during welcome message streaming:', error);
        emitter.emit('ascentia_stream_chunk', { temporaryId, text: `\n[System Error: Could not generate welcome message.]` });
    } finally {
        emitter.emit('ascentia_stream_end', { temporaryId });
    }
}

export async function handleAscentiaStream(io: SocketIOServer, socket: Socket, players: Record<string, PlayerState>, payload: any) {
    const logPrefix = '[Handler:AscentiaStream]';
    const senderState = players[socket.id];
    if (!senderState) {
        logWarn(logPrefix, `Received request from unidentified socket ${socket.id}. Ignoring.`);
        return;
    }
    const { prompt, isGlobal, showThinking, kbChunks, context } = payload || {};
    
    // C1401: Logic to select the correct knowledge base
    const useReportKb = context === 'report';
    const activeFaissIndex = useReportKb ? reportFaissIndex : faissIndex;
    const activeChunks = useReportKb ? reportAscentiaChunks : ascentiaChunks;
    const kbName = useReportKb ? 'REPORT' : 'GAME';
    
    logInfo(logPrefix, `Received stream request from ${senderState.displayName}: "${prompt}" (Global: ${isGlobal}, Context: ${context}). Using ${kbName} knowledge base.`);
    
    const temporaryId = `ascentia_response_${Date.now()}`;
    const emitter = isGlobal ? io : socket;
    const chunkEvent = isGlobal ? 'ascentia_global_stream_chunk' : 'ascentia_stream_chunk';
    const endEvent = isGlobal ? 'ascentia_global_stream_end' : 'ascentia_stream_end';
    const messageEvent = isGlobal ? 'newGlobalMessage' : 'newPrivateMessage';

    try {
        const placeholder: ChatMessage = { id: temporaryId, author: 'Ascentia', flag: '🤖', message: '', status: 'thinking', channel: isGlobal ? 'global' : 'private' };
        emitter.emit(messageEvent, placeholder);
        
        let contextString = `No relevant context found in the ${kbName} knowledge base.`;
        if (activeFaissIndex && activeChunks.length > 0 && kbChunks > 0) {
            logInfo(logPrefix, `Searching ${kbName} KB for prompt: "${prompt}"`);
            const queryEmbedding = await getEmbeddingForQuery(prompt);
            if (queryEmbedding) {
                const { labels } = activeFaissIndex.search(queryEmbedding, kbChunks);
                if (labels.length > 0) {
                    const retrievedChunks = labels.map((labelIndex: number) => activeChunks[labelIndex]).filter(Boolean);
                    contextString = retrievedChunks.map((c: { id: string, chunk: string }) => `// Source: ${c.id}\n${c.chunk}`).join('\n\n---\n\n');
                    logInfo(logPrefix, `FAISS search retrieved ${retrievedChunks.length} chunks from the ${kbName} KB.`);
                    // C1401: Log the retrieved chunks for debugging
                    logInfo(logPrefix, `[CONTEXT DUMP FOR "${prompt}"]:\n${contextString}`);
                } else {
                    logWarn(logPrefix, `FAISS search returned 0 results from the ${kbName} KB.`);
                }
            } else {
                logError(logPrefix, `Failed to generate embedding for the query. Cannot perform search.`);
            }
        } else {
            logWarn(logPrefix, `Skipping FAISS search. Index not loaded, chunks empty, or kbChunks is 0 for ${kbName} KB.`);
        }
        
        const inGameSystemPrompt = `<In-Game System Prompt>You are @Ascentia...`; // Abridged for brevity
        const outOfGamePrompt = OUT_OF_GAME_SYSTEM_PROMPTS[ASCENTIA_MODEL as keyof typeof OUT_OF_GAME_SYSTEM_PROMPTS];
        
        const messages = [
            { role: 'system', content: `${outOfGamePrompt}${inGameSystemPrompt}\n\nCONTEXT FROM ${kbName} DOCUMENTATION:\n${contextString}` },
            { role: 'user', content: `From ${senderState.displayName}: ${prompt}` }
        ];
        
        const requestBody = { model: ASCENTIA_MODEL, messages, temperature: 0.7, max_tokens: 2048, stream: true };
        
        emitter.emit(isGlobal ? 'ascentia_global_generation_complete' : 'ascentia_generation_complete', { temporaryId });

        const llmResponse = await fetch(CHAT_COMPLETIONS_API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody) });
        if (!llmResponse.ok || !llmResponse.body) { const errorBody = await llmResponse.text(); throw new Error(`LLM service returned an error: ${llmResponse.status} ${errorBody}`); }

        const reader = llmResponse.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let isFirstChunk = true;

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const jsonStr = line.substring(6);
                    if (jsonStr === '[DONE]') break;
                    try {
                        const chunk = JSON.parse(jsonStr);
                        if (chunk.choices[0]?.delta?.content) {
                            let textChunk = chunk.choices[0].delta.content;
                            if (showThinking === false) {
                                textChunk = textChunk.replace(/<Thinking>[\s\S]*?<\/Thinking>/gi, '');
                            }
                            if (isFirstChunk) {
                                textChunk = textChunk.trimStart();
                                isFirstChunk = false;
                            }
                            if (textChunk) {
                                emitter.emit(chunkEvent, { temporaryId, text: textChunk });
                            }
                        }
                    } catch (e) { logWarn(logPrefix, 'Failed to parse stream chunk JSON:', jsonStr, e); }
                }
            }
        }
    } catch (error: any) {
        logError(logPrefix, 'Error during streaming chat:', error);
        emitter.emit(chunkEvent, { temporaryId, text: `\n[System Error: Could not generate response.]` });
    } finally {
        emitter.emit(endEvent, { temporaryId });
    }
}

export async function handleReportAscentiaStream(io: SocketIOServer, socket: Socket, players: Record<string, PlayerState>, payload: any) {
    const logPrefix = '[Handler:ReportAscentiaStream]';
    const senderState = players[socket.id];
    if (!senderState) {
        logWarn(logPrefix, `Received request from unidentified socket ${socket.id}. Ignoring.`);
        return;
    }
    const { prompt, pageContext, temporaryId } = payload || {};
    logInfo(logPrefix, `Received stream request from ${senderState.displayName}: "${prompt}"`);

    const emitter = socket; // Always private for report chat
    const chunkEvent = 'report_ascentia_stream_chunk';
    const endEvent = 'report_ascentia_stream_end';

    try {
        let contextString = "No relevant context found in the report knowledge base.";
        if (reportFaissIndex && reportAscentiaChunks.length > 0) {
            const queryEmbedding = await getEmbeddingForQuery(prompt);
            if (queryEmbedding) {
                const { labels } = reportFaissIndex.search(queryEmbedding, 10); // Fetch more chunks for report context
                if (labels.length > 0) {
                    const retrievedChunks = labels.map((labelIndex: number) => reportAscentiaChunks[labelIndex]?.chunk).filter(Boolean);
                    contextString = retrievedChunks.join('\n\n---\n\n');
                    logInfo(logPrefix, `FAISS search retrieved ${retrievedChunks.length} chunks from the report KB.`);
                }
            }
        }
        
        const fullContext = `--- START OF CURRENT PAGE CONTEXT ---\n${pageContext}\n--- END OF CURRENT PAGE CONTEXT ---\n\n--- START OF ADDITIONAL RELEVANT CONTEXT FROM REPORT ---\n${contextString}\n--- END OF ADDITIONAL RELEVANT CONTEXT FROM REPORT ---`;
        
        const inGameSystemPrompt = `<In-Game System Prompt>You are @Ascentia, an AI assistant. You are helping a user who is reading a detailed report. Answer their question based ONLY on the provided context from the report. Be concise and helpful. The user is currently on a page with the following content: "${pageContext}".</In-Game System Prompt>`;
        const outOfGamePrompt = OUT_OF_GAME_SYSTEM_PROMPTS[ASCENTIA_MODEL as keyof typeof OUT_OF_GAME_SYSTEM_PROMPTS];
        
        const messages = [
            { role: 'system', content: `${outOfGamePrompt}${inGameSystemPrompt}\n\nCONTEXT FROM REPORT:\n${fullContext}` },
            { role: 'user', content: prompt }
        ];

        const requestBody = { model: ASCENTIA_MODEL, messages, temperature: 0.7, max_tokens: 2048, stream: true };
        
        const llmResponse = await fetch(CHAT_COMPLETIONS_API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody) });
        if (!llmResponse.ok || !llmResponse.body) { const errorBody = await llmResponse.text(); throw new Error(`LLM service returned an error: ${llmResponse.status} ${errorBody}`); }
        
        const reader = llmResponse.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let isFirstChunk = true;

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const jsonStr = line.substring(6);
                    if (jsonStr === '[DONE]') break;
                    try {
                        const chunk = JSON.parse(jsonStr);
                        if (chunk.choices[0]?.delta?.content) {
                            let textChunk = chunk.choices[0].delta.content;
                            if (isFirstChunk) {
                                textChunk = textChunk.trimStart();
                                isFirstChunk = false;
                            }
                            if (textChunk) {
                                emitter.emit(chunkEvent, { temporaryId, text: textChunk });
                            }
                        }
                    } catch (e) { logWarn(logPrefix, 'Failed to parse stream chunk JSON:', jsonStr, e); }
                }
            }
        }
    } catch (error: any) {
        logError(logPrefix, 'Error during report streaming chat:', error);
        emitter.emit(chunkEvent, { temporaryId, text: `\n[System Error: Could not generate response.]` });
    } finally {
        emitter.emit(endEvent, { temporaryId });
        logInfo(logPrefix, `Report stream ended for temporaryId: ${temporaryId}`);
    }
}
/* End of TypeScript code */