// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// components
import { routes } from './AppWrapper'
import { sectionVar } from './Section'
import Separator from './Separator'
import UnderlinedLink from './UnderlinedLink'
import VersionBadge from "./VersionBadge"
// SVGs
import GitHubQR from '../public/SVGs/QR-GitHubrepo-richardfxr.svg'

export default function Footer() {
    return (
        <motion.footer
            className="footer"
            id='footer'
            aria-labelledby='footer__heading'
            variants={sectionVar}
            initial="hidden"
            animate="show"
            exit="exit">
            <Separator />

            <div className='footer__side' >
                <h2 id='footer__heading'>Footer</h2>
                <div className="skipLinks">
                    <a href='#main' aria-label='back to top'>⏏</a>
                </div>
            </div>
            
            <div className='footer__main'>
                <div className='twoCol'>
                    <nav>
                        <ul className='list withSeparators sm' aria-label='Footer navigation'>
                            {routes.slice(0, 5).map(({ href, title }) => (
                                <li key={href} className='list__item'><UnderlinedLink to={href} styling='md block'>{title}</UnderlinedLink></li>
                            ))}
                            <li key='/about/resume' className='list__item'><UnderlinedLink to='/about/resume' styling='md block'>Résumé</UnderlinedLink></li>
                            <li key='/projects/archive' className='list__item'><UnderlinedLink to='/projects/archive' styling='md block'>Archive</UnderlinedLink></li>
                        </ul>
                    </nav>

                    <ul className='list withSeparators sm' aria-label='external links'>
                        <li className='list__item'><UnderlinedLink href='https://experiments.richardfxr.com/' target='_blank' styling='md block'>Experiments</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://v9.richardfxr.com/' target='_blank' styling='md block'>Version 9</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://www.instagram.com/richardfxr/' target='_blank' styling='md block'>Instagram</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://github.com/richardfxr' target='_blank' styling='md block'>GitHub</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://vimeo.com/user134146921' target='_blank' styling='md block'>Vimeo</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://www.linkedin.com/in/richardfxr/' target='_blank' styling='md block'>LinkedIn</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='mailto:theguy@richardfxr.com?subject=A%20Witty%20Title' target='_blank' styling='md block'>Email</UnderlinedLink></li>
                    </ul>
                </div>

                <div className='info'>
                    <div className="squares">
                        <VersionBadge />
                       <GitHubQR /> 
                    </div>
                    
                    <div className='text'>
                        <p className='xs'><UnderlinedLink href='https://github.com/richardfxr/richardfxr' target='_blank' styling="block">Open source code available on GitHub</UnderlinedLink></p>
                        <p className='xs'>Designed and developed by yours truly. Copyright © 2024 Xiangrui Fu. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}