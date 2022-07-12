// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"

export default function Image({ animate, folder, fileName, alt}) {
    if (animate === 'layout') {
        return (
            <motion.div layoutId={fileName}>
                <picture>
                    <source srcSet={'/images/' + folder + '/' + fileName + '.webp'} />
                    <img src={'/images/' + folder + '/' + fileName + '.jpg'} alt={alt} />
                </picture>
            </motion.div>
        )
    } else {
       return (
            <picture>
                <source srcSet={'/images/' + folder + '/' + fileName + '.webp'} />
                <img src={'/images/' + folder + '/' + fileName + '.jpg'} alt={alt} />
            </picture>
        )
    }
}