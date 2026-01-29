import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hitta chauffor. Hitta korning.",
  description: "En plattform dar akerier och lotsar hittar varandra direkt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${manrope.variable} ${oswald.variable} bg-[#0b0f17] text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
