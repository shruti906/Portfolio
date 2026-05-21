import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const mouseCoords = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      mouseCoords.x = e.clientX;
      mouseCoords.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const updateEyes = () => {
      // Follow spring-physics cursor follower coordinates if available, otherwise mouse
      const targetX = (window.__customCursorCoords && window.innerWidth > 768)
        ? window.__customCursorCoords.x
        : mouseCoords.x;
      const targetY = (window.__customCursorCoords && window.innerWidth > 768)
        ? window.__customCursorCoords.y
        : mouseCoords.y;

      const trackEye = (eyeEl, pupilEl) => {
        if (!eyeEl || !pupilEl) return;
        const rect = eyeEl.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const vx = targetX - eyeCenterX;
        const vy = targetY - eyeCenterY;
        const dist = Math.sqrt(vx * vx + vy * vy);

        // Constrained maximum movement of pupil in pixels (clamped to eyeball boundary)
        const maxMove = 3.5;
        let dx = 0;
        let dy = 0;

        if (dist > 0) {
          const ratio = Math.min(maxMove / dist, 1);
          dx = vx * ratio;
          dy = vy * ratio;
        }

        pupilEl.style.transform = `translate(${dx}px, ${dy}px)`;
      };

      trackEye(leftEyeRef.current, leftPupilRef.current);
      trackEye(rightEyeRef.current, rightPupilRef.current);

      animationFrameId = requestAnimationFrame(updateEyes);
    };

    animationFrameId = requestAnimationFrame(updateEyes);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header className="hero-section">
      <div className="hero-intro">
        <span className="handwritten">Hi, I'm</span>{' '}
        <span className="badge lavender">Shruti Keshri 🚀</span>
      </div>
      
      <h1 className="hero-headline">
        <span className="hero-word" style={{ animationDelay: '0.00s' }}>I</span>{' '}
        <span className="hero-word" style={{ animationDelay: '0.05s' }}>blend</span>{' '}
        <span className="marker-highlight">
          <span className="hero-word" style={{ animationDelay: '0.10s' }}>Data</span>{' '}
          <span className="hero-word" style={{ animationDelay: '0.15s' }}>Science</span>{' '}
          <span className="hero-word" style={{ animationDelay: '0.20s' }}>&</span>{' '}
          <span className="hero-word" style={{ animationDelay: '0.25s' }}>AI</span>
        </span>{' '}
        <span className="hero-word" style={{ animationDelay: '0.30s' }}>with</span>{' '}
        <span className="marker-highlight">
          <span className="hero-word" style={{ animationDelay: '0.35s' }}>Full-Stack</span>{' '}
          <span className="hero-word" style={{ animationDelay: '0.40s' }}>Development</span>
        </span>{' '}
        <span className="hero-word" style={{ animationDelay: '0.45s' }}>to</span>{' '}
        <span className="hero-word" style={{ animationDelay: '0.50s' }}>build</span>{' '}
        <span className="hero-word" style={{ animationDelay: '0.55s' }}>systems</span>{' '}
        <span className="hero-word" style={{ animationDelay: '0.60s' }}>that</span>{' '}
        <span className="rust-text">
          <span className="hero-word" style={{ animationDelay: '0.65s' }}>actually</span>{' '}
          <span className="hero-word" style={{ animationDelay: '0.70s' }}>work</span>
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
            
            {/* Left Eye */}
            <circle ref={leftEyeRef} cx="40" cy="40" r="8" stroke="#1E1E24" strokeWidth="3" fill="#FFFFFF" />
            <circle ref={leftPupilRef} cx="40" cy="40" r="3.5" fill="#1E1E24" />
            
            {/* Right Eye */}
            <circle ref={rightEyeRef} cx="60" cy="40" r="8" stroke="#1E1E24" strokeWidth="3" fill="#FFFFFF" />
            <circle ref={rightPupilRef} cx="60" cy="40" r="3.5" fill="#1E1E24" />
            
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
