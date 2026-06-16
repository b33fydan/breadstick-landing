import { useEffect, useState } from "react";
import {
  modelStack,
  priorityAccessHref,
  priorityTiles,
  secondaryTiles,
  stats,
  type PriorityTile,
} from "../../data/promoContent";
import "./breadstick.css";

const ctaLabel = "Claim your seat";

export function BreadstickLanding() {
  const [activeTileIndex, setActiveTileIndex] = useState(0);
  const [showSecondaryTiles, setShowSecondaryTiles] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const activeTile = priorityTiles[activeTileIndex];

  useEffect(() => {
    document.title = "Breadstick | Priority Access";
  }, []);

  useEffect(() => {
    window.render_game_to_text = () =>
      JSON.stringify({
        screen: "breadstick-priority-access",
        activeTile: activeTile.title,
        stickyCtaVisible: showStickyCta,
        secondaryTilesExpanded: showSecondaryTiles,
      });
    window.advanceTime = (ms: number) => {
      if (ms <= 0) return;
      setActiveTileIndex((current) => (current + 1) % priorityTiles.length);
    };

    return () => {
      delete window.render_game_to_text;
      delete window.advanceTime;
    };
  }, [activeTile.title, showSecondaryTiles, showStickyCta]);

  useEffect(() => {
    const updateStickyState = () => {
      const heroBottom = document.querySelector(".breadstick-hero-section")?.getBoundingClientRect().bottom ?? 0;
      setShowStickyCta(heroBottom < 120);
    };

    updateStickyState();
    window.addEventListener("scroll", updateStickyState, { passive: true });

    return () => window.removeEventListener("scroll", updateStickyState);
  }, []);

  const goToPriorityAccess = () => {
    document.getElementById("priority-access")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="breadstick-page breadstick-promo-page" id="top">
      <Header onPriorityAccess={goToPriorityAccess} />

      <main>
        <section className="breadstick-hero-section breadstick-promo-hero" aria-labelledby="hero-title">
          <div className="breadstick-hero-copy">
            <h1 id="hero-title">Run your whole AI-influencer pipeline from one canvas.</h1>
            <p className="breadstick-hero-lede">
              Script. Voice. Animate. Post. Score. One surface. Breadstick is the harness that wires the creator stack together.
            </p>

            <div className="breadstick-hero-actions">
              <button className="breadstick-pixel-button breadstick-pixel-button-gold" type="button" onClick={goToPriorityAccess}>
                {ctaLabel}
              </button>
              <a className="breadstick-pixel-button breadstick-pixel-button-dark" href="#priority-grid">
                See what is inside
              </a>
            </div>
          </div>

          <PromoConsole activeTile={activeTile} />
        </section>

        <StatsBar />

        <section className="breadstick-wedge-section" aria-labelledby="wedge-title">
          <div>
            <h2 id="wedge-title">Everyone sells one tool. Breadstick sells the harness.</h2>
            <p>
              Script GPTs, video models, schedulers, voice tools, carousel builders. Useful alone. Brittle together.
              Breadstick turns them into one deterministic operating surface with gates, scoring, and bring-your-own-key control.
            </p>
          </div>
          <a className="breadstick-inline-cta" href={priorityAccessHref} onClick={goToPriorityAccess}>
            Get priority access
          </a>
        </section>

        <section className="breadstick-feature-section breadstick-priority-section" id="priority-grid" aria-labelledby="features-title">
          <div className="breadstick-section-heading">
            <h2 id="features-title">Priority operators get the whole machine.</h2>
            <p>12 real lanes. One workflow. Built for AI-character accounts that need output and feedback, not another tab.</p>
          </div>

          <div className="breadstick-priority-grid">
            {priorityTiles.map((tile, index) => (
              <PriorityTileCard
                active={index === activeTileIndex}
                key={tile.id}
                onSelect={() => setActiveTileIndex(index)}
                tile={tile}
              />
            ))}
          </div>
        </section>

        <section className="breadstick-depth-section" aria-labelledby="depth-title">
          <div className="breadstick-depth-header">
            <div>
              <h2 id="depth-title">And a lot more inside.</h2>
              <p>Real depth, kept lighter on the page. Expand it when you want the full operator inventory.</p>
            </div>
            <button className="breadstick-mini-buy" type="button" onClick={() => setShowSecondaryTiles((value) => !value)}>
              {showSecondaryTiles ? "Hide depth" : "See everything"}
            </button>
          </div>

          {showSecondaryTiles && (
            <div className="breadstick-secondary-grid">
              {secondaryTiles.map((tile) => (
                <article className="breadstick-secondary-card" key={tile.title}>
                  <span>{tile.title}</span>
                  <h3>{tile.headline}</h3>
                  <p>{tile.body}</p>
                </article>
              ))}
            </div>
          )}
        </section>

        <HowItWorksSection />
        <OfferSection onPriorityAccess={goToPriorityAccess} />
        <FaqSection />
      </main>

      <Footer onPriorityAccess={goToPriorityAccess} />
      {showStickyCta && <StickyCta onPriorityAccess={goToPriorityAccess} />}
    </div>
  );
}

function Header({ onPriorityAccess }: { onPriorityAccess: () => void }) {
  return (
    <header className="breadstick-site-header">
      <a className="breadstick-brand-mark" href="#top" aria-label="Breadstick home">
        <PixelBreadstick size="tiny" />
        <span>Breadstick</span>
      </a>

      <nav className="breadstick-site-nav" aria-label="Primary navigation">
        <a href="#priority-grid">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#faq">FAQ</a>
        <a href="#priority-access">Priority Access</a>
      </nav>

      <div className="breadstick-header-actions">
        <div className="breadstick-window-buttons" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <button className="breadstick-mini-buy" type="button" onClick={onPriorityAccess}>
          {ctaLabel}
        </button>
      </div>
    </header>
  );
}

function PromoConsole({ activeTile }: { activeTile: PriorityTile }) {
  return (
    <div className="breadstick-promo-console" aria-label="Breadstick control surface preview">
      <div className="breadstick-window-chrome">
        <span>breadstick.pipeline</span>
        <div className="breadstick-chrome-controls" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="breadstick-console-body">
        <div className="breadstick-console-rail">
          <span>input</span>
          <span>gate</span>
          <span>render</span>
          <span>score</span>
        </div>
        <div className="breadstick-node-map" aria-hidden="true">
          <span className="breadstick-node breadstick-node-active">script</span>
          <span className="breadstick-node">voice</span>
          <span className="breadstick-node">image</span>
          <span className="breadstick-node">animate</span>
          <span className="breadstick-node">caption</span>
          <span className="breadstick-node">post</span>
          <i className="breadstick-wire breadstick-wire-one" />
          <i className="breadstick-wire breadstick-wire-two" />
          <i className="breadstick-wire breadstick-wire-three" />
        </div>
        <div className="breadstick-active-tile-readout">
          <span>{activeTile.id}</span>
          <h2>{activeTile.title}</h2>
          <p>{activeTile.headline}</p>
        </div>
      </div>
      <div className="breadstick-desktop-taskbar">
        <span className="breadstick-start-button">BYOK</span>
        <span>SHIP / SCORE</span>
        <span className="breadstick-speaker-icon" aria-hidden="true" />
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <section className="breadstick-stats-bar" aria-label="Breadstick capability stats">
      {stats.map((stat) => (
        <div className="breadstick-stat" key={`${stat.number}-${stat.label}`}>
          <strong>{stat.number}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

function PriorityTileCard({
  active,
  onSelect,
  tile,
}: {
  active: boolean;
  onSelect: () => void;
  tile: PriorityTile;
}) {
  return (
    <button
      className={`breadstick-priority-card ${active ? "breadstick-priority-card-active" : ""}`}
      type="button"
      onClick={onSelect}
      onMouseEnter={onSelect}
    >
      <div className="breadstick-tile-image-shell">
        <div className="breadstick-tile-image-fallback" aria-hidden="true">
          <span>{tile.id}</span>
          <small>16gami image slot</small>
        </div>
        <img
          alt={tile.imageAlt}
          loading="lazy"
          src={tile.image}
          onLoad={(event) => {
            event.currentTarget.classList.add("breadstick-tile-image-loaded");
          }}
          onError={(event) => {
            event.currentTarget.remove();
          }}
        />
      </div>
      <div className="breadstick-priority-card-copy">
        <div className="breadstick-feature-title-row">
          <span>{tile.id}</span>
          <strong>{tile.title}</strong>
        </div>
        <p className="breadstick-kills">Kills: {tile.kills}</p>
        <h3>{tile.headline}</h3>
        <p>{tile.subcopy}</p>
      </div>
    </button>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      title: "Wire it",
      body: "Pick the lane, character, model stack, gate, and destination. The canvas holds the whole route.",
    },
    {
      title: "Generate it",
      body: "Scripts, voices, stills, clips, captions, and carousels move through one control surface.",
    },
    {
      title: "Score it",
      body: "Posts are tagged at birth, pulled back into the ledger, and rotated by performance.",
    },
  ];

  return (
    <section className="breadstick-how-section" id="how-it-works" aria-labelledby="how-title">
      <div className="breadstick-section-heading">
        <h2 id="how-title">Wire it. Generate it. Score it.</h2>
        <p>{modelStack} One control surface. You never tab-hop again.</p>
      </div>
      <div className="breadstick-how-grid">
        {steps.map((step, index) => (
          <article className="breadstick-how-card" key={step.title}>
            <span>0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OfferSection({ onPriorityAccess }: { onPriorityAccess: () => void }) {
  return (
    <section className="breadstick-offer-section" id="priority-access" aria-labelledby="offer-title">
      <div className="breadstick-offer-copy">
        <h2 id="offer-title">Priority Access - Founding Operators.</h2>
        <p>
          Join early access to the Breadstick app, the Skool community, and the build-from-scratch tutorial track.
          Bring your keys. Own your pipeline. Build in public while the roadmap is still soft clay.
        </p>
        <ul>
          <li>Early access to the BYOK Breadstick app.</li>
          <li>Skool community and operator room.</li>
          <li>Recipes, skills, and Claude-Code workflow discipline.</li>
          <li>Direct line into the roadmap while founding terms are open.</li>
        </ul>
      </div>
      <div className="breadstick-offer-box">
        <span>Founding cohort</span>
        <h3>Seat count and price drop next.</h3>
        <p>Dan fills the cap, founding rate, and Skool link when the cohort opens. The page is wired to one CTA.</p>
        <button className="breadstick-pixel-button breadstick-pixel-button-gold" type="button" onClick={onPriorityAccess}>
          Get priority access
        </button>
        <small>Bring your own keys. Own your pipeline. Leave whenever - but founding terms only apply while they are available.</small>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: "Do I need my own API keys?",
      answer:
        "Yes. Breadstick is BYOK for Anthropic, kie.ai, ElevenLabs, and the rest of your stack. That is the point: you own the pipeline and the spend.",
    },
    {
      question: "Is this just another wrapper?",
      answer:
        "No. The value is the harness: 65+ nodes, deterministic gates, a performance ledger, and a scoreboard that feeds the next content decision.",
    },
    {
      question: "Which platforms does it post to?",
      answer:
        "TikTok, Instagram, and Facebook through Postiz and Blotato, with post tags carried back into the Scoreboard.",
    },
    {
      question: "What happens if a render repeats?",
      answer:
        "The render cache keeps repeat work from being paid twice when the same output is already available.",
    },
  ];

  return (
    <section className="breadstick-faq-section" id="faq" aria-labelledby="faq-title">
      <div className="breadstick-section-heading">
        <h2 id="faq-title">FAQ</h2>
        <p>Short answers for operators who care about control, cost, and whether the thing actually ships.</p>
      </div>
      <div className="breadstick-faq-list">
        {faqs.map((faq) => (
          <details className="breadstick-faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function StickyCta({ onPriorityAccess }: { onPriorityAccess: () => void }) {
  return (
    <aside className="breadstick-sticky-buy-bar" aria-label="Priority Access">
      <div className="breadstick-sticky-product">
        <PixelBreadstick size="small" />
        <div>
          <strong>Priority Access is the sell.</strong>
          <span>Community, harness, recipes, and the operator room.</span>
        </div>
      </div>
      <button className="breadstick-pixel-button breadstick-pixel-button-gold" type="button" onClick={onPriorityAccess}>
        {ctaLabel}
      </button>
    </aside>
  );
}

function Footer({ onPriorityAccess }: { onPriorityAccess: () => void }) {
  return (
    <footer className="breadstick-site-footer">
      <a className="breadstick-brand-mark" href="#top" aria-label="Back to top">
        <PixelBreadstick size="tiny" />
        <span>Breadstick</span>
      </a>
      <p>Claude Code for AI influencers. Bring your keys. Own your pipeline.</p>
      <nav aria-label="Footer navigation">
        <a href="#priority-grid">Features</a>
        <a href="#faq">FAQ</a>
        <button type="button" onClick={onPriorityAccess}>
          {ctaLabel}
        </button>
      </nav>
    </footer>
  );
}

function PixelBreadstick({ size }: { size: "tiny" | "small" }) {
  return (
    <span className={`breadstick-pixel-breadstick breadstick-pixel-breadstick-${size}`} aria-hidden="true">
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
    </span>
  );
}
