// scripts/image_harness.mjs
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

/**
 * CONFIG
 * - VARIATIONS_PER_CASE: how many prompt strategies to try per test case (1-6)
 * - ASPECT_RATIO: "16:9" | "4:3" | "1:1" | etc.
 * - IMAGE_SIZE: "1K" | "2K"  (Imagen supports size presets)
 */
const VARIATIONS_PER_CASE = 4; // try 4 distinct prompt styles per case
const ASPECT_RATIO = '16:9';
const IMAGE_SIZE = '2K';

// Accept common env names
const API_KEY = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY ?? process.env.API_KEY;
const MODEL_NAME = 'imagen-4.0-generate-001';

// Where images + prompts will be saved
const OUTPUT_DIR = path.resolve(process.cwd(), 'public/assets/images/v2v/test_harness');

// --- TEST CASES ---------------------------------------------------------------
// Keep your existing cases, but we'll layer strategy variants on top.
const TEST_PROMPTS = [
  {
    key: 'career-transitioner-loop',
    persona: 'career_transitioner',
    // Short seed description; strategies will expand this into long paragraphs
    seed: "A seasoned professional orchestrates a circular workflow loop: 'Curation', 'Parallel Prompting', 'Validation', 'Integration'. Calm control, modern office, luminous UI."
  },
  {
    key: 'underequipped-grad-hired',
    persona: 'underequipped_graduate',
    seed: "A young graduate in a job interview; the hiring manager highlights a glowing resume line: 'Proficient in Data Curation & Context Engineering'. Relief + pride."
  },
];

// --- STRATEGY ENGINE ----------------------------------------------------------
// Each strategy returns a *single paragraph* (no formatting), using quotes only for literal on-image text.
// We also support bespoke overrides per (case.key), which completely replace the strategy output.

const STRATEGIES = [
  // 1) Narrative Snapshot: a grounded, cinematic slice-of-time; realistic lens + composition
  ({ seed, persona }) =>
    `Cinematic documentary photograph frozen at the decisive moment: ${seed}. Shot on a full-frame 35mm lens at f/1.8 for shallow depth-of-field, natural human skin tones, realistic textures, and believable lighting. Gentle rim light shapes the subject, while the background falls into soft bokeh with crisp UI elements hovering as emissive glass. The palette favors charcoal, slate, and teal accents, avoiding neon oversaturation. Composition follows rule of thirds with leading lines toward the subject’s hands and eyes. No clutter; surfaces are clean and premium. If typography appears, use a restrained modern sans serif in white or soft teal, only where explicitly quoted in the scene such as "Curation", "Parallel Prompting", "Validation", "Integration" or "Proficient in Data Curation & Context Engineering". The overall feeling is controlled confidence and expert craftsmanship, not sci-fi camp.`,

  // 2) Product Still / Key Art: looks like a hero image from a tech campaign
  ({ seed }) =>
    `Hero key-art render that feels like a flagship tech campaign: ${seed}. The subject is lit with a large soft key, subtle kicker, and a cool ambient fill to reveal premium materials; micro-contrast and specular highlights feel photographic, not plastic. The background is a deep gradient with faint volumetric light, forming a stage. UI motifs are thin-line, grid-aligned overlays that appear etched into glass, with subtle parallax. The camera is a slightly elevated three-quarter angle, 50mm equivalent, with minimal distortion. Color palette: deep navy, graphite, and cyan accents. The scene reads clearly at a glance; one hero, one message. If any text appears, restrict it to exactly the quoted phrases present in the description.`,

  // 3) Infographic Panel: single-frame infographic, clean type, hierarchy, and iconography
  ({ seed }) =>
    `Single-frame infographic poster that communicates the concept with visual hierarchy and immaculate typography: ${seed}. Use a wide canvas with generous negative space, a clean grid, and three to five modular areas. Render precise icons and line-based diagrams with consistent stroke weight. Use a modern grotesk typeface for headings and light-weight text for labels. Colors are restrained: charcoal background, ice blue for active elements, soft white for text. Subtle glow only to increase legibility, never to look gimmicky. Include only literal quoted strings for labels if any, e.g., "Curation", "Parallel Prompting", "Validation", "Integration". The overall tone is premium, minimal, and instructional without feeling corporate clip-art.`,

  // 4) Magazine Cover: editorial portrait with tasteful type, believable set, subtle drama
  ({ seed }) =>
    `Editorial magazine cover photograph with subtle drama: ${seed}. The subject stands three-quarter to camera, confident posture, hands visible. Use a shallow depth of field and a moody practical backlight from office fixtures, plus a cool key from the front. The set has believable modern furniture and a hint of reflective glass. Use tasteful masthead-like typography only if quoted. The color grade is cinematic teal-and-warm skin, with filmic halation and gentle grain. The image communicates ambition and clarity rather than sci-fi spectacle.`,

  // 5) Premium Concept Art: painterly realism, controlled atmosphere, elegant UI
  ({ seed }) =>
    `Highly polished concept art with painterly realism and controlled atmosphere: ${seed}. The lighting is volumetric but subtle, with light shafts that carve space and draw attention to the subject’s gesture. Interfaces appear as elegant glass-panes with thin cyan edges, softly refracting the environment. The composition balances negative space against an intricate central motif. Saturation remains restrained; micro-details and material richness do the heavy lifting. Include any literal text only as quoted labels if present.`,

  // 6) Documentary Office Moment: candid, natural light, emotional authenticity
  ({ seed }) =>
    `Candid office photograph at golden-hour with authentic emotion: ${seed}. Natural window light wraps the subject; practical desk lamps add warmth. The framing is slightly off-center and believable, with real-world objects arranged neatly: notebook, laptop, pen. A hint of motion blur in the background conveys life without distraction. Keep colors human and restrained. Only include on-image text if it is explicitly quoted in the description, rendered subtly on a screen or paper. The mood is relief, competence, and quiet pride.`
];

// BESPOKE overrides for your first two cases (stronger direction than generic strategies)
const BESPOKE = {
  'career-transitioner-loop': [
    // A: Orchestration loop as luminous ring interface, not kitschy neon
    ({ persona }) =>
      `A seasoned ${persona.replace('_', ' ')} stands at a sleek standing desk in a modern conference room. Floating at chest height is a single luminous ring interface—thin, elegant, not noisy—divided into four equal segments labeled "Curation", "Parallel Prompting", "Validation", "Integration". Each segment emits a soft cyan glow and a faint particle drift toward the next, implying motion around the ring. The person conducts the flow with one hand mid-gesture; their expression is calm, analytical, in control. The camera is a 50mm lens at f/2.0, shoulder-level angle. Lighting is cinematic: cool key from camera left, warm practicals in the background create depth, subtle rim on hair and shoulders. The palette is graphite, slate, and a single accent of cyan; no neon, no clutter. The glass UI reflects a hint of the room. Everything looks premium and believable.`,

    // B: Whiteboard wall + projected minimal UI, more grounded realism
    () =>
      `In a glass-walled meeting room, a professional stands before a matte whiteboard wall where a minimal circular diagram is projected, divided into four steps: "Curation", "Parallel Prompting", "Validation", "Integration". The projection is tack-sharp with thin vector lines and small animated arrows between phases. The subject’s hand casts a soft shadow on the diagram as they point to the next step. Natural daylight from the left, soft fill from the right. 35mm lens, modest depth of field, realistic textures and reflections. Color grade is neutral with a cool bias; typography is modern and unobtrusive. The scene feels like a real photo taken during a high-stakes planning session.`,

    // C: Desktop tabletop macro with ring UI reflected on screen
    () =>
      `A close table-top shot captures a premium laptop on a walnut desk; on the screen, a refined circular workflow appears with the four labels "Curation", "Parallel Prompting", "Validation", "Integration". A hand enters frame from the right, mid-gesture, rotating the loop with a trackpad. Soft morning light streaks across the desk, revealing subtle dust motes and the brushed metal texture of the device. The composition is balanced and minimal, with a shallow depth of field, honest materials, and restrained cyan accents. No gimmicks—just clarity and craft.`
  ],
  'underequipped-grad-hired': [
    // A: Interview room, highlight line on resume glows subtly
    () =>
      `Inside a real interview room with a round table and frosted glass, a young graduate sits upright while a hiring manager leans forward, pen poised above a printed resume. A single line on the page glows gently, as if backlit: "Proficient in Data Curation & Context Engineering". The manager’s eyebrows lift in visible approval; the graduate shows a small, proud smile. The light is soft and natural from a window, augmented by a warm desk lamp. 85mm portrait lens at f/2.0 for creamy background blur. Colors are warm neutrals with a hint of cool ambient from the hallway. The mood is human, grounded, and quietly triumphant.`,

    // B: Glass wall reflection, subtle textual highlight on tablet
    () =>
      `A graduate and a hiring manager review a digital resume on a tablet placed between them. The camera frames their hands and expressions while the glass wall behind them reflects city lights. One line on the tablet interface is highlighted with a tasteful cyan underline: "Proficient in Data Curation & Context Engineering". The type is crisp and modern, the UI minimal. 50mm lens, cinematic grade, believable reflections, and tasteful bokeh. The scene communicates recognition and fit, not hype.`,

    // C: Hallway post-interview reaction, no text on image but emotion clear
    () =>
      `A candid post-interview moment in a sunlit hallway: the graduate steps out, exhales, and grins subtly, clutching a neatly organized portfolio. Through the open door we glimpse the manager returning to their notes. The storytelling implies that the highlighted resume line was a turning point. Natural light, subtle lens flare, light grain for authenticity, and a soft teal-and-warm grade.`
  ]
};

// --- CORE: Generate ----------------------------------------------------------------
async function generateOne({ ai, prompt, caseKey, variantIndex }) {
  const response = await ai.models.generateImages({
    model: MODEL_NAME,
    prompt,
    config: {
      numberOfImages: 1,
      aspectRatio: ASPECT_RATIO,
      imageSize: IMAGE_SIZE
    }
  });

  if (!response?.generatedImages?.length) {
    throw new Error('No images returned by the API.');
  }
  const bytes = response.generatedImages[0]?.image?.imageBytes;
  if (!bytes) throw new Error('Image bytes missing in response.');

  // Save image + prompt (sidecar .txt)
  const base = `${caseKey}--v${String(variantIndex + 1).padStart(2, '0')}`;
  const imgPath = path.join(OUTPUT_DIR, `${base}.png`);
  const txtPath = path.join(OUTPUT_DIR, `${base}.prompt.txt`);

  await fs.writeFile(imgPath, Buffer.from(bytes, 'base64'));
  await fs.writeFile(txtPath, prompt, 'utf-8');

  return { imgPath, txtPath };
}

// Build prompts for a case: bespoke overrides (if any) then generic strategies
function buildPromptsForCase(testCase) {
  const { key, seed, persona } = testCase;

  // Use bespoke when available, otherwise fall back to strategies
  const bespoke = BESPOKE[key] || [];
  const bespokePrompts = bespoke.map((fn) => fn({ seed, persona }));

  const genericPrompts = STRATEGIES.map((fn) => fn({ seed, persona }));

  // Merge and trim to VARIATIONS_PER_CASE
  const all = [...bespokePrompts, ...genericPrompts].slice(0, Math.max(1, Math.min(6, VARIATIONS_PER_CASE)));
  return all;
}

// --- MAIN --------------------------------------------------------------------
async function main() {
  if (!API_KEY) {
    console.error('Error: API key not found. Set GEMINI_API_KEY (or GOOGLE_API_KEY / API_KEY) in your .env');
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  console.log('--- Imagen Prompt Lab: starting ---');
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  for (const testCase of TEST_PROMPTS) {
    console.log(`\n▶ Case: ${testCase.key}`);
    const prompts = buildPromptsForCase(testCase);

    for (let i = 0; i < prompts.length; i++) {
      const prompt = prompts[i];
      try {
        console.log(`   • Variant ${i + 1}/${prompts.length}…`);
        const { imgPath, txtPath } = await generateOne({
          ai,
          prompt,
          caseKey: testCase.key,
          variantIndex: i
        });
        console.log(`     ✅ Saved image: ${imgPath}`);
        console.log(`     📝 Saved prompt: ${txtPath}`);
      } catch (err) {
        console.error(`     ❌ Variant ${i + 1} failed:`, err?.message ?? err);
      }
      // polite pacing between calls
      await new Promise((r) => setTimeout(r, 1200));
    }
  }

  console.log('\n--- Prompt Lab complete ---');
  console.log(`Outputs → ${OUTPUT_DIR}`);
}

main();
