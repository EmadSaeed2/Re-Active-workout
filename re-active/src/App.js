import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />

      <div className="wrapper">
        <Home />
      </div>

      <Footer />
    </>

    // <Routes>
    // <Route path="/" element={}/>
    // </Routes>
  );
}

export default App;
