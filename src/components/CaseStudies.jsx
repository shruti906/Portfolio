import React from 'react';

export default function CaseStudies() {
  return (
    <section id="work-section">
      <div className="section-title-wrapper projects-main-title">
        <h2 className="section-title">
          Featured Projects
          <svg className="svg-annotation circle-annotation" viewBox="0 0 200 80" preserveAspectRatio="none">
            <path d="M10,40 C10,15 90,8 180,15 C200,30 180,65 90,70 C10,70 5,50 10,40" stroke="#C84B31" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </h2>
        
        {/* Minimal line-art character / indicator at the top pointing downward with hand-drawn underline */}
        <div className="section-entry-indicator">
          <span className="entry-pointing-character">👇</span>
          <span className="entry-text">
            Here's how
            <svg className="svg-annotation svg-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M5,5 Q50,9 95,5" stroke="#C84B31" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="case-studies-grid">
        {/* Case Study 1: Swap Station */}
        <div className="case-study-row">
          <div className="case-study-details">
            <div className="case-study-header">
              <span className="badge rust">Active</span>
              <span className="badge sage">Jan 2026 - Present</span>
            </div>
            
            <h3 className="case-study-title">Swap Station — Smart EV Ops</h3>
            
            {/* Metadata Tags (Year & Domain) */}
            <div className="case-study-metadata">
              2026 | AI, Product Design, Research
            </div>
            
            <p className="case-study-description">
              Built a high-performance real-time EV swap-station monitoring system featuring intelligent AI automation and live synthetic telemetry simulation pipelines.
            </p>
            <ul className="case-study-bullets">
              <li>Designed AI-driven anomaly triggering rules for battery pack state-of-health diagnostics.</li>
              <li>Created a high-fidelity React + Node.js dashboard connected with mock continuous data flows.</li>
              <li>Enabled operational alerts to automate fast de-risking for on-ground mechanics.</li>
            </ul>
            <div className="case-study-tech">
              <span className="badge lavender">Python</span>
              <span className="badge lavender">Node.js</span>
              <span className="badge lavender">React.js</span>
              <span className="badge lavender">REST APIs</span>
              <span className="badge lavender">Real-time Data</span>
            </div>
            <div className="case-study-links">
              <a href="https://github.com/Sachin007-lgtm/Swap_Station" target="_blank" rel="noopener noreferrer" className="flat-btn">
                View Code
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://swap-station-eta.vercel.app" target="_blank" rel="noopener noreferrer" className="flat-btn primary">
                Live Demo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Crisp Rectangle Mockup Canvas Container with rounded corners and looping video */}
          <div className="case-study-preview">
            {/* Reading Time absolute tilted tag overlay on card edge */}
            <div className="reading-time-badge tilted-pill lime-green">
              ⏱️ 5m Read
            </div>
            
            <div className="mockup-media-canvas">
              <video 
                className="project-mockup-video"
                src="https://assets.mixkit.co/videos/preview/mixkit-typing-code-on-a-laptop-42171-large.mp4"
                poster="/swap-station.png"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>

        {/* Case Study 2: Joblyt */}
        <div className="case-study-row reversed">
          <div className="case-study-details">
            <div className="case-study-header">
              <span className="badge lavender">Completed</span>
              <span className="badge sage">June 2025 - July 2025</span>
            </div>
            
            <h3 className="case-study-title">Joblyt — AI Recruitment Assistant</h3>
            
            {/* Metadata Tags (Year & Domain) */}
            <div className="case-study-metadata">
              2025 | AI, NLP, Web Applications
            </div>
            
            <p className="case-study-description">
              Developed an AI-driven JD-CV match ranking application designed to automate matching pipelines, score accuracy, and index candidate properties.
            </p>
            <ul className="case-study-bullets">
              <li>Integrated NLP models to handle semantic matching scoring across multi-format resumes.</li>
              <li>Created custom automated candidate ranking metrics to de-risk recruiting pipelines.</li>
              <li>Built clean interfaces in React + JavaScript with robust Python backend scoring scripts.</li>
            </ul>
            <div className="case-study-tech">
              <span className="badge lavender">Python</span>
              <span className="badge lavender">React</span>
              <span className="badge lavender">NLP</span>
              <span className="badge lavender">Resume Parsing</span>
              <span className="badge lavender">Semantic Search</span>
            </div>
            <div className="case-study-links">
              <a href="https://github.com/Sachin007-lgtm/Joblyt" target="_blank" rel="noopener noreferrer" className="flat-btn">
                View Code
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://joblyt.vercel.app" target="_blank" rel="noopener noreferrer" className="flat-btn primary">
                Live Demo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Crisp Rectangle Mockup Canvas Container with rounded corners and looping video */}
          <div className="case-study-preview">
            {/* Reading Time absolute tilted tag overlay on card edge */}
            <div className="reading-time-badge tilted-pill purple-badge">
              ⏱️ 3m Read
            </div>
            
            <div className="mockup-media-canvas">
              <video 
                className="project-mockup-video"
                src="https://assets.mixkit.co/videos/preview/mixkit-cyber-security-dashboard-with-graphs-and-data-49033-large.mp4"
                poster="/joblyt.png"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footnote sketch at the base */}
      <div className="projects-footnote-wrapper">
        <div className="projects-footnote handwritten">
          <svg className="svg-pencil animate-draw-pencil" viewBox="0 0 24 24" fill="none" stroke="#C84B31" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
          <span className="footnote-text">...with more in the works</span>
        </div>
      </div>
    </section>
  );
}
