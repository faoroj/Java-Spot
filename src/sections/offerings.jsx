import React from 'react'
import { SeasonalOfferings } from '../constants'

const offerings = () => {
  return (
    <section className="max-container">

      <div className="flex justify-center items-center flex-col">
        <h1 className="sm:text-[47px] text-[36px] font-lexend text-center text-primary">Our Seasonal Offerings</h1>
        <p className="sm:text-[16px] text-[14px] font-figtree max-w-[600px] mt-6 text-center text-lighterBrown">
          Explore our ever-evolving selection of seasonal specialty blends and limited-time pastries. 
          Indulge in the flavors of the moment, crafted with the freshest ingredients and inspired by the changing seasons
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 ss:grid-cols-1 grid-cols-1 place-items-center gap-7 mt-[60px]">
      {SeasonalOfferings.map((offering, i) => (

        <div key={i} className="flex flex-col justify-center items-center">
          <img src={offering.image} alt={offering.id} className="h-[62px] w-[62px]"/>
          <p className="mt-4 font-figtree text-[20px] text-lighterBrown text-center">{offering.title}</p>
          <p className="mt-4 font-figtree sm:text-[16px] text-[14px] text-lighterBrown max-w-[300px] text-center">{offering.content}</p>
        </div>

      ))}
      </div>


    </section>
  )
}

export default offerings
