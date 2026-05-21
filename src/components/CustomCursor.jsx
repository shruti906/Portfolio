import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  
  // Damping delay variables
  const mouseCoords = useRef({ x: 0, y: 0 });
  const cursorCoords = useRef({ x: 0, y: 0 });
  const speed = 0.12;

  useEffect(() => {
    // Check if cursor needs to be hidden on mobile/touch screens
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (cursorRef.current) {
          cursorRef.current.style.display = 'none';
        }
      } else {
        if (cursorRef.current) {
          cursorRef.current.style.display = 'block';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    // Track real mouse position
    const handleMouseMove = (e) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Damping animation loop using requestAnimationFrame
    let animationFrameId;
    const animateCursor = () => {
      const distX = mouseCoords.current.x - cursorCoords.current.x;
      const distY = mouseCoords.current.y - cursorCoords.current.y;
      
      cursorCoords.current.x += distX * speed;
      cursorCoords.current.y += distY * speed;
      
      // Share coords globally for other elements (like eye tracking) to follow
      window.__customCursorCoords = {
        x: cursorCoords.current.x,
        y: cursorCoords.current.y
      };

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorCoords.current.x}px`;
        cursorRef.current.style.top = `${cursorCoords.current.y}px`;
      }
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    
    // Set initial position to mouse to avoid visual jump from (0,0)
    const initMouse = (e) => {
      cursorCoords.current.x = e.clientX;
      cursorCoords.current.y = e.clientY;
      window.__customCursorCoords = {
        x: e.clientX,
        y: e.clientY
      };
      window.removeEventListener('mousemove', initMouse);
    };
    window.addEventListener('mousemove', initMouse);

    animateCursor();

    // Setup global hover state triggers for interactive elements
    const handleMouseOver = (e) => {
      // Find closest hoverable element
      const target = e.target.closest('a, button, .flat-card, .timeline-node-item, .figma-switch-label, .figma-select');
      if (target) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousemove', initMouse);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      id="custom-cursor" 
      ref={cursorRef} 
      className={isActive ? 'active' : ''}
    >
      <svg 
        className="cursor-arrow-svg" 
        viewBox="0 0 42 42" 
        width="38" 
        height="38" 
        style={{ filter: 'drop-shadow(2px 3px 0px rgba(0,0,0,0.15))' }}
      >
        <defs>
          {/* Bouncy wet-look glossy light purple gradient */}
          <linearGradient id="bubblePurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3E8FF" />
            <stop offset="45%" stopColor="#D6B8FF" />
            <stop offset="100%" stopColor="#9C5CFC" />
          </linearGradient>
          {/* Bubbly 3D Bevel base gradient */}
          <linearGradient id="bubbleBevel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6F44B8" />
            <stop offset="100%" stopColor="#4C258E" />
          </linearGradient>
        </defs>
        
        {/* Chubby 3D extrusion underlay */}
        <path 
          d="M 5,5 C 3,8 2,16 5,22 C 6,24 8,24 9,22 C 10,20 11,18 13,16 L 21,24 C 23,26 26,23 24,21 L 16,13 C 18,10 20,10 22,9 C 24,8 24,6 22,5 C 16,3 10,3 5,5 Z" 
          fill="url(#bubbleBevel)" 
          stroke="#1E1E24" 
          strokeWidth="3" 
          strokeLinejoin="round" 
          transform="translate(1.5, 2.5)" 
        />
        
        {/* Chubby main arrow face */}
        <path 
          d="M 5,5 C 3,8 2,16 5,22 C 6,24 8,24 9,22 C 10,20 11,18 13,16 L 21,24 C 23,26 26,23 24,21 L 16,13 C 18,10 20,10 22,9 C 24,8 24,6 22,5 C 16,3 10,3 5,5 Z" 
          fill="url(#bubblePurple)" 
          stroke="#1E1E24" 
          strokeWidth="3" 
          strokeLinejoin="round" 
        />
        
        {/* Glass highlight reflective pill at top-left edge */}
        <path 
          d="M 7,7 C 5.5,8 4.5,12 6,15 C 6.5,16 7,16 7.5,15.5 C 8,15 7.5,14 7,13 C 6,11 6.5,9 7.5,8 C 8,7.5 7.5,6.5 7,7 Z" 
          fill="#FFFFFF" 
          opacity="0.8" 
        />
        
        {/* Tiny bubbly circular light-reflections */}
        <circle cx="7.5" cy="7.5" r="1.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="11.5" cy="9.5" r="1" fill="#FFFFFF" opacity="0.7" />
        <ellipse 
          cx="18" 
          cy="18" 
          rx="1" 
          ry="2" 
          fill="#FFFFFF" 
          opacity="0.5" 
          transform="rotate(-45 18 18)" 
        />
      </svg>
    </div>
  );
}
