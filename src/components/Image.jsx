// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"

export default function Image({ ani, folder, fileName, alt}) {
    if (ani === 'layout') {
        return (
            <motion.div
                layoutId={fileName}
                transition={{ ease: [0.5, 0, 0.05, 1], duration: 0.5 }}>
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