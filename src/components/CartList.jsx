import React, { useEffect, useState } from 'react';
import './../utilities/getTotalCost'
import CartSingleData from './CartSingleData';
import { getTotalCost } from './../utilities/getTotalCost';

const CartList = ({ cartProducts, handleSortByPrice}) => {
    const [cost, setCost] = useState(0);
    useEffect(() => {
        let totalCost = getTotalCost(cartProducts);
        setCost(totalCost);
    }, [cartProducts])
    console.log(cost)
     const cartProductsNos = cartProducts.length;

    return (
        <div>
            <div className='flex justify-between my-12 items-center container mx-auto px-10 gap-5 '>
                <h5 className='font-bold'>Cart</h5>
                <div className='flex items-center justify-end'>
                    <h5 className='font-bold mr-20'>Total cost:   $ {cost} </h5>
                    <button onClick={handleSortByPrice}
                        className="btn font-semibold rounded-3xl text-[#9538E2] mx-10 ">Sort by Price
                    </button>
                    <button className='btn font-medium  rounded-3xl  bg-[#9538E2]'>Purchase</button>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-8 mb-10'>
                {
                    cartProducts.map((product, idx) => <CartSingleData key={idx} product={product} ></CartSingleData>)
                }
            </div>
        </div>
    );
};

export default CartList;