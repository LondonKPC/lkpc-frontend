import React from "react";

import EventCard from "@/components/event_card/EventCard";
import {Group} from "@/constants/constants";

// Images
import Bible from "@/images/bible.svg"
import Calendar from "@/images/calendar.svg"

export default function Events() {

    return (
        <main className="p-2">
            <div className="w-full mt-40">
                <div className="w-full items-center justify-center">
                    <h1 className="font-bold text-3xl text-black">Events</h1>
                    <hr className="border-1 border-gray-400"/>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                    <EventCard
                        imageSrc={Bible}
                        eventTitle="Event Title That is too longgggggggg"
                        groups={[Group.HiC]}
                        startDate="Feb 1, 2024 at 8:00PM"
                        endDate="Feb 3, 2024 at 11:30AM"
                    />
                    <EventCard
                        imageSrc={Bible}
                        eventTitle="Bible Study"
                        groups={[Group.General]}
                        startDate="Apr 1, 2024 at 8:00PM"
                        endDate="Apr 3, 2024 at 11:30AM"
                    />
                    <EventCard
                        imageSrc={Calendar}
                        eventTitle="Event Title"
                        groups={[Group.CU, Group.Adults]}
                        startDate="June 1, 2024 at 8:00PM"
                        endDate="June 3, 2024 at 11:30AM"
                    />
                    <EventCard
                        imageSrc={Calendar}
                        eventTitle="Event Title"
                        groups={[Group.HiC, Group.CU, Group.Adults]}
                        startDate="Sept 1, 2024 at 8:00PM"
                        endDate="Sept 3, 2024 at 11:30AM"
                    />
                </div>
            </div>
        </main>
    );
}
