import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location — Richmond, London",
  description:
    "Find Iris Abdele's acupuncture and facial treatment practice at 50 Hill Rise, Richmond, London. Opening hours, directions, and parking information.",
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
