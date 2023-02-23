import { useState } from "react";
import testData from "../data/testExcerciseData.json";
import logo from "../images/ReactDumbellSiteColours.png"; //TEMP IMAGE
const apiKey = "tyKkR6aVa1kcx3egsUokWA==JKPcXBMyGNHKchV1";

const resultsCSS = {
  main: {
    display: "flex",
    flexGrow: "1",
    backgroundColor: "var(--react--lightGrey)",
    margin: "24px 0px",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
    padding: "10px 20px",
  },
  h1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--react--yellow)",
  },
  logoStyle: {
    maxWidth: "100px",
    marginRight: "10px",
    padding: "5px",
  },
};

function Results(props) {
  let [results, setResults] = useState(false);
  let userSelection = props.filterCat;
  function capitalise(string) {
    let firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.slice(1);
  }
  // fetch api here using user selection and .then the main
  fetch(
    `https://api.api-ninjas.com/v1/exercises?muscle=${userSelection.muscleType}`,
    {
      headers: { "X-Api-Key": apiKey },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      setResults(data);
    })
    .catch((err) => console.error(err));
  if (!results) {
    return (
      <main style={resultsCSS.main}>
        <h1 style={resultsCSS.h1}>Your results will load shortly!</h1>
      </main>
    );
  } else {
    return (
      <main style={resultsCSS.main}>
        {results.map((data, index) => {
          return (
            <div className="resultCard" key={index}>
              <h3 className="resultData"> {data.name}</h3>
              <p>
                Target Muscle:
                <span className="resultData"> {capitalise(data.muscle)}</span>
              </p>
              <p>
                Equipment used:
                <span className="resultData">
                  {" "}
                  {capitalise(data.equipment)}
                </span>
              </p>
              <p>
                Difficulty:{" "}
                <span className="resultData">
                  {capitalise(data.difficulty)}
                </span>
              </p>

              <img
                src={logo}
                alt="Re-Active Logo"
                style={resultsCSS.logoStyle}
              />
              <button className="buttonReact">Select</button>
            </div>
          );
        })}
      </main>
    );
  }
}

export default Results;
