// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// Sass
import './Separator.scss'
// components
import { sectionVar } from './Section'

export default function Separator({ ani }) {
    return (
        <motion.hr
            className="separator"
            variants={ani ? sectionVar : null}
            initial="hidden"
            animate="show"
            exit="exit">
        </motion.hr>
    )
}