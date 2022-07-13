// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// Sass
import './ProjectInfo.scss'
// components
import { sectionVar } from './Section'
import Separator from './Separator'
import Image from "./Image"
import UnderlinedLink from './UnderlinedLink'

export default function ProjectInfo({ label, image, children }) {
    return (
        <section className="section projectInfo" id='info' aria-label={label}>
            <Separator />

            <Image ani='layout' {...image} />

            <motion.div
                className='projectInfo__text'
                variants={sectionVar}
                initial="hidden"
                animate="show"
                exit="exit">
                {children}
            </motion.div>
        </section>
    )
}