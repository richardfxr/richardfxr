// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// hooks
import { useIsMotionOK } from "../hooks/useMediaQuery"



// === FRAMER VARIANTS ====================
const imageVarLowMo = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2} },
}

export default function Image({ ani, folder, fileName, type="jpg", alt}) {
    const isMotionOK = useIsMotionOK()

    return (
        <motion.div
            layoutId={ani === 'layout' ? (isMotionOK ? fileName : null) : null}
            transition={{ ease: [0.5, 0, 0.05, 1], duration: 0.5 }}
            variants={isMotionOK ? null : imageVarLowMo}
            initial="hidden"
            animate="show"
            exit="exit">
            <picture>
                <source srcSet={'/images/' + folder + '/' + fileName + '.webp'} />
                <img src={'/images/' + folder + '/' + fileName + '.' + type} alt={alt} />
            </picture>
        </motion.div>
    )
}