const calPopUpStyle = {
    fadedBG: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(169, 152, 100, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "10",
        position: "absolute"

    },
    cardWrapper: {
        backgroundColor: "#fff",
        width: "60%",
        height: "50%",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "30px",
        boxShadow: "5px 5px 15px 5px #999"
    },
    imageWrapper: {
        height: "40%",
        borderRadius: "4px 4px 0 0",
        backgroundColor: "#ccc",
        backgroundImage: `url('https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&h=650')`
    },
    textWrapper: {
        marginTop: "20px",
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

    console.log(props.exData)

    return (
        <div style={calPopUpStyle.fadedBG}>
            <div className="popUpCardWrapper" style={calPopUpStyle.cardWrapper}>

                <div className="imageWrapper" style={{
                    height: "50%",
                    borderRadius: "4px 4px 0 0",
                    backgroundColor: "#ccc",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: props.exData && `url(${props.exData.image_link})`
                }}></div>
                <div style={calPopUpStyle.textWrapper}>
                    <div style={calPopUpStyle.headerWrapper}>
                        <h2 style={{ color: "var(--react--black" }}>{props.exData && props.exData.exercise}</h2>
                    </div>
                    <p style={{ fontSize: "0.9em" }}><strong>Instructions: </strong>{props.exData && props.exData.instructions}</p>
                    <ul style={calPopUpStyle.listWrapper}>
                        <li style={calPopUpStyle.list}><strong> Muscle:</strong> {props.exData && props.exData.muscle.toUpperCase()}</li>
                        <li style={calPopUpStyle.list}><strong> Equipment:</strong> {props.exData && props.exData.equipment.toUpperCase()}</li>
                        <li style={calPopUpStyle.list}><strong> Difficulty:</strong> {props.exData && props.exData.difficulty.toUpperCase()}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CalendarPopUp