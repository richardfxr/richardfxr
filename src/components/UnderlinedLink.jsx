// === IMPORTS ============================
// React
import { Link } from 'react-router-dom'
// Sass
import './UnderlinedLink.scss'

export default function UnderlinedLink({ styling, href, target, to, click, children}) {
    if (href && target === '_blank') {
        return (
            <a href={href} target={target} className={"link external " + styling}>{children}</a>
        )
    } else if (href) {
        return (
            <a href={href} target='_self' className={"link internal " + styling}>{children}</a>
        )
    } else if (to) {
        return (
            <Link to={to} className={"link internal " + styling}>{children}</Link>
        )
    } else if (click) {
        return (
            <button onClick={click} className={"link " + styling}>{children}</button>
        )
    }
}