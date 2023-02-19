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

const events = [
    {
        resourceId: 1,
        title: "Mario Crunch",
        start: new Date('2023-02-16 16:15:00'),
        end: new Date('2023-02-16 16:45:00'),
    },
    {
        resourceId: 2,
        title: "Handstand push-ups",
        start: new Date('2023-02-17 16:15:00'),
        end: new Date('2023-02-17 16:45:00')
    },
    {
        resourceId: 3,
        title: "Abs Workout",
        start: new Date('2023-02-17 17:15:00'),
        end: new Date('2023-02-17 17:45:00')
    },
]

const resourceMap = [
    { resourceId: 1, resourceTitle: 'Board room' },
    { resourceId: 2, resourceTitle: 'Training room' },
    { resourceId: 3, resourceTitle: 'Meeting room 1' }
]

function History() {
    return (<>
        <div>
            <h1 style={historyStyles.title}>Your Workout Calendar</h1>
        </div>
        <div style={historyStyles.calendarWrapper}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ background: "#fff" }}
                resources={resourceMap}
                resourceIdAccessor="resourceId"
                resourceTitleAccessor="resourceTitle"
            />
        </div>
    </>)
}

export default History;