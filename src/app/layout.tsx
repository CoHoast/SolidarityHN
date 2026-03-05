import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solidarity Health Network | Benefits Solutions Since 1989",
  description: "Leading third-party administrator, benefits consultant, and full-service broker delivering comprehensive solutions since 1989. Retiree benefits, self-funded plans, and administration services.",
  keywords: "TPA, third party administrator, benefits administration, retiree healthcare, self-funded plans, employee benefits, Cleveland Ohio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
