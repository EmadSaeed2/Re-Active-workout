import testData from "../data/testExcerciseData.json";
import logo from "../images/ReactDumbellSiteColours.png"; //TEMP IMAGE

const resultsCSS = {
  main: {
    display: "flex",
    height: "100%",
    backgroundColor: "var(--react--lightGrey)",
    margin: "24px 0px",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
    padding: "10px 20px",
  },
  logoStyle: {
    maxWidth: "100px",
    marginRight: "10px",
    padding: "5px",
  },
};

function Results(props) {
  let userSelection = props.filterCat;
  console.log(userSelection);
  function capitalise(string) {
    let firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.slice(1);
  }
  // fetch api here using user selection and .then the main
  return (
    <main style={resultsCSS.main}>
      {/* below testData to be replaced by fetch response from api  */}
      {testData.map((data, index) => {
        console.log(data);
        return (
          <div className="resultCard" key={index}>
            <h3 className="resultData"> {data.name}</h3>
            <p>
              Target Muscle:
              <span className="resultData"> {capitalise(data.muscle)}</span>
            </p>
            <p>
              Equipment used:
              <span className="resultData"> {capitalise(data.equipment)}</span>
            </p>
            <p>
              Difficulty:{" "}
              <span className="resultData">{capitalise(data.difficulty)}</span>
            </p>

            <img src={logo} alt="Re-Active Logo" style={resultsCSS.logoStyle} />
            <button className="buttonReact">Select</button>
          </div>
        );
      })}
    </main>
  );
}

export default Results;
