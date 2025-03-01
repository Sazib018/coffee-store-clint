import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdRemoveRedEye, MdEdit, MdDelete } from 'react-icons/md';
import { RiCupLine } from 'react-icons/ri';
import Swal from 'sweetalert2';

const Propuler_Product = () => {

    const [coffeeData, setCoffeeData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/coffee')
            .then(res => res.json())
            .then(data => setCoffeeData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            const updatedCoffeeData = coffeeData.filter(coffee => coffee._id !== id)
                            setCoffeeData(updatedCoffeeData)
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }



    return (
        <div className="bg-cover 2xl:bg-[url('https://i.ibb.co.com/j0J5JcS/1.png')] xl:bg-[url('https://i.ibb.co.com/j0J5JcS/1.png')]   lg:bg-none md:bg-none sm:bg-none">
            <div className="text-center pb-10 md:mt-[120px] mt-16 max-w-[1320px] mx-auto">
                <p className="fontRailway font-normal text-xl text-[#1B1A1A] mb-2">
                    --- Sip & Savor ---
                </p>
                <h3 className="text-[#331A15] md:text-[55px] text-4xl font-normal md:mb-4 mb-2">
                    Our Popular Products
                </h3>
                <Link
                    to="/add_new_coffee"
                    className="btn rounded-none mt-4 mb-12 border-2 border-[#331A15] hover:text-black bg-[#E3B577] hover:bg-[#e3b477ef] text-2xl font-normal" >
                    <span className="text-white ">Add Coffee</span>
                    <RiCupLine className="text-chocolate" />
                </Link>

                <div className='grid grid-cols-2 gap-6'>
                    {
                        coffeeData?.map((coffee, index) => (
                            <div key={index} className="bg-[#F5F4F1] p-8 flex gap-3 flex-col sm:flex-row items-center rounded-md">
                                <div>
                                    <img src={coffee.photo_url} alt={coffee.name} className="max-w-44" />
                                </div>
                                <div className="flex-grow text-xl text-start text-[#5C5B5B] space-y-2">
                                    <p className='fontRailway'>
                                        <span className="font-semibold text-[#1B1A1A] fontRailway ">Name:</span> {coffee.name}
                                    </p>
                                    <p className='fontRailway'>
                                        <span className="font-semibold text-[#1B1A1A] fontRailway ">Chef:</span> {coffee.chef}
                                    </p>
                                    <p className='fontRailway'>
                                        <span className="font-semibold text-[#1B1A1A] fontRailway ">Price:</span> {coffee.price} Taka
                                    </p>
                                </div>
                                <div className="flex gap-4 sm:flex-col">
                                    <Link
                                        to={`/coffee/${coffee._id}`}
                                        className="bg-[#D2B48C] w-10 h-10 flex justify-center items-center text-white rounded">
                                        <MdRemoveRedEye size={25} />
                                    </Link>
                                    <Link
                                        to={`/update_coffee/${coffee._id}`}
                                        className="bg-[#3C393B] w-10 h-10 flex justify-center items-center text-white rounded">
                                        <MdEdit size={25} />
                                    </Link>
                                    <button onClick={() => handelDelete(coffee._id)} className="bg-[#EA4744] w-10 h-10 flex justify-center items-center text-white rounded active:scale-95 transition-all">
                                        <MdDelete size={25} />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Propuler_Product;