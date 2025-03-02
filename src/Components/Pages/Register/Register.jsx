import React from 'react';

const Register = () => {
    return (
        <div className="flex items-center mt-8 justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl fontRailway font-semibold text-center text-gray-800">
                    Register your account
                </h2>
                <hr className="my-4" />
                <form>
                    <div className="mb-4">
                        <label className="block fontRailway text-gray-700 font-medium mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block fontRailway text-gray-700 font-medium mb-1">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo URL"
                            className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block fontRailway text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block fontRailway text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full fontRailway bg-[#c49a6c] hover:bg-[#5b452d] text-white py-2 rounded-lg"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;