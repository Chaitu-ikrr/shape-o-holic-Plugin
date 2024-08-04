import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shape-O-Holic",
  description:
    "Elevate your designs with 140+ free, customizable SVG shapes. Seamlessly integrate these high-quality vectors for professional results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        <div className="top-glow" />
        <div className="bg-pattern" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
