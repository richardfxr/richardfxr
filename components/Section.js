// === IMPORTS ============================
// Framer Motion
import { motion } from "framer-motion"
// compoenents
import Separator from "./Separator"



// === FRAMER VARIANTS ====================
export const sectionVar = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function Section({ sections, index, noAni, first, printHidden, skipLinkHidden, children }) {
    return (
        <motion.section
            className={"section" + (printHidden ? " printHidden" : "")}
            id={sections[index].id}
            aria-labelledby={sections[index].id + "__heading"}
            variants={noAni || first ? null : sectionVar}
            initial="hidden"
            animate="show"
            exit="exit">
            <Separator ani={noAni ? true : false} />
            
            <motion.div
                className='section__side'
                variants={noAni || first ? sectionVar : null}
                initial="hidden"
                animate="show"
                exit="exit">
                <h2 id={sections[index].id + "__heading"}>{sections[index].heading}</h2>
                <div className={"skipLinks" + (skipLinkHidden ? " hidden" : "")}>
                    {index !== 0 &&
                        <a
                            href={'#' + sections[index - 1].id}
                            aria-label={'skip to previous section: ' + sections[index - 1].heading + "."}>
                            ↑
                        </a>
                    }
                    {index !== sections.length - 1 &&
                        <a
                            href={'#' + sections[index + 1].id}
                            aria-label={'skip to next section: ' + sections[index + 1].heading + "."}>
                            ↓
                        </a>
                    }
                    {index === sections.length - 1 &&
                        <a
                            href='#footer'
                            aria-label='skip to footer'>
                            ↓
                        </a>
                    }
                </div>
            </motion.div>
            
            <motion.div
                className='section__main'
                variants={first ?  sectionVar : null}
                initial="hidden"
                animate="show"
                exit="exit">
                {children}
            </motion.div>
        </motion.section>
    )
}