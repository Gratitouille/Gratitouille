import React from 'react';
import Calendar from "./Calendar.jsx";
import Affirmation from "./Affirmation.jsx";
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
        {/* <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} /> */}
        {/* Which components are based on date change? */}
        <Affirmation selectedDate={selectedDate} />
    </div>
    )
};

export default Journal; 