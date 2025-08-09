'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero' : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', key: 'home' },
    { label: 'About', href: '#about', key: 'about' },
    { label: 'Projects', href: '#projects', key: 'projects' },
    { label: 'Skills', href: '#skills', key: 'skills' },
    { label: 'Contact', href: '#contact', key: 'contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <a href="#hero" className={styles.logo}>
            <span className={styles.logoText}>VSD</span>
            <span className={styles.logoAccent}>{'// '}</span>
          </a>

          <div className={styles.navLinks}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`${styles.navLink} ${activeSection === item.key ? styles.active : ''}`}
              >
                <span className={styles.linkNumber}>0{index + 1}</span>
                <span className={styles.linkText}>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Slate Navigation */}
      <div className={styles.mobileNavSlate}>
        <div className={styles.slateContainer}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`${styles.slateItem} ${activeSection === item.key ? styles.slateActive : ''}`}
              title={item.label}
            >
              <span className={styles.slateNumber}>0{index + 1}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
