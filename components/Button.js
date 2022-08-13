// === IMPORTS ============================
// Next
import Link from 'next/link'

export default function Button({ styling, href, target, to, click, children}){
    if (href) {
        return <a href={href} target={target} className={"button " + styling}>{children}</a>
    } else if (to) {
        return <Link href={to}><a className={"button " + styling}>{children}</a></Link>
    } else if (click) {
        return <button onClick={click} className={"button " + styling}>{children}</button>
    }
}