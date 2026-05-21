import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor.jsx';
import Hero from './components/Hero.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Toolkit from './components/Toolkit.jsx';
import TechnicalBlueprint from './components/TechnicalBlueprint.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
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
            entry.target.classList.add('visible');
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
          <TechnicalBlueprint />
        </main>
        <Footer />
      </div>
    </>
  );
}

