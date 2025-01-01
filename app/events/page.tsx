"use client"

import React, {useState} from "react";

import EventCard from "@/components/event_card/EventCard";
import {Group} from "@/constants/constants";

// Images
import Bible from "@/images/bible.svg"
import Calendar from "@/images/calendar.svg"
import events_background from "@/images/event_background.png"

export default function Events() {
    const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

    return (
        <main className="min-h-full p-2 bg-cover" style={{ backgroundImage: `url(${events_background.src})` }}>
            <div className="relative my-24">
                <div className="flex flex-col items-center justify-center text-center m-4">
                    <h1 className="font-bold text-3xl text-black">Events</h1>
                    <hr className="w-full sm:w-1/2 lg:w-1/4 border-1 border-gray-700"/>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                    <EventCard
                        eventId={1}
                        selectedEventId={selectedEventId}
                        setSelectedEventId={setSelectedEventId}
                        imageSrc={Bible}
                        eventTitle="Event Title That is too longgggggggg"
                        groups={[Group.HiC]}
                        startDate="Feb 1, 2024 at 8:00PM"
                        endDate="Feb 3, 2024 at 11:30AM"
                    />
                    <EventCard
                        eventId={2}
                        selectedEventId={selectedEventId}
                        setSelectedEventId={setSelectedEventId}
                        imageSrc={Bible}
                        eventTitle="Bible Study"
                        groups={[Group.General]}
                        startDate="Apr 1, 2024 at 8:00PM"
                        endDate="Apr 3, 2024 at 11:30AM"
                    />
                    <EventCard
                        eventId={3}
                        selectedEventId={selectedEventId}
                        setSelectedEventId={setSelectedEventId}
                        imageSrc={Calendar}
                        eventTitle="Event Title"
                        groups={[Group.CU, Group.Adults]}
                        startDate="June 1, 2024 at 8:00PM"
                        endDate="June 3, 2024 at 11:30AM"
                    />
                    <EventCard
                        eventId={4}
                        selectedEventId={selectedEventId}
                        setSelectedEventId={setSelectedEventId}
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
