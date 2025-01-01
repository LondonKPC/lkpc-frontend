import React, {ReactElement} from "react";
import {Group} from "@/constants/constants";
import Image, {StaticImageData} from "next/image";

interface EventCardProps {
    imageSrc: StaticImageData
    eventTitle: string
    groups: Group[]
    startDate: string
    endDate: string
}

const EventCard: React.FC<EventCardProps> = ({ imageSrc, eventTitle, groups, startDate, endDate }): ReactElement => {
    return (
        <div className="flex flex-col sm:w-3/4 lg:w-1/2 sm:h-3/4 lg:h-44 bg-sky-950 rounded-lg">
            <div className="h-full flex px-2 sm:text-lg">
                {groups.join(", ")}
            </div>
            <div className="w-full h-full flex-grow flex justify-center items-end px-1 pb-1">
                <div className="flex flex-row w-full h-full bg-white rounded-lg text-black p-1">
                    <div className="flex flex-row w-1/3 h-full">
                        <Image src={imageSrc} alt="Calendar" />
                    </div>
                    <div className="flex flex-col w-2/3 px-1 sm:px-2">
                        <div>
                            <h1 className="h-fit text-lg sm:text-2xl font-bold text-nowrap overflow-hidden text-ellipsis">{eventTitle}</h1>
                            <a className="relative text-sm sm:text-lg -top-1.5">{startDate}</a>
                        </div>
                        <div className="flex w-full h-full flex-col border-t-[1px]">
                            <h3 className="w-12 font-bold text-sm sm:text-lg">Ends:</h3>
                            <a className="w-full text-sm sm:text-lg">{endDate}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;