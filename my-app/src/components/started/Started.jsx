import React from "react";
import styles from "./Started.module.css";
import Container from "../basic/container/Container";
function GetStarted () {
    return (
        <Container>
            <div className={styles.contentGetStarted}>
                <h2>Get started with Dock</h2>
                <button>Get Started</button>
            </div>
        </Container>
    )
}   
export default GetStarted