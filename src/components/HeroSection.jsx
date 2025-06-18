// src/components/HeroSection.jsx
import React from 'react';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>Envision the way you<br/> shop like never before</h1>
        <p>Store experience at your fingertips</p>
      </div>
    </section>
  );
}
