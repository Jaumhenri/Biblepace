import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftText}>
        <span className={styles.brand}>BiblePace</span>
        <span className={styles.dot}>•</span>
        <span>Discipulado bíblico para uma geração que busca mais.</span>
      </div>
      <div className={styles.rightBrand}>
        BIBLEPACE
      </div>
    </footer>
  );
}
