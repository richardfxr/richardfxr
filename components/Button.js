// === IMPORTS ============================
// components
import NavLink from "./NavLink"

export default function Button({ styling, href, target, to, click, children}){
    if (href) {
        return <a href={href} target={target} className={"button " + styling}>{children}</a>
    } else if (to) {
        return <NavLink to={to} className={"button " + styling}>{children}</NavLink>
    } else if (click) {
        return <button onClick={click} className={"button " + styling}>{children}</button>
    }
}