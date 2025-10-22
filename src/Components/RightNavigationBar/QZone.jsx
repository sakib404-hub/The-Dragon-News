import React from 'react';
import swimImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='my-10 bg-base-200 rounded-sm py-5'>
            <h2 className='text-xl font-semibold text-center'>QZone</h2>
            <div className='flex items-center justify-center'>
                <img src={swimImg} alt="" />
            </div>
            <div className='flex items-center justify-center'>
                <img src={classImg} alt="" />
            </div>
            <div className='flex items-center justify-center'>
                <img src={playImg} alt="" />
            </div>
        </div>

    );
};

export default QZone;