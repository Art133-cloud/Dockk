import React from "react";
import styles from "./Analytics.module.css";
import Container from "../basic/container/Container";
import Analytics from "../../assets/analytics.png";
function AnalyticsSection () {
    return (
        <div className={styles.parentAnalytic}>
            <Container>
                <div className={styles.contentAnalytic}>
                    <div className={styles.leftAnalytic}>
                        <h2>Understand what content performs</h2>
                        <p>Get insight into when clients view the shared space and what they clicked on.</p>
                    </div>
                    <div className={styles.rightAnalytic}>
                        <img src={Analytics} alt="Analytics" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default AnalyticsSection