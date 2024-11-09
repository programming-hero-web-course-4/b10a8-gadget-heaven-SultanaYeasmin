import { NavLink, useLocation } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        
       <div className={`${( pathname==="/category/All%20Products" || pathname === '/category/Laptops' || pathname ==='/category/Phones'|| pathname ==='/category/Smartwatches'|| pathname ==='/category/iPhone'|| pathname ==='/category/MacBook'|| pathname ==='/category/Accessories'  || pathname ==='/')? "bg-[#9538E2]": "bg-white"}`}>
         <div className={`navbar pt-7 pb-12 rounded-t-2xl container mx-auto `}>
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base font-bold">
                        <NavLink to=""><a>Home</a></NavLink>
                        <NavLink to="/statistics"> <a>Statistics</a> </NavLink>
                        <NavLink to="/dashboard"><a>Dashboard</a></NavLink>
                    </ul>
                </div>
                <a className={`btn btn-ghost text-xl font-bold ${(pathname === '/category/Laptops' || pathname === '/category/All%20Products' || pathname ==='/category/Phones'|| pathname ==='/category/Smartwatches'|| pathname ==='/category/iPhone'|| pathname ==='/category/MacBook'|| pathname ==='/category/Accessories'  || pathname ==='/' ) ? "text-white": "text-black" }`}>Gadget Heaven</a>
            </div>
            <div className={`navbar-center hidden lg:flex  ${(pathname === '/category/Laptops' || pathname === '/category/All%20Products' || pathname ==='/category/Phones'|| pathname ==='/category/Smartwatches'|| pathname ==='/category/iPhone'|| pathname ==='/category/MacBook'|| pathname ==='/category/Accessories'  || pathname ==='/' ) ? "text-white": "text-[#0B0B0B]/70" }`}>
                <ul className="menu menu-horizontal px-1 gap-12 text-base font-bold">
                    <NavLink to="/"> <a>Home</a></NavLink>
                    <NavLink to="/statistics"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#9538E2" : "",
                            };
                        }}
                    >   <a>Statistics</a></NavLink>
                    <NavLink to="/dashboard" style={({ isActive }) => {
                        return {
                            color: isActive ? "#9538E2" : "",
                        };
                    }} ><a>Dashboard</a></NavLink>

                    <NavLink to="/contact" style={({ isActive }) => {
                        return {
                            color: isActive ? "#9538E2" : "",
                        };
                    }}><a>Contact Us</a></NavLink>
                </ul>
            </div>
            <div class="navbar-end ">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle mr-4 bg-white border-[#0B0B0B]/10">
                    <div class="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {/* <span class="badge badge-sm indicator-item">8</span> */}
                    </div>
                </div>
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle bg-white border-[#0B0B0B]/10">
                    <div class="indicator">
                        <CiHeart className="h-5 w-5" />
                        {/* <span class="badge badge-sm indicator-item">8</span> */}
                    </div>
                </div>
            </div>

        </div>
       </div>

    );
};
export default Navbar;