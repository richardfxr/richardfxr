// === IMPORTS ============================
// React
import { Link } from "react-router-dom"
// Sass
import './ProjectCard.scss'
// components
import Image from "./Image"

export default function ProjectCard({ image, path, title, colors, labels }) {
    return(
        <article className="projectCard">
            <Image ani='layout' {...image} />
            <Link to={path} className="projectCard__link">
                <h3>{title}</h3>
            </Link>
            <div className='projectCard__details'>
                <ul className="projectCard__colors" aria-label="Colors">
                    {colors.slice(0, 3).map(({ hex, name }) => (
                        <li key={hex} style={{ backgroundColor: hex }}><span className="visuallyHidden">{name}</span></li>
                    ))}
                </ul>

                <ul className="projectCard__labels" aria-label="Labels">
                    {labels.slice(0, 3).map((label) => (
                        <li key={label}><span className="sm">{label}</span></li>
                    ))}
                </ul>
            </div>
        </article>
    )
}