import React, { useEffect, useRef, useState } from 'react';

export default function Toolkit() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const stickers = [
    { text: 'Python 🐍', type: 'rust', rot: '-4deg' },
    { text: 'React ⚛️', type: '', rot: '3deg' },
    { text: 'n8n Automation 🤖', type: 'lavender', rot: '-2deg' },
    { text: 'C++ 💻', type: '', rot: '5deg' },
    { text: 'Node.js 🟢', type: 'sage', rot: '-3deg' },
    { text: 'Hugging Face 🤗', type: 'lavender', rot: '4deg' },
    { text: 'RAG Systems 🔍', type: 'rust', rot: '-5deg' },
    { text: 'FastAPI ⚡', type: '', rot: '2deg' },
    { text: 'Express 📂', type: 'sage', rot: '3deg' },
    { text: 'PostgreSQL 🐘', type: 'lavender', rot: '-3deg' },
    { text: 'NLP 🧠', type: 'rust', rot: '4deg' },
    { text: 'JavaScript 💛', type: '', rot: '-2deg' },
    { text: 'MySQL 🐬', type: 'sage', rot: '5deg' },
    { text: 'MongoDB 🍃', type: 'lavender', rot: '-4deg' },
    { text: 'LLM Integrations 🔮', type: 'rust', rot: '2deg' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return; // Disable interactive physics on touch devices
    const container = e.currentTarget;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const wrapperEls = container.querySelectorAll('.sticker-wrapper');
    wrapperEls.forEach((wrapper) => {
      const sticker = wrapper.querySelector('.sticker');
      if (!sticker) return;

      const rect = sticker.getBoundingClientRect();
      const cX = rect.left + rect.width / 2;
      const cY = rect.top + rect.height / 2;

      const dx = cX - mouseX;
      const dy = cY - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 150; // Collision range

      if (dist < maxDist && dist > 0) {
        const force = (maxDist - dist) / maxDist;
        const repelPower = 18; // Maximum pixel translation
        const tx = (dx / dist) * force * repelPower;
        const ty = (dy / dist) * force * repelPower;
        sticker.style.setProperty('--tx', `${tx}px`);
        sticker.style.setProperty('--ty', `${ty}px`);
      } else {
        sticker.style.setProperty('--tx', '0px');
        sticker.style.setProperty('--ty', '0px');
      }
    });
  };

  const handleMouseLeave = (e) => {
    const stickerEls = e.currentTarget.querySelectorAll('.sticker');
    stickerEls.forEach((sticker) => {
      sticker.style.setProperty('--tx', '0px');
      sticker.style.setProperty('--ty', '0px');
    });
  };

  return (
    <section className="toolkit-section" ref={containerRef}>
      <div className="section-title-wrapper">
        <h2 className="section-title toolkit-header">
          The Toolkit 🛠️
          <svg className="svg-annotation circle-annotation" viewBox="0 0 200 80" preserveAspectRatio="none">
            <path d="M10,40 C10,15 90,8 180,15 C200,30 180,65 90,70 C10,70 5,50 10,40" stroke="#C84B31" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
        </h2>
      </div>

      <p className="toolkit-subtitle handwritten">
        A handpicked stack of languages, frameworks, and AI systems I deploy to bring complex ideas to life.
      </p>

      <div 
        className="toolkit-interactive-area"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="sticker-sheet-canvas">
          {stickers.map((sticker, idx) => (
            <div 
              key={idx} 
              className="sticker-wrapper"
              style={{
                animationName: isVisible ? `float-${(idx % 5) + 1}` : 'none',
                animationDelay: `${idx * -0.4}s`
              }}
            >
              <div 
                className={`sticker ${sticker.type} ${isVisible ? 'animate-in' : ''}`} 
                style={{ 
                  '--rot': sticker.rot,
                  animationDelay: `${idx * 0.05}s` 
                }}
              >
                {sticker.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
