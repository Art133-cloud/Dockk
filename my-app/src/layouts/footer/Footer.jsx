import React from "react";
import styles from "./Footer.module.css";
import Container from "../../components/basic/container/Container";
import FooterLogo from "../../assets/FooterLogo.png";
import FooterMenu from "../../components/basic/footerMenu/FooterMenu";
function Footer () {
    const textsFooter = [
        {links: ["Legal","Terms of Service","Privacy Policy","Privacy Request"]},
        {links: ["Support", "Help Center", "support@dock.us"]},
        {links: ["General", "Request Invite", "Twitter"]} 
    ]
    return (
        <footer>
            <Container>
                <div className={styles.contentFooter}>
                    <div className={styles.leftFooter}>
                        <img src={FooterLogo} alt="Logo" />
                        <a href="#">Copyright © 2021 Dock Labs, Inc. <br />All rights reserved.</a>
                    </div>
                    <div className={styles.rightFooter}>
                    {textsFooter.map((item, index) => (
                       <FooterMenu links={item.links} key={index} />
                    ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}
export default Footer