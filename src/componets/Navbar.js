import React, { useState } from "react";
import { Link } from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';

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
                <img className="logo-dark" src="https://previews.dropbox.com/p/thumb/ACRtjDay2PH2XpvyYu72XCaXXC8s8aJYx46yXA74QFmmHYdWzkRd4EVv8203-2Ss8TusIs7cm3Q9K8IilMW0KK661pKQmRcxbpLJkNTaq-e-PX_ekbH3L4a-yAUrhO4RYUzZCUtxE94OpXQCLruim3NqWDO8R0LvMXBGJYy0Eg5FLI_ZQqlKH6uynHHBdGwdUuslxu2eP8dwGrbWyrFC-ToSO3qkFXEaT-5C7NeLgsifJdCZsO9URB6nPvJUT7kgBkyLSsZkrmTqDHBZk4O3WL1iBoPcO-1eew0WIygaBqT0gvlvisvvDQHbE-HWpj0tNcrVQKaDP9elV7GiqjP5UANV/p.png" alt="logo" />
            </div>
            <ul className={click ? 'nav-menu opened' : 'nav-menu '} >
                <li className="menu-item">
                    <Link to='work' smooth={true} duration={500} onClick={handleClick}>
                        Projects
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to='about' smooth={true} duration={500} onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to='expertise' smooth={true} duration={500} onClick={handleClick}>
                        Expertise
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