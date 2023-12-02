import React from "react";
import { useNavigate } from "react-router-dom";
import landingImg from "../../assets/ld-img.png";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LoginIcon from "@mui/icons-material/Login";
import "../style/Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  function handleClick() {
    navigate("/login");
  }

  return (
    <>
      <div id="login">
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            color="main"
            variant="contained"
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              handleClick();
            }}
          >
            <BottomNavigationAction label="Login" icon={<LoginIcon />} />
          </BottomNavigation>
        </Box>
      </div>
      <div className="landing-container">
        <h1>Gratitouille</h1>
        <img
          src={landingImg}
          alt="four cartoon rats surrounding a heart"
          id="landing-img"
        />
        <p>
          Rats in New York City are thriving. Have you asked yourself why? They
          focus on the positives in life. Provide yourself the compassion that
          you deserve. Journal daily using Gratitouille.{" "}
        </p>
        {/* 
        <Button type="button" onClick={handleClick}>
          Go home
        </Button>
        <Affirmation />
      */}
      </div>
    </>
  );
};

export default Landing;
