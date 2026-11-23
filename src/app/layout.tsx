import type { Metadata, Viewport } from "next";
import { display, body } from "./fonts";
import { meta } from "@content/site";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  title: {
    default: meta.title,
    template: `%s — ${meta.brandName}`,
  },
  description: meta.description,
  applicationName: meta.brandName,
  authors: [{ name: meta.brandName, url: meta.url }],
  creator: meta.brandName,
  publisher: meta.brandName,
  openGraph: {
    type: "website",
    locale: meta.locale,
    url: meta.url,
    siteName: meta.brandName,
    title: meta.title,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    creator: meta.twitterHandle,
  },
  // Favicon e Open Graph são servidos por file conventions do App Router:
  // `src/app/icon.svg` e `src/app/opengraph-image.tsx` (next/og).
  // Substituir o placeholder por o mark da marca do cliente.
  alternates: {
    canonical: meta.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07090F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
