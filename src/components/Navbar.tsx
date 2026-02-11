"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/faqs", label: "FAQs" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      {/* Logo row */}
      <div className="flex items-center justify-center h-[176px] overflow-hidden">
        <Link href="/">
          <Image
            src="/images/logo-ia.png"
            alt="Iris Abdele — Mind Body Skin"
            width={1200}
            height={400}
            className="h-[352px] w-auto"
            priority
          />
        </Link>

        {/* Mobile toggle — absolute right */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden absolute right-6 p-2 text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop nav row */}
      <nav className="hidden lg:flex items-center justify-center gap-8 border-t border-gray-100 py-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-sm uppercase tracking-wider transition-colors duration-300 text-gray-700 hover:text-primary ${
              pathname === link.href ? "font-bold" : "font-light"
            }`}
          >
            {link.label}
            {pathname === link.href && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
              />
            )}
          </Link>
        ))}
        <Link
          href="/contact"
          className="ml-4 px-6 py-2 bg-primary text-white text-sm uppercase tracking-wider rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
        >
          Book Now
        </Link>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <nav className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-lg py-2 transition-colors ${
                      pathname === link.href
                        ? "text-primary font-bold"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="text-center px-6 py-3 bg-primary text-white uppercase tracking-wider rounded-full hover:bg-primary-dark transition-all"
                >
                  Book Now
                </Link>
                <a
                  href="tel:+447464335199"
                  className="flex items-center justify-center gap-2 text-gray-600"
                >
                  <Phone size={16} /> +44 (0)7464 335199
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
