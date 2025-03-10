import React from 'react'
import { SignatureBlends } from '../constants'

const signatureblends = () => {
  return (
    <section className='max-container'>

      <div className="flex justify-center items-center flex-col">
        <h1 className="sm:text-[47px] text-[36px] font-lexend text-center text-primary">Discover Our Signature Blends</h1>
        <p className="sm:text-[16px] text-[14px] font-figtree max-w-[750px] mt-6 text-center text-lighterBrown">Indulge in our carefully curated selection of specialty coffee blends, 
          expertly roasted to perfection. Savor the rich flavors and delicate nuances of each cup, 
          crafted with meticulous attention to detail
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 ss:grid-cols-1 grid-cols-1 gap-7 sm:mt-[70px] mt-[50px] place-items-center">
      {SignatureBlends.map((blend, i) => (

        <div key={i}>
          <img src={blend.image} alt={blend.text} className='h-auto w-full sm:max-w-[398px] max-h-[421px] object-contain' />
          <p className="mt-4 font-figtree text-[16px] text-lighterBrown">{blend.text}</p>
        </div>

      ))}
      </div>




    </section>
  )
}

export default signatureblends
