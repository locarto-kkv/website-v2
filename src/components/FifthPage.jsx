import React from "react";
import styles from "../styles/FifthPage.module.css";   // adjust if paths differ
import logo from "../assets/locarto-logo.png";         // used as bg via inline style

export default function FifthPage() {
  return (
    <section className={styles.fifth} id="cta-section">
      {/* ── main headline ────────────────────── */}
      <h2 className={styles.headline}>
        Because buying and selling&nbsp;is a<br />
        rhythm, not&nbsp;a&nbsp;riddle
      </h2>

      {/* ── e-mail capture row ───────────────── */}
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.target.elements.email.value;
          // TODO: hook up to backend / newsletter service
          alert(`Thanks, ${email}! We'll be in touch.`);
          e.target.reset();
        }}
      >
        <input
          type="email"
          name="email"
          required
          placeholder="emailaddress@gmail.com"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Plug into the rhythm
        </button>
      </form>

      {/* ── socials prompt ───────────────────── */}
      <p className={styles.socials}>#socials</p>

      {/* ── logo occupies bottom-half as bg ───── */}
      <div
        className={styles.logoArea}
        style={{ backgroundImage: `url(${logo})` }}
        aria-hidden="true"
      />
    </section>
  );
}
