import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// SEO metadata object
export const metadata: Metadata = {
  title: 'POS SaaS - Streamline Your Business',
  description:
    'A cloud-based POS system to manage sales, inventory, and reporting. Improve your business efficiency today with our easy-to-use platform.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://slatepos.netlify.app',
    title: 'POS SaaS - Streamline Your Business',
    description:
      'A cloud-based POS system to manage sales, inventory, and reporting. Improve your business efficiency today with our easy-to-use platform.',
    siteName: 'POS SaaS',
    images: [
      {
        url: 'https://slatepos.netlify.app/pos-rocket.png',
        width: 1200,
        height: 630,
        alt: 'POS SaaS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    title: 'POS SaaS - Streamline Your Business',
    description:
      'A cloud-based POS system to manage sales, inventory, and reporting. Improve your business efficiency today with our easy-to-use platform.',
    images: ['https://slatepos.netlify.app/pos-rocket.png'],
  },
  keywords: [
    'POS SaaS',
    'Point of Sale system',
    'POS software',
    'Cloud POS',
    'inventory management',
    'sales reporting',
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" type="image/png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
