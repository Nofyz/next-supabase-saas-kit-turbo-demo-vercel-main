"use client";
import { useEffect, useState, ReactNode } from 'react';
import QueryProvider from './QueryProvider';
import { RootProviders } from '~/components/root-providers';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const language = 'en';
  const className = `bg-background min-h-screen antialiased __variable_549949 ${theme}`;

  if (!mounted) {
    // SSR: sempre renderiza como 'light' para evitar mismatch
    return (
      <html lang={language} className="bg-background min-h-screen antialiased __variable_549949 light">
        <body>
          <RootProviders lang={language} theme="light">
            <QueryProvider>{children}</QueryProvider>
          </RootProviders>
        </body>
      </html>
    );
  }

  // Após montagem, aplica o tema dinâmico
  return (
    <html lang={language} className={className}>
      <body>
        <RootProviders lang={language} theme={theme}>
          <QueryProvider>{children}</QueryProvider>
        </RootProviders>
      </body>
    </html>
  );
} 