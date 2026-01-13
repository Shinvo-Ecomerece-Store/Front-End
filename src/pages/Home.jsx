import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Bestsellers from '../components/Bestsellers/Bestsellers'
import ShopBanner from '../components/ShopBanner/ShopBanner'
import PowerYourLife from '../components/PowerYourLife/PowerYourLife'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import Testimonials from '../components/Testimonials/Testimonials'
import Trust from '../components/Trust/Trust'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import Footer from '../components/Footer/Footer'
import Brands from '../components/Brands/Brands'
import Categories from '../components/Categories/Categories'

function Home() {
  return (
    <div className='w-[100vw]'>
      <Hero />
      <Features />
      <Categories />
      <Bestsellers />
      <ShopBanner />
      <PowerYourLife />
      <Brands />
      <NewArrivals />
      <Testimonials />
      <Trust />
      <ContactInfo />

      <Footer />
    </div>
  )
}

export default Home
