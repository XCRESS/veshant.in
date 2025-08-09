'use client';

import styles from './ContactSection.module.css';

export default function ContactSection() {
  const contacts = [
    { name: 'GitHub', icon: '🐙', link: 'https://github.com/xcres' },
    { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/xcres' },
    { name: 'Email', icon: '📧', link: 'mailto:xcres@email.com' },
    { name: 'Twitter', icon: '🐦', link: 'https://twitter.com/xcres' },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={styles.title}>Let's Connect</h2>
        <p className={styles.subtitle}>Feel free to reach out for collaborations or just a friendly hello!</p>
        
        <div className={styles.contactGrid}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className={styles.contactCard}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{contact.icon}</span>
                <div className={styles.iconGlow}></div>
              </div>
              <span className={styles.contactName}>{contact.name}</span>
            </a>
          ))}
        </div>

        {/* Decorative element */}
        <div className={styles.decoration}>
          <div className={styles.ring1}></div>
          <div className={styles.ring2}></div>
          <div className={styles.ring3}></div>
        </div>
      </div>
    </section>
  );
}
