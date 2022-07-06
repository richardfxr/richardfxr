import './App.scss';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="App">
       <Navbar setCurrentPage={setCurrentPage} />
       <main></main>
    </div>
  );
}

export default App;
