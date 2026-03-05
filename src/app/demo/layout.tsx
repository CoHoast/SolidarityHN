import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo | Solidarity Clearing House",
  description: "Experience the Solidarity Clearing House platform - enterprise-grade healthcare claims processing.",
};

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
