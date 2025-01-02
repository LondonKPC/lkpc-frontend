"use client"

import React, {useRef, useState} from "react";

import EventCard from "@/components/event_card/EventCard";
import {Group} from "@/constants/constants";

// Images
import Message from "@/images/icons/message.svg"
import Calendar from "@/images/icons/calendar.svg"

export default function Events() {
    const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

    return (
        <div className="min-h-full p-2 bg-cover z-0">  {/* TODO: add background image here */}
            <div className="relative my-24">
                <div className="flex flex-col items-center justify-center text-center m-4">
                    <h1 className="font-bold text-3xl text-black">Events</h1>
                    <hr className="w-full sm:w-1/2 lg:w-1/4 border-1 border-gray-700"/>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <EventCard
                        eventId={1}
                        selectedEventId={selectedEventId}
                        setSelectedEventId={setSelectedEventId}
                        imageSrc={Message}
                        eventTitle="Event Title That is very very very very very long"
                        startDate="Feb 1, 2024 at 8:00PM"
                        endDate="Feb 3, 2024 at 11:30AM"
                        groups={[Group.HiC]}
                        location="123 Sesame Street, Canada"
                    />
                    <EventCard
                        eventId={2}
                        selectedEventId={selectedEventId}
                        setSelectedEventId={setSelectedEventId}
                        imageSrc={Message}
                        eventTitle="Christmas Service"
                        startDate="Apr 1, 2024 at 8:00PM"
                        endDate="Apr 3, 2024 at 11:30AM"
                        groups={[Group.General]}
                        location="123 Sesame Street, Canada"
                    />
                    <EventCard
                        eventId={3}
                        selectedEventId={selectedEventId}
                        setSelectedEventId={setSelectedEventId}
                        imageSrc={Calendar}
                        eventTitle="Bible Study"
                        startDate="June 1, 2024 at 8:00PM"
                        endDate="June 3, 2024 at 11:30AM"
                        groups={[Group.CU, Group.Adults]}
                        location="123 Sesame Street, Canada"
                    />
                    <EventCard
                        eventId={4}
                        selectedEventId={selectedEventId}
                        setSelectedEventId={setSelectedEventId}
                        imageSrc={Calendar}
                        eventTitle="Event Title"
                        startDate="Sept 1, 2024 at 8:00PM"
                        endDate="Sept 3, 2024 at 11:30AM"
                        groups={[Group.HiC, Group.CU, Group.Adults]}
                        location="123 Sesame Street, Canada"
                    />
                </div>
            </div>
        </div>
    );
}
