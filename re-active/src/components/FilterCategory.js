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
    alignItems: "center"
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:"100%"
   },
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "100px",
    width: "40%",
    fontSize: "1.5rem",
    gap: "30px",
  },
  buttonWrapper:{
    marginTop: "30px"
  }
  
};
function FilterCategory(props) {
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
        <div style={styles.formContainer}>
          <form style={styles.form}>
            <Dropdown
              onChange={(e) => (choices.excerciseType = e.value)}
              options={categories[0]}
              value="Excercise Type"
              placeholder="Select an option"
            />
            <Dropdown
              onChange={(e) => (choices.muscleType = e.value)}
              options={categories[1]}
              value="Muscle Type"
              placeholder="Select an option"
            />
            <Dropdown
              onChange={(e) => (choices.difficulty = e.value)}
              options={categories[2]}
              value="Difficulty"
              placeholder="Select an option"
            />
            <div style={styles.buttonWrapper}>
              <button className="buttonReact" onClick={(e) => onSubmit(e)}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
export default FilterCategory;
