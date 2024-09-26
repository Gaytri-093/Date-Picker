// app/layout.tsx
import './globals.css'; // Import Tailwind CSS
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode; // Define the type for children
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children} {/* Render child components here */}
      </body>
    </html>
  );
}
