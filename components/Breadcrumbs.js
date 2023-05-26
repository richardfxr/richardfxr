// === IMPORTS ============================
// React
import { useState } from 'react'
// Next
import Link from 'next/link'
import { useRouter } from 'next/router'
// components
import { routes, projects } from './AppWrapper'
// SVGs
import HomeIcon from '../public/SVGs/home.svg'
import ProjectsIcon from '../public/SVGs/projects.svg'
import AboutIcon from '../public/SVGs/about.svg'
import InfoIcon from '../public/SVGs/info.svg'
import SettingsIcon from '../public/SVGs/settings.svg'

export default function Breadcrumbs() {
    const router = useRouter()
    const [curPathname, setCurPathname] = useState('')
    const [breadcrumbs, setBreadcrumbs] = useState([])
    const [error, setError] = useState(false)

    if (curPathname !== router.pathname) {
        // get breadcrumbs for current pathname, does not live inside a useEffect hook becuase it causes animation stutters

        // set curPathname
        setCurPathname(router.pathname)

        // parse location string
        let breadcrumbsTemp = router.pathname.split('/')

        // remove first element from breadcrumbs array since it is always ''
        if (breadcrumbsTemp.length > 1) breadcrumbsTemp.shift()

        // concat routes and projects array to create allRoutes array
        const allRoutes = routes.concat(projects)

        // get corresponding object from allRoutes array
        breadcrumbsTemp.forEach(function(breadcrumb, index) {
            // replace breadcrumbs[index] with corresponsing object from routes array
            this[index] = allRoutes.find(route => route.href.split('/').at(-1) === breadcrumb)
            if (this[index]) {
                this[index].isCurrent = false
            } else {
                // set error if no matching route is found
                setError(true)
            }
        }, breadcrumbsTemp)

        // add current: true to last breadcrumb if it exists
        if (breadcrumbsTemp[breadcrumbsTemp.length - 1]) breadcrumbsTemp[breadcrumbsTemp.length - 1].isCurrent = true

        setBreadcrumbs(breadcrumbsTemp)
    }
    

    return (
        <nav className='breadcrumbs' aria-label="breadcrumbs">
            {!error &&
                <ol className='row'>
                    {breadcrumbs.map(({ href, title, isCurrent }) => (
                        <li key={href}><BreadcrumbLink to={href} label={title} isCurrent={isCurrent} /></li>
                    ))}
                </ol>
            }

            {error &&
                <p className='error'>Breadcrumb error</p>
            }
        </nav>
    )
}



// === INTERNAL COMPONENTS ================
function BreadcrumbLink({ to, label, isCurrent }) {
    return (
        <Link
            href={to}
            aria-label={label}
            aria-current={isCurrent ? 'page' : 'false'}>
            {to === "/" && <HomeIcon />}
            {to === "/projects" && <ProjectsIcon />}
            {to === "/about" && <AboutIcon />}
            {to === "/info" && <InfoIcon />}
            {to === "/settings" && <SettingsIcon />}

            {label}
        </Link>
    )
}