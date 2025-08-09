import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Toaster } from 'sonner';
import clsx from "clsx";
import { Analytics } from '@vercel/analytics/next';

import { Providers } from "./providers";


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <title> Vstore </title>
      <link rel="icon" href="/favicon.jpg" />
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div>
            <main>
              {children}
              <Analytics />
              <Toaster richColors={true} closeButton={true} theme="dark" position="top-right" />
            </main>
            <footer>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
