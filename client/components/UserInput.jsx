import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const UserInput = ({ selectedDate, initialGratefulInput }) => {
  const [gratefulInput, setGratefulInput] = useState(initialGratefulInput || '');

  // Update the state when the initialGratefulInput prop changes
  useEffect(() => {
    setGratefulInput(initialGratefulInput || '');
  }, [initialGratefulInput]);

  const handleInputChange = (event) => {
    setGratefulInput(event.target.value);
  };

  const handleSaveResponse = async () => {
    try {
      console.log("gratefulInput:", gratefulInput);
      // Check if selectedDate is defined and not null
      if (selectedDate && selectedDate.$d) {
        // Make an API call to save the response to the database
        const response = await axios.post(`/journal/${selectedDate.$d}/save-response`, {
          gratefulInput,
        });

        console.log('Saved response:', response.data);
      } else {
        console.error('Error: selectedDate is null or undefined.');
      }
    } catch (error) {
      console.error('Error saving response:', error);
    }
  };

  return (
    <div>
      <TextField
        label="Journal here..."
        variant="outlined"
        multiline
        rows={4}
        value={gratefulInput}
        onChange={handleInputChange}
        sx={{ width: '100%' }}
      />
      <Button variant="contained" color="primary" onClick={handleSaveResponse}>
        Save Response
      </Button>
    </div>
  );
};

export default UserInput;