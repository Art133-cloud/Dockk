import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import Button from "../../components/basic/button/Button"
function TextsNav({ text }) {
    return (
        <a href="#">{text}</a>
    )
}
function NavBar() {
    const textsNavBar = [
        "Solutions",
        "Templates",
        "Library"
    ]
    return (
        <nav>
            <div className={styles.leftNav}>

                <img src={Logo} alt="logo" />
            <ul>
                <li>
                    <h4>Why Dock</h4>
                </li>
                {textsNavBar.map((item, index) => (
                    <li key={index}>
                        <TextsNav text={item} />
                    </li>
                ))}
            </ul>
            </div>

            <div className={styles.rightNavbar}>
                <a href="http://localhost:3001/index.html" target="_blank" rel="noopener noreferrer">Sign In</a>
                <Button text="Get Started" />
            </div>
        </nav>
    )
}
export default NavBar