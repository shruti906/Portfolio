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
          
          {/* LEFT SIDE: THE DYNAMIC NAKED SIGNATURE */}
          <div className="navbar-logo-container">
            <div 
              className="navbar-logo-naked"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            >
              <svg viewBox="0 0 46 42" className="navbar-logo-svg">
                <path 
                  d={currentPath}
                  stroke="var(--primary-charcoal)" 
                  strokeWidth="3.2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
          </div>

          {/* RIGHT SIDE: MINIMALIST TABS */}
          <nav className="navbar-links">
            
            {/* Tab 1: "My Work" */}
            <a 
              href="#work-section" 
              className="nav-capsule work-btn"
              onClick={(e) => handleScrollTo(e, 'work-section')}
            >
              {/* Micro Search / Grid Icon */}
              <svg className="nav-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>My Work</span>
            </a>

            {/* Tab 2: "Resume" */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-capsule resume-btn"
            >
              <span>Resume</span>
              {/* Tiny External Link Arrow Icon */}
              <svg className="nav-icon-arrow" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>

            {/* Tab 3: "Contact Me" */}
            <a 
              href="#contact-section" 
              className="nav-capsule contact-btn"
              onClick={(e) => handleScrollTo(e, 'contact-section')}
            >
              {/* Tiny Hand-Drawn Swirling Loop Icon */}
              <svg className="nav-swirl-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--rust-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 4,12 C 4,6 9,6 12,12 C 15,18 20,18 20,12 C 20,6 15,6 12,12 C 9,18 4,18 4,12 Z" />
              </svg>
              <span>Contact Me</span>
            </a>

          </nav>

        </div>
      </header>
    </div>
  );
}
