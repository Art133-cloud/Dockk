import React from "react";
import styles from "./Workspace.module.css";
import Container from "../basic/container/Container";
import PhotoFirstSection from "../../assets/photoFirstSection.png";
function Workspace() {
    return (
        <div className={styles.parentWorkspace}>
            <Container>
                <div className={styles.contentWorkspace}>
                    <div className={styles.leftWorkspace}>
                        <h1>The new way to manage external relationships</h1>
                        <p>Create shared spaces with <br />prospects and customers</p>
                        <button>Get Started</button>
                    </div>
                    <div className={styles.rightWorkspace}>
                        <img src={PhotoFirstSection} alt="photoFirstSection" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Workspace