import { useState } from "react";
import Home from "./Pages/Home";

// import Profile from "./Pages/Profile";

// import "../style/App.css";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Footer2 from "./Pages/Footer2";
import Repo from "./Pages/Repo";
import Github from "./Pages/Github";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeHome from "./Pages/CodeHome";
import CertificationCourses from "./Pages/Learn/CertificationCourses";
import Articles from "./Pages/Practice/Articles";
import Problem from "./Pages/Practice/Problem";
import LanguageTracks from "./Pages/LanguageTracks";
import Java from "./Pages/Java";
import Python from "./Pages/python";
import SQL from "./Pages/SQL";
import Linux from "./Pages/Practice/Linux";
import Cpp from "./Pages/Cpp";
const App = () => {
  return (
    <div>
      <div className="overflow-y-auto">
        <>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<CodeHome />}></Route>
            <Route exact path="/Repo" element={<Repo />}></Route>
            <Route exact path="/Github" element={<Github />}></Route>
            <Route exact path="/Problem" element={<LanguageTracks />}></Route>
            <Route exact path="/JAVA" element={<Java />}></Route>
            <Route exact path="/Python" element={<Python />}></Route>
            <Route exact path="/SQL" element={<SQL />}></Route>
            <Route exact path="/Linux" element={<Linux />}></Route>
            <Route exact path="/Cpp" element={<Cpp />}></Route>

            <Route
              exact
              path="/CertiCourse"
              element={<CertificationCourses />}
            ></Route>
            <Route exact path="/Articles" element={<Articles />}></Route>
          </Routes>

          <Footer2 />
        </>
      </div>
    </div>
  );
};

export default App;
