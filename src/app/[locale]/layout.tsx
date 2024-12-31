import { Footer, Header } from '@/layout';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { inter, nebulica } from '../font';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      className='no-visible-scrollbar scroll-smooth'
      lang={locale}
    >
      <body className={`${inter.className} ${nebulica.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
