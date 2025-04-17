import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Calendar } from '@copa/ui';

const BookingCalendar = ({ onDatesChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    onDatesChange({ startDate, endDate });
  };

  return (
    <div className="booking-calendar flex flex-col items-center">
      <DateRangePicker
        startDate={startDate}
        startDateId="start_date_id"
        endDate={endDate}
        endDateId="end_date_id"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
        small={true}
      />
    </div>
  );
};

export default BookingCalendar;
