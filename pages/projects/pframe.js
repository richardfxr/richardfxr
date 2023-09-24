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
// images
import PFrameSketch1 from '../../public/images/PFrame/PFrame-sketch-1.jpg'
import PFrameSketch2 from '../../public/images/PFrame/PFrame-sketch-2.jpg'
import PFrameSketch3 from '../../public/images/PFrame/PFrame-sketch-3.jpg'
import PFrameSketch4 from '../../public/images/PFrame/PFrame-sketch-4.jpg'
import PFrameRender1 from '../../public/images/PFrame/PFrame-render-1.jpg'
import PFrameRender2 from '../../public/images/PFrame/PFrame-render-2.jpg'
import PFrameRender3 from '../../public/images/PFrame/PFrame-render-3.jpg'
import PFrameRender4 from '../../public/images/PFrame/PFrame-render-4.jpg'
import PFrameRender5 from '../../public/images/PFrame/PFrame-render-5.jpg'
import PFrameRender6 from '../../public/images/PFrame/PFrame-render-6.jpg'
import PFrameRender7 from '../../public/images/PFrame/PFrame-render-7.jpg'
import PFrameRender8 from '../../public/images/PFrame/PFrame-render-8.jpg'



// === SECTIONS ===========================
const sections = [
    {heading: "Sketches", id: "sketches"},
    {heading: "Renders", id: "renders"},
]

export default function PFrame() {
    // project title
    const title = 'P-Frame'
    const headTitle =`${title} | Richard Fu`;
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <>
            <Head>
                <title>{headTitle}</title>
                <meta
                    name="description"
                    content="A pair of planar magnetic open-back headphones in white modeled in SolidWorks. This project was part of a RISD ID course taught by Diau Hall."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/PFrame/PFrame-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading={title} id="pframe">
                <ProjectInfo project={project}>
                    <p>Creating complex, curved objects in a solid modeling software like <UnderlinedLink href="https://www.solidworks.com/" target="_blank">SolidWorks</UnderlinedLink> isn’t easy, but that didn’t stop me from modeling P-Frame – a pair of planar magnetic open-back headphones. This project was part of a RISD ID course taught by <UnderlinedLink href="https://www.risd.edu/academics/industrial-design/faculty/diau-hall" target="_blank">Diau Hall</UnderlinedLink>.</p>
                </ProjectInfo>

                <Section sections={sections} index={0}>
                    <Img img={PFrameSketch1} alt="Rough sketches of headphones defined by large, sweeping curves." />
                    <Img img={PFrameSketch2} alt="Rough sketches of more angular headphones with sharper edges." />
                    <div className='twoCol'>
                        <Img img={PFrameSketch3} alt="Line sketch of the side of the chosen design. The frame of the headphones is very minimal, with only two arms holding each driver unit in place." />
                        <Img img={PFrameSketch4} alt="Shaded render of the chosen design. The frame is a lighter color, holding up completely exposed drivers and dark leather earpads." />
                    </div>
                </Section>

                <Section sections={sections} index={1}>
                    <Img img={PFrameRender1} alt="Front view of the P-Frame. The thin profile of the frame contrasts with the thick earpads." />
                    <Img img={PFrameRender2} alt="Bottom view of the P-Frame. The angled arms and tilted drivers make this view particularly interesting." />
                    <div className='twoCol'>
                        <Img img={PFrameRender3} alt="Side view of the P-Frame. It looks quite similar to the sketch from the same viewpoint." />
                        <Img img={PFrameRender4} alt="Top view of the P-Frame. The long flat top bar of the frame covers up most of the earpads below." />
                    </div>
                    <Img img={PFrameRender5} alt="Close-up view of the left driver unit and earpad." />
                    <Img img={PFrameRender6} alt="Close-up view of where the left arms meet the frame. This segment is filled with extreme curves and morphing edges." />
                    <Img img={PFrameRender7} alt="Close-up view of the left grill in dark gold. The magnets on the driver are visible through the gaps." />
                    <Img img={PFrameRender8} alt="Close-up view of the left grill without the earpad. Square, circle, and line markings denote the length of screw that goes into each hole. The text ‘P-Frame, 1 of 500’ is printed near the bottom of the grill." />
                </Section>
            </Layout>
        </>
    )
}