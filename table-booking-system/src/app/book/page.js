'use client'
import React from 'react'
import BookingForm from '../components/BookingForm'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div className='min-h-screen flex flex-col bg-indigo-50 p-6  justify-center items-center'>
    
      
      <div className='px-2 py-4'>
        
      <BookingForm/>
      </div>
     
    </div>
  )
}

export default page
