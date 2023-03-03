import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/ReactDumbellSiteColours.png";

const headerCSS = {
  headerStyle: {
    backgroundColor: "var(--react--black)",
    color: "var(--react--yellow)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    padding: "0px 28px",
    marginBottom: "24px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
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
  let navigate = useNavigate();
  let { navUnderline, setNavUnderline } = props;
  return (
    <header style={headerCSS.headerStyle}>
      <div style={headerCSS.logoContainer} onClick={() => navigate("/")}>
        <img src={logo} alt="Re-Active Logo" style={headerCSS.logoStyle} />
        <h1>ReActive Workout Planner</h1>
      </div>
      <nav style={headerCSS.navStyle}>
        <NavLink
          className="nav"
          isactive={navUnderline === "home" ? "home" : ""}
          to="/"
          style={headerCSS.linkStyle}
        >
          Home
        </NavLink>
        <NavLink
          className="nav"
          isactive={navUnderline === "history" ? "history" : ""}
          to="/history"
          style={headerCSS.linkStyle}
        >
          History
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
