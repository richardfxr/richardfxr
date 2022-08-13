// === IMPORTS ============================
// React
import { useEffect } from 'react'
// Framer Motion
import { AnimatePresence } from "framer-motion"
// hooks
import { useSettings } from '../hooks/useSettings'
import { userSettings } from '../context/Settings'



// === ROUTES =============================
export const routes = [
    // main pages (<Navbar /> only show first 4 objects)
    {path: '/', title: 'Home'},
    {path: '/projects', title: 'Projects'},
    {path: '/about', title: 'About'},
    {path: '/info', title: 'Info'},
    {path: '/settings', title: 'Settings'},

    // secondary pages
    {path: '/projects/archive',title: 'Archive'},
]



export default function AppWrapper({ children }) {
    const { changeSetting } = useSettings()

    useEffect(() => {
        // initialize user settings
        userSettings.forEach((setting) => {
            localStorage.getItem(setting.name) ? changeSetting(setting.name, localStorage.getItem(setting.name)) : changeSetting(setting.name, setting.default)
        })
    }, [])

    return <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>

}