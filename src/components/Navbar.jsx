// === IMPORTS ============================
// React
import { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
// Framer Motion
import { motion } from "framer-motion"
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



// === FRAMER VARIANTS ====================
export const navbarVar = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.5 } },
}

export const ulVar = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export const liVar = {
    hidden: { x: '-50%', opacity: 0 },
    show: { x: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.2 } }
}



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

        console.log("activeLink.offsetTop:", activeLink.offsetTop)

        if (activeLink) {
            // update magic line position if activeLink is not falsy
            magicLineVrt.current.style.transform = "translateY(" + activeLink.offsetTop + "px)"
            magicLineHrz.current.style.transform = "translateX(" + activeLink.offsetLeft + "px)"
        }
    }, [location])

    return (
        <motion.div 
            className='navbar'
            variants={navbarVar}
            initial="hidden"
            animate="show">
            <header>
                <Logo className='logo'/>
                <nav>
                    <motion.ul
                        ref={navUl}
                        aria-label="main navigation"
                        variants={ulVar}
                        initial="hidden"
                        animate="show">
                        {routes.slice(0, 4).map(({ path, title }) => (
                            <motion.li
                                key={path}
                                variants={liVar}>
                                    <NavigationLink path={path} label={title} />
                                </motion.li>
                        ))}
                        <li
                            className='magicLine'
                            id="magicLineVrt"
                            ref={magicLineVrt}
                            aria-hidden="true">
                        </li>
                        <li
                            className='magicLine'
                            id="magicLineHrz"
                            ref={magicLineHrz}
                            aria-hidden="true">
                        </li>
                    </motion.ul>
                </nav>
            </header>
        </motion.div>
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