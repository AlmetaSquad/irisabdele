"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
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
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/iris.abdele.acupuncture/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
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
              <li>Acu-Facials</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                50 Hill Rise, Richmond, London
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-accent" />
                <a href="tel:+447464335199" className="hover:text-white transition-colors">
                  +44 (0)7464 335199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-accent" />
                <a href="mailto:bookings@irisabdele.com" className="hover:text-white transition-colors">
                  bookings@irisabdele.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Iris Abdele. All rights reserved.</p>
          <p>Member of the British Acupuncture Council &middot; AFN Member</p>
        </div>
      </div>
    </footer>
  );
}
