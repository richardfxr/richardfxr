// === IMPORTS ============================
// React
import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// Sass
import './Navbar.scss';
// SVGs
import {ReactComponent as Logo} from '../assets/SVGs/logo.svg';
import {ReactComponent as HomeIcon} from '../assets/SVGs/home.svg';
import {ReactComponent as ProjectsIcon} from '../assets/SVGs/projects.svg';
import {ReactComponent as AboutIcon} from '../assets/SVGs/about.svg';
import {ReactComponent as InfoIcon} from '../assets/SVGs/info.svg';


export default function Navbar() {
    const location = useLocation();

    // refs
    const navUl = useRef(null);
    const magicLineVrt = useRef(null);
    const magicLineHrz = useRef(null);
    
    // updates magic line on initial load and on location (route) change
    useEffect(() => {
        // find currently active <NavLink />
        let activeLink = navUl.current.getElementsByClassName('active')[0];

        if (activeLink) {
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
                    <ul ref={navUl} aria-label="main navigation">
                        <li><NavigationLink href="/" label="Home." /></li>
                        <li><NavigationLink href="/projects" label="Projects." /></li>
                        <li><NavigationLink href="/about" label="About me." /></li>
                        <li><NavigationLink href="/info" label="Site information." /></li>
                        <li className='magicLine' id="magicLineVrt" ref={magicLineVrt} aria-hidden="true"></li>
                        <li className='magicLine' id="magicLineHrz" ref={magicLineHrz} aria-hidden="true"></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}



// === INTERNAL COMPONENTS ================
function NavigationLink({ href, label }) {
    return (
        <NavLink to={href} aria-label={label}>
            {/* conditional icon */}
            {href === "/" && <HomeIcon />}
            {href === "/projects" && <ProjectsIcon />}
            {href === "/about" && <AboutIcon />}
            {href === "/info" && <InfoIcon />}
        </NavLink>
    )
}