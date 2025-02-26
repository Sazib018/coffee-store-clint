import React from "react";

const Banner = () => {
  return (
    <div
      className="hero md:min-h-screen md:py-0 py-14 text-center sm:text-left bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/V0RRWD16/3.png')",
      }}
    >
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 text-white">
        <div className="hidden md:block select-none"></div>
        <div className="px-4 md:px-0">
          <h1 className="mb-5 text-3xl md:text-4xl xl:text-5xl 2xl:text-[55px] font-bold leading-tight">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="md:leading-[30px] mb-5 font-normal fontRailway text-sm md:text-base">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] px-6 py-2 md:px-[22px] md:py-[9px] text-lg md:text-2xl font-medium text-[#242222] hover:bg-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
