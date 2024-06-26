import React from "react";
import Navbar from "../components/Navbar";
import IntroSec from "../components/IntroSec";
import PortfolioSec from "../components/PortfolioSec";
import AboutSec from "../components/AboutSec";

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

