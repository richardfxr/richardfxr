// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"

export default function Image({ ani, folder, fileName, type="jpg", alt}) {
    return (
        <motion.div
            layoutId={ani === 'layout' ? fileName : null}
            transition={{ ease: [0.5, 0, 0.05, 1], duration: 0.5 }}>
            <picture>
                <source srcSet={'/images/' + folder + '/' + fileName + '.webp'} />
                <img src={'/images/' + folder + '/' + fileName + '.' + type} alt={alt} />
            </picture>
        </motion.div>
    )
}