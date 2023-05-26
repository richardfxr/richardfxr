// === IMPORTS ============================
// React
import { useState, useEffect, useRef } from 'react'
// Next
import Link from 'next/link'
import { useRouter } from 'next/router'
// Framer Motion
import { motion } from "framer-motion"
// components
import { routes } from './AppWrapper'
// hooks
import { useIsMotionOK, useIsPortrait } from '../hooks/useMediaQuery'
// SVGs
import Logo from '../public/SVGs/logo.svg'
import HomeIcon from '../public/SVGs/home.svg'
import ProjectsIcon from '../public/SVGs/projects.svg'
import AboutIcon from '../public/SVGs/about.svg'
import InfoIcon from '../public/SVGs/info.svg'
import SettingsIcon from '../public/SVGs/settings.svg'





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
    const router = useRouter()
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
    }, [router.pathname, width, height])

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
        <div className="navbar">
            <motion.header
                variants={isMotionOK ? (isPortrait ? navbarVarPortrait : navbarVarLandscape) : navbarVarLowMo}
                initial="hidden"
                animate="show">
                <Logo className="logo"/>
                <nav>
                    <ul ref={navUl} aria-label="main navigation">
                        {routes.slice(0, 5).map(({ href, title }) => (
                            <li key={href}><NavigationLink href={href} label={title} /></li>
                        ))}
                        <li className="magicLine" id="magicLineVrt" ref={magicLineVrt} aria-hidden="true"></li>
                        <li className="magicLine" id="magicLineHrz" ref={magicLineHrz} aria-hidden="true"></li>
                    </ul>
                </nav>
            </motion.header>
        </div>
    )
}



// === INTERNAL COMPONENTS ================
function NavigationLink({ href, label }) {
    const router = useRouter()

    // determine if link is currently active (selected)
    let isActive = router.pathname.startsWith(href)

    // spcial case for home page
    if (href === "/") isActive = router.pathname === "/"

    return (
        <Link
            href={href}
            id={href}
            className={isActive ? 'active' : ''}
            aria-current={isActive ? 'true' : 'false'}
            aria-label={label}
            scroll={false}>
            {href === "/" && <HomeIcon />}
            {href === "/projects" && <ProjectsIcon />}
            {href === "/about" && <AboutIcon />}
            {href === "/info" && <InfoIcon />}
            {href === "/settings" && <SettingsIcon />}
        </Link>
    )
}