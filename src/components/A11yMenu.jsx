// === IMPORTS ============================
//components
import Button from "./Button"
// Sass
import './A11yMenu.scss'

export default function A11yMenu() {
    return (
        <ul className="a11yMenu row md" aria-label="Accessibility menu">
            <li><Button href="#main" target="_self" styling="sm">Skip to content</Button></li>
            <li><Button to="/info" styling="sm">Accessibility settings</Button></li>
        </ul>
    )
}