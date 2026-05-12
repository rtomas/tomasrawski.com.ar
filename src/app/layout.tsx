import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import WowInit from '@/components/WowInit';
import { siteTitle } from '@/lib/site';

export const metadata: Metadata = {
  title: siteTitle,
  description: 'Argentinean artist based in Buenos Aires.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-100">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.0/css/all.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" type="text/css" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="71418a5c-0310-400e-bc50-a62e49049a10"
        />
      </head>
      <body className="d-flex flex-column h-100">
        <main className="flex-shrink-0 container mt-5">
          <Navbar />
          {children}
        </main>

        <Script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" strategy="beforeInteractive" />
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" strategy="afterInteractive" />
        <WowInit />
      </body>
    </html>
  );
}
