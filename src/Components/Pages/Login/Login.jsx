import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.config";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email & Password Login Function
  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("User Logged In:", result.user);
      })
      .catch((err) => setError(err.message));
  };

  // Google Login Function
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("Google User:", result.user);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex items-center mt-8 justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl fontRailway font-semibold text-center text-gray-800">
          Login to your account
        </h2>
        <hr className="my-4" />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block fontRailway text-gray-700 font-medium mb-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block fontRailway text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full fontRailway px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <button type="submit" className="w-full fontRailway bg-[#c49a6c] text-white py-2 rounded-lg hover:bg-[#7c6247] transition">
            Login
          </button>
        </form>
        <button onClick={handleGoogleLogin} className="w-full fontRailway bg-[#9c5e1c] text-white p-2 rounded mt-4">
          Login with Google
        </button>
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
