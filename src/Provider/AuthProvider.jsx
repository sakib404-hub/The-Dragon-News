import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config.js'
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        user,
        setUser,
        createUser
    }
    console.log(user);
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;