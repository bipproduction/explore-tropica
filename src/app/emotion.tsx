'use client';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { toastConfig } from 'react-simple-toasts';

// import '@mantine/notifications/styles.css';

toastConfig({ theme: 'dark' });
export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en-US'>
      <head />
      <body suppressHydrationWarning={true}>
        <ColorSchemeScript defaultColorScheme="auto" />
        <MantineProvider defaultColorScheme="auto" >
          {children}

        </MantineProvider>
      </body>
    </html>
  );
}
