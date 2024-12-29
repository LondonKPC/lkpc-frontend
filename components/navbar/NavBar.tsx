// NavBar.tsx
// The general navigation bar for desktop view

'use client'

import {useCallback, useState} from "react";
import Image from "next/image";
import SideBar from "@/components/sidebar/SideBar";

// CSS
import "./NavBar.css";

// Images
import LKPC_Logo from "@/images/LKPC_Logo.svg";
import Bars from "@/images/bars.svg"
import Handshake from "@/images/handshake.svg"
import Calendar from "@/images/calendar.svg"
import Contact from "@/images/message.svg"
import Login from "@/images/login.svg"

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const handleOpenMenu = useCallback(() => {
        setIsMenuOpen((prevState) => !prevState);
    }, []);

    return (
            <div className="main-container">
                <Image
                    className="absolute left-0 top-0"
                    src={LKPC_Logo}
                    alt="Logo"
                    width={80}
                    height={80}
                />
                <div className="navbar-container">
                    <nav className="nav-container">
                        <div className="navbar-link">
                            <Image
                                className="mx-1 md:mx-2"
                                src={Handshake}
                                alt="Handshake"
                                width={25}
                                height={25}
                            />
                            <a>Connect</a>
                        </div>
                        <div className="navbar-link">
                            <Image
                                className="mx-1 md:mx-2"
                                src={Calendar}
                                alt="Events"
                                width={25}
                                height={25}
                            />
                            <a>Events</a>
                        </div>
                        <div className="navbar-link">
                            <Image
                                className="mx-1 md:mx-2"
                                src={Contact}
                                alt="Contact"
                                width={25}
                                height={25}
                            />
                            <a>Contact</a>
                        </div>
                        <div className="navbar-link">
                            <Image
                                className="mx-1 md:mx-2"
                                src={Login}
                                alt="Login"
                                width={25}
                                height={25}
                            />
                            <a>Login</a>
                        </div>
                        <Image
                            className={isMenuOpen ? "hidden" : "fixed top-0 right-0 sm:hidden m-1"}
                            onClick={handleOpenMenu}
                            src={Bars}
                            alt="Bars"
                            width={50}
                            height={50}
                        />
                    </nav>
                </div>
                <SideBar
                    isMenuOpen={isMenuOpen}
                    handleOpenMenu={handleOpenMenu}
                />
            </div>
    );
}

export default NavBar;