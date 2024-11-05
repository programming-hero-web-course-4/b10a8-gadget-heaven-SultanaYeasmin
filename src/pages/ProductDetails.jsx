import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData();
    const params = useParams();
    console.log(params, data)
    return (
        <div>
           ProductDetails
        </div>
    );
};

export default ProductDetails;