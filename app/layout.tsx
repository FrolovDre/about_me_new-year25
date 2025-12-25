import type { Metadata } from 'next';
import './globals.css';
import Snowfall from '../components/Snowfall';
import CursorFireTrail from '../components/CursorFireTrail';

export const metadata: Metadata = {
  title: 'Новогоднее портфолио',
  description: 'Праздничный лендинг-портфолио в стиле Рождества и Нового года.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Snowfall />
        <CursorFireTrail />
        {children}
      </body>
    </html>
  );
}
