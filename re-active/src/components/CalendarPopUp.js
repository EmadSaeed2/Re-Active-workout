const calPopUpStyle = {
  fadedBG: {
    width: "100%",
    height: "100%",
    backgroundColor: "var(--react--yellow)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10",
    position: "absolute",
    paddingTop: "25px",
  },
  cardWrapper: {
    backgroundColor: "#fff",
    width: "60%",
    height: "100%",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "30px",
    boxShadow: "5px 5px 15px 5px #999",
  },
  imageWrapper: {
    height: "40%",
    borderRadius: "4px 4px 0 0",
    backgroundColor: "#ccc",
    backgroundImage: `url('https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&h=650')`,
  },
  textWrapper: {
    marginTop: "20px",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "60%",
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "10px auto",
  },
  listWrapper: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    listStyle: "none",
    color: "var(--react--black)",
  },
};

function CalendarPopUp(props) {
  const { displayPopUp, setDisplayPopUp } = props;
  function closePopup(e) {
    e.preventDefault();
    setDisplayPopUp("none");
  }

  return (
    <div style={calPopUpStyle.fadedBG}>
      <div className="popUpCardWrapper" style={calPopUpStyle.cardWrapper}>
        <button
          className="buttonReact"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "10%",
            margin: "0 0 20px 0px",
            zIndex: "0",
          }}
          onClick={(e) => closePopup(e)}
        >
          Back
        </button>
        <div
          className="imageWrapper"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "4px 4px 0 0",
            backgroundColor: "#ccc",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: props.exData && `url(${props.exData.img})`,
          }}
        ></div>
        <div style={calPopUpStyle.textWrapper}>
          <div style={calPopUpStyle.headerWrapper}>
            <h2
              style={{
                color: "var(--react--darkGrey)",
                textDecoration: "underline",
              }}
            >
              {props.exData && props.exData.exercise}
            </h2>
          </div>

          <p style={{ fontSize: "0.9em" }}>
            <strong>Instructions: </strong>
            {props.exData && props.exData.instructions}
          </p>
          <ul style={calPopUpStyle.listWrapper}>
            <li style={calPopUpStyle.list}>
              <strong> Muscle:</strong> {props.exData && props.exData.muscle}
            </li>
            <li style={calPopUpStyle.list}>
              <strong> Equipment:</strong>{" "}
              {props.exData && props.exData.equipment}
            </li>
            <li style={calPopUpStyle.list}>
              <strong> Difficulty:</strong>{" "}
              {props.exData && props.exData.difficulty}
            </li>
          </ul>
          <ul style={calPopUpStyle.listWrapper}>
            <li style={calPopUpStyle.list}>
              <strong> Load:</strong> {props.exData && props.exData.load}
            </li>
            <li style={calPopUpStyle.list}>
              <strong> Num sets:</strong>{" "}
              {props.exData && props.exData.noOfSets}
            </li>
            <li style={calPopUpStyle.list}>
              <strong> Rep range:</strong>{" "}
              {props.exData && props.exData.repRange}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CalendarPopUp;
