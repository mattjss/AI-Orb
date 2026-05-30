import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "AI Orb",
  description: "Search bar with an AI orb. UI experiment.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
