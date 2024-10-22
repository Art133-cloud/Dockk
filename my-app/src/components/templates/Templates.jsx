import React from "react";
import styles from "./Templates.module.css";
import Container from "../basic/container/Container";
import Button from "../basic/button/Button";
import FirstCardImg from "../../assets/FirstCardImg.png"
import SecondCardImg from "../../assets/SecondCardImg.png"
import ThirdCardImg from "../../assets/ThirdCardimg.png"
import ForCardImg from "../../assets/ForCardImg.png"
import FiveCardImg from "../../assets/FiveCardImg.png"
import SixCardImg from "../../assets/SixCardImg.png";
import CardTemplate from "../basic/cardTemplate/CardTemplates";
import Sliders from "../slider/Slider";
function Templates () {
    const cardsTemplate = [
        {
            src: FirstCardImg,
            alt: "firstCardImg",
            title: "Sales",
            text: "Demo Follow Up"
        },
        {
            src: SecondCardImg,
            alt: "SecondCardImg",
            title: "Sales",
            text: "Enterprise Sales"
        },
        {
            src: ThirdCardImg,
            alt: "ThirdCardImg",
            title: "Agency",
            text: "Design Proposal"
        },
        {
            src: ForCardImg,
            alt: "ForCardImg",
            title: "Agency",
            text: "Website Proposal"
        },
        {
            src: FiveCardImg,
            alt: "FiveCardImg",
            title: "Agency",
            text: "Brand Design Project"
        },
        {
            src: SixCardImg,
            alt: "SixCardImg",
            title: "Customer Success",
            text: "Implementation Plan"
        }
    ]
    return (
        <Container>
            <div className={styles.contentTemplate}>
                <div className={styles.topTemplate}>
                    <h2>Explore Dock templates</h2>
                    <p>Explore templates for sales, customer success, and agencies. Customize any template and share with clients.</p>
                    <Button text={"Explore templates →"} className={styles.buttonText}/>
                </div>
                <div className={styles.cardsTemplate}>
                    {cardsTemplate.map((item,index) => {
                        return <CardTemplate key={index} src = {item.src} alt = {item.alt} title = {item.title} text = {item.text} />
                    })}
                </div>
                <Sliders />
            </div>
        </Container>
    )
}
export default Templates