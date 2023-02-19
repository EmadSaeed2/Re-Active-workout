import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import History from "./components/History";
import ExerciseForm from "./components/ExerciseFormPage";

function App() {
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
