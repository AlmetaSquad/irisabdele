"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import { MapPin, Clock, Train, Car, Mail, MessageCircle, ChevronDown } from "lucide-react";

const locations = [
  {
    name: "Richmond",
    address: "50 Hill Rise, Richmond, London",
    hours: [
      { day: "Sunday", time: "10:00 am — 4:00 pm" },
    ],
    transport:
      "Approximately a 10-minute walk from Richmond Station, served by the District Line, London Overground, and National Rail. Head along George Street and up Hill Rise to reach number 50.",
    parking:
      "Nearby parking options include Paradise Road and Friars Lane, with some pay-and-display spaces available on Hill Rise itself.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.8!2d-0.301!3d51.461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s50+Hill+Rise%2C+Richmond!5e0!3m2!1sen!2suk!4v1700000000000",
  },
  {
    name: "Clapham",
    address: "Abbeville Road, Clapham, London",
    hours: [
      { day: "Thursday", time: "10:30 am — 4:30 pm" },
      { day: "Sunday", time: "10:30 am — 4:30 pm" },
    ],
    transport:
      "A short walk from Clapham South station on the Northern Line. Abbeville Road is easily accessible from both Clapham Common and Clapham South.",
    parking:
      "Street parking available on Abbeville Road and surrounding residential streets. Pay-and-display options nearby.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5!2d-0.1275!3d51.449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAbbeville+Road%2C+Clapham!5e0!3m2!1sen!2suk!4v1700000000000",
  },
  {
    name: "Sutton",
    address: "Sutton, London",
    hours: [
      { day: "Wednesday", time: "10:30 am — 4:30 pm" },
    ],
    transport:
      "Sutton station is served by National Rail with regular services from London Victoria and London Bridge.",
    parking:
      "Pay-and-display parking available in Sutton town centre and surrounding streets.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.2!2d-0.1945!3d51.3618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSutton!5e0!3m2!1sen!2suk!4v1700000000000",
  },
];

export default function LocationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <PageHero
        title="Locations"
        subtitle="Visit us at one of our three London locations"
      />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-3">
              Where to Find Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Three Locations Across <span className="italic">London</span>
            </h2>
          </div>

          <div className="space-y-4">
            {locations.map((loc, i) => (
              <div
                key={loc.name}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-warm transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-light text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {loc.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{loc.address}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={22}
                    className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-6 border-t border-gray-100">
                        <div className="grid md:grid-cols-2 gap-6 pt-6">
                          {/* Left Column */}
                          <div className="space-y-6">
                            {/* Hours */}
                            <div className="flex gap-4">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Clock size={18} className="text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">
                                  Opening Hours
                                </h4>
                                <div className="space-y-1">
                                  {loc.hours.map((h) => (
                                    <div
                                      key={h.day}
                                      className="flex justify-between gap-8 text-sm"
                                    >
                                      <span className="font-medium text-gray-700">
                                        {h.day}
                                      </span>
                                      <span className="text-gray-500">
                                        {h.time}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Transport */}
                            <div className="flex gap-4">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Train size={18} className="text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                  Public Transport
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                  {loc.transport}
                                </p>
                              </div>
                            </div>

                            {/* Parking */}
                            <div className="flex gap-4">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Car size={18} className="text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                  Parking
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                  {loc.parking}
                                </p>
                              </div>
                            </div>

                            {/* Book Button */}
                            <a
                              href="https://wa.me/447464335199"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all text-sm font-semibold uppercase tracking-wider"
                            >
                              <MessageCircle size={16} />
                              Book at {loc.name}
                            </a>
                          </div>

                          {/* Right Column - Map */}
                          <div className="rounded-xl overflow-hidden h-72 shadow-md">
                            <iframe
                              src={loc.mapUrl}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`${loc.name} location map`}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="relative py-20 px-6 night-sky overflow-hidden">
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-light text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Not Sure Which Location?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Get in touch and I&apos;ll help you find the most convenient
              location for your treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/447464335199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary uppercase tracking-wider text-sm rounded-full hover:bg-white/90 transition-all"
              >
                <MessageCircle size={16} />
                Message Me
              </a>
              <a
                href="mailto:bookings@irisabdele.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white uppercase tracking-wider text-sm rounded-full hover:bg-white/10 transition-all"
              >
                <Mail size={16} />
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
