import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'

const Page = () => {
  return (
   
    <div className="flex flex-col min-h-screen ">
      

     <Navbar />
      <div className="flex-grow">
        <Home />
      </div>
      
      <Footer />
    </div>
  )
}

export default Page
