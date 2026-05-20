import React from 'react';

export default function Toolkit() {
  const stickers = [
    { text: 'Python 🐍', type: 'rust', rot: '-3deg' },
    { text: 'React ⚛️', type: 'sage', rot: '2deg' },
    { text: 'n8n Automation 🤖', type: 'lavender', rot: '-1deg' },
    { text: 'C++ 💻', type: '', rot: '4deg' },
    { text: 'Node.js 🟢', type: 'sage', rot: '-2deg' },
    { text: 'Hugging Face 🤗', type: 'lavender', rot: '3deg' },
    { text: 'RAG Systems 🔍', type: 'rust', rot: '-4deg' },
    { text: 'FastAPI ⚡', type: '', rot: '1deg' },
    { text: 'Express 📂', type: 'sage', rot: '2deg' },
    { text: 'PostgreSQL 🐘', type: 'lavender', rot: '-2deg' },
    { text: 'NLP 🧠', type: 'rust', rot: '3deg' },
    { text: 'JavaScript 💛', type: '', rot: '-1deg' },
    { text: 'MySQL 🐬', type: 'sage', rot: '4deg' },
    { text: 'MongoDB 🍃', type: 'lavender', rot: '-3deg' },
    { text: 'LLM Integrations 🔮', type: 'rust', rot: '1deg' }
  ];

  const timelineNodes = [
    { label: 'Why', style: { left: '5%', top: '50%' } },
    { label: 'What', style: { left: '28%', top: '25%' } },
    { label: 'How', style: { left: '50%', top: '75%' } },
    { label: 'AI', style: { left: '72%', top: '30%' } },
    { label: 'Components', style: { left: '95%', top: '60%' } }
  ];

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="section-title-wrapper">
        <h2 className="section-title">
          The Toolkit 🛠️
          <svg className="svg-annotation circle-annotation" viewBox="0 0 200 80" preserveAspectRatio="none">
            <path d="M10,40 C10,15 90,8 180,15 C200,30 180,65 90,70 C10,70 5,50 10,40" stroke="#C84B31" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
        </h2>
      </div>

      <div className="skills-sandbox-grid">
        {/* Sticker Sheet Card */}
        <div className="flat-card sandbox-card span-2">
          <div className="starburst-sticker">I EXPERIMENT<br />A LOT</div>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '20px' }}>The Sticker Sheet</h3>
          <p className="handwritten" style={{ fontSize: '1.1rem', color: 'var(--rust-red)', marginBottom: '24px', maxWidth: '80%' }}>
            "Experiments help me learn fast, de-risk decisions, and find the version that actually works for real people."
          </p>
          <div className="sticker-sheet">
            {stickers.map((sticker, idx) => (
              <div 
                key={idx} 
                className={`sticker ${sticker.type}`} 
                style={{ '--rot': sticker.rot }}
              >
                {sticker.text}
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Timeline Card */}
        <div className="flat-card sandbox-card">
          <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Execution Blueprint</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>How I structure my workflow to execute end-to-end.</p>
          
          <div className="timeline-graph-container">
            <svg className="timeline-svg">
              {/* Smooth curved timeline line passing through nodes */}
              <path d="M 10 80 Q 75 20 135 120 T 260 80" />
            </svg>
            <div className="timeline-nodes">
              {timelineNodes.map((node, idx) => (
                <div 
                  key={idx} 
                  className="timeline-node-item" 
                  style={node.style}
                >
                  <div className="timeline-node-dot"></div>
                  <span className="timeline-node-label">{node.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
