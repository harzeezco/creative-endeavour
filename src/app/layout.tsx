import { IBM_Plex_Sans_Arabic } from 'next/font/google';

import Footer from '../layout/footer';
import Header from '../layout/header';
import './globals.css';

const IBM = IBM_Plex_Sans_Arabic({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='no-visible-scrollbar scroll-smooth' lang='en'>
      <body className={`${IBM.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
