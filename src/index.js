import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import StudyGuide from "./components/StudyGuide";
import SetQuiz from "./components/SetQuiz";
import RandomQuiz from "./components/RandomQuiz";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/hiragana" element={<App />} />
      <Route path="/studyguide" element={<StudyGuide />} />
      <Route path="/quiz" element={<SetQuiz />} />
      <Route path="/randomQuiz" element={<RandomQuiz />} />
    </Routes>
  </BrowserRouter>
);
