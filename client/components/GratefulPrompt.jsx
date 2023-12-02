import React from "react";
import Box from '@mui/material/Box';

const GratefulPrompt = () => {
    return (
    <div className = "grateful-prompt-container">
        <Box fontSize = { 25 } textAlign = "center" sx={{ border: 1, borderRadius: 1}}> Daily Prompt</Box>
        <Box fontSize = { 22 } textAlign = "center"> What are three things you're grateful for today?  </Box>
    </div>
    )
};

export default GratefulPrompt; 