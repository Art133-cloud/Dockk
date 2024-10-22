import React from "react";
import styles from "./Discover.module.css";
import Container from "../basic/container/Container";
import Card from "../discover-card/DiscoverCard";
import FirstImg from "../../assets/discovercardfirst.png";
import SecondImg from "../../assets/discovercardsecond.png";

function Discover () {
    const Cards = [
        {
            src: FirstImg,
            alt: "circlewithout",
            textUnderImage: "Sales",
            bigText: "Transform the sales experience",
            longText: "Dock makes it easy for prospects to buy and helps sales teams build a repeatable process."
        },
        {
            src: SecondImg,
            alt: "circles",
            textUnderImage: "Customer Success",
            bigText: "Build strong relationships with customers",
            longText: "Dock helps companies onboard customers and manage ongoing relationships."
        }
    ]
    return (
            <Container>
                <div className={styles.contentDiscover}>
                    <div className={styles.leftTextsDiscover}>
                        <h2>Discover how Sales and Customer teams use Dock everyday</h2>
                        <p>Dock helps companies across the customer lifecycle.</p>
                    </div>
                    <div className={styles.cardsDiscover}>
                        {Cards.map((item,index) => {
                            return <Card key = {index} src = {item.src} alt = {item.alt} textUnderImage = {item.textUnderImage} bigText={item.bigText} longText={item.longText} />
                        })}
                    </div>
                </div>
            </Container>
    )
}
export default Discover