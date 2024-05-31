import React from 'react'
import Footer from './Footer'
import ExpertCard from './CardType1/ExpertCard.jsx'
import StudioCard from './CardType1/StudioCard.jsx'
import ArchitectureCard from './CardType2/ArchitectureCard'
import Climate from './CardType2/Climate.jsx'
import NewsCard from './CardType2/NewsCard.jsx' 
import Carousel from './Carousel.jsx'
const Home = () => {
  return (
    <> 
      <Carousel/>
      <ArchitectureCard />
      <ExpertCard />
      <Climate />
      <StudioCard />
      <NewsCard />
      <Footer />
    </>
  )
}

export default Home