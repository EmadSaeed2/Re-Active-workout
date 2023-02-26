import { useState, useEffect } from "react";
import testData from "../data/testExcerciseData.json";
import logo from "../images/ReactDumbellSiteColours.png"; //TEMP IMAGE

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
  const [pageState, setPageState] = useState(false);
  // for each excercise take name and fetch with name as search paramater and then add gif url to the original array
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d620a14592msh467d7fce2a6bb8cp1b6de7jsn6f8296620e92",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const [apiUrl, setApiUrl] = useState(
    "https://exercisedb.p.rapidapi.com/exercises/name/"
  );
  const loadResults = false;

  let { exerciseData, setExcerciseData } = props;
  useEffect(() => {
    exerciseData.forEach((data, index) => {
      const exer = data.name.toLocaleLowerCase();
      const url = apiUrl + exer;
      fetch(url, options)
        .then((res) => {
          if (res.status === 429) {
            throw new Error("API limit reached");
          }
          return res.json();
        })
        .then((set) => {
          data.gif = set[0]?.gifUrl || "No Gif Available";
        })
        .catch((err) => console.error(err));
    });

    setPageState(true);
  }, [exerciseData, apiUrl, options]);

  function selected(e, ex) {
    e.preventDefault();
    console.log(ex);
  }

  if (pageState === false) {
    return <main>Loading Results BOY</main>;
  } else {
    return (
      <main style={resultsCSS.main}>
        {exerciseData.map((data, index) => {
          return (
            <div className="resultCard" key={index}>
              <h3 className="resultData"> {data.name}</h3>
              <p>
                {" "}
                Target Muscle:{" "}
                <span className="resultData"> {data.muscle}</span>
              </p>
              <p>
                {" "}
                Equipment used:{" "}
                <span className="resultData"> {data.equipment}</span>
              </p>
              <p>
                {" "}
                Difficulty:{" "}
                <span className="resultData"> {data.difficulty} </span>{" "}
              </p>

              {data.gif === "No Gif Available" ? (
                <p>{data.gif}</p>
              ) : (
                <img
                  src={data.gif}
                  alt="Re-Active Logo"
                  style={resultsCSS.logoStyle}
                />
              )}
              <button
                className="buttonReact"
                onClick={(e) => selected(e, data)}
              >
                Select
              </button>
            </div>
          );
        })}
      </main>
    );
  }
}

export default Results;
