// === IMPORTS ============================
// React
import { useRef, useState, useEffect } from "react"



export default function ScrollContainer({ vertical, horizontal, children }) {
    const scrollContainer = useRef()
    const startDiv = useRef()
    const endDiv = useRef()
    const [startIsIntersecting, setStartIsIntersecting] = useState()
    const [endIsIntersecting, setEndIsIntersecting] = useState()

    useEffect(() => {
        // define IntersectionObserver options
        const observerOptions = {
            root: scrollContainer.current,
            // define margin option to include 1px at the end or else endDiv will not intersect
            rootMargin: "0px 1px 1px 0px"
        }

        // create IntersectionObserver instances
        const startObserver = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setStartIsIntersecting(entry.isIntersecting)
        }, observerOptions)

        const endObserver = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setEndIsIntersecting(entry.isIntersecting)
        }, observerOptions)

        // observe edgeDivs
        startObserver.observe(startDiv.current)
        endObserver.observe(endDiv.current)

        return function cleanup() {
            // disconnet intersection oberservers
            startObserver.disconnect()
            endObserver.disconnect()
        }
    }, [])
    

    return (
        <div className="scrollContainer__wrapper">
           <div 
                className={
                    "scrollContainer" + 
                    (vertical ? " vrt" : "") + 
                    (horizontal ? " hrz" : "") + 
                    (startIsIntersecting ? " start" : "") + 
                    (endIsIntersecting ? " end" : "")}
                ref={scrollContainer}>
                <div className="edgeDiv" ref={startDiv} aria-hidden='true'></div>
                {children}
                <div className="edgeDiv end" ref={endDiv} aria-hidden='true'></div>
            </div> 
        </div>
    )
}