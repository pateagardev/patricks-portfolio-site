import React from "react";

import './AboutSecStyles.css'

const AboutSec = () => {


    return (
        <div name="about" className='about'>
            <div className="container">
                <div className="title-conatiner">
                    <h1 className="about-title">About Me </h1>
                    <p className="about-text">Here, you'll find more information about me, my work, and my current skills, primarily in programming and technology.</p>
                </div>
                <div className="info-wrapper">
                    <div className="info-box info-box--about">
                        <h3 class="info-title">Who am I?</h3>
                        <p class="info-box--text">
                            I'm a <strong>Front-end Web Developer</strong> with a passion for building and managing the front-end of websites and web applications. My goal is to create user-friendly, visually appealing, and highly functional interfaces that contribute to the overall success of the product. I thrive on solving complex problems and bringing creative designs to life through clean, efficient code. Whether it's enhancing user experience or optimizing performance, I'm dedicated to delivering top-notch results. Check out some of my work in the <strong>Projects</strong> section to see the range and depth of my expertise.
                        </p>
                        <p class="info-box--text">
                            If you have job opportunities where I can contribute, learn, and grow, I'd love to connect. Please don't hesitate to <a href="mailto:hi@pateagar.com"> get in touch.</a>
                        </p>
                    </div>
                    <div className="info-box info-box--skill">
                        <h3 class="info-title">Skills</h3>
                        <div class="skills">
                            <div class="skills__skill">React</div>
                            <div class="skills__skill">Vue</div>
                            <div class="skills__skill">JavaScript</div>
                            <div class="skills__skill">TypeScript</div>
                            <div class="skills__skill">GSAP</div>
                            <div class="skills__skill">VanillaJS</div>
                            <div class="skills__skill">NuxtJS</div>
                            <div class="skills__skill">ESLint</div>
                            <div class="skills__skill">Node</div>
                            <div class="skills__skill">HTML</div>
                            <div class="skills__skill">CSS</div>
                            <div class="skills__skill">SASS</div>
                            <div class="skills__skill">Node</div>
                            <div class="skills__skill">GIT</div>
                            <div class="skills__skill">Github</div>
                            <div class="skills__skill">Tailwind CSS</div>
                            <div class="skills__skill">Responsive Design</div>
                            <div class="skills__skill">SEO</div>
                            <div class="skills__skill">Terminal</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutSec


