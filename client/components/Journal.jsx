import React from 'react';
import Calendar from "./Calendar.jsx";
import Affirmation from "./Affirmation.jsx";
import GratefulPrompt from './GratefulPrompt.jsx';
import UserInput from './UserInput.jsx';
import Prompt from './Prompt.jsx';
import '../style/Journal.css';
import { useState } from 'react';

const Journal = () => {
    //setting the state of the date
    const [selectedDate, setSelectedDate] = useState(null);

    //callback to handle date changes
    const handleDateChange = (date) => {
        setSelectedDate(date);
    // Additional logic based on the selected date (date is a Dayjs object)
    };

    return (
    <div>
        <h1>Journal</h1>
        <div className="journal-container">
            <div className="left-container">
                <Affirmation selectedDate={selectedDate} />
                <GratefulPrompt/>
                <UserInput/>
                <Prompt/>
                <UserInput/>
            </div>
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