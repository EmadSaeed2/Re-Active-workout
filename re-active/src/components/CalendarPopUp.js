const calPopUpStyle = {
    fadedBG: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(155, 155, 147, 0.286)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cardWrapper: {
        backgroundColor: "#fff",
        width: "70%",
        height: "70%",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "30px"
    },
    imageWrapper: {
        height: "40%",
        borderRadius: "4px 4px 0 0",
        backgroundColor: "#ccc",
        backgroundImage: `url('https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&h=650')`
    },
    textWrapper: {
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "60%"

    },
    headerWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "10px auto"
    },
    listWrapper: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
    },
    list: {
        listStyle: "none",
        color: "var(--react--black)"
    }
}


function CalendarPopUp(props) {
    return (
        <div style={calPopUpStyle.fadedBG}><div className="popUpCardWrapper" style={calPopUpStyle.cardWrapper}>

            <div className="imageWrapper" style={{
                height: "50%",
                borderRadius: "4px 4px 0 0",
                backgroundColor: "#ccc",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${props.userSelection.title.image_link})`
            }}></div>
            <div style={calPopUpStyle.textWrapper}>
                <div style={calPopUpStyle.headerWrapper}>
                    <h2 style={{ color: "var(--react--black" }}>{props.userSelection.exercise}</h2>
                </div>
                <p style={{ fontSize: "0.9em" }}><strong>Instructions: </strong>{props.userSelection.title.instructions}</p>
                <ul style={calPopUpStyle.listWrapper}>
                    <li style={calPopUpStyle.list}><strong> Muscle:</strong> {props.userSelection.title.muscle.toUpperCase()}</li>
                    <li style={calPopUpStyle.list}><strong> Equipment:</strong> {props.userSelection.title.equipment.toUpperCase()}</li>
                    <li style={calPopUpStyle.list}><strong> Difficulty:</strong> {props.userSelection.title.difficulty.toUpperCase()}</li>
                </ul>
            </div>
        </div></div>
    )
}

export default CalendarPopUp