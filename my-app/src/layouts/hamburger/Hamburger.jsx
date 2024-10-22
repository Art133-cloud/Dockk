import React from "react";
import styles from "./Hamburger.module.css";
import Button from "../../components/basic/button/Button";
function Hamburger() {
  return (
    <nav className={styles.nav}>
      <div className={styles.hamburgerMenu}>
        <input
          id="menu__toggle"
          type="checkbox"
          className={styles.menuToggle}
        />
        <label className={styles.menuBtn} htmlFor="menu__toggle">
          <span />
        </label>
        <ul className={styles.menuBox}>
          <li>
            <a className={styles.menuItem} href="#">Why Dock</a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">Solutions</a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">Templates</a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">Library</a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">Login</a>
          </li>
          <li>
            <Button text="Get Started"/>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Hamburger;
