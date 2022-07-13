// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// Sass
import './ProjectInfo.scss'
// components
import { sectionVar } from './Section'
import Separator from './Separator'
import Image from "./Image"
import UnderlinedLink from './UnderlinedLink'


export default function ProjectInfo({ project, children }) {
    return (
        <section className="section projectInfo" id='info' aria-labelledby="heading">
            <Separator />

            <Image ani='layout' {...project.image} />

            <motion.div
                className='projectInfo__text'
                variants={sectionVar}
                initial="hidden"
                animate="show"
                exit="exit">
                <dl aria-label="project information">
                    <div>
                        <dt>Date</dt>
                        <dd>{project.date}</dd>
                    </div>
                    
                    {project.colors.length === 1 ? (
                        <div>
                            <dt>Color</dt>
                            <dd className="project__colors">
                                <div style={{ backgroundColor: project.colors[0].hex }}>
                                    <span className="visuallyHidden">{project.colors[0].name}</span>
                                </div>
                            </dd>
                        </div>
                    ) : (
                        <div>
                            <dt>Colors</dt>
                            <dd>
                                <ul className="project__colors" aria-label="Colors">
                                    {project.colors.map(({ hex, name }) => (
                                        <li key={hex} style={{ backgroundColor: hex }}><span className="visuallyHidden">{name}</span></li>
                                    ))}
                                </ul>
                            </dd>
                        </div>                       
                    )}
                    

                    {project.media.length === 1 ? (
                        <div>
                            <dt>Medium</dt>
                            <dd>{project.media[0]}</dd>
                        </div>
                        
                    ) : (
                        <div>
                            <dt>Media</dt>
                            <dd>
                                <ul className="projectInfo__list" aria-label="Media">
                                    {project.media.map((medium) => (
                                        <li key={medium}>{medium}</li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    )}
                    

                    {project.labels.length === 1 ? (
                        <div>
                            <dt>Label</dt>
                            <dd>{project.labels[0]}</dd>
                        </div>
                        
                    ) : (
                        <div>
                            <dt>Labels</dt>
                            <dd>
                                <ul className="projectInfo__list" aria-label="Labels">
                                    {project.labels.map((label) => (
                                        <li key={label}>{label}</li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    )}

                    <div>
                        <dt>Description</dt>
                        <dd>{children}</dd>
                    </div>
                </dl>
            </motion.div>
        </section>
    )
}