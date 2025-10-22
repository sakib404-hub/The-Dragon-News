import React from 'react';
import dragonLogo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={dragonLogo} alt=""
                className='w-[500px]' />
            <p className=' text-xl text-gray-500 font-semibold'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-gray-500 font-semibold'> <span className='text-black'>Sunday,</span> November 27, 2025</p>
        </div>
    );
};

export default Header;