import { NavLink } from "react-router-dom";
import logo from "../images/ReactDumbellSiteColours.png";

const headerCSS = {
  headerStyle: {
    backgroundColor: "var(--react--black)",
    color: "var(--react--yellow)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
    padding: "0px 28px",
    marginBottom: "24px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  navStyle: {
    display: "flex",
  },
  linkStyle: {
    textDecoration: "none",
    padding: "5px 15px 5px 10px",
    color: "var(--react--yellow)",
  },
  logoStyle: {
    maxWidth: "90px",
    marginRight: "10px",
  },
};
function Header(props) {
  let { homeStatus, setHomeStatus } = props;
  return (
    <header style={headerCSS.headerStyle}>
      <div style={headerCSS.logoContainer}>
        <img src={logo} alt="Re-Active Logo" style={headerCSS.logoStyle} />
        <h1>ReActive Workout Planner</h1>
      </div>
      <nav style={headerCSS.navStyle}>
        <NavLink
          to="/"
          style={headerCSS.linkStyle}
          onClick={() => setHomeStatus("Home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/history"
          style={headerCSS.linkStyle}
          onClick={() => setHomeStatus("Home")}
        >
          History
        </NavLink>
        <NavLink
          to="/contact"
          style={headerCSS.linkStyle}
          onClick={() => setHomeStatus("Home")}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
