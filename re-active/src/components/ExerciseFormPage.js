import { useState } from 'react'
import FormPageCard from './FormPageCard';

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
                <div className='exFormPageCardContainer' style={exFormPageStyles.exFormPageCardContainer}>
                    <FormPageCard />
                </div>
                <div className='exFormPageCardContainer' style={exFormPageStyles.exFormPageCardContainer}>
                    <form className='exForm' style={exFormPageStyles.exForm}>
                        <h1 style={{ color: "var(--react--yellow", textAlign: "center" }}>Plan Your Workout</h1>
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