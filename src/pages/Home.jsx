import Main from '../components/Main'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Brands from '../components/Brands/Brands'

function Home() {
  return (
    <div className='w-[100vw]'>

      <Hero />
      <Features />
      <Brands />
      <Main />
    </div>
  )
}

export default Home
