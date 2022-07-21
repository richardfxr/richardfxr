// === IMPORTS ============================
// React
import { useEffect, useRef } from 'react'
// Sass
import './RadioSelectors.scss'
// Framer Motion
import { motion } from "framer-motion"
import { sectionVar } from "./Section"
// components
import ScrollContainer from "./ScrollContainer";
// hooks
import { useIsMobile } from '../hooks/useMediaQuery'

export default function RadioSelectors({ label, name, type, inline, ani, value, handler, radios }) {
    const isMobile = useIsMobile()

    // refs
    const selectorGroup = useRef(null)
    const magicCircle = useRef(null)

    useEffect(() => {
        // find currently checked radio
        const checkedRadio = selectorGroup.current.querySelector('input:checked + label')
        
        if (checkedRadio) {
            magicCircle.current.style.transform = "translateX(" + checkedRadio.offsetLeft + "px)"
            magicCircle.current.style.width = checkedRadio.offsetWidth + "px"
        }
    }, [value, isMobile])
    
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

                <div className="main" ref={selectorGroup}>
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
                        </div>
                    ))}
                    <div className='magicCircle' ref={magicCircle}></div>
                </div>
            </ScrollContainer>
        </motion.form>
    )
}