import { headers } from 'next/headers';
import { ReactNode } from 'react';
import ClientLayout from './layout.client';

import { Toaster } from '@kit/ui/sonner';

import { RootProviders } from '~/components/root-providers';
import { getFontsClassName } from '~/lib/fonts';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { generateRootMetadata } from '~/lib/root-metdata';
import { getRootTheme } from '~/lib/root-theme';

import '../styles/globals.css';

export const generateMetadata = () => {
  return generateRootMetadata();
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}

async function getCspNonce() {
  const headersStore = await headers();

  return headersStore.get('x-nonce') ?? undefined;
}
