import React, {ReactElement} from "react";

import Image from "next/image"

// Images
import CircleX from "@/images/circle_x.svg"
import {Group} from "@/constants/constants";

interface ModalProps {
    handleModalClose: () => void;
    eventTitle: string;
    startDate: string;
    endDate: string;
    groups: Group[];
    location: string;
    description: string;
}

const Modal: React.FC<ModalProps> = ({ handleModalClose, eventTitle, startDate, endDate, groups, location, description }): ReactElement => {
    return (
        <div className="absolute w-full justify-center items-center">
            <div className="relative h-full z-10 -top-32 shadow-xl">
                <div className="relative items-end h-1/2 bg-white rounded-lg shadow-lg p-2">
                    <Image
                        onClick={handleModalClose}
                        className="absolute top-2 right-2 z-10 rounded-full"
                        src={CircleX}
                        alt="CircleX"
                        width={20}
                        height={20}
                    />
                    <div className="border-b-[1px] text-black font-bold">
                        <h1 className="w-5/6 text-xl">{eventTitle}</h1>
                    </div>
                    <div className="flex flex-col h-1/3 text-black text-sm border-b-[1px]">
                        <div>
                            <a className="font-bold">Start Date: </a>
                            <a>{startDate}</a>
                        </div>
                        <div>
                            <a className="font-bold">End Date: </a>
                            <a>{endDate}</a>
                        </div>
                        <div>
                            <a className="font-bold">Groups: </a>
                            <a>{groups.join(", ")}</a>
                        </div>
                        <div>
                            <a className="font-bold">Location: </a>
                            <a>{location}</a>
                        </div>
                    </div>
                    <div className="w-full h-1/2 text-black">
                        <a>{description}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;