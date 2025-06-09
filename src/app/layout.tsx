import Menu from '@/components/menu/Menu';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors min-h-screen`}>
        <main className="text-gray-900 dark:text-white pt-16">
          <Menu />
            {children}
          </main>
      </body>
    </html>
  );
}
