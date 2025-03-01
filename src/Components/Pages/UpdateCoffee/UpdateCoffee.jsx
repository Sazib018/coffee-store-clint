import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UpdateCoffee = () => {
     useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        const handleUpdate = (e) =>{
            e.preventDefault();
        }
        
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

        <div className="bg-[#F4F3F0] rounded-lg shadow-lg p-28 max-w-[1320px]">
            {/* Back to Home */}
            <Link to="/" className="text-gray-600 hover:text-black flex items-center mb-4">
                ← <span className="ml-1 text-3xl text-[#374151] font-semibold">Back to home</span>
            </Link>

            {/* Title */}
            <h2 className="text-[45px] font-normal text-center text-[#374151] mb-2">Update Existing Coffee Details</h2>
            <p className="text-center fontRailway px-48 text-[#1B1A1AB2] mb-6">
            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
            </p>

            {/* Form */}
            <form onSubmit={handleUpdate}  className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block fontRailway text-gray-700">Name</label>
                    <input type="text" required placeholder="Enter coffee name" className="input w-full fontRailway border border-[#E3B577] rounded-md" />
                </div>
                <div>
                    <label className="block fontRailway text-gray-700">Chef</label>
                    <input type="text" required placeholder="Enter coffee chef" className="input w-full fontRailway border border-[#E3B577] rounded-md" />
                </div>
                <div>
                    <label className="block fontRailway text-gray-700">Supplier</label>
                    <input type="text" required placeholder="Enter coffee supplier" className="input w-full fontRailway border border-[#E3B577] rounded-md" />
                </div>
                <div>
                    <label className="block fontRailway text-gray-700">Taste</label>
                    <input type="text" required placeholder="Enter coffee taste" className="input w-full fontRailway border border-[#E3B577] rounded-md" />
                </div>
                <div>
                    <label className="block fontRailway text-gray-700">Category</label>
                    <input type="text" required placeholder="Enter coffee category" className="input w-full fontRailway border border-[#E3B577] rounded-md" />
                </div>
                <div>
                    <label className="block fontRailway text-gray-700">Details</label>
                    <input type="text" required placeholder="Enter coffee details" className="input w-full fontRailway border border-[#E3B577] rounded-md" />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block fontRailway text-gray-700">Photo</label>
                    <input type="text" required placeholder="Enter photo URL" className="input w-full fontRailway border border-[#E3B577] rounded-md" />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 flex justify-center">
                    <button  className="bg-[#c49a6c] w-full text-[#331A15] px-6 py-2 rounded-md hover:bg-[#a67c52] transition">
                    Update Coffee Details
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdateCoffee;