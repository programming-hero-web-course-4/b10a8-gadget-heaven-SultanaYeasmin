import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CommonHeading from '../components/CommonHeading';
import DocumentTitle from '../utilities/DocumentTitle';
import WishList from '../components/WishList';
import CartList from '../components/CartList';
import { getStoredCartList, getStoredWishList } from '../utilities/localStorage';

const Dashboard = () => {
    DocumentTitle("GadgetHeaven_Dashboard")
    const [isDisabled, setIsDisabled] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);
    const [cartProducts1, setCartProducts1] = useState([]);
    const [wishProducts, setWishProducts] = useState([]);
    const [status, setStatus] = useState(true)
    const products = useLoaderData();

    const handleSortByPrice = () => {
        const sorted = [...cartProducts].sort((a,b)=>b.price - a.price);
        setCartProducts(sorted);
     }
    console.log(cartProducts);
     
    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        console.log(storedCartList, storedCartListInt, products);

        const cartListData = products.filter(product => storedCartListInt.includes(product.product_id))
        setCartProducts(cartListData);
        setCartProducts1(cartListData);

        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
      
        const wishListData = products.filter(product => storedWishListInt.includes(product.product_id))
        setWishProducts(wishListData);

    }, [])

    console.log(`cart-products are: ${cartProducts.length}`);
    console.log("first:", cartProducts,"second:" , cartProducts1, "third:mmmmm");


    const handleAddToCart = (status) => {
        if (status) {
            const newStatus = true;
            setStatus(newStatus);
        }
        else {
            const newStatus = false;
            setStatus(newStatus)
        }

    }
    const handlePurchaseButton = () =>{
        setCartProducts([]);
        setIsDisabled(true);
    }
    return (
        <div className=''>
            <div className='bg-[#9538E2]'>
                <div className='flex justify-center text-white ' >
                    <CommonHeading
                        title='Dashboard'
                        subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                    ></CommonHeading>
                </div>

                <div className='flex justify-center mt-8'>
                    <button onClick={() => handleAddToCart(true)} className='btn btn-wide mr-9 rounded-[32px]'>Cart</button>
                    <button onClick={() => handleAddToCart(false)} className='btn btn-wide rounded-[32px] mb-8'>Wishlist</button>
                </div>
            </div>
            {
                status ?  <CartList  cartProducts={cartProducts} cartProducts1={cartProducts1} handleSortByPrice={handleSortByPrice} handlePurchaseButton={handlePurchaseButton} isDisabled={isDisabled} ></CartList> :
                    <WishList wishProducts={wishProducts} ></WishList>
            }

        </div>
    );
};

export default Dashboard;



{/* <div role="tablist" className="tabs tabs-bordered container mx-auto">
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Cart" />
                <div role="tabpanel" className="tab-content p-10">
                 
                    </div></div>

                <input
                    type="radio"
                    name="my_tabs_1"
                    role="tab"
                    className="tab"
                    aria-label="Wishlist"
                    defaultChecked />
                <div role="tabpanel" className="tab-content p-10">Tab content 2</div>


            </div> */}