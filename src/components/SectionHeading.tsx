"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  light,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto mb-16"
    >
      {subtitle && (
        <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-3">
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-light leading-tight ${
          light ? "text-white" : "text-gray-900"
        }`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
      <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
    </motion.div>
  );
}
