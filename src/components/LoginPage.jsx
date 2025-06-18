import React from "react";
import styles from "../styles/LoginPage.module.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    alert(`Logged in as: ${email} (demo only)`);
    e.target.reset();
  };

  return (
    <section className={styles.login}>
      <h2 className={styles.heading}>Login Page</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Email&nbsp;ID
          <input type="email" required placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" required placeholder="●●●●●●" />
        </label>

        <button type="submit" className={styles.button}>
          Log&nbsp;In
        </button>
      </form>

      <div className={styles.links}>
        <Link to="#">Forgot password?</Link>
        <span>·</span>
        <Link to="/signup">Sign up</Link>
      </div>
    </section>
  );
}
