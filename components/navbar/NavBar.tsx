// NavBar.tsx
// The general navigation bar for desktop view

'use client'

import {useCallback, useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import SideBar from "@/components/sidebar/SideBar";
import {routeDefinitions} from "@/constants/routeDefinitions";

// CSS
import "./NavBar.css";

// Images
import LKPC_Logo from "@/images/LKPC_Logo.svg";
import Bars from "@/images/bars.svg"
import Handshake from "@/images/handshake.svg"
import Calendar from "@/images/calendar.svg"
import Contact from "@/images/message.svg"
import Login from "@/images/login.svg"
import {useClickOutside} from "@/hooks/useClickOutside";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const outsideRef = useRef<HTMLDivElement>(null);
    const handleOpenMenu = useCallback(() => {
        setIsMenuOpen((prevState) => !prevState);
    }, []);

    useClickOutside({ ref: outsideRef, callback: () => setIsMenuOpen(false) });

    return (
            <div ref={outsideRef} className="main-container z-10">
                <Link href={routeDefinitions.home} onClick={() => isMenuOpen && setIsMenuOpen(false)}>
                    <Image
                        className="absolute left-0 top-0 z-20 rounded-full transform transition-transform duration-300 hover:scale-110"
                        src={LKPC_Logo}
                        alt="Logo"
                        width={80}
                        height={80}
                    />
                </Link>
                <div className="navbar-container">
                    <nav className="nav-container">
                        <div className="navbar-link">
                            <Link href={routeDefinitions.connect} className="link">
                                <Image
                                    className="mx-1 md:mx-2"
                                    src={Handshake}
                                    alt="Handshake"
                                    width={25}
                                    height={25}
                                />
                                Connect
                            </Link>
                        </div>
                        <div className="navbar-link">
                            <Link href={routeDefinitions.events} className="link">
                                <Image
                                    className="mx-1 md:mx-2"
                                    src={Calendar}
                                    alt="Events"
                                    width={25}
                                    height={25}
                                />
                                Events
                            </Link>
                        </div>
                        <div className="navbar-link">
                            <Link href={routeDefinitions.contact} className="link">
                                <Image
                                    className="mx-1 md:mx-2"
                                    src={Contact}
                                    alt="Contact"
                                    width={25}
                                    height={25}
                                />
                                Contact
                            </Link>
                        </div>
                        <div className="navbar-link">
                            <Link href={routeDefinitions.login} className="link">
                                <Image
                                    className="mx-1 md:mx-2"
                                    src={Login}
                                    alt="Login"
                                    width={25}
                                    height={25}
                                />
                                Login
                            </Link>
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