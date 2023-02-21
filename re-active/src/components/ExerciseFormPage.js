import { useState } from 'react'

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

    },
    exForm: {
        height: "90%",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    exFormInput: {
        padding: "16px 12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    inputDate: {

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


function ExerciseFormPage() {
    const [dateInputType, setDateInputType] = useState('text');
    const [timeInputType, setTimeInputType] = useState('text');
    return (
        <>
            <div style={exFormPageStyles.yellowStrip}></div>
            <div className="exFormPageContainer" style={exFormPageStyles.exFormPageContainer}>
                <div style={exFormPageStyles.exFormPageCardContainer}>a</div>
                <div style={exFormPageStyles.exFormPageCardContainer}>
                    <form style={exFormPageStyles.exForm}>
                        <input style={exFormPageStyles.exFormInput} id="ex-date" type={dateInputType} placeholder="Date"
                            onFocus={() => { setDateInputType('date') }} onBlur={() => { setDateInputType('text') }}
                            onChange={() => { }} />
                        <input style={exFormPageStyles.exFormInput} id="ex-time" type={timeInputType} placeholder="Start at"
                            onFocus={() => { setTimeInputType('time') }} onBlur={() => { setTimeInputType('text') }}
                            onChange={() => { }} />
                        <input style={exFormPageStyles.exFormInput} placeholder="Load(kg)" id="ex-load" type="number" />
                        <input style={exFormPageStyles.exFormInput} placeholder="Rep Range" id="ex-rep-range" type="text" />
                        <input style={exFormPageStyles.exFormInput} placeholder="No. of Sets" id="ex-no-of-sets" type="number" />
                        <input style={exFormPageStyles.exFormInput} placeholder="Duration (minutes)" id="ex-duration" type="number" />
                        <button style={exFormPageStyles.exFormButton} type="submit">Save To Calendar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ExerciseFormPage;