"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #120a2e 0%, #1a0f3d 25%, #0e1a3a 50%, #1a0f3d 75%, #0a0d28 100%)" }}>
      {/* Space glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(90,40,160,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(30,60,140,0.12) 0%, transparent 45%), radial-gradient(ellipse at 50% 80%, rgba(70,30,130,0.1) 0%, transparent 40%)" }} />
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.7) 50%, transparent 50%), radial-gradient(1px 1px at 30% 65%, rgba(255,255,255,0.5) 50%, transparent 50%), radial-gradient(1.5px 1.5px at 50% 15%, rgba(255,255,255,0.8) 50%, transparent 50%), radial-gradient(1px 1px at 70% 45%, rgba(255,255,255,0.6) 50%, transparent 50%), radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.7) 50%, transparent 50%), radial-gradient(1.5px 1.5px at 15% 85%, rgba(255,255,255,0.5) 50%, transparent 50%), radial-gradient(1px 1px at 60% 90%, rgba(255,255,255,0.6) 50%, transparent 50%), radial-gradient(1px 1px at 40% 40%, rgba(255,255,255,0.4) 50%, transparent 50%), radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,0.7) 50%, transparent 50%), radial-gradient(1.5px 1.5px at 25% 35%, rgba(255,255,255,0.6) 50%, transparent 50%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo-ia.png"
              alt="Iris Abdele — Mind Body Skin"
              width={640}
              height={212}
              className="h-48 w-auto brightness-0 invert mb-2"
            />
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/iris.abdele.acupuncture/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#a855f7] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.instagram.com/iris.abdele.acupuncture/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#a855f7] transition-colors text-sm"
              >
                Follow @iris.abdele.acupuncture
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["About", "Treatments", "FAQs", "Location", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">
              Treatments
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>TCM Acupuncture</li>
              <li>Manual Lymphatic Drainage</li>
              <li>Cosmetic Acupuncture</li>
              <li>Facial Massage</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">
              Locations
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Richmond</li>
              <li>Clapham</li>
              <li>Sutton</li>
            </ul>
          </div>
        </div>

        {/* Accreditation Logos */}
        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-center gap-8 flex-wrap">
          <div className="bg-white rounded-md px-3 py-2">
            <Image
              src="/images/bacc-member.png"
              alt="British Acupuncture Council Member"
              width={200}
              height={80}
              className="h-10 w-auto"
            />
          </div>
          <Image
            src="/images/psa-accredited.webp"
            alt="Professional Standards Authority — Accredited Register"
            width={200}
            height={80}
            className="h-12 w-auto"
          />
          <Image
            src="/images/dr-vodder-uk.webp"
            alt="Dr. Vodder School UK"
            width={120}
            height={120}
            className="h-12 w-auto"
          />
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Iris Abdele. All rights reserved.</p>
          <p>Member of the British Acupuncture Council &middot; AFN Member</p>
        </div>
      </div>
    </footer>
  );
}
