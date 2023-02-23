const formPageCardStyles = {
  cardWrapper: {
    backgroundColor: "#fff",
    width: "85%",
    height: "90%",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "30px",
  },
  imageWrapper: {
    height: "40%",
    borderRadius: "4px 4px 0 0",
    backgroundColor: "#ccc",
    backgroundImage: `url('https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&h=650')`,
  },
  textWrapper: {
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
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    listStyle: "none",
    color: "var(--react--black)",
  },
};
function FormPageCard(props) {
  return (
    <div className="cardWrapper" style={formPageCardStyles.cardWrapper}>
      <div
        className="imageWrapper"
        style={{
          height: "100px",
          borderRadius: "4px 4px 0 0",
          backgroundColor: "#ccc",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${props.userSelection.title.image_link})`,
        }}
      ></div>
      <div style={formPageCardStyles.textWrapper}>
        <div style={formPageCardStyles.headerWrapper}>
          <h2 style={{ color: "var(--react--black" }}>
            {props.userSelection.exercise}
          </h2>
        </div>
        <p style={{ fontSize: "0.9em" }}>
          <strong>Instructions: </strong>
          {props.userSelection.title.instructions}
        </p>
        <ul style={formPageCardStyles.listWrapper}>
          <li style={formPageCardStyles.list}>
            <strong> Muscle:</strong>{" "}
            {props.userSelection.title.muscle.toUpperCase()}
          </li>
          <li style={formPageCardStyles.list}>
            <strong> Equipment:</strong>{" "}
            {props.userSelection.title.equipment.toUpperCase()}
          </li>
          <li style={formPageCardStyles.list}>
            <strong> Difficulty:</strong>{" "}
            {props.userSelection.title.difficulty.toUpperCase()}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FormPageCard;
