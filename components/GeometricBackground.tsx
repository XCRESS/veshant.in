'use client';

import styles from './GeometricBackground.module.css';

export default function GeometricBackground() {
  return (
    <div className={styles.container}>
      {/* Floating geometric shapes */}
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
      <div className={styles.shape4}></div>
      <div className={styles.shape5}></div>
      
      {/* Lines */}
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
    </div>
  );
}
