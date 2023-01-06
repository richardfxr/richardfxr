// === IMPORTS ============================
// Next
import Head from 'next/head'
// components
import Layout from "../../components/Layout"
import Section from "../../components/Section"
import UnderlinedLink from '../../components/UnderlinedLink'
import Button from '../../components/Button'
// SVGs
import Logo from '../../public/SVGs/logo.svg'
import RichardfxrQR from '../../public/SVGs/QR-richardfxr.svg'



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
                    content="I’m an industrial design student at Rhode Island School of Design who specializes in UI/UX design and web development."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/resume-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading="Résumé" printHidden id="resume">
                <div className='screenHidden' id="printInfo">
                    <div className='basicInfo'>
                        <div className='nameBox'>
                            <Logo />
                            <h1>Xiangrui (Richard) Fu</h1>
                        </div>
                        <p className='risdLabel'>RISD</p>
                        <p className='email'>xfu01@risd.edu</p>
                    </div>
                    <div className='richardfxrCard'>
                        <div className='text'>
                            <p className='url'>richardfxr.com</p>
                            <p className='details'>
                                <span>v10.2.1</span> 
                                <span>portfolio site</span>
                            </p>
                        </div>
                        <RichardfxrQR />
                    </div>
                </div>

                <Section sections={sections} index={0} printHidden skipLinkHidden>
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
                            <dt>Website</dt>
                            <dd><UnderlinedLink to="/" styling="block">richardfxr.com</UnderlinedLink></dd>
                        </div>
                    </dl>

                    <p className='md first'>This is the web version of my résumé, last updated on <em>December 22, 2022</em>. Please use the PDF version below for downloading and printing.</p>
                    <Button href="/RichardFu-resume.pdf" target="_blank" styling="sm">PDF version</Button>
                </Section>

                <Section sections={sections} index={1} skipLinkHidden>
                    <p className='md'>Seeking an internship in <em>digital user interface design</em> where I can apply my design and web development skills while working with a professional team.</p>

                    <ul className='row md printHidden'>
                        <li><Button to='/projects' styling="sm">Portfolio</Button></li>
                        <li><Button href="https://github.com/richardfxr" target="_blank" styling="sm">GitHub</Button></li>
                    </ul>
                </Section>

                <Section sections={sections} index={2} skipLinkHidden>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt>Rhode Island School of Design (RISD)</dt>
                            <dd>
                                <span>2020-2024</span>
                                <span>Bachelor of Fine Arts, Industrial Design</span>
                            </dd>
                        </div>
                        <div>
                            <dt>Boston University Academy (BUA)</dt>
                            <dd>
                                <span>2016-2020</span>
                                <span>Graduated summa cum laude</span>
                            </dd>
                        </div>
                    </dl>
                </Section>

                <Section sections={sections} index={3} skipLinkHidden>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt><UnderlinedLink href="https://www.machinists-edge.com/" target="_blank" print="machinists-edge.com">Machinist&#39;s Edge</UnderlinedLink></dt>
                            <dd>A web app with calculators and charts designed for the RISD ID Metal Shop and built with SvelteKit.</dd>
                        </div>
                        <div>
                            <dt><UnderlinedLink href="https://weatherdial.richardfxr.com/" target="_blank" print="weatherdial.richardfxr.com">Weather Dial</UnderlinedLink></dt>
                            <dd>A simple weather app focused on data visualization and animation. Built with SvelteKit.</dd>
                        </div>
                        <div>
                            <dt><UnderlinedLink to="/info">richardfxr.com</UnderlinedLink></dt>
                            <dd>An accessibility-focused redesign of my portfolio site built with React, Next.js, and Framer Motion.</dd>
                        </div>
                        <div>
                            <dt><UnderlinedLink to="/projects/budgetty" print="richardfxr.com/projects/budgetty">Budgetty</UnderlinedLink></dt>
                            <dd>A circular monochrome interface for a standalone digital wallet. Concepts created with Illustrator and After Effects.</dd>
                        </div>
                    </dl>

                    <ul className='row md printHidden'>
                        <li><Button to="/projects" styling="sm">More projects</Button></li>
                        <li><Button to='/projects/archive' styling="sm">Archive</Button></li>
                    </ul>
                </Section>

                <Section sections={sections} index={4} skipLinkHidden>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt>Programs</dt>
                            <dd>Illustrator, Premiere Pro, After Effects, Lightroom Classic, Photoshop, Audition, InDesign, DaVinci Resolve, Figma, SolidWorks, HSMWroks, Blender</dd>
                        </div>
                        <div>
                            <dt>Software development</dt>
                            <dd>HTML, CSS, JavaScript, git, Tailwind CSS, Sass, Node.js, React, Next.js, Framer Motion, SvelteKit, Svelte, Vite, Vue.js, WebGL, Three.js, Python, Java</dd>
                        </div>
                        <div>
                            <dt>Others</dt>
                            <dd>Illustration, photography, videography, graphic design, product design, CAD, CAM, metalworking, CNC milling</dd>
                        </div>
                    </dl>
                </Section>
            </Layout>
        </>
    )
}