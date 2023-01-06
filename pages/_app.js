// === IMPORTS ============================
// React
import { useEffect } from 'react'
// Next
import Head from 'next/head'
import { useRouter } from 'next/router'
// Vercel
import { Analytics } from '@vercel/analytics/react'
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
        console.log('\n')

        // log ASCII logo to console
        console.log('%c`"@@@@@@@@@@@@@p,_', "font-weight: bold")
        console.log('%c   `"@@@@@@@@@@@@@@,', "font-weight: bold")
        console.log('%c               }@@@@', "font-weight: bold")
        console.log('%c`"@@@@@p_`"@@@@@@@@"', "font-weight: bold")
        console.log('%c   `"@@@@@p_`"@P?"', "font-weight: bold")
        console.log('%c      `"@@@@@p_', "font-weight: bold")
        console.log('%c         `"@@@@@p_', "font-weight: bold")
        console.log('\n')

        // log version number
        console.log("richardfxr.com version 10.2.3 gold (general release)")
        console.log('\n')

        // log credits and link GitHub
        console.log("Designed and developed by Richard Fu.")
        console.log("Code available on GitHub:")
        console.log("https://github.com/richardfxr/richardfxr")
        console.log('\n')
    }, [])

    useEffect(() => {
        // scrolls page to top on page load (without hash)
        if (!router.asPath.match(/#([a-z0-9]+)/gi )) window.scrollTo(0, 0)
    }, [router.asPath])

    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-title" content="richardfxr" />
                <meta name="application-name" content="richardfxr" />
                <meta name="msapplication-TileColor" content="#11d3e7" />
                
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?v=10.1.0" />
                <link rel="apple-touch-icon" sizes="192x192" href="/favicons/android-chrome-192x192.png?v=10.1.0" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?v=10.1.0" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?v=10.1.0" />
                <link rel="manifest" href="/favicons/site.webmanifest?v=10.1.0" />
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=10.1.0" color="#11d3e7" />
                <link rel="shortcut icon" href="/favicons/favicon.ico?v=10.1.0" />
            </Head>

            <SettingsProvider>
                <AppWrapper>
                    <A11yMenu />
                    <Navbar />
                    <AnimatePresence mode='wait'>
                    <Component {...pageProps} key={router.pathname} /> 
                    </AnimatePresence>
                </AppWrapper>
            </SettingsProvider>

            <Analytics />
        </>
    )
}

export default MyApp
