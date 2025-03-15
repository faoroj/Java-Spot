import { useEffect, useState } from 'react';
import { Logo } from '../assets'
import { NavLinks } from '../constants'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   if (isMobileMenuOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = '';
  //   }

  //   return () => {
  //     document.body.style.overflow = '';
  //   };
  // }, [isMobileMenuOpen]);


  return (
    <section className="w-full h-[84px] absolute z-10 bg-primary flex justify-between items-center">
      <div className="padding-x w-full flex justify-between items-center">

        {/* Logo */}
        <div className="">
          <img src={Logo} alt="JavaSpot" className="w-[120px] h-[40px] xs:h-[48px] xs:w-[166px]" />
        </div>

        {/* Navigation Links */}
        <div className="">
          <ul className="list-none sm:flex hidden flex-row space-x-8 text-lightBrown font-figtree text-[16px] cursor-pointer">
            {NavLinks.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>

          {/* Hamburger Icon - Visible on Small Screens */}
          <button
            className="sm:hidden block"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <GiHamburgerMenu className='text-2xl xs:text-3xl' color='white'/>

          </button>

      </div>
    </section>
  );
};

export default Navbar;
