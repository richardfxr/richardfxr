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
import ProjectCard from '../../components/ProjectCard'
// images
import FreehandCubes1 from '../../public/images/RISDSophomore/FreehandCubes-1.jpg'
import FreehandCubes2 from '../../public/images/RISDSophomore/FreehandCubes-2.jpg'
import FreehandCubes3 from '../../public/images/RISDSophomore/FreehandCubes-3.jpg'
import FrechPressSketch1 from '../../public/images/RISDSophomore/115FrechPress-sketch-1.jpg'
import FrechPressSketch2 from '../../public/images/RISDSophomore/115FrechPress-sketch-2.jpg'
import FrechPress1 from '../../public/images/RISDSophomore/115FrechPress-1.jpg'
import FrechPress2 from '../../public/images/RISDSophomore/115FrechPress-2.jpg'
import FrechPress3 from '../../public/images/RISDSophomore/115FrechPress-3.jpg'
import FrechPress4 from '../../public/images/RISDSophomore/115FrechPress-4.jpg'
import FrechPress5 from '../../public/images/RISDSophomore/115FrechPress-5.jpg'
import FrechPress6 from '../../public/images/RISDSophomore/115FrechPress-6.jpg'
import WalnutDisc1 from '../../public/images/RISDSophomore/WalnutDisc-1.jpg'
import WalnutDisc2 from '../../public/images/RISDSophomore/WalnutDisc-2.jpg'
import WalnutDisc3 from '../../public/images/RISDSophomore/WalnutDisc-3.jpg'
import TwistedLofts1 from '../../public/images/RISDSophomore/TwistedLofts-1.jpg'
import TwistedLofts2 from '../../public/images/RISDSophomore/TwistedLofts-2.jpg'
import TwistedLofts3 from '../../public/images/RISDSophomore/TwistedLofts-3.jpg'
import TwistedLofts4 from '../../public/images/RISDSophomore/TwistedLofts-4.jpg'
import TwistedLofts5 from '../../public/images/RISDSophomore/TwistedLofts-5.jpg'
import TwistedLofts6 from '../../public/images/RISDSophomore/TwistedLofts-6.jpg'
import TwistedLofts7 from '../../public/images/RISDSophomore/TwistedLofts-7.jpg'
import Serpents1 from '../../public/images/RISDSophomore/Serpents-1.jpg'
import Serpents2 from '../../public/images/RISDSophomore/Serpents-2.jpg'
import Serpents3 from '../../public/images/RISDSophomore/Serpents-3.jpg'
import Serpents4 from '../../public/images/RISDSophomore/Serpents-4.jpg'
import Serpents5 from '../../public/images/RISDSophomore/Serpents-5.jpg'
import Serpents6 from '../../public/images/RISDSophomore/Serpents-6.jpg'
import Serpents7 from '../../public/images/RISDSophomore/Serpents-7.jpg'



// === SECTIONS ===========================
const sections = [
    {heading: "Design Principles 1", id: "dp1"},
    {heading: "Wood 1", id: "wood1"},
    {heading: "Design Principles 2", id: "dp2"},
    {heading: "Metal 1", id: "metal1"},
    {heading: "Related Works", id: "related"},
]

export default function RISDSophomore() {
    // project title
    const title = 'RISD Sophomore'
    const headTitle =`${title} | Richard Fu`;
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    // get related projects array
    const relatedProjects = []
    relatedProjects[3] = projects.find(elem => elem.title === 'Exploded 1200D')
    relatedProjects[2] = projects.find(elem => elem.title === 'P-Frame')
    relatedProjects[1] = projects.find(elem => elem.title === 'EggHolders')

    return (
        <>
            <Head>
                <title>{headTitle}</title>
                <meta
                    name="description"
                    content="Projects I created during my RISD sophomore year as an industrial design major. These include the 115° French Press, Freehand Cubes, wood, and metal projects."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/RISDSophomore/RISDSophomore-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading={title} id="risdsophomore">
                <ProjectInfo project={project}>
                    <p>A collection of projects I created during my sophomore year at RISD as an industrial design major. Most of these remain mere explorations, with more elaborate projects linked in the <UnderlinedLink href="#related">related works</UnderlinedLink> section below.</p>
                </ProjectInfo>

                <Section sections={sections} index={0}>
                    <h3 id="freehandcubes">Freehand Cubes</h3>
                    <p className='md bottom-xxxl'>A collection of cubes drawn in two-point perspectives without a ruler. Construction lines were drawn in blue while obscured edges are dotted. </p>
                    <Img img={FreehandCubes1} alt="Sketch of cubes in two-point perspective messily colliding into each other." />
                    <Img img={FreehandCubes2} alt="Sketch of cubes in two-point perspective on four different horizon lines, forming a circular pattern that’s busiest in the center." />
                    <Img img={FreehandCubes3} alt="Sketch of cubes in two-point perspective on two different horizon lines, glitching into each other and becoming a complete mess." />

                    <Separator />

                    <h3 id="frenchpress">115° French Press</h3>
                    <p className='md bottom-xxxl'>A redesign of the common french press with a twist – or should I say lean? The project also includes an operational sequence manual that is also cut at a 115° angle.</p>
                    <Img img={FrechPressSketch1} alt="40 thumbnail sketches of possible french press forms. These range from rather minimal cylinders to eccentric sculptural forms." />
                    <Img img={FrechPressSketch2} alt="Orthographic drawing of the chosen french press design. The press is slanted at a 115-degree angle, giving it a sense of movement without compromising balance." />
                    <Img img={FrechPress1} alt="Back three-quarters view of the final French press model. The main container is made from layered Bristol paper and the handle is made of sheets of chipboard. " />
                    <Img img={FrechPress2} alt="Close-up of the top of the model. The lid and plunger of the french press are both slanted at an angle." />
                    <div className='twoCol'>
                        <Img img={FrechPress3} alt="Close-up of the bottom of the model. The chipboard pieces of the handle form a repetitive pattern that looks like a heatsink." />
                        <Img img={FrechPress4} alt="Close-up of the handle from the top." />
                    </div>
                    <div className='twoCol'>
                        <Img img={FrechPress5} alt="Cover page of the operation manual. The sides of the manual are also cut at 115 degrees. The cover shows an illustration of the french press that emphasizes its slanted nature." />
                        <Img img={FrechPress6} alt="The operation manual flipped open, showing five other pages with illustrations on how to operate the french press." />
                    </div>
                </Section>

                <Section sections={sections} index={1}>
                    <h3 id="walnutdisc">Walnut Disc</h3>
                    <Img img={WalnutDisc1} alt="A thin, walnut saucer with both the top and bottom bulging outward. Its surface is smooth, showing faint reflections of the studio lights around it." />
                    <div className='twoCol'>
                        <Img img={WalnutDisc2} alt="Close-up of the top of the walnut disc." />
                        <Img img={WalnutDisc3} alt="Side view of the walnut disc. This view emphasizes its thinness. The curves of the bulges on both sides also match perfectly." />
                    </div>

                    <Separator />

                    <h3 id="twistedlofts">Twisted Lofts</h3>
                    <p className='md bottom-xxxl'>A pair of wood projects inspired by the twisted lofts that CAD software like to create.</p>
                    <Img img={TwistedLofts1} alt="A twisted hexagonal prism made of pine wood with a deep cavity at the top." />
                    <div className='twoCol'>
                        <Img img={TwistedLofts2} alt="Close-up of the sides of the pine piece. The carving marks on the surface add texture to the wood." />
                        <Img img={TwistedLofts3} alt="The pine piece laying flat on its side. " />
                    </div>
                    <Img img={TwistedLofts4} alt="A twisted prism made out of 8 identical bent lamination pieces held together by a series of white strings. " />
                    <Img img={TwistedLofts5} alt="Rough sketches of headphones defined by large, sweeping curves." />
                    <div className='twoCol'>
                        <Img img={TwistedLofts6} alt="Close-up view of the bent lamination piece from a higher angle." />
                        <Img img={TwistedLofts7} alt="Top-down view of the bent lamination piece. The space left empty in the middle forms an octagon." />
                    </div>
                </Section>

                <Section sections={sections} index={2} skipLinkHidden>
                    <h3 id="thecreature">The Creature</h3>
                    <p className='md bottom-xxxl'>A mechanic crab that crawls using <UnderlinedLink href="https://en.wikipedia.org/wiki/Klann_linkage" target="_blank" styling="em">Klann linkages</UnderlinedLink> connected to a turbine. This project was created in collaboration with <UnderlinedLink href="https://www.linkedin.com/in/josephine-hostin-500b441aa" target="_blank" styling="em">Josephine Hostin</UnderlinedLink> and <UnderlinedLink href="https://sahilbalani.myportfolio.com/" target="_blank" styling="em">Sahil Balani</UnderlinedLink>.</p>
                    <div className='videoContainer'>
                        <iframe src="https://player.vimeo.com/video/685289621?dnt=1" frameBorder="0" allow="fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Section>

                <Section sections={sections} index={3}>
                    <h3 id="thecreature">Serpents</h3>
                    <p className='md bottom-xxxl'>A pair of modular metal sculptures that can twist and bend like snakes. The first uses hinges to introduce movement while the second utilizes the play between the folded sheets of aluminum.</p>
                    <Img img={Serpents1} alt="A long sequence of modular triangular prisms made from tin sheets attached using hinges. These hinges allow for fluid movement in an otherwise solid object." />
                    <div className='twoCol'>
                        <Img img={Serpents2} alt="Close-up of the triangular prisms. The folds and layers that result from their construction are visible." />
                        <Img img={Serpents3} alt="Close-up of the piece curled into a cylinder. Each modular turns slightly to form the curve." />
                    </div>
                    <Img img={Serpents4} alt="The piece folded up into an almost unrecognizable mess. This demonstrates how flexible the piece is." />
                    <Img img={Serpents5} alt="A long string of modular C-shaped clips made from aluminum sheets, each clipping onto the next in an alternating sequence. " />
                    <div className='twoCol'>
                        <Img img={Serpents6} alt="The long string of clips curved into a backward S-shape." />
                        <Img img={Serpents7} alt="Both pieces tangled together in a double helix like two snakes." />
                    </div>
                </Section>

                <Section sections={sections} index={4}>
                <p className='md bottom-xxxl'>These are larger projects that were also created during my sophomore year at RISD.</p>
                    <ul className='twoCol cards'>
                        {relatedProjects.map((project) => (
                            <li key={project.href}><ProjectCard {...project} /></li>
                        ))}
                    </ul>
                </Section>
            </Layout>
        </>
    )
}