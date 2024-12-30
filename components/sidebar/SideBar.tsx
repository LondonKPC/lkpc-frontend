// SideBar.tsx
// The sidebar component for mobile view

import React, {ReactElement} from "react";
import Image from "next/image"
import Link from "next/link";
import {routeDefinitions} from "@/constants/routeDefinitions";


// CSS
import "./SideBar.css"

// Images/icons
import XMark from "@/images/icons/xmark_white.svg"
import Handshake from "@/images/icons/handshake_white.svg";
import Calendar from "@/images/icons/calendar_white.svg";
import Contact from "@/images/icons/message_white.svg";
import Login from "@/images/icons/login_white.svg";


interface MobileMenuProps {
    isMenuOpen: boolean;
    handleOpenMenu: () => void;
}

const SideBar: React.FC<MobileMenuProps> = ({ isMenuOpen, handleOpenMenu }): ReactElement => {
    return (
        <div className={`sm:hidden fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-end">
                <Image
                    className="m-2"
                    onClick={handleOpenMenu}
                    src={XMark}
                    alt="Bars"
                    width={30}
                    height={30}
                />
            </div>
            <nav className="w-full h-full flex flex-col items-center my-4 space-y-8">
                <div className="sidebar-link">
                    <Link href={routeDefinitions.connect} className="link">
                        <Image
                            className="mx-2"
                            src={Handshake}
                            alt="Handshake"
                            width={30}
                            height={30}
                        />
                        Connect
                    </Link>
                </div>
                <div className="sidebar-link">
                    <Link href={routeDefinitions.events} className="link">
                        <Image
                            className="mx-2"
                            src={Calendar}
                            alt="Events"
                            width={30}
                            height={30}
                        />
                    Events
                    </Link>
                </div>
                <div className="sidebar-link">
                    <Link href={routeDefinitions.contact} className="link">
                        <Image
                            className="mx-2"
                            src={Contact}
                            alt="Contact"
                            width={30}
                            height={30}
                        />
                        Contact
                    </Link>
                </div>
                <div className="sidebar-link">
                    <Link href={routeDefinitions.login} className="link">
                        <Image
                            className="mx-2"
                            src={Login}
                            alt="Login"
                            width={30}
                            height={30}
                        />
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default SideBar;