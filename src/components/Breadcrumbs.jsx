// === IMPORTS ============================
// React
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// Sass
import './Breadcrumbs.scss'
// components
import { routes, projects } from './AnimatedRoutes'
// SVGs
import {ReactComponent as HomeIcon} from '../assets/SVGs/home.svg'
import {ReactComponent as ProjectsIcon} from '../assets/SVGs/projects.svg'
import {ReactComponent as AboutIcon} from '../assets/SVGs/about.svg'
import {ReactComponent as InfoIcon} from '../assets/SVGs/info.svg'
import {ReactComponent as SettingsIcon} from '../assets/SVGs/settings.svg'

export default function Breadcrumbs() {
    const location = useLocation()
    const [curPathname, setCurPathname] = useState('')
    const [breadcrumbs, setBreadcrumbs] = useState([])

    if (curPathname !== location.pathname) {
        // get breadcrumbs for current pathname, does not live inside a useEffect hook becuase it causes animation stutters

        // set curPathname
        setCurPathname(location.pathname)

        // parse location string
        let breadcrumbsTemp = location.pathname.split('/')

        // remove first element from breadcrumbs array since it is always ''
        if (breadcrumbsTemp.length > 1) breadcrumbsTemp.shift()

        // concat routes and projects array to create allRoutes array
        const allRoutes = routes.concat(projects)

        // get corresponding object from allRoutes array
        breadcrumbsTemp.forEach(function(breadcrumb, index) {
            // replace breadcrumbs[index] with corresponsing object from routes array
            this[index] = allRoutes.find(route => route.path.split('/').at(-1) === breadcrumb)
            this[index].isCurrent = false
        }, breadcrumbsTemp)

        // add current: true to last breadcrumb
        breadcrumbsTemp[breadcrumbsTemp.length - 1].isCurrent = true

        setBreadcrumbs(breadcrumbsTemp)
    }
    

    return (
        <nav className='breadcrumbs' aria-label="breadcrumbs">
            <ol className='row'>
                {breadcrumbs.map(({ path, title, isCurrent }) => (
                    <li key={path}><BreadcrumbLink path={path} label={title} isCurrent={isCurrent} /></li>
                ))}
            </ol>
        </nav>
    )
}



// === INTERNAL COMPONENTS ================
function BreadcrumbLink({ path, label, isCurrent }) {
    return (
        <Link to={path} aria-label={label} aria-current={isCurrent ? 'page' : 'false'}>
            {/* conditional icon */}
            {path === "/" && <HomeIcon />}
            {path === "/projects" && <ProjectsIcon />}
            {path === "/about" && <AboutIcon />}
            {path === "/info" && <InfoIcon />}
            {path === "/info" && <SettingsIcon />}

            {label}
        </Link>
    )
}