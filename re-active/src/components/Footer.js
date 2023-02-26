const footerStyle = {
  // display: "block",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "24px",
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>©2023 ReActive Workout Planner</p>
    </footer>
  );
}

export default Footer;
