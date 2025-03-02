// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo13-8lCojk6anufGzKEUD2nPklpxudOk",
  authDomain: "coffee-store-clint-4bf83.firebaseapp.com",
  projectId: "coffee-store-clint-4bf83",
  storageBucket: "coffee-store-clint-4bf83.firebasestorage.app",
  messagingSenderId: "256341690171",
  appId: "1:256341690171:web:2ba99c15f284b1ce00d91e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;