import { useEffect, useState } from "react";
import {
  featureTiles,
  joinCtaLabel,
  joinHref,
  modelStack,
  secondaryTiles,
  stats,
  type FeatureTile,
} from "../../data/promoContent";
import "./breadstick.css";

export function BreadstickLanding() {
  const [activeTileIndex, setActiveTileIndex] = useState(0);
  const [showSecondaryTiles, setShowSecondaryTiles] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const activeTile = featureTiles[activeTileIndex];

  useEffect(() => {
    document.title = "Breadstick | Join Today!";
  }, []);

  useEffect(() => {
    window.render_game_to_text = () =>
      JSON.stringify({
        screen: "breadstick-free-skool-gateway",
        activeTile: activeTile.title,
        stickyCtaVisible: showStickyCta,
        secondaryTilesExpanded: showSecondaryTiles,
      });
    window.advanceTime = (ms: number) => {
      if (ms <= 0) return;
      setActiveTileIndex((current) => (current + 1) % featureTiles.length);
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

  return (
    <div className="breadstick-page breadstick-promo-page" id="top">
      <Header />

      <main>
        <section className="breadstick-hero-section breadstick-promo-hero" aria-labelledby="hero-title">
          <div className="breadstick-hero-copy">
            <h1 id="hero-title">From idea to posted. One canvas.</h1>
            <p className="breadstick-hero-lede">
              Ideate. Write. Record. Edit. Caption. Post. Score. Breadstick is free. Bring your own keys. The community is the door.
            </p>

            <div className="breadstick-hero-actions">
              <a className="breadstick-pixel-button breadstick-pixel-button-gold" href={joinHref}>
                {joinCtaLabel}
              </a>
            </div>
          </div>

          <PromoConsole activeTile={activeTile} />
        </section>

        <StatsBar />

        <section className="breadstick-wedge-section" aria-labelledby="wedge-title">
          <div>
            <h2 id="wedge-title">Everyone sells one tool. Breadstick is the harness.</h2>
            <p>
              Script GPTs, video models, schedulers, voice tools, carousel builders. Useful alone. Brittle together.
              Breadstick turns them into one operating surface for creators who need output, feedback, and control.
            </p>
          </div>
          <a className="breadstick-inline-cta" href={joinHref}>
            {joinCtaLabel}
          </a>
        </section>

        <section className="breadstick-feature-section breadstick-priority-section" id="priority-grid" aria-labelledby="features-title">
          <div className="breadstick-section-heading">
            <h2 id="features-title">What can Breadstick do?</h2>
            <p>12 friction killers for creators who need the hours back, not another tab.</p>
          </div>

          <div className="breadstick-priority-grid">
            {featureTiles.map((tile, index) => (
              <FeatureTileCard
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
        <OfferSection />
        <FaqSection />
      </main>

      <Footer />
      {showStickyCta && <StickyCta />}
    </div>
  );
}

function Header() {
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
        <a href="#join">Join</a>
      </nav>

      <div className="breadstick-header-actions">
        <div className="breadstick-window-buttons" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <a className="breadstick-mini-buy" href={joinHref}>
          {joinCtaLabel}
        </a>
      </div>
    </header>
  );
}

function PromoConsole({ activeTile }: { activeTile: FeatureTile }) {
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

function FeatureTileCard({
  active,
  onSelect,
  tile,
}: {
  active: boolean;
  onSelect: () => void;
  tile: FeatureTile;
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
      title: "Make it",
      body: "Scripts, voices, stills, clips, captions, edits, and carousels move through one control surface.",
    },
    {
      title: "Score it",
      body: "Posts are tagged at birth, pulled back into the ledger, and rotated by performance.",
    },
  ];

  return (
    <section className="breadstick-how-section" id="how-it-works" aria-labelledby="how-title">
      <div className="breadstick-section-heading">
        <h2 id="how-title">Wire it. Make it. Score it.</h2>
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

function OfferSection() {
  return (
    <section className="breadstick-offer-section" id="join" aria-labelledby="offer-title">
      <div className="breadstick-offer-copy">
        <h2 id="offer-title">Breadstick is free. The community is the door.</h2>
        <p>
          Bring your own keys. Use the full Breadstick app. Join the Breadstick.ai Skool community for the recipes,
          skills library, build-from-scratch tutorial track, and a direct line into the roadmap while it is still soft clay.
        </p>
        <ul>
          <li>Full BYOK Breadstick app access.</li>
          <li>Breadstick.ai Skool community and operator room.</li>
          <li>Recipes, skills, and Claude-Code workflow discipline.</li>
          <li>Build-from-scratch tutorials and roadmap feedback.</li>
        </ul>
      </div>
      <div className="breadstick-offer-box">
        <span>Free BYOK access</span>
        <h3>No subscription. No checkout.</h3>
        <p>Breadstick is free. Bring your own keys. The only key to the door is the community.</p>
        <a className="breadstick-pixel-button breadstick-pixel-button-gold" href={joinHref}>
          {joinCtaLabel}
        </a>
        <small>No subscription. No checkout. Own your pipeline. Leave whenever - the work is yours.</small>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: "What does it cost?",
      answer:
        "Breadstick is free to use. Bring your own API keys. The only ask is joining the Breadstick.ai Skool community.",
    },
    {
      question: "Do I need my own API keys?",
      answer:
        "Yes. Breadstick is BYOK for Anthropic, kie.ai, ElevenLabs, and the rest of your stack. That is the point: you own the pipeline and the spend.",
    },
    {
      question: "Is this just another wrapper?",
      answer:
        "No. The value is the harness: editing canvas, deterministic gates, scoreboard, ledger, and the node system that wires the creator stack together.",
    },
    {
      question: "How do I get in?",
      answer: "Join the Skool. That is the gateway to the app, the recipes, the tutorial track, and the operator room.",
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

function StickyCta() {
  return (
    <aside className="breadstick-sticky-buy-bar" aria-label="Join Breadstick">
      <div className="breadstick-sticky-product">
        <PixelBreadstick size="small" />
        <div>
          <strong>Breadstick is free.</strong>
          <span>Community, harness, recipes, and the operator room.</span>
        </div>
      </div>
      <a className="breadstick-pixel-button breadstick-pixel-button-gold" href={joinHref}>
        {joinCtaLabel}
      </a>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="breadstick-site-footer">
      <a className="breadstick-brand-mark" href="#top" aria-label="Back to top">
        <PixelBreadstick size="tiny" />
        <span>Breadstick</span>
      </a>
      <p>Free BYOK content pipeline. Bring your keys. Own your work.</p>
      <nav aria-label="Footer navigation">
        <a href="#priority-grid">Features</a>
        <a href="#faq">FAQ</a>
        <a href={joinHref}>{joinCtaLabel}</a>
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
