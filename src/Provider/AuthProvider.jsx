import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'hablu', email: 'hablu@gmail.com' })

    const authData = {
        user,
        setUser
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;