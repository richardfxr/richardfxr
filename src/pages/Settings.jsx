// === IMPORTS ============================
// Sass
import './Settings.scss'
// components
import PageTemplate from '../components/PageTemplate'
import Section from "../components/Section"
import RadioSelectors from '../components/RadioSelectors'
// hooks
import { useSettings } from '../hooks/useSettings'



// === SECTIONS ===========================
const sections = [
    {heading: "Visual", id: "visual"},
    {heading: "Interaction", id: "interaction"},
]

export default function Settings() {
    const { colorScheme, contrast, motionPref, targetSize, changeSetting } = useSettings()

    return (
        <PageTemplate heading="Settings" id="settings">
            <Section sections={sections} index={0}>
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
            </Section>

            <Section sections={sections} index={1}>
                <RadioSelectors
                    label="Motion:"
                    name="motionPref"
                    type="lg"
                    desc="Determines the number of animations on the website. ‘Low’ will limit animations to just fade effects. ‘Auto’ will respect the system motion preference."
                    value={motionPref}
                    handler={changeSetting}
                    setting='motionPref'
                    radios={[
                        { value: "auto", label: "auto" },
                        { value: "full", label: "full" },
                        { value: "low", label: "low" },
                    ]} />

                <RadioSelectors
                    label="Button size:"
                    name="targetSize"
                    type="lg"
                    desc="Determines the size of interactive elements like buttons, links, and radio selectors."
                    value={targetSize}
                    handler={changeSetting}
                    setting='targetSize'
                    radios={[
                        { value: "small", label: "small" },
                        { value: "medium", label: "medium" },
                        { value: "large", label: "large" },
                    ]} />
            </Section>
        </PageTemplate>
    )
}