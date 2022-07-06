// === IMPORTS ============================
// Sass
import './Navbar.scss';
// SVGs
import {ReactComponent as Logo} from '../assets/SVGs/logo.svg';
import {ReactComponent as HomeIcon} from '../assets/SVGs/home.svg';
import {ReactComponent as ProjectsIcon} from '../assets/SVGs/projects.svg';
import {ReactComponent as AboutIcon} from '../assets/SVGs/about.svg';
import {ReactComponent as InfoIcon} from '../assets/SVGs/info.svg';


export default function Navbar({ setCurrentPage }) {
    return (
        <header className='navbar'>
            <Logo />
            <nav>
                <ul>
                    <li><NavLink href="/" text="Home." setCurrentPage={setCurrentPage}/></li>
                    <li><NavLink href="/projects" text="Projects." setCurrentPage={setCurrentPage}/></li>
                    <li><NavLink href="/about" text="About me." setCurrentPage={setCurrentPage}/></li>
                    <li><NavLink href="/info" text="Site information." setCurrentPage={setCurrentPage}/></li>
                </ul>
            </nav>
        </header>
    )
}



// === INTERNAL COMPONENTS ================
function NavLink({ href, text, setCurrentPage }) {
    return (
        <a href={href} arialabel={text} onClick={() => {setCurrentPage(href)}}>
            {/* conditional icon */}
            {href === "/" && <HomeIcon />}
            {href === "/projects" && <ProjectsIcon />}
            {href === "/about" && <AboutIcon />}
            {href === "/info" && <InfoIcon />}
        </a>
    )
}