import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 mt-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div
            className="text-lg text-gray-700 text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 mb-6 p-4">
              Welcome to CleanX — where car care meets next-level convenience.
              We’re not just washing cars — we’re redefining how people care for
              their vehicles. With CleanX, you get professional, eco-friendly
              car washes and luxury spa treatments delivered straight to your
              doorstep, all on a simple monthly subscription that costs less
              than your weekly coffee habit. ☕🚗 Why CleanX? At CleanX, we
              believe that every car deserves premium care, no matter if you
              drive a hatchback, SUV, or a head-turning supercar. Our services
              are designed for busy people who want to keep their ride spotless
              without wasting time at wash centers or doing it themselves.
            </p>
          </motion.div>
          <motion.div
            className="text-lg text-gray-700 text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-xl font-bold playfair-display ">
              What Makes Us Different?
            </span>
            <ul className="list-disc space-y-4 pl-6 text-base text-gray-800 mt-8">
              <li>
                <strong className="text-blue-600">
                  Subscription-Powered Convenience:
                </strong>
                Forget waiting in line or remembering to book — with{" "}
                <strong>CleanX</strong>, you just subscribe once and we handle
                the rest. From weekly washes to full-body detailing, your car
                stays clean, always.
              </li>
              <li>
                <strong className="text-blue-600">Luxury Spa for Cars: </strong>
                We don’t just wash — we pamper your vehicle. From soft-touch
                foam baths to deep interior detailing, our car spa services are
                crafted to make your ride feel brand new.
              </li>
              <li>
                <strong className="text-blue-600">
                  Trained Professionals:
                </strong>
                Our team is built from the best — every CleanX washer is
                professionally trained to treat your vehicle like a Ferrari
                (even if it’s a Fiat). Quality, consistency, and care is what we
                stand for.
              </li>
              <li>
                <strong className="text-blue-600">
                  Eco-Friendly Everything:
                </strong>
                We're all about that green clean. CleanX uses biodegradable,
                toxin-free products and water-efficient methods that are far
                more sustainable than traditional car washes or home setups.
                Clean car, clean planet.
              </li>
              <li>
                <strong className="text-blue-600">Affordable Luxury:</strong>
                {""}Imagine getting your car professionally cleaned at your
                doorstep for less than a cappuccino per wash. With CleanX,
                luxury doesn’t come with a luxury price tag.
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.h1
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center">
            <img
              src="./building.png"
              alt="cleanX Office"
              className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.h1>
      </div>
    </section>
  );
};

export default About;
