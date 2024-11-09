import React, { useEffect, useState } from 'react';
import './../utilities/getTotalCost'
import CartSingleData from './CartSingleData';
import { getTotalCost } from './../utilities/getTotalCost';
import Group from './../assets/Group.png';
import { useNavigate } from 'react-router-dom';import { ImSortAmountDesc } from "react-icons/im";

const CartList = ({ cartProducts, cartProducts1, handleSortByPrice, handlePurchaseButton, isDisabled }) => {
    const navigate = useNavigate();
    const [cost, setCost] = useState(0);
    const [cost1, setCost1] = useState(0);
    useEffect(() => {
        let totalCost = getTotalCost(cartProducts);
        setCost(totalCost);
        let totalCost1 = getTotalCost(cartProducts1);
        setCost1(totalCost1);
    }, [cartProducts, cartProducts1])
    console.log(cost, cost1)
  

    return (
        <div>
            <div className='flex justify-between my-12 items-center container mx-auto px-10 gap-5 '>
                <h5 className='font-bold'>Cart</h5>
                <div className='flex items-center justify-end'>
                    <h5 className='font-bold mr-20'>Total cost:   $ {cost} </h5>
                  
                   <button onClick={handleSortByPrice}
                        className="btn font-semibold rounded-3xl text-[#9538E2] mx-10 ">Sort by Price<ImSortAmountDesc />
                    </button>
                 
                    <button disabled={isDisabled} onClick={() => {
                        document.getElementById('my_modal_5').showModal()
                        handlePurchaseButton()
                    }
                    } className='btn font-medium  rounded-3xl bg-[#9538E2]'>Purchase</button>


                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <div className='flex justify-center'><img src={Group} alt="" /></div>
                            <h3 className="font-bold text-2xl text-center my-2">Payment Successful!</h3>
                            <p className="text-center">Thanks for purchasing.</p>
                            <p className="text-center py-2">Total cost: $ {cost1}</p>
                            <div className="modal-action flex justify-center">
                                <form className='w-full px-10' method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onClick={() => navigate('/')} className="btn w-full rounded-3xl">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>





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