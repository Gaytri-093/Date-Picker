// app/components/CalendarPreview.tsx
"use client"; // Add this line

import { calculateRecurrences } from '../utils/dateUtils';

interface CalendarPreviewProps {
  startDate: Date | null;
  endDate: Date | null;
  recurrence: { pattern: string; interval: number };
}

const CalendarPreview: React.FC<CalendarPreviewProps> = ({ startDate, endDate, recurrence }) => {
  const recurringDates = calculateRecurrences(startDate, endDate, recurrence);

  return (
    <div>
      <h2 className="text-lg font-semibold">Calendar Preview</h2>
      <ul>
        {recurringDates.map((date, index) => (
          <li key={index}>{date.toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;
