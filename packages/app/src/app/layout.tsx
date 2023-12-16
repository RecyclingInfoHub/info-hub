import ThemeRegistry from '@/components/ThemeRegistry';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Recycling Info Hub',
  description: 'A hub for recycling information',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
