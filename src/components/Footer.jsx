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
                            {routes.slice(0, 4).map(({ path, title }) => (
                                <li key={path} className='list__item'><UnderlinedLink to={path} styling='md block'>{title}</UnderlinedLink></li>
                            ))}
                        </ul>
                    </nav>

                    <ul className='list withSeparators sm' aria-label='external links'>
                        <li className='list__item'><UnderlinedLink href='https://www.instagram.com/richardfxr/' target='_blank' styling='md block'>Instagram</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://github.com/richardfxr' target='_blank' styling='md block'>GitHub</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='https://www.behance.net/richardfxr' target='_blank' styling='md block'>Behance</UnderlinedLink></li>
                        <li className='list__item'><UnderlinedLink href='mailto:richardfxr.art@gmail.com?subject=A%20Witty%20Title' target='_blank' styling='md block'>Email</UnderlinedLink></li>
                    </ul>
                </div>

                <div className='info'>
                    <div className='info__text'>
                        <p className='info__text__ver xs'>v10.0.0 pre alpha</p>
                        <p className='xs'><UnderlinedLink href='https://github.com/richardfxr/richardfxr' target='_blank'>Open source code available on GitHub</UnderlinedLink></p>
                        <p className='xs'>Designed by yours truly. Copyright © 2022 Xiangrui Fu. All rights reserved.</p>
                    </div>
                    <GitHubQR />
                </div>
            </div>
        </motion.footer>
    )
}