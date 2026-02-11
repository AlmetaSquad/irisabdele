"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Clock, ArrowRight, Gift, Shield } from "lucide-react";

const treatments = [
  {
    title: "Initial Acupuncture",
    description:
      "A thorough consultation where we delve deep into your medical history, past and current symptoms, concerns, and aims. I will examine your tongue and pulse to develop a personalised treatment plan.",
    price: "£90",
    duration: "Up to 90 minutes",
    highlight: true,
    image: "/images/acupuncture-treatment.jpg",
  },
  {
    title: "Acupuncture Follow-Up",
    description:
      "Continuing your treatment journey with targeted acupuncture sessions tailored to your evolving needs. Each session builds on the progress from previous appointments.",
    price: "£70",
    duration: "Up to 60 minutes",
    highlight: false,
    image: "/images/acupuncture-closeup.jpg",
  },
  {
    title: "Facial Massage",
    description:
      "A relaxing bespoke facial massage using Traditional Chinese Medicine methods including gua sha, cupping, and moxa. Consultation required beforehand.",
    price: "£55",
    duration: "30 minutes",
    highlight: false,
    image: "/images/wellness-healing.jpg",
  },
  {
    title: "Cosmetic Acupuncture",
    description:
      "An anti-ageing facial treatment targeting fine lines and wrinkles. Includes Environ products, intradermal needles, facial massage, and LED light therapy for a complete rejuvenation experience.",
    price: "Enquire",
    duration: "90 minutes",
    highlight: true,
    image: "/images/cosmetic-acupuncture.webp",
  },
  {
    title: "Manual Lymphatic Drainage — Initial",
    description:
      "Using the renowned Dr Vodder technique, this gentle and relaxing treatment supports your body's natural detox process, reduces swelling, and promotes overall wellbeing.",
    price: "£125",
    duration: "60 minutes",
    highlight: false,
    image: "/images/cloud-calm.jpg",
  },
  {
    title: "Manual Lymphatic Drainage — Follow-Up",
    description:
      "Continued MLD sessions to build on your initial treatment, maintaining the benefits of lymphatic support and promoting ongoing recovery and wellbeing.",
    price: "£85",
    duration: "60 minutes",
    highlight: false,
    image: "/images/nature-leaves.jpg",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="Treatments & Prices"
        subtitle="Personalised care for your unique needs"
      />

      {/* Treatments Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, i) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg min-h-[380px] flex flex-col"
              >
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 ${
                  treatment.highlight
                    ? "bg-gradient-to-b from-primary/70 via-primary-dark/80 to-primary-dark/90"
                    : "bg-gradient-to-b from-black/40 via-black/55 to-black/75"
                }`} />
                <div className="relative p-8 flex flex-col flex-1 justify-end">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {treatment.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 text-white/80">
                    {treatment.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <p className="text-2xl font-bold text-white">
                      {treatment.price}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm text-white/60">
                      <Clock size={14} />
                      {treatment.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Offer */}
      <section className="py-24 px-6 bg-warm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Gift size={28} className="text-accent" />
              </div>
              <div>
                <h3
                  className="text-2xl font-light text-gray-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Treatment Package Offer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Buy 5 follow-up sessions and receive the 6th session
                  completely free. Packages must be used within 12 months of
                  purchase.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield size={14} className="text-primary" />
                  Insurance coverage available through BAcC membership
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 night-sky text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2
            className="text-3xl md:text-4xl font-light text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Book Your Treatment?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Get in touch to discuss which treatment is right for you or to
            schedule an appointment.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent/60 backdrop-blur-sm text-white uppercase tracking-wider text-sm rounded-full hover:bg-accent/80 transition-all"
          >
            Book Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
