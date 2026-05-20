import React from 'react';

export default function BlueprintDisplay({
  tint,
  fontWeight,
  showCredentials,
  darkMode
}) {
  // Styles based on dark/light mode switches (Checked darkSwitch = Light Mode simulation)
  const windowStyle = darkMode ? {
    backgroundColor: '#FFFFFF',
    color: '#1E1E24',
    borderColor: '#1E1E24'
  } : {
    backgroundColor: '#121214',
    color: '#FFFFFF'
  };

  const titleStyle = {
    fontWeight: fontWeight,
    color: darkMode ? '#1E1E24' : '#FFFFFF'
  };

  const descStyle = {
    color: darkMode ? '#555555' : '#ABB2BF'
  };

  const awardItemStyle = darkMode ? {
    backgroundColor: '#F9F9F9',
    borderColor: '#CCC'
  } : {
    backgroundColor: '#1E1E24',
    borderColor: '#444'
  };

  // High School Credentials styles
  const highSchoolStyle = {
    display: showCredentials ? 'block' : 'none',
    animation: showCredentials ? 'fadeSlide 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards' : 'none'
  };

  return (
    <div className="blueprint-display">
      <div className="editor-window" id="education-editor-window" style={windowStyle}>
        <div className="editor-header">
          <div className="editor-tab-row">
            <span className="editor-tab active" id="tab-education">education_blueprint.json</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: 'bold' }}>JSON READ ONLY</span>
        </div>
        <div className="editor-body">
          {/* B.Tech */}
          <div className="editor-item">
            <div className="editor-meta" style={{ color: tint }}>B.Tech - 2023 to Present</div>
            <div className="editor-title" id="edu-card-1" style={titleStyle}>BML Munjal University</div>
            <div className="editor-desc" style={descStyle}>Computer Science Engineering — Specialisation in Data Science & AI</div>
            <div className="editor-subdesc">CGPA: 7.00</div>
          </div>

          {/* Experience (AI Intern @ Verto) */}
          <div className="editor-item">
            <div className="editor-meta" style={{ color: tint }}>Work Experience - June 2025 to July 2025</div>
            <div className="editor-title" style={titleStyle}>Verto Solutions Limited — AI Intern</div>
            <div className="editor-desc" style={descStyle}>Architected AI-driven CV automation matching system, parser pipelines, and scaled workflow automations integrating LLMs.</div>
          </div>

          {/* High School (Toggled via Figma panel) */}
          <div className="editor-item" id="high-school-credentials" style={highSchoolStyle}>
            <div className="editor-meta" style={{ color: tint }}>Higher Secondary — 2021 to 2023</div>
            <div className="editor-title" style={titleStyle}>CBSE Science High School (Patna)</div>
            <div className="editor-desc" style={descStyle}>Score Average: 82.3%</div>
          </div>

          {/* Awards */}
          <div className="editor-item">
            <div className="editor-meta" style={{ color: tint }}>Awards & Recognition</div>
            <div className="award-item" style={awardItemStyle}>
              <strong style={{ color: tint }}>Smart India Hackathon (SIH) 2025</strong><br />
              <span style={{ fontSize: '0.85rem', color: darkMode ? '#555555' : '#ABB2BF' }}>2nd Runner-Up at the college level.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
