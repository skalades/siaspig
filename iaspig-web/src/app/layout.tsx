import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IASPIG UPI — Ikatan Alumni Survey Pemetaan Informasi Geografis',
  description: 'Platform digital resmi ikatan alumni Program Studi Survey Pemetaan Informasi Geografis (SPIG) Universitas Pendidikan Indonesia. Terhubung, berkembang, dan berdampak bersama.',
  keywords: ['alumni SPIG', 'UPI Bandung', 'GIS', 'pemetaan', 'survey', 'geospasial', 'ikatan alumni'],
  openGraph: {
    title: 'IASPIG UPI',
    description: 'Platform digital ikatan alumni SPIG UPI',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
