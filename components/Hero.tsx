'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [text, setText] = useState('');
  const fullName = 'VESHANT SINGH DAHIYA';
  // For very long names, you can add a custom break point like this:
  // const fullName = 'VESHANT SINGH\nDAHIYA'; // This would break after SINGH
  const title = 'Full-Stack Developer';
  const company = 'Cosmos Financial Group';
  const location = 'Faridabad, Delhi NCR';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={`relative min-h-screen flex items-center ${styles.heroSection}`}>
      {/* Geometric decoration */}
      <div className={styles.geometricDecor}>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.square1}></div>
        <div className={styles.square2}></div>
        <div className={styles.hexagon}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className={styles.heroContent}>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>
              {text.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < text.split('\n').length - 1 && <br />}
                </span>
              ))}
              <span className={styles.cursor}>|</span>
            </h1>
          </div>
          
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.accent}>■</span>
            <span className={styles.company}>{company}</span>
          </div>

          <div className={styles.location}>
            <span className={styles.locationIcon}>◆</span>
            {location}
          </div>

          <div className={styles.ctaContainer}>
            <a href="#projects" className={styles.primaryBtn}>
              <span>View Projects</span>
              <svg className={styles.arrow} viewBox="0 0 24 24" width="20" height="20">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              <span>Get In Touch</span>
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Production Apps</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
        <span className={styles.scrollText}>SCROLL</span>
      </div>
    </section>
  );
}
