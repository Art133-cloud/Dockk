import React from "react";
import styles from "./CardTemplate.module.css";
function CardTemplate ({src,alt,title,text}) {
    return (
        <div className={styles.cardItem}>
            <img src={src} alt={alt} />
            <p>{title}</p>
            <h2>{text}</h2>
        </div>
    )
}
export default CardTemplate