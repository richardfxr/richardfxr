// === IMPORTS ============================
// Sass
import './Budgetty.scss'
// components
import { projects } from '../../components/AnimatedRoutes'
import PageTemplate from "../../components/PageTemplate"
import ProjectInfo from "../../components/ProjectInfo"
import Section from "../../components/Section"
import Image from "../../components/Image"
import UnderlinedLink from '../../components/UnderlinedLink'

export default function Budgetty() {
    // project title
    const title = 'Budgetty'
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <PageTemplate heading={title} id="budgetty">
            <ProjectInfo project={project}>
                Budgetty is a standalone digital wallet that encourages more mindful spending habits in a world of abstract payment methods. I designed and animated the UI for the circular screen which users interact with through the surrounding ring.
            </ProjectInfo>

            <Section heading="Video" id="video">
                <div className='videoContainer'>
                    <iframe src="https://player.vimeo.com/video/732265756?h=64c9c31e4e?dnt=1" frameBorder="0" allow="fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div><script src="https://player.vimeo.com/api/player.js"></script>
            </Section>

            <Section heading="Interface" id="interface">
                <ul className='threeCol'>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-home" type="png" alt="something" />
                            <figcaption>Home</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-cardSelect" type="png" alt="something" />
                            <figcaption>Card selection</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-cardOptions" type="png" alt="something" />
                            <figcaption>Card options</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-cardMove" type="png" alt="something" />
                            <figcaption>Reorder cards</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-cardDelete" type="png" alt="something" />
                            <figcaption>Delete card</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-paymentInput" type="png" alt="something" />
                            <figcaption>Payment input</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-paymentConfirmation" type="png" alt="something" />
                            <figcaption>Payment confirmation</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-savings" type="png" alt="something" />
                            <figcaption>Monthly savings</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-spendings" type="png" alt="something" />
                            <figcaption>Monthly spendings</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-spendingsHistory" type="png" alt="something" />
                            <figcaption>Spending history</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-spendingDetail" type="png" alt="something" />
                            <figcaption>Spending detail</figcaption>
                        </figure>
                    </li>
                </ul>
            </Section>
        </PageTemplate>
    )
}