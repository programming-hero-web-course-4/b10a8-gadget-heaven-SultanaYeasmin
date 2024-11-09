import React from 'react';
import ProductDetails from '../pages/ProductDetails';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { product_id, product_title, product_image, category,
        price, description, specification, availability, rating } = product || {};
        
    return (
        <div>
            <div className="card w-90 h-[380px] shadow-xl p-5 rounded-2xl border border-[#09080F]/5">
                <figure className='rounded-b-2xl' >
                    <img className='w-full h-[200px]'
                        src={product_image}
                        alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price:  $ {price}</p>
                    <div >
                        <Link to={`/product/${product_id}`}>
                        <button className="btn btn-outline text-[#9538E2] rounded-lg md:rounded-[32px] text-sm lg:text-base ">View Details</button></Link>
                    </div>
                </div>
            </div>
         
        </div>
    );
};
export default Card;
