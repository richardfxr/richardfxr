// === IMPORTS ============================
// Sass
import './PFrame.scss'
// components
import { projects } from '../../components/AnimatedRoutes'
import PageTemplate from "../../components/PageTemplate"
import ProjectInfo from "../../components/ProjectInfo"
import Section from "../../components/Section"
import Image from "../../components/Image"
import UnderlinedLink from '../../components/UnderlinedLink'



// === SECTIONS ===========================
const sections = [
    {heading: "Sketches", id: "sketches"},
    {heading: "Renders", id: "renders"},
]

export default function PFrame() {
    // project title
    const title = 'P-Frame'
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <PageTemplate heading={title} id="pframe">
            <ProjectInfo project={project}>
                Creating complex, curved objects in a solid modeling software like <UnderlinedLink href="https://www.solidworks.com/" target="_blank">SolidWorks</UnderlinedLink> isn’t easy, but that didn’t stop me from modeling P-Frame – a pair of planar magnetic open-back headphones. This project was part of a RISD ID course taught by <UnderlinedLink href="https://www.risd.edu/academics/industrial-design/faculty/diau-hall" target="_blank">Diau Hall</UnderlinedLink>.
            </ProjectInfo>

            <Section sections={sections} index={0}>
                <Image folder="PFrame" fileName="PFrame-sketch-1" alt="Rough sketches of headphones defined by large, sweeping curves." />
                <Image folder="PFrame" fileName="PFrame-sketch-2" alt="Rough sketches of more angular headphones with sharper edges." />
                <div className='twoCol'>
                    <Image folder="PFrame" fileName="PFrame-sketch-3" alt="Line sketch of the side of the chosen design. The frame of the headphones is very minimal, with only two arms holding each driver unit in place." />
                    <Image folder="PFrame" fileName="PFrame-sketch-4" alt="Shaded render of the chosen design. The frame is a lighter color, holding up completely exposed drivers and dark leather earpads." />
                </div>
            </Section>

            <Section sections={sections} index={1}>
                <Image folder="PFrame" fileName="PFrame-render-1" alt="Front view of the P-Frame. The thin profile of the frame contrasts with the thick earpads." />
                <Image folder="PFrame" fileName="PFrame-render-2" alt="Bottom view of the P-Frame. The angled arms and tilted drivers make this view particularly interesting." />
                <div className='twoCol'>
                    <Image folder="PFrame" fileName="PFrame-render-3" alt="Side view of the P-Frame. It looks quite similar to the sketch from the same viewpoint." />
                    <Image folder="PFrame" fileName="PFrame-render-4" alt="Top view of the P-Frame. The long flat top bar of the frame covers up most of the earpads below." />
                </div>
                <Image folder="PFrame" fileName="PFrame-render-5" alt="Close-up view of the left driver unit and earpad." />
                <Image folder="PFrame" fileName="PFrame-render-6" alt="Close-up view of where the left arms meet the frame. This segment is filled with extreme curves and morphing edges." />
                <Image folder="PFrame" fileName="PFrame-render-7" alt="Close-up view of the left grill in dark gold. The magnets on the driver are visible through the gaps." />
                <Image folder="PFrame" fileName="PFrame-render-8" alt="Close-up view of the left grill without the earpad. Square, circle, and line markings denote the length of screw that goes into each hole. The text ‘P-Frame, 1 of 500’ is printed near the bottom of the grill." />
            </Section>
        </PageTemplate>
    )
}