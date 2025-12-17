import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'
import User from './pages/User.jsx'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>

    </>
  )
}

export default App
