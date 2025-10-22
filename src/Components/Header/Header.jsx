import React from 'react';
import dragonLogo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    const now = new Date();
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={dragonLogo} alt=""
                className='w-[500px]' />
            <p className=' text-xl text-accent font-semibold'>Journalism Without Fear or Favour</p>
            <p className='text-accent  font-semibold text-xl'>
                <span className='text-black'>{format(now, 'EEEE')}, </span>
                {format(now, 'MMMM dd, yyyy')}
            </p>
        </div>
    );
};

export default Header;