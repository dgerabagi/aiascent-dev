import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ScenariosService } from '../scenarios/scenarios.service';
import { Socket } from 'socket.io';
import { readFileSync } from 'fs';
import { join } from 'path';
import { TeamMembership, User } from '@prisma/client';

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  private readonly llmApiUrl: string;
  private stagingRoomFaq: string;

  constructor(
    private configService: ConfigService,
    private scenariosService: ScenariosService,
  ) {
    this.llmApiUrl = this.configService.get<string>('LLM_API_URL');
    try {
        // Load the FAQ content at initialization
        this.stagingRoomFaq = readFileSync(join(process.cwd(), 'src/Artifacts/A93. VCPG - JANE Staging Room FAQ.md'), 'utf-8');
    } catch (error) {
        this.logger.error('Failed to load A93 JANE Staging Room FAQ', error);
        this.stagingRoomFaq = 'No FAQ content loaded.';
    }
  }

  sendWelcomeMessage(client: Socket) {
    const welcomeMessage = {
        chunk: "JANE online. How can I assist you in this operation?"
    };
    client.emit('jane:stream', welcomeMessage);
    client.emit('jane:stream_end');
  }


  async getStreamingCompletion(
    client: Socket, // Pass the socket to check for cancellation
    query: string,
    instanceId: string,
    userId: string,
    onChunk: (chunk: string) => void,
  ): Promise<void> {
    const instance = await this.scenariosService.getInstanceForUser(instanceId, userId);
    if (!instance || !instance.team || !instance.team.members || instance.team.members.length === 0) {
      throw new Error('Active scenario, team, or members not found for user.');
    }
    
    const userIndex = instance.team.members.findIndex(m => m.userId === userId);
    const traineeUser = `trainee${userIndex + 1}`;

    const prompt = this.constructPrompt(query, instance, traineeUser);

    try {
      const response = await fetch(this.llmApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'unsloth/gpt-oss-20b',
          prompt: prompt,
          stream: true,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`LLM API request failed with status ${response.status}`);
      }
      
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      
      while (true) {
        if (client.data.isCancelled) {
            reader.cancel();
            this.logger.log(`Stream cancelled for client ${client.id}`);
            throw new Error('Stream cancelled');
        }

        const { done, value } = await reader.read();
        if (done) break;
        
        const rawChunk = decoder.decode(value, { stream: true });
        this.logger.debug(`[RAW LLM STREAM CHUNK]: ${rawChunk}`); // Verbose logging
        buffer += rawChunk;
        
        let newlineIndex;
        while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
            const line = buffer.slice(0, newlineIndex).trim();
            buffer = buffer.slice(newlineIndex + 1);

            if (line.startsWith('data: ')) {
                const jsonStr = line.substring(6);
                if (jsonStr.trim() === '[DONE]') {
                    continue;
                }
                try {
                    const parsed = JSON.parse(jsonStr);
                    const content = parsed.choices?.[0]?.text || parsed.choices?.[0]?.delta?.content;
                    if (content) {
                        onChunk(content);
                    }
                } catch (e) {
                    this.logger.warn(`Could not parse AI stream chunk as JSON: ${jsonStr}`);
                }
            }
        }
      }
    } catch (error) {
      this.logger.error('Failed to get streaming completion from LLM', error);
      throw error;
    }
  }

  async getContextualizedIntel(selectedText: string, instanceId: string, userId: string): Promise<{name: string, value: string, group: string}[]> {
    const instance = await this.scenariosService.getInstanceForUser(instanceId, userId);
    if (!instance) {
      throw new Error('Active scenario not found for user.');
    }
  
    const teamMembers = (instance.team?.members as (TeamMembership & { user: User })[]) || [];
    const teamRoster = teamMembers.map((m, i) => ({ name: m.user.name, scenarioUser: `trainee${i+1}` }));
    
    const prompt = `
      System: You are JANE, an expert intelligence analyst AI for the VCPG training platform. Your primary function is to distill raw text into structured, actionable intelligence for a team of cybersecurity trainees.

      **CRITICAL DIRECTIVES:**
      1.  **ANALYZE, DON'T SUMMARIZE:** Your task is not to summarize. Your task is to extract the most salient, actionable intelligence from the user's text, given the current mission context. Discard irrelevant information.
      2.  **STATE AWARENESS IS KEY:** The user is in the '${instance.state}' phase of the mission. The intelligence must be relevant to what they need to do *right now*.
      3.  **CONSOLIDATE & STRUCTURE:** Your highest priority is to consolidate related information into a single, structured chip. A list of items should become a single table.
      4.  **JSON ONLY:** Your entire response **MUST** be only a raw JSON array of objects. Do not include any other text, explanations, or markdown formatting like \`\`\`json.
      5.  **CHIP SCHEMA:** Each object in the array **MUST** have three keys: \`name\` (a short, descriptive title), \`value\` (the actionable data, which for tables MUST be a JSON string), and \`group\` (a category like "Network Intel", "Commands", "Credentials").
      6.  **TABLE SCHEMA:** When creating a table, the JSON string in the \`value\` field **MUST** be an array of objects, and each object **MUST** have two keys: \`name\` (the description) and \`value\` (the copyable, actionable command or data).

      ---
      **MISSION CONTEXT:**
      **Scenario:** ${instance.scenarioDefinition.title}
      **State:** ${instance.state}
      **Briefing:** ${instance.scenarioDefinition.briefing || instance.scenarioDefinition.description}
      **Team Roster:** ${JSON.stringify(teamRoster)}
      ---
      
      **EXAMPLE 1 (User highlights the entire mission brief in STAGING):**
      **USER-SELECTED TEXT:** "OVERVIEW: The 73rd... KEY INTEL: ...connect directly using the hostname (e.g., \`ssh trainee1@c2-server\`). RELEVANT COMMANDS: /opt/comms/rotate_freq.sh..."
      **YOUR JSON RESPONSE FOR EXAMPLE 1:**
[
  {
    "name": "Initial C2 Access Commands",
    "value": "[{\\"name\\":\\"Trainee 1 Access\\",\\"value\\":\\"ssh trainee1@c2-server\\"},{\\"name\\":\\"Trainee 2 Access\\",\\"value\\":\\"ssh trainee2@c2-server\\"},{\\"name\\":\\"Trainee 3 Access\\",\\"value\\":\\"ssh trainee3@c2-server\\"},{\\"name\\":\\"Trainee 4 Access\\",\\"value\\":\\"ssh trainee4@c2-server\\"}]",
    "group": "Initial Access"
  }
]

      **EXAMPLE 2 (User highlights the list of relevant commands):**
      **USER-SELECTED TEXT:**
      "/opt/comms/rotate_freq.sh <freq> - Rotate comms frequency on a jammed UAV.
      /opt/secure/keygen.sh - Generate new C2 key on the GCS host.
      ssh <user>@<hostname> - Connect to a host via SSH."
      **YOUR JSON RESPONSE FOR EXAMPLE 2:**
[
  {
    "name": "Relevant Scenario Commands",
    "value": "[{\\"name\\":\\"Rotate UAV Comms Frequency\\",\\"value\\":\\"/opt/comms/rotate_freq.sh <freq>\\"},{\\"name\\":\\"Generate New C2 Key\\",\\"value\\":\\"/opt/secure/keygen.sh\\"},{\\"name\\":\\"Connect to Host (SSH)\\",\\"value\\":\\"ssh <user>@<hostname>\\"}]",
    "group": "Commands"
  }
]
      ---

      **CURRENT TASK:**
      **USER-SELECTED TEXT:**
      "${selectedText}"

      **YOUR JSON RESPONSE:**
    `;
    
    try {
        const response = await fetch(this.llmApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'unsloth/gpt-oss-20b',
            prompt: prompt,
            stream: false,
            temperature: 0.0,
          }),
        });
      
        if (!response.ok) {
          throw new Error(`LLM API request failed with status ${response.status}`);
        }
      
        const jsonResponse = await response.json();
        const content = jsonResponse.choices?.[0]?.text;
        
        try {
          const separator = '<|start|>assistant<|channel|>final<|message|>';
          const separatorIndex = content.lastIndexOf(separator);
          
          let jsonStringToParse = content;
          if (separatorIndex !== -1) {
            jsonStringToParse = content.substring(separatorIndex + separator.length);
          }
          
          const jsonMatch = jsonStringToParse.match(/(\[[\s\S]*\])/);
          if (jsonMatch && jsonMatch[0]) {
            const cleanedJson = jsonMatch[0];
            const parsed = JSON.parse(cleanedJson);
            if (Array.isArray(parsed)) {
                this.logger.log(`Successfully parsed ${parsed.length} intel chips from LLM.`);
                return parsed;
            }
          }
          const parsed = JSON.parse(jsonStringToParse.trim());
          if (Array.isArray(parsed)) {
              this.logger.log(`Successfully parsed ${parsed.length} intel chips from LLM (fallback).`);
              return parsed;
          }
        } catch (e) {
          this.logger.warn(`Could not parse LLM response for intel chip as JSON array: ${content}`);
        }
    } catch (error) {
        if (error.message.includes('fetch failed')) {
            this.logger.error(`[AI Service] Connection to LLM API failed at ${this.llmApiUrl}. Please ensure the AI model server (e.g., LM Studio) is running and accessible from the backend.`);
        } else {
            this.logger.error(`[AI Service] Failed to fetch from LLM API. Error: ${error.message}`);
        }
        throw error;
    }

    return [{ name: "New Intel", value: selectedText, group: "General" }];
  }

  private constructPrompt(query: string, instance: any, traineeUser: string): string {
    if (instance.state === 'STAGING') {
        const objectivesText = instance.scenarioDefinition?.objectives?.map(o => `- ${o.title}: ${o.description}`).join('\n') || 'No objectives defined.';
        return `
          System: You are JANE, an AI assistant for the Virtual Cybersecurity Proving Grounds (VCPG), a cybersecurity training platform inspired by Battleschool in Ender's Game. You are in a pre-mission staging room. Your role is to act as a mission briefer. Your responses must be helpful, concise (2-3 sentences max), and directly related to the provided mission details and the user's highlighted text.
          
          Your responses must be formatted in markdown.
          
          Use the following examples to understand the expected tone and format:
          ---
          ${this.stagingRoomFaq}
          ---

          **CURRENT MISSION CONTEXT:**
          **Title:** ${instance.scenarioDefinition.title}
          **Briefing:** ${instance.scenarioDefinition.briefing || instance.scenarioDefinition.description}
          **Key Intel:** ${instance.scenarioDefinition.keyIntel || 'None.'}
          **Objectives:**
          ${objectivesText}

          User Query: ${query}
          
          JANE:
        `;
    }

    const scenarioState = JSON.stringify({
      title: instance.scenarioDefinition.title,
      score: instance.score,
      objectives: instance.scenarioDefinition.objectives.map(o => ({
        title: o.title,
        completed: instance.objectivesProgress.some(p => p.objectiveId === o.id)
      }))
    }, null, 2);

    const firstHint = "The C2 server is the central hub for our drone fleet's network configuration. You should start by finding the `drone_manifest.txt` file there to identify the UAVs' IP addresses. Use `cat` to view its contents.";

    return `
      System: You are JANE, an AI assistant integrated into the VCPG, a cybersecurity training platform. Your purpose is to guide a learner, not to give direct answers. The user you are assisting is a trainee in a simulated scenario. Their designation is ${traineeUser}. They have just highlighted a piece of text and are asking for context. Your response should be short, concise, and directly related to the provided query and scenario state. If the query is about a command, provide a brief explanation and a clear, in-situ example of how ${traineeUser} could use it. If the user seems stuck and asks a general question, provide the following hint: "${firstHint}"
      
      The current scenario state is:
      ${scenarioState}

      User Query (based on highlighted text): ${query}

      Provide a helpful, concise answer based on the scenario state. Do not reveal flags or direct solutions.
      
      JANE:
    `;
  }
}