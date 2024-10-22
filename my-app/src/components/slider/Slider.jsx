import React,{useState} from 'react';
import styles from './Slider.module.css';
import FirstCardImg from "../../assets/FirstCardImg.png"
import SecondCardImg from "../../assets/SecondCardImg.png"
import ThirdCardImg from "../../assets/ThirdCardimg.png"
import ForCardImg from "../../assets/ForCardImg.png"
import FiveCardImg from "../../assets/FiveCardImg.png"
import SixCardImg from "../../assets/SixCardImg.png";
import CardTemplate from "../basic/cardTemplate/CardTemplates";
const Slider = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const handleRadioChange = (index) => {
        setCurrentSlide(index);
    };

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
    ];

    return (
        <div className={styles.slider}>
            {cardsTemplate.map((item, index) => (
                <input
                    key={index}
                    type="radio"
                    name="slider"
                    id={`slide${index + 1}`}
                    checked={currentSlide === index}
                    onChange={() => handleRadioChange(index)}
                />
            ))}

            <div className={styles.slides}>
                <div className={styles.overflow}>
                    <div className={styles.inner} style={{ marginLeft: `-${currentSlide * 100}%` }}>
                        {cardsTemplate.map((item, index) => (
                            <div key={index} className={`${styles.slide} ${styles[`slide_${index + 1}`]}`}>
                                <div className={styles.slideContent}>
                                    <img src={item.src} alt={item.alt} />
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.controls}>
                {cardsTemplate.map((_, index) => (
                    <label key={index} htmlFor={`slide${index + 1}`} />
                ))}
            </div>

            <div className={styles.bullets}>
                {cardsTemplate.map((_, index) => (
                    <label key={index} htmlFor={`slide${index + 1}`} />
                ))}
            </div>
        </div>
    );
};
export default Slider;