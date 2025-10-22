import React from 'react';
import { NavLink } from 'react-router';
import { FaAddressCard } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='w-11/12  mx-auto flex items-center justify-between p-2'>
            <div></div>
            <div className='nav space-x-5 text-accent'>
                <NavLink to={'/'}
                    className={'nav-link font-semibold text-md'}>Home</NavLink>
                <NavLink to={'/about'}
                    className={'nav-link font-semibold text-md'}>About</NavLink>
                <NavLink to={'/carrer'}
                    className={'nav-link font-semibold text-md'}>Carrer</NavLink>
            </div>
            <div className='flex items-center gap-2'>
                <FaAddressCard className='text-3xl'></FaAddressCard>
                <button className='login-btn btn btn-primary px-10 py-1'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;