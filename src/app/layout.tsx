import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageProtection from "@/components/ImageProtection";

export const metadata: Metadata = {
  title: {
    default: "Iris Abdele — TCM Acupuncture & Advanced Facials | Richmond, London",
    template: "%s | Iris Abdele",
  },
  description:
    "Qualified acupuncturist and advanced facialist in Richmond, London. TCM acupuncture, manual lymphatic drainage, cosmetic acupuncture and facial treatments. BAcC member.",
  keywords: [
    "acupuncture Richmond",
    "acupuncture London",
    "TCM",
    "facial treatments Richmond",
    "manual lymphatic drainage",
    "cosmetic acupuncture",
    "MLD Richmond",
  ],
  openGraph: {
    title: "Iris Abdele — TCM Acupuncture & Advanced Facials",
    description:
      "Holistic healing in Richmond, London. TCM acupuncture, manual lymphatic drainage, cosmetic acupuncture and advanced facial treatments.",
    url: "https://irisabdele.com",
    siteName: "Iris Abdele",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ImageProtection />
      </body>
    </html>
  );
}
