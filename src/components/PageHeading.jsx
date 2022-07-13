// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// Sass
import './PageHeading.scss'



// === FRAMER VARIANTS ====================
const headingVar = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
    exit: { y: '0.7rem', opacity: 0, transition: { ease: [0.3, 0, 0.72, 0.72], duration: 0.2} },
}

const letterVar = {
    hidden: { y: '0.7em', opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ease: [0, 0.35, 0, 1], duration: 0.3 } }
}

export default function PageHeading({ heading }) {
    return (
        <motion.h1
            className="pageHeading"
            id="heading"
            variants={headingVar}
            initial="hidden"
            animate="show"
            exit="exit">
            {[...heading].map((letter, index) => (
                <motion.span
                    className="pageHeading__letter"
                    key={index}
                    variants={letterVar}>
                    {letter}
                </motion.span>
            ))}
        </motion.h1>
    )
}