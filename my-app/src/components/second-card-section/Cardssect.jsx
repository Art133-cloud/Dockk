import React from "react";
import styles from "./Cardsect.module.css";
import Container from "../basic/container/Container";
import Card from "../basic/card/Card";
import ThirdCard from "../../assets/thirdcard.png";
import ForCard from "../../assets/forcard.png"
function SecondCards () {
    const cardBase = [
        {
            title: "Save Time.",
            text: "Duplicate work from project to project, so you’re not starting from scratch every time.",
            src: ThirdCard,
            alt: "ThirdCard",
            className: ""
        },
        {
            title: "Move the relationship forward.",
            text: "Notifications give visibility into how the project is moving along.",
            src: ForCard,
            alt: "ForCard",
            className: ""
        }
    ]
    return (
            <>
                <Container>
                    <div className={styles.cards}>
                        {cardBase.map ((item,index) => {
                            return <div className={styles.cardItem} key={index}>
                                <Card title = {item.title} text = {item.text} src={item.src} alt={item.alt}/>
                            </div>
                        })}
                    </div>
                </Container>
            </>

    )
}
export default SecondCards