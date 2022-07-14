// === IMPORTS ============================
// components
import { projects } from '../../components/AnimatedRoutes'
import PageTemplate from "../../components/PageTemplate"
import ProjectInfo from "../../components/ProjectInfo"
import Section from "../../components/Section"
import Image from "../../components/Image"
import UnderlinedLink from '../../components/UnderlinedLink'

export default function EggHolders() {
    // project title
    const title = 'EggHolders'
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <PageTemplate heading={title} id="eggholders">
            <ProjectInfo project={project}>
                As part of a form exploration, I created three egg holders based on various inspirations. This project was part of a RISD ID course taught by <UnderlinedLink styling="em" href="https://www.risd.edu/academics/industrial-design/faculty/joseph-napurano" target="_blank">Joseph Napurano</UnderlinedLink>.
            </ProjectInfo>
        </PageTemplate>
    )
}