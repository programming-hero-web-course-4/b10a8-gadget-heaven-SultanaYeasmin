import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';

import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {
    const navigate = useNavigate();
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div>
            <div className='bg-[#9538E2]  pb-[268px] rounded-b-2xl' >
                <Heading
                    title='Upgrade Your Tech Accessorize with Gadget Heaven Accessories'
                    subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'>
                </Heading>
                <div className='flex justify-center'>
                    <button onClick={()=>navigate('/dashboard')} className="bg-white text-[#9538E2] btn btn-wide">Shop Now</button>
                </div>
                <Banner></Banner>
            </div>
            <div className='mt-[450px] container mx-auto'>
                <h3
                    className='font-bold text-[40px] text-black text-center'>
                    Explore Cutting-Edge Gadgets
                </h3>
                <div className='grid grid-cols-[1fr_6fr] gap-6 items-start justify-between'>
                    <div>
                 <Categories categories={categories} ></Categories>
                       
                    </div>
                    <div>

                       <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
