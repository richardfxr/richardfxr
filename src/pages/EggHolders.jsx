// === IMPORTS ============================
// components
import PageTemplate from "../components/PageTemplate"
import Section from "../components/Section"
import Image from "../components/Image"

export default function EggHolders() {
    return (
        <PageTemplate>
            <h1>EggHolders</h1>

            <Section heading="Test" id="test">
                <Image animate='layout' folder='test' fileName='EggHolder' alt='test image' />
            </Section>
        </PageTemplate>
    )
}