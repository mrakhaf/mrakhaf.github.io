"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = ["a Software Engineer.", "a DJ, too.", "always building."];

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/mrakhaf",
    className: "social-ig",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@mrakhaf",
    className: "social-yt",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9.2v5.6l5-2.8-5-2.8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mrakhaf",
    className: "social-li",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/mrakhaf",
    className: "social-gh",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
];

function useTypewriter(words: string[]) {
  const [typed, setTyped] = useState("");
  const state = useRef({ word: 0, char: 0, deleting: false });

  useEffect(() => {
    let alive = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!alive) return;
      const s = state.current;
      const word = words[s.word];
      s.char += s.deleting ? -1 : 1;
      setTyped(word.slice(0, s.char));

      let delay = s.deleting ? 40 : 75;
      if (!s.deleting && s.char === word.length) {
        s.deleting = true;
        delay = 1600;
      } else if (s.deleting && s.char === 0) {
        s.deleting = false;
        s.word = (s.word + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    tick();
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [words]);

  return typed;
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const typed = useTypewriter(ROLES);

  return (
    <div className={`banner-root${theme === "dark" ? " dark" : ""}`}>
      <button
        className="theme-toggle"
        aria-label="Toggle theme"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      >
        <svg style={{ display: "var(--show-moon,block)" }} width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <svg style={{ display: "var(--show-sun,none)" }} width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
          <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div className="aurora" aria-hidden="true">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
        <div className="blob blob-d" />
      </div>

      <div className="stage">
        <div className="intro">
          <div className="badge">
            <span className="badge-dot" />
            <span>Open to collaboration</span>
          </div>

          <h1 className="name">
            Muhammad
            <br />
            Rakha Firdaus
          </h1>

          <div className="role">
            <span className="role-lead">I&apos;m&nbsp;</span>
            <span className="role-word">{typed}</span>
            <span className="role-caret" />
          </div>

          <p className="tagline">
            Building thoughtful software, and the occasional set that fills the floor.
          </p>

          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={`social-btn ${s.className}`}>
                {s.icon}
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="portrait">
          <div className="portrait-glow" aria-hidden="true" />
          <div className="deck" aria-hidden="true">
            <div className="deck-tilt">
              <svg className="deck-vinyl" viewBox="0 0 200 200">
                <defs>
                  <radialGradient id="vinyl-disc" cx="42%" cy="38%" r="75%">
                    <stop offset="0" stopColor="#33334d" />
                    <stop offset="0.45" stopColor="#1a1a2e" />
                    <stop offset="1" stopColor="#080810" />
                  </radialGradient>
                  <radialGradient id="vinyl-label" cx="40%" cy="35%" r="75%">
                    <stop offset="0" stopColor="#fcd34d" />
                    <stop offset="0.55" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#b45309" />
                  </radialGradient>
                  <linearGradient id="vinyl-rim" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(255,255,255,0.55)" />
                    <stop offset="0.5" stopColor="rgba(255,255,255,0)" />
                    <stop offset="1" stopColor="rgba(0,0,0,0.5)" />
                  </linearGradient>
                  <path id="vinyl-top" d="M 100 100 m -26 0 a 26 26 0 1 1 52 0" />
                </defs>
                <circle cx="100" cy="100" r="99" fill="url(#vinyl-disc)" />
                <circle cx="100" cy="100" r="98.5" fill="none" stroke="url(#vinyl-rim)" strokeWidth="2" />
                {[92, 84, 76, 68, 60, 52, 44].map((r) => (
                  <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
                ))}
                <line x1="100" y1="100" x2="100" y2="6" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" />
                <circle cx="100" cy="100" r="35" fill="#0d0e1c" />
                <circle cx="100" cy="100" r="34" fill="url(#vinyl-label)" />
                <circle cx="88" cy="86" r="10" fill="rgba(255,255,255,0.25)" />
                <text className="vinyl-text" textAnchor="middle">
                  <textPath href="#vinyl-top" startOffset="50%">NOW SPINNING</textPath>
                </text>
                <circle cx="100" cy="100" r="6" fill="#0d0e1c" />
              </svg>
              <div className="deck-sheen" />
            </div>
          </div>
          <div className="portrait-float">
            <div className="portrait-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/rakha.jpg" alt="Muhammad Rakha Firdaus" />
            </div>
            <div className="chip chip-code">&lt;/&gt; &nbsp;Code</div>
            <div className="chip chip-decks">♫&nbsp; On the decks</div>
          </div>
        </div>
      </div>
    </div>
  );
}
