import React from "react";
import styles from "./Header.module.css";
import Container from "../../components/basic/container/Container"
import NavBar from "../../layouts/navbar/Navbar"
import Hamburger from "../hamburger/Hamburger";
function Header () {
    return (
        <header>
            <Container>
                <NavBar />
                <Hamburger/>
            </Container>
        </header>
    )
}
export default Header