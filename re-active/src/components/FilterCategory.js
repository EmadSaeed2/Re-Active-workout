import categories from "../data/excerciseCat.json";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const styles = {
  main: {
    display: "flex",
    height: "100%",
    backgroundColor: "var(--react--lightGrey)",
    marginBottom: "24px",
    justifyContent: "center",
  },
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingBottom: "100px",
    width: "40%",
    fontSize: "1.5rem",
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
function FilterCategory(props) {
  let { homeStatus, setHomeStatus } = props;
  let choices = {
    excerciseType: "",
    muscleType: "",
    difficulty: "",
  };
  function onSubmit(e) {
    e.preventDefault();
    setHomeStatus("Results");
  }
  console.log(categories);
  if (homeStatus === "Results") {
    console.log(
      "Then we activate the code below, once component is good to go :)"
    );
    //   return (<Results homeStatus={homeStatus} setHomeStatus={setHomeStatus} />
    // );
  }
  return (
    <>
      <main style={styles.main}>
        <form style={styles.form}>
          <Dropdown
            onChange={(e) => (choices.excerciseType = e.value)}
            style={styles.ddStyle}
            options={categories[0]}
            value="Excercise Type"
            placeholder="Select an option"
          />
          <Dropdown
            onChange={(e) => (choices.muscleType = e.value)}
            style={styles.ddStyle}
            options={categories[1]}
            value="Muscle Type"
            placeholder="Select an option"
          />
          <Dropdown
            onChange={(e) => (choices.difficulty = e.value)}
            style={styles.ddStyle}
            options={categories[2]}
            value="Difficulty"
            placeholder="Select an option"
          />
          <button style={styles.button} onClick={(e) => onSubmit(e)}>
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
export default FilterCategory;
