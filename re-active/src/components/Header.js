import { NavLink } from "react-router-dom";
const headerCSS = {
  headerStyle: {
    backgroundColor: "var(--react--black)",
    color: "var(--react--yellow)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "75px",
  },
  navStyle: {
    display: "flex",
  },
  linkStyle: {
    textDecoration: "none",
    padding: "5px 15px 5px 10px",
    color: "var(--react--yellow)",
  },
};
function Header() {
  return (
    <header style={headerCSS.headerStyle}>
      <img alt="Re-Active Logo" />
      <nav style={headerCSS.navStyle}>
        <NavLink to="/" style={headerCSS.linkStyle}>
          Home
        </NavLink>
        <NavLink to="/history" style={headerCSS.linkStyle}>
          History
        </NavLink>
        <NavLink to="/contact" style={headerCSS.linkStyle}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
