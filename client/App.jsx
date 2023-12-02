// import "./style/App.css";
import React from "react";
import Journal from "./components/Journal.jsx";
import Landing from "./components/Landing.jsx";
import Affirmation from "./components/Affirmation.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUpContainer.jsx";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Your custom primary color
    },
    secondary: {
      main: "#2196f3", // Your custom secondary color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/affirmation" element={<Affirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
