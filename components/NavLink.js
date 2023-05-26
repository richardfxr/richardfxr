// === IMPORTS ============================
// Next
import Link from 'next/link'



export default function NavLink({ to, className, children }) {
    return (
        <Link href={to} className={className} scroll={false}>
                {children}
        </Link>
    )
}