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
                Budgetty is a standalone digital wallet that encourages more mindful spending habits in a world of abstract payment methods. I designed and animated the UI for the circular screen which users interact with through the surrounding dial.
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
                            <Image folder="Budgetty" fileName="Budgetty-UI-home" type="png" alt='The home page displays menu icons and the user’s balance. The upper half of the circular screen shows the savings icon, card selection icon, and settings icon. The lower half shows a balance of $435.92 above the subtitle “62% budget left.”' />
                            <figcaption>Home</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-cardSelect" type="png" alt='The card selection page displays credit and debit cards the user has stored on the device. Each card is represented by a user-defined icon and the card number’s last four digits. All cards are arranged in a partially visible circle that the user scrolls through by turning the surrounding dial.' />
                            <figcaption>Card selection</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-cardOptions" type="png" alt='The card options menu with a delete and move button. The corresponding card is highlighted with a white circle.' />
                            <figcaption>Card options</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-cardMove" type="png" alt='The card reordering interface shows all cards in a partially visible circle with the selected card highlighted with a white circle and the hint “rotate to move” next to it.' />
                            <figcaption>Reorder cards</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-cardDelete" type="png" alt='The card deletion page displays the card details in the upper half and the text “Hold to delete card” along with “Double press to cancel” in the lower half. As the user holds down the dial, a black border progresses along the edge of the screen, filling up the lower half when the card has been successfully deleted.' />
                            <figcaption>Delete card</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-paymentInput" type="png" alt='The payment input page displays the card details in the upper half and the amount that will be paid right below. The total balance is shown in smaller text at the very bottom.' />
                            <figcaption>Payment input</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-paymentConfirmation" type="png" alt='The payment confirmation screen shows the amount paid being subtracted from the user’s balance in the form of a long subtraction.' />
                            <figcaption>Payment confirmation</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-savings" type="png" alt='The savings page displays the amount saved each month. Users can view different months using the scrollable top section.' />
                            <figcaption>Monthly savings</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-spendings" type="png" alt='The spending page shows the amount spent each month. Users can view different months using the scrollable top section.' />
                            <figcaption>Monthly spendings</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-spendingsHistory" type="png" alt='By clicking on a month’s spending, the user is shown a list of transactions with the icon of the card used and the amount spent.' />
                            <figcaption>Spending history</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <Image folder="Budgetty" fileName="Budgetty-UI-spendingDetail" type="png" alt='By clicking on a specific transaction in the list, the user is shown the card details, the amount spent, the exact time of the transaction, and the merchant involved.' />
                            <figcaption>Spending detail</figcaption>
                        </figure>
                    </li>
                </ul>
            </Section>

            <Section heading="Images" id="images">
                <div className='twoCol'>
                    <Image folder="Budgetty" fileName="Budgetty-exploded" alt='Exploded view of Budgetty. From top to bottom: input dial, circular screen, motherboard, motherboard screws, top cover, cover screws, bottom cover, and the wireless charger.' />
                    <Image folder="Budgetty" fileName="Budgetty-threeFloating" alt='Three Budgetty devices floating in mid-air, each displaying a different interface.' />
                </div>
                <Image folder="Budgetty" fileName="Budgetty-topUI" alt='Top-down view of Budgetty. The circular screen at the center of its pentagonal shell displays the home page with the menu and remaining balance.' />
                <Image folder="Budgetty" fileName="Budgetty-model" alt='Someone holding a 3D-printed resin model of Budgetty in their left hand while turning the input dial with their right hand.' />
            </Section>
        </PageTemplate>
    )
}