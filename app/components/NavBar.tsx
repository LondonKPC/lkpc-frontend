'use client'

import { useState } from "react";
import LKPC_Logo from "../images/LKPC_Logo.png";
import "./NavBar.css";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false); 

    const handleToggle = () => { 
        setIsOpen(!isOpen); 
    };

    return (
            <div className="w-full h-full bg-transparent">
                {/* Desktop Menu */}
                <a href="/home" className="flex-shrink-0 fixed"> 
                    <img src={LKPC_Logo.src} alt="LKPC Logo" className="w-24 h-24 hover:scale-105 transition-all" />
                </a>
                <nav className="flex items-center text-white py-2 px-4 md:px-8 bg-transparent drop-shadow-md relative">

                    <div className="w-full">
                        {/* Desktop Menu */}
                        <div className="flex justify-center items-center">
                            <ul className="hidden md:flex flex-1 justify-center items-center gap-12 font-semibold text-base">
                                <li className="navbar-link">
                                    <a href="/about" className="navbar-link-text">About</a>
                                </li>
                                <li className="navbar-link">
                                    <a href="/connect" className="navbar-link-text">Connect</a>
                                </li>
                                <li className="navbar-link">
                                    <a href="/event" className="navbar-link-text">Events</a>
                                </li>
                                <li className="navbar-link">
                                    <a href="/contact" className="navbar-link-text">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button onClick={handleToggle} className="md:hidden text-3xl p-2 focus:outline-none" > 
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="black"
                        className="size-16"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </nav> 

                {/* Mobile Menu */} 
                <div className={`md:hidden fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button onClick={handleToggle} className="absolute top-4 left-4 text-2xl focus:outline-none" >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="size-16"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <nav className="flex flex-col items-center mt-32">
                        <a href="/about" className="mobile-navbar-link mobile-navbar-link-text">About</a>
                        <a href="/connect" className="mobile-navbar-link mobile-navbar-link-text">Connect</a>
                        <a href="/event" className="mobile-navbar-link mobile-navbar-link-text">Events</a>
                        <a href="/contact" className="mobile-navbar-link mobile-navbar-link-text">Contact</a>
                    </nav>
                </div>
            </div>
    );
}