import RootStyleRegistry from './emotion';
const url = process.env.IMG_URL
const img = `${url}/img/landing.png`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        {/* Open Graph Meta Properties */}
        <meta property="og:title" content="EXPLORE TROPICA" />
        <meta property="og:description" content="Feel free to mix and match these phrases to create a captivating landing page for your website, Explore Tropica. Enjoy your creative process!" />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="exploretropica.com" />
      </head>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
