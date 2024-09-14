import React from 'react'
import Bannar from './pages/Bannar'
import Gallery from './pages/Gallery'
import ShopByCategory from './pages/ShopByCategory'
import WhyUs from './pages/WhyUs'
import OurClients from './pages/OurClients'

const Home = () => {
  return (
    <div>
      <Bannar />
      <Gallery />
      <ShopByCategory />
      <WhyUs />
      <OurClients />
    </div>
  )
}

export default Home