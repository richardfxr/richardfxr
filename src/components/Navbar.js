// === IMPORTS ============================
// React
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// Sass
import './Navbar.scss';
// SVGs
import {ReactComponent as Logo} from '../assets/SVGs/logo.svg';
import {ReactComponent as HomeIcon} from '../assets/SVGs/home.svg';
import {ReactComponent as ProjectsIcon} from '../assets/SVGs/projects.svg';
import {ReactComponent as AboutIcon} from '../assets/SVGs/about.svg';
import {ReactComponent as InfoIcon} from '../assets/SVGs/info.svg';


export default function Navbar({ setCurrentPage }) {
    const navUl = useRef(null);
    const magicLineVrt = useRef(null);
    const magicLineHrz = useRef(null);
    const location = useLocation();

    // updates magic line on initial load and on location (route) change
    useEffect(() => {
        // find currently active <NavLink />
        let activeLink = navUl.current.getElementsByClassName('active')[0];

        if (activeLink) {
            console.log("activeLink.offsetTop:", activeLink.offsetTop);
            console.log("activeLink.offsetLeft:", activeLink.offsetLeft);
            // update magic line position if activeLink is not falsy
            magicLineVrt.current.style.transform = "translateY(" + activeLink.offsetTop + "px)";
            magicLineHrz.current.style.transform = "translateX(" + activeLink.offsetLeft + "px)";
        }
    }, [location])

    return (
        <div className='navbar'>
            <header>
                <Logo className='logo'/>
                <nav>
                    <ul ref={navUl}>
                        <li><NavigationLink href="/" label="Home." setCurrentPage={setCurrentPage}/></li>
                        <li><NavigationLink href="/projects" label="Projects." setCurrentPage={setCurrentPage}/></li>
                        <li><NavigationLink href="/about" label="About me." setCurrentPage={setCurrentPage}/></li>
                        <li><NavigationLink href="/info" label="Site information." setCurrentPage={setCurrentPage}/></li>
                        <li className='magicLine' id="magicLineVrt" ref={magicLineVrt} aria-hidden="true"></li>
                        <li className='magicLine' id="magicLineHrz" ref={magicLineHrz} aria-hidden="true"></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}



// === INTERNAL COMPONENTS ================
function NavigationLink({ href, label, setCurrentPage }) {
    return (
        <NavLink to={href} aria-label={label} onClick={() => {setCurrentPage(href)}}>
            {/* conditional icon */}
            {href === "/" && <HomeIcon />}
            {href === "/projects" && <ProjectsIcon />}
            {href === "/about" && <AboutIcon />}
            {href === "/info" && <InfoIcon />}
        </NavLink>
    )
}