import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
const url = process.env.IMG_URL
const img = `${url}/img/landing.png`

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />

      </head>
      <body suppressHydrationWarning={true}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
    
  );
}
