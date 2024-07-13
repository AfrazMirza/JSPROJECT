import React from 'react'
import TopStrip from '../components/TopStrip'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Gridsection from '../components/Gridsection'
import Features from '../components/Features'
import FitGuide from '../components/FitGuide'
import EmailSubscribtions from '../components/EmailSubscribtions'
import Footer from '../components/Footer'
import footerColumns from '../components/footerColumns'


const Home = () => {
   
  return (
    <div>
      
        <TopStrip/>
        <Navbar/>
        <EmailSubscribtions/>
        <Hero/>
        <Banner/>
        <Gridsection/>
        <FitGuide/>
        <Features/>
        <Footer/>
        <footerColumns/>
    </div>
  )
}

export default Home