import { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  main: {
    display: "flex",
    flexGrow: "1",
    backgroundColor: "var(--react--lightGrey)",
    marginBottom: "24px",
    justifyContent: "center",
  },
  formWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "100px",
    width: "100%",
  },
  formInput: {
    width: "100%",
    padding: "8px 32px 8px 32px",
    marginBottom: "48px",
    boxShadow: "0px 0px 20px 3px rgba(0,0,0,0.1)",
    border: "0px solid transparent",
    borderRadius: "5px",
    height: "60px",
    fontSize: "1rem",
  },
  button: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
    background: "var(--react--black)",
    color: "var(--react--yellow)",
    border: "var(--react--black) 2px solid",
    padding: "2px 4px",
    borderRadius: "5px",
    boxShadow: "0 0 5px var(--react--yellow)",
    width: "50%",
    margin: "0px 25%",
  },
};

function ExerciseSearch(props) {
  let { exerciseData, setExerciseData } = props;
  const [exerciseName, setExerciseName] = useState("");
  const navigate = useNavigate();

  const apiNinjasUrl = `https://api.api-ninjas.com/v1/exercises?name=${exerciseName}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(apiNinjasUrl);
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
  };

  return (
    <>
      <main style={styles.main}>
        <div style={styles.formWrapper}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder={"Search by exercise name..."}
              style={styles.formInput}
              onChange={(event) => setExerciseName(event.target.value)}
            />
            <button className="buttonReact">Search</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default ExerciseSearch;
