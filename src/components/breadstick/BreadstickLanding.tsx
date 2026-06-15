import { useEffect, useMemo, useState } from "react";
import "./breadstick.css";

type DemoMode =
  | "desktop"
  | "react"
  | "idle"
  | "games"
  | "drag"
  | "outfits"
  | "sound"
  | "lightweight"
  | "notes"
  | "thinking"
  | "timer"
  | "privacy";

interface Feature {
  id: string;
  title: string;
  body: string;
  mode: DemoMode;
}

const price = "$3.90";

const featureTags = [
  "Desktop companion",
  "Reactions",
  "Mini games",
  "Idle animations",
  "Drag & drop",
  "Custom outfits",
  "Sound on/off",
  "Always with you",
];

const features: Feature[] = [
  {
    id: "01",
    title: "Sits on your desktop",
    body: "Breadstick keeps you company while you work or play.",
    mode: "desktop",
  },
  {
    id: "02",
    title: "Reacts to you",
    body: "Clicks, typing, windows, and apps trigger tiny notices.",
    mode: "react",
  },
  {
    id: "03",
    title: "Idle animations",
    body: "A sleepy snack dozes while your desktop calms down.",
    mode: "idle",
  },
  {
    id: "04",
    title: "Mini games",
    body: "Play quick snack-sized games right from your workspace.",
    mode: "games",
  },
  {
    id: "05",
    title: "Drag & interact",
    body: "Drag Breadstick around and see what happens next.",
    mode: "drag",
  },
  {
    id: "06",
    title: "Outfits",
    body: "Dress Breadstick in silly caps, bows, and launch skins.",
    mode: "outfits",
  },
  {
    id: "07",
    title: "Sound on/off",
    body: "Toggle warm crunches and gentle pings in settings.",
    mode: "sound",
  },
  {
    id: "08",
    title: "Lightweight",
    body: "Low on resources and built for always-on desktop play.",
    mode: "lightweight",
  },
  {
    id: "09",
    title: "Unroll notes",
    body: "Turn little reminders into sticky notes you can keep.",
    mode: "notes",
  },
  {
    id: "10",
    title: "Think along",
    body: "Breadstick hangs around while your assistant is thinking.",
    mode: "thinking",
  },
  {
    id: "11",
    title: "Break timer",
    body: "Set focus loops and let Breadstick announce soft breaks.",
    mode: "timer",
  },
  {
    id: "12",
    title: "Private by design",
    body: "Local-first personality with no surprise telemetry.",
    mode: "privacy",
  },
];

const galleryItems = [
  {
    title: "index.js",
    kind: "code",
    caption: 'function bread() { return "warm"; }',
  },
  {
    title: "lofi beats",
    kind: "music",
    caption: "A small snack for a long playlist.",
  },
  {
    title: "chat.exe",
    kind: "chat",
    caption: "got this! nice! let's go!",
  },
  {
    title: "design.psd",
    kind: "design",
    caption: "Palette watched. Layers guarded.",
  },
];

export function BreadstickLanding() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [showStickyBuy, setShowStickyBuy] = useState(false);
  const [notice, setNotice] = useState("Breadstick is watching the cursor.");
  const activeFeature = features[activeFeatureIndex];
  const purchaseBullets = useMemo(
    () => [
      "Full Breadstick app",
      "All desktop reactions",
      "Mini games and idle poses",
      "Outfits and launch skins",
      "Future updates included",
    ],
    [],
  );

  useEffect(() => {
    document.title = "Breadstick | Pixel Desktop Companion";
  }, []);

  useEffect(() => {
    window.render_game_to_text = () =>
      JSON.stringify({
        screen: "breadstick-landing",
        activeFeature: activeFeature.title,
        stickyBuyVisible: showStickyBuy,
        notice,
      });
    window.advanceTime = (ms: number) => {
      if (ms <= 0) return;
      setActiveFeatureIndex((current) => (current + 1) % features.length);
    };

    return () => {
      delete window.render_game_to_text;
      delete window.advanceTime;
    };
  }, [activeFeature.title, notice, showStickyBuy]);

  useEffect(() => {
    const updateStickyState = () => {
      const pricingBottom = document.getElementById("pricing")?.getBoundingClientRect().bottom ?? 0;
      setShowStickyBuy(pricingBottom < 80);
    };

    updateStickyState();
    window.addEventListener("scroll", updateStickyState, { passive: true });

    return () => window.removeEventListener("scroll", updateStickyState);
  }, []);

  const handleBuy = () => {
    setNotice("Checkout stub ready. Payments are intentionally not wired yet.");
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const showDemo = () => {
    const nextIndex = (activeFeatureIndex + 1) % features.length;
    setActiveFeatureIndex(nextIndex);
    setNotice(`${features[nextIndex].title}: ${features[nextIndex].body}`);
  };

  return (
    <div className="breadstick-page" id="top">
      <Header onBuy={handleBuy} />

      <main>
        <section className="breadstick-hero-section" aria-labelledby="hero-title">
          <div className="breadstick-hero-copy">
            <h1 id="hero-title">A pixel snack that lives in your computer</h1>
            <p>
              Breadstick sits on your desktop, keeps you company, and reacts to
              clicks, typing, meetings, and breaks.
            </p>

            <div className="breadstick-tag-grid" aria-label="Breadstick features">
              {featureTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="breadstick-hero-actions">
              <button className="breadstick-pixel-button breadstick-pixel-button-dark" type="button" onClick={showDemo}>
                See Breadstick in action
                <span aria-hidden="true">&gt;</span>
              </button>
              <button className="breadstick-pixel-button breadstick-pixel-button-gold" type="button" onClick={handleBuy}>
                Buy now
                <strong>{price}</strong>
              </button>
            </div>
          </div>

          <DesktopWindow title="breadstick.exe" mode={activeFeature.mode} notice={notice} />
        </section>

        <PurchaseSection bullets={purchaseBullets} onBuy={handleBuy} />

        <section className="breadstick-feature-section" id="features" aria-labelledby="features-title">
          <div className="breadstick-section-heading">
            <h2 id="features-title">Look what Breadstick can do!</h2>
            <p>Snack-sized desktop moments for focus, fun, and tiny interruptions.</p>
          </div>

          <div className="breadstick-feature-grid">
            {features.map((feature, index) => (
              <button
                className={`breadstick-feature-card ${index === activeFeatureIndex ? "breadstick-feature-card-active" : ""}`}
                key={feature.id}
                type="button"
                onClick={() => {
                  setActiveFeatureIndex(index);
                  setNotice(`${feature.title}: ${feature.body}`);
                }}
                onMouseEnter={() => setActiveFeatureIndex(index)}
              >
                <div className="breadstick-feature-title-row">
                  <span>{feature.id}</span>
                  <strong>{feature.title}</strong>
                </div>
                <FeatureScene mode={feature.mode} />
                <p>{feature.body}</p>
              </button>
            ))}
          </div>
        </section>

        <GallerySection />

        <PurchaseSection bullets={purchaseBullets} onBuy={handleBuy} compact />
      </main>

      <Footer />
      {showStickyBuy && <StickyBuyBar onBuy={handleBuy} />}
    </div>
  );
}

function Header({ onBuy }: { onBuy: () => void }) {
  return (
    <header className="breadstick-site-header">
      <a className="breadstick-brand-mark" href="#top" aria-label="Breadstick home">
        <PixelBreadstick size="tiny" mode="desktop" />
        <span>Breadstick</span>
      </a>

      <nav className="breadstick-site-nav" aria-label="Primary navigation">
        <a href="#features">Features</a>
        <a href="#gallery">Gallery</a>
        <a href="#pricing">Price</a>
      </nav>

      <div className="breadstick-header-actions">
        <div className="breadstick-window-buttons" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <button className="breadstick-mini-buy" type="button" onClick={onBuy}>
          Buy now
        </button>
      </div>
    </header>
  );
}

function DesktopWindow({
  title,
  mode,
  notice,
}: {
  title: string;
  mode: DemoMode;
  notice: string;
}) {
  return (
    <div className="breadstick-desktop-window" aria-label="Breadstick desktop preview">
      <div className="breadstick-window-chrome">
        <span>{title}</span>
        <div className="breadstick-chrome-controls" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="breadstick-desktop-body">
        <div className="breadstick-desktop-icons" aria-hidden="true">
          <DesktopIcon icon="monitor" label="My Computer" />
          <DesktopIcon icon="folder" label="Documents" />
          <DesktopIcon icon="trash" label="Trash" />
        </div>
        <div className="breadstick-desktop-mascot">
          <PixelBreadstick size="large" mode={mode} />
          <span className="breadstick-speech-bubble">{notice}</span>
        </div>
      </div>
      <div className="breadstick-desktop-taskbar">
        <span className="breadstick-start-button">Start</span>
        <span>12:00 PM</span>
        <span className="breadstick-speaker-icon" aria-hidden="true" />
      </div>
    </div>
  );
}

function DesktopIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <div className={`breadstick-desktop-icon breadstick-desktop-icon-${icon}`}>
      <span />
      <small>{label}</small>
    </div>
  );
}

function PurchaseSection({
  bullets,
  onBuy,
  compact = false,
}: {
  bullets: string[];
  onBuy: () => void;
  compact?: boolean;
}) {
  return (
    <section
      className={`breadstick-purchase-sheet ${compact ? "breadstick-purchase-sheet-compact" : ""}`}
      id={compact ? "download" : "pricing"}
      aria-labelledby={compact ? "download-title" : "pricing-title"}
    >
      <div className="breadstick-purchase-copy">
        <h2 id={compact ? "download-title" : "pricing-title"}>
          One stick. Ready for your desktop.
        </h2>
        <ul>
          <li>Sits on top of your desktop</li>
          <li>Reacts to clicks, typing, and apps</li>
          <li>Dozens of idle animations</li>
          <li>Mini games and fun interactions</li>
          <li>Lightweight and always out of the way</li>
        </ul>
        <div className="breadstick-platform-row" aria-label="Supported platforms">
          <span className="breadstick-platform breadstick-platform-windows" aria-hidden="true" />
          <span>Windows 10+</span>
          <span className="breadstick-platform breadstick-platform-mac" aria-hidden="true" />
          <span>macOS 11+</span>
        </div>
        <a className="breadstick-download-link" href="#download">
          Already purchased? Download Breadstick
        </a>
      </div>

      <div className="breadstick-checkout-box">
        <div className="breadstick-checkout-price">
          <PixelBreadstick size="small" mode="desktop" />
          <span>{price}</span>
        </div>
        <div className="breadstick-checkout-inner">
          <h3>What you get:</h3>
          <ul>
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <button className="breadstick-pixel-button breadstick-pixel-button-gold" type="button" onClick={onBuy}>
            Buy now
            <strong>{price}</strong>
          </button>
          <button className="breadstick-pixel-button breadstick-pixel-button-dark" type="button">
            Gift this app
          </button>
        </div>
        <p>One-time payment. No subscriptions.</p>
      </div>
    </section>
  );
}

function FeatureScene({ mode }: { mode: DemoMode }) {
  return (
    <div className={`breadstick-feature-scene breadstick-feature-scene-${mode}`} aria-hidden="true">
      {mode === "desktop" && (
        <>
          <div className="breadstick-mini-taskbar">
            <i />
            <i />
            <i />
            <span>12:00 PM</span>
          </div>
          <PixelBreadstick size="small" mode="desktop" />
        </>
      )}

      {mode === "react" && (
        <>
          <span className="breadstick-spark breadstick-spark-left">+</span>
          <PixelBreadstick size="medium" mode="react" />
          <span className="breadstick-spark breadstick-spark-right">+</span>
        </>
      )}

      {mode === "idle" && <PixelBreadstick size="wide" mode="idle" />}

      {mode === "games" && (
        <>
          <div className="breadstick-score-row">
            <span>Score: 12</span>
            <span>HP HP HP</span>
          </div>
          <PixelBreadstick size="small" mode="desktop" />
          <span className="breadstick-berry" />
        </>
      )}

      {mode === "drag" && (
        <>
          <PixelBreadstick size="medium" mode="drag" />
          <span className="breadstick-cursor-hand" />
        </>
      )}

      {mode === "outfits" && <PixelBreadstick size="medium" mode="outfits" />}

      {mode === "sound" && (
        <div className="breadstick-sound-scene">
          <span className="breadstick-speaker-shape" />
          <strong>x</strong>
        </div>
      )}

      {mode === "lightweight" && (
        <div className="breadstick-meter-window">
          <span>CPU 0.3%</span>
          <span>RAM 38MB</span>
        </div>
      )}

      {mode === "notes" && (
        <>
          <div className="breadstick-paper-note">take a break</div>
          <PixelBreadstick size="small" mode="desktop" />
        </>
      )}

      {mode === "thinking" && (
        <div className="breadstick-chat-scene">
          <code>function bread()</code>
          <PixelBreadstick size="small" mode="desktop" />
        </div>
      )}

      {mode === "timer" && (
        <>
          <span className="breadstick-timer-badge">Break 00:32</span>
          <PixelBreadstick size="medium" mode="timer" />
        </>
      )}

      {mode === "privacy" && (
        <>
          <div className="breadstick-lock-window">local only</div>
          <PixelBreadstick size="small" mode="desktop" />
        </>
      )}
    </div>
  );
}

function GallerySection() {
  return (
    <section className="breadstick-gallery-section" id="gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title">Breadstick in the wild</h2>
      <div className="breadstick-gallery-rail">
        {galleryItems.map((item) => (
          <article className={`breadstick-gallery-window breadstick-gallery-window-${item.kind}`} key={item.title}>
            <div className="breadstick-gallery-chrome">
              <span>{item.title}</span>
              <i />
              <i />
              <i />
            </div>
            <div className="breadstick-gallery-body">
              <PixelBreadstick size="small" mode={item.kind === "music" ? "timer" : "desktop"} />
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="breadstick-slider-dots" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

function StickyBuyBar({ onBuy }: { onBuy: () => void }) {
  return (
    <aside className="breadstick-sticky-buy-bar" aria-label="Buy Breadstick">
      <div className="breadstick-sticky-product">
        <PixelBreadstick size="small" mode="desktop" />
        <div>
          <strong>One stick. Ready for your desktop.</strong>
          <span>A tiny companion for your digital world.</span>
        </div>
      </div>
      <button className="breadstick-pixel-button breadstick-pixel-button-gold" type="button" onClick={onBuy}>
        Buy now
        <strong>{price}</strong>
      </button>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="breadstick-site-footer">
      <a className="breadstick-brand-mark" href="#top" aria-label="Back to top">
        <PixelBreadstick size="tiny" mode="desktop" />
        <span>Breadstick</span>
      </a>
      <p>Copyright 2026 Breadstick. All rights reserved.</p>
      <nav aria-label="Footer navigation">
        <a href="#pricing">Terms</a>
        <a href="#features">Privacy</a>
        <a href="#top">Top</a>
      </nav>
    </footer>
  );
}

function PixelBreadstick({
  size,
  mode,
}: {
  size: "tiny" | "small" | "medium" | "large" | "wide";
  mode: DemoMode | "desktop";
}) {
  return (
    <span className={`breadstick-pixel-breadstick breadstick-pixel-breadstick-${size} breadstick-${mode}`} aria-hidden="true">
      <span className="breadstick-body">
        <span className="breadstick-toast-shine" />
        <span className="breadstick-seed breadstick-seed-one" />
        <span className="breadstick-seed breadstick-seed-two" />
        <span className="breadstick-seed breadstick-seed-three" />
        <span className="breadstick-seed breadstick-seed-four" />
        <span className="breadstick-eye breadstick-eye-left" />
        <span className="breadstick-eye breadstick-eye-right" />
        <span className="breadstick-mouth" />
      </span>
      <span className="breadstick-arm breadstick-arm-left" />
      <span className="breadstick-arm breadstick-arm-right" />
      <span className="breadstick-leg breadstick-leg-left" />
      <span className="breadstick-leg breadstick-leg-right" />
      {mode === "outfits" && <span className="breadstick-cap" />}
      {mode === "idle" && <span className="breadstick-sleep-mark">Z</span>}
    </span>
  );
}
