import categories from "../data/excerciseCat.json";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Results from "./Results";

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
};
function FilterCategory(props) {
  console.log(props);
  let { homeStatus, setHomeStatus, filterCat, setFilterCat } = props;
  let choices = {
    excerciseType: "",
    muscleType: "",
    difficulty: "",
  };
  function onSubmit(e) {
    e.preventDefault();
    setHomeStatus("Results");
    setFilterCat(choices);
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
          <button className="buttonReact" onClick={(e) => onSubmit(e)}>
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
export default FilterCategory;
