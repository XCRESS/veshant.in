'use client';

import styles from './Skills.module.css';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      icon: '▲',
      skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
      level: 'Expert',
      color: 'red'
    },
    {
      category: 'Frontend', 
      icon: '■',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'PWA', 'TWA'],
      level: 'Expert',
      color: 'black'
    },
    {
      category: 'Backend',
      icon: '◆',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets'],
      level: 'Advanced',
      color: 'red'
    },
    {
      category: 'Database',
      icon: '●',
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Vector DB'],
      level: 'Advanced',
      color: 'black'
    },
    {
      category: 'Cloud & DevOps',
      icon: '⬢',
      skills: ['AWS', 'Docker', 'CI/CD', 'Linux'],
      level: 'Intermediate',
      color: 'red'
    },
    {
      category: 'AI/ML',
      icon: '◉',
      skills: ['RAG Applications', 'LangChain', 'OpenAI API', 'Prompt Engineering'],
      level: 'Advanced',
      color: 'black'
    }
  ];

  return (
    <section id="skills" className={styles.section}>
      {/* Artistic Background Elements */}
      <div className={styles.backgroundArt}>
        <div className={styles.artTriangle1}></div>
        <div className={styles.artSquare1}></div>
        <div className={styles.artHexagon1}></div>
        <div className={styles.artLine1}></div>
        <div className={styles.artLine2}></div>
        <div className={styles.artCircle1}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNumber}>04</span>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`${styles.skillCard} ${category.color === 'black' ? styles.blackCard : styles.redCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{category.icon}</div>
                <div className={styles.cardTitle}>
                  <h3 className={styles.categoryName}>{category.category}</h3>
                  <span className={styles.skillLevel}>{category.level}</span>
                </div>
              </div>
              
              <div className={styles.skillTags}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.skillCount}>{category.skills.length} Skills</span>
                <div className={styles.cardDecoration}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>25+</span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>2+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Commitment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
