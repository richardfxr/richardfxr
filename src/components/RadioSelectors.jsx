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
import { useSettings } from '../hooks/useSettings'

export default function RadioSelectors({ label, name, type, desc, forcedClr, inline, ani, value, handler, setting, radios }) {
    const isMobile = useIsMobile()
    const { initialLoad } = useSettings()
    const indicatorLength = 18

    // refs
    const selectorGroup = useRef(null)
    const magicLine = useRef(null)

    useEffect(() => {
        // find currently checked radio
        const checkedRadio = selectorGroup.current.querySelector('input:checked + label')
        
        if (checkedRadio) {
            let transX = checkedRadio.offsetLeft + (checkedRadio.offsetWidth - indicatorLength) / 2
            magicLine.current.style.transform = "translateX(" + transX + "px)"
        }
    }, [value, isMobile, initialLoad])
    
    return (
        <motion.form 
            className={"radioSelectors" + (inline ? " inline" : "") + " " + type}
            id={name}
            variants={ani ? sectionVar : null}
            initial="hidden"
            animate="show"
            exit="exit">

            {!inline && <p className='label'>{label}</p>}
            {desc && <p className='sm'>{desc}</p>}
            {forcedClr && <p className='sm forcedClr'>{forcedClr}</p>}

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
                                onChange={(e) => {setting ? handler(setting, e.target.value) : handler(e.target.value)}} />
                            <label htmlFor={name + index}>{radio.label}</label>
                        </div>
                    ))}
                    <div className='magicLine' ref={magicLine}></div>
                </div>
            </ScrollContainer>
        </motion.form>
    )
}