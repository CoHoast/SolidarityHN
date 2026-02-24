import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Solidarity Health Network | Benefits Solutions Since 1989",
  description: "Leading third-party administrator, benefits consultant, and full-service broker. Comprehensive benefit packages for retiree health, self-funded plans, and more.",
  keywords: ["benefits administration", "third party administrator", "retiree health", "self-funded plans", "Cleveland benefits"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
