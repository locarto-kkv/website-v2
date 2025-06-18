/* ──────────────────────────────────────────────────────────────
   src/components/FourthPage.jsx
   Three equal cards show playable YouTube videos; the visible trio
   rotates every 8 s.  react-player is used in “light” mode so each
   card first shows a cake photo from Unsplash, then loads the video
   only when clicked.
   ────────────────────────────────────────────────────────────── */

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import styles from "../styles/FourthPage.module.css"; // adjust if paths differ

/* 4 live cake-related videos */
const BLOGS = [
  {
    id: 1,
    title: "Ultimate Chocolate Cake",
    videoId: "zsig3vgWb8E",
  },
  {
    id: 2,
    title: "Rainbow Layer Cake Tutorial",
    videoId: "Ge9LBHMqF3c",
  },
  {
    id: 3,
    title: "Light & Creamy Cheesecake",
    videoId: "ZYoYffXWiwk",
  },
  {
    id: 4,
    title: "Easy Carrot Cake w/ Cream-Cheese Frosting",
    videoId: "EB0jyeTN1jw",
  },
];

/* Unsplash preview helper — “sig” param ensures varied images */
const preview = (seed) =>
  `https://source.unsplash.com/800x450/?cake&sig=${seed}`;

export default function FourthPage() {
  /* start at a random index so initial trio varies per page load */
  const [start, setStart] = useState(Math.floor(Math.random() * BLOGS.length));

  /* advance trio every 8 000 ms */
  useEffect(() => {
    const t = setInterval(() => setStart((s) => (s + 1) % BLOGS.length), 8000);
    return () => clearInterval(t);
  }, []);

  /* pick three consecutive posts */
  const visible = [
    BLOGS[start],
    BLOGS[(start + 1) % BLOGS.length],
    BLOGS[(start + 2) % BLOGS.length],
  ];

  return (
    <section className={styles.fourth} id="blog-section">
      <h2 className={styles.heading}>From&nbsp;Emerging&nbsp;Stories</h2>

      <div className={styles.cardRow}>
        {visible.map((post) => (
          <div key={post.id} className={styles.card}>
            <ReactPlayer
              url={`https://youtu.be/${post.videoId}`}
              light={preview(post.id + start)}   /* Unsplash cake photo */
              controls
              width="100%"
              height="100%"
              className={styles.player}          /* fills the card */
            />
            <span className={styles.caption}>{post.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
