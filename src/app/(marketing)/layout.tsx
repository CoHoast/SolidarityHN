import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="pt-18 md:pt-24">
        {children}
      </main>
      <Footer />
    </>
  );
}
