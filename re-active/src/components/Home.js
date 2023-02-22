import FilterCategory from "./FilterCategory";
import ExerciseSearch from "./ExerciseSearch";

const homeStyle = {
  h1Style: {
    display: "flex",
    justifyContent: "center",
    padding: "0px 10px 0px 10px",
    marginBottom: "24px"

  },
  main: {
    borderTop: "2px solid var(--react--black)",
    display: "flex",
    height: "100%",
    marginBottom: "24px"
  },
  excerciseStyle: {
    display: "flex",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--react--darkGrey)",
  },
  filterStyle: {
    display: "flex",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--react--lightGrey)",
  },
  titleStyle: {
    justifyContent: "center",
    color: "var(--react--yellow)",
  },
};

function Home(props) {
  let { homeStatus, setHomeStatus } = props;
  switch(homeStatus) {
    case "loadSearch":
      return (
        <ExerciseSearch homeStatus={homeStatus} setHomeStatus={setHomeStatus} />
      );
    case "FilterLoad":
      return (
        <FilterCategory homeStatus={homeStatus} setHomeStatus={setHomeStatus} />
      );
  }

  return (
    <>
      <h1 style={homeStyle.h1Style}>Let's Go!</h1>
      <main style={homeStyle.main}>
        <section 
          style={homeStyle.excerciseStyle}
          onClick={() => setHomeStatus("loadSearch")}
        >
          <h2 style={homeStyle.titleStyle}>Excercise Search</h2>

        </section>
        <section
          style={homeStyle.filterStyle}
          onClick={() => setHomeStatus("FilterLoad")}
        >
          <h2 style={homeStyle.titleStyle}>Filter by category</h2>
        </section>
      </main>
    </>
  );
}

export default Home;
