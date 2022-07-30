// === IMPORTS ============================
// Sass
import './Info.scss'
// components
import PageTemplate from "../components/PageTemplate"
import Section from "../components/Section"
import VersionBadge from '../components/VersionBadge'
import ScrollContainer from '../components/ScrollContainer'
import UnderlinedLink from '../components/UnderlinedLink'
import RadioSelectors from '../components/RadioSelectors'
// hooks
import { useSettings } from '../hooks/useSettings'

export default function Info() {
    const { colorScheme, contrast, motionPref, changeSetting } = useSettings()
    
    return (
        <PageTemplate heading="Info" id="info">
            <Section heading="Version 10" id="version10" first>
                <ScrollContainer horizontal>
                   <VersionBadge /> 
                </ScrollContainer>

                <p className='lg'>This is version 10 of my portfolio website. It is a single-page application built with <UnderlinedLink href="https://reactjs.org/" target="_blank" styling="em">React</UnderlinedLink>, bundled using <UnderlinedLink href="https://vitejs.dev/" target="_blank" styling="em">Vite</UnderlinedLink>, and animated with <UnderlinedLink href="https://www.framer.com/motion/" target="_blank" styling="em">Framer Motion</UnderlinedLink>. You can view the <UnderlinedLink href="https://github.com/richardfxr/richardfxr" target="_blank" styling="em">open source code on GitHub</UnderlinedLink>.</p>
            </Section>

            <Section heading="Accessibility" id="a11y">
                <p className='lg first'>The primary goal of version 10 is to be as <em>accessible</em> as possible. From the titled SVG illustrations to the <UnderlinedLink href="#settings" styling="em">accessibility settings</UnderlinedLink> below, this website was designed to fit the needs of as many people as possible. The site respects user settings such as font size and motion preference while allowing them to be overwritten if needed.</p>
            </Section>

            <Section heading="Settings" id="settings">
                <RadioSelectors
                        label="Color scheme:"
                        name="colorScheme"
                        type="lg"
                        desc="Determines all foreground, background, and text colors. ‘Auto’ will respect the system color scheme."
                        forcedClr="This setting is currently overridden as forced colors are active."
                        value={colorScheme}
                        handler={changeSetting}
                        setting='colorScheme'
                        radios={[
                            { value: "auto", label: "auto" },
                            { value: "light", label: "light" },
                            { value: "dark", label: "dark" },
                        ]} />

                <RadioSelectors
                        label="Contrast:"
                        name="contrast"
                        type="lg"
                        desc="Determines the contrast between foreground and background colors. ‘Default’ satisfies WCAG level AA and ‘high’ satisfies level AAA. ‘Auto’ will respect the system contrast."
                        forcedClr="This setting is currently overridden as forced colors are active."
                        value={contrast}
                        handler={changeSetting}
                        setting='contrast'
                        radios={[
                            { value: "auto", label: "auto" },
                            { value: "default", label: "default" },
                            { value: "high", label: "high" },
                        ]} />

                <RadioSelectors
                        label="Motion:"
                        name="motionPref"
                        type="lg"
                        desc="Determines the number of animations on the website. ‘Low’ will limit animations to just fade effects. ‘Auto’ will respect the system motion preference."
                        forcedClr="This setting is currently overridden as forced colors are active."
                        value={motionPref}
                        handler={changeSetting}
                        setting='motionPref'
                        radios={[
                            { value: "auto", label: "auto" },
                            { value: "full", label: "full" },
                            { value: "low", label: "low" },
                        ]} />
            </Section>
        </PageTemplate>
    )
}