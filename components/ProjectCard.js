// === IMPORTS ============================
// Next
import Link from 'next/link'
// Framer Motion
import { motion } from "framer-motion"
// components
import Img from "./Img"



// === FRAMER VARIANTS ====================
const projectCardVar = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function ProjectCard({ image, href, title, colors, cardLabels }) {
    return(
        <article className="projectCard">
            <Img ani='layout' {...image} priority />

            <motion.div
                variants={projectCardVar}
                initial="hidden"
                animate="show"
                exit="exit">
                {href.charAt(0) === '/' ?
                    <Link href={href} className="projectCard__link" scroll={false}>
                        <h3>{title}</h3>
                    </Link>
                    :
                    <a href={href} className="projectCard__link" target="_blank" rel="noopener noreferrer">
                        <h3>{title}</h3>
                    </a>
                }
                <div className='projectCard__details'>
                    <ul className="project__colors" aria-label="Colors">
                        {colors.slice(0, 3).map(({ hex, name }) => (
                            <li key={hex} style={{ backgroundColor: hex }}><span className="visuallyHidden">{name}</span></li>
                        ))}
                    </ul>

                    <ul className="projectCard__labels" aria-label="Labels">
                        {cardLabels.map((label) => (
                            <li key={label}><span className="sm">{label}</span></li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </article>
    )
}