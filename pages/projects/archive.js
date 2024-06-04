// === IMPORTS ============================
// Next
import Head from 'next/head'
// components
import Layout from "../../components/Layout"
import ScrollContainer from "../../components/ScrollContainer"
import Section from "../../components/Section"
import Table from "../../components/Table"
import UnderlinedLink from '../../components/UnderlinedLink'



// === SECTIONS ===========================
const sections = [
    {heading: "2024", id: "twentyfour"},
    {heading: "2023", id: "twentythree"},
    {heading: "2022", id: "twentytwo"},
    {heading: "2021", id: "twentyone"},
    {heading: "2020", id: "twenty"},
    {heading: "2019", id: "nineteen"},
    {heading: "2018", id: "eighteen"},
    {heading: "2017", id: "seventeen"},
]

// === ARCHIVE DATA =======================
const archive2024 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://experiments.richardfxr.com/mnca" target="_blank" key="mnca">Multiple Neighborhood Cellular Automaton</UnderlinedLink>, 'web, graphics dev'],
    [<UnderlinedLink href="https://vimeo.com/932316575" target="_blank" key="marbleRun">Marble Run - Unity Exploration</UnderlinedLink>, 'game dev'],
    [<UnderlinedLink href="https://experiments.richardfxr.com/face-draw" target="_blank" key="faceDraw">Face Draw</UnderlinedLink>, 'web dev'],
    [<UnderlinedLink href="https://vimeo.com/920316540" target="_blank" key="shapes">Shapes - Unity Exploration</UnderlinedLink>, 'motion design, dev'],
    [<UnderlinedLink href="https://experiments.richardfxr.com/pixel-viewer" target="_blank" key="pixelViewer">Pixel Viewer</UnderlinedLink>, 'web dev'],
    [<UnderlinedLink href="https://experiments.richardfxr.com/" target="_blank" key="experiments">Experiments</UnderlinedLink>, 'web dev'],
    ['Power efficient OLED interfaces', 'UI design'],
]

const archive2023 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://experiments.richardfxr.com/hypnosis" target="_blank" key="hypnosis">Hypnosis</UnderlinedLink>, 'web, graphics dev'],
    [<UnderlinedLink href="https://experiments.richardfxr.com/scatter" target="_blank" key="scatter">Scatter</UnderlinedLink>, 'web dev'],
    ['Fidelity project', 'web design, dev'],
    [<UnderlinedLink href="https://www.mini-synth.app/" target="_blank" key="miniSynth">Mini Synth</UnderlinedLink>, 'web design, dev, audio'],
    [<UnderlinedLink href="https://experiments.richardfxr.com/uganglobe" target="_blank" key="uganglobe">Uganda refugee data viz</UnderlinedLink>, 'data visualization, dev'],
    ['Rhino creations', '3D modeling, rendering'],
]

const archive2022 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://www.machinists-edge.com/" target="_blank" key="machinistsEdge">Machinist&#39;s Edge</UnderlinedLink>, 'web design, dev'],
    [<UnderlinedLink href="https://weatherdial.richardfxr.com/" target="_blank" key="weatherDial">Weather Dial</UnderlinedLink>, 'web design, dev'],
    [<UnderlinedLink href="https://preview.sity.earth/" target="_blank" key="sity1">sity.earth v1.1</UnderlinedLink>, 'web design, dev, illustration'],
    [<UnderlinedLink href="https://youtu.be/HucnOIo9QKk" target="_blank" key="passersby">Passersby</UnderlinedLink>, 'graphic design, videography'],
    [<UnderlinedLink to="/projects/richardfxr" key="richardfxr10">richardfxr.com v10</UnderlinedLink>, 'web design, dev'],
    [<UnderlinedLink href="https://sity.earth/" target="_blank" key="sity1">sity.earth v1</UnderlinedLink>, 'web design, dev, illustration'],
    [<UnderlinedLink to="/projects/budgetty" key="budgetty">Budgetty</UnderlinedLink>, 'UI, product design'],
    ['History of ID sketches', 'graphite'],
    [<UnderlinedLink to="/projects/eggholders" key="eggholders">EggHolders</UnderlinedLink>, 'product design'],
    [<UnderlinedLink href="https://vimeo.com/685289621" target="_blank" key="creature">The Creature</UnderlinedLink>, 'product design, videography'],
]

const archive2021 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="http://v0.sity.earth/" target="_blank" key="sity0">sity.earth v0</UnderlinedLink>, 'web design, dev, illustration'],
    [<UnderlinedLink to="/projects/RISDsophomore#twistedlofts" key="twistedlofts">Twisted Lofts</UnderlinedLink>, 'woodworking'],
    [<UnderlinedLink to="/projects/pframe" key="pframe">P-Frame</UnderlinedLink>, 'product design'],
    [<UnderlinedLink to="/projects/exploded1200d" key="exploded1200d">Exploded 1200D</UnderlinedLink>, 'model'],
    [<UnderlinedLink to="/projects/RISDsophomore#walnutdisc" key="walnutdisc">Walnut Disc</UnderlinedLink>, 'woodworking'],
    [<UnderlinedLink to="/projects/RISDsophomore#frenchpress" key="frenchpress">115° French Press</UnderlinedLink>, 'product design'],
    ['orthographic drawings', 'graphite'],
    [<UnderlinedLink to="/projects/RISDsophomore#freehandcubes" key="freehandcube">Freehand Cubes</UnderlinedLink>, 'graphite'],
    ['What is ID? poster', 'graphic design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#tensegrital-camp" target="_blank" key="tensegritalcamp">Tensegrital Camp</UnderlinedLink>, 'structure'],
    [<UnderlinedLink href="https://v9.richardfxr.com/1416-str" target="_blank" key="flight1416interface">Flight 1416 Interface</UnderlinedLink>, 'UI design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#flight-1416" target="_blank" key="fligh1416report">Flight 1416 Accident Report</UnderlinedLink>, 'print design'],
    [<UnderlinedLink href="https://vimeo.com/536179326" target="_blank" key="152">1:52</UnderlinedLink>, 'videography'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#VKD-45" target="_blank" key="vkd45">VKD 45</UnderlinedLink>, 'charcoal'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#objects" target="_blank" key="objects">Objects</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#2021-03-12-1" target="_blank" key="202103121">2021-03-12-1</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#d2021-03-08-3" target="_blank" key="202103083">2021-03-08-3</UnderlinedLink>, 'charcoal'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#surfaces" target="_blank" key="surfaces">Surfaces</UnderlinedLink>, 'charcoal'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#2021-02-31-1" target="_blank" key="202102311">2021-02-31-1</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/nudge" target="_blank" key="nudge">nudge</UnderlinedLink>, 'product design, dev'],
    [<UnderlinedLink href="https://www.instagram.com/p/CKmZIYLjrIJ/" target="_blank" key="pacificcallbox3404">Pacific Call Box 3404 mod</UnderlinedLink>, 'product design'],
]

const archive2020 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#string-bound" target="_blank" key="stringbounc">线装 (String Bound)</UnderlinedLink>, 'book binding'],
    [<UnderlinedLink href="https://v9.richardfxr.com/esc" target="_blank" key="esc"><span className='inter'>⎋</span> esc</UnderlinedLink>, 'puzzle'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#studio-ceiling" target="_blank" key="studioceiling">Studio Ceiling</UnderlinedLink>, 'marker'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#marker-still-life-1" target="_blank" key="markerstilllife1">Marker Still Life 1</UnderlinedLink>, 'marker'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#nick-117" target="_blank" key="nick117">NICK 117</UnderlinedLink>, 'graphite'],
    ['Figure with Heaters', 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#figure-with-heater" target="_blank" key="figurewithheater">Figure with Heater</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#shuttle-carrier" target="_blank" key="shuttlecarrier">Shuttle Carrier</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#index-controller" target="_blank" key="indexcontroller">Index Controller</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#hand-study" target="_blank" key="handstudy">hand study</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#memorial-park" target="_blank" key="memorialpark">Memorial Park, Providence</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#hot-not-to-insert-lead" target="_blank" key="insertlead">How Not to Insert Lead</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#ri-supreme-court" target="_blank" key="risupremecourt">Rhode Island Supreme Court</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#self-portrait" target="_blank" key="selfportrait">Self-Portrait</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#north-main-st" target="_blank" key="nmainst">North Main Street, Providence</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://www.instagram.com/p/CGOHGGPjHXE/" target="_blank" key="untitled2">untitled</UnderlinedLink>, 'sculpture'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#curves" target="_blank" key="curves">Curves</UnderlinedLink>, 'sculpture'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/efs#grapevine-beetle" target="_blank" key="grapevinebeetle">Grapevine Beetle</UnderlinedLink>, 'sculpture'],
    [<UnderlinedLink href="https://bitwit.tech/" target="_blank" key="bitwittech">bitwit.tech</UnderlinedLink>, 'web design, dev'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/bitwit-old" target="_blank" key="bitwitbranding">Bitwit branding</UnderlinedLink>, 'branding, graphic design'],
    [<UnderlinedLink href="https://v9.richardfxr.com" target="_blank" key="richrdfxr9">richardfxr.com v9</UnderlinedLink>, 'web design'],
    ['RISD AS-2', 'graphic design'],
    ['RISD AS-1', 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/B_ne9W6Dhxz/" target="_blank" key="luminadesignpaper">Lumina Design paper</UnderlinedLink>, 'print design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/lumina" target="_blank" key="luminadesign">Lumina Design</UnderlinedLink>, 'UI design'],
    [<UnderlinedLink href="https://www.instagram.com/p/B-dODDEjOZs/" target="_blank" key="aprilfools2020">April Fools&apos; joke</UnderlinedLink>, 'UI design'],
]

const archive2019 = [
    ['#', 'title', 'type'],
    ['Serenity', 'colored pencil'],
    ['Accessible packaging', 'product design'],
    ['Porta', 'branding, product design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/slabs" target="_blank" key="slabs">Slabs</UnderlinedLink>, 'colored pencil'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/orbis" target="_blank" key="orbisrounded">Orbis Rounded</UnderlinedLink>, 'type design'],
    [<UnderlinedLink href="https://v9.richardfxr.com/projects/cyprium" target="_blank" key="cyprium">Cyprium</UnderlinedLink>, 'computer build'],
    [<UnderlinedLink href="https://www.instagram.com/p/BxvzmybBLtG/" target="_blank" key="totoroly">Totoroly!</UnderlinedLink>, 'graphic design'],
]

const archive2018 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://www.behance.net/gallery/71418383/NOTHING-CAN-EVER-RUIN-THIS" target="_blank" key="ncert">NCERT</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BqBSZ6LB4mQ/" target="_blank" key="bulinkredesign">BU Student Link redesign</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bnw1aaPhhHH/" target="_blank" key="team246branding">Team 246 branding</UnderlinedLink>, 'branding'],
    [<UnderlinedLink href="https://www.instagram.com/p/BnJYbE4huQp/" target="_blank" key="glass">Glass</UnderlinedLink>, 'photography'],
    [<UnderlinedLink href="https://www.instagram.com/p/BnG3yRGBp12/" target="_blank" key="shanghainaturalhistorymuseum">Shanghai Natural History Museum</UnderlinedLink>, 'photography'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bm6ArTihKnM/" target="_blank" key="suzhoumuseum">Suzhou Museum</UnderlinedLink>, 'photography'],
    [<UnderlinedLink href="https://www.instagram.com/explore/tags/architectonicae/" target="_blank" key="architectonicae">Architectonicae</UnderlinedLink>, 'photography'],
    [<UnderlinedLink href="https://www.instagram.com/p/BmLgIJvhP5D/" target="_blank" key="shanghai">Shanghai</UnderlinedLink>, 'photography'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bl6oLd5B47C/" target="_blank" key="labrumcaps">Labrum Caps</UnderlinedLink>, 'type design'],
    ['Valorem branding', 'branding'],
    [<UnderlinedLink href="https://www.instagram.com/p/BkiuL5Ehmlw/" target="_blank" key="richardfxr7">richardfxr.com v7</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.behance.net/gallery/66932405/The-Chemistry-of-Phone-Screens" target="_blank" key="chemistryofphonescreens">Chemistry of Phone Screens</UnderlinedLink>, 'print design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BiK8RRMhn4L/" target="_blank" key="personalrebranding">personal rebranding</UnderlinedLink>, 'branding'],
    [<UnderlinedLink href="https://www.instagram.com/p/BhpU5S0hYk1/" target="_blank" key="buapromtuckcase">BUA prom tuck case</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BhkIi9LhtYK/" target="_blank" key="rhett redesign">Rhett redesign</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BhCPP-3jdJF/" target="_blank" key="aprilfools2018">April Fools&apos; joke</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BgSGQZRF2Hf/" target="_blank" key="lox">LOX</UnderlinedLink>, 'graphoc design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BgFZHg2lGmA/" target="_blank" key="richardfxr6">richardfxr.com v6</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.behance.net/gallery/62801823/Hocklab-Brand-Identity-Design" target="_blank" key="hocklab">Hocklab</UnderlinedLink>, 'branding'],
    [<UnderlinedLink href="https://www.instagram.com/p/BfZowBpD2bq/" target="_blank" key="team246shirts">Team 246 shirts</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BfEXymyloAB/" target="_blank" key="artisneverfinished">Art is Never Finished</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bev_gQdFGO5/" target="_blank" key="personalbranding">personal branding</UnderlinedLink>, 'branding'],
    [<UnderlinedLink href="https://www.behance.net/gallery/61391035/Valley-Game-Design" target="_blank" key="valley">Valley</UnderlinedLink>, 'UI design, digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BeN8rrllwQj/" target="_blank" key="richardfxr4">richardfxr.com v4</UnderlinedLink>, 'web designs'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bd8yrOXFZJI/" target="_blank" key="untitled1">untitled</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BdqxCpplEo0/" target="_blank" key="johannah">Johannah</UnderlinedLink>, 'graphite'],
]

const archive2017 = [
    ['#', 'title', 'type'],
    [<UnderlinedLink href="https://www.instagram.com/p/BdGprM-lDNk/" target="_blank" key="merrychristmas">Merry Christmas</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/Bc7ikXIj9ND/" target="_blank" key="richardfxr3">richardfxr.com v3</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BbAliqhFAkD/" target="_blank" key="pale">Pale</UnderlinedLink>, 'colored pencil'],
    [<UnderlinedLink href="https://www.instagram.com/p/BazeJRNjVvF/" target="_blank" key="team246website">Team 246 website</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BZex1Lbjj_O/" target="_blank" key="richardfxr1">richardfxr.com v1</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.instagram.com/explore/tags/plutoniumvideoproject/" target="_blank" key="plutonium">Plutonium</UnderlinedLink>, 'digital illustration, animation'],
    [<UnderlinedLink href="https://www.instagram.com/p/BYUO4G1jSki/" target="_blank" key="caffeine">caffeine</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BXZU7InFVIV/" target="_blank" key="midastouch">The Midas Touch</UnderlinedLink>, 'colored pencil'],
    [<UnderlinedLink href="https://www.instagram.com/p/BXE2J7Tjs2M/" target="_blank" key="fwtsb">F-WTSB</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://www.instagram.com/p/BW7u5rQDsOf/" target="_blank" key="chooseyourweapon">Choose Your Weapon</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BWnJrWDDaq7/" target="_blank" key="usairwaysflight1549">US Airways Flight 1549</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BWNgDkBj4vV/" target="_blank" key="collision">Collision</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BWIRr7ODNP-/" target="_blank" key="pickup">Pickup</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BV9kK7nFx99/" target="_blank" key="shenzhen">Shenzhen</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BVlX82sl_GI/" target="_blank" key="vpnapp">VPN app concept</UnderlinedLink>, 'UI design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BVC6r6kj728/" target="_blank" key="ripiphone">R.I.P. iPhone</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BUu_BKajtYT/" target="_blank" key="mclarenf1p1">McLaren F1 &amp; P1</UnderlinedLink>, 'digital illustration'],
    [<UnderlinedLink href="https://www.instagram.com/p/BUfzHh9jxFy/" target="_blank" key="lightandthebohrmodel">Light and the Bohr Model cover</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BTr4ZMhjvdD/" target="_blank" key="r2d2">R2D2</UnderlinedLink>, 'graphite'],
    [<UnderlinedLink href="https://www.instagram.com/p/BTdE_C0jDlx/" target="_blank" key="romanaqueducts">Roman Aqueducts cover</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BTK88_PDOXg/" target="_blank" key="teenchangewebsite">Teen Change website</UnderlinedLink>, 'web design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BS9rPFTlWUT/" target="_blank" key="swampcatslogo">Swampcats logo</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BS6Y5REl3Dd/" target="_blank" key="nikolapxlogo">nikolapx logo</UnderlinedLink>, 'graphic design'],
    [<UnderlinedLink href="https://www.instagram.com/p/BRJuiv_jpwZ/" target="_blank" key="lander">Lander</UnderlinedLink>, 'charcoal'],
    [<UnderlinedLink href="https://www.instagram.com/p/BRE7zW9D3c4/" target="_blank" key="246">246</UnderlinedLink>, 'graphic design'],
]

export default function Archive() {
    return (
        <>
            <Head>
                <title>Archive | Richard Fu</title>
                <meta
                    name="description"
                    content="A mostly complete index of my past projects going back to 2017. "
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/archive-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading="Archive" id="archive">
            <Section sections={sections} index={0} first>
                    <ScrollContainer horizontal>
                        <Table tableData={archive2024} caption="2024 Archive" indexed="reverse" />
                    </ScrollContainer>
                </Section>

                <Section sections={sections} index={1}>
                    <ScrollContainer horizontal>
                        <Table tableData={archive2023} caption="2023 Archive" indexed="reverse" />
                    </ScrollContainer>
                </Section>

                <Section sections={sections} index={2}>
                    <ScrollContainer horizontal>
                        <Table tableData={archive2022} caption="2022 Archive" indexed="reverse" />
                    </ScrollContainer>
                </Section>

                <Section sections={sections} index={3}>
                    <ScrollContainer horizontal>
                        <Table tableData={archive2021} caption="2021 Archive" indexed="reverse" />
                    </ScrollContainer>
                </Section>

                <Section sections={sections} index={4}>
                    <ScrollContainer horizontal>
                        <Table tableData={archive2020} caption="2020 Archive" indexed="reverse" />
                    </ScrollContainer>
                </Section>

                <Section sections={sections} index={5}>
                    <ScrollContainer horizontal>
                        <Table tableData={archive2019} caption="2019 Archive" indexed="reverse" />
                    </ScrollContainer>
                </Section>

                <Section sections={sections} index={6}>
                    <ScrollContainer horizontal>
                        <Table tableData={archive2018} caption="2018 Archive" indexed="reverse" />
                    </ScrollContainer>
                </Section>

                <Section sections={sections} index={7}>
                    <ScrollContainer horizontal>
                        <Table tableData={archive2017} caption="2017 Archive" indexed="reverse" />
                    </ScrollContainer>
                </Section>
            </Layout>
        </>
    )
}