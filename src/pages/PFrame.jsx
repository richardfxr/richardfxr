// === IMPORTS ============================
// components
import PageTemplate from "../components/PageTemplate"
import Section from "../components/Section"
import Image from "../components/Image"

export default function PFrame() {
    return (
        <PageTemplate>
            <h1>P-Frame</h1>

            <Section heading="Test" id="test">
                <Image animate='layout' folder='test' fileName='P-Frame' alt='test image' />
            </Section>
        </PageTemplate>
    )
}