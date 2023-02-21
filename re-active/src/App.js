import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import History from "./components/History";
import ExerciseForm from "./components/ExerciseFormPage";
import userSelectionData from "./components/userSelectionData"

function App() {
  const [userSelection, setUserSelection] = useState(userSelectionData);
  console.log(userSelection)
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/exercise-form" element={<ExerciseForm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
