// === IMPORTS ============================
// React
import { useState, useEffect, useRef } from 'react'
// Framer Motion
import { motion } from "framer-motion"
// components
import ScrollContainer from "./ScrollContainer";
import { sectionVar } from "./Section"
// hooks
import { useSettings } from '../hooks/useSettings'



export default function RadioSelectors({ label, name, type, desc, forcedClr, inline, ani, value, handler, setting, radios }) {
    const { initialLoad } = useSettings()

    // states
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()

    // refs
    const selectorGroup = useRef(null)
    const magicLine = useRef(null)

    useEffect(() => {
        // find currently checked radio
        const checkedRadio = selectorGroup.current.querySelector('input:checked + label')
        
        if (checkedRadio) {
            let transX = "calc(" + checkedRadio.offsetLeft + "px + (" + checkedRadio.offsetWidth + "px - 1.125rem) / 2)"
            magicLine.current.style.transform = "translateX(" + transX + ")"
        }
    }, [value, initialLoad, width, height])

    useEffect(() => {
        // instantiating ResizeObserver
        const fontSizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                setWidth(entry.contentRect.width);
                setHeight(entry.contentRect.height);
            });
        });

        // observe selectorGroup
        fontSizeObserver.observe(selectorGroup.current)

        return function cleanup() {
            // disconnet resize observer
            fontSizeObserver.disconnect()
        }
    }, [])
    
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