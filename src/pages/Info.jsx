// === IMPORTS ============================
// Sass
import './Info.scss'
// components
import PageTemplate from "../components/PageTemplate"
import Section from "../components/Section"
import VersionBadge from '../components/VersionBadge'
import ScrollContainer from '../components/ScrollContainer'
import UnderlinedLink from '../components/UnderlinedLink'
import Button from '../components/Button'


export default function Info() {
    
    return (
        <PageTemplate heading="Info" id="info">
            <Section heading="Version 10" id="version10" first>
                <ScrollContainer horizontal>
                   <VersionBadge /> 
                </ScrollContainer>

                <p className='lg'>This is version 10 of my portfolio website. It is a single-page application built with <UnderlinedLink href="https://reactjs.org/" target="_blank" styling="em">React</UnderlinedLink>, bundled using <UnderlinedLink href="https://vitejs.dev/" target="_blank" styling="em">Vite</UnderlinedLink>, and animated with <UnderlinedLink href="https://www.framer.com/motion/" target="_blank" styling="em">Framer Motion</UnderlinedLink>. You can view the <UnderlinedLink href="https://github.com/richardfxr/richardfxr" target="_blank" styling="em">open source code on GitHub</UnderlinedLink>.</p>
            </Section>

            <Section heading="Accessibility" id="a11y">
                <p className='lg first'>The primary goal of version 10 is to be <em>accessible</em>. From the titled SVG illustrations to the <UnderlinedLink to="/settings" styling="em">accessibility settings</UnderlinedLink>, this website was designed to fit the needs of as many people as possible. The site respects user settings such as font size and motion preference while allowing them to be overwritten if needed.</p>
                    <Button href='https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility' target="_blank" styling="sm">What is accessibility?</Button>
            </Section>

            <Section heading="Typefaces" id="typefaces">
                <div className='twoCol'>
                    <article id='manrope'>
                        <p className='md'><UnderlinedLink href="https://www.manropefont.com/" target="_blank" styling="em">Manrope</UnderlinedLink></p>
                        <p className='xl'>{'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]{}&*^%$#@~'}</p>
                    </article>
                    <article id='inter'>
                        <p className='md'><UnderlinedLink href="https://rsms.me/inter/" target="_blank" styling="em">Inter</UnderlinedLink></p>
                        <p className='xl'>{'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]{}&*^%$#@~'}</p>
                    </article>
                </div>
            </Section>
        </PageTemplate>
    )
}