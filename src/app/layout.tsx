'use client';

import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ar'>
      <body>{children}</body>
    </html>
  );
}
