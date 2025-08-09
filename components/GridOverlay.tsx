'use client';

import styles from './GridOverlay.module.css';

export default function GridOverlay() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}></div>
    </div>
  );
}
