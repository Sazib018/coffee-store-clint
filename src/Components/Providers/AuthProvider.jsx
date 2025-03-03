import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const logIn = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }
const userInfo ={
    logIn,
}

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;