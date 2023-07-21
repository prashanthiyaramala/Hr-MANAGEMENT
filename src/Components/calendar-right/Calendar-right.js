import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useRef, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import moment from "moment";
//import { set } from "date-fns";

const locales = {
    "en-IN": require("date-fns/locale/en-IN"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = new Set();

function isDuplicateEvent(event) {
    for (const existingEvent of events) {
        if (
            existingEvent.start.getTime() === event.start.getTime() &&
            existingEvent.end.getTime() === event.end.getTime() &&
            existingEvent.title === event.title
        ) {
            return true; // Found a duplicate event
        }
    }
    return false; // No duplicate event found
}

function Calendar_right() {
  const [events, setEvents] = useState(new Set());

  const userValid = async () => {
    try {
        // API request...
        const response = await fetch("http://localhost:8000/r", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        if (response.status === 200) {
            const updatedEvents = new Set(events);

            // Add fetched events
            for (let j = 0; j < data[1].length; j++) {
                const newEvent1 = {
                    start: data[1][j].birthday,
                    end: data[1][j].birthday,
                    title: "birthday of " + data[1][j].username,
                };
                if (!isDuplicateEvent(newEvent1)) {
                    updatedEvents.add(newEvent1);
                }
            }
            for(let j=0;j<data[0].length;j++){
                const newEvent1 = {
                    start: data[0][j].start.date,
                    end: data[0][j].start.date,
                    title: data[0][j].summary,
                };
                if (!isDuplicateEvent(newEvent1)) {
                    updatedEvents.add(newEvent1);
                }
            }

            setEvents(updatedEvents);
        } else {
            console.log('err');
        }
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    userValid();
}, []);

    return (
        <div className="Calendar_right" style = {{ width: "150vh"}}>
            <h1>Calendar</h1>
            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: "500px", margin: "70px" }} />
        </div>
    );
}

export default Calendar_right;