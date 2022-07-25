// === IMPORTS ============================
// components
import { projects } from '../../components/AnimatedRoutes'
import PageTemplate from "../../components/PageTemplate"
import ProjectInfo from "../../components/ProjectInfo"
import Section from "../../components/Section"
import Image from "../../components/Image"

export default function PFrame() {
    // project title
    const title = 'P-Frame'
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <PageTemplate heading={title} id="pframe">
            <ProjectInfo project={project}>
                some text
            </ProjectInfo>
        </PageTemplate>
    )
}