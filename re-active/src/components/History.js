import React, { useRef, useEffect } from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'

const locales = { "en-US": require("date-fns/locale/en-us") }
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales })

const historyStyles = {
    title: {
        height: "58px",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
    },
    calendarWrapper: {
        height: "100%",
        backgroundColor: "var(--react--darkGrey)",
        padding: "50px 70px 100px 70px",
    }
}

function History() {
    // Get data from local storage
    let exercises = JSON.parse(localStorage.getItem("exercises"));
    if (!exercises) {
        exercises = [];
    }

    const handleClick = e => {
        if (e.target.className === 'rbc-event-content') {
            const details = e.target.getAttribute('title')

            console.log(JSON.parse(details).age)
        }
    };

    return (<>
        <div>
            <h1 style={historyStyles.title}>Your Workout Calendar</h1>
        </div>
        <div style={historyStyles.calendarWrapper} onClick={handleClick}>
            <Calendar
                localizer={localizer}
                events={exercises}
                startAccessor="start"
                endAccessor="end"
                style={{ background: "#fff" }}
                titleAccessor="exercise"
            />
        </div>
    </>)
}

export default History;