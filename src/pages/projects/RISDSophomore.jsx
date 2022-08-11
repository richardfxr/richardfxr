// === IMPORTS ============================
// Sass
import './RISDSophomore.scss'
// components
import { projects } from '../../components/AnimatedRoutes'
import PageTemplate from "../../components/PageTemplate"
import ProjectInfo from "../../components/ProjectInfo"
import Section from "../../components/Section"
import Image from "../../components/Image"
import UnderlinedLink from '../../components/UnderlinedLink'
import Separator from '../../components/Separator'
import ProjectCard from '../../components/ProjectCard'



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
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    // get related projects array
    const relatedProjects = []
    relatedProjects[3] = projects.find(elem => elem.title === 'Exploded 1200D')
    relatedProjects[2] = projects.find(elem => elem.title === 'P-Frame')
    relatedProjects[1] = projects.find(elem => elem.title === 'EggHolders')

    return (
        <PageTemplate heading={title} id="risdsophomore">
            <ProjectInfo project={project}>
                A collection of projects I created during my sophomore year at RISD as an industrial design major. Most of these remain mere explorations, with more elaborate projects linked in the <UnderlinedLink href="#related">related works</UnderlinedLink> section below.
            </ProjectInfo>

            <Section sections={sections} index={0}>
                <h3 id="freehandcubes">Freehand Cubes</h3>
                <p className='md bottom-xxxl'>A collection of cubes drawn in two-point perspectives without a ruler. Construction lines were drawn in blue while obscured edges are dotted. </p>
                <Image folder="RISDSophomore" fileName="FreehandCubes-1" alt="Sketch of cubes in two-point perspective messily colliding into each other." />
                <Image folder="RISDSophomore" fileName="FreehandCubes-2" alt="Sketch of cubes in two-point perspective on four different horizon lines, forming a circular pattern that’s busiest in the center." />
                <Image folder="RISDSophomore" fileName="FreehandCubes-3" alt="Sketch of cubes in two-point perspective on two different horizon lines, glitching into each other and becoming a complete mess." />

                <Separator />

                <h3 id="115frenchpress">115° French Press</h3>
                <p className='md bottom-xxxl'>A redesign of the common french press with a twist – or should I say lean? The project also includes an operational sequence manual that is also cut at a 115° angle.</p>
                <Image folder="RISDSophomore" fileName="115FrechPress-sketch-1" alt="40 thumbnail sketches of possible french press forms. These range from rather minimal cylinders to eccentric sculptural forms." />
                <Image folder="RISDSophomore" fileName="115FrechPress-sketch-2" alt="Orthographic drawing of the chosen french press design. The press is slanted at a 115-degree angle, giving it a sense of movement without compromising balance." />
                <Image folder="RISDSophomore" fileName="115FrechPress-1" alt="Back three-quarters view of the final French press model. The main container is made from layered Bristol paper and the handle is made of sheets of chipboard. " />
                <Image folder="RISDSophomore" fileName="115FrechPress-2" alt="Close-up of the top of the model. The lid and plunger of the french press are both slanted at an angle." />
                <div className='twoCol'>
                    <Image folder="RISDSophomore" fileName="115FrechPress-3" alt="Close-up of the bottom of the model. The chipboard pieces of the handle form a repetitive pattern that looks like a heatsink." />
                    <Image folder="RISDSophomore" fileName="115FrechPress-4" alt="Close-up of the handle from the top." />
                </div>
                <div className='twoCol'>
                    <Image folder="RISDSophomore" fileName="115FrechPress-5" alt="Cover page of the operation manual. The sides of the manual are also cut at 115 degrees. The cover shows an illustration of the french press that emphasizes its slanted nature." />
                    <Image folder="RISDSophomore" fileName="115FrechPress-6" alt="The operation manual flipped open, showing five other pages with illustrations on how to operate the french press." />
                </div>
            </Section>

            <Section sections={sections} index={1}>
                <h3 id="walnutdisc">Walnut Disc</h3>
                <Image folder="RISDSophomore" fileName="WalnutDisc-1" alt="A thin, walnut saucer with both the top and bottom bulging outward. Its surface is smooth, showing faint reflections of the studio lights around it." />
                <div className='twoCol'>
                    <Image folder="RISDSophomore" fileName="WalnutDisc-2" alt="Close-up of the top of the walnut disc." />
                    <Image folder="RISDSophomore" fileName="WalnutDisc-3" alt="Side view of the walnut disc. This view emphasizes its thinness. The curves of the bulges on both sides also match perfectly." />
                </div>

                <Separator />

                <h3 id="twistedlofts">Twisted Lofts</h3>
                <p className='md bottom-xxxl'>A pair of wood projects inspired by the twisted lofts that CAD software like to create.</p>
                <Image folder="RISDSophomore" fileName="TwistedLofts-1" alt="A twisted hexagonal prism made of pine wood with a deep cavity at the top." />
                <div className='twoCol'>
                    <Image folder="RISDSophomore" fileName="TwistedLofts-2" alt="Close-up of the sides of the pine piece. The carving marks on the surface add texture to the wood." />
                    <Image folder="RISDSophomore" fileName="TwistedLofts-3" alt="The pine piece laying flat on its side. " />
                </div>
                <Image folder="RISDSophomore" fileName="TwistedLofts-4" alt="A twisted prism made out of 8 identical bent lamination pieces held together by a series of white strings. " />
                <Image folder="RISDSophomore" fileName="TwistedLofts-5" alt="Rough sketches of headphones defined by large, sweeping curves." />
                <div className='twoCol'>
                    <Image folder="RISDSophomore" fileName="TwistedLofts-6" alt="Close-up view of the bent lamination piece from a higher angle." />
                    <Image folder="RISDSophomore" fileName="TwistedLofts-7" alt="Top-down view of the bent lamination piece. The space left empty in the middle forms an octagon." />
                </div>
            </Section>

            <Section sections={sections} index={2}>
                <h3 id="thecreature">The Creature</h3>
                <p className='md bottom-xxxl'>A mechanic crab that crawls using <UnderlinedLink href="https://en.wikipedia.org/wiki/Klann_linkage" target="_blank" styling="em">Klann linkages</UnderlinedLink> connected to a turbine. This project was created in collaboration with <UnderlinedLink href="https://www.linkedin.com/in/josephine-hostin-500b441aa" target="_blank" styling="em">Josephine Hostin</UnderlinedLink> and <UnderlinedLink href="https://sahilbalani.myportfolio.com/" target="_blank" styling="em">Sahil Balani</UnderlinedLink>.</p>
                <div className='videoContainer'>
                    <iframe src="https://player.vimeo.com/video/685289621?dnt=1" frameBorder="0" allow="fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>
            </Section>

            <Section sections={sections} index={3}>
                <h3 id="thecreature">Serpents</h3>
                <p className='md bottom-xxxl'>A pair of modular metal sculptures that can twist and bend like snakes. The first uses hinges to introduce movement while the second utilizes the play between the folded sheets of aluminum.</p>
                <Image folder="RISDSophomore" fileName="Serpents-1" alt="A long sequence of modular triangular prisms made from tin sheets attached using hinges. These hinges allow for fluid movement in an otherwise solid object." />
                <div className='twoCol'>
                    <Image folder="RISDSophomore" fileName="Serpents-2" alt="Close-up of the triangular prisms. The folds and layers that result from their construction are visible." />
                    <Image folder="RISDSophomore" fileName="Serpents-3" alt="Close-up of the piece curled into a cylinder. Each modular turns slightly to form the curve." />
                </div>
                <Image folder="RISDSophomore" fileName="Serpents-4" alt="The piece folded up into an almost unrecognizable mess. This demonstrates how flexible the piece is." />
                <Image folder="RISDSophomore" fileName="Serpents-5" alt="A long string of modular C-shaped clips made from aluminum sheets, each clipping onto the next in an alternating sequence. " />
                <div className='twoCol'>
                    <Image folder="RISDSophomore" fileName="Serpents-6" alt="The long string of clips curved into a backward S-shape." />
                    <Image folder="RISDSophomore" fileName="Serpents-7" alt="Both pieces tangled together in a double helix like two snakes." />
                </div>
            </Section>

            <Section sections={sections} index={4}>
            <p className='md bottom-xxxl'>These are larger projects that were also created during my sophomore year at RISD.</p>
                <ul className='twoCol cards'>
                    {relatedProjects.map((project) => (
                        <li key={project.path}><ProjectCard {...project} /></li>
                    ))}
                </ul>
            </Section>
        </PageTemplate>
    )
}