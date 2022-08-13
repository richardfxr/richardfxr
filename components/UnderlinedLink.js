// === IMPORTS ============================
// Next
import Link from 'next/link'

export default function UnderlinedLink({ styling, href, target, to, click, children}) {
    if (href && target === '_blank') {
        return (
            <a href={href} target={target} className={"link external " + styling}>{children}</a>
        )
    } else if (href && href.charAt(0) === '#') {
        return (
            <a href={href} className={"link page " + styling}>{children}</a>
        )
    } else if (href) {
        return (
            <a href={href} target='_self' className={"link internal " + styling}>{children}</a>
        )
    } else if (to) {
        return (
            <Link href={to}><a className={"link internal " + styling}>{children}</a></Link>
        )
    } else if (click) {
        return (
            <button onClick={click} className={"link " + styling}>{children}</button>
        )
    }
}