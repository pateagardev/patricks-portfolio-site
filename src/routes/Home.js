import React from "react";
import Navbar from "../componets/Navbar";
import IntroSec from "../componets/IntroSec";
import SkillsSec from "../componets/SkillsSec";
import PortfolioSec from "../componets/PortfolioSec";
import AboutSec from "../componets/AboutSec";

const Home = () => {
    return (
        <>
            <Navbar />
            <IntroSec />
            <AboutSec />
            <SkillsSec />
            <PortfolioSec />
        </>
    )
}

export default Home

