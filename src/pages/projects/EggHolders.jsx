// === IMPORTS ============================
// Sass
import './EggHolders.scss'
// components
import { projects } from '../../components/AnimatedRoutes'
import PageTemplate from "../../components/PageTemplate"
import ProjectInfo from "../../components/ProjectInfo"
import Section from "../../components/Section"
import Image from "../../components/Image"
import UnderlinedLink from '../../components/UnderlinedLink'
import Separator from '../../components/Separator'

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

            <Section heading="Sketches" id="sketches">
                <Image folder="EggHolders" fileName="EggHolders-sketch-1" alt="Line drawing of a wall of the John D. Rockefeller Jr. Library as seen from street level." />
                <Image folder="EggHolders" fileName="EggHolders-sketch-2" alt="Line drawings of a corner of the John D. Rockefeller Jr. Library and its cantilevered second floor." />
                <Image folder="EggHolders" fileName="EggHolders-sketch-3" alt="Line drawings of sections of a spine." />
                <Image folder="EggHolders" fileName="EggHolders-sketch-4" alt="Line drawing of Steven Weinberg’s untitled glass statue next to a fully shaded render." />
                <Image folder="EggHolders" fileName="EggHolders-sketch-5" alt="Concept sketches of EggHolders 1 through 4. One is a fin loft cylinder; two consists of a fin loft trapezoid cantilevered on top of another; three is a glass cube made of stacked sheets with engravings; four is a tripod that matches the curvature of the egg. " />
                <Image folder="EggHolders" fileName="EggHolders-sketch-6" alt="Concept sketches of EggHolders 5 through 8. Five is a stack of bone-like shapes; six is a clip that holds onto the egg and prevents it from moving around; seven is a stack of cardboard with a cutout for the egg in the middle; eight is just a flat card that slots onto an egg." />
            </Section>

            <Section heading="EggHolder 1" id="one">
                <p className='lg top'>
                    Inspiration:
                    <br /><UnderlinedLink href="https://en.wikipedia.org/wiki/John_D._Rockefeller_Jr._Library" target="_blank" styling="em">John D. Rockefeller Jr. Library</UnderlinedLink>, by <UnderlinedLink href="https://en.wikipedia.org/wiki/Danforth_Toan" target="_blank" styling="em">Danforth Toan</UnderlinedLink>.
                </p>
                <div className='twoCol'>
                    <Image folder="EggHolders" fileName="EggHolders-Rock-1" alt="A corner of the John D. Rockefeller Jr. Library. Large structural beams run vertically along its side while the cantilevered second floor juts out on both sides." />
                    <Image folder="EggHolders" fileName="EggHolders-Rock-2" alt="A wall of the John D. Rockefeller Jr. Library. The repeated vertical beams create a rather satisfying pattern that emphasizes the height of the library." />
                </div>
                <Separator />
                <p className='lg middle'>Final model:</p>
                <Image folder="EggHolders" fileName="EggHolders-one-1" alt="EggHolder 1, a white cylindrical fin loft model, holding up an egg against a bright yellow background." />
                <div className='twoCol'>
                    <Image folder="EggHolders" fileName="EggHolders-one-2" alt="Close-up front view of EggHolder 1." />
                    <Image folder="EggHolders" fileName="EggHolders-one-3" alt="Close-up top-down view of the internal structure of EggHolder 1. Each fin curves near the bottom to form a circle at the base." />
                </div>
                <Image folder="EggHolders" fileName="EggHolders-one-4" alt="Close-up of the top of EggHolder 1 as the fins branch out to form a space for the egg." />
            </Section>

            <Section heading="EggHolder 5" id="five">
                <p className='lg top'>
                    Inspiration:
                    <br />Skeleton from the <UnderlinedLink href="https://naturelab.risd.edu/" target="_blank" styling="em">RISD Nature Lab</UnderlinedLink>.
                </p>
                <Image folder="EggHolders" fileName="EggHolders-natureLab-1" alt="Side view of a segment of a skeleton hung from the ceiling of the RISD Nature Lab." />
                <Image folder="EggHolders" fileName="EggHolders-natureLab-2" alt="Bottom view of a segment of a skeleton hung from the ceiling of the RISD Nature Lab." />
                <Separator />
                <p className='lg middle'>Final model:</p>
                <Image folder="EggHolders" fileName="EggHolders-five-1" alt="EggHolder 5, a matte silver plate-like model made of bone-like pieces, with an egg resting on it against a white background." />
                <div className='twoCol'>
                    <Image folder="EggHolders" fileName="EggHolders-five-2" alt="Close-up of EggHolder 5’s back ridge formed by the bone-like pieces." />
                    <Image folder="EggHolders" fileName="EggHolders-five-3" alt="Front view of EggHolder 5 holding an egg." />
                </div>
            </Section>

            <Section heading="EggHolder 9" id="nine">
                <p className='lg top'>
                    Inspiration:
                    <br /><UnderlinedLink href="https://risdmuseum.org/art-design/collection/untitled-1986234" target="_blank" styling="em">Untitled</UnderlinedLink> by <UnderlinedLink href="https://en.wikipedia.org/wiki/Steven_Weinberg" target="_blank" styling="em">Steven Weinberg</UnderlinedLink>.
                </p>
                <Image folder="EggHolders" fileName="EggHolders-untitled-1" alt="Steven Weinberg’s untitled glass sculpture on display at the RISD Museum." />
                <Separator />
                <p className='lg middle'>Final model:</p>
                <Image folder="EggHolders" fileName="EggHolders-nine-1" alt="EggHolder 9, an incomplete cube made of stacked acrylic pieces, holding an egg against a salmon-colored background." />
                <div className='twoCol'>
                    <Image folder="EggHolders" fileName="EggHolders-nine-2" alt="Front view of EggHolder 9 showing the engraved lines on each piece forming a wave that moves through the whole model." />
                    <Image folder="EggHolders" fileName="EggHolders-nine-3" alt="Close-up of a corner of EggHolder 9. " />
                </div>
                <Image folder="EggHolders" fileName="EggHolders-all" alt="All three EggHolders together." />
            </Section>
        </PageTemplate>
    )
}