import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      
      // Past the core hero headline statement
      if (currentScroll > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute scroll rotation angle for monogram wobble
  const rotationAngle = Math.sin(scrollY * 0.015) * 8;

  // 3 preset hand-sketched marker variants of 'AR' monogram with double ticks above 'R'
  // to give a frame-by-frame living sketch effect as the user scrolls
  const sketchPaths = [
    // Variant A
    "M 10,32 L 15,10 C 15,10 17,6 20,6 C 23,6 24,10 24,14 L 24,32 M 13,22 L 23,22 M 24,20 C 24,20 28,14 32,14 C 36,14 38,17 36,22 C 34,27 30,32 30,32 L 35,32 M 34,10 L 36,6 M 38,12 L 40,8",
    // Variant B (slightly nudged)
    "M 10.5,31.5 L 14.8,10.2 C 14.8,10.2 16.9,6.2 19.8,6.2 C 22.8,6.2 23.8,10.2 23.8,13.8 L 24.2,31.8 M 13.5,21.8 L 22.8,22.2 M 24.2,19.8 C 24.2,19.8 28.2,13.8 32.2,13.8 C 35.8,13.8 37.8,16.8 35.8,21.8 C 33.8,26.8 29.8,31.8 29.8,31.8 L 34.8,32.2 M 33.8,10.2 L 35.8,6.2 M 37.8,12.2 L 39.8,8.2",
    // Variant C (slightly nudged other way)
    "M 9.5,32.5 L 15.2,9.8 C 15.2,9.8 17.1,5.8 20.2,5.8 C 23.2,5.8 24.2,9.8 24.2,14.2 L 23.8,32.2 M 12.5,22.2 L 23.2,21.8 M 23.8,20.2 C 23.8,20.2 27.8,14.2 31.8,14.2 C 36.2,14.2 38.2,17.2 36.2,22.2 C 34.2,27.2 30.2,32.2 30.2,32.2 L 35.2,31.8 M 34.2,9.8 L 36.2,5.8 M 38.2,11.8 L 40.2,7.8"
  ];

  // Cycles sketch paths relative to scroll movement to create organic drawing effect
  const currentPathIndex = Math.floor(scrollY / 15) % sketchPaths.length;
  const currentPath = sketchPaths[currentPathIndex];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Small tactical delay before actual scroll redirects to showcase the active compression state
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <header className="navbar-glass-bg">
        <div className="navbar-content">
          
          {/* LEFT SIDE: THE DYNAMIC NAKED 'AR' SIGNATURE */}
          <div className="navbar-logo-container">
            <div 
              className="navbar-logo-naked"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            >
              <svg viewBox="0 0 46 42" className="navbar-logo-svg">
                <path 
                  d={currentPath}
                  stroke="rgba(30, 30, 36, 0.45)" 
                  strokeWidth="3.2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
          </div>

          {/* RIGHT SIDE: WOBBLY TABS */}
          <nav className="navbar-links">
            
            {/* Tab 1: "My Work" */}
            <a 
              href="#work-section" 
              className="nav-capsule work-btn"
              onClick={(e) => handleScrollTo(e, 'work-section')}
            >
              {/* Hand-drawn Asterisk/Starburst Icon */}
              <svg className="nav-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <line x1="7" y1="17" x2="17" y2="7"></line>
              </svg>
              <span>My Work</span>
            </a>

            {/* Tab 2: "How I Think" */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-capsule think-btn"
            >
              {/* Hand-drawn speech bubble icon */}
              <svg className="nav-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 20,10 C 20,6 16,3 12,3 C 8,3 4,6 4,10 C 4,12 5,14 7,16 L 6,20 L 11,18 C 12,18 12,18 12,18 C 16,18 20,14 20,10 Z" />
              </svg>
              <span>How I Think</span>
            </a>

            {/* Tab 3: "LinkedIn" */}
            <a 
              href="https://linkedin.com/in/shrutikeshri09" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-capsule linkedin-btn"
            >
              {/* LinkedIn vector icon with white square backdrop */}
              <svg className="nav-icon-linkedin" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="#FFFFFF" />
                <path d="M9 17V10H7v7h2zm-1-8.2c.7 0 1.2-.5 1.2-1.2S8.7 6.4 8 6.4 6.8 6.9 6.8 7.6 7.3 8.8 8 8.8zM17 17v-4.2c0-2.2-1.2-3.2-2.7-3.2-1.2 0-1.8.7-2.1 1.2v-1H10v7.2h2.2v-4c0-.2 0-.4.1-.6.2-.4.6-.9 1.2-.9 1 0 1.4.8 1.4 2v3.5H17z" fill="var(--primary-charcoal)" />
              </svg>
              <span>LinkedIn</span>
            </a>

          </nav>

        </div>
      </header>
    </div>
  );
}
