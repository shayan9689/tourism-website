import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToContent from "@/components/ScrollToContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pakistan Tourism - Discover the Beauty of Pakistan",
  description: "Explore breathtaking destinations, tour packages, and travel guides for Pakistan's most beautiful places.",
  keywords: "Pakistan tourism, travel Pakistan, Pakistan destinations, tour packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className} suppressHydrationWarning>
        <ScrollToContent />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
