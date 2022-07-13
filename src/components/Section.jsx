// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// Sass
import './Section.scss'
// compoenents
import Separator from "./Separator"



// === FRAMER VARIANTS ====================
export const sectionVar = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function Section({ heading, id, noAni, first, children }) {
    return (
        <motion.section
            className="section"
            id={id}
            aria-labelledby={id + "__heading"}
            variants={noAni || first ? null : sectionVar}
            initial="hidden"
            animate="show"
            exit="exit">
            <Separator ani={noAni ? true : false} />
            
            <motion.div
                className='section__side'
                variants={noAni || first ? sectionVar : null}
                initial="hidden"
                animate="show"
                exit="exit">
                <h2 id={id + "__heading"}>{heading}</h2>
            </motion.div>
            
            <motion.div
                className='section__main'
                variants={first ?  sectionVar : null}
                initial="hidden"
                animate="show"
                exit="exit">
                {children}
            </motion.div>
        </motion.section>
    )
}