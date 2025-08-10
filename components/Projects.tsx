'use client';

import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Enterprise HRMS Platform',
      subtitle: 'Web App & PWA on Play Store',
      description: 'Comprehensive HR management system serving multiple organizations with employee management, attendance tracking, automated salary generation, and role-based access control.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'PWA', 'JWT'],
      status: 'LIVE IN PRODUCTION',
      features: [
        'Multi-tenant Architecture',
        'Attendance with Location Tracking',
        'Automated Payroll Processing',
        'Leave Management System',
        'Task Report Generation',
        'Available as PWA on Google Play Store'
      ],
      platforms: ['Web', 'PWA', 'Play Store'],
      metrics: {
        users: '500+',
        organizations: '5+',
        uptime: '99.9%'
      },
      highlight: true
    },
    {
      title: 'AI HR Buddy',
      subtitle: 'Integrated with HRMS Platform',
      description: 'Intelligent RAG-powered chatbot assistant integrated with HRMS, providing instant HR support, policy information, and automating routine employee queries.',
      tech: ['Python', 'FastAPI', 'RAG', 'LangChain', 'OpenAI', 'Vector DB'],
      status: 'LIVE IN PRODUCTION',
      features: [
        'Natural Language Understanding',
        'RAG-powered Knowledge Base',
        'Real-time HRMS Integration',
        'Multi-lingual Support',
        'Context-aware Responses',
        'Automated Ticket Creation'
      ],
      platforms: ['Web', 'API'],
      metrics: {
        queries: '1000+/day',
        accuracy: '95%',
        response: '<2s'
      },
      highlight: true
    }
  ];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNumber}>03</span>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${styles.projectCard} ${index % 2 === 0 ? styles.blackCard : styles.whiteCard}`}
            >
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                </div>
                <span className={styles.status}>
                  {project.status}
                </span>
              </div>

              <p className={styles.projectDescription}>{project.description}</p>

              {/* Metrics */}
              <div className={styles.metrics}>
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className={styles.metric}>
                    <span className={styles.metricValue}>{value}</span>
                    <span className={styles.metricLabel}>{key}</span>
                  </div>
                ))}
              </div>

              {/* Platforms */}
              <div className={styles.platforms}>
                {project.platforms.map((platform, idx) => (
                  <span key={idx} className={styles.platform}>{platform}</span>
                ))}
              </div>

              {/* Features */}
              <div className={styles.features}>
                {project.features.map((feature, idx) => (
                  <div key={idx} className={styles.feature}>
                    <span className={styles.featureIcon}>◆</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className={styles.techStack}>
                {project.tech.map((tech, idx) => (
                  <span key={idx} className={styles.techTag}>{tech}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className={styles.moreProjects}>
          <a href="https://github.com/xcress" className={styles.viewMore}>
            View More Projects on GitHub
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
