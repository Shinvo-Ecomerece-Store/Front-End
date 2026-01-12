import Main from '../components/Main'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Bestsellers from '../components/Bestsellers/Bestsellers'
import ShopBanner from '../components/ShopBanner/ShopBanner'
import PowerYourLife from '../components/PowerYourLife/PowerYourLife'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import Testimonials from '../components/Testimonials/Testimonials'
import Brands from '../components/Brands/Brands'
import Categories from '../components/Categories/Categories'

function Home() {
  return (
    <div className='w-[100vw]'>

      <Hero />
      <Bestsellers />
      <ShopBanner />
      <PowerYourLife />
      <NewArrivals />
      <Testimonials />
      <Features />
      <Categories />
      <Brands />
      <Main />
    </div>
  )
}

export default Home
