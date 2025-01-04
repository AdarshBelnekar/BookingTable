'use client'


import { useRouter } from 'next/navigation'
import React from 'react'
import About from './About'
import ContactForm from './ContactForm'

const Home = () => {
    const router = useRouter()
  return (
    <div>
        
      <section className='py-4 h-screen bg-cover bg-center bg-indigo-50'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div className='space-y-4'>
        <div className="max-w-lg md:max-w-none space-y-4">
          <h2 className="text-2xl font-semibold text-black sm:text-3xl transition-transform duration-300 ease-in-out hover:scale-105 ">
           <span className='text-5xl text-indigo-500'>Reserve now </span><br></br>for a Memorable Dining Experience!
          </h2>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
            sequi.
          </p>
        </div>
        <button 
         type="button" onClick={() => router.push('/book')}
        className='bg-black text-white px-6 py-4  rounded-md hover:bg-indigo-600 transition-all ease-in-out w-full sm:w-auto'> Book Now</button>

      </div>

      <div>
        <img
          src="./about2.png"
          className="rounded transition-transform duration-300 ease-in-out hover:scale-105 "
          alt=""
        />
      </div>
    </div>
  </div>
</section>
<section id="about">
    <About/>
</section >
<section id="con" className='w-ful bg-indigo-50'>
    <ContactForm/>
</section>




    </div>
  )
}

export default Home
