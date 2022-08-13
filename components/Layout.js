// === IMPORTS ============================
// React
import { useEffect, useRef, useState } from "react"
// Next
import { useRouter } from 'next/router'
// Framer Motion
import { motion } from "framer-motion"
// components
import Breadcrumbs from './Breadcrumbs'
import PageHeading from "./PageHeading"
import Footer from '../components/Footer'
// hooks
import { useIsPortrait, useIsMotionOK } from "../hooks/useMediaQuery"
import { useSettings } from "../hooks/useSettings"

// === FRAMER VARIANTS ====================
const separatorVarPortrait = {
    hidden: { x: 0 },
    show: { x: '100%', transition: { ease: "easeIn", duration: 0.25, delay: 0.3 } },
    exit: { x: 0, transition: { ease: "easeOut", duration: 0.25, delay: 0 } },
}

const separatorVarLandscape = {
    hidden: { y: 0 },
    show: { y: '100%', transition: { ease: "easeIn", duration: 0.25, delay: 0.3 } },
    exit: { y: 0, transition: { ease: "easeOut", duration: 0.25, delay: 0 } },
}

const separatorVarLowMo = {
    hidden: { opacity: 1 },
    show: { opacity: 0, transition: { duration: 0.25, delay: 0.3 } },
    exit: {opacity: 1, transition: { duration: 0.25, delay: 0 } },
}

const pageInitVarPortrait = {
    hidden: { y: -100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
}

const pageInitVarLandscape = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
}

const pageInitVarLowMo = {
    hidden: { x: 0, y: 0, opacity: 0 },
    show: { x: 0, y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
}

const pageNormVar = {
    hidden: { x: 0, y: 0, opacity: 1 },
    show: { x: 0, y: 0, opacity: 1 },
}


export default function Layout({ heading, id, children }) {
    const isPortrait = useIsPortrait()
    const isMotionOK = useIsMotionOK()
    const { initialLoad, changeSetting } = useSettings()

    const router = useRouter()
    const page = useRef()
    const [loaded, setLoaded] = useState(false)
    
    // useEffect(() => {
    //     const hash = location.hash

    //     // scroll to anchor if it exists in URL and if page is fully loaded with animations completed
    //     if (hash && page.current.querySelector(hash) && loaded) {
    //         page.current.querySelector(hash).scrollIntoView()
    //         console.log("scrolled " + hash + " into view")
    //     } 
    // }, [router, loaded])

    return (
        <>
            <div className="navbar__separator">
                <motion.hr 
                    variants={isMotionOK ? (isPortrait ? separatorVarPortrait : separatorVarLandscape) : separatorVarLowMo}
                    initial="hidden"
                    animate="show"
                    exit="exit"/>
            </div>
            
            <motion.div 
                ref={page}
                key={heading}
                variants={initialLoad ? (isMotionOK ? (isPortrait ? pageInitVarPortrait : pageInitVarLandscape) : pageInitVarLowMo) : pageNormVar}
                className="pageWrapper"
                id={id}
                initial="hidden"
                animate="show"
                onAnimationComplete={() => {
                    changeSetting('initialLoad', false)
                    setLoaded(true)
                }}>
                <Breadcrumbs />
                <main id="main">
                    <PageHeading heading={heading} />
                    {children}
                </main>
                <Footer />
            </motion.div>
        </>
        
    )
}