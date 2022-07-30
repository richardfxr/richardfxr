// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// Sass
import './PageTemplate.scss'
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


export default function PageTemplate({ heading, id, children }) {
    const isPortrait = useIsPortrait()
    const isMotionOK = useIsMotionOK()
    const { initialLoad, changeSetting } = useSettings()

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
                key={heading}
                variants={initialLoad ? (isMotionOK ? (isPortrait ? pageInitVarPortrait : pageInitVarLandscape) : pageInitVarLowMo) : pageNormVar}
                className="pageWrapper"
                id={id}
                initial="hidden"
                animate="show"
                onAnimationComplete={() => changeSetting('initialLoad', false)}>
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