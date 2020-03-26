import React from 'react';
import logo from '../../logo.svg'
import './navBar.scss'

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt="city tours"/>
            <ul className="nav-links">
                <li><a href="/" className="nav-link">
                    home
                </a></li>
                <li><a href="/" className="nav-link">
                    about
                </a></li>
                <li><a href="/" className="nav-link">
                    tours
                </a></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;