import React from "react";
import Header from "../layouts/header/Header";
import Workspace from "../components/workspace/Workspace";
import Transform from "../components/basic/transform/Transform"
import Clients from "../components/clients/Clients";
import Excel from "../components/excel/Excel";
import CardSection from "../components/cardSection/CardSection";
import Analytics from "../components/analytics/Analytics"
import SecondCard from "../components/second-card-section/Cardssect"
import Discover from "../components/discover/Discover";
import Templates from "../components/templates/Templates";
import GetStarted from "../components/started/Started";
import Footer from "../layouts/footer/Footer";
function FirstPage () {
    const transformBase = {
        firsttitleTopTransform: "Transform the customer experience from",
        firsttitleBottomTransform: "demo to onboarding and beyond",
        firsttextTransform: "Personalized spaces that make you look professional.",
        secondtitleBottomTransform: "Uplevel how Sales and Customer teams work",
        secondtextTransform: "Dock helps leadership build a repeatable sales and customer success process.",
    }   
    return (
        <>
            <Header />
            <Workspace />
            <Transform titleTopTransform = {transformBase.firsttitleTopTransform}
            titleBottomTransform = {transformBase.firsttitleBottomTransform}
            textTransform = {transformBase.firsttextTransform}
            />
            <Clients />
            <Excel />
            <CardSection />
            <Transform titleBottomTransform = {transformBase.secondtitleBottomTransform}
                       textTransform = {transformBase.secondtextTransform}/>
            <Analytics />
            <SecondCard />
            <Discover />
            <Templates />
            <GetStarted />
            <Footer />
    </>
    )
}
export default FirstPage