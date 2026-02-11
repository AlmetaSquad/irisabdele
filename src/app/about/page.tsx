"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { ArrowRight, Award, BookOpen, Heart, Shield } from "lucide-react";

const credentials = [
  {
    icon: Shield,
    title: "British Acupuncture Council",
    description: "Full member (MBAcC) ensuring the highest standards of practice, safety, and professional ethics.",
  },
  {
    icon: Award,
    title: "AFN Member",
    description: "Member of the Acupuncture Fertility Network, specialising in fertility and reproductive health support.",
  },
  {
    icon: BookOpen,
    title: "Dr Vodder Method",
    description: "Certified in Manual Lymphatic Drainage using the gold-standard Dr Vodder technique.",
  },
  {
    icon: Heart,
    title: "Advanced Facials",
    description: "Specialised training in cosmetic acupuncture and advanced skincare for acne-prone and problematic skin.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Me"
        subtitle="Acupuncturist & Advanced Facialist"
      />

      {/* Main About */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/iris-portrait-bw.webp"
                  alt="Iris Abdele — Acupuncturist & Advanced Facialist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-3">
              My Story
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Passion for
              <br />
              <span className="italic">Holistic Healing</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I am a qualified acupuncturist and advanced facialist based in
                Richmond, London. As a proud member of the British Acupuncture
                Council, I adhere to the highest standards of practice and
                professional ethics.
              </p>
              <p>
                My journey into Traditional Chinese Medicine began from a deep
                desire to help people find natural, lasting relief from pain,
                stress, and health challenges. I believe in treating the whole
                person — not just the symptoms — to restore balance and promote
                the body&apos;s innate ability to heal.
              </p>
              <p>
                I specialise in traditional acupuncture, acu-facials, and Manual
                Lymphatic Drainage using the renowned Dr Vodder method. Whether
                you are seeking relief from chronic pain, support through
                fertility treatment, or rejuvenation through cosmetic
                acupuncture, I tailor every session to your unique needs.
              </p>
              <p>
                My practice is a calm, safe space where you can focus entirely on
                your wellbeing. I take the time to listen, understand your
                concerns, and develop a personalised treatment plan to help you
                feel your best.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 px-6 bg-warm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-3">
              Credentials
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Professional Qualifications
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary">
                  <cred.icon size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {cred.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cred.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 px-6 night-sky text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2
            className="text-2xl md:text-3xl font-light text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/70 text-base mb-6">
            I would love to discuss how I can help you on your journey to better
            health and wellbeing.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent/60 backdrop-blur-sm text-white uppercase tracking-wider text-sm rounded-full hover:bg-accent/80 transition-all"
          >
            Get in Touch
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
