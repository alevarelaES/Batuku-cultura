import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from './contexts/LanguageContext';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
      <Analytics />
    </LanguageProvider>
  );
}
