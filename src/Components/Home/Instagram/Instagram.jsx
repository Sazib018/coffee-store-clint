import React from 'react';

const Instagram = () => {
    return (
        <div className="text-center max-w-[1248px] mx-auto py-12">
      {/* Title */}
      <p className="text-xl  text-[#1B1A1A] fontRailway">Follow Us Now</p>
     <h1 className='text-[#331A15] text-[55px] font-normal'>Follow on Instagram</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 mt-6">
        {/* Image 1 */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://i.ibb.co.com/7dphCmFr/Rectangle-9.png"
            alt="Coffee 1"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        {/* Image 2 */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://i.ibb.co.com/qwY91F6/Rectangle-10.png"
            alt="Coffee 2"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        {/* Image 3 */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://i.ibb.co.com/PGhtrF9Y/Rectangle-11.png"
            alt="Coffee 3"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        {/* Image 4 */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://i.ibb.co.com/cXcWh6VS/Rectangle-12.png"
            alt="Coffee 4"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        {/* Image 5 */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://i.ibb.co.com/dwj3hwkS/Rectangle-13.png"
            alt="Coffee 5"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        {/* Image 6 */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://i.ibb.co.com/G4pWvRP5/Rectangle-14.png"
            alt="Coffee 6"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        {/* Image 7 */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://i.ibb.co.com/S75wrs8M/Rectangle-15.png"
            alt="Coffee 7"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        {/* Image 8 */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://i.ibb.co.com/jPFqqynp/Rectangle-16.png"
            alt="Coffee 8"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
    );
};

export default Instagram;