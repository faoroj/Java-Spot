import React from 'react'

const experiences = () => {
  return (
    <section className ="max-container">
      
      <div className="flex justify-center flex-col items-center">
        <h1 className="sm:text-[47px] text-[36px] font-lexend text-center text-white">Exclusive Experiences</h1>
        <p className="sm:text-[16px] text-[14px] font-figtree max-w-[700px] mt-2 text-center text-[#D9CEC3]">
          Unlock exclusive benefits and enjoy special events as part of our loyalty program. 
          Earn rewards with every purchase and indulge in exclusive discounts, sneak peeks, 
          and curated experiences tailored to our most valued customers
        </p>
        <button type="button" className='custom__button__bevel mt-9 min-w-[160px]'>Join Loyalty Program</button>
      </div>
      
    </section>
  )
}

export default experiences
