import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const RightNavigationBar = () => {
    return (
        <div className='p-2'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavigationBar;