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
import RichardfxrThumb from '../public/images/richardfxr/richardfxr-thumbnail.jpg'
import BudgettyThumb from '../public/images/Budgetty/Budgetty-thumbnail.jpg'
import EggHolderThumb from '../public/images/EggHolders/EggHolders-thumbnail.jpg'
import PFrameThumb from '../public/images/PFrame/PFrame-thumbnail.jpg'
import Exploded1200DThumb from '../public/images/Exploded1200D/Exploded1200D-thumbnail.jpg'
import RISDSophomoreThumb from '../public/images/RISDSophomore/RISDSophomore-thumbnail.jpg'



// === ROUTES =============================
export const routes = [
    // main pages (<Navbar /> only show first 4 objects)
    {path: '/', title: 'Home'},
    {path: '/projects', title: 'Projects'},
    {path: '/about', title: 'About'},
    {path: '/info', title: 'Info'},
    {path: '/settings', title: 'Settings'},

    // secondary pages
    {path: '/projects/archive', title: 'Archive'},
    {path: '/about/resume', title: 'Résumé'},
]

// === PROJECTS ===========================
export const projects = [
    {
        path: '/projects/richardfxr',
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
        media: ['web design', 'development'],
        cardLabels: ['web design', 'dev'],
        code: <UnderlinedLink styling="em" href="https://github.com/richardfxr/richardfxr" target="_blank" key="richardfxr-github">GitHub repository</UnderlinedLink>,
    },
    {
        path: '/projects/budgetty',
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
        cardLabels: ['UI design', 'product design'],
        collaborators: [
            <UnderlinedLink styling="em" href="https://www.eduardozmautner.com/" target="_blank" key="eduardo">Eduardo Zanforlin Mautner</UnderlinedLink>,
            'Leo Baek',
            'Sanghyuk Seo',
            'Sean Lee',
        ],
    },
    {
        path: '/projects/eggholders',
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
        cardLabels: ['product design', 'photgraphy', 'RISD'],
        labels: ['Rhode Island School of Design'],
    },
    {
        path: '/projects/pframe',
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
        path: '/projects/exploded1200d',
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
        path: '/projects/RISDsophomore',
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