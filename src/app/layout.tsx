import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aisyncy Recharge',
  description: 'Recharge your mobile via WhatsApp AI ChatBot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 