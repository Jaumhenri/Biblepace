import '../styles/globals.css';
import { CourseProvider } from '@/context/CourseContext';
import AppShell from '@/components/layout/AppShell';

export const metadata = {
  title: 'BiblePace Foundations — Formação Bíblica para Jovens Discípulos',
  description: 'Uma jornada bíblica profunda e transformadora em 24 módulos e 6 blocos para jovens discípulos.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CourseProvider>
          <AppShell>
            {children}
          </AppShell>
        </CourseProvider>
      </body>
    </html>
  );
}
