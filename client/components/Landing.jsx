import React from "react";
import Journal from "./Journal";
import landingImg from "../../assets/ld-img.png";
import "../style/Landing.css";
import Affirmation from "./Affirmation";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Landing = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/journal");
  }
  return (
    <div class="landing-container">
      <h1>Gratitouille</h1>

      <img src={landingImg} alt="four cartoon rats surrounding a heart"id="landing-img" />
      <Button type="button" onClick={handleClick}>
        Go home
      </Button>
      <Affirmation />
    </div>
  );
};

export default Landing;
