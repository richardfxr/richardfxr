// === IMPORTS ============================
// React
import { NavLink } from 'react-router-dom';
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
        <div className='navbar'>
            <header>
                <Logo className='logo'/>
                <nav>
                    <ul>
                        <li><NavigationLink href="/" label="Home." setCurrentPage={setCurrentPage}/></li>
                        <li><NavigationLink href="/projects" label="Projects." setCurrentPage={setCurrentPage}/></li>
                        <li><NavigationLink href="/about" label="About me." setCurrentPage={setCurrentPage}/></li>
                        <li><NavigationLink href="/info" label="Site information." setCurrentPage={setCurrentPage}/></li>
                        <li className='magicLine' aria-hidden="true"></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}



// === INTERNAL COMPONENTS ================
function NavigationLink({ href, label, setCurrentPage }) {
    return (
        <NavLink to={href} aria-label={label} onClick={() => {setCurrentPage(href)}}>
            {/* conditional icon */}
            {href === "/" && <HomeIcon />}
            {href === "/projects" && <ProjectsIcon />}
            {href === "/about" && <AboutIcon />}
            {href === "/info" && <InfoIcon />}
        </NavLink>
    )
}