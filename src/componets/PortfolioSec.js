import React from "react";
import { Container } from "react-bootstrap";
import './PortfolioSecStyles.css'
import { Link } from 'react-router-dom';
import 'animate.css';
// import TrackVisibility from 'react-on-screen';

import work1 from '../assets/work/skate_classics_photo.jpg';
import work2 from '../assets/work/vans_exorange_photo.jpg';
import work3 from '../assets/work/vans_skate_photo.jpg';
import work4 from '../assets/work/vans_oldskool_photo.jpg';
import work5 from '../assets/work/vans_team_photo.jpg';
import work6 from '../assets/work/vans_family_photo.jpg';

const PortfolioSec = () => {
   
    return (
        <div name="work" className='portfolio'>
            <Container>

                
                <h1 className="work-title"> My Recent Work</h1>
                <p className="work-text">Here are a few projects I've worked on. Interested in seeing more? Feel free to <a href="mailto:pateagar@gmail.com"> email </a> me.</p>
                <div className="project-gird">
                    <div className="colmn project-colmn">
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src={work1} alt="Vans Skateclassics Page" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">Vans Skate Classics</h4>
                                    <p className="text-category">HTML / CSS / jQuery / Design</p>
                                </div>
                                <Link to='/xo' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src={work2} alt="Vans EXO Range Page" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">The UltraRange EXO</h4>
                                    <p className="text-category">Pug / SCSS / Typescript</p>
                                </div>
                                <Link to='/xo' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src={work3} alt="Vans Skate Page" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">Vans Skate Page</h4>
                                    <p className="text-category">Pug / SCSS / Typescript</p>
                                </div>
                                <Link to='https://www.vans.com/en-us/skateboarding' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src={work4} alt="Make Your Own" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">Make Your Own</h4>
                                    <p className="text-category">Pug / SCSS / Typescript</p>
                                </div>
                                <Link to='/skate' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src={work6} alt="Vans Wax Records Page" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">Vans Family</h4>
                                    <p className="text-category">Pug / SCSS / Typescript</p>
                                </div>
                                <Link to='https://www.vans.com/en-us/family' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                        <div className="project-wrap">
                            <div className="project-inner">
                                <img className="project-img" src={work5} alt="Vans Teams Page" />
                                <div className="portfolio-bg"></div>
                                <div className="label-text">
                                    <h4 className="title-category">Vans Team Page</h4>
                                    <p className="text-category">Pug / SCSS / Typescript</p>
                                </div>
                                <Link to='https://www.vans.com/en-us/team' className="cta-btn">  View  </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PortfolioSec