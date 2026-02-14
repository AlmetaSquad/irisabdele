"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Brain,
  Leaf,
  Star,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Pain Management",
    description:
      "Relief from headaches, arthritis, back pain, neck & shoulder tension, and frozen shoulder through targeted acupuncture.",
    gradient: "linear-gradient(to bottom right, #ffe4e6, #fce7f3)",
    iconColor: "text-rose-500",
  },
  {
    icon: Sparkles,
    title: "Female Wellness",
    description:
      "Support for period pain, irregular periods, menopausal symptoms, fertility, IVF support, and pregnancy care.",
    gradient: "linear-gradient(to bottom right, #faf5ff, #ede9fe)",
    iconColor: "text-purple-500",
  },
  {
    icon: Brain,
    title: "Mental Wellbeing",
    description:
      "Holistic treatment for anxiety, stress, insomnia, fatigue, brain fog, and immune system support.",
    gradient: "linear-gradient(to bottom right, #dbeafe, #e0f2fe)",
    iconColor: "text-blue-600",
  },
  {
    icon: Leaf,
    title: "Digestive Health",
    description:
      "Natural relief for IBS symptoms, constipation, diarrhoea, nausea, and other digestive concerns.",
    gradient: "linear-gradient(to bottom right, #fff7ed, #fefce8)",
    iconColor: "text-orange-400",
  },
];

const testimonials = [
  {
    text: "Iris has an intuitive presence that makes you feel immediately calm. Her professional knowledge combined with genuine care for my progress has been transformative.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    text: "After years of chronic pain, I finally found relief through Iris's acupuncture treatments. She truly listens and tailors each session to your needs.",
    author: "James L.",
    rating: 5,
  },
  {
    text: "The facial treatments are incredible. My skin has never looked better, and the whole experience is so relaxing. Iris is truly gifted at what she does.",
    author: "Emma R.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[240px] pb-24">
        {/* Night sky background */}
        <div className="absolute inset-0 night-sky" />

        {/* Content */}
        <div className="relative text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent uppercase tracking-[0.4em] text-sm font-semibold mb-6"
          >
            Holistic Healing &middot; London
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            TCM Acupuncture,
            <br />
            Lymphatic Drainage
            <br />
            <span className="italic text-accent">&amp;</span> Facials
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Restore balance, relieve pain, and enhance your natural beauty with
            personalised Traditional Chinese Medicine treatments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-accent/60 backdrop-blur-sm text-white uppercase tracking-wider text-sm rounded-full hover:bg-accent/80 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 flex items-center justify-center gap-2"
            >
              Book a Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/treatments"
              className="px-8 py-4 border border-white/30 text-white uppercase tracking-wider text-sm rounded-full hover:bg-white/10 transition-all duration-300"
            >
              View Treatments
            </Link>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-white/40" size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="What I Treat"
            title="Holistic Treatment Areas"
            description="Whether you're seeking pain relief, emotional balance, or skin rejuvenation, I offer personalised treatments tailored to your unique needs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: service.gradient }}
                className="group p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.iconColor}`}
                >
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 bg-warm">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/iris-portrait.jpeg"
                  alt="Iris Abdele — Acupuncturist & Advanced Facialist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-pink-400/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/10 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-3">
              About Me
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dedicated to Your
              <br />
              <span className="italic">Wellbeing</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I am a qualified acupuncturist and advanced facialist, and a proud
              member of the British Acupuncture Council. With extensive training
              in Traditional Chinese Medicine, I offer holistic treatments that
              address both physical and emotional wellbeing.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              My practice in Richmond combines ancient healing wisdom with
              modern techniques, including the Dr Vodder method of Manual
              Lymphatic Drainage, to provide personalised care for each client.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm hover:text-accent transition-colors"
            >
              Learn More About Me
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 night-sky relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative">
          <SectionHeading
            subtitle="Testimonials"
            title="What My Clients Say"
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="text-accent font-semibold text-sm">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-warm">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-3">
              Ready to Begin?
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Start Your Healing Journey
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
              Book a free initial consultation to discuss your concerns and
              discover how acupuncture and holistic treatments can help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-white uppercase tracking-wider text-sm rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-lg"
              >
                Book a Consultation
              </Link>
              <a
                href="https://wa.me/447464335199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-primary/20 text-primary uppercase tracking-wider text-sm rounded-full hover:bg-primary/5 transition-all"
              >
                <MessageCircle size={16} />
                Message Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
