'use client';

import styles from './TechStack.module.css';

const tech = [
  { name: 'JavaScript', logo: 'js.svg' },
  { name: 'TypeScript', logo: 'ts.svg' },
  { name: 'React', logo: 'react.svg' },
  { name: 'Next.js', logo: 'nextjs.svg' },
  { name: 'Node.js', logo: 'nodejs.svg' },
  { name: 'Python', logo: 'python.svg' },
  { name: 'GraphQL', logo: 'graphql.svg' },
  { name: 'Docker', logo: 'docker.svg' },
  { name: 'AWS', logo: 'aws.svg' },
  { name: 'Figma', logo: 'figma.svg' },
  { name: 'Three.js', logo: 'threejs.svg' },
  { name: 'MongoDB', logo: 'mongodb.svg' },
];

export default function TechStack() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={styles.sectionTitle}>My Tech Arsenal</h2>
        <p className={styles.sectionSubtitle}>Tools I use to build amazing things</p>
        
        <div className={styles.techGrid}>
          {tech.map((item, index) => (
            <div key={index} className={styles.techItem}>
              <div className={styles.logoWrapper}>
                {/* Placeholder for logo - you can use img tags or svgs */}
                <div className={styles.logoPlaceholder} style={{ animationDelay: `${index * 0.1}s` }}></div>
              </div>
              <span className={styles.techName}>{item.name}</span>
            </div>
          ))}
        </div>

        {/* Animated background element */}
        <div className={styles.backgroundElement}></div>
      </div>
    </section>
  );
}
