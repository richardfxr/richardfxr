// === IMPORTS ============================
// React
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
// Framer Motion
import { motion, AnimatePresence } from "framer-motion"
// Sass
import './PageTemplate.scss'
// components
import Breadcrumbs from './Breadcrumbs'
import Footer from '../components/Footer'

export default function PageTemplate({ children }) {
    const location = useLocation()
    
    useEffect(() => {
        console.log("location changed")
        // scroll page to top on route change
        window.scrollTo(0, 0);
    }, [location])

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div 
                className="pageWrapper"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                <Breadcrumbs />
                <main id="main">
                    {children}
                </main>
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}