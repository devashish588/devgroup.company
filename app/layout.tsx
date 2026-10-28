import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DevGroup – Software Engineering & AI Integration',
  description: 'Boutique consultancy delivering production‑grade web platforms, RAG pipelines, and high‑concurrency cloud architectures.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background text-gray-900 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
