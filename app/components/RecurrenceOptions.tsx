// app/components/RecurrenceOptions.tsx
"use client";

interface RecurrenceOptionsProps {
  setRecurrence: React.Dispatch<React.SetStateAction<{ pattern: string; interval: number }>>;
}

const RecurrenceOptions: React.FC<RecurrenceOptionsProps> = ({ setRecurrence }) => {
  const handlePatternChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRecurrence(prev => ({ ...prev, pattern: e.target.value }));
  };

  const handleIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecurrence(prev => ({ ...prev, interval: Number(e.target.value) }));
  };

  return (
    <div className="my-4">
      <select onChange={handlePatternChange} className="mr-2">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <input
        type="number"
        min="1"
        onChange={handleIntervalChange}
        placeholder="Every X"
        className="border p-1"
      />
    </div>
  );
};

export default RecurrenceOptions;
