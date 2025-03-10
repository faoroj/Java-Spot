import React from 'react'
import { Cozy01 } from '../assets'

const Welcome = () => {
  return (
    <section className='max-container'>

      <div className='flex items-center justify-between'>

        <div className='flex flex-col items-start justify-center '>
          <h1 className='sm:text-[47px] text-[36px] font-lexend text-start max-w-[450px] text-primary'>Welcome to Our <br/>Cozy Coffee Shop</h1>
          <p className='sm:text-[16px] text-[14px] font-figtree max-w-[470px] mt-6 text-start text-lighterBrown'>Step into our inviting café, where the aroma of freshly brewed coffee and the sight 
            of artisanal pastries create a warm and welcoming atmosphere for coffee lovers
          </p>
          <button type="button" className='custom__button__bevel mt-9 min-w-[160px]'>Explore Menu</button>
        </div>

        <img src={Cozy01} alt='Coffee'/>


      </div>
      
    </section>
  )
}

export default Welcome
