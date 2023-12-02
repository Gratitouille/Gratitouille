import Calendar from "./Calendar.jsx";
import Affirmation from "./Affirmation.jsx";
import GratefulPrompt from './GratefulPrompt.jsx';
import UserInput from './UserInput.jsx';
import Prompt from './Prompt.jsx';
import '../style/Journal.css';
import Stack from '@mui/material/Stack'; 
import axios from "axios";
import React, { useState, useEffect } from "react";
import gifImage from '../assets/rat-dancing.gif';

const Journal = () => {
    //setting the state of the date
    const [selectedDate, setSelectedDate] = useState(null);
    const [journalEntry, setJournalEntry] = useState({ date: null, gratefulInput: '' });
    
    // check to see if a journal entry exists...
    useEffect(() => {
        const fetchJournalEntry = async () => {
          try {
            // Make a request to check if a journal entry exists for the selected date
            const response = await axios.get(`/journal/${selectedDate.$d}`);
            console.log("response:", response.data); 
            const existingEntry = response.data;
    
            if (existingEntry) {
            //   // If entry exists, set it in state
              setJournalEntry(existingEntry);
            } else {
              // If entry does not exist, create an empty entry and save it
              const newEntry = { date: selectedDate.$d, gratefulInput: '' };
              console.log("newEntry:", newEntry);
              await axios.post('/journal', newEntry);
              setJournalEntry(newEntry);
            }
          } catch (error) {
            console.error('Error fetching or creating journal entry:', error);
          }
        };
    
        // Fetch or create journal entry when the component mounts or when the date changes
        if (selectedDate) {
          fetchJournalEntry();
        }
      }, [selectedDate]);
    
    //callback to handle date changes
    const handleDateChange = (date) => {
        setSelectedDate(date);
    // Additional logic based on the selected date (date is a Dayjs object)
    };

    return (
    <div>
        <div className="top-container">
            <h1 id="journal-text">Welcome back! Nigel is happy to see you again.</h1>  
            <img id="rat-image" src={gifImage} alt="Your GIF" />
        </div>
        <div className="journal-container">
            <Stack className="left-container" direction="column" spacing={2}>
                <Affirmation/>
                <GratefulPrompt/>
                <UserInput selectedDate={selectedDate} initialGratefulInput={journalEntry.gratefulInput} // Pass the correct initial value
/>
                {/* <Prompt/>
                <UserInput/> */}
            </Stack>
            <div className="mid-container"></div>
            <div className="right-container">
                <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />    
            </div>
            {/* Which components are based on date change? */}
        </div>
    </div>
    )
};

export default Journal; 