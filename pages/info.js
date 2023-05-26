// === IMPORTS ============================
// Next
import Head from 'next/head'
// components
import Layout from "../components/Layout"
import Section from "../components/Section"
import VersionBadge from '../components/VersionBadge'
import ScrollContainer from '../components/ScrollContainer'
import UnderlinedLink from '../components/UnderlinedLink'
import Button from '../components/Button'



// === SECTIONS ===========================
const sections = [
    {heading: "Version 10", id: "version10"},
    {heading: "Accessibility", id: "a11y"},
    {heading: "Typefaces", id: "typefaces"},
]

export default function Info() {
    
    return (
        <>
            <Head>
                <title>Website Info | Richard Fu</title>
                <meta
                    name="description"
                    content="Version 10.2 of my portfolio website built using Next.js with React, and animated with Framer Motion."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/info-OGimage-v10.2.3gold.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading="Info" id="info">
                <Section sections={sections} index={0} first skipLinkHidden>
                    <ScrollContainer horizontal>
                    <VersionBadge /> 
                    </ScrollContainer>

                    <p className='md'>This is version 10.3 of my portfolio website. It is a <UnderlinedLink href="https://reactjs.org/" target="_blank" styling="em">React</UnderlinedLink> application built on <UnderlinedLink href="https://nextjs.org/" target="_blank" styling="em">Next.js</UnderlinedLink> and animated with <UnderlinedLink href="https://www.framer.com/motion/" target="_blank" styling="em">Framer Motion</UnderlinedLink>. You can view the <UnderlinedLink href="https://github.com/richardfxr/richardfxr" target="_blank" styling="em" print="github.com/richardfxr/richardfxr">open source code on GitHub</UnderlinedLink>.</p>

                    <p className='md'>Miss the old website? You can still <UnderlinedLink href="https://v9.richardfxr.com/" target="_blank" styling="em" print="v9.richardfxr.com">view version 9</UnderlinedLink> at its new subdomain.</p>
                </Section>

                <Section sections={sections} index={1} skipLinkHidden>
                    <p className='md first'>The primary goal of version 10 is to be <em>accessible</em>. From the titled SVG illustrations to the <UnderlinedLink to="/settings" styling="em">accessibility settings</UnderlinedLink>, this website was designed to fit the needs of as many people as possible. The site respects user settings such as font size and motion preference while allowing them to be overwritten if needed.</p>
                        <Button href='https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility' target="_blank" styling="sm">What is accessibility?</Button>
                </Section>

                <Section sections={sections} index={2} skipLinkHidden>
                    <div className='twoCol'>
                        <article id='manrope'>
                            <p className='md'><UnderlinedLink href="https://www.manropefont.com/" target="_blank" styling="em block">Manrope</UnderlinedLink></p>
                            <p className='xl'>{'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]{}&*^%$#@~'}</p>
                        </article>
                        <article id='inter'>
                            <p className='md'><UnderlinedLink href="https://rsms.me/inter/" target="_blank" styling="em block">Inter</UnderlinedLink></p>
                            <p className='xl'>{'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]{}&*^%$#@~'}</p>
                        </article>
                    </div>
                </Section>
            </Layout>
        </>
    )
}