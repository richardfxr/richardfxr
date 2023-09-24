// === IMPORTS ============================
// Next
import Head from 'next/head'
// components
import { projects } from '../../components/AppWrapper'
import Layout from "../../components/Layout"
import ProjectInfo from "../../components/ProjectInfo"
import Section from "../../components/Section"
import Img from "../../components/Img"
// images
import BudgettyUIHome from '../../public/images/Budgetty/Budgetty-UI-home.png'
import BudgettyUICardSelect from '../../public/images/Budgetty/Budgetty-UI-cardSelect.png'
import BudgettyUICardOptions from '../../public/images/Budgetty/Budgetty-UI-cardOptions.png'
import BudgettyUICardMove from '../../public/images/Budgetty/Budgetty-UI-cardMove.png'
import BudgettyUICardDelete from '../../public/images/Budgetty/Budgetty-UI-cardDelete.png'
import BudgettyUIPaymentInput from '../../public/images/Budgetty/Budgetty-UI-paymentInput.png'
import BudgettyUIPaymentConfirmation from '../../public/images/Budgetty/Budgetty-UI-paymentConfirmation.png'
import BudgettyUISavings from '../../public/images/Budgetty/Budgetty-UI-savings.png'
import BudgettyUISpendings from '../../public/images/Budgetty/Budgetty-UI-spendings.png'
import BudgettyUISpendingsHistory from '../../public/images/Budgetty/Budgetty-UI-spendingsHistory.png'
import BudgettyUISpendingDetail from '../../public/images/Budgetty/Budgetty-UI-spendingDetail.png'
import BudgettyExploded from '../../public/images/Budgetty/Budgetty-exploded.jpg'
import BudgettyThreeFloating from '../../public/images/Budgetty/Budgetty-threeFloating.jpg'
import BudgettyTopUI from '../../public/images/Budgetty/Budgetty-topUI.jpg'
import BudgettyModel from '../../public/images/Budgetty/Budgetty-model.jpg'



// === SECTIONS ===========================
const sections = [
    {heading: "Video", id: "video"},
    {heading: "Interface", id: "interface"},
    {heading: "Images", id: "images"},
]

export default function Budgetty() {
    // project title
    const title = 'Budgetty'
    const headTitle =`${title} | Richard Fu`;
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    return (
        <>
            <Head>
                <title>{headTitle}</title>
                <meta
                    name="description"
                    content="A standalone digital wallet that encourages more mindful spending habits. I designed and animated the UI for the circular screen in the middle."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/Budgetty/Budgetty-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading={title} id="budgetty">
                <ProjectInfo project={project}>
                    <p>Budgetty is a standalone digital wallet that encourages more mindful spending habits in a world of abstract payment methods. I designed and animated the UI for the circular screen which users interact with through the surrounding dial.</p>
                </ProjectInfo>

                <Section sections={sections} index={0} skipLinkHidden>
                    <div className='videoContainer'>
                        <iframe src="https://player.vimeo.com/video/732265756?h=64c9c31e4e?dnt=1" frameBorder="0" allow="fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Section>

                <Section sections={sections} index={1}>
                    <ul className='threeCol'>
                        <li>
                            <figure>
                                <Img img={BudgettyUIHome} alt='The home page displays menu icons and the user’s balance. The upper half of the circular screen shows the savings icon, card selection icon, and settings icon. The lower half shows a balance of $435.92 above the subtitle “62% budget left.”' />
                                <figcaption>Home</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <Img img={BudgettyUICardSelect} alt='The card selection page displays credit and debit cards the user has stored on the device. Each card is represented by a user-defined icon and the card number’s last four digits. All cards are arranged in a partially visible circle that the user scrolls through by turning the surrounding dial.' />
                                <figcaption>Card selection</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <Img img={BudgettyUICardOptions} alt='The card options menu with a delete and move button. The corresponding card is highlighted with a white circle.' />
                                <figcaption>Card options</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <Img img={BudgettyUICardMove} alt='The card reordering interface shows all cards in a partially visible circle with the selected card highlighted with a white circle and the hint “rotate to move” next to it.' />
                                <figcaption>Reorder cards</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <Img img={BudgettyUICardDelete} alt='The card deletion page displays the card details in the upper half and the text “Hold to delete card” along with “Double press to cancel” in the lower half. As the user holds down the dial, a black border progresses along the edge of the screen, filling up the lower half when the card has been successfully deleted.' />
                                <figcaption>Delete card</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <Img img={BudgettyUIPaymentInput} alt='The payment input page displays the card details in the upper half and the amount that will be paid right below. The total balance is shown in smaller text at the very bottom.' />
                                <figcaption>Payment input</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <Img img={BudgettyUIPaymentConfirmation} alt='The payment confirmation screen shows the amount paid being subtracted from the user’s balance in the form of a long subtraction.' />
                                <figcaption>Payment confirmation</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <Img img={BudgettyUISavings} alt='The savings page displays the amount saved each month. Users can view different months using the scrollable top section.' />
                                <figcaption>Monthly savings</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <Img img={BudgettyUISpendings} alt='The spending page shows the amount spent each month. Users can view different months using the scrollable top section.' />
                                <figcaption>Monthly spendings</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <Img img={BudgettyUISpendingsHistory} alt='By clicking on a month’s spending, the user is shown a list of transactions with the icon of the card used and the amount spent.' />
                                <figcaption>Spending history</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <Img img={BudgettyUISpendingDetail} alt='By clicking on a specific transaction in the list, the user is shown the card details, the amount spent, the exact time of the transaction, and the merchant involved.' />
                                <figcaption>Spending detail</figcaption>
                            </figure>
                        </li>
                    </ul>
                </Section>

                <Section sections={sections} index={2}>
                    <div className='twoCol'>
                        <Img img={BudgettyExploded} alt='Exploded view of Budgetty. From top to bottom: input dial, circular screen, motherboard, motherboard screws, top cover, cover screws, bottom cover, and the wireless charger.' />
                        <Img img={BudgettyThreeFloating} alt='Three Budgetty devices floating in mid-air, each displaying a different interface.' />
                    </div>
                    <Img img={BudgettyTopUI} alt='Top-down view of Budgetty. The circular screen at the center of its pentagonal shell displays the home page with the menu and remaining balance.' />
                    <Img img={BudgettyModel} alt='Someone holding a 3D-printed resin model of Budgetty in their left hand while turning the input dial with their right hand.' />
                </Section>
            </Layout>
        </>
    )
}