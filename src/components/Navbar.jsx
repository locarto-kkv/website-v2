import React from "react";
import Logo from "./Logo.jsx";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.list} ${styles.leftList}`}>
        <li><a href="#what-we-do">What we do</a></li>
        <li><a href="#stories">Stories</a></li>
      </ul>
      <div className={styles.logo}>
        <Link to="/" style={{ display: "inline-block" }}>
          <Logo />
        </Link>
      </div>
      <ul className={`${styles.list} ${styles.rightList}`}>
        <li>
          <Link to="/login">Login / Signup</Link>
        </li>
        <li>
          <a href="#ref-to-earn">Ref to earn</a>
        </li>
      </ul>
    </nav>
  );
}
