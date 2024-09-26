// app/page.tsx
import DatePicker from './components/DatePicker';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <DatePicker />
    </div>
  );
}
