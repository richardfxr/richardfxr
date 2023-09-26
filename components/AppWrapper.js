// === IMPORTS ============================
// Next
import Head from 'next/head'
// React
import { useState, useEffect } from 'react'
// components
import UnderlinedLink from './UnderlinedLink'
// hooks
import { useMediaQuery} from "../hooks/useMediaQuery"
import { useSettings } from '../hooks/useSettings'
import { userSettings } from '../context/Settings'
// images
import MiniSynthThumb from '../public/images/MiniSynth/MiniSynth-thumbnail.jpg'
import RichardfxrThumb from '../public/images/richardfxr/richardfxr-thumbnail.jpg'
import MachinistsEdgeThumb from '../public/images/MachinistsEdge/MachinistsEdge-thumbnail.jpg'
import WeatherDialThumb from '../public/images/WeatherDial/WeatherDial-thumbnail.jpg'
import BudgettyThumb from '../public/images/Budgetty/Budgetty-thumbnail.jpg'
import EggHolderThumb from '../public/images/EggHolders/EggHolders-thumbnail.jpg'
import PFrameThumb from '../public/images/PFrame/PFrame-thumbnail.jpg'
import Exploded1200DThumb from '../public/images/Exploded1200D/Exploded1200D-thumbnail.jpg'
import RISDSophomoreThumb from '../public/images/RISDSophomore/RISDSophomore-thumbnail.jpg'



// === ROUTES =============================
export const routes = [
    // main pages (<Navbar /> only show first 4 objects)
    {href: '/', title: 'Home'},
    {href: '/projects', title: 'Projects'},
    {href: '/about', title: 'About'},
    {href: '/info', title: 'Info'},
    {href: '/settings', title: 'Settings'},

    // secondary pages
    {href: '/projects/archive', title: 'Archive'},
    {href: '/about/resume', title: 'Résumé'},
]

// === PROJECTS ===========================
export const projects = [
    {
        href: '/projects/mini-synth',
        title: "Mini Synth",
        image: {
            img: MiniSynthThumb,
            layoutId: 'MiniSynth-thumbnail',
            alt: 'Mini Synth playing Marble Machine by Wintergatan on an iPhone 14 Pro. The player resembles a cassette tape with a piano keyboard right below it.'
        },
        date: '2022-04 to 2022-08',
        colors: [
            {hex: '#ff7171', name: 'red'},
            {hex: '#f7f7f7', name: 'white'},
            {hex: '#1d1d1d', name: 'black'},
        ],
        filters: ['design'],
        media: ['UI/UX design', 'development'],
        cardLabels: ['UI/UX design', 'dev'],
        collaborators: [
            <UnderlinedLink styling="em" href="https://www.fanashley.com/" target="_blank" key="ashley">Ashley Fan</UnderlinedLink>,
            <UnderlinedLink styling="em" href="https://www.seansworkroom.com/" target="_blank" key="ashley">Sean Lee</UnderlinedLink>,
        ],
        sponsors: [
            <UnderlinedLink styling="em" href="https://www.samsung.com/us/" target="_blank" key="ashley">Samsung</UnderlinedLink>,
            <UnderlinedLink styling="em" href="https://www.internationaldisabilityalliance.org/stakeholder/korea-international-cooperation-agency-koica" target="_blank" key="ashley">KOIKA</UnderlinedLink>,
            <UnderlinedLink styling="em" href="https://community.needslist.co/ysat" target="_blank" key="ashley">YSAT</UnderlinedLink>,
            <UnderlinedLink styling="em" href="https://www.risd.edu/" target="_blank" key="ashley">RISD</UnderlinedLink>,
            <UnderlinedLink styling="em" href="https://d-lab.mit.edu/" target="_blank" key="ashley">MIT D-Lab</UnderlinedLink>,
        ],
        code: <UnderlinedLink styling="em" href="https://github.com/richardfxr/mini-synth" target="_blank" key="MiniSynth-github">GitHub repository</UnderlinedLink>,
        
    },
    {
        href: '/projects/machinists-edge',
        title: "Machinist's Edge",
        image: {
            img: MachinistsEdgeThumb,
            layoutId: 'MachinistsEdge-thumbnail',
            alt: 'The Feed Rate Calculator page displayed on an Asus ZenBook Duo 14. The primary screen shows an illustration of an end mill next to some form input fields; the second screen shows four saves for different end mills.'
        },
        date: '2022-10 to present',
        colors: [
            {hex: '#fcf6f0', name: 'warm white'},
            {hex: '#0d0d0d', name: 'black'},
        ],
        filters: ['design'],
        media: ['UI/UX design', 'development'],
        cardLabels: ['UI/UX design', 'dev'],
        code: <UnderlinedLink styling="em" href="https://github.com/richardfxr/machinists-edge" target="_blank" key="MachinistsEdge-github">GitHub repository</UnderlinedLink>,
    },
    {
        href: '/projects/weatherdial',
        title: 'Weather Dial',
        image: {
            img: WeatherDialThumb,
            layoutId: 'WeatherDial-thumbnail',
            alt: 'Weather Dial temperature page displayed on an iPhone 14 Pro. A list of navigation icons lines the top, while the main page is filled with an orange circular bar graph that denotes temperature changes throughout the day.'
        },
        date: '2022-09',
        colors: [
            {hex: '#e55b39', name: 'orange'},
            {hex: '#3f4ce8', name: 'royal blue'},
            {hex: '#e2d9d4', name: 'light gray'},
        ],
        filters: ['design'],
        media: ['UI/UX design', 'development'],
        cardLabels: ['UI/UX design', 'dev'],
        code: <UnderlinedLink styling="em" href="https://github.com/richardfxr/weather-dial" target="_blank" key="WeatherDial-github">GitHub repository</UnderlinedLink>,
    },
    {
        href: '/projects/richardfxr',
        title: 'Personal site',
        image: {
            img: RichardfxrThumb,
            layoutId: 'richardfxr-thumbnail',
            alt: 'The home page of richardfxr.com displayed on a floating iPhone 14 Pro in dark mode.'
        },
        date: '2022-08',
        colors: [
            {hex: '#11d3e7', name: 'Richard blue'},
            {hex: '#1a1a1a', name: 'dark gray'},
            {hex: '#ededed', name: 'light gray'},
        ],
        filters: ['design'],
        media: ['UI/UX design', 'development'],
        cardLabels: ['UI/UX design', 'dev'],
        code: <UnderlinedLink styling="em" href="https://github.com/richardfxr/richardfxr" target="_blank" key="richardfxr-github">GitHub repository</UnderlinedLink>,
    },
    {
        href: '/projects/budgetty',
        title: 'Budgetty',
        image: {
            img: BudgettyThumb,
            layoutId: 'Budgetty-thumbnail',
            alt: 'Three white pentagonal electronic devices with circular screens on the top. Each screen is displaying information related to budgeting and spending habits.'
        },
        date: '2022-05',
        colors: [
            {hex: '#ffffff', name: 'white'},
            {hex: '#d5d5d5', name: 'light gray'},
        ],
        filters: ['design'],
        media: ['UI/UX design', 'Product design'],
        cardLabels: ['UI/UX design', 'product design'],
        collaborators: [
            <UnderlinedLink styling="em" href="https://www.eduardozmautner.com/" target="_blank" key="eduardo">Eduardo Zanforlin Mautner</UnderlinedLink>,
            'Leo Baek',
            'Sanghyuk Seo',
            <UnderlinedLink styling="em" href="https://www.seansworkroom.com/" target="_blank" key="ashley">Sean Lee</UnderlinedLink>,
        ],
    },
    {
        href: '/projects/eggholders',
        title: 'EggHolders',
        image: {
            img: EggHolderThumb,
            layoutId: 'EggHolders-thumbnail',
            alt: 'A white cylindrical fin loft model holding up an egg against a bright yellow background.'
        },
        date: '2022-03',
        colors: [
            {hex: '#f8d363', name: 'light mustard'},
            {hex: '#f0eeef', name: 'light grey'} , 
            {hex: '#f09170', name: 'dark salmon'}
        ],
        filters: ['design'],
        media: ['Product design', 'Photography'],
        cardLabels: ['product design', 'photography', 'RISD'],
        labels: ['Rhode Island School of Design'],
    },
    {
        href: '/projects/pframe',
        title: 'P-Frame',
        image: {
            img: PFrameThumb,
            layoutId: 'PFrame-thumbnail',
            alt: 'White headphones with dark gold accents.'
        },
        date: '2022-03',
        colors: [
            {hex: '#ffffff', name: 'white'},
            {hex: '#D3D2D0', name: 'silver'},
            {hex: '#998460', name: 'dark gold'},
        ],
        filters: ['design'],
        media: ['Product design'],
        cardLabels: ['product design', 'CAD', 'RISD'],
        labels: ['Rhode Island School of Design', 'Computer-aided design'],
    },
    {
        href: '/projects/exploded1200d',
        title: 'Exploded 1200D',
        image: {
            img: Exploded1200DThumb,
            layoutId: 'Exploded1200D-thumbnail',
            alt: 'Exploded model of a DSLR camera.'
        },
        date: '2021-10',
        colors: [
            {hex: '#3B7F69', name: 'faded jade'},
            {hex: '#B76F31', name: 'orange'},
            {hex: '#28282A', name: 'black'},
        ],
        filters: ['design', 'others'],
        media: ['Model making'],
        cardLabels: ['model', 'RISD'],
        labels: ['Rhode Island School of Design'],
    },
    {
        href: '/projects/RISDsophomore',
        title: 'RISD Sophomore',
        image: {
            img: RISDSophomoreThumb,
            layoutId: 'RISDSophomore-thumbnail',
            alt: 'A french press model slanted at a 115-degree angle.'
        },
        date: '2021-09 to 2022-05',
        colors: [
            {hex: '#ffffff', name: 'white'},
            {hex: '#9C7441', name: 'pale brown'},
        ],
        filters: ['art', 'design', 'others'],
        media: ['Graphite', 'Product design', 'Woodwork', 'Metalwork'],
        cardLabels: ['product design', 'wood', 'metal', 'RISD'],
        labels: ['Rhode Island School of Design'],
    },
]

// === FUNCTIONS ==========================
function updateThemeColor (colorScheme, contrast, isDark, isHc) {
    let curColorScheme = "light"
    let curContrast = "default"
    let curColor = "#EDEDED"

    if (isDark) {
        if (colorScheme === "auto" || colorScheme === "dark") curColorScheme = "dark"
    } else {
        if (colorScheme === "dark") curColorScheme = "dark"
    }

    if (isHc) {
        if (contrast === "auto" || contrast === "high") curContrast = "high"
    } else {
        if (contrast === "high") curContrast = "high"
    }

    if (curColorScheme ==="light") {
        if (curContrast === "high") curColor = "#FFFFFF"
    } else {
        if (curContrast === "high") curColor = "#000000"
        else curColor = "#1A1A1A"
    }

    return curColor;
}



export default function AppWrapper({ children }) {
    const { colorScheme, contrast, changeSetting } = useSettings()

    const isDark = useMediaQuery('(prefers-color-scheme: dark)')
    const isHc = useMediaQuery('(prefers-contrast: more)')
    const [curColor, setCurColor] = useState("#EDEDED")

    useEffect(() => {
        // initialize user settings
        userSettings.forEach((setting) => {
            localStorage.getItem(setting.name) ? changeSetting(setting.name, localStorage.getItem(setting.name)) : changeSetting(setting.name, setting.default)
        })

        setCurColor(updateThemeColor(colorScheme, contrast, isDark, isHc))
    }, [])

    useEffect(() => {
        setCurColor(updateThemeColor(colorScheme, contrast, isDark, isHc))
    }, [colorScheme, contrast])

    return (
        <>
            <Head>
                <meta name="theme-color" content={curColor} />
            </Head>

            {children}
        </>
    )

}