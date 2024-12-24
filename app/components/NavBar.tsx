'use client'

import { useState } from "react";
import LKPC_Logo from "../images/LKPC_Logo.png";

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
            <div className="w-full h-full">
                    <nav className="flex justify-between items-center text-white py-6 px-8 md:px-32 bg-sky-900 drop-shadow-md">
                        {/* Desktop Menu */}
                        <a href="/home" className="site-tite text-white"> 
                            <img src={LKPC_Logo.src} alt="LKPC Logo" className="w-32 h-32 hover:scale-105 transition-all" />
                        </a>

                        {/* Desktop Menu */}
                        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                            <li className="p-3 hover:text-indigo-200 rounded-md transition-all cursor-pointer">
                                <a href="/about" className="text-white hover:text-indigo-200">About</a>
                            </li>
                            <li className="p-3 hover:text-indigo-200 rounded-md transition-all cursor-pointer">
                                <a href="/service" className="text-white hover:text-indigo-200">Service</a>
                            </li>
                            <li className="p-3 hover:text-indigo-200 rounded-md transition-all cursor-pointer">
                                <a href="/event" className="text-white hover:text-indigo-200">Events</a>
                            </li>
                        </ul>
                        
                        <div className="relative hidden md:flex items-center justify-center gap-3 font-semibold text-base">
                            <ul>
                                <li className="p-3 hover:text-indigo-200 rounded-md transition-all cursor-pointer">Contact</li>
                            </ul>
                        </div>

                        {/* Hamburger Icon (only visible on smaller screens) not working */}
                        
                        <i
                            className="bx bx-menu xl:hidden block" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        ></i>
                        
                        {/* Mobile Menu */}
                        <div className={`absolute xl:hidden top-24 left-0 w-full bg-sky-800 
                            flex flex-col items-center gap-6 font-semibold text-lg 
                            transition-transform ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} 
                            transform duration-300 ease-in-out`}>


                            <ul className="p-0 m-0 list-none text-center">
                                <li className="p-4 text-white hover:text-indigo-200 transition-all cursor-pointer">
                                    <a href="/about">About</a>
                                </li>
                                <li className="p-4 text-white hover:text-indigo-200 transition-all cursor-pointer">
                                    <a href="/service">Service</a>
                                </li>
                                <li className="p-4 text-white hover:text-indigo-200 transition-all cursor-pointer">
                                    <a href="/event">Events</a>
                                </li>
                                <li className="p-4 text-white hover:text-indigo-200 transition-all cursor-pointer">
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
    );
}
