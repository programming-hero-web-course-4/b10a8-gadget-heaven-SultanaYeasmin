import React from 'react';
import { FaSortAmountDown } from "react-icons/fa";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
const WishSingleData = ({ product }) => {


    const { product_id, product_title, product_image, category,
        price, description, specification, availability, rating } = product;



    return (
        <div>
            <div className="card card-side shadow-xl container mx-auto px-10 bg-slate-200 ">
                <figure>
                    <img className='w-[180px] h-[150px] p-4 rounded-2xl'
                        src={product_image}
                        alt={product_title} />
                </figure>


                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p className='text-[#09080F]/60 text-lg mt-3'>{specification}</p>
                    <p className='font-semibold text-xl'>Price:  $ {price}</p>


                    <button className='btn btn-sm w-1/3 rounded-3xl bg-[#9538E2] text-white'>Add to Cart</button>
                </div>

                <div className='flex justify-between items-center'>

                    <div className=' border-2  p-1'>
                        <button className='btn btn-circle border-red-400 text-red-400'> <RxCross1 /></button>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default WishSingleData;