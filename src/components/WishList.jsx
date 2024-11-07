import React from 'react';

import WishSingleData from './WishSingleData';

const WishList = ({ wishProducts }) => {
  
    return (
        <div>
             <div className='flex justify-between my-12 items-center container mx-auto px-10 gap-5 '>
                <h5 className='font-bold'>WishList</h5>
               
            </div>
            <div className='grid grid-cols-1 gap-8 mb-10'>
                {
                    wishProducts.map((product, idx) => <WishSingleData key={idx} product={product} ></WishSingleData>)
                }
            </div>
        </div>
    );
};

export default WishList;