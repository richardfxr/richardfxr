// === IMPORTS ============================
// Next
import Head from 'next/head'
// components
import { projects } from '../components/AppWrapper'
import Layout from "../components/Layout"
import Section from "../components/Section"
import ScrollContainer from '../components/ScrollContainer'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
// SVGs
import IllusArt from '../public/SVGs/home-art-illus.svg'
import IllusDesign from '../public/SVGs/home-design-illus.svg'
import IllusDev from '../public/SVGs/home-dev-illus.svg'



// === SECTIONS ===========================
const sections = [
    {heading: "Introduction", id: "intro"},
    {heading: "Selected Works", id: "works"}
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Richard Fu - Designer, Developer, &amp; Artist</title>
                <meta
                    name="description"
                    content="I’m Richard Fu, a designer, developer, and artist who loves blue. This is my portfolio website which contains recent projects and ways to contact me."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/richardfxr-OGimage-2.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading="Hello" id="home">
                <Section sections={sections} index={0} first skipLinkHidden>
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
                    <p className="lg">I’m <em>Richard Fu</em>, a <em>designer</em>, <em>developer</em>, and <em>artist</em> who loves blue - <em className="rblue">#11d3e7</em> to be exact.</p>
                    <ul className='row md'>
                        <li><Button href='#works' target="_self" styling="sm colored"><span className='inter upDw pad--right'>↓</span> Works</Button></li>
                        <li><Button to='/about' styling="sm">About</Button></li>
                        <li><Button to='/about/resume' styling="sm">Résumé</Button></li>
                    </ul>
                </Section>

                <Section sections={sections} index={1} noAni>
                    <ul className='twoCol cards'>
                        {projects.slice(0, 6).map((project) => (
                            <li key={project.href}><ProjectCard {...project} /></li>
                        ))}
                    </ul>
                    <div id="moreWork" className="message">
                        <p className='md'>You can find <em>more work</em> on the projects page or view an index of all my work in the archive.</p>
                        <ul className='row md'>
                            <li><Button to='/projects#more' styling="sm">Projects</Button></li>
                            <li><Button to='/projects/archive' styling="sm">Archive</Button></li>
                        </ul>
                    </div>
                </Section>
            </Layout>
        </>
        
    )
}
