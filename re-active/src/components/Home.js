import { NavLink } from "react-router-dom";
const homeStyle = {
  h1Style: {
    display: "flex",
    justifyContent: "center",
    padding: "0px 10px 0px 10px",
    marginBottom: "24px",
    height: "10%",
  },
  main: {
    borderTop: "2px solid var(--react--black)",
    display: "flex",
    flexGrow: "1",
    marginBottom: "24px",
  },
  excerciseStyle: {
    display: "flex",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--react--darkGrey)",
    cursor: "pointer",
    textDecoration: "none",
  },
  filterStyle: {
    display: "flex",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--react--lightGrey)",
    cursor: "pointer",
    textDecoration: "none",
  },
  titleStyle: {
    justifyContent: "center",
    color: "var(--react--yellow)",
  },
};

function Home() {
  return (
    <>
      <h1 style={homeStyle.h1Style}>Let's Go!</h1>
      <main style={homeStyle.main}>
        <NavLink to="/exercise-search" style={homeStyle.excerciseStyle}>
          <h2 style={homeStyle.titleStyle}>Exercise Search</h2>
        </NavLink>
        <NavLink to="/filter-category" style={homeStyle.filterStyle}>
          <h2 style={homeStyle.titleStyle}>Filter by category</h2>
        </NavLink>
      </main>
    </>
  );
}

export default Home;
