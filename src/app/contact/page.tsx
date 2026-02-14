"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Mail, MessageCircle, Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    contactMethod: "email",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappText = encodeURIComponent(
    `Hi Iris, I just submitted an enquiry via your website.\n\nName: ${formData.name}\nService: ${formData.service}\nMessage: ${formData.message}`
  );

  return (
    <>
      <PageHero
        title="Contact Me"
        subtitle="For appointments and enquiries, please get in touch"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-3">
                Get in Touch
              </p>
              <h2
                className="text-3xl font-light text-gray-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Let&apos;s Start Your
                <br />
                <span className="italic">Healing Journey</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                For appointments and enquiries, please contact me directly via
                email, WhatsApp, or the contact form.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:bookings@irisabdele.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-700 font-medium group-hover:text-primary transition-colors">
                    bookings@irisabdele.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/447464335199"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all text-primary">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-gray-700 font-medium group-hover:text-primary transition-colors">
                    Send a message
                  </p>
                </div>
              </motion.a>

            </div>

            {/* Treatment Room Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/treatment-room.jpeg"
                alt="Treatment room at Iris Abdele's practice"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-pink-300/15 mix-blend-multiply" />
              <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-warm rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3
                  className="text-2xl font-light text-gray-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Thank You!
                </h3>
                <p className="text-gray-500 mb-8">
                  Your message has been sent successfully. I will get back to you
                  as soon as possible.
                </p>
                <a
                  href={`https://wa.me/447464335199?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  Follow up on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-warm rounded-2xl p-8 md:p-12 space-y-6"
              >
                {error && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location of Interest
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-700"
                  >
                    <option value="">Select a location</option>
                    <option value="Richmond">Richmond</option>
                    <option value="Clapham">Clapham</option>
                    <option value="Sutton">Sutton</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="+44 ..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === "email"}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-600">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === "phone"}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-600">Phone</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell me about your concerns or what you'd like help with..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white uppercase tracking-wider text-sm rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
