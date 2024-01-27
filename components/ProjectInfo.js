// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// components
import { sectionVar } from './Section'
import Separator from './Separator'
import Img from "./Img"


export default function ProjectInfo({ project, children }) {
    return (
        <section className="section projectInfo" id='info' aria-labelledby="heading">
            <Separator />

            <Img ani='layout' {...project.image} priority />

            <motion.div
                className='projectInfo__text'
                variants={sectionVar}
                initial="hidden"
                animate="show"
                exit="exit">
                <div className="desc">
                    <p id="projectDescTitle" className="md">Description</p>
                    <div id="projectDescText" className="md" aria-labelledby="projectDescTitle">{children}</div>
                </div>

                <dl className="twoCol dlList" aria-label="project information">
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
                    

                    {project.labels && (project.labels.length === 1 ? (
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
                    ))}

                    {project.collaborators && (project.collaborators.length === 1 ? (
                        <div>
                            <dt>Collaborator</dt>
                            <dd>{project.collaborators[0]}</dd>
                        </div>
                    ) : (
                        <div>
                            <dt>Collaborators</dt>
                            <dd>
                                <ul className="projectInfo__list" aria-label="Collaborators">
                                    {project.collaborators.map((collaborator, index) => (
                                        <li key={"collaborator" + index}>{collaborator}</li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    ))}

                    {project.sponsors && (project.sponsors.length === 1 ? (
                        <div>
                            <dt>Sponsor</dt>
                            <dd>{project.collaborators[0]}</dd>
                        </div>
                    ) : (
                        <div>
                            <dt>Sponsors</dt>
                            <dd>
                                <ul className="projectInfo__list" aria-label="Sponsors">
                                    {project.sponsors.map((sponsor, index) => (
                                        <li key={"sponsor" + index}>{sponsor}</li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    ))}

                    {project.code &&
                        <div>
                            <dt>Code</dt>
                            <dd>{project.code}</dd>
                        </div>
                    }
                </dl>
            </motion.div>
        </section>
    )
}