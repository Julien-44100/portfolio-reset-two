// app/layout.tsx
import './globals.css';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio développeur web',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
