import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import UpperNavbar from '../components/Navbar/UpperNavbar'
import Main from '../components/Main'
import Hero from '../components/Hero/Hero'

function Home() {
  return (
    <div className='w-[100vw]'>

      <Hero />
      <Main />
    </div>
  )
}

export default Home
