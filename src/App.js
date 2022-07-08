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
import Archive from './pages/Archive';

// === ROUTES =============================
export const routes = [
    // main pages (<Navbar /> only show first 4 objects)
    {path: '/', element: () => <Home />, title: 'Home'},
    {path: '/projects', element: () => <Projects />, title: 'Projects'},
    {path: '/about', element: () => <About />, title: 'About'},
    {path: '/info', element: () => <Info />, title: 'Info'},

    // secondary pages
    {path: '/projects/archive', element: () => <Archive />, title: 'Archive'},
]

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element()} />
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
