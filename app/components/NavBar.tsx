'use client'

import { useState } from "react";
import LKPC_Logo from "../images/LKPC_Logo.png";

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
            <div className="w-full h-full bg-black">
                    <nav className="flex justify-between items-center text-white py-2 px-4 md:px-8 bg-transparent drop-shadow-md">
                        {/* Desktop Menu */}
                        <a href="/home" className="flex-shrink-0"> 
                            <img src={LKPC_Logo.src} alt="LKPC Logo" className="w-24 h-24 hover:scale-105 transition-all" />
                        </a>

                        {/* Desktop Menu */}
                        <div className="flex justify-center">
                            <ul className="hidden md:flex flex-1 items-center gap-12 font-semibold text-base">
                                <li className="navbar-link">
                                    <a href="/about" className="navbar-link-text">About</a>
                                </li>
                                <li className="navbar-link">
                                    <a href="/service" className="navbar-link-text">Service</a>
                                </li>
                                <li className="navbar-link">
                                    <a href="/event" className="navbar-link-text">Events</a>
                                </li>
                                <li className="navbar-link">
                                    <a href="/contact" className="navbar-link-text">Contact</a>
                                </li>
                            </ul>
                        </div>
                        {/* Hamburger Icon (only visible on smaller screens) not working */}
                        
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
                            {isMenuOpen ? (
                            // Close Icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="md:hidden size-16"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            ) : (
                            // Hamburger Icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="md:hidden size-16"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            )}
                        </button>

                        {/* Mobile Menu */}
                        <div className={`absolute md:hidden top-24 left-0 w-full bg-black 
                            flex flex-col items-center gap-6 font-semibold text-lg 
                            transition-transform ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} 
                            transform duration-300 ease-in-out`}>

                            
                            <ul className="p-0 m-0 list-none text-center">
                                <li className="p-4 navbar-link-text transition-all cursor-pointer">
                                    <a href="/about">About</a>
                                </li>
                                <li className="p-4 navbar-link-text transition-all cursor-pointer">
                                    <a href="/service">Service</a>
                                </li>
                                <li className="p-4 navbar-link-text transition-all cursor-pointer">
                                    <a href="/event">Events</a>
                                </li>
                                <li className="p-4 navbar-link-text transition-all cursor-pointer">
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
    );
}