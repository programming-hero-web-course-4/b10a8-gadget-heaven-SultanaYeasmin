import React from 'react';
import ProductDetails from '../pages/ProductDetails';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { product_id, product_title, product_image, category,
        price, description, specification, availability, rating } = product;
        
    return (
        <div>
            <div className="card w-90 h-[380px] shadow-xl p-5 rounded-xl">
                <figure >
                    <img className='w-[280px] h-[200px]'
                        src={product_image}
                        alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price:  $ {price}</p>
                    <div >
                        <Link to={`/product/${product_id}`}>
                        <button className="btn btn-outline btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default Card;
// {
//     "product_id": 1,
//     "product_title": "MacBook Pro 14",
//     "product_image": "https://i.ibb.co/9qFz4R5/laptop-1.jpg",
//     "category": "Laptops",
//     "price": 2499.99,
//     "description": "The new MacBook Pro 14 with M1 Pro chip for powerful performance.",
//     "specification": ["M1 Pro chip", "14-inch Retina display", "16GB RAM", "512GB SSD"],
//     "availability": true,
//     "rating": 4.8
// },