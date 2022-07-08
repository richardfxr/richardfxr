// === IMPORTS ============================
// React
import { Link } from 'react-router-dom';
// Sass
import './Button.scss'

export default function Button({ styling, href, target, to, click, children}){
    if (href) {
        return (
            <a href={href} target={target} className={"button " + styling}>{children}</a>
        )
    } else if (to) {
        return (
            <Link to={to} className={"button " + styling}>{children}</Link>
        )
    } else if (click) {
        return (
            <button onClick={click} className={"button " + styling}>{children}</button>
        )
    }
}