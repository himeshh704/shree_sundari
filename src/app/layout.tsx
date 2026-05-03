import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import LuxuryNavbar from "@/components/layout/LuxuryNavbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: 'swap',
});

const jost = Jost({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shreesundari | Neha Soni MUA",
  description: "Luxury Bridal & Party Makeup Artist in Pali, Rajasthan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable} grain-bg`}>
        <LuxuryNavbar />
        <main>{children}</main>
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  );
}
