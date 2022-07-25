// === IMPORTS ============================
// Sass
import './Archive.scss'
// components
import PageTemplate from "../components/PageTemplate"
import ScrollContainer from "../components/ScrollContainer"
import Section from "../components/Section"
import Table from "../components/Table"
import UnderlinedLink from '../components/UnderlinedLink'



// === ARCHIVE DATA =======================
const archive2022 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://vimeo.com/685289621" target="_blank">The Creature</UnderlinedLink>, 'product design, videography'],
    [<UnderlinedLink href="/projects/eggholders">EggHolders</UnderlinedLink>, 'product design'],
    ['History of ID sketches', 'graphite'],
    [<UnderlinedLink href="/projects/budgetty">Budgetty</UnderlinedLink>, 'UI, product design'],
    ['richardfxr v10', 'web design, dev'],
    [<UnderlinedLink href="https://sity.earth/" target="_blank">sity.earth v2</UnderlinedLink>, 'web design, dev, illustration'],
]

const archive2021 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://www.instagram.com/p/CKmZIYLjrIJ/" target="_blank">Pacific Call Box 3404 mod</UnderlinedLink>, 'product design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/nudge" target="_blank">nudge</UnderlinedLink>, 'product design, dev'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#2021-02-31-1" target="_blank">2021-02-31-1</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#surfaces" target="_blank">Surfaces</UnderlinedLink>, 'charcoal'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#d2021-03-08-3" target="_blank">2021-03-08-3</UnderlinedLink>, 'charcoal'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#2021-03-12-1" target="_blank">2021-03-12-1</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#objects" target="_blank">Objects</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#VKD-45" target="_blank">VKD 45</UnderlinedLink>, 'charcoal'],
    [<UnderlinedLink href="https://vimeo.com/536179326" target="_blank">1:52</UnderlinedLink>, 'videography'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#flight-1416" target="_blank">Flight 1416 Accident Report</UnderlinedLink>, 'print design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/1416-str" target="_blank">Flight 1416 Interface</UnderlinedLink>, 'UI design'],
    [<UnderlinedLink href="/files/Richard Fu-Design2-portfolio.pdf" target="_blank">Design 2 Portfolio</UnderlinedLink>, 'print design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#tensegrital-camp" target="_blank">Tensegrital Camp</UnderlinedLink>, 'structure'],
    ['What is ID? poster', 'graphic design'],
    [<UnderlinedLink href="/projects/risd-2nd#cubes">Cubes</UnderlinedLink>, 'graphite'],
    ['orthographic drawings', 'graphite'],
    [<UnderlinedLink href="/projects/risd-2nd#french-press">115° French Press</UnderlinedLink>, 'product design'],
    ['walnut disc', 'woodworking'],
    [<UnderlinedLink href="/projects/1200d">Exploded 1200D</UnderlinedLink>, 'model'],
    [<UnderlinedLink href="/projects/p-frame">P-Frame</UnderlinedLink>, 'product design'],
    ['Hexagon Loft', 'woodworking'],
    ['untitled', 'woodworking'],
    [<UnderlinedLink href="http://v1.sity.earth/" target="_blank">sity.earth v1</UnderlinedLink>, 'web design, dev, illustration'],
]

const archive2020 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://www.instagram.com/p/B-dODDEjOZs/" target="_blank">April Fools' joke</UnderlinedLink>, 'UI design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/lumina" target="_blank">Lumina Design</UnderlinedLink>, 'UI design'],
    [<UnderlinedLink href="https://www.instagram.com/p/B_ne9W6Dhxz/" target="_blank">Lumina Design paper</UnderlinedLink>, 'print design'],
    ['RISD AS-1', 'digital illustration'],
    ['RISD AS-2', 'graphic design'],
    [<UnderlinedLink href="https://v9.richardfxr.com" target="_blank">richardfxr v9</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/bitwit-old" target="_blank">Bitwit branding</UnderlinedLink>, 'branding, graphic design'],
    [<UnderlinedLink href="https://bitwit.tech/" target="_blank">bitwit.tech</UnderlinedLink>, 'web design, dev'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#grapevine-beetle" target="_blank">Grapevine Beetle</UnderlinedLink>, 'sculpture'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#curves" target="_blank">Curves</UnderlinedLink>, 'sculpture'],
    [<UnderlinedLink href="https://www.instagram.com/p/CGOHGGPjHXE/" target="_blank">untitled</UnderlinedLink>, 'sculpture'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#north-main-st" target="_blank">North Main Street, Providence</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#self-portrait" target="_blank">Self-Portrait</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#ri-supreme-court" target="_blank">Rhode Island Supreme Court</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#hot-not-to-insert-lead" target="_blank">How Not to Insert Lead</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#memorial-park" target="_blank">Memorial Park, Providence</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#hand-study" target="_blank">hand study</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#index-controller" target="_blank">Index Controller</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#shuttle-carrier" target="_blank">Shuttle Carrier</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#figure-with-heater" target="_blank">Figure with Heater</UnderlinedLink>, 'graphite'],
    ['Figure with Heaters', 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#nick-117" target="_blank">NICK 117</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#marker-still-life-1" target="_blank">Marker Still Life 1</UnderlinedLink>, 'marker'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#studio-ceiling" target="_blank">Studio Ceiling</UnderlinedLink>, 'marker'],
    [<UnderlinedLink href="https://v9.richardfxr.com/esc" target="_blank"><span className='inter'>⎋</span> esc</UnderlinedLink>, 'puzzle'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#string-bound" target="_blank">线装 (String Bound)</UnderlinedLink>, 'book binding'],
]

const archive2019 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://www.instagram.com/p/BxvzmybBLtG/" target="_blank">Totoroly!</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/cyprium" target="_blank">Cyprium</UnderlinedLink>, 'computer build'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/orbis" target="_blank">Orbis Rounded</UnderlinedLink>, 'type design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/slabs" target="_blank">Slabs</UnderlinedLink>, 'colored pencil'],
    ['Porta', 'branding, product design'],
    ['Accessible packaging', 'product design'],
    ['Serenity', 'colored pencil'],
]

const archive2018 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://www.instagram.com/p/BdqxCpplEo0/" target="_blank">Johannah</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bd8yrOXFZJI/" target="_blank">untitled</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BeN8rrllwQj/" target="_blank">richardfxr v4</UnderlinedLink>, 'web designs'],
    [<UnderlinedLink href="https://www.behance.net/gallery/61391035/Valley-Game-Design" target="_blank">Valley</UnderlinedLink>, 'UI design, digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bev_gQdFGO5/" target="_blank">personal branding</UnderlinedLink>, 'branding'],
    [<UnderlinedLink href="https://www.instagram.com/p/BfEXymyloAB/" target="_blank">Art is Never Finished</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BfZowBpD2bq/" target="_blank">Team 246 shirts</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.behance.net/gallery/62801823/Hocklab-Brand-Identity-Design" target="_blank">Hocklab</UnderlinedLink>, 'branding'],
    [<UnderlinedLink href="https://www.instagram.com/p/BgFZHg2lGmA/" target="_blank">richardfxr v6</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BgSGQZRF2Hf/" target="_blank">LOX</UnderlinedLink>, 'graphoc design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BhCPP-3jdJF/" target="_blank">April Fools' joke</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BhkIi9LhtYK/" target="_blank">Rhett redesign</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BhpU5S0hYk1/" target="_blank">BUA prom tuck case</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BiK8RRMhn4L/" target="_blank">personal rebranding</UnderlinedLink>, 'branding'],
    [<UnderlinedLink href="https://www.behance.net/gallery/66932405/The-Chemistry-of-Phone-Screens" target="_blank">Chemistry of Phone Screens</UnderlinedLink>, 'print design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BkiuL5Ehmlw/" target="_blank">richardfxr v7</UnderlinedLink>, 'web design'],
    ['Valorem branding', 'branding'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bl6oLd5B47C/" target="_blank">Labrum Caps</UnderlinedLink>, 'type design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BmLgIJvhP5D/" target="_blank">Shanghai</UnderlinedLink>, 'photography'],
    [<UnderlinedLink href="hhttps://www.instagram.com/explore/tags/architectonicae/" target="_blank">Architectonicae</UnderlinedLink>, 'photography'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bm6ArTihKnM/" target="_blank">Suzhou Museum</UnderlinedLink>, 'photography'],
    [<UnderlinedLink href="https://www.instagram.com/p/BnG3yRGBp12/" target="_blank">Shanghai Natural History Museum</UnderlinedLink>, 'photography'],
    [<UnderlinedLink href="https://www.instagram.com/p/BnJYbE4huQp/" target="_blank">Glass</UnderlinedLink>, 'photography'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bnw1aaPhhHH/" target="_blank">Team 246 branding</UnderlinedLink>, 'branding'],
    [<UnderlinedLink href="https://www.instagram.com/p/BqBSZ6LB4mQ/" target="_blank">BU Student Link redesign</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.behance.net/gallery/71418383/NOTHING-CAN-EVER-RUIN-THIS" target="_blank">NCERT</UnderlinedLink>, 'graphic design'],
]

const archive2017 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://www.instagram.com/p/BRE7zW9D3c4/" target="_blank">246</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BRJuiv_jpwZ/" target="_blank">Lander</UnderlinedLink>, 'charcoal'],
    [<UnderlinedLink href="https://www.instagram.com/p/BS6Y5REl3Dd/" target="_blank">nikolapx logo</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BS9rPFTlWUT/" target="_blank">Swampcats logo</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BTK88_PDOXg/" target="_blank">Teen Change website</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BTdE_C0jDlx/" target="_blank">Roman Aqueducts cover</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BTr4ZMhjvdD/" target="_blank">R2D2</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://www.instagram.com/p/BUfzHh9jxFy/" target="_blank">Light and the Bohr Model cover</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BUu_BKajtYT/" target="_blank">McLaren F1 &amp; P1</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BVC6r6kj728/" target="_blank">R.I.P. iPhone</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BVlX82sl_GI/" target="_blank">VPN app concept</UnderlinedLink>, 'UI design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BV9kK7nFx99/" target="_blank">Shenzhen</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BWIRr7ODNP-/" target="_blank">Pickup</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BWNgDkBj4vV/" target="_blank">Collision</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BWnJrWDDaq7/" target="_blank">US Airways Flight 1549</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BW7u5rQDsOf/" target="_blank">Choose Your Weapon</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BXE2J7Tjs2M/" target="_blank">F-WTSB</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://www.instagram.com/p/BXZU7InFVIV/" target="_blank">The Midas Touch</UnderlinedLink>, 'colored pencil'],
    [<UnderlinedLink href="https://www.instagram.com/p/BYUO4G1jSki/" target="_blank">caffeine</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/explore/tags/plutoniumvideoproject/" target="_blank">Plutonium</UnderlinedLink>, 'digital illustration, animation'],
    [<UnderlinedLink href="https://www.instagram.com/p/BZex1Lbjj_O/" target="_blank">richardfxr v1</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BazeJRNjVvF/" target="_blank">Team 246 website</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BbAliqhFAkD/" target="_blank">Pale</UnderlinedLink>, 'colored pencil'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bc7ikXIj9ND/" target="_blank">richardfxr v3</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BdGprM-lDNk/" target="_blank">Merry Christmas</UnderlinedLink>, 'graphic design'],
]

export default function Archive() {
    return (
        <PageTemplate heading="Archive" id="archive">
            <Section heading="2022" id="2022" first>
                <ScrollContainer horizontal>
                    <Table tableData={archive2022} caption="2022 Archive" indexed />
                </ScrollContainer>
            </Section>

            <Section heading="2021" id="2021">
                <ScrollContainer horizontal>
                    <Table tableData={archive2021} caption="2021 Archive" indexed />
                </ScrollContainer>
            </Section>

            <Section heading="2020" id="2020">
                <ScrollContainer horizontal>
                    <Table tableData={archive2020} caption="2020 Archive" indexed />
                </ScrollContainer>
            </Section>

            <Section heading="2019" id="2019">
                <ScrollContainer horizontal>
                    <Table tableData={archive2019} caption="2019 Archive" indexed />
                </ScrollContainer>
            </Section>

            <Section heading="2018" id="2018">
                <ScrollContainer horizontal>
                    <Table tableData={archive2018} caption="2018 Archive" indexed />
                </ScrollContainer>
            </Section>

            <Section heading="2017" id="2017">
                <ScrollContainer horizontal>
                    <Table tableData={archive2017} caption="2017 Archive" indexed />
                </ScrollContainer>
            </Section>
        </PageTemplate>
    )
}