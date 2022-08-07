// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// Sass
import './About.scss'
// components
import PageTemplate from "../components/PageTemplate"
import Separator from '../components/Separator'
import Image from '../components/Image'
import { sectionVar } from '../components/Section'
// SVGs
import {ReactComponent as RichardfxrPDF417} from '../assets/SVGs/PDF417-richardfxr.svg'
import {ReactComponent as Instagram} from '../assets/SVGs/instagram.svg'
import {ReactComponent as GitHub} from '../assets/SVGs/github.svg'
import {ReactComponent as Vimeo} from '../assets/SVGs/vimeo.svg'

export default function About() {
    return (
        <PageTemplate heading="About" id="about">
            <motion.section
                className="profile"
                id='profile'
                aria-labelledby="heading"
                variants={sectionVar}
                initial="hidden"
                animate="show"
                exit="exit">
                <Separator />

                <article className='card twoCol'>
                    <div className='main'>
                        <div className="code">
                            <RichardfxrPDF417 />
                            <p>(¬_¬)ﾉ</p>
                        </div>
                        <Image folder="About" fileName="SelfPortrait" alt="Line drawing of a wall of the John D. Rockefeller Jr. Library as seen from street level." />
                    </div>
                    <div className='text'>
                        <p className='md name'>Richard Fu</p>
                        <ul className='buttons'>
                            <li><a href="https://www.instagram.com/richardfxr/" target="_blank" className='profileCardButton' aria-label="Instagram"><Instagram /></a></li>
                            <li><a href="https://github.com/richardfxr" target="_blank" className='profileCardButton' aria-label="GitHub"><GitHub /></a></li>
                            <li><a href="https://vimeo.com/user134146921" target="_blank" className='profileCardButton' aria-label="Vimeo"><Vimeo /></a></li>
                        </ul>
                        <p className='md'>Maker of art – creator of designs – coder of websites – builder of computers – lover of keyboards – student of RISD.</p>
                    </div>
                </article>
            </motion.section>
        </PageTemplate>
    )
}