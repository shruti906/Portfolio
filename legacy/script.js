document.addEventListener('DOMContentLoaded', () => {

  // ================= 1. CUSTOM CURSOR FOLLOWER =================
  const cursor = document.getElementById('custom-cursor');
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  const speed = 0.12; // Damping delay speed

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;
    
    cursorX += distX * speed;
    cursorY += distY * speed;
    
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Highlight cursor on hoverable elements
  const hoverables = document.querySelectorAll('a, button, .flat-card, .timeline-node-item, .figma-switch-label, .figma-select');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });


  // ================= 2. SCROLL REVEAL & DRAW ANIMATIONS =================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Draw SVG annotations
        if (entry.target.classList.contains('svg-annotation')) {
          entry.target.classList.add('drawn');
        }
        // Marker highlights
        if (entry.target.classList.contains('marker-highlight')) {
          entry.target.classList.add('highlighted');
        }
        // Case Study Rows fade/slide in
        if (entry.target.classList.contains('case-study-row')) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
        obs.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  // Observe items
  document.querySelectorAll('.svg-annotation, .marker-highlight').forEach(el => observer.observe(el));
  
  // Set initial styles for case studies to animate smoothly
  document.querySelectorAll('.case-study-row').forEach(row => {
    row.style.opacity = 0;
    row.style.transform = 'translateY(40px)';
    row.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
    observer.observe(row);
  });





  // ================= 4. FIGMA PROPERTIES PANEL SIMULATOR =================
  const tintSelector = document.getElementById('figma-color-tint');
  const weightSelector = document.getElementById('figma-font-weight');
  const credentialSwitch = document.getElementById('figma-credentials-switch');
  const darkSwitch = document.getElementById('figma-dark-switch');
  
  const editorWindow = document.getElementById('education-editor-window');
  const highSchoolCard = document.getElementById('high-school-credentials');
  const eduCardTitle = document.getElementById('edu-card-1');

  // Change highlight color
  tintSelector.addEventListener('change', (e) => {
    const tintColor = e.target.value;
    document.querySelectorAll('.editor-window .award-item strong').forEach(el => {
      el.style.color = tintColor;
    });
    document.querySelectorAll('.editor-meta').forEach(el => {
      el.style.color = tintColor;
    });
  });

  // Change font weight
  weightSelector.addEventListener('change', (e) => {
    const weight = e.target.value;
    document.querySelectorAll('.editor-title').forEach(el => {
      el.style.fontWeight = weight;
    });
  });

  // Toggle school details card
  credentialSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
      highSchoolCard.style.display = 'block';
      highSchoolCard.style.animation = 'fadeSlide 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards';
    } else {
      highSchoolCard.style.display = 'none';
    }
  });

  // Toggle dark mode preview simulation
  darkSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
      editorWindow.style.backgroundColor = '#FFFFFF';
      editorWindow.style.color = '#1E1E24';
      editorWindow.style.borderColor = '#1E1E24';
      document.querySelectorAll('.editor-title').forEach(el => el.style.color = '#1E1E24');
      document.querySelectorAll('.editor-desc').forEach(el => el.style.color = '#555555');
      document.querySelectorAll('.award-item').forEach(el => {
        el.style.backgroundColor = '#F9F9F9';
        el.style.borderColor = '#CCC';
      });
    } else {
      editorWindow.style.backgroundColor = '#121214';
      editorWindow.style.color = '#FFFFFF';
      document.querySelectorAll('.editor-title').forEach(el => el.style.color = '#FFFFFF');
      document.querySelectorAll('.editor-desc').forEach(el => el.style.color = '#ABB2BF');
      document.querySelectorAll('.award-item').forEach(el => {
        el.style.backgroundColor = '#1E1E24';
        el.style.borderColor = '#444';
      });
    }
  });


  // ================= 5. COPY EMAIL BUTTON =================
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-text').textContent;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailText).then(() => {
      copyBtn.textContent = 'Copied! ✨';
      copyBtn.style.backgroundColor = 'var(--sage-green)';
      copyBtn.style.color = 'var(--primary-charcoal)';
      
      // Temporary animation boost
      copyBtn.style.transform = 'scale(1.08)';

      setTimeout(() => {
        copyBtn.textContent = 'Copy Email';
        copyBtn.style.backgroundColor = '';
        copyBtn.style.color = '';
        copyBtn.style.transform = '';
      }, 2000);
    }).catch(err => {
      console.error('Could not copy email to clipboard: ', err);
    });
  });

});
