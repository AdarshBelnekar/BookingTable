import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    
    <Home/>
 
  
    
 
   <Footer /> 
   </div>
  )
}

export default page
