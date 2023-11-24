import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Shop from './components/Shop';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import All from './components/Shop/All';
import Services from './components/Shop/Services';
import Websites from './components/Shop/Websites';


function App() {
  return (
    <>
    
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/products" element={<All />}></Route>
          <Route path="/websites" element={<Websites />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
     <Footer/>
      </BrowserRouter>
    </>
  )

}

export default App
