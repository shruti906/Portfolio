import React from 'react';

export default function CaseStudies() {
  return (
    <section id="work-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          Featured Projects
          <svg className="svg-annotation circle-annotation" viewBox="0 0 200 80" preserveAspectRatio="none">
            <path d="M10,40 C10,15 90,8 180,15 C200,30 180,65 90,70 C10,70 5,50 10,40" stroke="#C84B31" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </h2>
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
              <a href="https://github.com/shrutikeshri111" target="_blank" rel="noopener noreferrer" className="flat-btn primary">
                View Code
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* CSS-based Dashboard Representation */}
          <div className="case-study-preview">
            <div className="mockup-container">
              <div className="mockup-header">
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span className="mockup-title-bar">ev-swap-ops-dashboard.shrutikeshri.com</span>
              </div>
              <div className="mockup-body">
                <div className="dashboard-grid">
                  <div className="dashboard-panel">
                    <div className="panel-title">Operational Status</div>
                    <div className="panel-val" style={{ color: '#27C93F' }}>ONLINE</div>
                  </div>
                  <div className="dashboard-panel">
                    <div className="panel-title">Active Stations</div>
                    <div className="panel-val">42 / 42</div>
                  </div>
                  <div className="dashboard-panel full">
                    <div className="panel-title">AI Decision Analytics: Anomaly Diagnostics</div>
                    <div className="chart-bar-container">
                      <div className="chart-row">
                        <span>BAT-102</span>
                        <div className="chart-fill-bg">
                          <div className="chart-fill" style={{ width: '92%' }}></div>
                        </div>
                        <span>92%</span>
                      </div>
                      <div className="chart-row">
                        <span>SYS-TEMP</span>
                        <div className="chart-fill-bg">
                          <div className="chart-fill blue" style={{ width: '45%' }}></div>
                        </div>
                        <span>45%</span>
                      </div>
                      <div className="chart-row">
                        <span>CYC-DEG</span>
                        <div className="chart-fill-bg">
                          <div className="chart-fill" style={{ width: '78%', backgroundColor: 'var(--lavender)' }}></div>
                        </div>
                        <span>78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <a href="https://github.com/shrutikeshri111" target="_blank" rel="noopener noreferrer" className="flat-btn primary">
                View Code
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* CSS-based Dashboard Representation */}
          <div className="case-study-preview">
            <div className="mockup-container">
              <div className="mockup-header">
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span className="mockup-title-bar">joblyt-matching.shrutikeshri.com</span>
              </div>
              <div className="mockup-body">
                <div className="dashboard-grid">
                  <div className="dashboard-panel full">
                    <div className="panel-title">JD Match Engine</div>
                    <div className="panel-val" style={{ fontSize: '1.1rem', color: '#FFF', marginBottom: '8px' }}>Semantic Accuracy Profile</div>
                    <div className="chart-bar-container">
                      <div className="chart-row">
                        <span>Candidate A</span>
                        <div className="chart-fill-bg">
                          <div className="chart-fill" style={{ width: '88%', backgroundColor: 'var(--rust-red)' }}></div>
                        </div>
                        <span>88%</span>
                      </div>
                      <div className="chart-row">
                        <span>Candidate B</span>
                        <div className="chart-fill-bg">
                          <div className="chart-fill" style={{ width: '95%', backgroundColor: '#27C93F' }}></div>
                        </div>
                        <span>95%</span>
                      </div>
                      <div className="chart-row">
                        <span>Candidate C</span>
                        <div className="chart-fill-bg">
                          <div className="chart-fill" style={{ width: '62%', backgroundColor: 'var(--lavender)' }}></div>
                        </div>
                        <span>62%</span>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-panel" style={{ gridColumn: 'span 2' }}>
                    <div className="panel-title">Semantic Scoring Details</div>
                    <span style={{ fontSize: '0.7rem', color: '#ABB2BF' }}>Skills Matched: Python, React, n8n, AI Integrations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
