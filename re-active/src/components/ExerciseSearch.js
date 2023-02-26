import { useState } from "react";

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
  const { homeStatus, setHomeStatus } = props;

  const [exerciseName, setExerciseName] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    alert(`The exercise you entered was: ${exerciseName}`);
    setHomeStatus("Results");
  }
  if (homeStatus === "Results") {
    // return <Results homeStatus={homeStatus} setHomeStatus={setHomeStatus} />
  }

  return (
    <>
      <main style={styles.main}>
        <div style={styles.formWrapper}>
          <form>
            <input
              type="text"
              value={exerciseName}
              placeholder={"Search by exercise name..."}
              style={styles.formInput}
              onChange={(event) => setExerciseName(event.target.value)}
            />
            <button style={styles.button} onClick={(event) => onSubmit(event)}>
              Search
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default ExerciseSearch;
