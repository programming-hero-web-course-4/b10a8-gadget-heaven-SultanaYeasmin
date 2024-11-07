
import toast from 'react-hot-toast';
const getStoredCartList = ()=>{
    const storedProductStr = localStorage.getItem('cart-list');
    if(storedProductStr){
        const storedProduct = JSON.parse(storedProductStr);
        return storedProduct;
    }
    else {
        return [];
    }
}

const addToStoredCartList = (id) =>{
    const storedProduct = getStoredCartList();
   if (storedProduct.includes(id)){
    toast.error("already exists");
   }
   else{
    storedProduct.push(id);
    const storedProductStr = JSON.stringify(storedProduct);
    localStorage.setItem('cart-list', storedProductStr);
    toast.success('Successfully added to cart-List!')
   }
}

const getStoredWishList = () =>{
    const storedWishList = localStorage.getItem('wish-list');
    if(storedWishList){
        const storedWishList1 = JSON.parse(storedWishList);
        return storedWishList1;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) =>{
    const storedAllWishList = getStoredWishList();
    if (storedAllWishList.includes(id)){
        toast.error("already exists");
    }
else{
    storedAllWishList.push(id);
    const storedAllWishListStr = JSON.stringify(storedAllWishList);
    localStorage.setItem('wish-list', storedAllWishListStr);
    toast.success('Successfully added to wish-List!')
}



}


export {getStoredCartList, getStoredWishList, addToStoredCartList, addToStoredWishList};


// const handleAddToCart = (product_id) =>{
//     addToStoredCartList(product_id);
//   }  
//   const handleAddToWishList = (product_id) =>{
//     addToStoredWishList(product_id);
//   }  