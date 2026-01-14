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
import shop1 from '../assets/shop1.gif'
import shop2 from '../assets/shop2.gif'

function Home() {
  return (
    <div className='w-[100vw]'>
      <Hero />
      {/* <Features /> */}
      <Categories />
      <Bestsellers />
      <ShopBanner imgageShop={shop1} title="Shop Pixel Cases" />
      <ShopBanner imgageShop={shop2} title="Shop Mobile Holder" />
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
