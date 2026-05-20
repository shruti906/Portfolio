import React, { useState } from 'react';

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);
  const emailText = 'shrutikeshri111@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(emailText).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }).catch(err => {
      console.error('Could not copy email to clipboard: ', err);
    });
  };

  const copyBtnStyle = isCopied ? {
    backgroundColor: 'var(--sage-green)',
    color: 'var(--primary-charcoal)',
    transform: 'scale(1.08)'
  } : {};

  return (
    <footer className="footer-section">
      <div className="footer-left">
        <div className="footer-philosophy">
          If the code doesn't solve a <span className="marker-highlight">real problem</span> for a real human, it doesn't matter how pretty the math is. I design systems to be <span className="marker-highlight">simple, useful, and robust</span>.
        </div>
        <p className="handwritten" style={{ fontSize: '1.3rem' }}>"Keep experimenting. Keep building. Keep learning."</p>
      </div>

      <div className="footer-right">
        {/* Interactive wave illustration using Pure SVG */}
        <svg viewBox="0 0 100 100" width="120" height="120" style={{ alignSelf: 'center', transform: 'rotate(-5deg)' }}>
          {/* Wave hello cartoon face and waving hand */}
          <circle cx="50" cy="50" r="30" stroke="#1E1E24" strokeWidth="3" fill="var(--lavender)" />
          {/* Big happy eyes */}
          <ellipse cx="40" cy="45" rx="3" ry="5" fill="#1E1E24" />
          <ellipse cx="60" cy="45" rx="3" ry="5" fill="#1E1E24" />
          {/* Waving hand */}
          <path d="M80,35 Q85,15 75,10 Q65,15 70,35" stroke="#1E1E24" strokeWidth="3" fill="var(--rust-red)" />
          <path d="M70,35 L80,35" stroke="#1E1E24" strokeWidth="3" />
          {/* Mouth */}
          <path d="M42,60 Q50,70 58,60" stroke="#1E1E24" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>

        <div className="chat-bubble-cta">
          If this made sense, let's chat!
        </div>

        <div className="contact-card flat-card">
          <div className="email-copy-wrapper">
            <div className="email-address" id="email-text">{emailText}</div>
            <button 
              className="copy-btn" 
              id="copy-email-btn"
              onClick={handleCopy}
              style={copyBtnStyle}
            >
              {isCopied ? 'Copied! ✨' : 'Copy Email'}
            </button>
          </div>

          <div className="footer-social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flat-btn">
              LinkedIn Profile
            </a>
            <a href="https://github.com/shrutikeshri111" target="_blank" rel="noopener noreferrer" className="flat-btn">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>

      <div className="footer-credits">
        © 2026 Shruti Keshri. Built with ❤️ and high-fidelity micro-interactions.
      </div>
    </footer>
  );
}
