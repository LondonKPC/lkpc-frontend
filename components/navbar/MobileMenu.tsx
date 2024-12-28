import React, {ReactElement} from "react";
import Image from "next/image"
import XMark from "@/images/xmark.svg"
import Handshake from "@/images/handshake.svg";
import Calendar from "@/images/calendar.svg";
import Contact from "@/images/message.svg";
import Login from "@/images/login.svg";


interface MobileMenuProps {
    isMenuOpen: boolean;
    handleOpenMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, handleOpenMenu }): ReactElement => {
    return (
        <div className={`md:hidden fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/*<Bars onClick={handleOpenMenu} className="absolute top-4 left-4 text-2xl focus:outline-none"/>*/}
            <Image
                className="w-[30px] m-2"
                onClick={handleOpenMenu}
                src={XMark}
                alt="Bars"
                width={20}
                height={20}
            />
            <nav className="flex flex-col items-center my-4">
                <div className="mobile-menu-link-text">
                    <Image
                        className="mx-2"
                        src={Handshake}
                        alt="Handshake"
                        width={25}
                        height={25}
                    />
                    <a>Connect</a>
                </div>
                <div className="mobile-menu-link-text">
                    <Image
                        className="mx-2"
                        src={Calendar}
                        alt="Events"
                        width={25}
                        height={25}
                    />
                    <a>Events</a>
                </div>
                <div className="mobile-menu-link-text">
                    <Image
                        className="mx-2"
                        src={Contact}
                        alt="Contact"
                        width={25}
                        height={25}
                    />
                    <a>Contact</a>
                </div>
                <div className="mobile-menu-link-text">
                    <Image
                        className="mx-2"
                        src={Login}
                        alt="Login"
                        width={25}
                        height={25}
                    />
                    <a>Login</a>
                </div>
            </nav>
        </div>
    )
}

export default MobileMenu;