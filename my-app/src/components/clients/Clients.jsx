import React from "react";
import styles from "./Clients.module.css";
import Container from "../basic/container/Container";
import logos from "../../assets/logosClients.png";
import Customer from "../../assets/CustomerService.png"
function TextClients ({text}) {
    return (
        <p>{text}</p>
    )
}
function Clients () {
    const texts = {
        textOne: 'One destination that hosts all of your links, pdfs, meeting agendas, deliverables, project timelines, proposals, and more.',
        textTwo: 'Embed your favorite software from Figma to Google Slides to Vimeo.'
    }
    return (
        <div className={styles.parentClients}>
            <Container>
                <div className={styles.contentClients}>
                    <div className={styles.leftClients}>
                        <div className={styles.topText}>
                            <h2>Clients always know where to go when they need something</h2>
                            <TextClients text = {texts.textOne}/>
                        </div>
                        <div className={styles.bottomText}>
                            <TextClients text= {texts.textTwo}/>
                            <a href="#">
                                <img src={logos} alt="logos" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.rightClients}>
                        <img src={Customer} alt="Customer" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Clients