import * as React from 'react';
import Calendar from "./Calendar.jsx";
import Affirmation from "./Affirmation.jsx";

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
        <label for="Journal">Journal</label>
        <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
        {/* Which components are based on date change? */}
        <Affirmation selectedDate={selectedDate} />
    </div>
    )
};

export default Journal; 