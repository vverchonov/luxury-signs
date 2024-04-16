import type { Metadata } from "next";
import "./globals.css";
import { NavbarCustom } from "./components/common/navbar";
import { Footer } from "./components/common/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Luxury Design Signs",
  description: "Custom signs to create revenue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <NavbarCustom />
        {children}
        <Footer />
      </body>
    </html>
  );
}
