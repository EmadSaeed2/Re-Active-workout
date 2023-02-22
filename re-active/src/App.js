import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import History from "./components/History";
import ExerciseFormPage from "./components/ExerciseFormPage";
import userSelectionData from "./components/userSelectionData"
import CalendarPopUp from "./components/CalendarPopUp";

function App() {
  const [userSelection, setUserSelection] = useState(userSelectionData);
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History userSelection={userSelection} setUserSelection={setUserSelection} />} />
          <Route path="/exercise-form" element={<ExerciseFormPage userSelection={userSelection} setUserSelection={setUserSelection} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
