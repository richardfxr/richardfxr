// === IMPORTS ============================
// React
import { useState } from "react"
// Sass
import './Projects.scss'
// components
import { projects } from '../components/AnimatedRoutes'
import PageTemplate from "../components/PageTemplate"
import Section from "../components/Section"
import RadioSelectors from "../components/RadioSelectors"
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    // states
    const [workFilter, setWorkFilter] = useState('all')

    return (
        <PageTemplate heading="Projects" id="projects">
            <Section heading="Works" id="works" noAni>
                <RadioSelectors
                    label="Filter:"
                    name="workFilter"
                    type="sm"
                    inline
                    value={workFilter}
                    handler={setWorkFilter}
                    radios={[
                        { value: "all", label: "all" },
                        { value: "art", label: "art" },
                        { value: "design", label: "design" },
                        { value: "others", label: "others" },
                    ]} />

                <ul className='twoCol cards'>
                    {projects.map((project) => (
                        <li key={project.path}><ProjectCard {...project} /></li>
                    ))}
                </ul>
            </Section>
        </PageTemplate>
    )
}