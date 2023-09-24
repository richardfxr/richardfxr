// === IMPORTS ============================
// Next
import Head from 'next/head'
// components
import { projects } from '../../components/AppWrapper'
import Layout from "../../components/Layout"
import ProjectInfo from "../../components/ProjectInfo"
import Section from "../../components/Section"
import Img from "../../components/Img"
import UnderlinedLink from '../../components/UnderlinedLink'
import Separator from '../../components/Separator'
// images
import EggHoldersSketch1 from '../../public/images/EggHolders/EggHolders-sketch-1.jpg'
import EggHoldersSketch2 from '../../public/images/EggHolders/EggHolders-sketch-2.jpg'
import EggHoldersSketch3 from '../../public/images/EggHolders/EggHolders-sketch-3.jpg'
import EggHoldersSketch4 from '../../public/images/EggHolders/EggHolders-sketch-4.jpg'
import EggHoldersSketch5 from '../../public/images/EggHolders/EggHolders-sketch-5.jpg'
import EggHoldersSketch6 from '../../public/images/EggHolders/EggHolders-sketch-6.jpg'
import EggHoldersRock1 from '../../public/images/EggHolders/EggHolders-Rock-1.jpg'
import EggHoldersRock2 from '../../public/images/EggHolders/EggHolders-Rock-2.jpg'
import EggHoldersOne1 from '../../public/images/EggHolders/EggHolders-one-1.jpg'
import EggHoldersOne2 from '../../public/images/EggHolders/EggHolders-one-2.jpg'
import EggHoldersOne3 from '../../public/images/EggHolders/EggHolders-one-3.jpg'
import EggHoldersOne4 from '../../public/images/EggHolders/EggHolders-one-4.jpg'
import EggHoldersNatureLab1 from '../../public/images/EggHolders/EggHolders-natureLab-1.jpg'
import EggHoldersNatureLab2 from '../../public/images/EggHolders/EggHolders-natureLab-1.jpg'
import EggHoldersFive1 from '../../public/images/EggHolders/EggHolders-five-1.jpg'
import EggHoldersFive2 from '../../public/images/EggHolders/EggHolders-five-2.jpg'
import EggHoldersFive3 from '../../public/images/EggHolders/EggHolders-five-3.jpg'
import EggHoldersUntitled1 from '../../public/images/EggHolders/EggHolders-untitled-1.jpg'
import EggHoldersNine1 from '../../public/images/EggHolders/EggHolders-nine-1.jpg'
import EggHoldersNine2 from '../../public/images/EggHolders/EggHolders-nine-2.jpg'
import EggHoldersNine3 from '../../public/images/EggHolders/EggHolders-nine-3.jpg'
import EggHoldersAll from '../../public/images/EggHolders/EggHolders-all.jpg'



// === SECTIONS ===========================
const sections = [
    {heading: "Sketches", id: "sketches"},
    {heading: "EggHolder 1", id: "one"},
    {heading: "EggHolder 5", id: "five"},
    {heading: "EggHolder 9", id: "nine"},
]

export default function EggHolders() {
    // project title
    const title = 'EggHolders'
    const headTitle =`${title} | Richard Fu`;
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <>
            <Head>
                <title>{headTitle}</title>
                <meta
                    name="description"
                    content="Three egg holders I created as part of a form exploration. This project was part of a RISD ID course taught by Joseph Napurano."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/EggHolders/EggHolders-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading={title} id="eggholders">
                <ProjectInfo project={project}>
                    <p>As part of a form exploration, I created three egg holders based on various inspirations. This project was part of a RISD ID course taught by <UnderlinedLink styling="em" href="https://www.risd.edu/academics/industrial-design/faculty/joseph-napurano" target="_blank">Joseph Napurano</UnderlinedLink>.</p>
                </ProjectInfo>

                <Section sections={sections} index={0}>
                    <Img img={EggHoldersSketch1} alt="Line drawing of a wall of the John D. Rockefeller Jr. Library as seen from street level." />
                    <Img img={EggHoldersSketch2} alt="Line drawings of a corner of the John D. Rockefeller Jr. Library and its cantilevered second floor." />
                    <Img img={EggHoldersSketch3} alt="Line drawings of sections of a spine." />
                    <Img img={EggHoldersSketch4} alt="Line drawing of Steven Weinberg’s untitled glass statue next to a fully shaded render." />
                    <Img img={EggHoldersSketch5} alt="Concept sketches of EggHolders 1 through 4. One is a fin loft cylinder; two consists of a fin loft trapezoid cantilevered on top of another; three is a glass cube made of stacked sheets with engravings; four is a tripod that matches the curvature of the egg. " />
                    <Img img={EggHoldersSketch6} alt="Concept sketches of EggHolders 5 through 8. Five is a stack of bone-like shapes; six is a clip that holds onto the egg and prevents it from moving around; seven is a stack of cardboard with a cutout for the egg in the middle; eight is just a flat card that slots onto an egg." />
                </Section>

                <Section sections={sections} index={1}>
                    <p className='lg em'>Inspiration:</p>
                    <p className='md bottom-xxxl'><UnderlinedLink href="https://en.wikipedia.org/wiki/John_D._Rockefeller_Jr._Library" target="_blank" styling="em">John D. Rockefeller Jr. Library</UnderlinedLink>, by <UnderlinedLink href="https://en.wikipedia.org/wiki/Danforth_Toan" target="_blank" styling="em">Danforth Toan</UnderlinedLink>.</p>
                    <div className='twoCol'>
                        <Img img={EggHoldersRock1} alt="A corner of the John D. Rockefeller Jr. Library. Large structural beams run vertically along its side while the cantilevered second floor juts out on both sides." />
                        <Img img={EggHoldersRock2} alt="A wall of the John D. Rockefeller Jr. Library. The repeated vertical beams create a rather satisfying pattern that emphasizes the height of the library." />
                    </div>
                    <Separator />
                    <p className='lg em middle'>Final model:</p>
                    <Img img={EggHoldersOne1} alt="EggHolder 1, a white cylindrical fin loft model, holding up an egg against a bright yellow background." />
                    <div className='twoCol'>
                        <Img img={EggHoldersOne2} alt="Close-up front view of EggHolder 1." />
                        <Img img={EggHoldersOne3} alt="Close-up top-down view of the internal structure of EggHolder 1. Each fin curves near the bottom to form a circle at the base." />
                    </div>
                    <Img img={EggHoldersOne4} alt="Close-up of the top of EggHolder 1 as the fins branch out to form a space for the egg." />
                </Section>

                <Section sections={sections} index={2}>
                    <p className='lg em'>Inspiration:</p>
                    <p className='md bottom-xxxl'>Skeleton from the <UnderlinedLink href="https://naturelab.risd.edu/" target="_blank" styling="em">RISD Nature Lab</UnderlinedLink>.</p>
                    <Img img={EggHoldersNatureLab1} alt="Side view of a segment of a skeleton hung from the ceiling of the RISD Nature Lab." />
                    <Img img={EggHoldersNatureLab2} alt="Bottom view of a segment of a skeleton hung from the ceiling of the RISD Nature Lab." />
                    <Separator />
                    <p className='lg em middle'>Final model:</p>
                    <Img img={EggHoldersFive1} alt="EggHolder 5, a matte silver plate-like model made of bone-like pieces, with an egg resting on it against a white background." />
                    <div className='twoCol'>
                        <Img img={EggHoldersFive2} alt="Close-up of EggHolder 5’s back ridge formed by the bone-like pieces." />
                        <Img img={EggHoldersFive3} alt="Front view of EggHolder 5 holding an egg." />
                    </div>
                </Section>

                <Section sections={sections} index={3}>
                    <p className='lg em'>Inspiration:</p>
                    <p className='md bottom-xxxl'><UnderlinedLink href="https://risdmuseum.org/art-design/collection/untitled-1986234" target="_blank" styling="em">Untitled</UnderlinedLink> by <UnderlinedLink href="https://en.wikipedia.org/wiki/Steven_Weinberg" target="_blank" styling="em">Steven Weinberg</UnderlinedLink>.</p>
                    <Img img={EggHoldersUntitled1} alt="Steven Weinberg’s untitled glass sculpture on display at the RISD Museum." />
                    <Separator />
                    <p className='lg em middle'>Final model:</p>
                    <Img img={EggHoldersNine1} alt="EggHolder 9, an incomplete cube made of stacked acrylic pieces, holding an egg against a salmon-colored background." />
                    <div className='twoCol'>
                        <Img img={EggHoldersNine2} alt="Front view of EggHolder 9 showing the engraved lines on each piece forming a wave that moves through the whole model." />
                        <Img img={EggHoldersNine3} alt="Close-up of a corner of EggHolder 9. " />
                    </div>
                    <Img img={EggHoldersAll} alt="All three EggHolders together." />
                </Section>
            </Layout>
        </>
    )
}