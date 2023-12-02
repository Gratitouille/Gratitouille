import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const GratefulPrompt = () => {
    return (
    <div className = "grateful-prompt-container">
        <Box padding = { 1 } textAlign = "center" sx={{ border: 1, borderRadius: 2}}> 
            <Typography fontSize = {35} fontFamily="'Nanum Pen Script', cursive">
                Daily Prompt
            </Typography>
        </Box>
        <Box padding = { 1 } textAlign = "center">
            <Typography fontSize = {30} fontFamily="'Nanum Pen Script', cursive">
                What are three things you're grateful for today?  
            </Typography>
        </Box>
    </div>
    )
};

export default GratefulPrompt; 