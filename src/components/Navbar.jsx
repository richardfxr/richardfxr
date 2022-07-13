// === IMPORTS ============================
// React
import { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
// Sass
import './Navbar.scss'
// components
import { routes } from './AnimatedRoutes'
// SVGs
import {ReactComponent as Logo} from '../assets/SVGs/logo.svg'
import {ReactComponent as HomeIcon} from '../assets/SVGs/home.svg'
import {ReactComponent as ProjectsIcon} from '../assets/SVGs/projects.svg'
import {ReactComponent as AboutIcon} from '../assets/SVGs/about.svg'
import {ReactComponent as InfoIcon} from '../assets/SVGs/info.svg'


export default function Navbar() {
    const location = useLocation()

    // refs
    const navUl = useRef(null)
    const magicLineVrt = useRef(null)
    const magicLineHrz = useRef(null)
    
    // updates magic line on initial load and on location (route) change
    useEffect(() => {
        // find currently active <NavLink />
        let activeLink = navUl.current.getElementsByClassName('active')[0]

        if (activeLink) {
            // update magic line position if activeLink is not falsy
            magicLineVrt.current.style.transform = "translateY(" + activeLink.offsetTop + "px)"
            magicLineHrz.current.style.transform = "translateX(" + activeLink.offsetLeft + "px)"
        }
    }, [location])

    return (
        <div className='navbar'>
            <header>
                <Logo className='logo'/>
                <nav>
                    <ul ref={navUl} aria-label="main navigation">
                        {routes.slice(0, 4).map(({ path, title }) => (
                            <li key={path}><NavigationLink path={path} label={title} /></li>
                        ))}
                        <li className='magicLine' id="magicLineVrt" ref={magicLineVrt} aria-hidden="true"></li>
                        <li className='magicLine' id="magicLineHrz" ref={magicLineHrz} aria-hidden="true"></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}



// === INTERNAL COMPONENTS ================
function NavigationLink({ path, label }) {
    return (
        <NavLink to={path} aria-label={label}>
            {/* conditional icon */}
            {path === "/" && <HomeIcon />}
            {path === "/projects" && <ProjectsIcon />}
            {path === "/about" && <AboutIcon />}
            {path === "/info" && <InfoIcon />}
        </NavLink>
    )
}