import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';


const Cards = () => {
    const products = useLoaderData();
    const {category} = useParams();
    const [categoryProducts, setCategoryProducts] = useState([products]);
    useEffect(()=>{
    if (category && category!=="All Products"){
        const CategorizedProducts = [...products].filter (
            product => category === product.category
        ) ;
        setCategoryProducts(CategorizedProducts);
        }
       
        else{
            setCategoryProducts(products);
        }
           
    },[category, products])
    

    console.log(products, category);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between mb-10'>
            {
            categoryProducts.map((product, idx) => <Card key={idx} product={product}></Card>)
            }
        </div>
    );
};

export default Cards;