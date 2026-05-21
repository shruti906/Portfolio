import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [cursorText, setCursorText] = useState('Shruti 🪄');
  
  // Spring physics variables
  const mouseCoords = useRef({ x: 0, y: 0 });
  const cursorCoords = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Stiffness and Damping as specified
    const stiffness = 180;
    const damping = 25;

    // Check if cursor needs to be hidden on mobile/touch screens
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (cursorRef.current) {
          cursorRef.current.style.display = 'none';
        }
      } else {
        if (cursorRef.current) {
          cursorRef.current.style.display = 'flex';
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

    // Spring physics animation loop using requestAnimationFrame
    let animationFrameId;

    const animateCursor = () => {
      // Use standard fixed step (0.016s) to ensure absolute stability regardless of frame rate
      const dt = 0.016; 

      const targetX = mouseCoords.current.x;
      const targetY = mouseCoords.current.y;

      const px = cursorCoords.current.x;
      const py = cursorCoords.current.y;

      // Spring formula: Acceleration = (stiffness * (target - position)) - (damping * velocity)
      const ax = stiffness * (targetX - px) - damping * velocity.current.x;
      const ay = stiffness * (targetY - py) - damping * velocity.current.y;

      // Update velocity
      velocity.current.x += ax * dt;
      velocity.current.y += ay * dt;

      // Update position
      cursorCoords.current.x += velocity.current.x * dt;
      cursorCoords.current.y += velocity.current.y * dt;

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
      window.removeEventListener('mousemove', initMouse);
    };
    window.addEventListener('mousemove', initMouse);

    animationFrameId = requestAnimationFrame(animateCursor);

    // Setup global hover state triggers for interactive elements and customize the text dynamically
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .flat-card, .timeline-node-item, .figma-switch-label, .figma-select');
      if (target) {
        setIsActive(true);
        // Custom text based on hovered element
        if (target.classList.contains('email-bubble')) {
          setCursorText('copy! 📧');
        } else if (target.classList.contains('linkedin-bubble')) {
          setCursorText('visit! 🔗');
        } else if (target.classList.contains('github-bubble')) {
          setCursorText('visit! 🐙');
        } else if (target.classList.contains('leetcode-bubble')) {
          setCursorText('visit! 💻');
        } else if (target.tagName === 'BUTTON' || target.closest('button')) {
          setCursorText('click! ✨');
        } else {
          setCursorText('click! 🚀');
        }
      } else {
        setIsActive(false);
        setCursorText('Shruti 🪄');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', initMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      id="custom-cursor" 
      ref={cursorRef} 
      className={isActive ? 'active' : ''}
    >
      <span className="cursor-pill-text">{cursorText}</span>
    </div>
  );
}
