// === IMPORTS ============================
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
