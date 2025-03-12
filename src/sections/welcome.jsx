import React from 'react'
import { Cozy01 } from '../assets'

const Welcome = () => {
  return (
    <section className='max-container'>

      <div className='flex custom:flex-row flex-col items-center justify-around gap-[60px] my-11'>

        <div className='flex flex-col items-start justify-center '>
          <h1 className='sm:text-[47px] text-[36px] font-lexend max-w-[450px] text-primary'>Welcome to Our Cozy Coffee Shop</h1>
          <p className='sm:text-[16px] text-[14px] font-figtree max-w-[470px] mt-6 text-start text-lighterBrown'>Step into our inviting café, where the aroma of freshly brewed coffee and the sight 
            of artisanal pastries create a warm and welcoming atmosphere for coffee lovers
          </p>
          <button type="button" className='custom__button__bevel mt-9 min-w-[160px]'>Explore Menu</button>
        </div>

        <img src={Cozy01} alt='Coffee' className='h-auto w-full max-w-[400px] lg:max-w-[500px] max-h-[400px] custom:max-h-[600px] object-cover'/>


      </div>
      
    </section>
  )
}

export default Welcome
