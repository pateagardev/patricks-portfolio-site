import React from "react";

import './SkillsSecStyles.css';
import {FaLaptopCode, FaDraftingCompass} from 'react-icons/fa';

const SkillsSec = () => {

    return (
        <div name="expertise" className="skills">
            <div className="container">
               <div className="colmn skills-colmn">
                    <div className="inner frontend">
                        <FaLaptopCode className="fa-laptop" />
                        <h3 className="title skills-title">Front End Developer</h3>
                        <p>I am passionate about bringing creative ideas to life on the web.</p>
                        <p className="list-title"> Things I love:</p>
                        <p>VueJS, ReactJS, TypeScript, Javascript, HTML5/CSS3/SASS</p>
                        <p className="list-title">Dev Tools:</p>
                        <ul>
                            <li>Visual Studio</li>
                            <li>Github</li>
                            <li>Webpack</li>
                            <li>NodeJS</li>
                            <li>ESLint</li>
                        </ul>
                    </div>
                    <div className="inner design">
                        <FaDraftingCompass className="fa-drafting" />
                        <h3 className="title skills-title">Designer</h3>
                        <p>I have a passion for designing websites, apps, logos, and engaging user interactions.</p>
                        <p className="list-title"> Things I love:</p>
                        <p>UX, UI, Web, Mobile, Apps, Logos</p>
                        <p className="list-title"> Design Tools:</p>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Sketch</li>
                            <li>Figma</li>
                            <li>FlowMapp</li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default SkillsSec