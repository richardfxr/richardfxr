// === IMPORTS ============================
// Next
import Head from 'next/head'
// Framer Motion
import { motion } from "framer-motion"
// components
import Layout from "../../components/Layout"
import Separator from '../../components/Separator'
import Img from '../../components/Img'
import Section from "../../components/Section"
import { sectionVar } from '../../components/Section'
import UnderlinedLink from "../../components/UnderlinedLink"
import Button from "../../components/Button"
// SVGs
import RichardfxrPDF417 from '../../public/SVGs/PDF417-richardfxr.svg'
import Instagram from '../../public/SVGs/instagram.svg'
import GitHub from '../../public/SVGs/github.svg'
import Vimeo from '../../public/SVGs/vimeo.svg'
import Behance from '../../public/SVGs/behance.svg'
import LinkedIn from '../../public/SVGs/linkedin.svg'
import Discogs from '../../public/SVGs/discogs.svg'
import MAL from '../../public/SVGs/mal.svg'
// images
import SelfPortrait from '../../public/images/About/SelfPortrait.jpg'



// === SECTIONS ===========================
const sections = [
    {heading: "Principles", id: "principles"},
    {heading: "Favorites", id: "favorites"},
    {heading: "Socials", id: "socials"},
    {heading: "Contact", id: "contact"},
]

export default function About() {
    return (
        <>
            <Head>
                <title>About | Richard Fu</title>
                <meta
                    name="description"
                    content="Maker of art – creator of designs – coder of websites – builder of computers – lover of keyboards – student of RISD."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/about-OGimage-2.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading="About" id="about">
                <motion.section
                    className="profile"
                    id='profile'
                    aria-labelledby="heading"
                    variants={sectionVar}
                    initial="hidden"
                    animate="show"
                    exit="exit">
                    <Separator />

                    <article className='card twoCol'>
                        <div className='main'>
                            <div className="code">
                                <RichardfxrPDF417 />
                                <p>(¬_¬)ﾉ</p>
                            </div>
                            <Img img={SelfPortrait} layoutID="SelfPortrait" alt="Graphite self-portrait. I’m an Asian male with short black hair wearing a pair of aviator-style glasses." priority />
                        </div>
                        <div className='text'>
                            <p className='md name'>Richard Fu</p>
                            <ul className='buttons'>
                                <li><a href="https://www.instagram.com/richardfxr/" target="_blank" rel="noreferrer" className='profileCardButton' aria-label="Instagram"><Instagram /></a></li>
                                <li><a href="https://github.com/richardfxr" target="_blank" rel="noreferrer" className='profileCardButton' aria-label="GitHub"><GitHub /></a></li>
                                <li><a href="https://vimeo.com/user134146921" target="_blank" rel="noreferrer" className='profileCardButton' aria-label="Vimeo"><Vimeo /></a></li>
                            </ul>
                            <p className='md'>Maker of art – creator of designs – coder of websites – builder of computers – lover of keyboards – student of RISD.</p>
                        </div>
                    </article>
                </motion.section>

                <Section sections={sections} index={0} skipLinkHidden>
                    <p className="md first">I create things that are <em>functional, but never boring</em>. I believe design exists to communicate, to empower, and that is why my work focuses on <em>accessibility</em>. I do not sacrifice function in the name of style, but I do not see ornamentation as a crime. I love the balance of a well-kerned font, but more so, I love the look of an optically imperfect lens.</p>
                    <ul className='row md printHidden'>
                        <li><Button to='/about/resume' styling="sm">Résumé</Button></li>
                        <li><Button href='#contact' styling="sm">Contact</Button></li>
                    </ul>
                    
                </Section>

                <Section sections={sections} index={1} skipLinkHidden>
                    <dl className="twoCol dlList">
                        <div>
                            <dt>Favorite color</dt>
                            <dd id="favColor">#11D3E7</dd>
                        </div>
                        <div>
                            <dt>Favorite decorative typeface</dt>
                            <dd><UnderlinedLink href="https://www.behance.net/gallery/128589635/Sisteron-Typeface" target="_blank" styling="block">Sisteron</UnderlinedLink></dd>
                        </div>
                        <div>
                            <dt>Favorite website</dt>
                            <dd><UnderlinedLink href="https://filippobello.com/" target="_blank" styling="block">Filippo Bello</UnderlinedLink></dd>
                        </div>
                        <div>
                            <dt>Favorite aircraft</dt>
                            <dd><UnderlinedLink href="https://en.wikipedia.org/wiki/Concorde" target="_blank" styling="block">Concorde</UnderlinedLink></dd>
                        </div>
                        <div>
                            <dt>Favorite key switch</dt>
                            <dd><UnderlinedLink href="https://www.google.com/search?q=boba+u4t" target="_blank" styling="block">Gazzew Boba U4T</UnderlinedLink></dd>
                        </div>
                        <div>
                            <dt>Favorite vintage lens</dt>
                            <dd><UnderlinedLink href="https://alikgriffin.com/helios-44-2-review-king-character/" target="_blank" styling="block">Helios 44-2 58mm f/2</UnderlinedLink></dd>
                        </div>
                        <div>
                            <dt>Favorite cinematographer</dt>
                            <dd><UnderlinedLink href="https://www.imdb.com/name/nm0292132/" target="_blank" styling="block">Greig Fraser</UnderlinedLink></dd>
                        </div>
                        <div>
                            <dt>Favorite film</dt>
                            <dd><UnderlinedLink href="https://myanimelist.net/anime/35677/Liz_to_Aoi_Tori" target="_blank" styling="block">Liz and the Blue Bird</UnderlinedLink></dd>
                        </div>
                    </dl>
                </Section>

                <Section sections={sections} index={2} skipLinkHidden>
                    <div className="twoCol" >
                        <div className="fourCol">
                            <SocialLink href="https://www.instagram.com/richardfxr/" name="Instagram" id="instagram" logo={<Instagram />} />
                            <SocialLink href="https://github.com/richardfxr" name="GitHub" id="github" logo={<GitHub />} />
                        </div>
                        <div className="fourCol">
                            <SocialLink href="https://vimeo.com/user134146921" name="Vimeo" id="vimeo" logo={<Vimeo />} />
                            <SocialLink href="https://www.behance.net/richardfxr" name="Behance" id="behance" logo={<Behance />} />
                        </div>
                    </div>
                    <div className="twoCol" >
                        <div className="fourCol">
                            <SocialLink href="https://www.linkedin.com/in/richardfxr/" name="LinkedIn" id="linkedin" logo={<LinkedIn />} />
                            <SocialLink href="https://www.discogs.com/user/richardfxr/collection?header=1" name="Discogs" id="discogs" logo={<Discogs />} />
                        </div>
                        <div className="fourCol">
                            <SocialLink href="https://myanimelist.net/profile/richardfxr" name="MyAnimeList" id="mal" logo={<MAL />} />
                            <div aria-hidden="true"></div>
                        </div>
                    </div>
                </Section>

                <Section sections={sections} index={3} skipLinkHidden>
                    <p className="md">Have ideas for a project or just want to say hi? Message me on one of the <UnderlinedLink href="#socials" styling="em upArrow">above social platforms</UnderlinedLink> or email me.</p>
                    <p className="md status">
                        <span className="statusLable red">Status</span>
                        <span><em>Not open to projects</em> in the near future.</span>
                    </p>
                    <Button href='mailto:theguy@richardfxr.com?subject=A%20Witty%20Title' target="_blank" styling="sm">theguy@richardfxr.com</Button>
                </Section>
            </Layout>
        </>
        
    )
}



// === INTERNAL COMPONENTS ================
function SocialLink({ href, name, id, logo }) {
    return (
        <a href={href} id={id + 'SocialLink'} className="socialLink" target="_blank" rel="noreferrer">
            <div className="square">
                <div className="logo">
                    {logo}
                    <div className="lines1" aria-hidden="true"></div>
                    <div className="lines2" aria-hidden="true"></div>
                </div>
            </div>
            <p>{name}</p>
        </a>
    )
}