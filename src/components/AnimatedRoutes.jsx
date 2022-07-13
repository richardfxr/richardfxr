// === IMPORTS ============================
// React
import { useEffect } from "react"
import { Route, Routes, useLocation } from 'react-router-dom'
// Framer Motion
import { AnimatePresence } from "framer-motion"
// primary pages
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Info from '../pages/info'
// secondary pages
import Archive from '../pages/Archive'
// project pages
import EggHolders from '../pages/EggHolders'
import PFrame from '../pages/PFrame'

// === ROUTES =============================
export const routes = [
    // main pages (<Navbar /> only show first 4 objects)
    {path: '/', element: () => <Home />, title: 'Home'},
    {path: '/projects', element: () => <Projects />, title: 'Projects'},
    {path: '/about', element: () => <About />, title: 'About'},
    {path: '/info', element: () => <Info />, title: 'Info'},

    // secondary pages
    {path: '/projects/archive', element: () => <Archive />, title: 'Archive'},
]

// === PROJECTS ===========================
export const projects = [
    {
        path: '/projects/eggholders',
        element: () => <EggHolders />,
        title: 'Eggholders',
        image: {folder: 'test', fileName: 'EggHolder', alt: 'test image'},
        colors: [
            {hex: '#f8d363', name: 'light mustard'},
            {hex: '#f0eeef', name: 'light grey'} , 
            {hex: '#f09170', name: 'dark salmon'}
        ],
        labels: ['product design', 'photgraphy', 'risd']
    },
    {
        path: '/projects/something',
        element: () => <PFrame />,
        title: 'P-Frame',
        image: {folder: 'test', fileName: 'P-Frame', alt: 'test image'},
        colors: [
            {hex: '#f8d363', name: 'light mustard'},
            {hex: '#f0eeef', name: 'light grey'} , 
            {hex: '#f09170', name: 'dark salmon'}
        ],
        labels: ['product design', 'CAD', 'risd']
    },
]

export default function AnimatedRoutes() {
    const location = useLocation()
    
    useEffect(() => {
        // scroll page to top on route change
        window.scrollTo(0, 0);
    }, [location])

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element()} />
                ))}
                {projects.map(({ path, element }) => (
                    <Route key={path} path={path} element={element()} />
                ))}
            </Routes>
        </AnimatePresence>
    )
}