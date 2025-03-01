import React, { useEffect } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const UpdateCoffee = () => {
     useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        const handleUpdate = (e) =>{
            e.preventDefault();
        }
        
    return (
        <div>
                   <div className="bg-cover 2xl:bg-[url('https://i.ibb.co.com/Ld6pjvmr/11.png')] xl:bg-[url('https://i.ibb.co.com/Ld6pjvmr/11.png')]   lg:bg-none md:bg-none sm:bg-none">
       
                       <div className="container mx-auto px-3 md:px-6 py-16 space-y-10">
                           <Link to="/" className="flex items-center gap-3">
                               <IoMdArrowBack className="text-2xl" />
                               <span className="text-4xl font-normal text-[#374151]">
                                   Back to home
                               </span>
                           </Link>
                           <div className="bg-[#F4F3F0] py-16 px-5 sm:px-10 lg:px-28 rounded space-y-5">
                               <h3 className=" md:text-5xl text-4xl font-normal text-center">
                                  Update Coffee Details 
                               </h3>
                               <p className="fontRailway font-normal text-[#1B1A1AB2]  md:text-lg text-sm px-1 sm:px-4 lg:px-12 text-center">
                                   It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                               </p>
                               <form onSubmit={handleUpdate}>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                       <label className="form-control">
                                           <div className="label">
                                               <span className="label-text fontRailway font-semibold">
                                                   Name
                                               </span>
                                           </div>
                                           <input type="text" name="name"
                                               placeholder="Enter coffee name"
                                               style={{ outline: "none" }}
                                               className="input fontRailway "
                                               required
                                           />
                                       </label>
                                       <label className="form-control">
                                           <div className="label">
                                               <span className="label-text fontRailway font-semibold">
                                                   Chef
                                               </span>
                                           </div>
                                           <input
                                               type="text"
                                               name="chef"
                                               placeholder="Enter coffee chef"
                                               style={{ outline: "none" }}
                                               className="input fontRailway "
                                               required
                                           />
                                       </label>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                       <label className="form-control">
                                           <div className="label">
                                               <span className="label-text fontRailway font-semibold">
                                                   Supplier
                                               </span>
                                           </div>
                                           <input
                                               type="text"
                                               name="supplier"
                                               placeholder="Enter coffee supplier"
                                               style={{ outline: "none" }}
                                               className="input fontRailway "
                                               required
                                           />
                                       </label>
                                       <label className="form-control">
                                           <div className="label">
                                               <span className="label-text fontRailway font-semibold">
                                                   Taste
                                               </span>
                                           </div>
                                           <input
                                               type="text"
                                               name="taste"
                                               placeholder="Enter coffee taste"
                                               style={{ outline: "none" }}
                                               className="input fontRailway "
                                               required
                                           />
                                       </label>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                       <label className="form-control">
                                           <div className="label">
                                               <span className="label-text fontRailway font-semibold">
                                                   Category
                                               </span>
                                           </div>
                                           <input
                                               type="text"
                                               name="category"
                                               placeholder="Enter coffee category"
                                               style={{ outline: "none" }}
                                               className="input fontRailway "
                                               required
                                           />
                                       </label>
                                       <label className="form-control">
                                           <div className="label">
                                               <span className="label-text fontRailway font-semibold">
                                                   Price
                                               </span>
                                           </div>
                                           <input
                                               type="text"
                                               name="price"
                                               placeholder="Enter coffee price"
                                               style={{ outline: "none" }}
                                               className="input fontRailway "
                                               required
                                           />
                                       </label>
                                   </div>
                                   <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                       <label className="form-control">
                                           <div className="label">
                                               <span className="label-text fontRailway font-semibold">
                                                   Details
                                               </span>
                                           </div>
                                           <input
                                               type="text"
                                               name="details"
                                               placeholder="Enter coffee details"
                                               style={{ outline: "none" }}
                                               className="input fontRailway "
                                               required
                                           />
                                       </label>
                                       <label className="form-control">
                                           <div className="label">
                                               <span className="label-text fontRailway font-semibold">
                                                   Photo
                                               </span>
                                           </div>
                                           <input
                                               type="text"
                                               name="photoUrl"
                                               placeholder="Enter photo URL"
                                               style={{ outline: "none" }}
                                               className="input fontRailway "
                                               required
                                           />
                                       </label>
                                   </div>
                                   <button className="btn btn-block mt-6 border-2 bg-[#D2B48C] text-[#331A15] text-2xl font-normal">
                                      Update Coffee Details
                                   </button>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
    );
};

export default UpdateCoffee;