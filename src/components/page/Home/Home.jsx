import React from 'react'
import Categories from './Categories'
import Content from './Content'
import FlashSale from './FlashSale'
import JustForYou from './JustForYou'
import Slider from './Slider'

const Home = () => {
  return (
    <>
      <Slider/>
      <Content/>
      <FlashSale/>
      <Categories/>
      <JustForYou/>
    </>
  )
}

export default Home