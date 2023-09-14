import { toastConfig } from 'react-simple-toasts';
import RootStyleRegistry from './emotion';
const url = process.env.IMG_URL
const img = `${url}/img/landing.png`



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en-US">
      <head>
        {/* Open Graph Meta Properties */}
        <meta property="og:title" content="EXPLORE TROPICA" />
        <meta property="og:description" content="Exploring Tropica: Your Gateway to a Tropical Wonderland" />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="exploretropica.com" />
      </head>
      <body suppressHydrationWarning={true}>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
