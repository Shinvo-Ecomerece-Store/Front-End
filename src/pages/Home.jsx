import Main from '../components/Main'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Brands from '../components/Brands/Brands'
import Categories from '../components/Categories/Categories'

function Home() {
  return (
    <div className='w-[100vw]'>

      <Hero />
      <Features />
      <Categories />
      <Brands />
      <Main />
    </div>
  )
}

export default Home
