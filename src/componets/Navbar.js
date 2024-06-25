import React, { useState } from "react";
import { Link } from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';

import darkLogo from '../assets/logos/patnewlogo_dark_v2.svg';

import './NavbarSyles.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    const [headerClassName, setHeaderClassName] = useState('header');

    const handleScroll = (headerClassName) => {
        if (headerClassName !== 'header fixed' && window.pageYOffset >= 100) {
            setHeaderClassName('header fixed');
        } else if (headerClassName === 'header fixed' && window.pageYOffset < 100) {
            setHeaderClassName('header');
        }
    }

    React.useEffect(() => {
        window.onscroll = () => handleScroll(headerClassName);
    })

    return (
        <div className={headerClassName}>
            <div className="logo-title">
                <img className="logo-dark" src={darkLogo} alt="logo" />
            </div>
            <ul className={click ? 'nav-menu opened' : 'nav-menu '} >
                <li className="menu-item">
                    <Link to='about' smooth={true} duration={500} onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to='work' smooth={true} duration={500} onClick={handleClick}>
                        Projects
                    </Link>
                </li>
                <li className="menu-item">
                    <a href="mailto:pateagar@gmail.com">
                        Contact
                    </a>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes />) : (<FaBars /> )}
            </div>
        </div>
    )
}

export default Navbar