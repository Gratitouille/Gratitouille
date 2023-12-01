import React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const UserInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSaveResponse = () => {
        // Add logic to save the response to the database
        console.log('Saving response:', inputValue);
        // You can make an API call to save the response to your database here
      };

    return (
    <div>
       <TextField
        label="Journal here..."
        variant="outlined"
        multiline
        rows={4}
        value={inputValue}
        onChange={handleInputChange}
        sx={{ width: '100%' }}
      />
      <Button variant="contained" color="primary" onClick={handleSaveResponse}>
        Save Response
      </Button>
    </div>
    )
};

export default UserInput; 