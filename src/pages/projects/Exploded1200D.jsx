// === IMPORTS ============================
// Sass
import './Exploded1200D.scss'
// components
import { projects } from '../../components/AnimatedRoutes'
import PageTemplate from "../../components/PageTemplate"
import ProjectInfo from "../../components/ProjectInfo"
import Section from "../../components/Section"
import Image from "../../components/Image"
import UnderlinedLink from '../../components/UnderlinedLink'



// === SECTIONS ===========================
const sections = [
    {heading: "Video", id: "video"},
    {heading: "Parts Index", id: "partsindex"},
    {heading: "Sketch", id: "sketch"},
    {heading: "Photos", id: "photos"},
]

export default function Exploded1200D() {
    // project title
    const title = 'Exploded 1200D'
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <PageTemplate heading={title} id="exploded1200d">
            <ProjectInfo project={project}>
                Ever wondered what a DSLR looks like on the inside? I did, so I took apart a broken <UnderlinedLink href="https://en.wikipedia.org/wiki/Canon_EOS_1200D" target="_blank">Canon EOS 1200D</UnderlinedLink> and made it into an exploded view model. This project was part of a RISD ID course taught by <UnderlinedLink href="https://www.prattframeworks.com/" target="_blank">Max Pratt</UnderlinedLink>.
            </ProjectInfo>

            <Section sections={sections} index={0}>
                <div className='videoContainer'>
                    <iframe src="https://player.vimeo.com/video/640798865?h=85e6a6a4eb?dnt=1" frameBorder="0" allow="fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>
            </Section>

            <Section sections={sections} index={1}>
                <p className='md bottom-xxxl'>As part of the disassembly process, the <UnderlinedLink href="https://v9.richardfxr.com/1200d" target="_blank" styling="em">Canon EOS 1200D Parts Index</UnderlinedLink> was created to help me keep track of all the different components. Each component has a short description with links to relevant parts.</p>
                <Image folder="Exploded1200D" fileName="Exploded1200D-partsIndex" alt="An iPad Pro displaying a list of parts from the camera." />
            </Section>

            <Section sections={sections} index={2}>
                <Image folder="Exploded1200D" fileName="Exploded1200D-sketch" alt="A shaded graphite render of an exploded Canon camera. Everything from the PCBs to the mirror box is visible." />
            </Section>

            <Section sections={sections} index={3}>
                <Image folder="Exploded1200D" fileName="Exploded1200D-1" alt="Three-quarter side view of the final exploded view model. Each piece is held above the acrylic base with acrylic rods that are cut perfectly to length." />
                <Image folder="Exploded1200D" fileName="Exploded1200D-2" alt="Side view of the final model. Most pieces like the PCBs are quite thin, with only the mirror box, spine piece, and outer shell being noticeably thicker." />
                <div className='twoCol'>
                    <Image folder="Exploded1200D" fileName="Exploded1200D-3" alt="Top view of the final model." />
                    <Image folder="Exploded1200D" fileName="Exploded1200D-4" alt="Front view of the final model. The model appears rather crowded from this perspective as all the different pieces stack together." />
                </div>
                <Image folder="Exploded1200D" fileName="Exploded1200D-5" alt="Close-up of the font of the model. Focus is placed on the lens mount ring and front shell of the camera." />
            </Section>
        </PageTemplate>
    )
}