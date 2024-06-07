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



// === SECTIONS ===========================
const sections = [
    {heading: "Info", id: "info"},
    {heading: "Experience", id: "experience"},
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

            <Layout heading="Résumé" id="resume" printHidden>
                <Section sections={sections} index={0} skipLinkHidden printHidden>
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
                            <dt>Email</dt>
                            <dd><UnderlinedLink href="mailto:theguy@richardfxr.com?subject=A%20Witty%20Title" target="_blank" styling="block">theguy@richardfxr.com</UnderlinedLink></dd>
                        </div>
                        <div>
                            <dt>Website</dt>
                            <dd><UnderlinedLink to="/" styling="block">richardfxr.com</UnderlinedLink></dd>
                        </div>
                    </dl>

                    <p className='md first'>This is the web version of my résumé, last updated on <em>June 7, 2024</em>. Please use the PDF version below for downloads and prints.</p>
                    <Button href="/RichardFu-resume.pdf" target="_blank" styling="sm">PDF version</Button>
                </Section>

                <header id="printHeader" className="screenHidden">
                    <Logo />
                    <div className="name">
                        <h1>Richard (Xiangrui) Fu</h1>
                        <p>UI/UX designer & front-end developer</p>
                    </div>
                    <div className="contactInfo">
                        <p><a href="https://www.richardfxr.com/" target="_blank">richardfxr.com</a></p>
                        <p><a href="mailto:theguy@richardfxr.com?subject=A%20Witty%20Title" target="_blank">theguy@richardfxr.com</a></p>
                    </div>
                </header>

                <Section sections={sections} index={1} skipLinkHidden>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt><UnderlinedLink href="https://testing.raidpools.gg/" target="_blank" print="testing.raidpools.gg">Founding Designer & Front-end Developer @ RaidPools</UnderlinedLink></dt>
                            <dd className="ddList">
                                <p>09/2023 to present</p>
                                <ul className="bulletPoints">
                                    <li>Conducted user interviews and created the founding design strategy.</li>
                                    <li>Created a unique and cohesive brand identity.</li>
                                    <li>Designed and developed an accessible web front-end.</li>
                                    <li>Collaborated closely with back-end engineer to implement core functionalities.</li>
                                    <li>Implemented sprint-based iteration process based on user testing.</li>
                                </ul>
                            </dd>
                        </div>
                        <div>
                            <dt>UX Designer & Front-end Developer Intern @ Fidelity</dt>
                            <dd className="ddList">
                                <p>06/2023 to 08/2023</p>
                                <ul className="bulletPoints">
                                    <li>Conducted market research and user interviews to determine an effective project direction.</li>
                                    <li>Designed and built a production-ready data-driven web app with data visualization.</li>
                                    <li>Collaborated with other developers and stakeholders to deliver a product that improved employee education.</li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </Section>

                <Section sections={sections} index={2} skipLinkHidden>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt>Rhode Island School of Design (RISD)</dt>
                            <dd>
                                <span>2020 to 2024</span>
                                <span>Bachelor of Fine Arts, Industrial Design.</span>
                                <span>3.956 GPA. 6x Honors Designation.</span>
                            </dd>
                        </div>
                        <div>
                            <dt>Boston University Academy (BUA)</dt>
                            <dd>
                                <span>2016 to 2020</span>
                                <span>Graduated summa cum laude.</span>
                            </dd>
                        </div>
                    </dl>
                </Section>

                <Section sections={sections} index={3} skipLinkHidden>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt><UnderlinedLink href="https://www.fixel.io/canvas/1" target="_blank" print="fixel.io/canvas/1">Fixel</UnderlinedLink></dt>
                            <dd>
                                <ul className="bulletPoints">
                                    <li>Implemented real-time interactions and database.</li>
                                    <li>Developed touch and trackpad gesture detection for interactions.</li>
                                    <li>Created novel ways to style unusual UI components.</li>
                                </ul>
                            </dd>
                        </div>
                        <div>
                            <dt><UnderlinedLink href="https://www.mini-synth.app/" target="_blank" print="mini-synth.app">Mini Synth</UnderlinedLink></dt>
                            <dd>
                                <ul className="bulletPoints">
                                    <li>Worked with NGOs and refugees to identify digital education shortcomings.</li>
                                    <li>Collaborated with refugees to design a solution that satisfies their unique needs.</li>
                                    <li>Designed and developed a web-based synthesizer that teaches music theory.</li>
                                    <li>Resulted in the creation of 184 songs and 1 teaching session in the first week of deployment.</li>
                                </ul>
                            </dd>
                        </div>
                    </dl>

                    <ul className='row md printHidden'>
                        <li><Button to="/projects" styling="sm">More projects</Button></li>
                        <li><Button href="https://github.com/richardfxr" target="_blank" styling="sm">GitHub</Button></li>
                    </ul>
                </Section>

                <Section sections={sections} index={4} skipLinkHidden>
                    <dl className="oneCol dlList detailed">
                        <div>
                            <dt>Programs</dt>
                            <dd>
                                <ul>
                                    <li>Figma</li>
                                    <li>Illustrator</li>
                                    <li>Premiere Pro</li>
                                    <li>After Effects</li>
                                    <li>Lightroom Classic</li>
                                    <li>Photoshop</li>
                                    <li>Audition</li>
                                    <li>InDesign</li>
                                    <li>DaVinci Resolve</li>
                                    <li>SolidWorks</li>
                                    <li>HSMWroks</li>
                                    <li>Blender</li>
                                    <li>Unity</li>
                                    <li>Substance 3D Painter</li>
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
                                    <li>D3</li>
                                    <li>WebGL</li>
                                    <li>Three.js</li>
                                    <li>GLSL</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>C#</li>
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
                                    <li>web development</li>
                                    <li>accessibility</li>
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