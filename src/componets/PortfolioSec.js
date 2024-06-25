import React from "react";
import './PortfolioSecStyles.css'
import { Link } from 'react-router-dom';
import 'animate.css';

import work1 from '../assets/work/skate_classics_photo.jpg';
import work2 from '../assets/work/vanclassics_photo.jpg';
import work3 from '../assets/work/vans_pantsguide_photo.jpg';
import work4 from '../assets/work/northface_history.jpg';

const PortfolioSec = () => {
   
    return (
        <div name="work" className='portfolio'>
            <div className="container">
                <div className="title-conatiner">
                    <h1 className="work-title">Projects</h1>
                    <p className="work-text">Here you will find a selection of personal and client projects I've created.</p>
                </div>
                <div className="project-gird">
                    <div className="project-row">
                        <div className="project-box project-box--info">
                            <img className="project-img" src={work4} alt="Vans Skateclassics Page" />
                        </div>
                        <div className="project-box project-box--info">
                            <h4 className="project-title">The North Face History</h4>
                            <p className="project-text">The North Face History Page is a collaborative project designed to offer users a deep dive into The North Face's storied heritage and product evolution.</p>
                            <p className="project-text">You can see it live to experience it firsthand.</p>
                            <h4 className="project-title">Tech Used</h4>
                            <div class="tech">
                                <div class="tech__skill">Nuxt</div>
                                <div class="tech__skill">Vue</div>
                                <div class="tech__skill">TypeScript</div>
                                <div class="tech__skill">HTML</div>
                                <div class="tech__skill">UNO/Tailwind CSS</div>
                                <div class="tech__skill">JSON</div>
                            </div>
                            <Link to='https://www.thenorthface.com/en-us/about-us/history' className="cta-btn">  See Live  </Link>
                        </div>
                    </div>
                    <div className="project-row">
                        <div className="project-box project-box--info order">
                            <img className="project-img" src={work1} alt="Vans Skateclassics Page" />
                        </div>
                        <div className="project-box project-box--info">
                            <h4 className="project-title">Vans Skate Classics</h4>
                            <p className="project-text">The Vans Skate Classics Landing Page was a highly successful collaborated marketing campaign for the launch of the Skate Classics shoes. What sets this page apart is that each skater featured has a unique story behind the shoe. It achieved a remarkable 35% increase in shoe sales upon its release in 2019.</p>
                            <p className="project-text">Although the landing page is no longer live, you can still check out a screen recording video of the website in action.</p>
                            <h4 className="project-title">Tech Used</h4>
                            <div class="tech">
                                <div class="tech__skill">JavaScript</div>
                                <div class="tech__skill">TypeScript</div>
                                <div class="tech__skill">GSAP</div>
                                <div class="tech__skill">HTML</div>
                                <div class="tech__skill">CSS</div>
                                <div class="tech__skill">SASS</div>
                            </div>
                            <Link to='/xo' className="cta-btn">  See Video  </Link>
                        </div>
                    </div>
                    <div className="project-row">
                        <div className="project-box project-box--info">
                            <img className="project-img" src={work2} alt="Vans Skateclassics Page" />
                        </div>
                        <div className="project-box project-box--info">
                            <h4 className="project-title">Vans Classics</h4>
                            <p className="project-text">The Vans Classics Landing Page was a highly successful collaborated marketing campaign for the launch of the 5 Classic shoes. What sets this page apart is its deep exploration of the classic shoes' heritage and its showcase of an artist who reimagined the timeless shoe styles. It achieved a remarkable 40% increase in shoe sales upon its release in 2020.</p>
                            <p className="project-text">You can see it live to experience its impact firsthand.</p>
                            <h4 className="project-title">Tech Used</h4>
                            <div class="tech">
                                <div class="tech__skill">JavaScript</div>
                                <div class="tech__skill">TypeScript</div>
                                <div class="tech__skill">GSAP</div>
                                <div class="tech__skill">HTML</div>
                                <div class="tech__skill">CSS</div>
                                <div class="tech__skill">SASS</div>
                                <div class="tech__skill">JSON</div>
                            </div>
                            <Link to='https://www.vans.com/en-us/classics' target="_blank" className="cta-btn">  See Live  </Link>
                        </div>
                    </div>
                    <div className="project-row">
                        <div className="project-box project-box--info order">
                            <img className="project-img" src={work3} alt="Vans Skateclassics Page" />
                        </div>
                        <div className="project-box project-box--info">
                            <h4 className="project-title">Vans Pants Guide</h4>
                            <p className="project-text">The Pants Guide, a collaborative project on the Vans website, was a standout success by offering diverse styles for each pair of pants. Its launch in 2020 resulted in a remarkable 35% increase in shoe sales, highlighting its impact on enhancing the shopping experience and driving overall sales.</p>
                            <p className="project-text">You can see it live to experience its impact firsthand.</p>
                            <h4 className="project-title">Tech Used</h4>
                            <div class="tech">
                                <div class="tech__skill">VanillaJS</div>
                                <div class="tech__skill">TypeScript</div>
                                <div class="tech__skill">GSAP</div>
                                <div class="tech__skill">HTML</div>
                                <div class="tech__skill">CSS</div>
                                <div class="tech__skill">SASS</div>
                                <div class="tech__skill">JSON</div>
                            </div>
                            <Link to='https://www.vans.com/en-us/pantsguide' target="_blank"  className="cta-btn">  See Live  </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSec