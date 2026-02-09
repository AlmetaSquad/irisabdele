import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Iris Abdele | Acupuncture & Advanced Facials | Richmond, London",
  description:
    "Iris Abdele offers Traditional Chinese Medicine acupuncture, manual lymphatic drainage, and advanced facial treatments in Richmond, London. Member of the British Acupuncture Council.",
  keywords:
    "acupuncture, TCM, manual lymphatic drainage, facial treatments, Richmond, London, Iris Abdele, British Acupuncture Council",
  openGraph: {
    title: "Iris Abdele | Acupuncture & Advanced Facials",
    description:
      "Traditional Chinese Medicine acupuncture, manual lymphatic drainage, and advanced facials in Richmond, London.",
    type: "website",
    locale: "en_GB",
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
      </body>
    </html>
  );
}
