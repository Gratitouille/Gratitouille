import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// The selectedDate and onDateChange functions are passed in as props from the parent component
const Calendar = ({ selectedDate, onDateChange }) => {
    return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* when users click on the date, the state is updated with the data from the clicked date */}
            <DateCalendar date={selectedDate} onChange={handleDateChange}
            />
        </LocalizationProvider>
    </div>
    )
};

export default Calendar; 