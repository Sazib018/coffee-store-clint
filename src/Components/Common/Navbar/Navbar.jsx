import React from 'react';

const Navbar = () => {
    return (
        <nav className="px-5 pt-5 flex justify-between md:justify-around items-center relative shadow pb-4 bg-[#331A15] text-white">
       <div></div>
  
        <div className="hidden md:flex space-x-6">
          <a className="hover:text-bluegreen fontRailway text-xl font-medium hover:underline" href="/">Home</a>
          <a className="hover:text-bluegreen fontRailway text-xl font-medium hover:underline" href="/services">Products</a>
          <a className="hover:text-bluegreen fontRailway text-xl font-medium hover:underline" href="/project">Project</a>
          <a className="hover:text-bluegreen fontRailway text-xl font-medium hover:underline" href="/about-us">About us</a>
        </div>
  
        <div>
          
        </div>
      </nav>
    );
};

export default Navbar;