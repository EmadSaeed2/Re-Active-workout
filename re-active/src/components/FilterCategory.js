import { useState } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/exerciseCat.json";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    backgroundColor: "var(--react--lightGrey)",
    // marginBottom: "24px",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "100px",
    width: "30%",
    fontSize: "1.5rem",
    gap: "30px",
  },
  ddStyle: {
    width: "100%",
  },
  buttonWrapper: {
    marginTop: "30px",
  },
};

const FilterCategory = (props) => {
  let { exerciseData, setExerciseData } = props;
  console.log(props);
  const navigate = useNavigate();
  const [exerciseType, setExerciseType] = useState("");
  const [muscleType, setMuscleType] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const apiNinjasUrl = `https://api.api-ninjas.com/v1/exercises?type=${exerciseType}&muscle=${muscleType}&difficulty=${difficulty}`;

  // fetch api-ninja
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(apiNinjasUrl, {
      method: "GET",
      headers: { "X-Api-Key": "BL6BYitqkUgnFRbJJAz94g==R7cuLcmvlOJQ0OaT" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          alert("No matching exercises found, please refine search");
        } else {
          setExerciseData([...data]);
          navigate("/results");
        }
      })
      .catch((err) => console.log(err));

    // reset menus
    setExerciseType("");
    setMuscleType("");
    setDifficulty("");
    // setTypeMenu(false);
    // setMuscleMenu(false);
    // setDifficultyMenu(false);
  };

  return (
    <>
      <main style={styles.main}>
        <p style={{ marginTop: "100px" }}>Please select an option</p>
        <form className="filter-form" style={styles.form}>
          <Dropdown
            // disabled={typeMenu}
            onChange={(e) => {
              setExerciseType(e.value.toLocaleLowerCase());
              //   setMuscleMenu(true);
              //   setDifficultyMenu(true);
            }}
            style={{ backgroundColor: "red" }}
            options={categories[0]}
            value={exerciseType}
            placeholder="Select Exercise Type"
          />
          <Dropdown
            // disabled={muscleMenu}
            onChange={(e) => {
              setMuscleType(e.value.toLocaleLowerCase());
              //   setTypeMenu(true);
              //   setDifficultyMenu(true);
            }}
            style={styles.ddStyle}
            options={categories[1]}
            value={muscleType}
            placeholder="Select Targeted Muscle"
          />
          <Dropdown
            // disabled={difficultyMenu}
            onChange={(e) => {
              setDifficulty(e.value.toLocaleLowerCase());
              //   setTypeMenu(true);
              //   setMuscleMenu(true);
            }}
            style={styles.ddStyle}
            options={categories[2]}
            value={difficulty}
            placeholder="Select Difficulty"
          />
          <button className="buttonReact" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default FilterCategory;
