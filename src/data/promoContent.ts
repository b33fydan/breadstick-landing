import featureTileData from "./features.json";

export const joinHref = "https://www.skool.com/breadstick-ai/about";
export const joinCtaLabel = "Join Today!";

export const stats = [
  { number: "65+", label: "canvas pipeline nodes" },
  { number: "40+", label: "Remotion video compositions" },
  { number: "97", label: "b-roll motion clips" },
  { number: "5", label: "built-in AI characters" },
  { number: "4", label: "one-click recipes" },
  { number: "5", label: "carousel templates" },
  { number: "60", label: "pre-loaded topics" },
  { number: "12+", label: "AI models behind one surface" },
  { number: "80+", label: "API endpoints" },
];

export interface FeatureTile {
  id: string;
  title: string;
  kills: string;
  headline: string;
  subcopy: string;
  image: string;
  imageAlt: string;
  imageSubject: string;
}

export const featureTiles = featureTileData satisfies FeatureTile[];

export const secondaryTiles = [
  {
    title: "Voice to Deploy",
    headline: "Talk to your glasses. Watch it ship.",
    body: "Say what you want changed; Breadstick edits, gates the build, and pushes a live preview to your phone in under a minute.",
  },
  {
    title: "The Ship Gate",
    headline: "A safety gate that cannot be sweet-talked.",
    body: "Deterministic SHIP / QUARANTINE / REJECT before anything posts. Pure math, no LLM in the verdict.",
  },
  {
    title: "Recipes",
    headline: "One click wires a whole proven format.",
    body: "Pick a proven lane and Breadstick wires the repeatable workflow behind it.",
  },
  {
    title: "B-Roll Catalog",
    headline: "97 motion clips, picked for your script.",
    body: "The right b-roll comps for the script, selected and rendered.",
  },
  {
    title: "Maestro",
    headline: "A thinking partner, not a yes-man.",
    body: "A Socratic voice partner that sharpens the angle before you record.",
  },
  {
    title: "Music and Audio-Viz",
    headline: "Original tracks plus reactive visuals.",
    body: "Suno music and audio-reactive Remotion visualizers.",
  },
  {
    title: "Chroma Composite",
    headline: "Your character, on your slides.",
    body: "Drop live video into branded slide art zones without rebuilding the whole composition.",
  },
  {
    title: "The MCP Server",
    headline: "Breadstick as a tool other agents call.",
    body: "Characters, script-gen, the ledger, and endpoints exposed over MCP.",
  },
  {
    title: "Cartesian Composer",
    headline: "Touch-placed overlays, frame-perfect.",
    body: "Place overlays exactly where the shot needs them and keep the render deterministic.",
  },
];

export const modelStack =
  "Claude, OpenAI, Kling 3.0 / 2.6, Sora 2 cameos, Nano Banana Pro, GPT Image-2, Seedance 2.0, Veo, Flux, Higgsfield, Suno, ElevenLabs, Postiz, and Blotato.";
