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
import { useSettings } from '../hooks/useSettings'

// === FRAMER VARIANTS ====================
const pageInitVar = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
}

const pageNormVar = {
    hidden: { y: 0, opacity: 1 },
    show: { y: 0, opacity: 1 },
}


export default function PageTemplate({ heading, children }) {
    const { initialLoad, changeSetting } = useSettings()

    return (
        <motion.div 
            key={heading}
            variants={initialLoad ? pageInitVar : pageNormVar}
            className="pageWrapper"
            initial="hidden"
            animate="show"
            exit="exit"
            onAnimationComplete={() => changeSetting('initialLoad', false)}>
            <Breadcrumbs />
            <main id="main">
                <PageHeading heading={heading} />
                {children}
            </main>
            <Footer />
        </motion.div>
    )
}