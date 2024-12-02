import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';
const AppLayout = dynamic(() => import('./AppLayout'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
