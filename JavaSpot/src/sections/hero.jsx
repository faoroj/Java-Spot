import React from 'react'
import { Hero } from '../assets'

const hero = () => {
  return (
    <section className="relative w-full h-screen">

      <img 
        src={Hero} 
        alt="JavaSpot Hero Image" 
        className='w-full h-full object-cover'
      />

      <div className='absolute inset-0 padding-x flex flex-col justify-center items-start '>
        <h1 className="text-[120px] font-lexend text-white max-w-[700px] leading-[120%]">Welcome to Java Spot</h1>
        <p className="text-[20px] font-figtree text-white max-w-[700px] my-4">Step into our inviting café, where the aroma of freshly brewed coffee and the sight of 
          artisanal pastries create a warm and welcoming atmosphere for coffee lovers
        </p>
        <button type="button" className='custom__button__bevel mt-4'>Explore</button>
      </div>

    </section>
  )
}

export default hero
