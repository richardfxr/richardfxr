// === IMPORTS ============================
// Sass
import './Section.scss'
// compoenents
import Separator from "./Separator"

export default function Section({ heading, id, children }) {
    return (
        <section className="section" id={id} aria-labelledby={id + "__heading"}>
            <Separator />
            
            <div className='section__side' >
                <h2 id={id + "__heading"}>{heading}</h2>
            </div>
            
            <div className='section__main'>
                {children}
            </div>
        </section>
    )
}