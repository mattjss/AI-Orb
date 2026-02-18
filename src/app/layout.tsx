import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Orb",
  description: "Search bar with an AI orb. UI experiment.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
