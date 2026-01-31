import React from 'react'
import { Carousel } from '../components/Carousel'
import { MidBanner } from '../components/MidBanner'
import Footer from '../components/Footer'
import Features from '../components/Features'

function Home() {
  return (
    <>
      <Carousel />
      <MidBanner />
      <Features />
      <Footer />
    </>
  )
}

export default Home