import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import DocumentTitle from '../utilities/DocumentTitle';

const ContactUs = () => {
    DocumentTitle("GadgetHeaven_Contact Us")
    const navigate = useNavigate();
    return (
        <div className='bg-slate-200 p-10'>
            <div className='container mx-auto '>
                <h1 className="text-[60px] text-center font-extrabold pt-20" >Contact Us</h1>
                <div className="flex justify-center mt-6 "> <button className="btn btn-wide text-white bg-black" onClick={() => navigate('/')}>back to home</button></div>
            </div>

            <div className='flex justify-around container mx-auto my-20'>
                <div>
                    <div className='flex justify-start items-center gap-2'>
                       <div className='text-2xl'> <MdEmail /></div>
                    <h3 className='text-2xl font-extrabold'> Email Us</h3>
                    </div>
                    <h6 className='my-1'>info@gadgetheaven.com</h6>
                    <h6>admin@gadgetheaven.com</h6>

                </div>
                <div>
                <div className='flex justify-start items-center gap-2'>
                       <div className='text-2xl'> <IoCall /></div>
                    <h3 className='text-2xl font-extrabold'> Call Us</h3>
                    </div>
                    <h6 className='my-1'>(+011) 345 678 910 </h6>
                    <h6>(+804) 7000 234</h6>
                </div>
                <div>
                <div className='flex justify-start items-center gap-2'>
                       <div className='text-2xl'><HiOutlineOfficeBuilding /> </div>
                    <h3 className='text-2xl font-extrabold'> Email Us</h3>
                    </div>
                    <h6 className='my-1'>Bashundhara city, floor#7, <br /> Dhaka, Bangladesh</h6>
                   
                </div>
            </div>
        </div>
    );
};

export default ContactUs;