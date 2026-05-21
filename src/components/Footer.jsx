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

  return (
    <footer className="footer-section">
      {/* COLUMN 1: PHILOSOPHY */}
      <div className="footer-column footer-philosophy-column">
        <h3 className="handwritten philosophy-heading">My Philosophy</h3>
        <p className="philosophy-paragraph">
          In short, I'm someone who <br />
          <span className="marker-highlight-green">enjoys working in messy,</span><br />
          <span className="marker-highlight-green">complex spaces</span> and making<br />
          them clearer and more human.
        </p>
        <p className="philosophy-paragraph">
          I do that by <span className="marker-highlight-green">experimenting to</span><br />
          <span className="marker-highlight-green">learn, shaping clear stories</span><br />
          <span className="marker-highlight-green">that help people align, and</span><br />
          <span className="marker-highlight-green">designing systems with care</span><br />
          for the small details that quietly<br />
          shape how something feels.
        </p>
      </div>

      {/* COLUMN 2: WAVING GIRL AVATAR */}
      <div className="footer-column footer-avatar-column">
        <div className="avatar-chat-bubble-container">
          <div className="avatar-name-label handwritten">Shruti</div>
          <div className="avatar-chat-bubble">
            If this made sense, let's chat!
          </div>
        </div>

        {/* Custom Waving Girl SVG */}
        <svg viewBox="0 0 200 220" width="180" height="200" className="waving-girl-svg" style={{ alignSelf: 'center', transform: 'rotate(-2deg)' }}>
          {/* Hair Space Buns */}
          <circle cx="65" cy="50" r="18" stroke="#1E1E24" strokeWidth="3" fill="#1E1E24" />
          <circle cx="135" cy="50" r="18" stroke="#1E1E24" strokeWidth="3" fill="#1E1E24" />
          
          {/* Hair ties (rust-red) */}
          <ellipse cx="65" cy="65" rx="10" ry="3.5" stroke="#1E1E24" strokeWidth="2.5" fill="var(--rust-red)" />
          <ellipse cx="135" cy="65" rx="10" ry="3.5" stroke="#1E1E24" strokeWidth="2.5" fill="var(--rust-red)" />

          {/* Head Outline (drawn white) */}
          <path d="M 68,90 C 58,110 58,140 100,150 C 142,140 142,110 132,90 C 122,80 78,80 68,90 Z" stroke="#1E1E24" strokeWidth="3" fill="#FFFFFF" />

          {/* Hair sides framing face */}
          <path d="M 68,90 C 62,105 65,125 72,130 C 70,120 70,105 74,95" stroke="#1E1E24" strokeWidth="3" fill="#1E1E24" />
          <path d="M 132,90 C 138,105 135,125 128,130 C 130,120 130,105 126,95" stroke="#1E1E24" strokeWidth="3" fill="#1E1E24" />
          
          {/* Hair bangs */}
          <path d="M 68,90 C 80,83 90,93 100,86 C 110,93 120,83 132,90 C 120,81 80,81 68,90 Z" stroke="#1E1E24" strokeWidth="3" fill="#1E1E24" />

          {/* Face Details */}
          {/* Eyes */}
          <ellipse cx="85" cy="112" rx="3.5" ry="4.5" fill="#1E1E24" />
          <ellipse cx="115" cy="112" rx="3.5" ry="4.5" fill="#1E1E24" />
          
          {/* Eyebrows */}
          <path d="M 78,103 Q 85,98 92,104" stroke="#1E1E24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 108,104 Q 115,98 122,103" stroke="#1E1E24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          
          {/* Lilac blush */}
          <circle cx="75" cy="122" r="6" fill="var(--lavender)" opacity="0.8" />
          <circle cx="125" cy="122" r="6" fill="var(--lavender)" opacity="0.8" />
          
          {/* Smiling Smirk mouth */}
          <path d="M 94,126 Q 102,132 110,124" stroke="#1E1E24" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Neck */}
          <path d="M 94,148 L 94,162 M 106,148 L 106,162" stroke="#1E1E24" strokeWidth="3" fill="none" />

          {/* Body/T-shirt (white fill) */}
          <path d="M 80,165 C 65,175 60,220 60,220 L 140,220 C 140,220 135,175 120,165 Z" stroke="#1E1E24" strokeWidth="3" fill="#FFFFFF" />
          <path d="M 92,162 Q 100,168 108,162" stroke="#1E1E24" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Waving Arm (waving-arm-group) */}
          <g className="waving-arm-group">
            {/* Upper arm sleeve */}
            <path d="M 80,168 L 68,140" stroke="#1E1E24" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M 80,168 L 68,140" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Arm extending up */}
            <path d="M 68,140 L 52,85" stroke="#1E1E24" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M 68,140 L 52,85" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" fill="none" />

            {/* Hand with fingers spread */}
            {/* Finger 1 */}
            <path d="M 52,85 C 49,75 42,65 42,60 C 42,58 45,58 47,63 L 51,75" stroke="#1E1E24" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
            {/* Finger 2 */}
            <path d="M 52,75 C 50,65 46,55 46,50 C 46,48 49,48 51,55 L 54,75" stroke="#1E1E24" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
            {/* Finger 3 */}
            <path d="M 54,75 C 54,62 54,52 54,48 C 54,46 57,46 57,53 L 58,75" stroke="#1E1E24" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
            {/* Finger 4 */}
            <path d="M 57,75 C 60,65 64,55 64,52 C 64,50 67,50 66,57 L 61,77" stroke="#1E1E24" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
            {/* Thumb */}
            <path d="M 59,82 C 66,78 72,72 74,70 C 76,68 78,71 75,75 C 71,80 64,85 61,86" stroke="#1E1E24" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
            
            {/* Palm center fill */}
            <path d="M 52,85 Q 57,90 62,84" stroke="#1E1E24" strokeWidth="2.5" fill="none" />
          </g>
        </svg>
      </div>

      {/* COLUMN 3: CONTACT BUBBLES */}
      <div className="footer-column footer-contact-column">
        {/* Down Arrows */}
        <div className="down-arrows-row">
          {[1, 2, 3].map((num) => (
            <svg key={num} viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="down-arrow-svg">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          ))}
        </div>

        {/* Email Bubble */}
        <button 
          className="contact-bubble email-bubble" 
          onClick={handleCopy}
          style={{
            backgroundColor: isCopied ? 'var(--sage-green)' : '#FFFFFF',
            transform: isCopied ? 'scale(1.05)' : 'none',
          }}
        >
          <span className="email-text">{isCopied ? 'Copied! ✨' : emailText}</span>
        </button>
        <div className="tap-to-copy-text handwritten">tap to copy</div>

        {/* LinkedIn Bubble */}
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-bubble linkedin-bubble"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="linkedin-icon-svg">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span className="linkedin-text">LinkedIn</span>
        </a>
      </div>

      {/* FOOTER CREDITS */}
      <div className="footer-credits">
        <div className="footer-links">
          <a href="https://github.com/shrutikeshri111" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
        <p>© 2026 Shruti Keshri. Built with ❤️ and high-fidelity micro-interactions.</p>
      </div>
    </footer>
  );
}

