import React from "react";
import styles from "../styles/SignupPage.module.css";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    alert(`Welcome, ${name}! (Demo only)`);
    e.target.reset();
  };

  return (
    <section className={styles.signup}>
      <h2 className={styles.heading}>Sign up</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required placeholder="Your Name" />
        </label>

        <label>
          Email&nbsp;ID
          <input type="email" name="email" required placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" name="password" required placeholder="Create a password" />
        </label>

        <button type="submit" className={styles.button}>
          Create Account
        </button>
      </form>

      <div className={styles.links}>
        Already have an account?&nbsp;
        <Link to="/login">Log in</Link>
      </div>
    </section>
  );
}
