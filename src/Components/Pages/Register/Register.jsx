import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext); 

    const onSubmit = (data) => {
        createUser(data.email, data.password) 
            .then(userInfo => {
                console.log( userInfo.user);
            })
            .catch(error => {
                console.error("Registration Error:", error.message);
            });
    };

    return (
        <div className="flex items-center mt-8 justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    Register your account
                </h2>
                <hr className="my-4" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text" required {...register("name")}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Photo URL
                        </label>
                        <input
                            type="text" required {...register("photoURL")} 
                            placeholder="Enter your photo URL"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email" required {...register("email")}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password" required {...register("password")}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#c49a6c] hover:bg-[#5b452d] text-white py-2 rounded-lg"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
