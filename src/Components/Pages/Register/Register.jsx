import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, googleSignIn } = useContext(AuthContext); 
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(userInfo => {
                console.log("User registered:", userInfo.user);
                navigate("/login");
            })
            .catch(error => {
                console.error("Registration Error:", error.message);
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((userInfo) => {
                console.log(userInfo.user);
            })
            .catch((err) => {
                console.error("Google Login Error:", err.message);
            });
    };

    return (
        <div className="flex items-center mt-8 justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl fontRailway font-semibold text-center text-gray-800">
                    Register your account
                </h2>
                <hr className="my-4" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block fontRailway text-gray-700 font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text" required {...register("name")}
                            placeholder="Enter your name"
                            className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block fontRailway text-gray-700 font-medium mb-1">
                            Photo URL
                        </label>
                        <input
                            type="text" required {...register("photoURL")}
                            placeholder="Enter your photo URL"
                            className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block fontRailway text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email" required {...register("email")}
                            placeholder="Enter your email address"
                            className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block fontRailway text-gray-700">Password:</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg pr-10"
                                placeholder="Enter your password"
                                value={password}
                                {...register("password", { required: true })}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute fontRailway inset-y-0 right-3 flex items-center text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <IoIosEye size={25} /> : <IoIosEyeOff size={25} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full fontRailway bg-[#c49a6c] hover:bg-[#5b452d] text-white py-2 rounded-lg" >
                        Register
                    </button>
                </form>
                <button
                    onClick={handleGoogleLogin}
                    className="w-full fontRailway bg-white border border-gray-300 text-gray-700 flex items-center justify-center gap-2 p-2 rounded-lg mt-4 hover:bg-gray-200" >
                    <FcGoogle size={22}></FcGoogle> Login with Google
                </button>
            </div>
        </div>
    );
};

export default Register;
