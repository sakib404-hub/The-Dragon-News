import React from 'react';
import dragonLogo from '../../src/assets/logo.png'
import { format } from 'date-fns';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer'

const AuthLayout = () => {
    const now = new Date();
    return (
        <div className='bg-base-200 min-h-screen'>
            <header>
                <div className='flex flex-col items-center justify-center'>
                    <img src={dragonLogo} alt=""
                        className='w-[500px]' />
                    <p className=' text-xl text-accent font-semibold'>Journalism Without Fear or Favour</p>
                    <p className='text-accent  font-semibold text-xl'>
                        <span className='text-black'>{format(now, 'EEEE')}, </span>
                        {format(now, 'MMMM dd, yyyy')}
                    </p>
                </div>
                <div>
                    <Navbar></Navbar>
                </div>
            </header>
            <main className='border min-h-screen w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;