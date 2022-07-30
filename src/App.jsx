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
import { userSettings } from './context/Settings'

function App() {
    const { changeSetting } = useSettings()

    useEffect(() => {
        // initialize user settings
        userSettings.forEach((setting) => {
            localStorage.getItem(setting.name) ? changeSetting(setting.name, localStorage.getItem(setting.name)) : changeSetting(setting.name, setting.default)
        })
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
