
import { Routes,Route } from 'react-router-dom'

import './App.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Product from './component/pages/Product'
import Services from './component/pages/Services'
import SignUp from './component/pages/SignUp'

function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
      </>
  );
}

export default App;
