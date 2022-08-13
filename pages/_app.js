// === IMPORTS ============================
// React
import { useEffect } from 'react'
// Next
import { useRouter } from 'next/router'
// Framer Motion
import { AnimatePresence } from "framer-motion"
// Sass
import '../styles/_index.scss'
// components
import AppWrapper from '../components/AppWrapper'
import A11yMenu from '../components/A11yMenu'
import Navbar from '../components/Navbar'
// contexts
import { SettingsProvider } from '../context/Settings'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        // scrolls page to top on page load (without hash)
        if (!router.asPath.match(/#([a-z0-9]+)/gi )) window.scrollTo(0, 0)
    }, [router.asPath])

    return (
        <SettingsProvider>
            <AppWrapper>
                <A11yMenu />
                <Navbar />
                <AnimatePresence exitBeforeEnter>
                   <Component {...pageProps} key={router.pathname} /> 
                </AnimatePresence>
            </AppWrapper>
        </SettingsProvider>
    )
}

export default MyApp
