import type { Metadata } from "next";
import "./globals.css";
import { NavbarCustom } from "./components/common/navbar";
import { Footer } from "./components/common/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Luxury Design Signs",
  description:
    "Looking for high-quality custom store signs in Ontario? Luxury Design Signs! Look no further! We design produce and install your signage!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Luxury Design Signs" />
        <meta
          property="og:description"
          content="Looking for high-quality custom store signs in Ontario? Luxury Design Signs! Look no further! We design produce and install your signage!"
        />
        <meta
          property="image"
          content="https://www.luxurydesignsigns.com/header.png"
        />
        <meta
          property="og:image"
          content="https://www.luxurydesignsigns.com/header.png"
        />
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Analytics />
        <NavbarCustom />
        {children}
        <Footer />
      </body>
      {/* AW-11360712859 */}
      <GoogleAnalytics gaId="AW-11360712859" />
    </html>
  );
}
