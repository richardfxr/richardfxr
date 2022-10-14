// === IMPORTS ============================
// Next
import Head from 'next/head'
// components
import Layout from "../../components/Layout"
import PageHeading from '../../components/PageHeading'
import Section from "../../components/Section"
import UnderlinedLink from '../../components/UnderlinedLink'
import Button from '../../components/Button'

// === FUNCTIONS ==========================
function print() {
    console.log("printing");
    window.print()
}



// === SECTIONS ===========================
const sections = [
    {heading: "Info", id: "info"},
    {heading: "Objective", id: "objective"},
    {heading: "Education", id: "education"},
    {heading: "Projects", id: "projects"},
    {heading: "Skills", id: "skills"},
]

export default function Resume() {
    
    return (
        <>
            <Head>
                <title>Résumé | Richard Fu</title>
                <meta
                    name="description"
                    content="Version 10.2 of my portfolio website built using Next.js with React, and animated with Framer Motion."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/info-OGimage-v10.2.0gold.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading="Résumé" printHidden id="resume">
                <div className='screenHidden' id="printInfo">
                    <PageHeading heading="Richard Fu" />
                    <ul>
                        <li>Xiangrui Fu (legal name)</li>
                        <li>richardfxr.com</li>
                        <li>xfu01@risd</li>
                    </ul>
                </div>

                <Section sections={sections} index={0} printHidden>
                    <dl className="twoCol dlList">
                        <div>
                            <dt>Legal name</dt>
                            <dd>Xiangrui Fu</dd>
                        </div>
                        <div>
                            <dt>Preferred name</dt>
                            <dd>Richard</dd>
                        </div>
                        <div>
                            <dt>RISD email</dt>
                            <dd><UnderlinedLink href="mailto:xfu01@risd.edu?subject=A%20Witty%20Title" target="_blank" styling="block">xfu01@risd.edu</UnderlinedLink></dd>
                        </div>
                        <div>
                            <dt>website</dt>
                            <dd><UnderlinedLink to="/" styling="block">richardfxr.com</UnderlinedLink></dd>
                        </div>
                    </dl>

                    <p className='md first'>This is the web version of Richard Fu’s résumé. It was last updated on <em>October 13, 2022</em>. This résumé can be printed or downloaded as a PDF.</p>

                    <ul className='row md'>
                        <li><Button click={print} styling="sm">Print</Button></li>
                        <li><Button href="/RichardFu-resume.pdf" target="_blank" styling="sm">Download</Button></li>
                    </ul>
                </Section>

                <Section sections={sections} index={1}>
                    <p className='md'>Seeking an internship in <em>digital user interface design</em> where I can apply my design and software engineering skills while working with a professional team.</p>

                    <ul className='row md printHidden'>
                        <li><Button to='/projects' styling="sm">Portfolio</Button></li>
                        <li><Button href="https://github.com/richardfxr" target="_blank" styling="sm">GitHub</Button></li>
                    </ul>
                </Section>

                <Section sections={sections} index={2}>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt>Rhode Island School of Design</dt>
                            <dd>Bachelor of Fine Arts, Industrial Design</dd>
                        </div>
                    </dl>
                </Section>

                <Section sections={sections} index={3}>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt><UnderlinedLink href="https://weatherdial.richardfxr.com/" target="_blank">Weather Dial</UnderlinedLink></dt>
                            <dd>A simple weather app focused on data visualization and animation built with SvelteKit.</dd>
                        </div>
                        <div>
                            <dt><UnderlinedLink to="/info">richardfxr.com</UnderlinedLink></dt>
                            <dd>An accessibility-focused redesign of my portfolio site built with React, Next.js, and Framer Motion.</dd>
                        </div>
                        <div>
                            <dt><UnderlinedLink to="/projects/budgetty">Budgetty</UnderlinedLink></dt>
                            <dd>A circular monochrome interface for a standalone digital wallet. Concepts created with Illustrator and After Effects.</dd>
                        </div>
                        <div>
                            <dt><UnderlinedLink href="https://sity.earth/" target="_blank">sity.earth</UnderlinedLink></dt>
                            <dd>A web app that helps users find their city’s recycling guidelines. Built with SvelteKit and Cloud Firestore.</dd>
                        </div>
                    </dl>

                    <ul className='row md printHidden'>
                        <li><Button to="/projects" styling="sm">More projects</Button></li>
                        <li><Button to='/projects/archive' styling="sm">Archive</Button></li>
                    </ul>
                </Section>

                <Section sections={sections} index={4}>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt>Programs</dt>
                            <dd>Illustrator, Photoshop, Premiere Pro, After Effects, Lightroom Classic, Audition, InDesign, DaVinci Resolve, Figma, SolidWorks, HSMWroks, Blender</dd>
                        </div>
                        <div>
                            <dt>Software development</dt>
                            <dd>HTML, CSS, JavaScript, git, Tailwind CSS, React, Next.js, Framer Motion, SvelteKit, Svelte, Vite, Vue.js, WebGL, Three.js, Python</dd>
                        </div>
                        <div>
                            <dt>Others</dt>
                            <dd>Illustration, photography, videography, graphic design.</dd>
                        </div>
                    </dl>
                </Section>
            </Layout>
        </>
    )
}