// === IMPORTS ============================
// Next
import Head from 'next/head'
// components
import { projects } from '../../components/AppWrapper'
import Layout from "../../components/Layout"
import ProjectInfo from "../../components/ProjectInfo"
import Button from "../../components/Button"
import Section from "../../components/Section"
import Img from "../../components/Img"
import UnderlinedLink from '../../components/UnderlinedLink'
// images
import MiniSynthBackground1 from '../../public/images/MiniSynth/MiniSynth-background-1.jpg'
import MiniSynthDesign1 from '../../public/images/MiniSynth/MiniSynth-design-1.jpg'
import MiniSynthDesign2 from '../../public/images/MiniSynth/MiniSynth-design-2.jpg'
import MiniSynthDesign3 from '../../public/images/MiniSynth/MiniSynth-design-3.jpg'
import MiniSynthDesign4 from '../../public/images/MiniSynth/MiniSynth-design-4.jpg'
import MiniSynthDesign5 from '../../public/images/MiniSynth/MiniSynth-design-5.jpg'
import MiniSynthA11y1 from '../../public/images/MiniSynth/MiniSynth-a11y-1.jpg'
import MiniSynthA11y2 from '../../public/images/MiniSynth/MiniSynth-a11y-2.jpg'
import MiniSynthA11y3 from '../../public/images/MiniSynth/MiniSynth-a11y-3.jpg'
import MiniSynthA11y4 from '../../public/images/MiniSynth/MiniSynth-a11y-4.jpg'
import MiniSynthA11y5 from '../../public/images/MiniSynth/MiniSynth-a11y-5.jpg'
import MiniSynthImpact1 from '../../public/images/MiniSynth/MiniSynth-impact-1.jpg'
import MiniSynthImpact2 from '../../public/images/MiniSynth/MiniSynth-impact-2.jpg'
import MiniSynthImpact3 from '../../public/images/MiniSynth/MiniSynth-impact-3.jpg'
import MiniSynthStatus1 from '../../public/images/MiniSynth/MiniSynth-status-1.jpg'
// SVGs
import SkipToStartIcon from '../../public/SVGs/MiniSynth/skipToStartIcon.svg'
import PrevSubdivIcon from '../../public/SVGs/MiniSynth/prevSubdiv.svg'
import PlayIcon from '../../public/SVGs/MiniSynth/playIcon.svg'
import PauseIcon from '../../public/SVGs/MiniSynth/pauseIcon.svg'
import NextSubdivIcon from '../../public/SVGs/MiniSynth/nextSubdivIcon.svg'
import SkipToEndIcon from '../../public/SVGs/MiniSynth/skipToEndIcon.svg'
import MinusIcon from '../../public/SVGs/MiniSynth/minusIcon.svg'
import PlusIcon from '../../public/SVGs/MiniSynth/plusIcon.svg'
import TrashCanICon from '../../public/SVGs/MiniSynth/trashCanIcon.svg'
import ClearSubdivIcon from '../../public/SVGs/MiniSynth/clearSubdivIcon.svg'
import InsertSubdivIcon from '../../public/SVGs/MiniSynth/insertSubdivIcon.svg'
import AutoSkipIcon from '../../public/SVGs/MiniSynth/autoSkipIcon.svg'
import MenuIcon from '../../public/SVGs/MiniSynth/menuIcon.svg'
import InfoIcon from '../../public/SVGs/MiniSynth/infoIcon.svg'
import EnterFullscreenIcon from '../../public/SVGs/MiniSynth/enterFullscreenIcon.svg'
import ExitFullscreenIcon from '../../public/SVGs/MiniSynth/exitFullscreenIcon.svg'
import SunIcon from '../../public/SVGs/MiniSynth/sunIcon.svg'
import MoonIcon from '../../public/SVGs/MiniSynth/moonIcon.svg'
import DuplicateIcon from '../../public/SVGs/MiniSynth/duplicateIcon.svg'
import DownloadIcon from '../../public/SVGs/MiniSynth/downloadIcon.svg'
import SearchIcon from '../../public/SVGs/MiniSynth/searchIcon.svg'
import CancelIcon from '../../public/SVGs/MiniSynth/cancelIcon.svg'
import PianoIcon from '../../public/SVGs/MiniSynth/pianoIcon.svg'
import BeatsIcon from '../../public/SVGs/MiniSynth/beatsIcon.svg'
import HighHatIcon from '../../public/SVGs/MiniSynth/highHatIcon.svg'
import KickDrumIcon from '../../public/SVGs/MiniSynth/kickDrumIcon.svg'
import SnareDrumIcon from '../../public/SVGs/MiniSynth/snareDrumIcon.svg'
import TomDrum1Icon from '../../public/SVGs/MiniSynth/tomDrum1Icon.svg'
import TomDrum2Icon from '../../public/SVGs/MiniSynth/tomDrum2Icon.svg'
import TomDrum3Icon from '../../public/SVGs/MiniSynth/tomDrum3Icon.svg'
import TapeArrows from '../../public/SVGs/MiniSynth/tapeArrows.svg'

// === SECTIONS ===========================
const sections = [
    {heading: "Background", id: "background"},
    {heading: "Challenge", id: "challenge"},
    {heading: "Design", id: "design"},
    {heading: "Accessibility", id: "a11y"},
    {heading: "Impact", id: "impact"},
    {heading: "Code", id: "code"},
    {heading: "Credits", id: "credits"},
]

export default function MiniSynth() {
    // project title
    const title = "Mini Synth"
    const headTitle =`${title} | Richard Fu`
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <>
            <Head>
            <title>{headTitle}</title>
                <meta
                    name="description"
                    content="A simple web-based synthesizer that allows Ugandan refugees to create music digitally."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/MiniSynth/MiniSynth-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading={title} id="minisynth">
                <ProjectInfo project={project}>
                    <p>Mini Synth is a simple web-based synthesizer that empowers Ugandan refugees to create music digitally. The app is part of a larger project that includes educational material and activities.</p>
                    <Button styling="sm" href="https://www.mini-synth.app/" target="_blank">Launch Mini Synth</Button>
                </ProjectInfo>

                <Section sections={sections} index={0}>
                    <p className='md bottom-4xl'><UnderlinedLink styling="em" href="https://community.needslist.co/ysat" target="_blank">Youth Social Advocacy Team (YSAT)</UnderlinedLink>, a Ugandan NGO, needed an educational activity that could <em>improve refugee computer literacy</em> using Galaxy S21 phones provided by Samsung.</p>

                    <Img
                        img={MiniSynthBackground1}
                        alt="Ugandan refugee country-of-origin data visualized as paths on a three-dimensional globe. Top countries include South Sudan, the Democratic Republic of the Congo, and Somalia."
                    />

                    <p className='md top-4xl'>I <UnderlinedLink styling="em" href="https://misc.richardfxr.com/uganglobe" target="_blank">visualized the refugees&apos; countries of origin</UnderlinedLink> as part of our research process. They speak a variety of languages and come from very different cultural backgrounds.</p>
                </Section>

                <Section sections={sections} index={1}>
                    <p className='md'>The refugees would <em>drum and sing</em> in their free time, yet lacked access to resources that would help them compose music.</p>

                    <p className='md'>How might we create an engaging activity that <em>empowers refugees with the knowledge and tools to create music digitally?</em></p>
                </Section>

                <Section sections={sections} index={2}>
                    <div className='twoCol'>
                        <Img
                            img={MiniSynthDesign1}
                            alt="Mini Synth home page displaying a list of user-created songs. Each song is visualized as the tape seen through the bottom of a cassette tape."
                        />
                        <Img
                            img={MiniSynthDesign2}
                            alt="Mini Synth synthesizer and soundboard. The player on top resembles a cassette tape. The soundboard below has options for a high hat, kick drum, snare drum, and three tom drums."
                        />
                    </div>

                    <Img
                        img={MiniSynthDesign3}
                        alt="Mini Synth synthesizer and piano keyboard displayed horizontally. The keyboard spans the bottom half of the display and is styled to resemble a real keyboard."
                    />

                    <p className='md top-4xl bottom-4xl'>The <UnderlinedLink styling="em" href="https://www.mini-synth.app/" target="_blank">Mini Synth web app</UnderlinedLink> is a <em>digital synthesizer</em> that runs in any browser. The interface is compact yet organized. The keys and drums are <em>color-coded</em>, drawing a visual connection between the inputs and the track above.</p>

                    <Img
                        img={MiniSynthDesign4}
                        alt="Close-up of the Mini Synth keyboard. The shadows and highlights make the keyboard appear three-dimensional despite being on a flat display."
                    />

                    <Img
                        img={MiniSynthDesign5}
                        alt="Close-up of the Mini Synth player. The sprockets and tape window resemble a cassette tape, with the thickness of the tape spools corresponding to the progress of the song."
                    />

                    <p className='md top-4xl bottom-4xl'>From keyboards to cassette tapes, the interface is rich with <em>visual metaphors</em>. This makes the app <em>more approachable</em> as it resembles physical objects the refugees recognize.</p>

                    <ul id="icons" aria-label='icons'>
                        <li><SkipToStartIcon /></li>
                        <li><PrevSubdivIcon /></li>
                        <li><PlayIcon /></li>
                        <li><PauseIcon /></li>
                        <li><NextSubdivIcon /></li>
                        <li><SkipToEndIcon /></li>
                        <li><MinusIcon /></li>
                        <li><PlusIcon /></li>
                        <li><TrashCanICon /></li>
                        <li><ClearSubdivIcon /></li>
                        <li><InsertSubdivIcon /></li>
                        <li><AutoSkipIcon /></li>
                        <li><MenuIcon /></li>
                        <li><InfoIcon /></li>
                        <li><EnterFullscreenIcon /></li>
                        <li><ExitFullscreenIcon /></li>
                        <li><SunIcon /></li>
                        <li><MoonIcon /></li>
                        <li><DuplicateIcon /></li>
                        <li><DownloadIcon /></li>
                        <li><SearchIcon /></li>
                        <li><CancelIcon /></li>
                        <li><PianoIcon /></li>
                        <li><BeatsIcon /></li>
                        <li><HighHatIcon /></li>
                        <li><KickDrumIcon /></li>
                        <li><SnareDrumIcon /></li>
                        <li><TomDrum1Icon /></li>
                        <li><TomDrum2Icon /></li>
                        <li><TomDrum3Icon /></li>
                        <li><TapeArrows /></li>
                    </ul>

                    <p className='md top-4xl'>I designed a set of icons for Mini Synth to <em>avoid alienating refugees</em> who speak different languages. Through <em>course activities</em> and general usage, refugees would become familiar with the meaning of these icons.</p>
                </Section>

                <Section sections={sections} index={3}>
                    <div className='twoCol'>
                        <Img
                            img={MiniSynthA11y1}
                            alt="An “install app” prompt on a Galaxy S21 Ultra running Chrome."
                        />
                        <Img
                            img={MiniSynthA11y2}
                            alt="The Mini Synth app icon on the home screen of a Galaxy S21 Ultra. The icon looks like a color cassette tape."
                        />
                    </div>

                    <p className='md top-4xl bottom-4xl'>The refugees had <em>inconsistent internet access</em>, which is why Mini Synth was developed as a <UnderlinedLink styling="em" href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app" target="_blank">Progressive Web App</UnderlinedLink> that functioned offline. All songs are stored <em>locally</em> on the phone.</p>

                    <div className='twoCol'>
                        <Img
                            img={MiniSynthA11y3}
                            alt="Mini Synth running on an iPhone 14 Pro in light mode."
                        />
                        <Img
                            img={MiniSynthA11y4}
                            alt="Mini Synth running on an iPhone 14 Pro in dark mode."
                        />
                    </div>

                    <Img
                        img={MiniSynthA11y5}
                        alt="Mini Synth running on a Surface Laptop Studio in dark mode. The tape and keyboard expand to better utilize the additional screen."
                    />

                    <p className='md top-4xl'>While designed specifically for a Galaxy S21, Mini Synth is still <em>responsive</em>. The web app works on all devices and has <em>keyboard shortcuts</em>, <em>reduced motion mode</em>, and <em>assistive technology support</em>.</p>
                </Section>

                <Section sections={sections} index={4}>
                    <Img
                        img={MiniSynthImpact1}
                        alt="Five Ugandan refugees playing with Mini Synth around a table. Slides with teaching materials can be on the laptop in the middle of the table."
                    />

                    <p className='md top-4xl bottom-4xl'>The web app and related teaching material were <em>well-received</em> during our first group session. Refugees were excited about the app and <em>enjoyed sharing their creations</em> with the group.</p>

                    <Img
                        img={MiniSynthImpact2}
                        alt="Someone interacting with Mini Synth during the RISD Industrial Design exhibition."
                    />

                    <p className='md top-4xl bottom-xxl'>This project was <em>exhibited</em> at RISD&apos;s Industrial Design department where students and faculty could try out the demo. Over <em>a week</em>, the web app had:</p>

                    <ul id='stats' aria-label='Web app usage statistics'>
                        <li>
                            <span className='number'>122</span>
                            <span className='label'>Total visitors</span>
                        </li>
                        <li>
                            <span className='number'>1,291</span>
                            <span className='label'>Total page views</span>
                        </li>
                        <li>
                            <span className='number'>184</span>
                            <span className='label'>Songs created</span>
                        </li>
                    </ul>

                    <Img
                        img={MiniSynthImpact3}
                        alt="Screenshot of the RISD article titled “RISD Students Create Design-Learning Activities for Refugee Youth.” The page is filled with a large image showing two students interacting with Mini Synth."
                    />

                    <p className='md top-4xl'>Mini Synth was later featured in a <UnderlinedLink styling="em" href="https://www.risd.edu/news/stories/risd-students-create-design-learning-activities-for-refugee-youth" target="_blank">RISD article about the Humanitarian Innovations course</UnderlinedLink> that this project was a part of.</p>

                    <p className='md'>Reflecting on the project, Patrick Lumumba, our YSAT instructor, commented: “<em>You guys never make assumptions. You always ask questions. I like this collaboration, this togetherness</em>.”</p>
                </Section>

                <Section sections={sections} index={5}>
                    <Img
                        img={MiniSynthStatus1}
                        alt="Mini Synth running on an iPad Pro with an attached keyboard."
                    />

                    <p className='md top-4xl bottom-xxl'>Mini Synth is an <UnderlinedLink styling="em" href="https://github.com/richardfxr/mini-synth" target="_blank">open-source project available on GitHub</UnderlinedLink>. Version 1 was released in <em>August of 2023</em> and all major development on the project has concluded. The code will be <em>maintained</em> for the foreseeable future to ensure full functionality.</p>

                    <p className='md'>If you are interested in <em>contributing to</em> or <em>continuing</em> this project, feel free to <UnderlinedLink styling="em" to="/about#contact">contact me</UnderlinedLink>.</p>

                    <ul className='row md printHidden'>
                        <li><Button styling="sm" href="https://www.mini-synth.app/" target="_blank">Launch Mini Synth</Button></li>
                        <li><Button styling="sm" href='https://github.com/richardfxr/mini-synth' target="_blank">GitHub repo</Button></li>
                    </ul>
                </Section>

                <Section sections={sections} index={6}>
                    <p className='md bottom-xxl'>Thank you to my teammates – <UnderlinedLink styling="em" href="https://www.fanashley.com/" target="_blank">Ashley Fan</UnderlinedLink> and <UnderlinedLink styling="em" href="https://www.seansworkroom.com/" target="_blank">Sean Lee</UnderlinedLink> – for their incredible contributions to the research, design, and execution of this project.</p>

                    <p className='md bottom-xxl'>Thank you to our instructors - <UnderlinedLink styling="em" href="https://www.risd.edu/academics/industrial-design/faculty/sally-beiruti" target="_blank">Sally Beiruti</UnderlinedLink>, <UnderlinedLink styling="em" href="https://heewon.mit.edu/home" target="_blank">Heewon Lee</UnderlinedLink>, and <em>Adroa Patrick Lumumba</em> – for their help and guidance throughout the project.</p>

                    <p className='md'>This project would not have been possible without support from the following <em>sponsors</em>:</p>

                    <ul className='list withSeparators sm' aria-label='Sponsors'>
                        <li><UnderlinedLink styling="em md block" href="https://www.samsung.com/us/" target="_blank">Samsung</UnderlinedLink></li>
                        <li><UnderlinedLink styling="em md block" href="https://www.internationaldisabilityalliance.org/stakeholder/korea-international-cooperation-agency-koica" target="_blank">Korea International Cooperation Agency (KOIKA)</UnderlinedLink></li>
                        <li><UnderlinedLink styling="em md block" href="https://community.needslist.co/ysat" target="_blank">Youth Social Advocacy Team (YSAT)</UnderlinedLink></li>
                        <li><UnderlinedLink styling="em md block" href="https://www.risd.edu/" target="_blank">Rhode Island School of Design (RISD)</UnderlinedLink></li>
                        <li><UnderlinedLink styling="em md block" href="https://d-lab.mit.edu/" target="_blank">MIT D-Lab</UnderlinedLink></li>
                    </ul>
                </Section>
            </Layout>
        </>
    )
}