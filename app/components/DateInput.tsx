// app/components/DateInput.tsx
"use client"; // Add this line

interface DateInputProps {
  label: string;
  onChange: (date: Date | null) => void;
}

const DateInput: React.FC<DateInputProps> = ({ label, onChange }) => {
  return (
    <div className="my-2">
      <label className="block">{label}</label>
      <input
        type="date"
        onChange={(e) => onChange(new Date(e.target.value))}
        className="border p-1"
      />
    </div>
  );
};

export default DateInput;
