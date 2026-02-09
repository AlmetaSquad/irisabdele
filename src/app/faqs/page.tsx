"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What happens at my first appointment?",
    answer:
      "A thorough consultation will take place where we delve deep into your medical history and symptoms. I will examine your tongue and pulse, which are key diagnostic tools in Traditional Chinese Medicine. This helps me develop a personalised treatment plan. Please allow up to 90 minutes for your initial visit.",
  },
  {
    question: "What does acupuncture feel like?",
    answer:
      "Acupuncture involves very thin, sterile needles. You may experience 'De Qi' sensations — often described as a light tingling, numb sensation, heaviness, or a dull ache. These are positive signs that the treatment is working. The needles remain in place for up to 30 minutes. Minor bleeding and bruising may occasionally occur but are completely normal.",
  },
  {
    question: "Is acupuncture safe?",
    answer:
      "Yes, acupuncture is very safe when performed by a qualified practitioner. I recommend only seeking treatment from practitioners who hold British Acupuncture Council membership, which requires a minimum of 3 years of training equating to 400 clinical hours. All needles used are sterile and single-use.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your individual condition and how chronic it is. Long-standing issues typically require more sessions, while some acute concerns may resolve in just 2-3 sessions. We will discuss a realistic treatment plan during your initial consultation.",
  },
  {
    question: "Can I claim on my health insurance?",
    answer:
      "Many health insurance providers cover acupuncture when performed by a BAcC member. Please check the British Acupuncture Council website for a list of approved insurers. A GP referral may be required depending on your policy.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Absolutely. All patient information is strictly confidential and protected in accordance with data protection regulations. Any file transfers require written permission from the patient.",
  },
  {
    question: "Can children receive acupuncture?",
    answer:
      "Acupuncture is not recommended for children under seven years old. For patients under 16, a parent or guardian must accompany them to the appointment and provide written consent before treatment.",
  },
  {
    question: "Do you offer fertility and pregnancy support?",
    answer:
      "Yes. I have specialist training through the Acupuncture Fertility Network covering unexplained infertility, PCOS, endometriosis, and IVF support. Acupuncture can be a wonderful complement to conventional fertility treatments.",
  },
  {
    question: "What should I do before and after treatment?",
    answer:
      "Before your session, avoid coming on an empty stomach and refrain from alcohol. After treatment, drink plenty of water and avoid vigorous exercise for the rest of the day. This allows your body to fully benefit from the treatment.",
  },
  {
    question: "Is facial acupuncture painful?",
    answer:
      "Facial acupuncture is generally not painful, though sensitivity can vary from person to person. Some clients may experience slight bruising, which can be managed with arnica or aloe vera application.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Appointments cancelled within 48 hours of the scheduled time will forfeit the deposit. I kindly ask that you provide as much notice as possible if you need to reschedule.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-gray-100"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors pr-8">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-accent flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about your treatment"
      />

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-24 px-6 bg-warm text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2
            className="text-3xl font-light text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Still Have Questions?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            I am happy to answer any questions you may have. Feel free to get in
            touch and I will get back to you as soon as possible.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 bg-primary text-white uppercase tracking-wider text-sm rounded-full hover:bg-primary-dark transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
    </>
  );
}
