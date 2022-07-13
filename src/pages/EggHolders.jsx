// === IMPORTS ============================
// components
import PageTemplate from "../components/PageTemplate"
import ProjectInfo from "../components/ProjectInfo"
import Section from "../components/Section"
import Image from "../components/Image"

export default function EggHolders() {
    return (
        <PageTemplate heading="EggHolders">
            <ProjectInfo label="EggHolders" image={{ folder: 'test', fileName: 'EggHolder', alt:'test image' }}>
                <p>some text</p>
            </ProjectInfo>
        </PageTemplate>
    )
}