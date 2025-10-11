// src/server/llmService.ts
// Updated on: C1395 (Correct TTS request body to match OpenAI-compatible endpoint for kokoro-fastapi.)
// Updated on: C1384 (Fix stream type mismatch by converting Web Stream to Node.js Readable stream.)
// Updated on: C1383 (Add generateSpeech function for TTS.)
// Updated on: C1323 (Fix implicit 'any' types in map/filter callbacks.)
// Updated on: C1322 (Fix implicit 'any' types in map/filter callbacks.)
// NEW FILE - C1321

import { Readable } from 'stream';
import { logInfo, logWarn, logError } from '../logger';
import { OUT_OF_GAME_SYSTEM_PROMPTS } from '../game/personas/personaConstants';
import type { playerLlmPersonas } from '../game/personas/playerLlmPersonas'; // Import type only

const COMPLETIONS_API_URL = (process.env.REMOTE_LLM_URL || process.env.LOCAL_LLM_URL || 'http://127.0.0.1:1234') + '/v1/chat/completions';
const TTS_API_URL = process.env.TTS_SERVER_URL || 'http://localhost:8880/v1/audio/speech';

type Persona = typeof playerLlmPersonas['tier0'];

/**
 * A centralized service for making calls to the local LLM.
 */
export const LlmService = {
    /**
     * Generates poetic lines for the Poetry Battle.
     * @param theme - The theme for the round.
     * @param numChoices - How many lines to generate.
     * @param damageValues - An array of hidden damage values.
     * @param persona - The persona object for the chatbot.
     * @returns An array of choices with text and damage.
     */
    async generatePoetryChoices(
        theme: string,
        numChoices: number,
        damageValues: number[],
        persona: Persona,
    ): Promise<{ text: string; damage: number }[]> {
        const logPrefix = '[LlmService:generatePoetryChoices]';
        logInfo(logPrefix, `Generating ${numChoices} choices for theme: "${theme}" with persona tier ${persona.tier}`);

        const impactMap: Record<number, string> = {};
        const sortedDamage = [...damageValues].sort((a, b) => a - b);
        if (sortedDamage.length === 1) {
            impactMap[sortedDamage[0]] = 'Normal';
        } else if (sortedDamage.length > 1) {
            impactMap[sortedDamage[0]] = 'Weak';
            impactMap[sortedDamage[sortedDamage.length - 1]] = 'Strong';
            for (let i = 1; i < sortedDamage.length - 1; i++) {
                impactMap[sortedDamage[i]] = 'Medium';
            }
        }

        const choicePrompts = damageValues
            .map((damage, index) => `${index + 1}. **${impactMap[damage]} (Hidden Damage: ${damage}):** A line of poetry.`)
            .join('\n');

        const inGameSystemPrompt = `<In-Game System Prompt>You are an AI assistant generating content for a poetry battle game. The theme for this round is "${theme}". Generate ${numChoices} distinct lines of poetry for this theme with the following varying levels of impact:\n\n${choicePrompts}\n\nReturn ONLY the ${numChoices} lines of poetry, each on a new line. Do not include the impact level or damage value in your response.</In-Game System Prompt>`;
        const outOfGamePrompt = OUT_OF_GAME_SYSTEM_PROMPTS[persona.model as keyof typeof OUT_OF_GAME_SYSTEM_PROMPTS] || OUT_OF_GAME_SYSTEM_PROMPTS['qwen/qwen3-30b-a3b'];
        
        const messages = [
            { role: 'system', content: `${outOfGamePrompt}${inGameSystemPrompt}` },
            { role: 'user', content: `Generate the ${numChoices} poetic lines now.` }
        ];

        const requestBody: any = {
            model: persona.model,
            messages: messages,
            stream: false,
            ...persona.params,
        };

        try {
            const llmResponse = await fetch(COMPLETIONS_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
            });

            if (!llmResponse.ok) {
                const errorBody = await llmResponse.text();
                throw new Error(`LLM service returned an error: ${llmResponse.status} ${errorBody}`);
            }

            const llmData = await llmResponse.json();
            let content = llmData.choices[0]?.message?.content?.trim() ?? "";
            content = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

            const lines = content.split('\n').map((line: string) => line.trim()).filter(Boolean);

            if (lines.length !== numChoices) {
                logWarn(logPrefix, `LLM did not return the expected number of choices. Expected ${numChoices}, got ${lines.length}.`);
                // Fallback: Pad or truncate to match expected number of choices
                while (lines.length < numChoices) lines.push("The void echoes... (LLM Error)");
                while (lines.length > numChoices) lines.pop();
            }

            return lines.map((line: string, index: number) => ({
                text: line,
                damage: damageValues[index],
            }));

        } catch (error) {
            logError(logPrefix, 'Error generating poetry choices:', error);
            // Return placeholder choices on error
            return damageValues.map(damage => ({
                text: "An error sparked, my circuits weep...",
                damage: damage,
            }));
        }
    },
};

/**
 * Generates speech from text using the local TTS server.
 * @param text The text to convert to speech.
 * @returns A Node.js Readable stream of the audio data, or null on error.
 */
export async function generateSpeech(text: string): Promise<Readable | null> {
    const logPrefix = '[llmService:generateSpeech]';
    logInfo(logPrefix, `Requesting speech generation from ${TTS_API_URL} for text: "${text.substring(0, 50)}..."`);

    try {
        // C1395: Correct the request body to match the OpenAI-compatible endpoint of kokoro-fastapi
        const requestBody = {
            model: 'kokoro',
            voice: 'af_sky', // A standard, high-quality default voice
            input: text,
            response_format: 'wav',
            speed: 1.0,
        };

        logInfo(logPrefix, 'Sending request to TTS server with body:', requestBody);

        const response = await fetch(TTS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'audio/wav',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`TTS server returned an error: ${response.status} ${errorBody}`);
        }
        
        if (!response.body) {
            throw new Error('TTS server returned an empty response body.');
        }
        
        // Convert Web Stream (from fetch response.body) to a Node.js Readable stream
        // The 'as any' cast is used to bridge the type difference between Web API streams and Node.js streams.
        return Readable.fromWeb(response.body as any);

    } catch (error) {
        logError(logPrefix, 'Error contacting TTS server:', error);
        return null;
    }
}

// Keep other functions from the original file if they exist, like handlePlayerProductRequest
export { handlePlayerProductStream, handlePlayerProductRequest } from './api/playerProductHandler';