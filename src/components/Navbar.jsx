import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    return (
        
            <div className="navbar pt-7 pb-12   bg-[#9538E2] rounded-t-2xl ">
                <div className="navbar-start  text-white container mx-auto">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                    <a className="btn btn-ghost text-xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex  text-white">
                    <ul className="menu menu-horizontal px-1 gap-12 text-base font-bold">
                        <NavLink to="/"><a>Home</a></NavLink>
                        <NavLink to="/statistics"><a>Statistics</a></NavLink>
                        <NavLink to="/dashboard"><a>Dashboard</a></NavLink>
                        <NavLink to="/contact"><a>Contact Us</a></NavLink>
                    </ul>
                </div>
                <div class="navbar-end ">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle mr-4 bg-white">
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
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle bg-white">
                        <div class="indicator">
                            <CiHeart className="h-5 w-5" />
                            {/* <span class="badge badge-sm indicator-item">8</span> */}
                        </div>
                    </div>
                </div>

            </div>
    
    );
};

export default Navbar;