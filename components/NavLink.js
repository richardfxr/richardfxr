// === IMPORTS ============================
// Next
import Link from 'next/link'



export default function NavLink({ to, className, children }) {
    return (
        <Link href={to} scroll={false}>
            <a className={className}>
                {children}
            </a>
        </Link>
    )
}