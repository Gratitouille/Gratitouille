// import "./style/App.css";
import React from "react";
import Journal from "./components/Journal.jsx";
import Landing from "./components/Landing.jsx";
import Affirmation from "./components/Affirmation.jsx";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Landing/>}/>
              <Route path="/journal" element={<Journal/>}/>
              <Route path="/affirmation" element={<Affirmation/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
