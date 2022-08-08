// === IMPORTS ============================
// Sass
import './Home.scss'
// components
import { projects } from '../components/AnimatedRoutes'
import PageTemplate from "../components/PageTemplate"
import Section from "../components/Section"
import ScrollContainer from '../components/ScrollContainer'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
// SVGs
import {ReactComponent as IllusArt} from '../assets/SVGs/home-art-illus.svg'
import {ReactComponent as IllusDesign} from '../assets/SVGs/home-design-illus.svg'
import {ReactComponent as IllusDev} from '../assets/SVGs/home-dev-illus.svg'

export default function Home() {
    return (
        <PageTemplate heading="Hello" id="home">
            <Section heading="Introduction" id="intro" first>
                <ScrollContainer horizontal>
                    <ul className='row illus__list'>
                        <li className='illus__container'>
                            <IllusArt />
                        </li>
                        <li className='illus__container'>
                            <IllusDesign />
                        </li>
                        <li className='illus__container'>
                            <IllusDev />
                        </li>
                    </ul>
                </ScrollContainer>
                <p className="lg">I’m <em>Richard Fu</em>, an <em>artist</em>, <em>designer</em>, and <em>developer</em> who loves blue - <em className="rblue">#11d3e7</em> to be exact.</p>
                <ul className='row md'>
                    <li><Button href='#works' target="_self" styling="sm rblue"><span className='inter upDw pad--right'>↓</span> Works</Button></li>
                    <li><Button to='/about' styling="sm">About</Button></li>
                    <li><Button to='/about#contact' styling="sm">Contact</Button></li>
                </ul>
            </Section>

            <Section heading="Selected Works" id="works" noAni>
                <ul className='twoCol cards'>
                    {projects.map((project) => (
                        <li key={project.path}><ProjectCard {...project} /></li>
                    ))}
                </ul>
            </Section>
        </PageTemplate>
    )
}