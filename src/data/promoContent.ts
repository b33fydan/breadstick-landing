export const priorityAccessHref = "#priority-access";

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

export interface PriorityTile {
  id: string;
  title: string;
  kills: string;
  headline: string;
  subcopy: string;
  image: string;
  imageAlt: string;
  imageSubject: string;
}

export const priorityTiles: PriorityTile[] = [
  {
    id: "01",
    title: "The Script Factory",
    kills: "The blank page. The 3-hour idea spiral.",
    headline: "Production-ready scripts. Not blank pages.",
    subcopy:
      "Pick a character, mix the ingredients - pain points, hooks, monetization, script type - and Breadstick writes a script good enough to paste straight into ElevenLabs. Persuasion psychology is baked in.",
    image: "/images/16gami/tile-01-script-factory.png",
    imageAlt: "Papercraft typewriter unspooling a paper script.",
    imageSubject:
      "A folded-paper vintage typewriter with a long paper script-scroll curling out of it, with folded paper pages fanned beside it.",
  },
  {
    id: "02",
    title: "The Canvas",
    kills: "14 browser tabs and a spreadsheet holding your pipeline together.",
    headline: "Your whole pipeline. One canvas.",
    subcopy:
      "65+ drag-and-wire nodes - characters, generators, video, carousels, gates, posting - connected like a circuit board. Trace a script from idea to posted reel without leaving the screen.",
    image: "/images/16gami/tile-02-canvas.png",
    imageAlt: "Papercraft node graph wired with paper ribbons.",
    imageSubject:
      "A papercraft circuit-board node graph with folded paper cards linked by woven paper ribbon-wires and active nodes lit warm gold.",
  },
  {
    id: "03",
    title: "AI Characters That Stay Consistent",
    kills: "The face that morphs every video and the voice that never matches.",
    headline: "Characters with a face, a voice, and a memory.",
    subcopy:
      "5 built-in operators across proven niches - and unlimited custom characters from one form. Consistent faces, consistent ElevenLabs voices, locked continuity across every clip.",
    image: "/images/16gami/tile-03-consistent-characters.png",
    imageAlt: "Three papercraft character masks on stands.",
    imageSubject:
      "A row of three distinct origami character paper portrait-masks on little stands, each clearly different but in the same paper family.",
  },
  {
    id: "04",
    title: "UGC Video Lane",
    kills: "The obviously-AI plastic look that gets zero saves.",
    headline: "Talking-head UGC that reads as real.",
    subcopy:
      "Character to script to lip-synced clips with iPhone-real prompt rules: micro-shake, skin texture, hand safety, mid-thought delivery. The anti-uncanny pipeline, automated.",
    image: "/images/16gami/tile-04-ugc-video.png",
    imageAlt: "Papercraft phone on a tripod filming a paper person.",
    imageSubject:
      "A folded-paper smartphone on a tiny paper tripod filming a small paper person mid-gesture, with a paper recording dot in the corner.",
  },
  {
    id: "05",
    title: "16-Gami Explainer Art",
    kills: "Boring stock b-roll and flat slideshow art.",
    headline: "The papercraft look that makes people stop.",
    subcopy:
      "Breadstick's visual DNA - realistic 16-bit origami stills, character-locked across every shot, animated with Seedance 2.0. The exact style of the tiles you are looking at right now.",
    image: "/images/16gami/tile-05-16gami-art.png",
    imageAlt: "Paper hands folding a glowing origami crane.",
    imageSubject:
      "A pair of paper hands caught mid-fold, lifting a glowing origami crane out of a flat sheet.",
  },
  {
    id: "06",
    title: "Carousel Engine",
    kills: "Hand-stitching 8 slides in Canva at midnight.",
    headline: "Branded carousels in one render.",
    subcopy:
      "Topic in, multi-slide carousel out - 5 templates and a Remotion compositor that drops live video into the slide art zones. Save-bait that looks designed, not dumped.",
    image: "/images/16gami/tile-06-carousel-engine.png",
    imageAlt: "Fanned stack of papercraft carousel slides.",
    imageSubject:
      "A fanned stack of paper slide-cards spread like a hand of cards, each card a slightly different folded layout.",
  },
  {
    id: "07",
    title: "Voice to Deploy",
    kills: "The gap between an idea and a live preview.",
    headline: "Talk to your glasses. Watch it ship.",
    subcopy:
      "Say what you want changed; Breadstick edits the code, runs a real build gate, and pushes a live preview link back to your phone - in under a minute.",
    image: "/images/16gami/tile-07-voice-deploy.png",
    imageAlt: "Papercraft smart-glasses, a speech bubble becoming a launching rocket.",
    imageSubject:
      "Folded-paper smart glasses with a paper speech bubble rising from them and morphing into a small paper rocket lifting off a launch pad.",
  },
  {
    id: "08",
    title: "The Scoreboard",
    kills: "Posting into the void with no idea what worked.",
    headline: "It tells you what actually worked.",
    subcopy:
      "Every post is tagged at birth. Breadstick pulls real performance, keeps a ledger, and rotates A/B angles on a deterministic rule. Arithmetic, never a vibe.",
    image: "/images/16gami/tile-08-scoreboard.png",
    imageAlt: "Papercraft bar chart with a gold leading bar.",
    imageSubject:
      "A papercraft scoreboard built from folded paper bars of rising height, with the tallest bar gold and crowned with a tiny paper flag.",
  },
  {
    id: "09",
    title: "The Ship Gate",
    kills: "An AI silently shipping garbage to your audience.",
    headline: "A safety gate that cannot be sweet-talked.",
    subcopy:
      "Before anything ships, a deterministic gate scans for injection, scores the taint, and returns SHIP, QUARANTINE, or REJECT - pure math, no LLM in the verdict.",
    image: "/images/16gami/tile-09-ship-gate.png",
    imageAlt: "Papercraft gate stamping one sheet, rejecting another.",
    imageSubject:
      "A paper turnstile gate with a folded green checkmark stamp coming down on a paper sheet while a red-flagged sheet slides into a reject tray.",
  },
  {
    id: "10",
    title: "Run It From Your Phone",
    kills: "Being chained to the desk to make anything.",
    headline: "Your studio, in WhatsApp.",
    subcopy:
      "Drive the pipeline by text or voice from anywhere. Maestro answers in a real voice; an ambient buddy narrates jobs as they finish; tickets ping you when a render is done.",
    image: "/images/16gami/tile-10-phone-studio.png",
    imageAlt: "Papercraft phone with a chat bubble and a small paper astronaut.",
    imageSubject:
      "A folded-paper phone showing a paper chat bubble, with a tiny paper astronaut buddy peeking over the top edge.",
  },
  {
    id: "11",
    title: "Footage Lanes",
    kills: "Manual cutting, grading, and clipping.",
    headline: "Drop raw footage. Get a finished cut.",
    subcopy:
      "Shortform and longform processors take raw POV or desk recordings through transcript, silence-cut, overlay, color grade, ready clips, and metadata. The render cache keeps repeat work cheap.",
    image: "/images/16gami/tile-11-footage-lanes.png",
    imageAlt: "Papercraft conveyor belt of film reels and a finished clip.",
    imageSubject:
      "A paper conveyor belt carrying folded film-reel and clapperboard pieces, with a finished glossy paper clip dropping into a tray.",
  },
  {
    id: "12",
    title: "Distribution",
    kills: "Copy-pasting the same post into three apps.",
    headline: "One post. Every platform. Tracked.",
    subcopy:
      "Schedule across TikTok, Instagram, and Facebook through Postiz and Blotato. Because every post is tagged at birth, the Scoreboard knows which lane and angle earned the view.",
    image: "/images/16gami/tile-12-distribution.png",
    imageAlt: "Papercraft hub fanning arrows to three platform badges.",
    imageSubject:
      "A central paper hub with folded paper arrows fanning out to three small paper platform badges: music note, camera, and f.",
  },
];

export const secondaryTiles = [
  {
    title: "Recipes",
    headline: "One click wires a whole proven format.",
    body: "Cybersec Truth Bomb, Build-Day Diary, Plan-It-Out, Hot Take.",
  },
  {
    title: "HyperFrames Overlays",
    headline: "Captions and motion graphics that pop.",
    body: "40+ compositions for hooks, lower-thirds, sweeps, burst lines, and beat-synced text.",
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
    title: "The MCP Server",
    headline: "Breadstick as a tool other agents call.",
    body: "Characters, script-gen, the ledger, and endpoints exposed over MCP.",
  },
];

export const modelStack =
  "Claude, OpenAI, Kling 3.0 / 2.6, Sora 2 cameos, Nano Banana Pro, GPT Image-2, Seedance 2.0, Veo, Flux, Higgsfield, Suno, ElevenLabs, Postiz, and Blotato.";
