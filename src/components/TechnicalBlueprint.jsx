import React, { useEffect, useRef } from 'react';

export default function TechnicalBlueprint() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Add smooth horizontal scrolling on mouse wheel
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 1.2;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const educationData = [
    {
      year: '2023 – Present',
      emoji: '🎓',
      institution: 'BML Munjal University',
      degree: 'B.Tech CSE — Data Science & AI',
      grade: 'CGPA: 7.00',
      color: 'rust',
      cardClass: 'card-rust',
      rot: '-1.5deg',
      stackRot: '-4deg',
      stackRotHover: '-7deg',
      stackBg: 'var(--lavender)'
    },
    {
      year: '2021 – 2023',
      emoji: '📜',
      institution: 'CBSE Science (Patna, Bihar)',
      degree: 'Class XII — 82.3%',
      grade: '',
      color: 'sage',
      cardClass: 'card-sage',
      rot: '1deg',
      stackRot: '3deg',
      stackRotHover: '5deg',
      stackBg: 'var(--rust-red)'
    },
    {
      year: '2011 – 2021',
      emoji: '📘',
      institution: 'ICSE (Patna, Bihar)',
      degree: 'Class X — 86%',
      grade: '',
      color: 'lavender',
      cardClass: 'card-lavender',
      rot: '-2deg',
      stackRot: '-3deg',
      stackRotHover: '-6deg',
      stackBg: 'var(--sage-green)'
    }
  ];

  return (
    <section className="education-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          Education
          <svg className="svg-annotation circle-annotation" viewBox="0 0 200 80" preserveAspectRatio="none">
            <path d="M10,40 C10,15 90,8 180,15 C200,30 180,65 90,70 C10,70 5,50 10,40" stroke="#C84B31" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
        </h2>
      </div>

      <div className="timeline-instructions handwritten">
        ← Scroll horizontally or use trackpad to explore →
      </div>

      <div 
        className="blueprint-horizontal-timeline" 
        ref={scrollContainerRef}
      >
        <div className="timeline-track-line"></div>
        
        <div className="timeline-cards-wrapper">
          {educationData.map((edu, idx) => (
            <div 
              key={idx} 
              className={`timeline-card-node ${edu.color}`}
              style={{ 
                '--rot': edu.rot,
                animationDelay: `${idx * 0.25}s`
              }}
            >
              {/* Animated connector dot */}
              <div className="timeline-connector-dot">
                <div className="pulse-ring"></div>
              </div>
              
              {/* Year Label */}
              <div className="timeline-chunky-year">
                {edu.year}
              </div>
              
              {/* Scrapbook Sticker Card Sibling Container */}
              <div className="scrapbook-card-container">
                <div 
                  className="scrapbook-card-stack"
                  style={{ 
                    '--stack-rot': edu.stackRot,
                    '--stack-rot-hover': edu.stackRotHover,
                    backgroundColor: edu.stackBg
                  }}
                ></div>
                <div 
                  className={`scrapbook-card ${edu.cardClass}`}
                >
                  <span className="card-emoji-header">{edu.emoji}</span>
                  <h3 className="neon-institution">{edu.institution}</h3>
                  <h4 className="neon-degree">{edu.degree}</h4>
                  {edu.grade && <div className="neon-grade">{edu.grade}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
