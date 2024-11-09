import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CommonHeading from '../components/CommonHeading'; import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { addToStoredCartList, addToStoredWishList, getStoredWishList } from '../utilities/localStorage';
import DocumentTitle from '../utilities/DocumentTitle';
const ProductDetails = () => {
    DocumentTitle("GadgetHeaven_Product_Details")
    const products = useLoaderData();
    console.log(products);
    const { id } = useParams();
    const idInt = parseInt(id);
    const [singleProductForDetails, setProductForDetails] = useState({});
    const [isInWishList, setIsInWIshList] = useState(false);

    useEffect(() => {
        const singleProduct = products.find(product => product.product_id === idInt)
        setProductForDetails(singleProduct)
        console.log(singleProduct);
        const wishLists = getStoredWishList();
        const isExist = wishLists.find(id => id == singleProduct.product_id);
        isExist ? setIsInWIshList(true) : setIsInWIshList(false);

    }, [products, idInt])

    const { product_id, product_title, product_image, category,
        price, description, specification, availability, rating } = singleProductForDetails || {};

    console.log(singleProductForDetails, product_title, idInt, product_id, specification);
    const handleAddToCart = (product_id) => {
        addToStoredCartList(product_id);
    }
    const handleAddToWishList = (product_id) => {
        addToStoredWishList(product_id);
        setIsInWIshList(true);
    }
    const {abc} = useParams();
    console.log(abc)
    return (
        <div>
            <div className="relative flex justify-center bg-[#9538E2] pb-52 ">
            
            <div className='mx-auto container py-10 text-white '>
            <CommonHeading
                title='Product Details'
                subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all'
            ></CommonHeading>
            </div>
            <div className="absolute top-[250px] container mx-auto">
                <div className="card card-side bg-base-100 shadow-xl h-[550px] p-8">
                    <figure>
                        <img className='h-[500px] w-[420px] object-fill'
                            src={product_image}
                            alt={product_title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-semibold ">{product_title}</h2>
                        <h5 className='text-xl font-semibold text-[#09080F]/80'>Price: $ {price}</h5>
                        <button className="w-1/3 btn btn-sm  btn-outline btn-success bg-[#309C08]/10 text-[#309C08]">{availability ? "In Stock" : "Not in stock"}</button>
                        <p className='text-[#09080F]/60'>{description}</p>
                        <h5 className="text-base font-bold ">Specification:</h5>
                        <ul className='text-base text-[#09080F]/60'>
                            {specification &&
                                specification.map((spec, idx) => <li key={idx}> {idx + 1}. {spec}</li>)
                            }
                        </ul>
                        <div className='flex justify-start items-center gap-2'>
                            <h5 className='text-base font-bold'>Rating  </h5>
                            <p><FaRegStar /></p>
                        </div>
                        <div className='flex gap-5 items-center justify-start'>
                            <div className="rating rating-md rating-half">
                                
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" />
                                <input
                                    type="radio"
                                    name="rating-10"
                                    className="mask mask-star-2 mask-half-1 bg-[#F9C004]"
                                    defaultChecked />
                                <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" />

                            </div>
                            <div>
                                <button className='btn btn-sm text-base font-medium'>{rating}</button>
                            </div>
                        </div>


                        <div className='flex gap-5'>
                            {/* add to cart */}
                            <div>
                                <button onClick={() => handleAddToCart(product_id)}
                                    className="text-white bg-[#9538E2] btn rounded-3xl">Add to cart <IoCartOutline /></button>
                            </div>
                            {/* wish button */}
                            <div>
                                <button disabled={isInWishList} onClick={() => handleAddToWishList(product_id)}>
                                    <CiHeart className="h-12 w-12 rounded-full border border-solid border-1 p-2 border-[#09080F]/5" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[500px] bg-slate-50'>
            
        </div>
        </div>

    );
};

export default ProductDetails;