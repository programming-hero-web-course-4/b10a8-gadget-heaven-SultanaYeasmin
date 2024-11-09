import React from 'react';

const Footer = () => {
    return (
        <div className='py-[100px]'>
            <div className='container mx-auto'>
                <h1 className="text-4xl text-extrabold text-center" >Gadget Heaven</h1>
                <p className="text-base text-[#09080F]/60 text-center pt-4 pb-8">Leading the way in cutting-edge technology and innovation.</p>
                <hr />
            </div>
           

            <footer className="footer justify-around p-10 container mx-auto">
               
                <nav>
                    <h6 className="  text-[#09080F] font-bold text-base">Services</h6>
                    <a className="link link-hover text-[#09080F]/60 ">Product Support</a>
                    <a className="link link-hover text-[#09080F]/60">Order Tracking</a>
                    <a className="link link-hover text-[#09080F]/60">Shipping & Delivery</a>
                    <a className="link link-hover text-[#09080F]/60">Returns</a>
                </nav>
                <nav>
                    <h6 className=" text-[#09080F] font-bold text-base">Company</h6>
                    <a className="link link-hover text-[#09080F]/60">About us</a>
                    <a className="link link-hover text-[#09080F]/60">Careers</a>
                    <a className="link link-hover text-[#09080F]/60">Contact</a>
                </nav>
                <nav>
                    <h6 className=" text-[#09080F] font-bold text-base">Legal</h6>
                    <a className="link link-hover text-[#09080F]/60">Terms of Service</a>
                    <a className="link link-hover text-[#09080F]/60">Privacy policy</a>
                    <a className="link link-hover text-[#09080F]/60">Cookie policy</a>
                </nav>
            </footer>
        </div>

    );
};

export default Footer;