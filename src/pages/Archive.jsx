// === IMPORTS ============================
// Sass
import './Archive.scss'
// components
import PageTemplate from "../components/PageTemplate"
import ScrollContainer from "../components/ScrollContainer"
import Section from "../components/Section"
import Table from "../components/Table"
import UnderlinedLink from '../components/UnderlinedLink'



// === ARCHIVE DATA =======================
const archive2022 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://www.richardfxr.com/" target="_blank">115° French Press</UnderlinedLink>, 'product design'],
    ['Exploded 1200D', 'product design'],
    ['115° French Press', 'product design'],
    ['Exploded 1200D', 'product design'],
    ['115° French Press', 'product design'],
    ['Exploded 1200D', 'product design'],
]

export default function Archive() {
    return (
        <PageTemplate heading="Archive" id="archive">
            <Section heading="2022" id="2022" first>
                <ScrollContainer horizontal>
                    <Table tableData={archive2022} caption="2022 Archive" indexed />
                </ScrollContainer>
            </Section>
        </PageTemplate>
    )
}