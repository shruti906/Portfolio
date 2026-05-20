import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor.jsx';
import Hero from './components/Hero.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Toolkit from './components/Toolkit.jsx';
import FigmaPanel from './components/FigmaPanel.jsx';
import BlueprintDisplay from './components/BlueprintDisplay.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Shared Figma Properties Simulator States
  const [tint, setTint] = useState('var(--sage-green)');
  const [fontWeight, setFontWeight] = useState('bold');
  const [showCredentials, setShowCredentials] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Scroll reveal observer options
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
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
          obs.unobserve(entry.target); // Trigger only once
        }
      });
    }, observerOptions);

    // Observe SVG annotations and highlights
    const annotations = document.querySelectorAll('.svg-annotation, .marker-highlight');
    annotations.forEach(el => observer.observe(el));

    // Initial styles and observers for case study rows
    const rows = document.querySelectorAll('.case-study-row');
    rows.forEach(row => {
      row.style.opacity = '0';
      row.style.transform = 'translateY(40px)';
      row.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
      observer.observe(row);
    });

    return () => {
      observer.disconnect();
    };
  }, []); // Run on mount

  return (
    <>
      <CustomCursor />
      <div className="app-container">
        <Hero />
        <main>
          <CaseStudies />
          <Toolkit />
          
          {/* ================= SECTION 5: EDUCATION & TECHNICAL BLUEPRINT ================= */}
          <section style={{ padding: '60px 0' }}>
            <div className="section-title-wrapper">
              <h2 className="section-title">
                Technical Blueprint
                <svg className="svg-annotation circle-annotation" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <path d="M10,40 C10,15 90,8 180,15 C200,30 180,65 90,70 C10,70 5,50 10,40" stroke="#C84B31" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </h2>
            </div>

            <div className="blueprint-split">
              <FigmaPanel 
                tint={tint}
                onTintChange={setTint}
                fontWeight={fontWeight}
                onFontWeightChange={setFontWeight}
                showCredentials={showCredentials}
                onShowCredentialsChange={setShowCredentials}
                darkMode={darkMode}
                onDarkModeChange={setDarkMode}
              />
              <BlueprintDisplay 
                tint={tint}
                fontWeight={fontWeight}
                showCredentials={showCredentials}
                darkMode={darkMode}
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
