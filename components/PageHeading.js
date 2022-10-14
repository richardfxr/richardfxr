// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// hooks
import { useIsMotionOK } from "../hooks/useMediaQuery"



// === FRAMER VARIANTS ====================
const headingVar = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
    exit: { y: '0.7rem', opacity: 0, transition: { ease: [0.3, 0, 0.72, 0.72], duration: 0.2} },
}

const headingVarLowMo = {
    hidden: { opacity: 1 },
    show: { opacity: 1},
    exit: { opacity: 0, transition: { duration: 0.2} },
}

const letterVar = {
    hidden: { y: '0.7em', opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ease: [0, 0.35, 0, 1], duration: 0.3 } }
}

const letterVarLowMo = {
    hidden: { y: 0, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } }
}

export default function PageHeading({ heading, printHidden }) {
    const isMotionOK = useIsMotionOK()

    return (
        <motion.h1
            className={"pageHeading" + (printHidden ? " printHidden" : "")}
            id="heading"
            variants={isMotionOK ? headingVar : headingVarLowMo}
            initial="hidden"
            animate="show"
            exit="exit">
            {[...heading].map((letter, index) => (
                <motion.span
                    className="pageHeading__letter"
                    key={index}
                    variants={isMotionOK ? letterVar : letterVarLowMo}>
                    {letter}
                </motion.span>
            ))}
        </motion.h1>
    )
}