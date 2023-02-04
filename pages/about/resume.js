// === IMPORTS ============================
// Next
import Head from 'next/head'
// components
import Layout from "../../components/Layout"
import Section from "../../components/Section"
import UnderlinedLink from '../../components/UnderlinedLink'
import Button from '../../components/Button'



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

            <Layout heading="Résumé" id="resume">
                <Section sections={sections} index={0} skipLinkHidden>
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

                    <p className='md first'>This is the web version of my résumé, last updated on <em>February 4, 2023</em>. Please use the PDF version below for downloading and printing.</p>
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
                                <span>Bachelor of Fine Arts, Industrial Design.</span>
                                <span>3.944 GPA. 5x Honors Designation.</span>
                            </dd>
                        </div>
                        <div>
                            <dt>Boston University Academy (BUA)</dt>
                            <dd>
                                <span>2016-2020</span>
                                <span>Graduated summa cum laude.</span>
                            </dd>
                        </div>
                    </dl>
                </Section>

                <Section sections={sections} index={3} skipLinkHidden>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt><UnderlinedLink href="https://www.machinists-edge.com/" target="_blank" print="machinists-edge.com">Machinist&#39;s Edge</UnderlinedLink></dt>
                            <dd>
                                <p>A set of calculators and searchable tables designed for the RISD ID Metal Shop.</p>
                                <p>Improved CNC milling machine’s operator experience and efficiency; removed operator-related calculation errors.</p>
                                <p>Features developed based on a primary round of user interviews and continual user testing.</p>
                                <p>A responsive and accessible front-end web app built with SvelteKit in TypeScript.</p>
                            </dd>
                        </div>
                        <div>
                            <dt><UnderlinedLink href="https://weatherdial.richardfxr.com/" target="_blank" print="weatherdial.richardfxr.com">Weather Dial</UnderlinedLink></dt>
                            <dd>
                                <p>A weather app focused on intuitive data visualization and animation.</p>
                                <p>A responsive and accessible web app built with SvelteKit and high-performance native CSS animations.</p>
                            </dd>
                        </div>
                        <div>
                            <dt><UnderlinedLink to="/info">richardfxr.com</UnderlinedLink></dt>
                            <dd>
                                <p>An accessibility-focused redesign of my portfolio site.</p>
                                <p>Features high contrast mode, low motion, and large touch area in addition to Web Content Accessibility Guidelines (WCAG) 2.0 level AAA compliance.</p>
                                <p>Website built with React, Next.js, and Framer Motion.</p>
                            </dd>
                        </div>
                        <div>
                            <dt>Comin</dt>
                            <dd>
                                <p>Brand and app redesign that improved brand identity and user experience.</p>
                                <p>Gamified “post collecting” to drive up user engagement and encourage new posts.</p>
                                <p>High-fidelity mockups created using Figma, Illustrator, and After Effects.</p>
                            </dd>
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
                            <dd>
                                <ul>
                                    <li>Illustrator</li>
                                    <li>Premiere Pro</li>
                                    <li>After Effects</li>
                                    <li>Lightroom Classic</li>
                                    <li>Photoshop</li>
                                    <li>Audition</li>
                                    <li>InDesign</li>
                                    <li>DaVinci Resolve</li>
                                    <li>Figma</li>
                                    <li>SolidWorks</li>
                                    <li>HSMWroks</li>
                                    <li>Blender</li>
                                </ul>
                            </dd>
                        </div>
                        <div>
                            <dt>Software development</dt>
                            <dd>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                    <li>git</li>
                                    <li>Tailwind CSS</li>
                                    <li>Sass</li>
                                    <li>Node.js</li>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Framer Motion</li>
                                    <li>SvelteKit</li>
                                    <li>Svelte</li>
                                    <li>Vite</li>
                                    <li>Vue.js</li>
                                    <li>WebGL</li>
                                    <li>Three.js</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                </ul>
                            </dd>
                        </div>
                        <div>
                            <dt>Others</dt>
                            <dd>
                                <ul>
                                    <li>UI/UX design</li>
                                    <li>graphic design</li>
                                    <li>product design</li>
                                    <li>Illustration</li>
                                    <li>photography</li>
                                    <li>videography</li>
                                    <li>CAD</li>
                                    <li>CAM</li>
                                    <li>metalworking</li>
                                    <li>CNC milling</li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </Section>
            </Layout>
        </>
    )
}