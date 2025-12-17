import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar.jsx'
import { lazy, Suspense } from 'react'

import Home from './page/Home.jsx'
const About = lazy(() => import("./page/About.jsx"))
const Contact = lazy(() => import("./page/Contact.jsx"))

function App() {

  return (
    <>
      <Navbar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense >

    </>
  )
}

export default App
