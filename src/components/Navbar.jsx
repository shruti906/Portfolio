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

  // 3 preset hand-sketched marker variants of 'SK' monogram to give a frame-by-frame living sketch effect
  const sketchPaths = [
    // Variant A
    "M 12,28 C 12,28 17,14 20,10 C 23,6 27,6 27,10 C 27,14 18,22 17,25 C 16,28 12,32 10,29 C 8,26 14,18 19,14 C 24,10 28,10 30,14 M 26,10 C 26,10 25,28 25,32 C 25,34 27,36 29,32 M 34,14 C 34,14 28,20 25,22 C 27,24 31,28 35,32",
    // Variant B
    "M 13,29 C 13,29 18,15 21,11 C 24,7 28,7 28,11 C 28,15 19,23 18,26 C 17,29 13,33 11,30 C 9,27 15,19 20,15 C 25,11 29,11 31,15 M 27,11 C 27,11 26,29 26,33 C 26,35 28,37 30,33 M 35,15 C 35,15 29,21 26,23 C 28,25 32,29 36,33",
    // Variant C
    "M 11,27 C 11,27 16,13 19,9 C 22,5 26,5 26,9 C 26,13 17,21 16,24 C 15,27 11,31 9,28 C 7,25 13,17 18,13 C 23,9 27,9 29,13 M 25,9 C 25,9 24,27 24,31 C 24,31 26,35 28,31 M 33,13 C 33,13 27,19 24,21 C 26,23 30,27 34,31"
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
          
          {/* LEFT SIDE: THE DYNAMIC NAKED 'SK' SIGNATURE */}
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
              <span>My Work</span>
            </a>

            {/* Tab 2: "Resume" */}
            <a 
              href="/Final_Resume (1).pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-capsule resume-btn"
            >
              <span>Resume</span>
              {/* Sleek External Link Arrow Icon */}
              <svg className="nav-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '1px' }}>
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
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
