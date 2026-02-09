"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { MapPin, Clock, Train, Car, Mail } from "lucide-react";

const hours = [
  { day: "Tuesday", time: "10:00 am — 4:00 pm" },
  { day: "Thursday", time: "10:00 am — 7:00 pm" },
  { day: "Sunday", time: "10:00 am — 4:00 pm" },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        title="Location"
        subtitle="Find us in the heart of Richmond"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-10">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">Address</h3>
                <p className="text-gray-500">50 Hill Rise, Richmond, London</p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Opening Hours</h3>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-8 text-gray-500">
                      <span className="font-medium text-gray-700">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* By train */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Train size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">By Public Transport</h3>
                <p className="text-gray-500 leading-relaxed">
                  Approximately a 10-minute walk from Richmond Station, served
                  by the District Line, London Overground, and National Rail.
                  Head along George Street and up Hill Rise to reach number 50.
                </p>
              </div>
            </motion.div>

            {/* Parking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Car size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">Parking</h3>
                <p className="text-gray-500 leading-relaxed">
                  Nearby parking options include Paradise Road and Friars Lane,
                  with some pay-and-display spaces available on Hill Rise itself.
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">Email</h3>
                <a
                  href="mailto:bookings@irisabdele.com"
                  className="text-primary hover:text-accent transition-colors"
                >
                  bookings@irisabdele.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.8!2d-0.301!3d51.461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s50+Hill+Rise%2C+Richmond!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 500 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Iris Abdele Practice Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
