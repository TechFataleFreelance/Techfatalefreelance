import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <h1>Hello World</h1>
    <Link to='/'>Home</Link>
    <br></br>
    <Link to='/services'>Services</Link>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
