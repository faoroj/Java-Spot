import React from 'react'
import { Hero } from '../assets'

const hero = () => {
  return (
    <section className="relative w-full h-screen">

      <img 
        src={Hero} 
        alt="JavaSpot Hero Image" 
        className='flex-shrink-0 self-stretch w-full h-screen object-cover'
      />

      <div className='absolute inset-0 padding-x flex flex-col justify-center items-start '>
        <h1 className="md:text-[120px] sm:text-[100px] xs:text-[80px] text-[60px] font-lexend text-white md:max-w-[700px] max-w-[600px] leading-[120%]">Welcome to Java Spot</h1>
         <p className="md:text-[20px] sm:text-[17px] xs:text-[16px] text-[14px] font-figtree text-white md:max-w-[700px] max-w-[550px] my-4">Step into our inviting café, where the aroma of freshly brewed coffee and the sight of 
          artisanal pastries create a warm and welcoming atmosphere for coffee lovers
        </p>
        <button type="button" className='custom__button__bevel mt-4'>Explore</button> 
      </div>

    </section>
  )
}

export default hero
