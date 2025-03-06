import React from 'react'
import { SignatureBlends } from '../constants'

const signatureblends = () => {
  return (
    <section className='max-container'>

      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[47px] font-lexend text-center text-primary">Discover Our Signature Blends</h1>
        <p className="text-[16px] font-figtree max-w-[750px] mt-6 text-center text-lighterBrown">Indulge in our carefully curated selection of specialty coffee blends, 
          expertly roasted to perfection. Savor the rich flavors and delicate nuances of each cup, 
          crafted with meticulous attention to detail
        </p>
      </div>

      <div className="flex flex-row justify-between gap-7 mt-[100px]">
      {SignatureBlends.map((blend, i) => (

        <div key={i}>
          <img src={blend.image} alt={blend.text} />
          <p className="mt-4 font-figtree text-[16px] text-lighterBrown">{blend.text}</p>
        </div>

      ))}
      </div>




    </section>
  )
}

export default signatureblends
