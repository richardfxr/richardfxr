// === IMPORTS ============================
// React
import { Link } from "react-router-dom"
// Sass
import './ProjectCard.scss'
// components
import Image from "./Image"
import { motion } from "framer-motion"

// === FRAMER VARIANTS ====================
const projectCardVar = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function ProjectCard({ image, path, title, colors, cardLabels }) {
    return(
        <article className="projectCard">
            <Image ani='layout' {...image} />

            <motion.div
                variants={projectCardVar}
                initial="hidden"
                animate="show"
                exit="exit">
                <Link to={path} className="projectCard__link">
                    <h3>{title}</h3>
                </Link>
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