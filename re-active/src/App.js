import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import History from "./components/History";
import ExerciseFormPage from "./components/ExerciseFormPage";
import userSelectionData from "./components/userSelectionData";
import FilterCategory from "./components/FilterCategory";
import ExerciseSearch from "./components/ExerciseSearch";
import Results from "./components/Results";

function App() {
  const [exercisesData, setExercisesData] = useState({});
  const [userSelection, setUserSelection] = useState(userSelectionData);
  let [excerciseData, setExcerciseData] = useState([]);
  let [navUnderline, setNavUnderline] = useState("home");

  return (
    <>
      <Header navUnderline={navUnderline} setNavUnderline={setNavUnderline} />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/history"
            element={
              <History
                userSelection={userSelection}
                setUserSelection={setUserSelection}
              />
            }
          />
          <Route
            path="/exercise-form"
            element={
              <ExerciseFormPage
                userSelection={userSelection}
                setUserSelection={setUserSelection}
              />
            }
          />
          <Route
            path="/filter-category"
            element={
              <FilterCategory
                excerciseData={excerciseData}
                setExcerciseData={setExcerciseData}
              />
            }
          />
          <Route path="/exercise-search" element={<ExerciseSearch />} />
          <Route
            path="/results"
            element={
              <Results
                FilterCategory
                exerciseData={excerciseData}
                setExerciseData={setExcerciseData}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
