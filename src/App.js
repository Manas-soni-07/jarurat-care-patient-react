import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import Patients from "./components/pages/patients/Patients";
import About from "./components/pages/about/About";

function App() {
  return (
    <> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/patients" element={<Patients />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>

  );
}

export default App;
