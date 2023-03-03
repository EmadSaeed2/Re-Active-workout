import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import History from "./components/History";
import ExerciseFormPage from "./components/ExerciseFormPage";
import FilterCategory from "./components/FilterCategory";
import ExerciseSearch from "./components/ExerciseSearch";
import Results from "./components/Results";

function App() {
  const [exercisesData, setExercisesData] = useState({});
  const [userSelection, setUserSelection] = useState({});
  let [exerciseData, setExerciseData] = useState([]);
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
                exerciseData={exerciseData}
                setExerciseData={setExerciseData}
              />
            }
          />
          <Route
            path="/filter-category"
            element={
              <FilterCategory
                exerciseData={exerciseData}
                setExerciseData={setExerciseData}
              />
            }
          />
          <Route
            path="/exercise-search"
            element={
              <ExerciseSearch
                exerciseData={exerciseData}
                setExerciseData={setExerciseData}
              />
            }
          />
          <Route
            path="/results"
            element={
              <Results
                FilterCategory
                exerciseData={exerciseData}
                setExerciseData={setExerciseData}
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
