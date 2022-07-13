// === IMPORTS ============================
// React
import { BrowserRouter } from 'react-router-dom'
// Sass
import './App.scss'
// components
import Navbar from './components/Navbar'
import A11yMenu from './components/A11yMenu'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
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
