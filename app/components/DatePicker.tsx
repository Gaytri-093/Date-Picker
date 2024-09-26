// app/components/DatePicker.tsx
"use client";

import { useState } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import CalendarPreview from './CalendarPreview';
import DateInput from './DateInput';

const DatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [recurrence, setRecurrence] = useState({ pattern: 'daily', interval: 1 });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Date Picker</h1>
      <DateInput label="Start Date" onChange={setStartDate} />
      <DateInput label="End Date" onChange={setEndDate} />
      <RecurrenceOptions setRecurrence={setRecurrence} />
      <CalendarPreview startDate={startDate} endDate={endDate} recurrence={recurrence} />
    </div>
  );
};

export default DatePicker;
