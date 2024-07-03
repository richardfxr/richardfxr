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
import UnderlinedLink from '../../components/UnderlinedLink'
// hooks
import { useIsMotionOK } from "../../hooks/useMediaQuery"
// images
import RaidPoolsResearch1 from '../../public/images/RaidPools/RaidPools-research-1.jpg'
import RaidPoolsBranding1 from '../../public/images/RaidPools/RaidPools-branding-1.jpg'
import RaidPoolsBranding2 from '../../public/images/RaidPools/RaidPools-branding-2.jpg'
import RaidPoolsBranding3 from '../../public/images/RaidPools/RaidPools-branding-3.jpg'
import RaidPoolsDesign1 from '../../public/images/RaidPools/RaidPools-design-1.jpg'
import RaidPoolsDesign2 from '../../public/images/RaidPools/RaidPools-design-2.jpg'
import RaidPoolsDesign3 from '../../public/images/RaidPools/RaidPools-design-3.jpg'
import RaidPoolsDesign4 from '../../public/images/RaidPools/RaidPools-design-4.jpg'
import RaidPoolsDesign5 from '../../public/images/RaidPools/RaidPools-design-5.jpg'
import RaidPoolsA11y1 from '../../public/images/RaidPools/RaidPools-a11y-1.jpg'
import RaidPoolsA11y2 from '../../public/images/RaidPools/RaidPools-a11y-2.jpg'
import RaidPoolsA11y3 from '../../public/images/RaidPools/RaidPools-a11y-3.jpg'
import RaidPoolsA11y4 from '../../public/images/RaidPools/RaidPools-a11y-4.jpg'
import RaidPoolsDevEx1 from '../../public/images/RaidPools/RaidPools-devex-1.jpg'
import RaidPoolsDevEx2 from '../../public/images/RaidPools/RaidPools-devex-2.jpg'
import RaidPoolsDevEx3 from '../../public/images/RaidPools/RaidPools-devex-3.jpg'
import RaidPoolsDevEx4 from '../../public/images/RaidPools/RaidPools-devex-4.jpg'
import RaidPoolsProgress1 from '../../public/images/RaidPools/RaidPools-progress-1.jpg'
// SVGs
import Stop from '../../public/SVGs/stop.svg'
import Play from '../../public/SVGs/play.svg'

// === SECTIONS ===========================
const sections = [
    {heading: "Research", id: "research"},
    {heading: "Strategy", id: "strategy"},
    {heading: "Branding", id: "branding"},
    {heading: "Design", id: "design"},
    {heading: "Accessibility", id: "a11y"},
    {heading: "Dev Ex", id: "devex"},
    {heading: "Progress", id: "progress"},
]

export default function Raidpools() {
    // project title
    const title = "RaidPools"
    const headTitle =`${title} | Richard Fu`
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    // states
    const isMotionOK = useIsMotionOK()
    const [logoAni, setLogoAni] = useState(true)
    const [logoAniInterval, setLogoAniInterval] = useState(null)
    const [logoFadeTimeout, setLogoFadeTimeout] = useState(null)

    // refs
    const logo = useRef(null)

    useEffect(() => {
        isMotionOK ? setLogoAni(true) : setLogoAni(false)
    }, [isMotionOK])

    useEffect(() => {
        if (!logo.current) return

        console.log("useEffect")

        // constants
        const playDuration = 2350
        const fadeDuration = 800
        const logoElem = logo.current

        function playLogoAni() {
            logoElem.setAttribute("data-animate", "play")
            console.log("playLogoAni");
            // fade after animation finishes
            setLogoFadeTimeout(
                setTimeout(() => 
                    logoElem.setAttribute("data-animate", "fade"), 
                    playDuration
                )
            )
        }

        function stopLogoAni() {
            console.log("stopLogoAni");
            clearInterval(logoAniInterval)
            setLogoAniInterval(null)
            clearTimeout(logoFadeTimeout)
            setLogoFadeTimeout(null)
            logoElem.setAttribute("data-animate", "stop")
        }

        if (logoAni && !logoAniInterval) {
            playLogoAni()
            setLogoAniInterval(
                setInterval(
                    playLogoAni,
                    playDuration + fadeDuration
                )
            )
        } else {
            console.log("else");
            stopLogoAni()
        }

        // cleanup on unmount
        return () => stopLogoAni()
    }, [logoAni])

    return (
        <>
            <Head>
            <title>{headTitle}</title>
                <meta
                    name="description"
                    content="Branding and web app for a SaaS startup that helps small streamers grow."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/RaidPools/RaidPools-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading={title} id="raidpools">
                <ProjectInfo project={project}>
                    <p>RaidPools is a software as a service &#40;SaaS&#41; startup that aids small Twitch streamers as they grow using its recommendation algorithm. As the founding designer, I created its branding and web app.</p>
                    <Button styling="sm" href="https://testing.raidpools.gg/" target="_blank">Try RaidPools</Button>
                </ProjectInfo>

                <Section sections={sections} index={0}>
                    <p className='md bottom-4xl'><UnderlinedLink styling="em" href="https://www.twitch.tv/" target="_blank">Twitch</UnderlinedLink> is a video game live-streaming platform that dominates the industry. While it boasts <em>35 million</em> average daily viewers, <UnderlinedLink styling="em" href="https://sullygnome.com/channels/30/metadata" target="_blank">more than 90% of steamers have fewer than 6 viewers</UnderlinedLink>.</p>

                    <Img
                        img={RaidPoolsResearch1}
                        alt="Data from six user interviews mapped onto an affinity diagram."
                    />

                    <p className='md top-4xl'>Interviews revealed that growth is difficult for small streamers as <em>viewers cannot discover them organically</em>.</p>

                    <p className='md'>Streamers seek <em>reliable ways</em> to discover other streamers in the <em>same community</em>, exposing them to <em>new viewers</em> who like similar content.</p>
                </Section>

                <Section sections={sections} index={1}>
                    <p className='md bottom-4xl'>RaidPools aims to provide <em>clear and reliable recommendations</em> that pool like-minded streamers together, <em>fostering growth</em> for both individual streamers and the larger community.</p>

                    <p className='md bottom-xxl'>For such a service to be successful, I outlined the following <em>design principles</em>:</p>

                    <dl id="principlesList" className="twoCol dlList inverse">
                        <div>
                            <dt>
                                Approachable
                            </dt>
                            <dd>Core functionality is presented clearly without jargon.</dd>
                        </div>
                        <div>
                            <dt>
                                Accessible
                            </dt>
                            <dd>Provide the best possible experience for all users.</dd>
                        </div>
                        <div>
                            <dt>
                                Memorable
                            </dt>
                            <dd>Deliver a distinct identity that users will remember.</dd>
                        </div>
                    </dl>
                </Section>

                <Section sections={sections} index={2}>
                    <div>
                        <div id="logoContainer" ref={logo}>
                            <svg
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1016.65 120">
                                <title>
                                    RaidPools logotype with blocky, futuristic lettering. Orange on black.
                                </title>
                                <path className="r" d="M149.06,25V6c0-3.31-2.69-6-6-6H31.49L0,31.49v56.57l25.02-25.02c1.17-1.17,3.07-1.17,4.24,0l56.96,56.96h49.33c2.67,0,4.01-3.23,2.12-5.12l-57.88-57.88h32.3c3.18,0,6.23-1.26,8.49-3.51l28.49-28.49ZM60.49,57h-24.6c-1.78,0-2.67-2.15-1.41-3.41L78.06,10h14.95c5.35,0,8.02,6.46,4.24,10.24l-36.76,36.76Z"/>
                                <path className="a" d="M185.49,0l-71.39,71.39c-2.34,2.34-2.34,6.14,0,8.49l24.04,24.04L228.42,13.64c1.26-1.26,3.41-.37,3.41,1.41v104.95h40V6c0-3.31-2.69-6-6-6h-80.34Z"/>
                                <path className="i" d="M320.84,120h-40V0h34c3.31,0,6,2.69,6,6v114Z"/>
                                <path className="d" d="M376.48,0h-46.65v9.92l89.83,89.83c3.78,3.78,1.1,10.24-4.24,10.24h-14.95l-65.52-65.52c-1.89-1.89-5.12-.55-5.12,2.12v49.33l24.08,24.08h110.79c3.31,0,6-2.69,6-6v-19.78L376.48,0Z"/>
                                <path className="p" d="M480.09,0l-41.85,41.85c-2.34,2.34-2.34,6.14,0,8.49l24.04,24.04,64.37-64.37h14.95c5.35,0,8.02,6.46,4.24,10.24l-26.76,26.76h-18.17l-4.89,4.87c-1.9,1.89-.56,5.13,2.12,5.13h67.51l32-32V6c0-3.31-2.69-6-6-6h-111.57Z"/>
                                <path className="firstO" d="M720.09,0l-110,110h-14.95c-5.35,0-8.02-6.46-4.24-10.24l89.76-89.76h18l4.88-4.88c1.89-1.89.55-5.12-2.12-5.12h-67.33l-95,95v19c0,3.31,2.69,6,6,6h111.57L776.66,0h-56.57Z"/>
                                <path className="secondO" d="M756.23,10h25.37c5.35,0,8.02,6.46,4.24,10.24l-89.76,89.76h-18l-4.88,4.88c-1.89,1.89-.55,5.12,2.12,5.12h67.33l95-95V6c0-3.31-2.69-6-6-6h-75.25l-.18,10Z"/>
                                <path className="l" d="M886.66,120h-40V0h34c3.31,0,6,2.69,6,6v114Z"/>
                                <path className="s" d="M946.14,10h14.95l25.39,25.39,26.16-26.16c1.17-1.17,1.17-3.07,0-4.24l-4.99-4.99h-83.42c-1.59,0-3.12.63-4.24,1.76l-24.45,24.45c-1.17,1.17-1.17,3.07,0,4.24l69.3,69.3c3.78,3.78,1.1,10.24-4.24,10.24h-14.95l-23.79-23.79-26.16,26.16c-1.17,1.17-1.17,3.07,0,4.24l3.38,3.38h111.57c3.31,0,6-2.69,6-6v-19l-74.76-74.76c-3.78-3.78-1.1-10.24,4.24-10.24Z"/>
                            </svg>
                        </div>

                        {logoAni ? 
                            <Button styling="sm" click={() => setLogoAni(false)}>
                                <Stop />
                                Stop
                            </Button>
                            :
                            <Button styling="sm" click={() => setLogoAni(true)}>
                                <Play />
                                Play
                            </Button>
                        }
                    </div>

                    <p className='md top-xxxl bottom-4xl'>The RaidPools brand is <em>bold</em> and <em>brutally geometric</em>. The typography is structured and constrained, exhibiting a <em>mechanical precision</em> that is hard to forget.</p>

                    <div className='twoCol'>
                        <Img
                            img={RaidPoolsBranding1}
                            alt="RaidPools logotype and favicon displayed in a Chrome browser on Windows. The favicon is the letters “R” and “A” from the logotype. Orange on black."
                        />
                        <Img
                            img={RaidPoolsBranding2}
                            alt="RaidPools stream placeholder screen displayed within the Twitch interface on a Nothing Phone 1."
                        />
                    </div>

                    <Img
                        img={RaidPoolsBranding3}
                        alt="RaidPools test stream image. Similar to a TV test pattern but in orange, with the RaidPools logotype at the center."
                    />
                </Section>

                <Section sections={sections} index={3}>
                    <Img
                        img={RaidPoolsDesign1}
                        alt="RaidPools home page displayed on an iPad Air in dark mode. Orange text and graphics on a black background."
                    />

                    <p className='md top-4xl bottom-4xl'><UnderlinedLink styling="em" href="https://testing.raidpools.gg/" target="_blank">The RaidPools web app</UnderlinedLink> draws heavily from <em>cassette futurism</em> designs from games like Fallout 4, Alien: Isolation, and Signalis.</p>

                    <div className='twoCol'>
                        <Img
                            img={RaidPoolsDesign2}
                            alt="RaidPools home page displayed on a Nothing Phone 1 in dark mode. Orange text and graphics on a black background."
                        />
                        <Img
                            img={RaidPoolsDesign3}
                            alt="RaidPools sign-up page displayed on a Nothing Phone 1 in dark mode. Orange text and graphics on a black background."
                        />
                    </div>

                    <Img
                        img={RaidPoolsDesign4}
                        alt="RaidPools dashboard displayed on a Surface Pro 8 in dark mode. Stacked white and orange bar plots on a black background."
                    />

                    <p className='md top-4xl bottom-4xl'>The interface strikes a balance between <em>decoration</em> and <em>visual clarity</em>. The result is a <em>distinct aesthetic</em> that maintains good visual hierarchies.</p>

                    <Img
                        img={RaidPoolsDesign5}
                        alt="RaidPools “calculate raid” page displayed on a Surface Pro 8 in dark mode. A large live stream accompanied by user information and a button labeled “start raid.”"
                    />
                </Section>

                <Section sections={sections} index={4}>
                    <Img
                        img={RaidPoolsA11y1}
                        alt='RaidPools footer with drop-down menus for animation, theme, and contrast. The theme menu is expanded, showing the options “auto,” “light,” and “dark."'
                    />

                    <p className='md top-4xl bottom-4xl'>The interface has <em>animation</em>, <em>theme</em>, and <em>contrast</em> settings that respect the user’s system preferences by default.</p>
                
                    <div className='twoCol'>
                        <Img
                            img={RaidPoolsA11y2}
                            alt="RaidPools home page displayed on a Nothing Phone 1 in light mode. Red text and graphics on a beige background."
                        />
                        <Img
                            img={RaidPoolsA11y3}
                            alt="RaidPools home page displayed on a Nothing Phone 1 in high-contrast light mode. Dark red text and graphics on a white background."
                        />
                    </div>

                    <Img
                        img={RaidPoolsA11y4}
                        alt="RaidPools footer displayed on an iPad Air in high-contrast light mode. Dark red text and graphics on a white background."
                    />

                    <p className='md top-4xl bottom-xxxl'>To provide the best experience for <em>assistive technology users</em>, the web app was initially designed as an <UnderlinedLink styling="em" href="https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree" target="_blank">accessibility tree</UnderlinedLink> before any visuals were created:</p>

                    <div className='codeBlock'>
                        <h3 className='mono'><em>Header</em></h3>
                        <p className='mono indent-1'><em>Graphic</em> “RaidPools logo with futuristic and angular lettering.”</p>
                        <p className='mono indent-1'><em>Unordered list</em> “Authentication.” 2 items</p>
                        <p className='mono indent-2'><em>Link</em> “Log in.” Points to /login</p>
                        <p className='mono indent-2'><em>Link</em> “Sign up.” Points to /signup</p>
                        <br />
                        <h3 className='mono'><em>Main</em></h3>
                        <p className='mono indent-1'><em>Heading 1</em> “The recommendation algorithm for Twitch raids.”</p>
                        <p className='mono indent-1'><em>Link</em> “Sign up for closed alpha.” Points to /signup</p>
                        <p className='mono indent-1'><em>Graphic</em> “Three rolls of tape filled with binaries passing through a scanner as it searches for the optimal choice.”</p>
                        <br />
                        <p className='mono indent-1'><em>Heading 2</em> “Growing your channel, community, and network through intelligent raid recommendations”</p>
                        <p className='mono indent-1'><em>Ordered list</em> “Algorithmic steps.” 4 items</p>
                        <p className='mono indent-2'><em>List item</em></p>
                        <p className='mono indent-3'><em>Heading 3</em> “Observe stream”</p>
                        <p className='mono'>...</p>
                    </div>

                    <p className='md top-xxxl bottom-xxl'>This approach was <em>received positively</em> by assistive technology users:</p>

                    <p className='md em bottom-xxl'>“Props on that because a lot of people don&apos;t think of it that way. No wonder the website looks pretty but doesn&apos;t hinder the screen reader.”</p>

                    <p className='md em'>“Websites these days are not good, I was preparing for the worst. Compared to all the websites out there, this website is perfect.”</p>
                </Section>

                <Section sections={sections} index={5}>
                    <Img
                        img={RaidPoolsDevEx1}
                        alt="RaidPools error page displayed on an iPad Air in dark mode. Shows a 500 status code with source, endpoint, and identification information."
                    />

                    <p className='md top-4xl bottom-4xl'>Indicators and additional information are included in the interface for a <em>better developer experience</em>. The indicators give developers <em>critical information</em> but look like decoration to users.</p>

                    <div className='twoCol'>
                        <Img
                            img={RaidPoolsDevEx2}
                            alt="Four-by-three grid of dots, some filled in and some empty, displayed on the top right corner of every error page."
                        />
                        <Img
                            img={RaidPoolsDevEx3}
                            alt="Three dots formed into a triangle, displayed on the top left corner of every page."
                        />
                    </div>

                    <Img
                        img={RaidPoolsDevEx4}
                        alt='Badge at the bottom right corner of the footer. There is a four-by-three grid of lines along with the text “PRD.”'
                    />
                </Section>

                <Section sections={sections} index={6}>
                    <Img
                        img={RaidPoolsProgress1}
                        alt="RaidPools “awaiting activation” page displayed on a Surface Pro 8 in dark mode. Orange text and graphics on a black background."
                    />

                    <p className='md top-4xl'>RaidPools is undergoing <em>closed alpha testing</em> with a select number of users. If you are interested, sign up using the link below. The service will become generally available once the experience is polished.</p>

                    <Button styling="sm flexChild" href="https://testing.raidpools.gg/" target="_blank">Try RaidPools</Button>
                </Section>
            </Layout>
        </>
    )
}