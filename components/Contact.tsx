'use client';

import styles from './Contact.module.css';

export default function Contact() {

  const contactMethods = [
    {
      platform: 'Email',
      handle: 'veshantdahiya@gmail.com',
      link: 'mailto:veshantdahiya@gmail.com'
    },
    {
      platform: 'LinkedIn',
      handle: '/in/veshant-dahiya',
      link: 'https://linkedin.com/in/veshant-dahiya'
    },
    {
      platform: 'GitHub',
      handle: '@xcress',
      link: 'https://github.com/xcress'
    }
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNumber}>05</span>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <h3 className={styles.headline}>
              Let&apos;s Build Something
              <span className={styles.accent}> Amazing </span>
              Together
            </h3>
            <p className={styles.description}>
              I&apos;m currently working at Cosmos Financial Group, but I&apos;m always interested in hearing about new opportunities,
              collaborations, or just having a conversation about technology and innovation.
            </p>
            <div className={styles.availability}>
              <span className={styles.statusDot}></span>
              <span>Available for freelance projects</span>
            </div>
          </div>

          <div className={styles.contactMethods}>
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <div className={styles.linkContent}>
                  <span className={styles.platform}>{method.platform}</span>
                  <span className={styles.handle}>{method.handle}</span>
                </div>
                <span className={styles.arrow}>↗</span>
              </a>
            ))}
          </div>

          <div className={styles.directContact}>
            <a href="mailto:veshantdahiya@gmail.com" className={styles.ctaButton}>
              <span>SEND ME AN EMAIL</span>
              <span className={styles.buttonIcon}>→</span>
            </a>
          </div>
        </div>

        {/* Geometric decoration */}
        <div className={styles.decoration}>
          <div className={styles.square1}></div>
          <div className={styles.square2}></div>
          <div className={styles.triangle}></div>
        </div>
      </div>
    </section>
  );
}
