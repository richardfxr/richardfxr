// === IMPORTS ============================
// React
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// Sass
import './App.scss';
// pages
import Home from './pages/Home';
// components
import Navbar from './components/Navbar';

function App() {
    const [currentPage, setCurrentPage] = useState('home')

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar setCurrentPage={setCurrentPage} />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
