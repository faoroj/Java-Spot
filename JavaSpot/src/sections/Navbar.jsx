import React from 'react'
import { Logo } from '../assets'
import { NavLinks } from '../constants'

const Navbar = () => {
  return (
    <section className="w-full h-[84px] absolute z-10 bg-primary flex justify-between items-center">
      <div className="padding-x w-full flex justify-between items-center">

        {/* Logo */}
        <div className="">
          <img src={Logo} alt="JavaSpot" className="w-[166px] h-[48px]" />
        </div>

        {/* Navigation Links */}
        <div className="">
          <ul className="list-none flex flex-row space-x-8 text-lightBrown font-figtree text-[16px]">
            {NavLinks.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Navbar;
