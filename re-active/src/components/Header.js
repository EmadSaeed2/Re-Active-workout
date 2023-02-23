import { NavLink } from "react-router-dom";
import logo from "../images/ReactDumbellSiteColours.png";

const headerCSS = {
  headerStyle: {
    backgroundColor: "var(--react--black)",
    color: "var(--react--yellow)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
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
    maxWidth: "100px",
    marginRight: "10px",
  },
};
function Header(props) {
  let { homeStatus, setHomeStatus, navUnderline, setNavUnderline } = props;
  return (
    <header style={headerCSS.headerStyle}>
      <div style={headerCSS.logoContainer}>
        <img src={logo} alt="Re-Active Logo" style={headerCSS.logoStyle} />
        <h1>ReActive Workout Planner</h1>
      </div>
      <nav style={headerCSS.navStyle}>
        <NavLink
          className="nav"
          isactive={navUnderline === "home" ? "home" : ""}
          to="/"
          style={headerCSS.linkStyle}
          onClick={() => setHomeStatus("Home")}
        >
          Home
        </NavLink>
        <NavLink
          className="nav"
          isactive={navUnderline === "history" ? "history" : ""}
          to="/history"
          style={headerCSS.linkStyle}
          onClick={() => setHomeStatus("Home")}
        >
          History
        </NavLink>
        <NavLink
          className="nav"
          isactive={navUnderline === "contact" ? "contact" : ""}
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
