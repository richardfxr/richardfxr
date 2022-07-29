// === IMPORTS ============================
// React
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
// Sass
import './App.scss'
// components
import Navbar from './components/Navbar'
import A11yMenu from './components/A11yMenu'
import AnimatedRoutes from './components/AnimatedRoutes'
// hooks
import { useSettings } from './hooks/useSettings'

function App() {
    const { changeSetting } = useSettings()

    useEffect(() => {
        // initialize user settings
        localStorage.getItem('colorScheme') ? changeSetting('colorScheme', localStorage.getItem('colorScheme')) : changeSetting('colorScheme', 'auto')
        localStorage.getItem('contrast') ? changeSetting('contrast', localStorage.getItem('contrast')) : changeSetting('contrast', 'auto')
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <A11yMenu />
                <Navbar />
                
                <AnimatedRoutes />
            </BrowserRouter>
        </div>
    )
}

export default App
