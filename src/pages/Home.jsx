import React from 'react'
import PaginaInicio from '../components/PaginaInicio.jsx'
import Footer from '../components/Footer.jsx'
import Navi from '../components/Navi.jsx'

function Home() {
  return (
    <div>
      <Navi />
      <PaginaInicio />
      <Footer />
    </div>
  )
}

export default Home
