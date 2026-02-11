import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about acupuncture, facial treatments, and manual lymphatic drainage with Iris Abdele in Richmond, London.",
};

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
