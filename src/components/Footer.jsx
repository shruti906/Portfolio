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
          I'm someone who <span className="marker-highlight-green">loves building things that actually work</span> — <br />
          not just for grades, but for <span className="marker-highlight-green">real people with real problems.</span>
        </p>
        <p className="philosophy-paragraph">
          I get stuck in bugs at <span className="marker-highlight-green">2am</span>, figure it out by <span className="marker-highlight-green">3</span>, <br />
          and ship something <span className="marker-highlight-green">broken-but-functional by morning.</span><br />
          <span className="handwritten philosophy-subtext">That's just how I build.</span>
        </p>
        <p className="philosophy-paragraph">
          I'm currently open to <span className="marker-highlight-green">internships, collabs, and cool ideas</span> — <br />
          if you're working on something interesting, I'm probably down.
        </p>
      </div>

      {/* COLUMN 2: WAVING BOB-HAIR GIRL */}
      <div className="footer-column footer-avatar-column">
        <div className="avatar-chat-bubble-container">
          <div className="avatar-name-label handwritten">Shruti</div>
          <div className="avatar-chat-bubble">
            If this clicked, let's talk!
          </div>
        </div>

        {/* Custom Bob-Hair Girl SVG */}
        <svg viewBox="0 0 200 220" width="180" height="200" className="waving-girl-svg" style={{ alignSelf: 'center', transform: 'rotate(-1deg)' }}>
          {/* Back Hair */}
          <path d="M 60,90 C 60,60 140,60 140,90 C 140,110 142,145 142,145 L 58,145 C 58,145 60,110 60,90 Z" fill="#b89f93" stroke="#3c3330" strokeWidth="3" />

          {/* Neck */}
          <path d="M 92,140 L 92,165 M 108,140 L 108,165" stroke="#3c3330" strokeWidth="3" fill="none" />
          <rect x="92" y="140" width="16" height="25" fill="#fff0eb" />

          {/* Head Shape (Face Outline) */}
          <path d="M 68,90 C 58,110 58,140 100,150 C 142,140 142,110 132,90 Z" fill="#fff0eb" stroke="#3c3330" strokeWidth="3" />

          {/* Bob Hair Sides */}
          <path d="M 60,90 C 56,105 56,130 58,140 C 60,142 66,142 68,135 C 70,120 70,105 72,90" fill="#b89f93" stroke="#3c3330" strokeWidth="3" />
          <path d="M 140,90 C 144,105 144,130 142,140 C 140,142 134,142 132,135 C 130,120 130,105 128,90" fill="#b89f93" stroke="#3c3330" strokeWidth="3" />

          {/* Hair Bangs */}
          <path d="M 68,90 C 72,98 76,105 80,105 C 84,105 82,90 82,90 C 82,90 85,98 90,105 C 95,105 92,90 92,90 C 92,90 95,98 100,105 C 105,105 108,90 108,90 C 108,90 110,98 115,105 C 120,105 122,95 126,90 C 132,90 120,75 100,75 C 80,75 68,90 68,90 Z" fill="#b89f93" stroke="#3c3330" strokeWidth="3" />

          {/* Face Details */}
          <ellipse cx="86" cy="112" rx="3.5" ry="6.5" fill="#3c3330" />
          <ellipse cx="114" cy="112" rx="3.5" ry="6.5" fill="#3c3330" />
          
          <circle cx="76" cy="122" r="7" fill="#ffc4bd" opacity="0.8" />
          <circle cx="124" cy="122" r="7" fill="#ffc4bd" opacity="0.8" />

          <path d="M 94,124 Q 100,132 106,124 Z" fill="#f29b91" stroke="#3c3330" strokeWidth="3" strokeLinecap="round" />

          <path d="M 80,102 Q 86,98 92,102" stroke="#3c3330" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 108,102 Q 114,98 120,102" stroke="#3c3330" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Body/T-Shirt */}
          <path d="M 80,165 C 65,175 62,220 62,220 L 138,220 C 138,220 135,175 120,165 Z" fill="#ebd1c9" stroke="#3c3330" strokeWidth="3" />
          <path d="M 92,165 Q 100,172 108,165" fill="none" stroke="#3c3330" strokeWidth="3" strokeLinecap="round" />

          {/* Waving Arm (waving-arm-group) */}
          <g className="waving-arm-group">
            <path d="M 80,168 L 62,178 L 72,192 Z" fill="#ebd1c9" stroke="#3c3330" strokeWidth="3" />

            <path d="M 72,178 L 54,120" stroke="#3c3330" strokeWidth="11" strokeLinecap="round" fill="none" />
            <path d="M 72,178 L 54,120" stroke="#fff0eb" strokeWidth="6" strokeLinecap="round" fill="none" />

            <path d="M 54,120 C 58,114 62,110 65,108" stroke="#3c3330" strokeWidth="2.5" fill="#fff0eb" strokeLinecap="round" />
            <path d="M 54,120 C 50,110 48,102 48,98" stroke="#3c3330" strokeWidth="2.5" fill="#fff0eb" strokeLinecap="round" />
            <path d="M 54,120 C 54,108 54,98 54,94" stroke="#3c3330" strokeWidth="2.5" fill="#fff0eb" strokeLinecap="round" />
            <path d="M 54,120 C 59,110 64,102 66,98" stroke="#3c3330" strokeWidth="2.5" fill="#fff0eb" strokeLinecap="round" />
            <path d="M 54,120 C 62,122 68,122 71,121" stroke="#3c3330" strokeWidth="2.5" fill="#fff0eb" strokeLinecap="round" />

            <path d="M 54,120 Q 60,126 65,119" stroke="#3c3330" strokeWidth="2.5" fill="none" />
          </g>
        </svg>

        <div className="avatar-meta-container">
          <div className="avatar-label-name">Shruti</div>
        </div>

        {/* Geekout sub-bubble container */}
        <div className="avatar-geekout-bubble">
          <span className="geekout-emoji">💬</span>
          <p className="geekout-text">
            "Got an idea, an opportunity, or just want to geek out over AI? Hit me up."
          </p>
        </div>
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
          style={isCopied ? {
            backgroundColor: 'var(--sage-green)',
            transform: 'scale(1.05)',
          } : undefined}
        >
          <span className="email-emoji">📧</span>
          <span className="email-text">{isCopied ? 'Copied! ✨' : emailText}</span>
        </button>
        <div className="tap-to-copy-text handwritten">(tap to copy)</div>

        {/* LinkedIn Bubble */}
        <a 
          href="https://linkedin.com/in/shrutikeshri09" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-bubble linkedin-bubble"
        >
          <span className="contact-emoji">🔗</span>
          <span className="contact-text">LinkedIn — shrutikeshri09</span>
        </a>

        {/* GitHub Bubble */}
        <a 
          href="https://github.com/shruti906" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-bubble github-bubble"
        >
          <span className="contact-emoji">🐙</span>
          <span className="contact-text">GitHub — shruti906</span>
        </a>

        {/* LeetCode Bubble */}
        <a 
          href="https://leetcode.com/shrutzz09" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-bubble leetcode-bubble"
        >
          <span className="contact-emoji">💻</span>
          <span className="contact-text">LeetCode — shrutzz09</span>
        </a>
      </div>

      {/* FOOTER CREDITS */}
      <div className="footer-credits">
        <p>© 2026 Shruti Keshri. Built with ❤️ and high-fidelity micro-interactions.</p>
      </div>
    </footer>
  );
}


