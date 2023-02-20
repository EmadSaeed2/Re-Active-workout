import categories from "../data/excerciseCat.json";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const styles = {
  main: {
    display: "flex",
    height: "100%",
    backgroundColor: "var(--react--lightGrey)",
    margin: "15px 0px",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
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
    console.log(choices);
    setHomeStatus("Results");
  }
  console.log(categories);
  if (homeStatus === "Results") {
    console.log("gogo results component");
  }
  return (
    <>
      <main style={styles.main}>
        <form>
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
          <button onClick={(e) => onSubmit(e)}>Submit</button>
        </form>
      </main>
    </>
  );
}
export default FilterCategory;
