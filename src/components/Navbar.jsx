// === IMPORTS ============================
// React
import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
// Framer Motion
import { motion } from "framer-motion"
// Sass
import './Navbar.scss'
// components
import { routes } from './AnimatedRoutes'
// hooks
import { useIsMotionOK, useIsPortrait } from '../hooks/useMediaQuery'
// SVGs
import {ReactComponent as Logo} from '../assets/SVGs/logo.svg'
import {ReactComponent as HomeIcon} from '../assets/SVGs/home.svg'
import {ReactComponent as ProjectsIcon} from '../assets/SVGs/projects.svg'
import {ReactComponent as AboutIcon} from '../assets/SVGs/about.svg'
import {ReactComponent as InfoIcon} from '../assets/SVGs/info.svg'



// === FRAMER VARIANTS ====================
const navbarVarLandscape = {
    hidden: { opacity: 0, x: -20, y: 0 },
    show: { opacity: 1, x: 0, y:0, transition: { ease: "easeOut", duration: 0.5 } },
}

const navbarVarPortrait = {
    hidden: { opacity: 1, x: 0, y: 20 },
    show: { opacity: 1, x: 0, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
}

const navbarVarLowMo = {
    hidden: { opacity: 1, x: 0, y: 0 },
    show: { opacity: 1, x: 0, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
}



export default function Navbar() {
    const location = useLocation()
    const isPortrait = useIsPortrait()
    const isMotionOK = useIsMotionOK()

    // states
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()

    // refs
    const navUl = useRef(null)
    const magicLineVrt = useRef(null)
    const magicLineHrz = useRef(null)
    
    // updates magic line on initial load, location (route) change, and navUl size change
    useEffect(() => {
        // find currently active <NavLink />
        let activeLink = navUl.current.getElementsByClassName('active')[0]

        if (activeLink) {
            // update magic line position if activeLink is not falsy
            magicLineVrt.current.style.transform = "translateY(" + activeLink.offsetTop + "px)"
            magicLineHrz.current.style.transform = "translateX(" + activeLink.offsetLeft + "px)"
        }
    }, [location, width, height])

    useEffect(() => {
        // instantiating ResizeObserver
        const fontSizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                setWidth(entry.contentRect.width);
                setHeight(entry.contentRect.height);
            });
        });

        // observe selectorGroup
        fontSizeObserver.observe(navUl.current)

        return function cleanup() {
            // disconnet resize observer
            fontSizeObserver.disconnect()
        }
    }, [])

    return (
        <div className='navbar'>
            <motion.header
                variants={isMotionOK ? (isPortrait ? navbarVarPortrait : navbarVarLandscape) : navbarVarLowMo}
                initial="hidden"
                animate="show">
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
            </motion.header>
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