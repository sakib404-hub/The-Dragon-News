import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config.js'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    //Setting up the Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut
    }
    // console.log(user);
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;