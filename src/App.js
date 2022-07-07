// === IMPORTS ============================
// React
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Sass
import './App.scss';
// pages
import Home from './pages/Home';
// components
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import About from './pages/About';
import Info from './pages/Info';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/info" element={<Info />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
