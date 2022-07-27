// === IMPORTS ============================
// Sass
import './Info.scss'
// components
import PageTemplate from "../components/PageTemplate"
import Section from "../components/Section"
import VersionBadge from '../components/VersionBadge'
import ScrollContainer from '../components/ScrollContainer'

export default function Info() {
    return (
        <PageTemplate heading="Info" id="info">
            <Section heading="Version 10" id="version10" first>
                <ScrollContainer horizontal>
                   <VersionBadge /> 
                </ScrollContainer>
            </Section>
        </PageTemplate>
    )
}