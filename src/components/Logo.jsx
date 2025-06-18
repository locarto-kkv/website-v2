// src/components/Logo.jsx
import React from 'react';
import logo from '../assets/locarto-logo.png';
import styles from '../styles/Logo.module.css';

export default function Logo() {
  return (
    <img
      src={logo}
      alt="Locarto"
      className={styles.logoImg}
    />
  );
}
