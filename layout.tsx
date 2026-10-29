import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { DiscordContextProvider } from '@/contexts/DiscordContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'F2 TALK — Söhbət və icma',
  description: 'F2 TALK — dostlarla söhbət, qruplar və icma üçün platforma.',
  applicationName: 'F2 TALK',
  icons: { icon: '/f2-talk-logo.svg', shortcut: '/f2-talk-logo.svg', apple: '/f2-talk-logo.svg' },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="az">
        <DiscordContextProvider>
          <body className={inter.className}>{children}</body>
        </DiscordContextProvider>
      </html>
    </ClerkProvider>
  );
}
