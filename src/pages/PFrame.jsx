// === IMPORTS ============================
// components
import PageTemplate from "../components/PageTemplate"
import ProjectInfo from "../components/ProjectInfo"
import Section from "../components/Section"
import Image from "../components/Image"

export default function PFrame() {
    return (
        <PageTemplate heading="P-Frame">
            <ProjectInfo label="P-Frame" image={{ folder: 'test', fileName: 'P-Frame', alt:'test image' }}>
                <p>some text</p>
            </ProjectInfo>
        </PageTemplate>
    )
}