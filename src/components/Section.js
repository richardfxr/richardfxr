// === IMPORTS ============================
// Sass
import './Section.scss'
// compoenents
import Separator from "./Separator"

export default function Section({ heading, id, children }) {
    return (
        <section className="section" id={id} aria-labelledby={id + "__heading"}>
            <Separator />
            <div className='section__main'>
                <h2 id={id + "__heading"}>{heading}</h2>
                <div className='section__content'>
                    {children}
                </div>
            </div>
        </section>
    )
}