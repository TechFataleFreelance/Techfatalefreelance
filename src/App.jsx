import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Services from './components/Services';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/about" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
