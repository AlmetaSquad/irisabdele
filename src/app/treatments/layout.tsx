import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments & Prices",
  description:
    "Acupuncture, manual lymphatic drainage, cosmetic acupuncture, and facial massage treatments in Richmond, London. View prices and book your appointment.",
};

export default function TreatmentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
