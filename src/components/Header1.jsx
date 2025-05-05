import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header1() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenProfile, setOpenProfile] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleDropDownProfile = () => {
        setOpenProfile(!isOpenProfile);
    };

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden text-gray-600 hover:text-black"
                    onClick={handleMenuToggle}
                >

                    {/* burger menu */}
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3.5"
                        stroke="black"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>



                </button>


                {/* Logo */}
                <div className="flex items-center mr-6">
                    <Link to="/" className="text-2xl font-bold">
                        <img
                            src="src\assets\SHOP.CO.svg"
                            alt=""
                            className="sm:h-auto h-5"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex space-x-6 items-center">
                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            `text-lg font-medium ${isActive ? "text-black" : "text-gray-600 hover:text-black"
                            }`
                        }
                    >
                        Shop
                    </NavLink>
                    <NavLink
                        to="/sale"
                        className={({ isActive }) =>
                            `text-lg font-medium ${isActive ? "text-black" : "text-gray-600 hover:text-black"
                            }`
                        }
                    >
                        On Sale
                    </NavLink>
                    <NavLink
                        to="/new-arrivals"
                        className={({ isActive }) =>
                            `text-lg font-medium ${isActive ? "text-black" : "text-gray-600 hover:text-black"
                            }`
                        }
                    >
                        New Arrivals
                    </NavLink>
                    <NavLink
                        to="/brands"
                        className={({ isActive }) =>
                            `text-lg font-medium ${isActive ? "text-black" : "text-gray-600 hover:text-black"
                            }`
                        }
                    >
                        Brands
                    </NavLink>
                </div>

                {/* Search Bar */}
                <div className="hidden sm:flex items-center flex-1 mx-6">
                    <input
                        id="serachBar"
                        type="text"
                        placeholder='🔍︎ Search for products...'
                        className="w-full px-4 py-2 mx-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#F0F0F0]"
                    />
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-black">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405M19 13a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg> */}

                        <label htmlFor="serachBar">
                            <svg
                                fill="#000000"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                            </svg>
                        </label>

                    </button>
                    <button className="text-gray-600 hover:text-black">

                        {/* cart icon */}
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h18M3 9h18M3 15h18M3 21h18"
                            />
                        </svg> */}

                        <svg
                            fill="#000000"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                            className="h-6 w-6"
                        >
                            <g>
                                <path d="M20.1,26H44c0.7,0,1.4-0.5,1.5-1.2l4.4-15.4c0.3-1.1-0.5-2-1.5-2H11.5l-0.6-2.3c-0.3-1.1-1.3-1.8-2.3-1.8 H4.6c-1.3,0-2.5,1-2.6,2.3C1.9,7,3.1,8.2,4.4,8.2h2.3l7.6,25.7c0.3,1.1,1.2,1.8,2.3,1.8h28.2c1.3,0,2.5-1,2.6-2.3 c0.1-1.4-1.1-2.6-2.4-2.6H20.2c-1.1,0-2-0.7-2.3-1.7v-0.1C17.4,27.5,18.6,26,20.1,26z" />
                                <circle cx="20.6" cy="44.6" r="4" />
                                <circle cx="40.1" cy="44.6" r="4" />
                            </g>
                        </svg>



                    </button>
                    <button className="text-gray-600 hover:text-black" onClick={handleDropDownProfile}>
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h18M3 9h18M3 15h18M3 21h18"
                            />
                        </svg> */}

                        {/* user icon */}

                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                        </svg>

                        <div className="relative">

                            <div
                                className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-none ${isOpenProfile ? "block" : "hidden"
                                    }`}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabIndex={-1}
                            >
                                <NavLink
                                    to="/maintenance"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="user-menu-item-0"
                                >
                                    Your Profile
                                </NavLink>
                                <NavLink
                                    to="/maintenance"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left
"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="user-menu-item-1"
                                >
                                    My Cart <span className="font-bold"></span>
                                </NavLink>
                                <NavLink
                                    to="/maintenance"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="user-menu-item-2"
                                >
                                    Sign out
                                </NavLink>
                            </div>
                        </div>

                    </button>



                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-4 p-4">
                        <NavLink
                            to="/shop"
                            className="text-lg font-medium text-gray-600 hover:text-black"
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            to="/sale"
                            className="text-lg font-medium text-gray-600 hover:text-black"
                        >
                            On Sale
                        </NavLink>
                        <NavLink
                            to="/new-arrivals"
                            className="text-lg font-medium text-gray-600 hover:text-black"
                        >
                            New Arrivals
                        </NavLink>
                        <NavLink
                            to="/brands"
                            className="text-lg font-medium text-gray-600 hover:text-black"
                        >
                            Brands
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
}