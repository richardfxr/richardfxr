// === IMPORTS ============================
// React
import { useEffect, useRef, useState } from "react"
// Next
import Head from 'next/head'
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
            if (workUl.current) {
                workUl.current.ariaBusy = "false"

                const ghostElem = document.createElement("li")
                ghostElem.id = 'ghostElem'
                ghostElem.appendChild(document.createElement("article"))

                workUl.current.appendChild(ghostElem)
            }

            setTimeout(() => {
                if (workUl.current) workUl.current.querySelector('#ghostElem').remove()
            }, 100)
            
        }, 300)
    }, [workFilter])

    return (
        <>
            <Head>
                <title>Projects | Richard Fu</title>
                <meta
                    name="description"
                    content="A showcase of my more recent projects. Newly added projects include Budgetty, EggHolders, and P-Frame."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/projects-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

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
                            {shownProjects.map((project, index) => (
                                <Reorder.Item
                                    id={index === 4 ? 'more' : null}
                                    className={index === 4 ? 'anchor' : null}
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
        </>
    )
}