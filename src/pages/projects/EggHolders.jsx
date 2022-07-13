// === IMPORTS ============================
// components
import { projects } from '../../components/AnimatedRoutes'
import PageTemplate from "../../components/PageTemplate"
import ProjectInfo from "../../components/ProjectInfo"
import Section from "../../components/Section"
import Image from "../../components/Image"

export default function EggHolders() {
    // project title
    const title = 'EggHolders'
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <PageTemplate heading={title}>
            <ProjectInfo {...project}>
                <p>some text</p>
            </ProjectInfo>
        </PageTemplate>
    )
}