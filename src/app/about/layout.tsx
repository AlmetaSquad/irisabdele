import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Iris Abdele | Acupuncturist & Facialist in Richmond",
  description:
    "Learn about Iris Abdele, a qualified acupuncturist and advanced facialist in Richmond, London. BAcC member with expertise in TCM, MLD, and cosmetic acupuncture.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
