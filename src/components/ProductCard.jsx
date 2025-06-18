import React from 'react';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ image, title, price, onAdd }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <button className={styles.button} onClick={onAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
