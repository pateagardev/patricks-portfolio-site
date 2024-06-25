import React from "react";
import Navbar from "../componets/Navbar";
import IntroSec from "../componets/IntroSec";
import PortfolioSec from "../componets/PortfolioSec";
import AboutSec from "../componets/AboutSec";

const Home = () => {
    return (
        <>
            <Navbar />
            <IntroSec />
            <AboutSec />
            <PortfolioSec />
        </>
    )
}

export default Home

