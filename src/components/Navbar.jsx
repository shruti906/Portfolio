import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      
      // Past the core hero headline statement (about 250px)
      if (currentScroll > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute rotation angle based on scroll (wobbles back and forth between -10deg and +10deg)
  const rotationAngle = Math.sin(scrollY * 0.015) * 12;

  // Toggle between 3 preset handwritten "sk" sketch paths to create a frame-by-frame "living" sketch effect
  const sketchPaths = [
    // Variant A
    "M 12,28 C 12,28 17,14 20,10 C 23,6 27,6 27,10 C 27,14 18,22 17,25 C 16,28 12,32 10,29 C 8,26 14,18 19,14 C 24,10 28,10 30,14 M 26,10 C 26,10 25,28 25,32 C 25,34 27,36 29,32 M 34,14 C 34,14 28,20 25,22 C 27,24 31,28 35,32",
    // Variant B
    "M 13,29 C 13,29 18,15 21,11 C 24,7 28,7 28,11 C 28,15 19,23 18,26 C 17,29 13,33 11,30 C 9,27 15,19 20,15 C 25,11 29,11 31,15 M 27,11 C 27,11 26,29 26,33 C 26,35 28,37 30,33 M 35,15 C 35,15 29,21 26,23 C 28,25 32,29 36,33",
    // Variant C
    "M 11,27 C 11,27 16,13 19,9 C 22,5 26,5 26,9 C 26,13 17,21 16,24 C 15,27 11,31 9,28 C 7,25 13,17 18,13 C 23,9 27,9 29,13 M 25,9 C 25,9 24,27 24,31 C 24,31 26,35 28,31 M 33,13 C 33,13 27,19 24,21 C 26,23 30,27 34,31"
  ];

  // Pick sketch path based on scroll speed increments to give "living sketch" feel
  const currentPathIndex = Math.floor(scrollY / 12) % sketchPaths.length;
  const currentPath = sketchPaths[currentPathIndex];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Tactile delay before actual redirect to allow compression physics animation to showcase
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <header className="navbar-glass-bg">
        <div className="navbar-content">
          
          {/* LEFT SIDE: THE DYNAMIC LOGO/SIGNATURE */}
          <div className="navbar-logo-container">
            <div 
              className="navbar-logo-badge"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            >
              {/* Organic hand-drawn outer loop */}
              <svg viewBox="0 0 50 50" className="navbar-logo-svg">
                <path 
                  d="M 25,4 Q 38,5 45,18 Q 48,34 38,43 Q 23,48 10,40 Q 3,28 8,15 Q 12,3 25,4 Z" 
                  stroke="var(--primary-charcoal)" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  className="logo-outer-circle"
                />
                <path 
                  d={currentPath}
                  stroke="var(--primary-charcoal)" 
                  strokeWidth="3.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            <span className="logo-text handwritten">sk.</span>
          </div>

          {/* RIGHT SIDE: STICKER NAVIGATION LINKS */}
          <nav className="navbar-links">
            {/* 1. "My Work" Button */}
            <a 
              href="#work-section" 
              className="nav-sticker work-btn"
              onClick={(e) => handleScrollTo(e, 'work-section')}
            >
              {/* Custom Search/Grid Vector Icon */}
              <svg className="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>My Work</span>
            </a>

            {/* 2. "How I Think" (Resume) Button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-sticker resume-btn"
            >
              <span>How I Think</span>
              <svg className="nav-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            {/* 3. "Contact" Button */}
            <a 
              href="#contact-section" 
              className="nav-sticker contact-btn"
              onClick={(e) => handleScrollTo(e, 'contact-section')}
            >
              {/* Tiny official brand monogram logo icon */}
              <svg className="nav-icon-logo" width="18" height="18" viewBox="0 0 50 50">
                <path 
                  d="M 25,4 Q 38,5 45,18 Q 48,34 38,43 Q 23,48 10,40 Q 3,28 8,15 Q 12,3 25,4 Z" 
                  stroke="var(--rust-red)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round" 
                />
                <path 
                  d="M 12,28 C 12,28 17,14 20,10 C 23,6 27,6 27,10 C 27,14 18,22 17,25 C 16,28 12,32 10,29" 
                  stroke="var(--rust-red)" 
                  strokeWidth="4" 
                  fill="none" 
                  strokeLinecap="round" 
                />
              </svg>
              <span>Contact</span>
            </a>
          </nav>

        </div>
      </header>
    </div>
  );
}
