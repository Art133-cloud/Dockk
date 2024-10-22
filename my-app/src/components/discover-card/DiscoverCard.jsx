import React from "react";
import styles from "./DiscoverCard.module.css";

function DiscoverCard ({src,alt,textUnderImage,bigText,longText}) {
    return (
        <div className={styles.discoverCardItem}>
            <img src={src} alt={alt} />
            <p>{textUnderImage}</p>
            <h4>{bigText}</h4>
            <h6>{longText}</h6>
            <a href="#">Learn More</a>
        </div>
    )
}
export default DiscoverCard