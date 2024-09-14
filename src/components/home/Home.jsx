import React from 'react'
import Bannar from './pages/Bannar'
import Gallery from './pages/Gallery'
import ShopByCategory from './pages/ShopByCategory'
import WhyUs from './pages/WhyUs'

const Home = () => {
  return (
    <div>
      <Bannar />
      <Gallery />
      <ShopByCategory />
      <WhyUs />
    </div>
  )
}

export default Home