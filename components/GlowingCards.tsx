'use client';

import { useState } from 'react';
import styles from './GlowingCards.module.css';

export default function GlowingCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      icon: '⚡',
      title: 'Full Stack Developer',
      description: 'Building scalable web applications with modern JavaScript frameworks and cloud technologies',
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🎨',
      title: 'Creative Technologist',
      description: 'Crafting immersive digital experiences with cutting-edge CSS and WebGL animations',
      skills: ['Three.js', 'GSAP', 'Framer Motion', 'CSS Art', 'WebGL'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🚀',
      title: 'Problem Solver',
      description: 'Architecting elegant solutions to complex technical challenges with AI and automation',
      skills: ['Python', 'Machine Learning', 'Docker', 'CI/CD', 'System Design'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={styles.sectionTitle}>What I Do</h2>
          <p className={styles.sectionSubtitle}>Turning ideas into reality</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={styles.cardWrapper}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.card}>
                <div className={styles.cardBorder}></div>
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconGlow}></div>
                    <span className={styles.icon}>{card.icon}</span>
                  </div>
                  
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  
                  <div className={styles.skillsContainer}>
                    {card.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={styles.skillTag}
                        style={{
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div 
                  className={`${styles.cardGlow} bg-gradient-to-br ${card.gradient}`}
                  style={{
                    opacity: hoveredCard === index ? 0.3 : 0
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <div className={styles.floatingElements}>
          <div className={styles.floatingShape1}></div>
          <div className={styles.floatingShape2}></div>
          <div className={styles.floatingShape3}></div>
        </div>
      </div>
    </section>
  );
}
