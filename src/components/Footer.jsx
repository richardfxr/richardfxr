// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// Sass
import './Footer.scss'
// components
import { routes } from './AnimatedRoutes'
import { sectionVar } from './Section'
import Separator from './Separator'
import UnderlinedLink from './UnderlinedLink'
import VersionBadge from "./VersionBadge"
// SVGs
import {ReactComponent as GitHubQR} from '../assets/SVGs/QR-GitHubrepo-richardfxr.svg'

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
            </div>
            
            <div className='footer__main'>
                <div className='twoCol'>
                    <nav>
                        <ul className='list withSeparators sm' aria-label='Footer navigation'>
                            {routes.slice(0, 5).map(({ path, title }) => (
                                <li key={path} className='list__item'><UnderlinedLink to={path} styling='md block'>{title}</UnderlinedLink></li>
                            ))}
                            <li key='/projects/archive' className='list__item'><UnderlinedLink to='/projects/archive' styling='md block'>Archive</UnderlinedLink></li>
                        </ul>
                    </nav>

                    <ul className='list withSeparators sm' aria-label='external links'>
                    <li className='list__item'><UnderlinedLink href='https://v9.richardfxr.com/' target='_blank' styling='md block'>Version 9</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://www.instagram.com/richardfxr/' target='_blank' styling='md block'>Instagram</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://github.com/richardfxr' target='_blank' styling='md block'>GitHub</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://vimeo.com/user134146921' target='_blank' styling='md block'>Vimeo</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://www.behance.net/richardfxr' target='_blank' styling='md block'>Behance</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='mailto:richardfxr.art@gmail.com?subject=A%20Witty%20Title' target='_blank' styling='md block'>Email</UnderlinedLink></li>
                    </ul>
                </div>

                <div className='info'>
                    <div className="squares">
                        <VersionBadge />
                       <GitHubQR /> 
                    </div>
                    
                    <div className='text'>
                        <p className='xs'><UnderlinedLink href='https://github.com/richardfxr/richardfxr' target='_blank'>Open source code available on GitHub</UnderlinedLink></p>
                        <p className='xs'>Designed and developed by yours truly. Copyright © 2022 Xiangrui Fu. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}