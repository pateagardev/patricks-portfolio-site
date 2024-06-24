import React from "react";

import { Link } from 'react-scroll';
// import {RiArrowDownSLine, RiInformationFill} from 'react-icons/ri';
import './IntroSecStyles.css'

const IntroSec = () => {
    const headerIntro = 'Patrick Eagar';
    return (
        <div className="masthead">
            <div className="container">
                <div className="colmn intor-colmn">
                    <h1 className="title intro-title"> {headerIntro} </h1>
                    <h2 className="title intro-subtitle">FRONT END Developer & Designer</h2>
                </div>
                <div className="learnmore">
                    <Link to='about' smooth={true} duration={500}>
                        Learn More
                    </Link>
                    <Link to='work' smooth={true} duration={500}>
                        Projects
                    </Link>
                    <a href="mailto:pateagar@gmail.com">
                        Contact
                    </a>
                </div>
              
            </div>
        </div>
    )
}

export default IntroSec