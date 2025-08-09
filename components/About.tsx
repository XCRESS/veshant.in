'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNumber}>01</span>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.intro}>
              I&apos;m a passionate Full-Stack Developer currently working at <span className={styles.highlight}>Cosmos Financial Group</span>, 
              specializing in building scalable web applications and AI-powered solutions.
            </p>

            <p className={styles.description}>
              Born on <span className={styles.highlight}>October 15, 2003</span> in Faridabad, I&apos;ve been crafting digital experiences 
              since 2021. My expertise spans across the MERN stack, Python FastAPI for building RAG applications, 
              and developing Progressive Web Apps (PWA) and Trusted Web Activities (TWA).
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>▪</span>
                <span>Enterprise-level HRMS solutions</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>▪</span>
                <span>AI-powered chatbots and RAG applications</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>▪</span>
                <span>Production-ready web applications</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>▪</span>
                <span>Cloud deployment and optimization</span>
              </div>
            </div>

            <div className={styles.funFact}>
              <span className={styles.factLabel}>Fun Fact:</span>
              <span className={styles.factText}>
                I hate social media, taking pics & revisiting code older than 2-3 months. 
                Creating bugs since 2021 ;)
              </span>
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.codeDot}></span>
                <span className={styles.codeDot}></span>
                <span className={styles.codeDot}></span>
              </div>
              <pre className={styles.code}>
{`const veshant = {
  name: "Veshant Singh Dahiya",
  role: "Full-Stack Developer",
  company: "Cosmos Financial Group",
  location: "Faridabad, Delhi NCR",
  birthDate: "2003-10-15",
  
  skills: {
    frontend: ["React", "Next.js", "TypeScript"],
    backend: ["Node.js", "Python", "FastAPI"],
    database: ["MongoDB", "PostgreSQL"],
    cloud: ["AWS", "Docker"],
    specialties: ["RAG Apps", "PWA", "TWA"]
  },
  
  currentProjects: [
    "Enterprise HRMS Platform",
    "AI HR Buddy Chatbot"
  ],
  
  lifePhilosophy: "Build. Learn. Repeat."
};`}
              </pre>
            </div>
            
            <div className={styles.geometricPattern}>
              <div className={styles.patternSquare}></div>
              <div className={styles.patternTriangle}></div>
              <div className={styles.patternLine}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
