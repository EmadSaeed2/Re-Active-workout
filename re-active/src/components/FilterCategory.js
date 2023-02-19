import categories from "../data/excerciseCat.json";
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
function FilterCategory() {
  console.log(categories);
  return (
    <>
      <main style={styles.main}>
        <section>Excercise Type</section>
        <section>Muscle Type</section>
        <section>Difficulty</section>
      </main>
    </>
  );
}
export default FilterCategory;
