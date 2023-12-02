import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import '../style/Affirmation.css';
import Typography from '@mui/material/Typography';

const Affirmation = () => {
  const [affirmation, setAffirmation] = useState('');

  useEffect(() => {
    const fetchAffirmation = async () => {
      try {
        // Make a request to your server to fetch the daily affirmation
        const response = await axios.get('/affirmation');
        setAffirmation(response.data[0].affirmation);
      } catch (error) {
        console.error('Error fetching affirmation:', error);
      }
    };

    // Fetch affirmation when the component mounts
    fetchAffirmation();

    // Optionally, if you want to fetch affirmation on every component update, 
    // you can omit the dependency array or include necessary dependencies
  }, []); 

  return (
    <div>
        <Box textAlign = "center" padding = { 1 } sx={{ border: 1, borderRadius: 2 }}>
            <Typography fontSize = {35} fontFamily="'Nanum Pen Script', cursive">
            Affirm Yourself
            </Typography>
        </Box>
        <Box textAlign = "center" padding = { 1 } fontSize = { 22 } > 
            <Typography fontSize = {30} fontFamily="'Nanum Pen Script', cursive">
                {affirmation || 'Loading affirmation...'} 
            </Typography>
        </Box>
    </div>
  );
};

export default Affirmation;