import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import '../style/Affirmation.css'

const Affirmation = () => {
    const [affirmation, setAffirmation] = useState('');

    useEffect(() => {
        const fetchAffirmation = async () => {
          try {
            //current bug - the request is sent twice? why? 
   
            // Make a request to your server to fetch the daily affirmation
            const response = await axios.get('/affirmation');
            // console.log("response:", response.data[0].affirmation);

            setAffirmation(response.data[0].affirmation);
          } catch (error) {
            console.error('Error fetching affirmation:', error);
          }
        };
        
        // Fetch affirmation when the component mounts
        fetchAffirmation();

        }, []); // Empty dependency array ensures that it runs only once on mount

    return (
    <div>
       <Box id="affirmation" sx={{ border: 1}}> {affirmation || 'Loading affirmation...'} </Box>
    </div>
    )
};

export default Affirmation;  