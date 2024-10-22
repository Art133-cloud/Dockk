import React from "react";
import styles from "./CardSection.module.css";
import Container from "../basic/container/Container";
import Card from "../basic/card/Card";
import Firstcard from "../../assets/firstcard.png"
import SecondCard from "../../assets/secondcard.png"
function CardSection () {
    const CardBase = [
        {
            title: "Personalization at scale.",
            text: "Create branded spaces with custom content.",
            src: Firstcard,
            alt: "FirstCardImg",
            className: ""
        },
        {
            title: "Share feedback & move projects along.",
            text: "Customers comment on what you’re working on and share key resources with file uploads.",
            src: SecondCard,
            alt: "SecondCardImg",
            className: `${styles.secondImgCard}`
        }
    ]
    return (
        <div className={styles.contentCardSection}>
            <Container>
                <div className={styles.childCard}>
                {CardBase.map ((item,index) => {
                    return <Card key={index} title={item.title} text={item.text} src={item.src} alt={item.alt} className={item.className}/>
                })}
                </div>
            </Container>
        </div>
    )
}
export default CardSection;