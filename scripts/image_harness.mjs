// scripts/image_harness.mjs
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

// ====== CONFIG ======
const API_KEY = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY ?? process.env.API_KEY;
const MODEL_NAME = 'imagen-4.0-generate-001';
const OUTPUT_DIR = path.resolve(process.cwd(), 'public/assets/images/v2v/test_harness');

// Tweak these to match the AI Studio renders
const ASPECT_RATIO = '16:9';
const IMAGE_SIZE = '2K';
const SLEEP_MS = 1200;

// ====== PROMPT SETS (bespoke long paragraphs) ======
const PROMPT_SETS = {
  'career-transitioner-loop': [
    // P1 — Editorial night skyline, hero ring
    `A hyper-realistic editorial photograph at dusk inside a high-floor office with a panoramic city skyline behind glass; a confident professional stands three-quarter to camera, hand mid-gesture inside a single elegant circular interface that floats at chest height, divided into four clean quadrants labeled "CURATION", "PARALLEL PROMPTING", "VALIDATION", "INTEGRATION"; the circle is thin-lined, cyan-teal accents with precise tick marks and a faint orbit of particles, not neon; lighting is cinematic with a cool key from the windows and a warm rim from practical lamps; 50 mm lens at f/2.8 for shallow depth, natural skin tone, premium fabrics; composition places the ring slightly left of center and the subject right of center; add a tasteful title at the top reading "THE VIRTUOSO’S LOOP" and a lower-left module tag "MODULE 1: THE VIRTUOSO’S LOOP — LESSON 1.1: THE PROFESSIONAL’S PLAYBOOK"; no extra icons, no thick arrows, no sci-fi consoles, keep the scene minimal and believable.`,
    // P2 — Daylight boardroom, senior leader
    `A hyper-realistic daylight boardroom with matte concrete and a wide view of the city; a senior leader gestures to a refined circular workflow overlay hovering in front of them, divided into four equal segments labeled "CURATION", "PARALLEL PROMPTING", "VALIDATION", "INTEGRATION"; the ring uses thin concentric strokes and subtle radial ticks, cyan accents on a graphite palette; soft window light wraps the subject, subtle rim separates them from the background; 35 mm lens, shoulder-level angle; add the title "THE VIRTUOSO’S LOOP" centered above and a small lower-left tag "MODULE 1: THE VIRTUOSO’S LOOP — LESSON 1.1: THE PROFESSIONAL’S PLAYBOOK"; realistic glass reflections, restrained glow, absolutely no clutter or extra UI panels.`,
    // P3 — Minimal standing desk, linear bead trail
    `A hyper-realistic minimal mid-shot of a professional at a white standing desk in a quiet room; a small precise circular control with three cyan nodes sits in front of their fingertip; a subtle dotted bead-trail runs horizontally linking the four labels "CURATION" · "PARALLEL PROMPTING" · "VALIDATION" · "INTEGRATION", with the finger hovering over the central control; lighting is moody and photographic, shallow depth isolates the gesture; no extra graphics besides these words and the tiny circle; premium realism, no neon, no 3D sci-fi chrome—just elegant restraint.`,
    // P4 — Projected loop on glass wall
    `In a hyper-realistic glass-walled meeting room, a professional points to a projected circular diagram on the glass—thin strokes, consistent vector weights, labeled exactly "CURATION", "PARALLEL PROMPTING", "VALIDATION", "INTEGRATION"; small arrows imply clockwise flow without thick swooshes; desaturated neutral palette with a hint of cyan; 50 mm lens, clean reflections, natural daylight; no extra icons or text, no garish glow—this reads like a real photo of a real diagram.`,
    // P5 — Tabletop macro with laptop screen
    `A hyper-realistic premium laptop on a walnut desk fills the frame; on the screen, a crisp circular workflow graphic divided into four with labels "CURATION", "PARALLEL PROMPTING", "VALIDATION", "INTEGRATION"; thin cyan strokes on a dark graphite UI; a hand enters frame to rotate the loop on the trackpad; morning window light reveals wood grain and brushed aluminum; shallow depth, realistic materials, no additional charts or clip-art.`,
    // P6 — Studio portrait with ring front-and-center
    `A hyper-realistic studio-lit portrait of a professional against a deep charcoal backdrop; the circular interface floats directly between camera and subject so the face is partly visible through the ring; thin cyan lines, tiny radial dots, quadrant labels "CURATION", "PARALLEL PROMPTING", "VALIDATION", "INTEGRATION"; large soft key, faint kicker, subtle film grain; composition is perfectly balanced and minimal; absolutely no extra UI blocks, no icons, no stock-photo graphs.`
  ],
  'underequipped-grad-hired': [
    // U1 — Interview table, glowing resume line
    `Inside a hyper-realistic interview room with a round table and frosted glass, a young graduate sits upright while a hiring manager leans forward, pen above a printed resume; a single line on the page glows subtly, exactly "Proficient in Data Curation & Context Engineering"; the manager’s expression shows impressed approval, the graduate allows a small relieved smile; natural window light with a warm desk lamp, 85 mm portrait at f/2, shallow depth, warm neutrals; no extra UI graphics, no neon—just that one glowing line.`,
    // U2 — Tablet review, tasteful underline
    `A hyper-realistic mid-shot over a table: the hiring manager and graduate look at a tablet; one line in the digital resume is highlighted with a thin cyan underline reading "Proficient in Data Curation & Context Engineering"; realistic reflections in the glass, restrained typography, clean UI; cinematic color grade, 50 mm lens, believable office; no added charts or icons.`,
    // U3 — Post-interview corridor, implied success
    `A hyper-realistic candid photograph in a sunlit corridor after the interview: the graduate steps out, exhales, and smiles; their folder peeks a printed resume where a faint highlight still marks the line "Proficient in Data Curation & Context Engineering"; background bokeh shows the meeting room; natural light, soft halation, human warmth; no overlays, no UI—just storytelling.`,
    // U4 — Whiteboard recap
    `A hyper-realistic manager stands by a whiteboard listing short bullet points; one neat line is boxed and reads "Proficient in Data Curation & Context Engineering"; the graduate stands nearby in frame, hopeful; daylight key, subtle rim, neutral palette, 35 mm lens; no extra diagrams or icons; this feels like a documentary still.`
  ]
};

// ====== CASES TO RUN ======
const TEST_CASES = [
  { key: 'career-transitioner-loop' },
  { key: 'underequipped-grad-hired' }
];

// ====== CORE ======
async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function generateOne(ai, caseKey, variantIndex, prompt) {
  const response = await ai.models.generateImages({
    model: MODEL_NAME,
    prompt,
    config: { numberOfImages: 1, aspectRatio: ASPECT_RATIO, imageSize: IMAGE_SIZE }
  });

  if (!response?.generatedImages?.length) throw new Error('No images returned by the API.');
  const bytes = response.generatedImages[0]?.image?.imageBytes;
  if (!bytes) throw new Error('Image bytes missing in response.');

  const base = `${caseKey}--v${String(variantIndex + 1).padStart(2, '0')}`;
  const imgPath = path.join(OUTPUT_DIR, `${base}.png`);
  const txtPath = path.join(OUTPUT_DIR, `${base}.prompt.txt`);

  await fs.writeFile(imgPath, Buffer.from(bytes, 'base64'));
  await fs.writeFile(txtPath, prompt, 'utf-8');

  return { imgPath, txtPath };
}

// ====== MAIN ======
async function main() {
  if (!API_KEY) {
    console.error('Error: API key not found. Set GEMINI_API_KEY (or GOOGLE_API_KEY / API_KEY) in your .env');
    process.exit(1);
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const ai = new GoogleGenAI({ apiKey: API_KEY });

  console.log('--- Imagen Prompt Lab (bespoke paragraphs) ---');

  for (const tc of TEST_CASES) {
    const prompts = PROMPT_SETS[tc.key];
    if (!prompts?.length) {
      console.warn(`⚠️ No prompts for case '${tc.key}', skipping.`);
      continue;
    }

    console.log(`\n▶ Case: ${tc.key} (${prompts.length} variants)`);
    for (let i = 0; i < prompts.length; i++) {
      const p = prompts[i];
      try {
        console.log(`   • Variant ${i + 1}/${prompts.length}…`);
        const { imgPath, txtPath } = await generateOne(ai, tc.key, i, p);
        console.log(`     ✅ Saved image: ${imgPath}`);
        console.log(`     📝 Saved prompt: ${txtPath}`);
      } catch (err) {
        console.error(`     ❌ Variant ${i + 1} failed: ${err?.message ?? err}`);
      }
      await sleep(SLEEP_MS);
    }
  }

  console.log('\n--- Done. Check outputs in:', OUTPUT_DIR);
}

main();
