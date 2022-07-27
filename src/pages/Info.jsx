// === IMPORTS ============================
// Sass
import './Info.scss'
// components
import PageTemplate from "../components/PageTemplate"
import Section from "../components/Section"
import VersionBadge from '../components/VersionBadge'
import ScrollContainer from '../components/ScrollContainer'
import UnderlinedLink from '../components/UnderlinedLink'

export default function Info() {
    return (
        <PageTemplate heading="Info" id="info">
            <Section heading="Version 10" id="version10" first>
                <ScrollContainer horizontal>
                   <VersionBadge /> 
                </ScrollContainer>

                <p className='lg'>This is version 10 of my portfolio website. It is a single-page application built with <UnderlinedLink href="https://reactjs.org/" target="_blank" styling="em">React</UnderlinedLink>, bundled using <UnderlinedLink href="https://vitejs.dev/" target="_blank" styling="em">Vite</UnderlinedLink>, and animated with <UnderlinedLink href="https://www.framer.com/motion/" target="_blank" styling="em">Framer Motion</UnderlinedLink>. You can view the <UnderlinedLink href="https://github.com/richardfxr/richardfxr" target="_blank" styling="em">open source code on GitHub</UnderlinedLink>.</p>
            </Section>

            <Section heading="accessibility" id="a11y">
                <p className='lg first'>The primary goal of version 10 is to be as <em>accessible</em> as possible. From the titled SVG illustrations to the <UnderlinedLink href="#" styling="em">accessibility settings</UnderlinedLink> below, this website was designed to fit the needs of as many people as possible. The site respects user settings such as font size and motion preference while allowing them to be overwritten if needed.</p>
            </Section>
        </PageTemplate>
    )
}