// === IMPORTS ============================
// components
import NavLink from "./NavLink"

export default function UnderlinedLink({ styling, href, target, to, click, print, children}) {
    if (href && target === '_blank') {
        return (
            <a href={href} target={target} className={"link external " + styling}>
                {children}
                {print &&
                    <span className="screenHidden inline"> ({print})</span>
                }
            </a>
        )
    } else if (href && href.charAt(0) === '#') {
        return (
            <a href={href} className={"link page " + styling}>{children}</a>
        )
    } else if (href) {
        return (
            <a href={href} target='_self' className={"link internal " + styling}>
                {children}
                {print &&
                    <span className="screenHidden inline"> ({print})</span>
                }
            </a>
        )
    } else if (to) {
        return (
            <NavLink to={to} className={"link internal " + styling}>
                {children}
                {print &&
                    <span className="screenHidden inline"> ({print})</span>
                }
            </NavLink>
        )
    } else if (click) {
        return (
            <button onClick={click} className={"link " + styling}>{children}</button>
        )
    }
}