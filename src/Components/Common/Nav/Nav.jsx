import React from "react";

const Nav = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/spwM5QcQ/15.jpg')] bg-cover bg-center text-white py-3 h-[120px] w-full">
      <div className="container mx-auto flex items-center justify-center px-4 md:px-8">
        <img
          src="https://i.ibb.co/5xvvj0Qc/logo1.png"
          alt="Logo"
          className="h-[70px] w-[60px] md:h-[90px] md:w-[75px] object-contain mr-2"
        />
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal text-center">
          Espresso Emporium
        </h1>
      </div>
    </div>
  );
};

export default Nav;
