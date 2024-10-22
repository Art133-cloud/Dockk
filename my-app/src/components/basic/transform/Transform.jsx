import React from "react";
import styles from "./Transform.module.css";

function Transform ({titleTopTransform,titleBottomTransform,textTransform}) {
    return (
    <div className={styles.transformContent}>
        <div>
            <h2>{titleTopTransform}</h2>
            <h2>{titleBottomTransform}</h2>
        </div>
        <p>{textTransform}</p>
    </div>
    )
}
export default Transform