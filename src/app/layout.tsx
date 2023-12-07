import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naturliga Torkade Blommor - Stort Unikt Utbud - Blombruket",
  description:
    "Upptäck vårt stora sortiment av torkade blommor. Naturliga blommor odlade i Europa. Välj storlek på din bunt och gör din egen torkade bukett.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ipn6kqb.css"
        ></link>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
