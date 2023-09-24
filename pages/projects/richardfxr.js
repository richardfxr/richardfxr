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
import Separator from '../../components/Separator'
// images
import RichardfxrEvo1 from '../../public/images/richardfxr/richardfxr-evolution-1.jpg'
import RichardfxrEvo2 from '../../public/images/richardfxr/richardfxr-evolution-2.jpg'
import RichardfxrEvo3 from '../../public/images/richardfxr/richardfxr-evolution-3.jpg'
import RichardfxrEvo4 from '../../public/images/richardfxr/richardfxr-evolution-4.jpg'
import RichardfxrEvo5 from '../../public/images/richardfxr/richardfxr-evolution-5.jpg'
import RichardfxrDesign1 from '../../public/images/richardfxr/richardfxr-design-1.jpg'
import RichardfxrDesign2 from '../../public/images/richardfxr/richardfxr-design-2.jpg'
import RichardfxrDesign3 from '../../public/images/richardfxr/richardfxr-design-3.jpg'
import RichardfxrDesign4 from '../../public/images/richardfxr/richardfxr-design-4.jpg'
import RichardfxrDarkMode1 from '../../public/images/richardfxr/richardfxr-darkMode-1.jpg'
import RichardfxrDarkMode2 from '../../public/images/richardfxr/richardfxr-darkMode-2.jpg'
import RichardfxrDarkMode3 from '../../public/images/richardfxr/richardfxr-darkMode-3.jpg'
import RichardfxrDarkMode4 from '../../public/images/richardfxr/richardfxr-darkMode-4.jpg'
import RichardfxrDarkMode5 from '../../public/images/richardfxr/richardfxr-darkMode-5.jpg'
import RichardfxrA11y1 from '../../public/images/richardfxr/richardfxr-a11y-1.jpg'
import RichardfxrA11y2 from '../../public/images/richardfxr/richardfxr-a11y-2.jpg'
import RichardfxrA11y3 from '../../public/images/richardfxr/richardfxr-a11y-3.jpg'
import RichardfxrA11y4 from '../../public/images/richardfxr/richardfxr-a11y-4.jpg'
import RichardfxrA11y5 from '../../public/images/richardfxr/richardfxr-a11y-5.jpg'
import RichardfxrA11y6 from '../../public/images/richardfxr/richardfxr-a11y-6.jpg'
import RichardfxrA11y7 from '../../public/images/richardfxr/richardfxr-a11y-7.jpg'
import RichardfxrA11y8 from '../../public/images/richardfxr/richardfxr-a11y-8.jpg'



// === SECTIONS ===========================
const sections = [
    {heading: "Evolution", id: "evolution"},
    {heading: "Design", id: "design"},
    {heading: "Dark Mode", id: "dark-mode"},
    {heading: "Accessibility", id: "a11y"},
]

export default function Richardfxr() {
    // project title
    const title = 'Personal site'
    const headTitle =`${title} | Richard Fu`;
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <>
            <Head>
                <title>{headTitle}</title>
                <meta
                    name="description"
                    content="A redesign of my portfolio site focused on accessibility, animation, and maintainability."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/richardfxr/richardfxr-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading={title} id="richardfxr">
                <ProjectInfo project={project}>
                    <p>Two years after the release of <UnderlinedLink styling="em" href="https://v9.richardfxr.com/" target="_blank">richardfxr.com version 9</UnderlinedLink>, it was time for a complete redesign that focused on accessibility, animation, and maintainability while still paying homage to the old design.</p>
                </ProjectInfo>

                <Section sections={sections} index={0}>
                    <Img
                        img={RichardfxrEvo1}
                        alt="Three floating iPhone 14 Pros displaying the home page of richardfxr.com version 10, 9, and 8 respectively."
                    />

                    <p className='md top-4xl bottom-4xl'><em>Familiar yet refined</em> – that was the philosophy behind version 10&#39;s incremental redesign.</p>

                    <div className='twoCol'>
                        <Img
                            img={RichardfxrEvo2}
                            alt="The Selected Works section of version 9’s home page displayed on an iPhone 13 Pro."
                            caption="version 9"
                            captionAlign="center"
                            captionBottom="6.5"
                        />
                        <Img
                            img={RichardfxrEvo3}
                            alt="The Selected Works section of version 10’s home page displayed on an iPhone 13 Pro."
                            caption="version 10"
                            captionAlign="center"
                            captionBottom="6.5"
                        />
                    </div>

                    <Img
                        img={RichardfxrEvo4}
                        alt="Version 9’s about page displayed on a Surface Pro 8."
                        caption="version 9"
                        captionAlign="center"
                        captionBottom="9"
                    />
                    <Img
                        img={RichardfxrEvo5}
                        alt="Version 10’s about page displayed on a Surface Pro 8."
                        caption="version 10"
                        captionAlign="center"
                        captionBottom="9"
                    />
                </Section>

                <Section sections={sections} index={1}>
                    <Img
                        img={RichardfxrDesign1}
                        alt="The info page displayed on an iPad Mini. A large decorative badge that reads v10.2.1 gold can be seen."
                    />

                    <p className='md top-4xl bottom-4xl'>Version 10&#39;s design aims to be <em>clean but decorated</em>. The interface is clear, but not devoid of ornamentation.</p>

                    <div className='twoCol'>
                        <Img
                            img={RichardfxrDesign2}
                            alt="The navigation bar displayed on the bottom of a Pixel 6 Pro. Each page is represented with an icon; a blue indicator is visible above the current page."
                        />
                        <Img
                            img={RichardfxrDesign3}
                            alt="The about page displayed on a Pixel 6 Pro. A PDF417 barcode and a waving kaomoji can be seen above the self-portrait."
                        />
                    </div>

                    <Img
                        img={RichardfxrDesign4}
                        alt="The Socials section of the about page displayed on a Yoga Tab. Each social media icon is surrounded by almost hypnotic lines."
                    />
                </Section>

                <Section sections={sections} index={2}>
                    <Img
                        img={RichardfxrDarkMode1}
                        alt="The home and archive pages displayed on two ROG Flow Z13s in dark mode."
                    />

                    <div className='twoCol'>
                        <Img
                            img={RichardfxrDarkMode2}
                            alt="The settings page displayed on a Galaxy Note 20 Ultra in dark mode."
                        />
                        <Img
                            img={RichardfxrDarkMode3}
                            alt="The info page displayed on a Galaxy Note 20 Ultra in dark mode."
                        />
                    </div>

                    <Img
                        img={RichardfxrDarkMode4}
                        alt="The Budgetty project page displayed on an iPad Pro in dark mode."
                    />

                    <Img
                        img={RichardfxrDarkMode5}
                        alt="The archive page displayed on a Pro Display XDR in dark mode."
                    />
                </Section>

                <Section sections={sections} index={3}>
                    <Img
                        img={RichardfxrA11y1}
                        alt="The accessibility menu on the projects page displayed on an Elitebook Dragonfly. Two buttons, a 'skip to content' button highlighted in orange, and an 'accessibility settings' button, can be seen."
                    />

                    <p className='md top-4xl bottom-4xl'>Version 10 is made <em>more accessible</em> through skip links, high contrast modes, size adjustments, low motion, and more.</p>

                    <div className='twoCol'>
                        <Img
                            img={RichardfxrA11y2}
                            alt="The info page displayed on a Pixel 3 XL with universally larger input buttons."
                            caption="large buttons"
                            captionAlign="center"
                            captionBottom="6.5"
                        />
                        <Img
                            img={RichardfxrA11y3}
                            alt="The archive page displayed on a Pixel 3 XL with a light high-contrast theme."
                            caption="high contrast"
                            captionAlign="center"
                            captionBottom="6.5"
                        />
                    </div>

                    <Img
                        img={RichardfxrA11y4}
                        alt="The info page displayed on a ROG Flow Z13 with a larger font size. In addition to just text, icons have also been enlarged."
                        caption="large text"
                        captionAlign="center"
                        captionBottom="9"
                    />

                    <Img
                        img={RichardfxrA11y5}
                        alt="The home page displayed on an Elitebook Dragonfly with Windows forced colors enabled. All links are now yellow while all other texts are white. The illustrations also respect the new colors."
                        caption="forced colors"
                        captionAlign="center"
                        captionBottom="9"
                    />

                    <div className='twoCol'>
                        <Img
                            img={RichardfxrA11y6}
                            alt="The EggHolders project page displayed on an iPhone 14 Pro with a light high-contrast theme and larger text."
                        />
                        <Img
                            img={RichardfxrA11y7}
                            alt="The settings page displayed on an iPhone 14 Pro with a dark hight-contrast theme and larger buttons."
                        />
                    </div>

                    <Img
                        img={RichardfxrA11y8}
                        alt="The about page displayed on a Surface Pro 8 with forced colors enabled, larger text, and larger buttons."
                    />
                </Section>
            </Layout>
        </>
    )
}