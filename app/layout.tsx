import './globals.css';
import type { Metadata } from 'next';
import { Inter, Press_Start_2P } from 'next/font/google';
import { personalInfo } from '@/lib/portfolio-data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const pixel = Press_Start_2P({ weight: '400', subsets: ['latin'], variable: '--font-pixel', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://maha-portfolio.vercel.app'),
  title: `${personalInfo.name} | Retro Portfolio`,
  description: personalInfo.bio,
  openGraph: {
    title: `${personalInfo.name} | Retro Portfolio`,
    description: personalInfo.bio,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | Retro Portfolio`,
    description: personalInfo.bio,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${pixel.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans crt-scanlines">{children}</body>
    </html>
  );
}
