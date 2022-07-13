// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// Sass
import './PageTemplate.scss'
// components
import Breadcrumbs from './Breadcrumbs'
import PageHeading from "./PageHeading"
import Footer from '../components/Footer'

// === FRAMER VARIANTS ====================
const pageTransition = {
    // hidden: { y: 100, opacity: 0 },
    // show: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.3 } },
    // exit: { y: -100, opacity: 0, transition: { ease: "easeIn", duration: 0.25 } },
}

export default function PageTemplate({ heading, children }) {
    return (
        <motion.div 
            key={heading}
            variants={pageTransition}
            className="pageWrapper"
            initial="hidden"
            animate="show"
            exit="exit">
            <Breadcrumbs />
            <main id="main">
                <PageHeading heading={heading} />
                {children}
            </main>
            <Footer />
        </motion.div>
    )
}