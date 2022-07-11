// === IMPORTS ============================
// Sass
import './Home.scss';
// components
import PageTemplate from "../components/PageTemplate";
import Section from "../components/Section";
import Button from '../components/Button';

export default function Home() {
    return (
        <PageTemplate>
            <h1>Hello</h1>

            <Section heading="Introduction" id="intro">
                <p className="lg">I’m <em>Richard Fu</em>, an <em>artist</em>, <em>designer</em>, and <em>developer</em> who loves blue - <em className="rblue">#11d3e7</em> to be exact.</p>
                <ul className='row md'>
                    <li><Button href='#works' target="_self" styling="sm rblue"><span className='inter upDw pad--right'>↓</span> Works</Button></li>
                    <li><Button to='/about' styling="sm">About</Button></li>
                    <li><Button to='/about' styling="sm">Contact</Button></li>
                </ul>
            </Section>

            <Section heading="Selected Works" id="works">
                <ul className='2col'>
                    <li></li>
                </ul>
            </Section>
        </PageTemplate>
    )
}