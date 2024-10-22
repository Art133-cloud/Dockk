import React from "react";
import styles from "./Card.module.css";

function Card ({title,text,src,alt,className}) {
    return (
        <div className={styles.basicCard}>
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={src} alt={alt} className={className}/>
        </div>
    )
}
export default Card