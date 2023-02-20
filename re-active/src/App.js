import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  let [homeStatus, setHomeStatus] = useState("Home");

  return (
    <>
      <Header />

      <div className="wrapper">
        <Home homeStatus={homeStatus} setHomeStatus={setHomeStatus} />
      </div>

      <Footer />
    </>

    // <Routes>
    // <Route path="/" element={}/>
    // </Routes>
  );
}

export default App;
