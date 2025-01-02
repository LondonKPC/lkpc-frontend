import React, { ReactElement, useRef } from "react";
import Image from "next/image";

// Images
import CircleX from "@/images/circle_x.svg";
import { Group } from "@/constants/constants";
import {useClickOutside} from "@/hooks/useClickOutside";

interface ModalProps {
    handleModalClose: () => void;
    eventTitle: string;
    startDate: string;
    endDate: string;
    groups: Group[];
    location: string;
    description: string;
}

const Modal: React.FC<ModalProps> = ({ handleModalClose, eventTitle, startDate, endDate, groups, location, description,}): ReactElement => {
    const outsideDivRef = useRef<HTMLDivElement>(null);

    useClickOutside({ ref: outsideDivRef, callback: () => handleModalClose() });

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
            <div className="bg-white max-h-[50%] w-11/12 sm:w-1/2 lg:w-1/3 p-1 rounded-xl shadow-xl relative" ref={outsideDivRef}>
                <div className="relative items-end max-h-[90vh] bg-white rounded-xl z-10 space-y-2 p-4 overflow-hidden">
                    <Image
                        onClick={handleModalClose}
                        className="absolute top-2 right-2 z-0 rounded-full cursor-pointer"
                        src={CircleX}
                        alt="Close Modal"
                        width={20}
                        height={20}
                    />
                    <div className="border-b-[1px] pb-2 text-black font-bold">
                        <h1 className="text-lg sm:text-xl md:text-2xl truncate">{eventTitle}</h1>
                    </div>
                    <div className="flex flex-col text-black text-sm space-y-2 overflow-y-auto pr-3 max-h-[35vh]">
                        <div>
                            <span className="font-bold mr-2">Start Date:</span>
                            <span className="bg-gray-200">{startDate}</span>
                        </div>
                        <div>
                            <span className="font-bold mr-2">End Date:</span>
                            <span className="bg-gray-200">{endDate}</span>
                        </div>
                        <div>
                            <span className="font-bold mr-2">Groups:</span>
                            <span className="bg-gray-200">{groups.join(", ")}</span>
                        </div>
                        <div className="border-b-[1px] pb-2">
                            <span className="font-bold mr-2">Location:</span>
                            <span className="bg-gray-200">{location}</span>
                        </div>
                        <div className="text-black">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
