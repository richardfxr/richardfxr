// === IMPORTS ============================
// React
import { useEffect, useRef, useState } from "react"
// Framer Motion
import { AnimatePresence, Reorder } from "framer-motion"
// components
import { projects } from '../../components/AppWrapper'
import Layout from "../../components/Layout"
import Section from "../../components/Section"
import RadioSelectors from "../../components/RadioSelectors"
import ProjectCard from '../../components/ProjectCard'
// hooks
import { useIsMotionOK } from "../../hooks/useMediaQuery"



// === FRAMER VARIANTS ====================
const projectCardVar = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
}



// === SECTIONS ===========================
const sections = [
    {heading: "Works", id: "works"},
]

export default function Projects() {
    // refs
    const workUl = useRef(null)

    // states
    const [workFilter, setWorkFilter] = useState('all')
    const [shownProjects, setShownProjects] = useState(projects)

    // hooks
    const isMotionOK = useIsMotionOK()

    useEffect(() => {
        // filter projects and update shownPorjects
        const tempPorjects = projects.filter(project => workFilter === 'all' ? true : project.filters.includes(workFilter))
        setShownProjects(tempPorjects)

        // set workUl's aria-busy to true as Framer Motion animation plays
        workUl.current.ariaBusy = "true"

        // wait 500ms for Framer Motion animations to finish
        setTimeout(() => {
            workUl.current.ariaBusy = "false"

            const ghostElem = document.createElement("li")
            ghostElem.id = 'ghostElem'
            ghostElem.appendChild(document.createElement("article"))
            console.log("created ghostElem:", ghostElem)

            workUl.current.appendChild(ghostElem)

            setTimeout(() => {
                workUl.current.querySelector('#ghostElem').remove()
            }, 100)
            
        }, 300)
    }, [workFilter])

    return (
        <Layout heading="Projects" id="projects">
            <Section sections={sections} index={0} noAni>
                <RadioSelectors
                    label="Filter:"
                    name="workFilter"
                    type="sm"
                    inline
                    ani
                    value={workFilter}
                    handler={setWorkFilter}
                    radios={[
                        { value: "all", label: "all" },
                        { value: "art", label: "art" },
                        { value: "design", label: "design" },
                        { value: "others", label: "others" },
                    ]} />

                <Reorder.Group
                    ref={workUl}
                    as="ul"
                    className='twoCol cards'
                    role="region"
                    aria-live="polite"
                    aria-atomic="true"
                    values={shownProjects}
                    onReorder={setShownProjects}>
                    <AnimatePresence initial={false}>
                        {shownProjects.map((project) => (
                            <Reorder.Item
                                drag={false}
                                key={project.path}
                                value={project}
                                variants={projectCardVar}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                transition={isMotionOK ? null : { duration: 0 }}><ProjectCard {...project} /></Reorder.Item>
                        ))}
                    </AnimatePresence>
                </Reorder.Group>
            </Section>
        </Layout>
    )
}