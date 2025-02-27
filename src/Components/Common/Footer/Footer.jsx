import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';



const Footer = () => {
    return (
        <footer>
            <div
                className="md:py-16 py-7 text-chocolate"
                style={{
                    backgroundImage: "url(https://i.ibb.co/MxGQRvLF/13.jpg)",
                }}
            >
                <div className="container mx-auto px-3 md:px-6">
                    <img
                        src="https://i.ibb.co/5xvvj0Qc/logo1.png"
                        alt="logo"
                        className="w-[75px] mx-auto md:mx-0"
                    />
                </div>
                <div className="container mx-auto px-3 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
                    <div className="space-y-4">
                        <h2 className="text-[#331A15] text-[45px] md:mt-6 font-normal">
                            Espresso Emporium
                        </h2>
                        <p className="railwayFont font-normal 2xl:text-xl text-[#1B1A1A] md:mt-8 md:pb-4 md:pr-6">
                            Always ready to be your friend. Come & Contact with
                            us to share your memorable moments, to share with
                            your best companion.
                        </p>
                        <div className="flex gap-2 justify-center md:justify-start">
                            <FaFacebook size={40} className="text-[#331A15]" />
                            <FaTwitter size={40} className="text-[#331A15]" />
                            <FaInstagram size={40} className="text-[#331A15]" />
                            <FaLinkedin size={40} className="text-[#331A15]" />
                        </div>
                        <h2 className="text-[#331A15] text-[45px] font-normal">
                            Get in Touch
                        </h2>
                        <div className="flex gap-3 items-center justify-center md:justify-start">
                            <FaPhoneAlt size={24} className="text-[#331A15]" />
                            <span className="railwayFont font-normal md:text-xl text-[#1B1A1A]">
                            +88 01533 333 333
                            </span>
                        </div>
                        <div className="flex gap-3 items-center justify-center md:justify-start">
                            <FaEnvelope size={24} className="text-[#331A15]" />
                            <span className="railwayFont font-normal md:text-xl text-[#1B1A1A]">
                            info@gmail.com
                            </span>
                        </div>
                        <div className="flex gap-3 items-center justify-center md:justify-start">
                            <IoLocationSharp size={24} className="text-[#331A15]" />
                            <span className="railwayFont font-normal md:text-xl text-[#1B1A1A]">
                            72, Wall street, King Road, Dhaka
                            </span>
                        </div>
                    </div>
                    <div className="space-y-4 md:mt-6">
                        <h2 className="text-[#331A15] text-[45px] font-normal">
                            Connect with Us
                        </h2>
                        <form className="flex flex-col gap-4 items-center lg:items-start w-full">
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                style={{ outline: "none" }}
                                className="input w-full max-w-md railwayFont rounded-[5px]"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                style={{ outline: "none" }}
                                className="input w-full max-w-md railwayFont rounded-[5px]"
                                required
                            />
                            <textarea
                                type="text"
                                placeholder="Message"
                                name="message"
                                style={{ outline: "none" }}
                                className="input w-full max-w-md railwayFont rounded-[5px] h-28 py-2"
                            ></textarea>
                            <button
                                type="submit"
                                className="btn border-2 border-[#331A15] text-2xl text-[#331A15] font-normal rounded-[30px] hover:bg-[#331A15] hover:text-white hover:border-chocolate"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div
                className="py-2"
                style={{
                    backgroundImage: "url(https://i.ibb.co/s9mMQHft/24.jpg)",
                }}
            >
                <h1 className="text-white font-normal md:text-xl text-center">
                Copyright Espresso Emporium ! All Rights Reserved
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
