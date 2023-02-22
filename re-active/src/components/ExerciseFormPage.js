import { useState } from 'react'
import FormPageCard from './FormPageCard';
import format from 'date-fns/format'

const exFormPageStyles = {
    yellowStrip: {
        height: "30px",
        backgroundColor: "var(--react--yellow)"
    },
    exFormPageContainer: {
        display: "Flex",
        height: "100%",
        width: "100%",
        backgroundColor: "var(--react--lightGrey)"
    },
    exFormPageCardContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "70px"
    },

    exForm: {
        height: "90%",
        width: "85%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    exFormInput: {
        padding: "16px 12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    exForH1: {
        color: "var(--react--yellow",
        textAlign: "center"
    },
    exFormButton: {
        border: "none",
        borderRadius: "4px",
        fontSize: "1.3em",
        color: "var(--react--yellow)",
        backgroundColor: "var(--react--black)",
        padding: "12px 24px",
        textDecoration: "none",
        marginTop: "30px",
        cursor: "pointer",
    }

}

function ExerciseFormPage(props) {
    const [dateInputType, setDateInputType] = useState('text');
    const [timeInputType, setTimeInputType] = useState('text');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedLoad, setSelectedLoad] = useState('');
    const [selectedRepRange, setSelectedRepRange] = useState('');
    const [selectedNoOfSets, setSelectedNoOfSets] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        // Date functionality
        let startTime = `${selectedDate} ${selectedTime}:00`
        startTime = format(new Date(startTime), 'yyyy-MM-dd HH:mm:ss')
        let endTime = new Date(startTime)
        endTime = format(endTime.setMinutes(endTime.getMinutes() + parseInt(selectedDuration)), 'yyyy-MM-dd HH:mm:ss')
        const titleObj = { ...props.userSelection.title, load: selectedLoad, repRange: selectedRepRange, noOfSets: selectedNoOfSets }
        const exercise = { ...props.userSelection, start: startTime, end: endTime, title: JSON.stringify(titleObj) }
        console.log(exercise)

        // submit to local storage
        let exercises = JSON.parse(localStorage.getItem("exercises"));

        if (!exercises) {
            exercises = [];
        }
        exercises.push({ ...exercise });
        localStorage.setItem("exercises", JSON.stringify(exercises));
    }

    return (
        <>
            <div style={exFormPageStyles.yellowStrip}></div>
            <div className="exFormPageContainer" style={exFormPageStyles.exFormPageContainer}>
                <div className='exFormPageCardContainer' style={exFormPageStyles.exFormPageCardContainer}>
                    <FormPageCard userSelection={props.userSelection} />
                </div>
                <div className='exFormPageCardContainer' style={exFormPageStyles.exFormPageCardContainer}>
                    <form onSubmit={handleSubmit} className='exForm' style={exFormPageStyles.exForm}>
                        <h1 style={exFormPageStyles.exForH1}>Plan Your Workout</h1>

                        {/* date */}
                        <input style={exFormPageStyles.exFormInput} id="ex-date" type={dateInputType} placeholder="Date"
                            onFocus={() => { setDateInputType('date') }} onBlur={() => { setDateInputType('text') }}
                            onChange={e => { setSelectedDate(e.target.value) }} value={selectedDate} />

                        {/* time */}
                        <input style={exFormPageStyles.exFormInput} id="ex-time" type={timeInputType} placeholder="Start at"
                            onFocus={() => { setTimeInputType('time') }} onBlur={() => { setTimeInputType('text') }}
                            onChange={e => { setSelectedTime(e.target.value) }} value={selectedTime} />

                        {/* load */}
                        <input style={exFormPageStyles.exFormInput} placeholder="Load(kg)" id="ex-load" type="number" value={selectedLoad}
                            onChange={e => { setSelectedLoad(e.target.value) }}
                        />

                        {/* rep-range */}
                        <input style={exFormPageStyles.exFormInput} placeholder="Rep Range" id="ex-rep-range" type="text" value={selectedRepRange}
                            onChange={e => { setSelectedRepRange(e.target.value) }}
                        />

                        {/* no-of-sets */}
                        <input style={exFormPageStyles.exFormInput} placeholder="No. of Sets" id="ex-no-of-sets" type="number" value={selectedNoOfSets}
                            onChange={e => { setSelectedNoOfSets(e.target.value) }}
                        />

                        {/* duration */}
                        <input style={exFormPageStyles.exFormInput} placeholder="Duration (minutes)" id="ex-duration" type="number" value={selectedDuration}
                            onChange={e => { setSelectedDuration(e.target.value) }}
                        />
                        <button style={exFormPageStyles.exFormButton} type="submit">Save To Calendar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ExerciseFormPage;