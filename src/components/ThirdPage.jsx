import React from "react";
import ReactPlayer from "react-player";
import styles from "../styles/ThirdPage.module.css";

export default function ThirdPage() {
  return (
    <section className={styles.third} id="video-section">
      <h2 className={styles.heading}>Watch Locarto in action</h2>

      {/* -------------- Video wrapper -------------- */}
      <div className={styles.playerWrapper}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" /* any public URL */
          playing            /* auto-plays (remove if you prefer paused) */
          muted               /* avoid audio surprises */
          loop
          controls={false}   /* hide YT controls; set true if you want them */
          width="100%"
          height="100%"
          className={styles.player} /* ensures absolute positioning */
        />
      </div>
    </section>
  );
}
