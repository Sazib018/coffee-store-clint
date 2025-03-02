import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl fontRailway font-semibold text-center text-gray-800">
          Login your account
        </h2>
        <hr className="my-4" />
        <form>
          <div className="mb-4">
            <label className="block fontRailway text-gray-700 font-medium mb-1">
              Email address
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
            className="w-full fontRailway bg-[#c49a6c] text-white py-2 rounded-lg hover:bg-[#7c6247] transition"
          >
            Login
          </button>
          <button 
          className="w-full fontRailway bg-[#9c5e1c] text-white p-2 rounded mt-4"
        >
          Login with Google
        </button>
        </form>
        <p className="text-center fontRailway text-gray-600 mt-4">
          Don’t Have An Account?{" "}
          <Link to="/register" className="text-red-500 fontRailway font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Login;