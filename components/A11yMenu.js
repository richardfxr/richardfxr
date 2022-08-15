// === IMPORTS ============================
//components
import Button from "./Button"

export default function A11yMenu() {
    return (
        <ul className="a11yMenu row md" aria-label="Accessibility menu">
            <li><Button href="#main" target="_self" styling="sm">Skip to content</Button></li>
            <li><Button to="/settings" styling="sm">Accessibility settings</Button></li>
        </ul>
    )
}