import React from 'react';
import './globals.css';

export const metadata = {
  title: 'DEVGROUP. — Hard engineering for complex problems.',
  description:
    'Boutique software engineering consultancy. We design, build, and ship production-ready web platforms, RAG pipelines, and data-intensive applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
