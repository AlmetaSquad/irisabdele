import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Iris Abdele for acupuncture, facial treatments, and MLD appointments in Richmond, London. Book via phone, email, or WhatsApp.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
