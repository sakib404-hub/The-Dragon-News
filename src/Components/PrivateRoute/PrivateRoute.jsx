import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Loader/Loader';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    // console.log(location);
    const { user, loading } = use(AuthContext);

    if (user && user?.email) {
        return children
    }
    if (loading) {
        return <Loader></Loader>
    }
    return <Navigate
        state={location.pathname}
        to={'/auth'}></Navigate>
    // user ? children : navigate to login
    // return (
    //     <div>
    //         {children}
    //     </div>
    // );
};

export default PrivateRoute;