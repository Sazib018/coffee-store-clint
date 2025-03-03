import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { logIn, googleSignIn } = useContext(AuthContext);
  const [setError] = useState("");

  const onSubmit = (data) => {

    logIn(data.email, data.password)
      .then((userInfo) => {
        console.log(userInfo.user);
        const userForDB = {
          email: userInfo.user.email,
          lastSignInTime: userInfo.user.metadata.lastSignInTime
        }
        fetch('http://localhost:3000/users', {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userForDB)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);

          })
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {

    googleSignIn()
      .then((userInfo) => {
        console.log(userInfo.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex items-center mt-8 justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl fontRailway font-semibold text-center text-gray-800">
          Login to your account
        </h2>
        <hr className="my-4" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block fontRailway text-gray-700 font-medium mb-1">
              Email address
            </label>
            <input
              type="email" {...register("email")}
              placeholder="Enter your email address"
              className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block fontRailway text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password" {...register("password")}
              placeholder="Enter your password"
              className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full fontRailway bg-[#c49a6c] text-white py-2 rounded-lg hover:bg-[#7c6247] transition"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full fontRailway bg-white border border-gray-300 text-gray-700 flex items-center justify-center gap-2 p-2 rounded-lg mt-4 hover:bg-gray-200" >
          <FcGoogle size={22}></FcGoogle> Login with Google
        </button>

        <p className="text-center fontRailway text-gray-600 mt-4">
          Don’t Have An Account?{" "}
          <Link to="/register" className="text-red-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
