// === IMPORTS ============================
// Next
import Head from 'next/head'
// React
import { useState, useRef, useEffect } from 'react'
// components
import { projects } from '../../components/AppWrapper'
import Layout from "../../components/Layout"
import ProjectInfo from "../../components/ProjectInfo"
import Button from "../../components/Button"
import Section from "../../components/Section"
import Img from "../../components/Img"
import ScrollContainer from "../../components/ScrollContainer"
import Table from "../../components/Table"
import UnderlinedLink from '../../components/UnderlinedLink'
// hooks
import { useIsMotionOK } from "../../hooks/useMediaQuery"
// images
import MachinistsEdgeChallenge1 from '../../public/images/MachinistsEdge/MachinistsEdge-challenge-1.jpg'
import MachinistsEdgeChallenge2 from '../../public/images/MachinistsEdge/MachinistsEdge-challenge-2.jpg'
import MachinistsEdgeChallenge3 from '../../public/images/MachinistsEdge/MachinistsEdge-challenge-3.jpg'
import MachinistsEdgeDesign1 from '../../public/images/MachinistsEdge/MachinistsEdge-design-1.jpg'
import MachinistsEdgeDesign2 from '../../public/images/MachinistsEdge/MachinistsEdge-design-2.jpg'
import MachinistsEdgeDesign3 from '../../public/images/MachinistsEdge/MachinistsEdge-design-3.jpg'
import MachinistsEdgeDesign4 from '../../public/images/MachinistsEdge/MachinistsEdge-design-4.jpg'
import MachinistsEdgeDesign5 from '../../public/images/MachinistsEdge/MachinistsEdge-design-5.jpg'
import MachinistsEdgeDesign6 from '../../public/images/MachinistsEdge/MachinistsEdge-design-6.jpg'
import MachinistsEdgeDesign7 from '../../public/images/MachinistsEdge/MachinistsEdge-design-7.jpg'
import MachinistsEdgeErrors1 from '../../public/images/MachinistsEdge/MachinistsEdge-errors-1.jpg'
import MachinistsEdgeErrors2 from '../../public/images/MachinistsEdge/MachinistsEdge-errors-2.jpg'
import MachinistsEdgeErrors3 from '../../public/images/MachinistsEdge/MachinistsEdge-errors-3.jpg'
import MachinistsEdgeErrors4 from '../../public/images/MachinistsEdge/MachinistsEdge-errors-4.jpg'
import MachinistsEdgeErrors5 from '../../public/images/MachinistsEdge/MachinistsEdge-errors-5.jpg'
import MachinistsEdgeStatus1 from '../../public/images/MachinistsEdge/MachinistsEdge-status-1.jpg'
// SVGs
import FeedRateIcon from '../../public/SVGs/ME-feedRate.svg'
import ToolLengthIcon from '../../public/SVGs/ME-toolLength.svg'
import ChartIcon from '../../public/SVGs/ME-chart.svg'


// === SECTIONS ===========================
const sections = [
    {heading: "Challenge", id: "challenge"},
    {heading: "Design", id: "design"},
    {heading: "Erros", id: "errors"},
    {heading: "Status", id: "status"},
]

export default function MachinistsEdge() {
    // project title
    const title = "Machinist's Edge"
    const headTitle =`${title} | Richard Fu`
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    // states
    const isMotionOK = useIsMotionOK()

    return (
        <>
            <Head>
            <title>{headTitle}</title>
                <meta
                    name="description"
                    content="A collection of calculators and charts for the RISD ID Metal Shop’s CNC milling machine."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/MachinistsEdge/MachinistsEdge-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading={title} id="machinistsedge">
                <ProjectInfo project={project}>
                    <p>Machinist&#39;s Edge is a collection of calculators and charts created for the RISD Industrial Design Metal Shop&#39;s CNC milling machine. These tools improve the operation experience and reduce calculation errors.</p>
                    <Button styling="sm" href="https://www.machinists-edge.com/" target="_blank">Visit Machinist&#39;s Edge</Button>
                </ProjectInfo>

                <Section sections={sections} index={0}>
                    <Img
                        img={MachinistsEdgeChallenge1}
                        alt="The Tormach PCNC1100 milling machine in the RISD Industrial Design Metal Shop."
                    />

                    <p className='md top-4xl bottom-4xl'>Operating a CNC milling machine is a <em>complex</em> and <em>demanding</em> process that requires the operators to perform a series of measurements, calculations, and cross-checks. This process can be <em>slow</em> and <em>error-prone</em>.</p>

                    <div className='twoCol'>
                        <Img
                            img={MachinistsEdgeChallenge2}
                            alt="A collection of end mills for the CNC milling machine, varying greatly in height and shape."
                        />
                        <Img
                            img={MachinistsEdgeChallenge3}
                            alt="A half-inch ball end mill that is being measured on a flat marble surface with a height gauge."
                        />
                    </div>

                    <p className='md top-4xl'>User interviews determined that the following four tools would greatly <em>improve operator efficiency</em>, <em>reduce errors</em>, and <em>improve overall safety</em>:</p>

                    <dl id="pageList" className="twoCol dlList">
                        <div>
                            <dt>
                                <FeedRateIcon />
                                Feed Rate Calculator
                            </dt>
                            <dd>Calculates the spindle speed and feed rate for a specific end mill performing either a drill or mill operation on a certain material. End mill profiles can be saved.</dd>
                        </div>
                        <div>
                            <dt>
                                <ToolLengthIcon />
                                Tool Length Calculator
                            </dt>
                            <dd>Calculates various lengths of a tool based on provided measurements. Tool profiles can be saved.</dd>
                        </div>
                        <div>
                            <dt>
                                <ChartIcon />
                                G- & M-code Charts
                            </dt>
                            <dd>Searchable charts containing descriptions of common and shop-specific G- and M-codes for cross-checking and troubleshooting.</dd>
                        </div>
                        <div>
                            <dt>
                                <ChartIcon />
                                Tap & Clearance Drill Sizes
                            </dt>
                            <dd>Searchable chart containing tap/drill and clearance hole diameters for different screw sizes.</dd>
                        </div>
                    </dl>
                </Section>

                <Section sections={sections} index={1}>
                    <Img
                        img={MachinistsEdgeDesign1}
                        alt="The tool length calculator page displayed on a MacBook Pro 16 in light mode."
                    />

                    <div className='twoCol'>
                        <Img
                            img={MachinistsEdgeDesign2}
                            alt="The G- and M-code charts page displayed on a Pixel 6 Pro in dark mode."
                        />
                        <Img
                            img={MachinistsEdgeDesign3}
                            alt="The feed rate calculator page displayed on a Pixel 6 Pro in light mode."
                        />
                    </div>

                    <p className='md top-4xl bottom-4xl'>The design of Machinist&#39;s Edge is <em>large</em> and <em>comprehensible</em>, providing operators with <em>unmistakably clear information</em>.</p>

                    <Img
                        img={MachinistsEdgeDesign4}
                        alt="The feed rate calculator page displayed on a Surface Pro 8 in dark mode."
                    />

                    <div className='twoCol'>
                        <Img
                            img={MachinistsEdgeDesign5}
                            alt="The tool length calculator page displayed on an iPhone 14 Pro in dark mode."
                        />
                        <Img
                            img={MachinistsEdgeDesign6}
                            alt="The save section of the tool length calculator page displayed on an iPhone 14 Pro in light mode."
                        />
                    </div>

                    <Img
                        img={MachinistsEdgeDesign7}
                        alt="The tap and clearance drill sizes page displayed on a Surface Pro 8 in light mode."
                    />
                </Section>

                <Section sections={sections} index={2}>
                    <Img
                        img={MachinistsEdgeErrors1}
                        alt="The tool length calculator page with a should length error displayed on a Nothing Phone (1) in dark mode."
                    />

                    <p className='md top-4xl bottom-4xl'><em>Error prevention</em> is one of the major goals of Machinist&#39;s Edge. Regardless of the screen size, errors are always <em>clearly marked</em> and instantly recognizable at a glance.</p>

                    <Img
                        img={MachinistsEdgeErrors2}
                        alt="The feed rate calculator page with a cutter diameter error displayed on a MacBook Pro 16 in dark mode."
                    />

                    <div className='twoCol'>
                        <Img
                            img={MachinistsEdgeErrors3}
                            alt="The feed rate calculator page with a cutting feed error displayed on a Nothing Phone (1) in dark mode."
                        />
                        <Img
                            img={MachinistsEdgeErrors4}
                            alt="The tool length calculator page with a base-to-should length error displayed on a Nothing Phone (1) in light mode."
                        />
                    </div>

                    <Img
                        img={MachinistsEdgeErrors5}
                        alt="The tool length calculator page with a shoulder length error displayed on a Surface Pro 8 in light mode."
                    />
                </Section>

                <Section sections={sections} index={3}>
                    <Img
                        img={MachinistsEdgeStatus1}
                        alt="A OnePlus 7T Pro on a workbench displaying the tool length calculator page in dark mode."
                    />

                    <p className='md top-4xl'>Machinist&#39;s Edge is currently in <em>open alpha</em> and undergoing further user testing. General release is planned for <em>Q3 of 2023</em>.</p>

                    <ul className='row md printHidden'>
                        <li><Button styling="sm" href="https://www.machinists-edge.com/" target="_blank">Visit Machinist&#39;s Edge</Button></li>
                        <li><Button styling="sm" href='https://github.com/richardfxr/machinists-edge' target="_blank">GitHub repo</Button></li>
                    </ul>
                </Section>
            </Layout>
        </>
    )
}