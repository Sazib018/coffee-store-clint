import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../../firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const logIn = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
      };
const userInfo ={
    logIn,
    createUser,
    googleSignIn,
}

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;