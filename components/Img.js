// === IMPORTS ============================
// Next
import Image from 'next/image'
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

export default function Img({ img, layoutId, alt, ani, priority, caption, captionAlign, captionBottom }) {
    const isMotionOK = useIsMotionOK()

    return (
        <motion.div
            className='img'
            style={{'--figcaption-bottom': captionBottom + '%'}}
            layoutId={ani === 'layout' ? (isMotionOK ? layoutId : null) : null}
            transition={{ ease: [0.5, 0, 0.05, 1], duration: 0.5 }}
            variants={isMotionOK ? null : imageVarLowMo}
            initial="hidden"
            animate="show"
            exit="exit">
            {caption ? 
                <figure>
                    <Image
                        src={img}
                        alt={alt}
                        placeholder="blur"
                        priority={priority}
                    />
                    <figcaption className={captionAlign}>
                        <span>{caption}</span>
                    </figcaption>
                </figure>
                :
                <Image
                    src={img}
                    alt={alt}
                    placeholder="blur"
                    priority={priority}
                />
            }
        </motion.div>
    )
}