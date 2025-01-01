import React, {ReactElement} from "react";

import Image from "next/image"

// Images
import CircleX from "@/images/circle_x.svg"
import {Group} from "@/constants/constants";

interface ModalProps {
    handleModalClose: () => void;
    eventTitle: string;
    groups: Group[];
    startDate: string;
    endDate: string;
    description: string;
}

const Modal: React.FC<ModalProps> = ({ handleModalClose, eventTitle, groups, startDate, endDate, description }): ReactElement => {

    return (
        <div className="absolute h-full w-[90%] justify-center items-center top-0">
            <div className="fixed h-full z-10">
                <div className="flex items-end h-1/2 bg-black p-1 rounded-lg shadow-lg">
                    <div className="relative h-full bg-white rounded-lg">
                        <Image
                            onClick={handleModalClose}
                            className="absolute top-2 right-2 z-10 rounded-full"
                            src={CircleX}
                            alt="CircleX"
                            width={20}
                            height={20}
                        />
                        <div className="flex flex-col w-full h-1/3 text-black text-sm border-b-[1px]">
                            <h1 className="text-xl">{eventTitle}</h1>
                            <a>Start Date: {startDate}</a>
                            <a>End Date: {endDate}</a>
                            <a>Groups: {groups.join(", ")}</a>
                        </div>
                        <div className="w-full h-1/2 text-black">
                            <a>{description}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;