import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SobreLaCumbre from './pages/SobreLaCumbre'
import Programa from './pages/Programa'
import Inscripcion from './pages/Inscripcion'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-la-cumbre" element={<SobreLaCumbre />} />
        <Route path="/programa" element={<Programa />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
