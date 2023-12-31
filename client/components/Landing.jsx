import React from "react";
import Journal from "./Journal";
import Affirmation from "./Affirmation";
import { useNavigate } from "react-router-dom"; 

const Landing = () => {
    const navigate = useNavigate(); 

    function handleClick(){
        navigate("/journal"); 
    }
    return (
    <div>
        Landings
        <button type="button" onClick={handleClick}>
            Go home
        </button>
    </div>
    )
};

export default Landing; 