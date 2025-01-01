import React, {ReactElement, useCallback} from "react";
import {Group} from "@/constants/constants";
import Image, {StaticImageData} from "next/image";
import Modal from "@/components/modal/Modal";

interface EventCardProps {
    eventId: number;
    selectedEventId: number | null
    setSelectedEventId: (eventId: number | null) => void;
    imageSrc: StaticImageData;
    eventTitle: string;
    startDate: string;
    endDate: string;
    groups: Group[];
    location: string;
}

const EventCard: React.FC<EventCardProps> = ({ eventId, selectedEventId, setSelectedEventId, imageSrc, eventTitle, startDate, endDate, groups, location }): ReactElement => {
    const handleEventClick = useCallback(() => {
        setSelectedEventId(eventId);
    }, [eventId, setSelectedEventId]);

    const handleModalClose = useCallback(() => {
        setSelectedEventId(null);
    }, [setSelectedEventId]);
    return (
        <div className="flex w-full justify-center items-center">
            <div
                className="flex flex-col w-full h-32 sm:w-2/3 lg:w-1/2 sm:h-36 bg-sky-950 rounded-lg"
                onClick={handleEventClick}
            >
                <div className="h-full flex px-2 sm:text-lg">
                    {groups.join(", ")}
                </div>
                <div className="w-full h-full flex-grow flex justify-center items-end px-1 pb-1">
                    <div className="flex flex-row w-full h-24 sm:h-28 bg-white rounded-lg text-black p-1">
                        <div className="flex flex-row w-1/4 h-full">
                            <Image src={imageSrc} alt="Calendar" />
                        </div>
                        <div className="flex flex-col w-3/4 px-1 sm:px-2">
                            <div className="h-1/2">
                                <h1 className="h-fit text-lg sm:text-2xl font-bold text-nowrap overflow-hidden text-ellipsis">{eventTitle}</h1>
                                <a className="relative text-sm md:text-lg -top-1.5">{startDate}</a>
                            </div>
                            <div className="flex w-full h-full flex-row border-t-[1px]">
                                <div className="w-full md:w-1/2 flex flex-col pr-1">
                                    <h3 className="font-bold text-sm sm:text-md">Ends:</h3>
                                    <a className="text-xs sm:text-md">{endDate}</a>
                                </div>
                                <div className="hidden sm:flex w-1/2 flex-col pr-1">
                                    <h3 className="font-bold text-sm sm:text-md">Location:</h3>
                                    <a className="text-xs sm:text-md">{location}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedEventId === eventId && (
                <Modal
                    handleModalClose={handleModalClose}
                    eventTitle={eventTitle}
                    startDate={startDate}
                    endDate={endDate}
                    groups={groups}
                    location={location}
                    description="This is where the description goes and it can go for a long time.
                        This is where the description goes and it can go for a long time.
                        This is where the description goes and it can go for a long time."
                />
            )}
        </div>
    );
}

export default EventCard;