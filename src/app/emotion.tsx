'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider, Notification } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <html lang='en-US'>
      <head />
      <body suppressHydrationWarning={true}>
        <CacheProvider value={cache}>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            fontFamily: "Geneva",
            fontFamilyMonospace: "Monaco, Courier, monospace",
            headings: { fontFamily: "Impact" },
          }}>
            {children}
          </MantineProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
