import React, { useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

const Coffee_Details = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

  const data = useLoaderData();
  console.log(data);
  

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-6 py-16 space-y-10">
        {/* Back to home link */}
        <Link to="/" className="flex items-center gap-3 ">
          <IoMdArrowBack className="text-2xl" />
          <span className="text-4xl font-normal text-[#374151]">
            Back to home
          </span>
        </Link>

        {/* Coffee Details Section */}
        <div className="bg-[#F4F3F0] py-16 px-3 text-center lg:text-left lg:px-28 rounded grid grid-cols-1 md:grid-cols-2 gap-5 mx-2">
          {/* Coffee Image */}
          <div className="flex items-center">
            <img
              src={data?.photo_url}
              alt={data?.name}
              className="mx-auto rounded-lg w-96"
            />
          </div>

          {/* Coffee Information */}
          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-4xl  text-[#331A15] font-normal">
              {data?.name}
            </h3>
            <div className=" space-y-2 text-[#5C5B5B] text-xl">
              <p className='fontRailway text-[#5C5B5B]'>
                <span className="font-semibold fontRailway text-[#1B1A1A]">Chef: </span>
                {data?.chef}
              </p>
              <p className='fontRailway text-[#5C5B5B]'>
                <span className="font-semibold fontRailway text-[#1B1A1A]">Supplier: </span>
                {data?.supplier}
              </p>
              <p className='fontRailway text-[#5C5B5B]'>
                <span className="font-semibold fontRailway text-[#1B1A1A]">Taste: </span>
                {data?.taste}
              </p>
              <p className='fontRailway text-[#5C5B5B]'>
                <span className="font-semibold fontRailway text-[#1B1A1A]">Category: </span>
                {data?.category}
              </p>
              <p className='fontRailway text-[#5C5B5B]'>
                <span className="font-semibold fontRailway text-[#1B1A1A]">Details: </span>
                {data?.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee_Details;
