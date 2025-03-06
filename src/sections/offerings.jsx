import React from 'react'
import { SeasonalOfferings } from '../constants'

const offerings = () => {
  return (
    <section className="max-container">

      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[47px] font-lexend text-center text-primary">Our Seasonal Offerings</h1>
        <p className="text-[16px] font-figtree max-w-[600px] mt-6 text-center text-lighterBrown">
          Explore our ever-evolving selection of seasonal specialty blends and limited-time pastries. 
          Indulge in the flavors of the moment, crafted with the freshest ingredients and inspired by the changing seasons
        </p>
      </div>

      <div className="flex flex-row justify-between items-center mt-10">
      {SeasonalOfferings.map((offering, i) => (

        <div key={i} className="flex flex-col justify-center items-center">
          <img src={offering.image} alt={offering.id} className="h-[62px] w-[62px]"/>
          <p className="mt-4 font-figtree text-[20px] text-lighterBrown text-center">{offering.title}</p>
          <p className="mt-4 font-figtree text-[16px] text-lighterBrown max-w-[300px] text-center">{offering.content}</p>
        </div>

      ))}
      </div>


    </section>
  )
}

export default offerings
