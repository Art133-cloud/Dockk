import React from "react";
import styles from "./FooterMenu.module.css";

function FooterMenu ({links = []}) {
    return (
        <div className={styles.footerMenuContent}>
            {links.map((text, index) => (
              <a key={index} href="#">
                {text}
              </a>
            ))}
        </div>
    )
}
export default FooterMenu