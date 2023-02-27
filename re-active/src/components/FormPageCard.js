import logo from "../images/ReactDumbellSiteColours.png";

const formPageCardStyles = {
  cardWrapper: {
    backgroundColor: "#fff",
    width: "85%",
    height: "100%",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "30px",
    margin: "0 10% 20px 10%",
    boxShadow: "0 0 5px var(--react--black)",
  },
  textWrapper: {
    padding: "30px 20px",
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
  image: {
    height: "auto",
    margin: "10%",
  },
  imagePlaceholder: {
    width: "30%",
    margin: "10% auto 10% auto",
  },
};
function FormPageCard(props) {
  let { userSelection } = props;
  return (
    <div className="cardWrapper" style={formPageCardStyles.cardWrapper}>
      <div style={formPageCardStyles.textWrapper}>
        <div style={formPageCardStyles.headerWrapper}>
          <h2 style={{ color: "var(--react--black" }}>{userSelection.name}</h2>
        </div>
        <p style={{ fontSize: "0.9em" }}>
          <strong>Instructions: </strong>
          {userSelection.instructions}
        </p>

        {userSelection.gif === "NA" ? (
          <img style={formPageCardStyles.imagePlaceholder} src={logo} />
        ) : (
          <img style={formPageCardStyles.image} src={userSelection.gif} />
        )}
        <ul style={formPageCardStyles.listWrapper}>
          <li style={formPageCardStyles.list}>
            <strong> Muscle:</strong> {userSelection.muscle.toUpperCase()}
          </li>
          <li style={formPageCardStyles.list}>
            <strong> Equipment:</strong> {userSelection.equipment.toUpperCase()}
          </li>
          <li style={formPageCardStyles.list}>
            <strong> Difficulty:</strong>{" "}
            {userSelection.difficulty.toUpperCase()}
          </li>
          <li style={formPageCardStyles.list}>
            <strong> Category:</strong> {userSelection.type.toUpperCase()}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FormPageCard;
