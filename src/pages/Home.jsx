import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import UpperNavbar from '../components/Navbar/UpperNavbar'
import Hero from '../components/hero'
import Main from '../components/Main'

function Home() {
  return (
    <div className='w-[100vw]'>

      <Hero />
      <Main />
    </div>
  )
}

export default Home
