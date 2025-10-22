import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-2 bg-base-200 p-4 rounded-xl w-11/12 mx-auto'>
            <button className='btn btn-secondary'>Latest</button>
            <Marquee className='font-semibold flex gap-5'
                pauseOnHover={true}
                speed={60}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni beatae perferendis sunt eum amet. Ex natus repudiandae saepe necessitatibus temporibus itaque quidem corporis, nostrum exercitationem sed dignissimos eligendi quaerat illo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse fuga architecto! Suscipit nihil consequuntur commodi aliquid amet blanditiis eligendi omnis saepe, iste ipsam, id cum eaque. Rerum, nemo! Sequi?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, corporis ea quae iusto labore officia magni quia ipsum totam quos impedit voluptas deleniti sed blanditiis beatae suscipit assumenda dolores rerum!</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;