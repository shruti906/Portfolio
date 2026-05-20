import React from 'react';

export default function Hero() {
  return (
    <header className="hero-section">
      <div className="hero-intro">
        <span className="handwritten">Hi, I'm</span>{' '}
        <span className="badge lavender">Shruti Keshri 🚀</span>
      </div>
      
      <h1 className="hero-headline">
        I blend <span className="marker-highlight">Data Science & AI</span> with <span className="marker-highlight">Full-Stack Development</span> to build systems that actually{' '}
        <span className="rust-text">
          work
          <svg className="svg-annotation" viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M5,15 C50,2 150,2 195,15 C150,18 50,18 5,15" stroke="#C84B31" strokeWidth="4" fill="none" />
          </svg>
        </span>
      </h1>

      <div className="hero-meta-row">
        <div className="badge sage">AI Intern @ Verto Solutions</div>
        <div className="badge lavender">SIH 2025 Runner-Up</div>
        <div className="badge rust">BML Munjal Univ '27</div>
      </div>

      <div className="hero-interactive-trigger">
        <div className="avatar-character">
          {/* Stylized hand-drawn face SVG */}
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="45" r="30" stroke="#1E1E24" strokeWidth="3" fill="none" />
            {/* Eyes */}
            <circle cx="40" cy="40" r="4" fill="#1E1E24" />
            <circle cx="60" cy="40" r="4" fill="#1E1E24" />
            {/* Cute Smile */}
            <path d="M40,55 Q50,65 60,55" stroke="#1E1E24" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Hair bangs */}
            <path d="M20,40 Q50,15 80,40" stroke="#1E1E24" strokeWidth="3" fill="none" />
            <path d="M15,45 L20,35 M85,45 L80,35" stroke="#1E1E24" strokeWidth="3" />
          </svg>
        </div>
        <div className="hero-arrow-container">
          <span className="handwritten">Okay so... how do I do that?</span>
          <svg className="wiggle-arrow" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C84B31" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </header>
  );
}
