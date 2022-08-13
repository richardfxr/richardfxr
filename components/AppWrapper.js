// === IMPORTS ============================
// React
import { useEffect } from 'react'
// Framer Motion
import { AnimatePresence } from "framer-motion"
// components
import UnderlinedLink from './UnderlinedLink'
// hooks
import { useSettings } from '../hooks/useSettings'
import { userSettings } from '../context/Settings'



// === ROUTES =============================
export const routes = [
    // main pages (<Navbar /> only show first 4 objects)
    {path: '/', title: 'Home'},
    {path: '/projects', title: 'Projects'},
    {path: '/about', title: 'About'},
    {path: '/info', title: 'Info'},
    {path: '/settings', title: 'Settings'},

    // secondary pages
    {path: '/projects/archive',title: 'Archive'},
]

// === PROJECTS ===========================
export const projects = [
    {
        path: '/projects/budgetty',
        title: 'Budgetty',
        image: {folder: 'Budgetty', fileName: 'Budgetty-thumbnail', alt: 'Three white pentagonal electronic devices with circular screens on the top. Each screen is displaying information related to budgeting and spending habits.'},
        date: '2022-05',
        colors: [
            {hex: '#ffffff', name: 'white'},
            {hex: '#d5d5d5', name: 'light gray'},
        ],
        filters: ['design'],
        media: ['UI/UX design', 'Product design'],
        cardLabels: ['UI design', 'product design'],
        collaborators: [
            <UnderlinedLink styling="em" href="https://www.eduardozmautner.com/" target="_blank">Eduardo Zanforlin Mautner</UnderlinedLink>,
            'Leo Baek',
            'Sanghyuk Seo',
            'Sean Lee',
        ],
    },
    {
        path: '/projects/eggholders',
        title: 'EggHolders',
        image: {folder: 'EggHolders', fileName: 'EggHolders-thumbnail', alt: 'A white cylindrical fin loft model holding up an egg against a bright yellow background.'},
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
        image: {folder: 'PFrame', fileName: 'PFrame-thumbnail', alt: 'White headphones with dark gold accents.'},
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
        image: {folder: 'Exploded1200D', fileName: 'Exploded1200D-thumbnail', alt: 'Exploded model of a DSLR camera.'},
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
        image: {folder: 'RISDSophomore', fileName: 'RISDSophomore-thumbnail', alt: 'A french press model slanted at a 115-degree angle.'},
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



export default function AppWrapper({ children }) {
    const { changeSetting } = useSettings()

    useEffect(() => {
        // initialize user settings
        userSettings.forEach((setting) => {
            localStorage.getItem(setting.name) ? changeSetting(setting.name, localStorage.getItem(setting.name)) : changeSetting(setting.name, setting.default)
        })
    }, [])

    return <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>

}