import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import '../style/Affirmation.css';

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
        <Box textAlign = "center" padding = { 1 } fontSize = {25} sx={{ border: 1, borderRadius: 1 }}>Affirm Yourself</Box>
        <Box textAlign = "center" padding = { 1 } fontSize = { 22 } > {affirmation || 'Loading affirmation...'} </Box>
    </div>
  );
};

export default Affirmation;