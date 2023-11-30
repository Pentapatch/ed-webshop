import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Torkade Blommor - Prenumerera på blommor - Blombud - Blombruket",
  description:
    "Snittblommor med lång hållbarhet. Prova en bukett, skicka blombud eller prenumerera på blommor. Stort unikt utbud av torkade blommor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
