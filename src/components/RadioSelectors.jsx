// === IMPORTS ============================
// Sass
import './RadioSelectors.scss'
// Framer Motion
import { motion } from "framer-motion"
import { sectionVar } from "./Section"
// components
import ScrollContainer from "./ScrollContainer";

export default function RadioSelectors({ label, name, type, inline, ani, value, handler, radios }) {
    
    return (
        <motion.form 
            className={"radioSelectors" + (inline ? " inline" : "") + " " + type}
            id={name}
            variants={ani ? sectionVar : null}
            initial="hidden"
            animate="show"
            exit="exit">

            {!inline && <p className='radioSelectors__label'>{label}</p>}

            <ScrollContainer horizontal>
                {inline && <p className='label'>{label}</p>}

                <div className="main">
                    {radios.map((radio, index) => (
                        <div key={radio.value}>
                            <input
                                className='visuallyHidden'
                                type="radio"
                                id={name + index}
                                name={name}
                                value={radio.value}
                                checked={radio.value === value}
                                onChange={(e) => handler(e.target.value)} />
                            <label htmlFor={name + index}>{radio.label}</label>
                            {radio.value === value &&
                                <motion.div className='magicCircle' layoutId={name}></motion.div>
                            }
                        </div>
                    ))}
                </div>
            </ScrollContainer>
        </motion.form>
    )
}