// src/components/Secondpage.jsx
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from './ProductCard';
import styles from '../styles/Secondpage.module.css';

export default function Secondpage() {
  // create 10 items all using the same image and title "Shoes"
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    image: `/src/assets/ex-photo.png`,
    title: 'Shoes',                              // ← same title for all
    price: (Math.random() * 100 + 20).toFixed(2),
  }));

  // initialize Embla in loop mode
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className={styles.second}>
      <button
        className={`${styles.navButton} ${styles.left}`}
        onClick={scrollPrev}
      >
        ‹
      </button>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {products.map((p) => (
            <div className={styles.embla__slide} key={p.id}>
              <ProductCard
                image={p.image}
                title={p.title}
                price={parseFloat(p.price)}
                onAdd={() => {}}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.navButton} ${styles.right}`}
        onClick={scrollNext}
      >
        ›
      </button>
    </section>
  );
}
